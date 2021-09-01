# Introduction

Welcome to the Municipality Dashboard API! You can use our API to access Municipality Dashboard API endpoints, which can get information on various
statistics based on Makani database.

# Authentication

> Example code shows how to use the authentication tokens

```javascript
// save the tokens somewhere (localStorage, memory, where you see fit)
// it is better not to use cookies, because they're vulnerable to XSS attacks
let token = "";
let refreshToken = "";

function injectAuthorizationHeader(options, token) {
  if (!token) return options;

  if (options) {
    if (options.headers) options.headers.Authorization = `bearer ${token}`;
    else options.headers = { Authorization: `bearer ${token}` };
  } else {
    options = { headers: { Authorization: `bearer ${token}` } };
  }

  return options;
}

async function apiCall(url, options) {
  // inject the token into headers as bellow (or as you see fit)
  options = injectAuthorizationHeader(options, token);

  // call the api
  let res = await fetch(url, options);

  // if the api returns status code 401, the token is missing or expired
  if (res.status === 401) {
    if (!refreshToken) {
      return res.json(); // the user should be redirected to login page
    }

    const refreshRes = await fetch("https://{BASE_URL}/api/auth/refresh", {
      method: "POST",
      headers: {
        Authorization: `bearer ${refreshToken}`,
      },
    });

    // if token refreshed successfully, store the new tokens, and call the api again
    if (refreshRes.status === 200) {
      // you should store the new tokens instead of the old ones
      const tokens = await refreshRes.json();
      token = tokens.token;
      refreshToken = tokens.refreshToken;

      // call the api again
      options = injectAuthorizationHeader(options, token);
      res = await fetch(url, options);

      return res.json();
    } else {
      // the refresh token is either expired or not valid, the user needs to login again
      return res.json();
    }
  }

  // you can handle errors in here (403, 422, etc.)

  return res.json();
}
```

> You can call this api like this:

```javascript
const res = await apiCall("<URL>", {
  method: "POST",
  body: {
    /* body params */
  },
});
```

We use JWT tokens to allow access to the API, you send the user credentials to the login URL, and if they are correct the API will return
two tokens, a short lived **token** that identify the user (it expires after 5 minutes), and a **refreshToken** which will be used to refresh the expired token.

The API expects the token to be passed as a header **Authorization** like below:

`Authorization: bearer <token>`

<aside class="notice">
You must replace <code>&lt;token&gt;</code> with token returned from the login API.
</aside>

When sending requests to the API with an expired token, the API will return a status code 401 (Unauthorized), the front-end then should send a refresh request,
and if that succeeded, then the front-end stores the new token instead of the old ones, and re-sends the failed request.
But if the refresh request fails, the user should be redirected to the login page.

## Create first system user

```javascript
const options = {
  method: "POST",
  body: {
    fullname: "Ahmed Mohamed",
    phone: "0912345678",
    username: "ahmed",
    email: "ahmed@lamah.com",
    password: "password",
  },
};

const res = await fetch("https://{BASE_URL}/api/auth/firstuser", options);
```

> The above command returns JSON structured like this:

```json
{
  "id": "6a7dad58-78d9-47cb-be69-454add09135c"
}
```

This endpoint creates the first user in the system, which will be the admin by default.

### HTTP Request

`POST https://{BASE_URL}/api/auth/firstuser`

### Data Parameters

| Parameter | Description                       |
| --------- | --------------------------------- |
| fullname  | The full name of the user         |
| phone     | Libyana or Madar phone number     |
| username  | User's username                   |
| email     | User's email, (used for login)    |
| password  | User's password, (used for login) |

<aside class="notice">
The field <b>phone</b> should be a valid Libyana or Madar phone number.
</aside>

<aside class="warning">
This endpoint works only once, to create the first user.
</aside>

## Login

> To authorize, use this code:

```javascript
const options = {
  method: "POST",
  body: {
    email: "email@lamah.com",
    password: "password",
  },
};

const res = await fetch("https://{BASE_URL}/api/auth/login", options);

const { token, refreshToken } = res.data;
```

> The above command returns JSON structured like this:

```json
{
  "token": "<token>",
  "refreshToken": "<token>"
}
```

This endpoint authenticates the user, and returns access tokens.

### HTTP Request

`POST https://{BASE_URL}/api/auth/login`

### DATA Parameters

| Parameter | Description              |
| --------- | ------------------------ |
| email     | The email of the user    |
| password  | The password of the user |

## Refresh Token

Check if the user is still valid, and not logged in from another device, and it will return new token.

Make sure to set the refreshToken in the authorization header instead of the normal token.

```javascript
const options = {
  method: "POST",
  headers: {
    Authorization: "bearer <refreshToken>",
  },
};
const res = await fetch("https://{BASE_URL}/api/auth/refresh", options);

const { token, refreshToken } = res.data;
```

> The above command returns JSON structured like this:

```json
{
  "token": "<token>",
  "refreshToken": "<token>"
}
```

## Confirm user

```javascript
const options = {
  method: "POST",
  body: {
    password: "password",
  },
};

const res = await fetch("https://{BASE_URL}/api/auth/confirm", options);
```

> The above command return JSON structured like this:

```json
{
  "success": true
}
```

This endpoint is used to confirm the person using the API is the user who logged in.

### HTTP Request

`POST https://{BASE_URL}/api/auth/confirm`

### DATA Parameters

| Parameter | Description                   |
| --------- | ----------------------------- |
| password  | The logged in user's password |

## Logout

```javascript
const options = {
  method: "POST",
};

const res = await fetch("https://{BASE_URL}/api/auth/logout", options);
```

> The above command return JSON structured like this:

```json
{
  "success": true
}
```

This endpoint is used to logout the current user, by invalidating his tokens, the front-end should clear the saved tokens.

### HTTP Request

`POST https://{BASE_URL}/api/auth/logout`

## ME

```javascript
const options = {
  method: "GET",
};

const res = await fetch("https://{BASE_URL}/api/auth/me", options);
```

> The above command return JSON structured like this:

```json
{
  "id": "bfade1d3-0cf2-40cb-a306-0bb8b7366a4b",
  "fullname": "Misurata Supervisor",
  "email": "m@m.com",
  "phone": "0913215465",
  "username": "misurata_super",
  "municipality": "c60aa045-74fe-45e9-be49-03f8c500926f",
  "role": "Supervisor",
  "createdAt": "2021-08-29T12:25:17.235Z",
  "updatedAt": "2021-09-01T22:17:05.606Z",
  "deleted": false
}
```

This endpoint is used to return the logged-in user's information.

### HTTP Request

`GET https://{BASE_URL}/api/auth/me`
