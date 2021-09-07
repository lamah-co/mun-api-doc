---
title: Api Explorer v1.0.0
language_tabs:
  - javascript: JavaScript
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="api-explorer">Introduction</h1>

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

<h1 id="api-explorer-admin">Admin</h1>

## get__api_admin_users-count

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/admin/users-count',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`GET /api/admin/users-count`

> Example responses

> 200 Response

```json
[
  {
    "count": 0,
    "municipalityId": "string"
  }
]
```

<h3 id="get__api_admin_users-count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_admin_users-count-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UsersCountDto](#schemauserscountdto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; count|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; municipalityId|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_admin_monthly-income

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/admin/monthly-income',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`GET /api/admin/monthly-income`

> Example responses

> 200 Response

```json
[
  {
    "month": "2019-08-24T14:15:22Z",
    "amount": 0
  }
]
```

<h3 id="get__api_admin_monthly-income-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_admin_monthly-income-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MonthlyIncomeDto](#schemamonthlyincomedto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; month|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; amount|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_admin_yearly-income

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/admin/yearly-income',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`GET /api/admin/yearly-income`

> Example responses

> 200 Response

```json
[
  {
    "year": "2019-08-24T14:15:22Z",
    "amount": 0
  }
]
```

<h3 id="get__api_admin_yearly-income-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_admin_yearly-income-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[YearlyIncomeDto](#schemayearlyincomedto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; year|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; amount|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_admin_stats

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/admin/stats',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`GET /api/admin/stats`

> Example responses

> 200 Response

```json
{
  "municipalitiesCount": 0,
  "usersCount": 0,
  "regionsCount": 0,
  "income": 0
}
```

<h3 id="get__api_admin_stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[StatsDo](#schemastatsdo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-auth">Auth</h1>

## post__api_auth_firstuser

> Code samples

```javascript
const inputBody = {
  "fullname": "string",
  "phone": "string",
  "username": "string",
  "email": "string",
  "password": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/auth/firstuser',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Public]</p>

### HTTP Request

`POST /api/auth/firstuser`

> Body parameter

```json
{
  "fullname": "string",
  "phone": "string",
  "username": "string",
  "email": "string",
  "password": "string"
}
```

```yaml
fullname: string
phone: string
username: string
email: string
password: string

```

<h3 id="post__api_auth_firstuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; fullname|body|string|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; phone|body|string|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; username|body|string|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; email|body|string|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; password|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_auth_firstuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_auth_login

> Code samples

```javascript
const inputBody = {
  "email": "string",
  "password": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/auth/login',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Public]</p>

### HTTP Request

`POST /api/auth/login`

> Body parameter

```json
{
  "email": "string",
  "password": "string"
}
```

```yaml
email: string
password: string

```

<h3 id="post__api_auth_login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; email|body|string|false|none|
|&nbsp;&nbsp;&nbsp;&nbsp; password|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "token": "string",
  "refreshToken": "string"
}
```

<h3 id="post__api_auth_login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[TokensDto](#schematokensdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_auth_refresh

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/auth/refresh',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[RefreshToken]</p>

### HTTP Request

`POST /api/auth/refresh`

> Example responses

> 200 Response

```json
{
  "token": "string",
  "refreshToken": "string"
}
```

<h3 id="post__api_auth_refresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[TokensDto](#schematokensdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_auth_confirm

> Code samples

```javascript
const inputBody = {
  "password": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/auth/confirm',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[AnyUser]</p>

### HTTP Request

`POST /api/auth/confirm`

> Body parameter

```json
{
  "password": "string"
}
```

```yaml
password: string

```

<h3 id="post__api_auth_confirm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConfirmPasswordDto](#schemaconfirmpassworddto)|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="post__api_auth_confirm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[SuccessDto](#schemasuccessdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_auth_logout

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/auth/logout',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[AnyUser]</p>

### HTTP Request

`POST /api/auth/logout`

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="post__api_auth_logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[SuccessDto](#schemasuccessdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_auth_me

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/auth/me',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[AnyUser]</p>

### HTTP Request

`GET /api/auth/me`

> Example responses

> 200 Response

```json
{
  "id": "string",
  "fullname": "string",
  "email": "string",
  "phone": "string",
  "username": "string",
  "municipality": "string",
  "role": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string"
}
```

<h3 id="get__api_auth_me-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[UserDto](#schemauserdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-buildings">Buildings</h1>

## get__api_buildings_municipality_{pid}_buildings

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/buildings/municipality/{pid}/buildings',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`GET /api/buildings/municipality/{pid}/buildings`

<h3 id="get__api_buildings_municipality_{pid}_buildings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|offset|query|number|false|none|
|limit|query|number|false|none|
|order|query|string|false|none|
|filter|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "makani_id": 0,
    "name": "string",
    "description": "string",
    "licenseState": "string",
    "subClassification": "string"
  }
]
```

<h3 id="get__api_buildings_municipality_{pid}_buildings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_buildings_municipality_{pid}_buildings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ListBuildingsDto](#schemalistbuildingsdto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; makani_id|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; name|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; description|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; licenseState|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; subClassification|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_buildings_municipality_{pid}_buildings_search

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/buildings/municipality/{pid}/buildings/search?s=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`GET /api/buildings/municipality/{pid}/buildings/search`

<h3 id="get__api_buildings_municipality_{pid}_buildings_search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|s|query|string|true|none|
|offset|query|number|false|none|
|limit|query|number|false|none|
|order|query|string|false|none|
|filter|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "makani_id": 0,
    "name": "string",
    "description": "string",
    "licenseState": "string",
    "subClassification": "string"
  }
]
```

<h3 id="get__api_buildings_municipality_{pid}_buildings_search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_buildings_municipality_{pid}_buildings_search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ListBuildingsDto](#schemalistbuildingsdto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; makani_id|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; name|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; description|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; licenseState|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; subClassification|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_buildings_municipality_{pid}_buildings_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/buildings/municipality/{pid}/buildings/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`GET /api/buildings/municipality/{pid}/buildings/{id}`

<h3 id="get__api_buildings_municipality_{pid}_buildings_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "makani_id": 0,
  "name": "string",
  "description": "string",
  "email": "string",
  "website": "string",
  "phone": "string",
  "b_id": "string",
  "zip_id": "string",
  "coordinates": "string",
  "floorsAboveGround": 0,
  "floorsUnderGround": 0,
  "licenseState": "string",
  "subClassification": "string",
  "classification": "string"
}
```

<h3 id="get__api_buildings_municipality_{pid}_buildings_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[BuildingDetails](#schemabuildingdetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-municipalities-subscriptions">Municipalities Subscriptions</h1>

## post__api_municipalities_{pid}_subscriptions_subscribe

> Code samples

```javascript
const inputBody = {
  "planId": "string",
  "amountPaid": 0,
  "representative": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/subscriptions/subscribe',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, System]</p>

### HTTP Request

`POST /api/municipalities/{pid}/subscriptions/subscribe`

> Body parameter

```json
{
  "planId": "string",
  "amountPaid": 0,
  "representative": "string"
}
```

```yaml
planId: string
amountPaid: 0
representative: string

```

<h3 id="post__api_municipalities_{pid}_subscriptions_subscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|body|body|object|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; planId|body|string|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; amountPaid|body|number|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; representative|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_municipalities_{pid}_subscriptions_subscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_municipalities_{pid}_subscriptions_change

> Code samples

```javascript
const inputBody = {
  "planId": "string",
  "amountPaid": 0,
  "representative": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/subscriptions/change',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, System]</p>

### HTTP Request

`POST /api/municipalities/{pid}/subscriptions/change`

> Body parameter

```json
{
  "planId": "string",
  "amountPaid": 0,
  "representative": "string"
}
```

```yaml
planId: string
amountPaid: 0
representative: string

```

<h3 id="post__api_municipalities_{pid}_subscriptions_change-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|body|body|object|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; planId|body|string|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; amountPaid|body|number|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; representative|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_municipalities_{pid}_subscriptions_change-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_municipalities_{pid}_subscriptions_active-subscription

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/subscriptions/active-subscription',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`GET /api/municipalities/{pid}/subscriptions/active-subscription`

<h3 id="get__api_municipalities_{pid}_subscriptions_active-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "start": "2019-08-24T14:15:22Z",
  "actionsQouta": 0,
  "plan": "string",
  "municipality": "string",
  "representative": "string",
  "lastUpdated": "2019-08-24T14:15:22Z",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

<h3 id="get__api_municipalities_{pid}_subscriptions_active-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[SubscriptionDto](#schemasubscriptiondto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-settings">Settings</h1>

## post__api_settings

> Code samples

```javascript
const inputBody = {
  "aboutSystem": "string",
  "aboutPlans": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/settings',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[System, Admin]</p>

### HTTP Request

`POST /api/settings`

> Body parameter

```json
{
  "aboutSystem": "string",
  "aboutPlans": "string"
}
```

```yaml
aboutSystem: string
aboutPlans: string

```

<h3 id="post__api_settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SettingsDto](#schemasettingsdto)|true|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="post__api_settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[SuccessDto](#schemasuccessdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_settings

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/settings',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[AnyUser]</p>

### HTTP Request

`GET /api/settings`

> Example responses

> 200 Response

```json
{
  "aboutSystem": "string",
  "aboutPlans": "string"
}
```

<h3 id="get__api_settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[SettingsDto](#schemasettingsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-statistics">Statistics</h1>

## get__api_statistics_municipality_{pid}_subclassifications

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/statistics/municipality/{pid}/subclassifications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`GET /api/statistics/municipality/{pid}/subclassifications`

<h3 id="get__api_statistics_municipality_{pid}_subclassifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "all": 0,
  "health": 0,
  "pharmacies": 0,
  "non_governmental": 0,
  "homes": 0,
  "apartment_complex": 0,
  "hotels": 0,
  "lands": 0,
  "education": 0,
  "mosques_religious": 0,
  "colleges": 0,
  "bakeries": 0,
  "resturants_cafes": 0,
  "companies": 0,
  "factories": 0,
  "commercial": 0,
  "banks": 0,
  "governmental": 0,
  "parking": 0,
  "gas_stations": 0,
  "ports": 0,
  "entertainment": 0,
  "sports": 0,
  "parks": 0,
  "other": 0
}
```

<h3 id="get__api_statistics_municipality_{pid}_subclassifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[SubClassificationStatsDto](#schemasubclassificationstatsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_statistics_municipality_{pid}_classifications

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/statistics/municipality/{pid}/classifications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`GET /api/statistics/municipality/{pid}/classifications`

<h3 id="get__api_statistics_municipality_{pid}_classifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "all": 0,
  "health": 0,
  "civil": 0,
  "realestate": 0,
  "religious_education": 0,
  "economy": 0,
  "governmental": 0,
  "entertainment": 0,
  "other": 0,
  "countByMonth": [
    {
      "month": "2019-08-24T14:15:22Z",
      "count": 0
    }
  ]
}
```

<h3 id="get__api_statistics_municipality_{pid}_classifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[ClassificationStatsDto](#schemaclassificationstatsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_statistics_region_{pid}_subclassifications

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/statistics/region/{pid}/subclassifications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`GET /api/statistics/region/{pid}/subclassifications`

<h3 id="get__api_statistics_region_{pid}_subclassifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "all": 0,
  "health": 0,
  "pharmacies": 0,
  "non_governmental": 0,
  "homes": 0,
  "apartment_complex": 0,
  "hotels": 0,
  "lands": 0,
  "education": 0,
  "mosques_religious": 0,
  "colleges": 0,
  "bakeries": 0,
  "resturants_cafes": 0,
  "companies": 0,
  "factories": 0,
  "commercial": 0,
  "banks": 0,
  "governmental": 0,
  "parking": 0,
  "gas_stations": 0,
  "ports": 0,
  "entertainment": 0,
  "sports": 0,
  "parks": 0,
  "other": 0
}
```

<h3 id="get__api_statistics_region_{pid}_subclassifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[SubClassificationStatsDto](#schemasubclassificationstatsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_statistics_region_{pid}_classifications

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/statistics/region/{pid}/classifications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`GET /api/statistics/region/{pid}/classifications`

<h3 id="get__api_statistics_region_{pid}_classifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "all": 0,
  "health": 0,
  "civil": 0,
  "realestate": 0,
  "religious_education": 0,
  "economy": 0,
  "governmental": 0,
  "entertainment": 0,
  "other": 0,
  "countByMonth": [
    {
      "month": "2019-08-24T14:15:22Z",
      "count": 0
    }
  ]
}
```

<h3 id="get__api_statistics_region_{pid}_classifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[ClassificationStatsDto](#schemaclassificationstatsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_statistics_municipality_{pid}_map

> Code samples

```javascript
const inputBody = {
  "classifications": {
    "health": true,
    "civil": true,
    "realestate": true,
    "religious": true,
    "economy": true,
    "governmental": true,
    "entertainment": true,
    "other": true
  },
  "area": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ]
    ]
  }
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/statistics/municipality/{pid}/map',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`POST /api/statistics/municipality/{pid}/map`

> Body parameter

```json
{
  "classifications": {
    "health": true,
    "civil": true,
    "realestate": true,
    "religious": true,
    "economy": true,
    "governmental": true,
    "entertainment": true,
    "other": true
  },
  "area": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ]
    ]
  }
}
```

```yaml
classifications:
  health: true
  civil: true
  realestate: true
  religious: true
  economy: true
  governmental: true
  entertainment: true
  other: true
area:
  type: Point
  bbox:
    - 0
  coordinates:
    - - - - 0
          - 0
        - - 0
          - 0
        - - 0
          - 0
        - - 0
          - 0

```

<h3 id="post__api_statistics_municipality_{pid}_map-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|body|body|[MapDto](#schemamapdto)|true|none|

> Example responses

> 200 Response

```json
{
  "area": 0,
  "buildings": [
    {
      "id": "string",
      "coordinates": {
        "type": "Point",
        "bbox": [
          0
        ],
        "coordinates": [
          0,
          0
        ]
      },
      "subClassification": "string"
    }
  ],
  "stats": {
    "health": {
      "health": 0,
      "pharmacies": 0
    },
    "civil": {
      "non_governmental": 0
    },
    "realestate": {
      "homes": 0,
      "apartment_complex": 0,
      "hotels": 0,
      "lands": 0
    },
    "religious_education": {
      "education": 0,
      "mosques_religious": 0,
      "colleges": 0
    },
    "economy": {
      "bakeries": 0,
      "resturants_cafes": 0,
      "companies": 0,
      "factories": 0,
      "commercial": 0,
      "banks": 0
    },
    "governmental": {
      "governmental": 0,
      "parking": 0,
      "gas_stations": 0,
      "ports": 0
    },
    "entertainment": {
      "entertainment": 0,
      "sports": 0,
      "parks": 0
    },
    "other": {
      "other": 0
    }
  }
}
```

<h3 id="post__api_statistics_municipality_{pid}_map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[MapStatsDto](#schemamapstatsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_statistics_municipality_{pid}_houses

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/statistics/municipality/{pid}/houses',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`GET /api/statistics/municipality/{pid}/houses`

<h3 id="get__api_statistics_municipality_{pid}_houses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "homes": 0,
  "apartmentComplex": 0,
  "area": 0
}
```

<h3 id="get__api_statistics_municipality_{pid}_houses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[HousesStatsDto](#schemahousesstatsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_statistics_municipality_{pid}_houses

> Code samples

```javascript
const inputBody = {
  "type": "Point",
  "bbox": [
    0
  ],
  "coordinates": [
    [
      [
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ]
      ]
    ]
  ]
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/statistics/municipality/{pid}/houses',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`POST /api/statistics/municipality/{pid}/houses`

> Body parameter

```json
{
  "type": "Point",
  "bbox": [
    0
  ],
  "coordinates": [
    [
      [
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ]
      ]
    ]
  ]
}
```

```yaml
type: Point
bbox:
  - 0
coordinates:
  - - - - 0
        - 0
      - - 0
        - 0
      - - 0
        - 0
      - - 0
        - 0

```

<h3 id="post__api_statistics_municipality_{pid}_houses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|body|body|[MultiPolygon](#schemamultipolygon)|true|none|

> Example responses

> 200 Response

```json
{
  "homes": 0,
  "apartmentComplex": 0,
  "area": 0
}
```

<h3 id="post__api_statistics_municipality_{pid}_houses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[HousesStatsDto](#schemahousesstatsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_statistics_region_{pid}_houses

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/statistics/region/{pid}/houses',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`GET /api/statistics/region/{pid}/houses`

<h3 id="get__api_statistics_region_{pid}_houses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "homes": 0,
  "apartmentComplex": 0,
  "area": 0
}
```

<h3 id="get__api_statistics_region_{pid}_houses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[HousesStatsDto](#schemahousesstatsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-users">Users</h1>

## post__api_users_{pid}_uploadprofile

> Code samples

```javascript
const inputBody = {
  "file": "string"
};
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/users/{pid}/uploadprofile',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[ResourceOwner]</p>

### HTTP Request

`POST /api/users/{pid}/uploadprofile`

> Body parameter

```yaml
file: string

```

<h3 id="post__api_users_{pid}_uploadprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|body|body|object|true|none|
|&nbsp;&nbsp;&nbsp;&nbsp; file|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="post__api_users_{pid}_uploadprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[SuccessDto](#schemasuccessdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_users

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/users',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[System, Admin]</p>

### HTTP Request

`GET /api/users`

<h3 id="get__api_users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|number|false|none|
|limit|query|number|false|none|
|filter|query|string|false|none|
|select|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "fullname": "string",
    "phone": "string",
    "email": "string",
    "username": "string",
    "role": "string",
    "municipality": "string",
    "address": "string",
    "profilePicture": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "notes": "string",
    "id": "string"
  }
]
```

<h3 id="get__api_users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserDto1](#schemauserdto1)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; fullname|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; phone|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; email|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; username|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; role|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; municipality|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; address|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; profilePicture|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; createdAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; updatedAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; deleted|boolean|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; notes|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_users

> Code samples

```javascript
const inputBody = {
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "password": "string",
  "status": "Active",
  "role": "Member",
  "municipality": "string",
  "address": "string",
  "notes": "string",
  "transactions": [
    "string"
  ],
  "requests": [
    "string"
  ]
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/users',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[System, Admin]</p>

### HTTP Request

`POST /api/users`

> Body parameter

```json
{
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "password": "string",
  "status": "Active",
  "role": "Member",
  "municipality": "string",
  "address": "string",
  "notes": "string",
  "transactions": [
    "string"
  ],
  "requests": [
    "string"
  ]
}
```

```yaml
fullname: string
phone: string
email: string
username: string
password: string
status: Active
role: Member
municipality: string
address: string
notes: string
transactions:
  - string
requests:
  - string

```

<h3 id="post__api_users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_users_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/users/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[System, Admin, ResourceOwner]</p>

### HTTP Request

`GET /api/users/{id}`

<h3 id="get__api_users_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|select|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "role": "string",
  "municipality": "string",
  "address": "string",
  "profilePicture": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

<h3 id="get__api_users_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[UserDto1](#schemauserdto1)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## patch__api_users_{id}

> Code samples

```javascript
const inputBody = {
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "password": "string",
  "status": "Active",
  "role": "Member",
  "municipality": "string",
  "address": "string",
  "notes": "string",
  "transactions": [
    "string"
  ],
  "requests": [
    "string"
  ]
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/users/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[System, Admin, ResourceOwner]</p>

### HTTP Request

`PATCH /api/users/{id}`

> Body parameter

```json
{
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "password": "string",
  "status": "Active",
  "role": "Member",
  "municipality": "string",
  "address": "string",
  "notes": "string",
  "transactions": [
    "string"
  ],
  "requests": [
    "string"
  ]
}
```

```yaml
fullname: string
phone: string
email: string
username: string
password: string
status: Active
role: Member
municipality: string
address: string
notes: string
transactions:
  - string
requests:
  - string

```

<h3 id="patch__api_users_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_users_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## delete__api_users_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/users/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[System, Admin]</p>

### HTTP Request

`DELETE /api/users/{id}`

<h3 id="delete__api_users_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="delete__api_users_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-classifications">Classifications</h1>

## get__api_classifications

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/classifications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[AnyUser]</p>

### HTTP Request

`GET /api/classifications`

<h3 id="get__api_classifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|number|false|none|
|limit|query|number|false|none|
|filter|query|string|false|none|
|select|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="get__api_classifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_classifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClassificationDto](#schemaclassificationdto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; name|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_classifications_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/classifications/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[AnyUser]</p>

### HTTP Request

`GET /api/classifications/{id}`

<h3 id="get__api_classifications_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|select|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="get__api_classifications_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[ClassificationDto](#schemaclassificationdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-faqs">FAQS</h1>

## get__api_faqs

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/faqs',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Public]</p>

### HTTP Request

`GET /api/faqs`

<h3 id="get__api_faqs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|number|false|none|
|limit|query|number|false|none|
|filter|query|string|false|none|
|select|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "question": "string",
    "answer": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "notes": "string",
    "id": "string"
  }
]
```

<h3 id="get__api_faqs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_faqs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FAQDto](#schemafaqdto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; question|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; answer|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; createdAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; updatedAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; deleted|boolean|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; notes|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_faqs

> Code samples

```javascript
const inputBody = {
  "question": "string",
  "answer": "string",
  "notes": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/faqs',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`POST /api/faqs`

> Body parameter

```json
{
  "question": "string",
  "answer": "string",
  "notes": "string"
}
```

```yaml
question: string
answer: string
notes: string

```

<h3 id="post__api_faqs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_faqs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_faqs_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/faqs/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Public]</p>

### HTTP Request

`GET /api/faqs/{id}`

<h3 id="get__api_faqs_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|select|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "question": "string",
  "answer": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

<h3 id="get__api_faqs_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[FAQDto](#schemafaqdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## patch__api_faqs_{id}

> Code samples

```javascript
const inputBody = {
  "question": "string",
  "answer": "string",
  "notes": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/faqs/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`PATCH /api/faqs/{id}`

> Body parameter

```json
{
  "question": "string",
  "answer": "string",
  "notes": "string"
}
```

```yaml
question: string
answer: string
notes: string

```

<h3 id="patch__api_faqs_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_faqs_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## delete__api_faqs_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/faqs/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`DELETE /api/faqs/{id}`

<h3 id="delete__api_faqs_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="delete__api_faqs_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-municipalities">Municipalities</h1>

## get__api_municipalities

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[System, Admin]</p>

### HTTP Request

`GET /api/municipalities`

<h3 id="get__api_municipalities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|number|false|none|
|limit|query|number|false|none|
|filter|query|string|false|none|
|select|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "email": "string",
    "phone": "string",
    "website": "string",
    "boundaries": {
      "type": "Point",
      "bbox": [
        0
      ],
      "coordinates": [
        [
          [
            [
              0,
              0
            ],
            [
              0,
              0
            ],
            [
              0,
              0
            ],
            [
              0,
              0
            ]
          ]
        ]
      ]
    },
    "address": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "notes": "string",
    "id": "string"
  }
]
```

<h3 id="get__api_municipalities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_municipalities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MunicipalityDto](#schemamunicipalitydto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; name|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; email|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; phone|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; website|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; boundaries|any|false|none|GeoJSon geometry|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|any|false|none|Abstract type for all GeoJSon 'Geometry' object the type of which is not<br>      'GeometryCollection'|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|any|false|none|Abstract type for all GeoJSon object except Feature and<br>        FeatureCollection|

*allOf - discriminator: type*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|[GeoJsonObject](#schemageojsonobject)|false|none|GeoJSon object<br><br>    The coordinate reference system for all GeoJSON coordinates is a<br>    geographic coordinate reference system, using the World Geodetic System<br>    1984 (WGS 84) datum, with longitude and latitude units of decimal<br>    degrees.<br>    This is equivalent to the coordinate reference system identified by the<br>    Open Geospatial Consortium (OGC) URN<br>    An OPTIONAL third-position element SHALL be the height in meters above<br>    or below the WGS 84 reference ellipsoid.<br>    In the absence of elevation values, applications sensitive to height or<br>    depth SHOULD interpret positions as being at local ground or sea level.|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; type|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; bbox|[number]|false|none|none|

*and - discriminator: type*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; type|string|true|none|none|

*and - discriminator: type*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; type|string|true|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; coordinates|[array]|true|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; address|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; createdAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; updatedAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; deleted|boolean|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; notes|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|
|type|FeatureCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|
|type|GeometryCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|
|type|GeometryCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_municipalities

> Code samples

```javascript
const inputBody = {
  "name": "string",
  "email": "string",
  "phone": "string",
  "website": "string",
  "boundaries": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ]
    ]
  },
  "address": "string",
  "notes": "string",
  "members": [
    "string"
  ],
  "subscriptions": [
    "string"
  ],
  "regions": [
    "string"
  ]
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[System, Admin]</p>

### HTTP Request

`POST /api/municipalities`

> Body parameter

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "website": "string",
  "boundaries": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ]
    ]
  },
  "address": "string",
  "notes": "string",
  "members": [
    "string"
  ],
  "subscriptions": [
    "string"
  ],
  "regions": [
    "string"
  ]
}
```

```yaml
name: string
email: string
phone: string
website: string
boundaries:
  type: Point
  bbox:
    - 0
  coordinates:
    - - - - 0
          - 0
        - - 0
          - 0
        - - 0
          - 0
        - - 0
          - 0
address: string
notes: string
members:
  - string
subscriptions:
  - string
regions:
  - string

```

<h3 id="post__api_municipalities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_municipalities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_municipalities_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[System, Admin, MunicipalityMember, MunicipalitySupervisor]</p>

### HTTP Request

`GET /api/municipalities/{id}`

<h3 id="get__api_municipalities_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|select|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "website": "string",
  "boundaries": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ]
    ]
  },
  "address": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

<h3 id="get__api_municipalities_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[MunicipalityDto](#schemamunicipalitydto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## patch__api_municipalities_{id}

> Code samples

```javascript
const inputBody = {
  "name": "string",
  "email": "string",
  "phone": "string",
  "website": "string",
  "boundaries": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ]
    ]
  },
  "address": "string",
  "notes": "string",
  "members": [
    "string"
  ],
  "subscriptions": [
    "string"
  ],
  "regions": [
    "string"
  ]
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[System, Admin, MunicipalitySupervisor]</p>

### HTTP Request

`PATCH /api/municipalities/{id}`

> Body parameter

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "website": "string",
  "boundaries": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ]
    ]
  },
  "address": "string",
  "notes": "string",
  "members": [
    "string"
  ],
  "subscriptions": [
    "string"
  ],
  "regions": [
    "string"
  ]
}
```

```yaml
name: string
email: string
phone: string
website: string
boundaries:
  type: Point
  bbox:
    - 0
  coordinates:
    - - - - 0
          - 0
        - - 0
          - 0
        - - 0
          - 0
        - - 0
          - 0
address: string
notes: string
members:
  - string
subscriptions:
  - string
regions:
  - string

```

<h3 id="patch__api_municipalities_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_municipalities_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## delete__api_municipalities_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[System, Admin]</p>

### HTTP Request

`DELETE /api/municipalities/{id}`

<h3 id="delete__api_municipalities_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="delete__api_municipalities_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-municipalities-users">Municipalities Users</h1>

## get__api_municipalities_{pid}_members

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/members',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor]</p>

### HTTP Request

`GET /api/municipalities/{pid}/members`

<h3 id="get__api_municipalities_{pid}_members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|offset|query|number|false|none|
|limit|query|number|false|none|
|filter|query|string|false|none|
|select|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "fullname": "string",
    "phone": "string",
    "email": "string",
    "username": "string",
    "role": "string",
    "municipality": "string",
    "address": "string",
    "profilePicture": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "notes": "string",
    "id": "string"
  }
]
```

<h3 id="get__api_municipalities_{pid}_members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_municipalities_{pid}_members-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_municipalities_{pid}_members

> Code samples

```javascript
const inputBody = {
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "password": "string",
  "status": "Active",
  "role": "Member",
  "municipality": "string",
  "address": "string",
  "notes": "string",
  "transactions": [
    "string"
  ],
  "requests": [
    "string"
  ]
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/members',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor]</p>

### HTTP Request

`POST /api/municipalities/{pid}/members`

> Body parameter

```json
{
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "password": "string",
  "status": "Active",
  "role": "Member",
  "municipality": "string",
  "address": "string",
  "notes": "string",
  "transactions": [
    "string"
  ],
  "requests": [
    "string"
  ]
}
```

```yaml
fullname: string
phone: string
email: string
username: string
password: string
status: Active
role: Member
municipality: string
address: string
notes: string
transactions:
  - string
requests:
  - string

```

<h3 id="post__api_municipalities_{pid}_members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_municipalities_{pid}_members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_municipalities_{pid}_members_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/members/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor]</p>

### HTTP Request

`GET /api/municipalities/{pid}/members/{id}`

<h3 id="get__api_municipalities_{pid}_members_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|id|path|string|true|none|
|select|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "role": "string",
  "municipality": "string",
  "address": "string",
  "profilePicture": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

<h3 id="get__api_municipalities_{pid}_members_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_municipalities_{pid}_members_{id}-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## patch__api_municipalities_{pid}_members_{id}

> Code samples

```javascript
const inputBody = {
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "password": "string",
  "status": "Active",
  "role": "Member",
  "municipality": "string",
  "address": "string",
  "notes": "string",
  "transactions": [
    "string"
  ],
  "requests": [
    "string"
  ]
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/members/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor]</p>

### HTTP Request

`PATCH /api/municipalities/{pid}/members/{id}`

> Body parameter

```json
{
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "password": "string",
  "status": "Active",
  "role": "Member",
  "municipality": "string",
  "address": "string",
  "notes": "string",
  "transactions": [
    "string"
  ],
  "requests": [
    "string"
  ]
}
```

```yaml
fullname: string
phone: string
email: string
username: string
password: string
status: Active
role: Member
municipality: string
address: string
notes: string
transactions:
  - string
requests:
  - string

```

<h3 id="patch__api_municipalities_{pid}_members_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|id|path|string|true|none|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_municipalities_{pid}_members_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## delete__api_municipalities_{pid}_members_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/members/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor]</p>

### HTTP Request

`DELETE /api/municipalities/{pid}/members/{id}`

<h3 id="delete__api_municipalities_{pid}_members_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="delete__api_municipalities_{pid}_members_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-municipalities-regions">Municipalities Regions</h1>

## get__api_municipalities_{pid}_regions

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/regions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`GET /api/municipalities/{pid}/regions`

<h3 id="get__api_municipalities_{pid}_regions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|offset|query|number|false|none|
|limit|query|number|false|none|
|filter|query|string|false|none|
|select|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "boundaries": "string",
    "municipality": {
      "name": "string",
      "email": "string",
      "phone": "string",
      "website": "string",
      "boundaries": {
        "type": "Point",
        "bbox": [
          0
        ],
        "coordinates": [
          [
            [
              [
                0,
                0
              ],
              [
                0,
                0
              ],
              [
                0,
                0
              ],
              [
                0,
                0
              ]
            ]
          ]
        ]
      },
      "address": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "deleted": true,
      "id": "string",
      "notes": "string"
    },
    "approved": true,
    "name": "string",
    "government": true,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "id": "string",
    "notes": "string"
  }
]
```

<h3 id="get__api_municipalities_{pid}_regions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_municipalities_{pid}_regions-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|
|type|FeatureCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|
|type|GeometryCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|
|type|GeometryCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|
|status|Active|
|status|Suspended|
|role|Member|
|role|Supervisor|
|role|Admin|
|role|System|
|status|Unread|
|status|Read|
|status|Done|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_municipalities_{pid}_regions

> Code samples

```javascript
const inputBody = {
  "boundaries": "string",
  "municipality": "string",
  "approved": true,
  "name": "string",
  "government": true,
  "notes": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/regions',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`POST /api/municipalities/{pid}/regions`

> Body parameter

```json
{
  "boundaries": "string",
  "municipality": "string",
  "approved": true,
  "name": "string",
  "government": true,
  "notes": "string"
}
```

```yaml
boundaries: string
municipality: string
approved: true
name: string
government: true
notes: string

```

<h3 id="post__api_municipalities_{pid}_regions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_municipalities_{pid}_regions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_municipalities_{pid}_regions_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/regions/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`GET /api/municipalities/{pid}/regions/{id}`

<h3 id="get__api_municipalities_{pid}_regions_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|id|path|string|true|none|
|select|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "boundaries": "string",
  "municipality": {
    "name": "string",
    "email": "string",
    "phone": "string",
    "website": "string",
    "boundaries": {
      "type": "Point",
      "bbox": [
        0
      ],
      "coordinates": [
        [
          [
            [
              0,
              0
            ],
            [
              0,
              0
            ],
            [
              0,
              0
            ],
            [
              0,
              0
            ]
          ]
        ]
      ]
    },
    "address": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "id": "string",
    "notes": "string"
  },
  "approved": true,
  "name": "string",
  "government": true,
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "id": "string",
  "notes": "string"
}
```

<h3 id="get__api_municipalities_{pid}_regions_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_municipalities_{pid}_regions_{id}-responseschema">Response Schema</h3>

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|
|type|FeatureCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|
|type|GeometryCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|
|type|GeometryCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|
|status|Active|
|status|Suspended|
|role|Member|
|role|Supervisor|
|role|Admin|
|role|System|
|status|Unread|
|status|Read|
|status|Done|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## patch__api_municipalities_{pid}_regions_{id}

> Code samples

```javascript
const inputBody = {
  "boundaries": "string",
  "municipality": "string",
  "approved": true,
  "name": "string",
  "government": true,
  "notes": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/regions/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

### HTTP Request

`PATCH /api/municipalities/{pid}/regions/{id}`

> Body parameter

```json
{
  "boundaries": "string",
  "municipality": "string",
  "approved": true,
  "name": "string",
  "government": true,
  "notes": "string"
}
```

```yaml
boundaries: string
municipality: string
approved: true
name: string
government: true
notes: string

```

<h3 id="patch__api_municipalities_{pid}_regions_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|id|path|string|true|none|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_municipalities_{pid}_regions_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## delete__api_municipalities_{pid}_regions_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/municipalities/{pid}/regions/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin, MunicipalitySupervisor]</p>

### HTTP Request

`DELETE /api/municipalities/{pid}/regions/{id}`

<h3 id="delete__api_municipalities_{pid}_regions_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pid|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="delete__api_municipalities_{pid}_regions_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-plans">Plans</h1>

## get__api_plans

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/plans',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Public]</p>

### HTTP Request

`GET /api/plans`

<h3 id="get__api_plans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|number|false|none|
|limit|query|number|false|none|
|filter|query|string|false|none|
|select|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "price": 0,
    "duration": 0,
    "updateInterval": 0,
    "active": true,
    "actionsQuota": 0,
    "description": "string"
  }
]
```

<h3 id="get__api_plans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_plans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlanDto](#schemaplandto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; name|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; price|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; duration|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; updateInterval|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; active|boolean|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; actionsQuota|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; description|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_plans

> Code samples

```javascript
const inputBody = {
  "name": "string",
  "price": 0,
  "duration": 0,
  "updateInterval": 0,
  "active": true,
  "actionsQuota": 0,
  "description": "string",
  "notes": "string",
  "subscriptions": [
    "string"
  ]
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/plans',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`POST /api/plans`

> Body parameter

```json
{
  "name": "string",
  "price": 0,
  "duration": 0,
  "updateInterval": 0,
  "active": true,
  "actionsQuota": 0,
  "description": "string",
  "notes": "string",
  "subscriptions": [
    "string"
  ]
}
```

```yaml
name: string
price: 0
duration: 0
updateInterval: 0
active: true
actionsQuota: 0
description: string
notes: string
subscriptions:
  - string

```

<h3 id="post__api_plans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_plans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_plans_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/plans/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Public]</p>

### HTTP Request

`GET /api/plans/{id}`

<h3 id="get__api_plans_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|select|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "price": 0,
  "duration": 0,
  "updateInterval": 0,
  "active": true,
  "actionsQuota": 0,
  "description": "string"
}
```

<h3 id="get__api_plans_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[PlanDto](#schemaplandto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## patch__api_plans_{id}

> Code samples

```javascript
const inputBody = {
  "name": "string",
  "price": 0,
  "duration": 0,
  "updateInterval": 0,
  "active": true,
  "actionsQuota": 0,
  "description": "string",
  "notes": "string",
  "subscriptions": [
    "string"
  ]
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/plans/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`PATCH /api/plans/{id}`

> Body parameter

```json
{
  "name": "string",
  "price": 0,
  "duration": 0,
  "updateInterval": 0,
  "active": true,
  "actionsQuota": 0,
  "description": "string",
  "notes": "string",
  "subscriptions": [
    "string"
  ]
}
```

```yaml
name: string
price: 0
duration: 0
updateInterval: 0
active: true
actionsQuota: 0
description: string
notes: string
subscriptions:
  - string

```

<h3 id="patch__api_plans_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_plans_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-regions">Regions</h1>

## get__api_regions

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/regions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`GET /api/regions`

<h3 id="get__api_regions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|number|false|none|
|limit|query|number|false|none|
|filter|query|string|false|none|
|select|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "boundaries": {
      "type": "Point",
      "bbox": [
        0
      ],
      "coordinates": [
        [
          [
            [
              0,
              0
            ],
            [
              0,
              0
            ],
            [
              0,
              0
            ],
            [
              0,
              0
            ]
          ]
        ]
      ]
    },
    "government": true,
    "municipality": "string",
    "approved": true,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "notes": "string",
    "id": "string"
  }
]
```

<h3 id="get__api_regions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_regions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RegionDto](#schemaregiondto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; name|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; boundaries|any|false|none|GeoJSon geometry|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|any|false|none|Abstract type for all GeoJSon 'Geometry' object the type of which is not<br>      'GeometryCollection'|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|any|false|none|Abstract type for all GeoJSon object except Feature and<br>        FeatureCollection|

*allOf - discriminator: type*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|[GeoJsonObject](#schemageojsonobject)|false|none|GeoJSon object<br><br>    The coordinate reference system for all GeoJSON coordinates is a<br>    geographic coordinate reference system, using the World Geodetic System<br>    1984 (WGS 84) datum, with longitude and latitude units of decimal<br>    degrees.<br>    This is equivalent to the coordinate reference system identified by the<br>    Open Geospatial Consortium (OGC) URN<br>    An OPTIONAL third-position element SHALL be the height in meters above<br>    or below the WGS 84 reference ellipsoid.<br>    In the absence of elevation values, applications sensitive to height or<br>    depth SHOULD interpret positions as being at local ground or sea level.|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; type|string|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; bbox|[number]|false|none|none|

*and - discriminator: type*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; type|string|true|none|none|

*and - discriminator: type*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; type|string|true|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; coordinates|[array]|true|none|none|

*continued*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; government|boolean|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; municipality|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; approved|boolean|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; createdAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; updatedAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; deleted|boolean|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; notes|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|
|type|FeatureCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|
|type|GeometryCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|
|type|GeometryCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_regions_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/regions/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`GET /api/regions/{id}`

<h3 id="get__api_regions_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|select|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "boundaries": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ]
    ]
  },
  "government": true,
  "municipality": "string",
  "approved": true,
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

<h3 id="get__api_regions_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[RegionDto](#schemaregiondto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-requests">Requests</h1>

## get__api_requests

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/requests',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`GET /api/requests`

<h3 id="get__api_requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|number|false|none|
|limit|query|number|false|none|
|filter|query|string|false|none|
|select|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "user": "string",
    "status": "string",
    "plan": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "notes": "string",
    "id": "string"
  }
]
```

<h3 id="get__api_requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_requests-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RequestDto](#schemarequestdto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; user|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; status|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; plan|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; createdAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; updatedAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; deleted|boolean|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; notes|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## post__api_requests

> Code samples

```javascript
const inputBody = {
  "status": "Unread",
  "user": "string",
  "plan": "string",
  "notes": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/requests',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[AnyUser]</p>

### HTTP Request

`POST /api/requests`

> Body parameter

```json
{
  "status": "Unread",
  "user": "string",
  "plan": "string",
  "notes": "string"
}
```

```yaml
status: Unread
user: string
plan: string
notes: string

```

<h3 id="post__api_requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_requests_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/requests/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`GET /api/requests/{id}`

<h3 id="get__api_requests_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|select|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "user": "string",
  "status": "string",
  "plan": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

<h3 id="get__api_requests_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[RequestDto](#schemarequestdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## patch__api_requests_{id}

> Code samples

```javascript
const inputBody = {
  "status": "Unread",
  "user": "string",
  "plan": "string",
  "notes": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/requests/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`PATCH /api/requests/{id}`

> Body parameter

```json
{
  "status": "Unread",
  "user": "string",
  "plan": "string",
  "notes": "string"
}
```

```yaml
status: Unread
user: string
plan: string
notes: string

```

<h3 id="patch__api_requests_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|any|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_requests_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[IdDto](#schemaiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-subclassifications">SubClassifications</h1>

## get__api_subclassifications

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/subclassifications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`GET /api/subclassifications`

<h3 id="get__api_subclassifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|number|false|none|
|limit|query|number|false|none|
|filter|query|string|false|none|
|select|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "classification": "string"
  }
]
```

<h3 id="get__api_subclassifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_subclassifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SubClassificationDto](#schemasubclassificationdto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; name|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; classification|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_subclassifications_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/subclassifications/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`GET /api/subclassifications/{id}`

<h3 id="get__api_subclassifications_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|select|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "classification": "string"
}
```

<h3 id="get__api_subclassifications_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[SubClassificationDto](#schemasubclassificationdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-subscriptions">Subscriptions</h1>

## get__api_subscriptions

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/subscriptions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[AnyUser]</p>

### HTTP Request

`GET /api/subscriptions`

<h3 id="get__api_subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|number|false|none|
|limit|query|number|false|none|
|filter|query|string|false|none|
|select|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "start": "2019-08-24T14:15:22Z",
    "actionsQouta": 0,
    "plan": "string",
    "municipality": "string",
    "representative": "string",
    "lastUpdated": "2019-08-24T14:15:22Z",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "notes": "string",
    "id": "string"
  }
]
```

<h3 id="get__api_subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_subscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SubscriptionDto](#schemasubscriptiondto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; start|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; actionsQouta|number|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; plan|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; municipality|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; representative|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; lastUpdated|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; createdAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; updatedAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; deleted|boolean|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; notes|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_subscriptions_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/subscriptions/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[AnyUser]</p>

### HTTP Request

`GET /api/subscriptions/{id}`

<h3 id="get__api_subscriptions_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|select|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "start": "2019-08-24T14:15:22Z",
  "actionsQouta": 0,
  "plan": "string",
  "municipality": "string",
  "representative": "string",
  "lastUpdated": "2019-08-24T14:15:22Z",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

<h3 id="get__api_subscriptions_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[SubscriptionDto](#schemasubscriptiondto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-transactions">Transactions</h1>

## get__api_transactions

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/transactions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`GET /api/transactions`

<h3 id="get__api_transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|number|false|none|
|limit|query|number|false|none|
|filter|query|string|false|none|
|select|query|string|false|none|
|order|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "amount": "string",
    "user": "string",
    "subscription": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "notes": "string",
    "id": "string"
  }
]
```

<h3 id="get__api_transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|Inline|

<h3 id="get__api_transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TransactionDto](#schematransactiondto)]|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; amount|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; user|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; subscription|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; createdAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; updatedAt|string(date-time)|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; deleted|boolean|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; notes|string|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## get__api_transactions_{id}

> Code samples

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/api/transactions/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

<p class="policies">[Admin]</p>

### HTTP Request

`GET /api/transactions/{id}`

<h3 id="get__api_transactions_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|select|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "amount": "string",
  "user": "string",
  "subscription": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

<h3 id="get__api_transactions_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response body|[TransactionDto](#schematransactiondto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="api-explorer-swagger">Swagger</h1>

## get__swagger

> Code samples

```javascript

const headers = {
  'Accept':'text/html',
  'Authorization':'Bearer {access-token}'
};

fetch('/swagger',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

Host the SwaggerUI

### HTTP Request

`GET /swagger`

> Example responses

<h3 id="get__swagger-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<h3 id="get__swagger-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

# Schemas

<h2 id="tocS_UsersCountDto">UsersCountDto</h2>

<a id="schemauserscountdto"></a>
<a id="schema_UsersCountDto"></a>
<a id="tocSuserscountdto"></a>
<a id="tocsuserscountdto"></a>

```json
{
  "count": 0,
  "municipalityId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|number|false|none|none|
|municipalityId|string|false|none|none|

<h2 id="tocS_MonthlyIncomeDto">MonthlyIncomeDto</h2>

<a id="schemamonthlyincomedto"></a>
<a id="schema_MonthlyIncomeDto"></a>
<a id="tocSmonthlyincomedto"></a>
<a id="tocsmonthlyincomedto"></a>

```json
{
  "month": "2019-08-24T14:15:22Z",
  "amount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|month|string(date-time)|false|none|none|
|amount|number|false|none|none|

<h2 id="tocS_YearlyIncomeDto">YearlyIncomeDto</h2>

<a id="schemayearlyincomedto"></a>
<a id="schema_YearlyIncomeDto"></a>
<a id="tocSyearlyincomedto"></a>
<a id="tocsyearlyincomedto"></a>

```json
{
  "year": "2019-08-24T14:15:22Z",
  "amount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|year|string(date-time)|false|none|none|
|amount|number|false|none|none|

<h2 id="tocS_StatsDo">StatsDo</h2>

<a id="schemastatsdo"></a>
<a id="schema_StatsDo"></a>
<a id="tocSstatsdo"></a>
<a id="tocsstatsdo"></a>

```json
{
  "municipalitiesCount": 0,
  "usersCount": 0,
  "regionsCount": 0,
  "income": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|municipalitiesCount|number|false|none|none|
|usersCount|number|false|none|none|
|regionsCount|number|false|none|none|
|income|number|false|none|none|

<h2 id="tocS_IdDto">IdDto</h2>

<a id="schemaiddto"></a>
<a id="schema_IdDto"></a>
<a id="tocSiddto"></a>
<a id="tocsiddto"></a>

```json
{
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|

<h2 id="tocS_TokensDto">TokensDto</h2>

<a id="schematokensdto"></a>
<a id="schema_TokensDto"></a>
<a id="tocStokensdto"></a>
<a id="tocstokensdto"></a>

```json
{
  "token": "string",
  "refreshToken": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|
|refreshToken|string|false|none|none|

<h2 id="tocS_ConfirmPasswordDto">ConfirmPasswordDto</h2>

<a id="schemaconfirmpassworddto"></a>
<a id="schema_ConfirmPasswordDto"></a>
<a id="tocSconfirmpassworddto"></a>
<a id="tocsconfirmpassworddto"></a>

```json
{
  "password": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|false|none|none|

<h2 id="tocS_SuccessDto">SuccessDto</h2>

<a id="schemasuccessdto"></a>
<a id="schema_SuccessDto"></a>
<a id="tocSsuccessdto"></a>
<a id="tocssuccessdto"></a>

```json
{
  "success": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<h2 id="tocS_UserDto">UserDto</h2>

<a id="schemauserdto"></a>
<a id="schema_UserDto"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{
  "id": "string",
  "fullname": "string",
  "email": "string",
  "phone": "string",
  "username": "string",
  "municipality": "string",
  "role": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|fullname|string|false|none|none|
|email|string|false|none|none|
|phone|string|false|none|none|
|username|string|false|none|none|
|municipality|string|false|none|none|
|role|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|deleted|boolean|false|none|none|
|notes|string|false|none|none|

<h2 id="tocS_ListBuildingsDto">ListBuildingsDto</h2>

<a id="schemalistbuildingsdto"></a>
<a id="schema_ListBuildingsDto"></a>
<a id="tocSlistbuildingsdto"></a>
<a id="tocslistbuildingsdto"></a>

```json
{
  "id": "string",
  "makani_id": 0,
  "name": "string",
  "description": "string",
  "licenseState": "string",
  "subClassification": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|makani_id|number|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|licenseState|string|false|none|none|
|subClassification|string|false|none|none|

<h2 id="tocS_BuildingDetails">BuildingDetails</h2>

<a id="schemabuildingdetails"></a>
<a id="schema_BuildingDetails"></a>
<a id="tocSbuildingdetails"></a>
<a id="tocsbuildingdetails"></a>

```json
{
  "id": "string",
  "makani_id": 0,
  "name": "string",
  "description": "string",
  "email": "string",
  "website": "string",
  "phone": "string",
  "b_id": "string",
  "zip_id": "string",
  "coordinates": "string",
  "floorsAboveGround": 0,
  "floorsUnderGround": 0,
  "licenseState": "string",
  "subClassification": "string",
  "classification": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|makani_id|number|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|email|string|false|none|none|
|website|string|false|none|none|
|phone|string|false|none|none|
|b_id|string|false|none|none|
|zip_id|string|false|none|none|
|coordinates|string|false|none|none|
|floorsAboveGround|number|false|none|none|
|floorsUnderGround|number|false|none|none|
|licenseState|string|false|none|none|
|subClassification|string|false|none|none|
|classification|string|false|none|none|

<h2 id="tocS_SubscriptionDto">SubscriptionDto</h2>

<a id="schemasubscriptiondto"></a>
<a id="schema_SubscriptionDto"></a>
<a id="tocSsubscriptiondto"></a>
<a id="tocssubscriptiondto"></a>

```json
{
  "start": "2019-08-24T14:15:22Z",
  "actionsQouta": 0,
  "plan": "string",
  "municipality": "string",
  "representative": "string",
  "lastUpdated": "2019-08-24T14:15:22Z",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|string(date-time)|false|none|none|
|actionsQouta|number|false|none|none|
|plan|string|false|none|none|
|municipality|string|false|none|none|
|representative|string|false|none|none|
|lastUpdated|string(date-time)|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|deleted|boolean|false|none|none|
|notes|string|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_SettingsDto">SettingsDto</h2>

<a id="schemasettingsdto"></a>
<a id="schema_SettingsDto"></a>
<a id="tocSsettingsdto"></a>
<a id="tocssettingsdto"></a>

```json
{
  "aboutSystem": "string",
  "aboutPlans": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aboutSystem|string|false|none|none|
|aboutPlans|string|false|none|none|

<h2 id="tocS_SubClassificationStatsDto">SubClassificationStatsDto</h2>

<a id="schemasubclassificationstatsdto"></a>
<a id="schema_SubClassificationStatsDto"></a>
<a id="tocSsubclassificationstatsdto"></a>
<a id="tocssubclassificationstatsdto"></a>

```json
{
  "all": 0,
  "health": 0,
  "pharmacies": 0,
  "non_governmental": 0,
  "homes": 0,
  "apartment_complex": 0,
  "hotels": 0,
  "lands": 0,
  "education": 0,
  "mosques_religious": 0,
  "colleges": 0,
  "bakeries": 0,
  "resturants_cafes": 0,
  "companies": 0,
  "factories": 0,
  "commercial": 0,
  "banks": 0,
  "governmental": 0,
  "parking": 0,
  "gas_stations": 0,
  "ports": 0,
  "entertainment": 0,
  "sports": 0,
  "parks": 0,
  "other": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|number|false|none|none|
|health|number|false|none|none|
|pharmacies|number|false|none|none|
|non_governmental|number|false|none|none|
|homes|number|false|none|none|
|apartment_complex|number|false|none|none|
|hotels|number|false|none|none|
|lands|number|false|none|none|
|education|number|false|none|none|
|mosques_religious|number|false|none|none|
|colleges|number|false|none|none|
|bakeries|number|false|none|none|
|resturants_cafes|number|false|none|none|
|companies|number|false|none|none|
|factories|number|false|none|none|
|commercial|number|false|none|none|
|banks|number|false|none|none|
|governmental|number|false|none|none|
|parking|number|false|none|none|
|gas_stations|number|false|none|none|
|ports|number|false|none|none|
|entertainment|number|false|none|none|
|sports|number|false|none|none|
|parks|number|false|none|none|
|other|number|false|none|none|

<h2 id="tocS_MonthlyCountDto">MonthlyCountDto</h2>

<a id="schemamonthlycountdto"></a>
<a id="schema_MonthlyCountDto"></a>
<a id="tocSmonthlycountdto"></a>
<a id="tocsmonthlycountdto"></a>

```json
{
  "month": "2019-08-24T14:15:22Z",
  "count": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|month|string(date-time)|false|none|none|
|count|number|false|none|none|

<h2 id="tocS_ClassificationStatsDto">ClassificationStatsDto</h2>

<a id="schemaclassificationstatsdto"></a>
<a id="schema_ClassificationStatsDto"></a>
<a id="tocSclassificationstatsdto"></a>
<a id="tocsclassificationstatsdto"></a>

```json
{
  "all": 0,
  "health": 0,
  "civil": 0,
  "realestate": 0,
  "religious_education": 0,
  "economy": 0,
  "governmental": 0,
  "entertainment": 0,
  "other": 0,
  "countByMonth": [
    {
      "month": "2019-08-24T14:15:22Z",
      "count": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|number|false|none|none|
|health|number|false|none|none|
|civil|number|false|none|none|
|realestate|number|false|none|none|
|religious_education|number|false|none|none|
|economy|number|false|none|none|
|governmental|number|false|none|none|
|entertainment|number|false|none|none|
|other|number|false|none|none|
|countByMonth|[[MonthlyCountDto](#schemamonthlycountdto)]|false|none|none|

<h2 id="tocS_ClassificationsSelection">ClassificationsSelection</h2>

<a id="schemaclassificationsselection"></a>
<a id="schema_ClassificationsSelection"></a>
<a id="tocSclassificationsselection"></a>
<a id="tocsclassificationsselection"></a>

```json
{
  "health": true,
  "civil": true,
  "realestate": true,
  "religious": true,
  "economy": true,
  "governmental": true,
  "entertainment": true,
  "other": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|health|boolean|false|none|none|
|civil|boolean|false|none|none|
|realestate|boolean|false|none|none|
|religious|boolean|false|none|none|
|economy|boolean|false|none|none|
|governmental|boolean|false|none|none|
|entertainment|boolean|false|none|none|
|other|boolean|false|none|none|

<h2 id="tocS_MapDto">MapDto</h2>

<a id="schemamapdto"></a>
<a id="schema_MapDto"></a>
<a id="tocSmapdto"></a>
<a id="tocsmapdto"></a>

```json
{
  "classifications": {
    "health": true,
    "civil": true,
    "realestate": true,
    "religious": true,
    "economy": true,
    "governmental": true,
    "entertainment": true,
    "other": true
  },
  "area": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ]
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classifications|[ClassificationsSelection](#schemaclassificationsselection)|false|none|none|
|area|[MultiPolygon](#schemamultipolygon)|false|none|GeoJSon geometry|

<h2 id="tocS_Point">Point</h2>

<a id="schemapoint"></a>
<a id="schema_Point"></a>
<a id="tocSpoint"></a>
<a id="tocspoint"></a>

```json
{
  "type": "Point",
  "bbox": [
    0
  ],
  "coordinates": [
    0,
    0
  ]
}

```

GeoJSon geometry

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.2">External documentation</a>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[GeometryElement](#schemageometryelement)|false|none|Abstract type for all GeoJSon 'Geometry' object the type of which is not<br>      'GeometryCollection'|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; coordinates|[Position](#schemaposition)|true|none|GeoJSon fundamental geometry construct.<br>      <br>      A position is an array of numbers. There MUST be two or more elements.<br>      The first two elements are longitude and latitude, or easting and<br>      northing, precisely in that order and using decimal numbers.<br>      Altitude or elevation MAY be included as an optional third element.<br>      <br>      Implementations SHOULD NOT extend positions beyond three elements<br>      because the semantics of extra elements are unspecified and ambiguous.<br>      Historically, some implementations have used a fourth element to carry<br>      a linear referencing measure (sometimes denoted as "M") or a numerical<br>      timestamp, but in most situations a parser will not be able to properly<br>      interpret these values. The interpretation and meaning of additional<br>      elements is beyond the scope of this specification, and additional<br>      elements MAY be ignored by parsers.|

<h2 id="tocS_MapBuildingsDto">MapBuildingsDto</h2>

<a id="schemamapbuildingsdto"></a>
<a id="schema_MapBuildingsDto"></a>
<a id="tocSmapbuildingsdto"></a>
<a id="tocsmapbuildingsdto"></a>

```json
{
  "id": "string",
  "coordinates": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      0,
      0
    ]
  },
  "subClassification": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|coordinates|[Point](#schemapoint)|false|none|GeoJSon geometry|
|subClassification|string|false|none|none|

<h2 id="tocS_HealthStatsDto">HealthStatsDto</h2>

<a id="schemahealthstatsdto"></a>
<a id="schema_HealthStatsDto"></a>
<a id="tocShealthstatsdto"></a>
<a id="tocshealthstatsdto"></a>

```json
{
  "health": 0,
  "pharmacies": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|health|number|false|none|none|
|pharmacies|number|false|none|none|

<h2 id="tocS_CivilStatsDto">CivilStatsDto</h2>

<a id="schemacivilstatsdto"></a>
<a id="schema_CivilStatsDto"></a>
<a id="tocScivilstatsdto"></a>
<a id="tocscivilstatsdto"></a>

```json
{
  "non_governmental": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|non_governmental|number|false|none|none|

<h2 id="tocS_RealEstateStatsDto">RealEstateStatsDto</h2>

<a id="schemarealestatestatsdto"></a>
<a id="schema_RealEstateStatsDto"></a>
<a id="tocSrealestatestatsdto"></a>
<a id="tocsrealestatestatsdto"></a>

```json
{
  "homes": 0,
  "apartment_complex": 0,
  "hotels": 0,
  "lands": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|homes|number|false|none|none|
|apartment_complex|number|false|none|none|
|hotels|number|false|none|none|
|lands|number|false|none|none|

<h2 id="tocS_ReligiousEducationStatsDto">ReligiousEducationStatsDto</h2>

<a id="schemareligiouseducationstatsdto"></a>
<a id="schema_ReligiousEducationStatsDto"></a>
<a id="tocSreligiouseducationstatsdto"></a>
<a id="tocsreligiouseducationstatsdto"></a>

```json
{
  "education": 0,
  "mosques_religious": 0,
  "colleges": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|education|number|false|none|none|
|mosques_religious|number|false|none|none|
|colleges|number|false|none|none|

<h2 id="tocS_EconomyStatsDto">EconomyStatsDto</h2>

<a id="schemaeconomystatsdto"></a>
<a id="schema_EconomyStatsDto"></a>
<a id="tocSeconomystatsdto"></a>
<a id="tocseconomystatsdto"></a>

```json
{
  "bakeries": 0,
  "resturants_cafes": 0,
  "companies": 0,
  "factories": 0,
  "commercial": 0,
  "banks": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bakeries|number|false|none|none|
|resturants_cafes|number|false|none|none|
|companies|number|false|none|none|
|factories|number|false|none|none|
|commercial|number|false|none|none|
|banks|number|false|none|none|

<h2 id="tocS_governmentalStatsDto">governmentalStatsDto</h2>

<a id="schemagovernmentalstatsdto"></a>
<a id="schema_governmentalStatsDto"></a>
<a id="tocSgovernmentalstatsdto"></a>
<a id="tocsgovernmentalstatsdto"></a>

```json
{
  "governmental": 0,
  "parking": 0,
  "gas_stations": 0,
  "ports": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|governmental|number|false|none|none|
|parking|number|false|none|none|
|gas_stations|number|false|none|none|
|ports|number|false|none|none|

<h2 id="tocS_EntertainmentStatsDto">EntertainmentStatsDto</h2>

<a id="schemaentertainmentstatsdto"></a>
<a id="schema_EntertainmentStatsDto"></a>
<a id="tocSentertainmentstatsdto"></a>
<a id="tocsentertainmentstatsdto"></a>

```json
{
  "entertainment": 0,
  "sports": 0,
  "parks": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entertainment|number|false|none|none|
|sports|number|false|none|none|
|parks|number|false|none|none|

<h2 id="tocS_OtherStatsDto">OtherStatsDto</h2>

<a id="schemaotherstatsdto"></a>
<a id="schema_OtherStatsDto"></a>
<a id="tocSotherstatsdto"></a>
<a id="tocsotherstatsdto"></a>

```json
{
  "other": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|other|number|false|none|none|

<h2 id="tocS_DetailedStatsDto">DetailedStatsDto</h2>

<a id="schemadetailedstatsdto"></a>
<a id="schema_DetailedStatsDto"></a>
<a id="tocSdetailedstatsdto"></a>
<a id="tocsdetailedstatsdto"></a>

```json
{
  "health": {
    "health": 0,
    "pharmacies": 0
  },
  "civil": {
    "non_governmental": 0
  },
  "realestate": {
    "homes": 0,
    "apartment_complex": 0,
    "hotels": 0,
    "lands": 0
  },
  "religious_education": {
    "education": 0,
    "mosques_religious": 0,
    "colleges": 0
  },
  "economy": {
    "bakeries": 0,
    "resturants_cafes": 0,
    "companies": 0,
    "factories": 0,
    "commercial": 0,
    "banks": 0
  },
  "governmental": {
    "governmental": 0,
    "parking": 0,
    "gas_stations": 0,
    "ports": 0
  },
  "entertainment": {
    "entertainment": 0,
    "sports": 0,
    "parks": 0
  },
  "other": {
    "other": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|health|[HealthStatsDto](#schemahealthstatsdto)|false|none|none|
|civil|[CivilStatsDto](#schemacivilstatsdto)|false|none|none|
|realestate|[RealEstateStatsDto](#schemarealestatestatsdto)|false|none|none|
|religious_education|[ReligiousEducationStatsDto](#schemareligiouseducationstatsdto)|false|none|none|
|economy|[EconomyStatsDto](#schemaeconomystatsdto)|false|none|none|
|governmental|[governmentalStatsDto](#schemagovernmentalstatsdto)|false|none|none|
|entertainment|[EntertainmentStatsDto](#schemaentertainmentstatsdto)|false|none|none|
|other|[OtherStatsDto](#schemaotherstatsdto)|false|none|none|

<h2 id="tocS_MapStatsDto">MapStatsDto</h2>

<a id="schemamapstatsdto"></a>
<a id="schema_MapStatsDto"></a>
<a id="tocSmapstatsdto"></a>
<a id="tocsmapstatsdto"></a>

```json
{
  "area": 0,
  "buildings": [
    {
      "id": "string",
      "coordinates": {
        "type": "Point",
        "bbox": [
          0
        ],
        "coordinates": [
          0,
          0
        ]
      },
      "subClassification": "string"
    }
  ],
  "stats": {
    "health": {
      "health": 0,
      "pharmacies": 0
    },
    "civil": {
      "non_governmental": 0
    },
    "realestate": {
      "homes": 0,
      "apartment_complex": 0,
      "hotels": 0,
      "lands": 0
    },
    "religious_education": {
      "education": 0,
      "mosques_religious": 0,
      "colleges": 0
    },
    "economy": {
      "bakeries": 0,
      "resturants_cafes": 0,
      "companies": 0,
      "factories": 0,
      "commercial": 0,
      "banks": 0
    },
    "governmental": {
      "governmental": 0,
      "parking": 0,
      "gas_stations": 0,
      "ports": 0
    },
    "entertainment": {
      "entertainment": 0,
      "sports": 0,
      "parks": 0
    },
    "other": {
      "other": 0
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area|number|false|none|none|
|buildings|[[MapBuildingsDto](#schemamapbuildingsdto)]|false|none|none|
|stats|[DetailedStatsDto](#schemadetailedstatsdto)|false|none|none|

<h2 id="tocS_HousesStatsDto">HousesStatsDto</h2>

<a id="schemahousesstatsdto"></a>
<a id="schema_HousesStatsDto"></a>
<a id="tocShousesstatsdto"></a>
<a id="tocshousesstatsdto"></a>

```json
{
  "homes": 0,
  "apartmentComplex": 0,
  "area": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|homes|number|false|none|none|
|apartmentComplex|number|false|none|none|
|area|number|false|none|none|

<h2 id="tocS_MultiPolygon">MultiPolygon</h2>

<a id="schemamultipolygon"></a>
<a id="schema_MultiPolygon"></a>
<a id="tocSmultipolygon"></a>
<a id="tocsmultipolygon"></a>

```json
{
  "type": "Point",
  "bbox": [
    0
  ],
  "coordinates": [
    [
      [
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ],
        [
          0,
          0
        ]
      ]
    ]
  ]
}

```

GeoJSon geometry

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.7">External documentation</a>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[GeometryElement](#schemageometryelement)|false|none|Abstract type for all GeoJSon 'Geometry' object the type of which is not<br>      'GeometryCollection'|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; coordinates|[array]|true|none|none|

<h2 id="tocS_ClassificationDto">ClassificationDto</h2>

<a id="schemaclassificationdto"></a>
<a id="schema_ClassificationDto"></a>
<a id="tocSclassificationdto"></a>
<a id="tocsclassificationdto"></a>

```json
{
  "id": "string",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_FAQDto">FAQDto</h2>

<a id="schemafaqdto"></a>
<a id="schema_FAQDto"></a>
<a id="tocSfaqdto"></a>
<a id="tocsfaqdto"></a>

```json
{
  "question": "string",
  "answer": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|question|string|false|none|none|
|answer|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|deleted|boolean|false|none|none|
|notes|string|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_FAQ">FAQ</h2>

<a id="schemafaq"></a>
<a id="schema_FAQ"></a>
<a id="tocSfaq"></a>
<a id="tocsfaq"></a>

```json
{
  "question": "string",
  "answer": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "id": "string",
  "notes": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|question|string|false|none|none|
|answer|string|false|none|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|deleted|boolean|false|read-only|none|
|id|string|false|read-only|none|
|notes|string|false|none|none|

<h2 id="tocS_MunicipalityDto">MunicipalityDto</h2>

<a id="schemamunicipalitydto"></a>
<a id="schema_MunicipalityDto"></a>
<a id="tocSmunicipalitydto"></a>
<a id="tocsmunicipalitydto"></a>

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "website": "string",
  "boundaries": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ]
    ]
  },
  "address": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|email|string|false|none|none|
|phone|string|false|none|none|
|website|string|false|none|none|
|boundaries|[MultiPolygon](#schemamultipolygon)|false|none|GeoJSon geometry|
|address|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|deleted|boolean|false|none|none|
|notes|string|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_Transaction">Transaction</h2>

<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "user": {
    "fullname": "string",
    "phone": "string",
    "email": "string",
    "username": "string",
    "password": "string",
    "status": "Active",
    "role": "Member",
    "municipality": {
      "name": "string",
      "email": "string",
      "phone": "string",
      "website": "string",
      "boundaries": {
        "type": "Point",
        "bbox": [
          0
        ],
        "coordinates": [
          [
            [
              [
                0,
                0
              ],
              [
                0,
                0
              ],
              [
                0,
                0
              ],
              [
                0,
                0
              ]
            ]
          ]
        ]
      },
      "members": [
        {}
      ],
      "subscriptions": [
        {
          "transactions": [
            {
              "user": {},
              "amount": "string",
              "userId": "string",
              "subscription": {},
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "start": "2019-08-24T14:15:22Z",
          "actionsQuota": 0,
          "representative": "string",
          "lastUpdated": "2019-08-24T14:15:22Z",
          "plan": {
            "subscriptions": [
              {}
            ],
            "name": "string",
            "price": 0,
            "duration": 0,
            "updateInterval": 0,
            "active": true,
            "actionsQuota": 0,
            "description": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          },
          "municipality": {},
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        }
      ],
      "regions": [
        {
          "boundaries": "string",
          "municipality": {},
          "approved": true,
          "name": "string",
          "government": true,
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        }
      ],
      "address": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "deleted": true,
      "id": "string",
      "notes": "string"
    },
    "transactions": [
      {
        "user": {},
        "amount": "string",
        "userId": "string",
        "subscription": {
          "transactions": [
            {}
          ],
          "start": "2019-08-24T14:15:22Z",
          "actionsQuota": 0,
          "representative": "string",
          "lastUpdated": "2019-08-24T14:15:22Z",
          "plan": {
            "subscriptions": [
              {}
            ],
            "name": "string",
            "price": 0,
            "duration": 0,
            "updateInterval": 0,
            "active": true,
            "actionsQuota": 0,
            "description": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          },
          "municipality": {
            "name": "string",
            "email": "string",
            "phone": "string",
            "website": "string",
            "boundaries": {
              "type": "Point",
              "bbox": [
                0
              ],
              "coordinates": [
                [
                  [
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ]
                  ]
                ]
              ]
            },
            "members": [
              {}
            ],
            "subscriptions": [
              {}
            ],
            "regions": [
              {
                "boundaries": "string",
                "municipality": {},
                "approved": true,
                "name": "string",
                "government": true,
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "address": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          },
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "requests": [
      {
        "status": "Unread",
        "user": {},
        "plan": {
          "subscriptions": [
            {
              "transactions": [
                {
                  "user": {},
                  "amount": "string",
                  "userId": "string",
                  "subscription": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "start": "2019-08-24T14:15:22Z",
              "actionsQuota": 0,
              "representative": "string",
              "lastUpdated": "2019-08-24T14:15:22Z",
              "plan": {},
              "municipality": {
                "name": "string",
                "email": "string",
                "phone": "string",
                "website": "string",
                "boundaries": {
                  "type": "Point",
                  "bbox": [
                    0
                  ],
                  "coordinates": [
                    [
                      [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ]
                    ]
                  ]
                },
                "members": [
                  {}
                ],
                "subscriptions": [
                  {}
                ],
                "regions": [
                  {
                    "boundaries": "string",
                    "municipality": {},
                    "approved": true,
                    "name": "string",
                    "government": true,
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  }
                ],
                "address": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "name": "string",
          "price": 0,
          "duration": 0,
          "updateInterval": 0,
          "active": true,
          "actionsQuota": 0,
          "description": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "session": "string",
    "profilePicture": "string",
    "address": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "id": "string",
    "notes": "string"
  },
  "amount": "string",
  "userId": "string",
  "subscription": {
    "transactions": [
      {
        "user": {
          "fullname": "string",
          "phone": "string",
          "email": "string",
          "username": "string",
          "password": "string",
          "status": "Active",
          "role": "Member",
          "municipality": {
            "name": "string",
            "email": "string",
            "phone": "string",
            "website": "string",
            "boundaries": {
              "type": "Point",
              "bbox": [
                0
              ],
              "coordinates": [
                [
                  [
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ]
                  ]
                ]
              ]
            },
            "members": [
              {}
            ],
            "subscriptions": [
              {}
            ],
            "regions": [
              {
                "boundaries": "string",
                "municipality": {},
                "approved": true,
                "name": "string",
                "government": true,
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "address": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          },
          "transactions": [
            {}
          ],
          "requests": [
            {
              "status": "Unread",
              "user": {},
              "plan": {
                "subscriptions": [
                  {}
                ],
                "name": "string",
                "price": 0,
                "duration": 0,
                "updateInterval": 0,
                "active": true,
                "actionsQuota": 0,
                "description": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "session": "string",
          "profilePicture": "string",
          "address": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "amount": "string",
        "userId": "string",
        "subscription": {},
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "start": "2019-08-24T14:15:22Z",
    "actionsQuota": 0,
    "representative": "string",
    "lastUpdated": "2019-08-24T14:15:22Z",
    "plan": {
      "subscriptions": [
        {}
      ],
      "name": "string",
      "price": 0,
      "duration": 0,
      "updateInterval": 0,
      "active": true,
      "actionsQuota": 0,
      "description": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "deleted": true,
      "id": "string",
      "notes": "string"
    },
    "municipality": {
      "name": "string",
      "email": "string",
      "phone": "string",
      "website": "string",
      "boundaries": {
        "type": "Point",
        "bbox": [
          0
        ],
        "coordinates": [
          [
            [
              [
                0,
                0
              ],
              [
                0,
                0
              ],
              [
                0,
                0
              ],
              [
                0,
                0
              ]
            ]
          ]
        ]
      },
      "members": [
        {
          "fullname": "string",
          "phone": "string",
          "email": "string",
          "username": "string",
          "password": "string",
          "status": "Active",
          "role": "Member",
          "municipality": {},
          "transactions": [
            {
              "user": {},
              "amount": "string",
              "userId": "string",
              "subscription": {},
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "requests": [
            {
              "status": "Unread",
              "user": {},
              "plan": {
                "subscriptions": [
                  {}
                ],
                "name": "string",
                "price": 0,
                "duration": 0,
                "updateInterval": 0,
                "active": true,
                "actionsQuota": 0,
                "description": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "session": "string",
          "profilePicture": "string",
          "address": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        }
      ],
      "subscriptions": [
        {}
      ],
      "regions": [
        {
          "boundaries": "string",
          "municipality": {},
          "approved": true,
          "name": "string",
          "government": true,
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        }
      ],
      "address": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "deleted": true,
      "id": "string",
      "notes": "string"
    },
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "id": "string",
    "notes": "string"
  },
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "id": "string",
  "notes": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[User](#schemauser)|false|none|none|
|amount|string|false|none|none|
|userId|string|false|none|none|
|subscription|[Subscription](#schemasubscription)|false|none|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|deleted|boolean|false|read-only|none|
|id|string|false|read-only|none|
|notes|string|false|none|none|

<h2 id="tocS_Subscription">Subscription</h2>

<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "transactions": [
    {
      "user": {
        "fullname": "string",
        "phone": "string",
        "email": "string",
        "username": "string",
        "password": "string",
        "status": "Active",
        "role": "Member",
        "municipality": {
          "name": "string",
          "email": "string",
          "phone": "string",
          "website": "string",
          "boundaries": {
            "type": "Point",
            "bbox": [
              0
            ],
            "coordinates": [
              [
                [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ]
              ]
            ]
          },
          "members": [
            {}
          ],
          "subscriptions": [
            {
              "transactions": [],
              "start": "2019-08-24T14:15:22Z",
              "actionsQuota": 0,
              "representative": "string",
              "lastUpdated": "2019-08-24T14:15:22Z",
              "plan": {
                "subscriptions": [
                  {}
                ],
                "name": "string",
                "price": 0,
                "duration": 0,
                "updateInterval": 0,
                "active": true,
                "actionsQuota": 0,
                "description": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "municipality": {},
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "regions": [
            {
              "boundaries": "string",
              "municipality": {},
              "approved": true,
              "name": "string",
              "government": true,
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "address": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "transactions": [
          {}
        ],
        "requests": [
          {
            "status": "Unread",
            "user": {},
            "plan": {
              "subscriptions": [
                {
                  "transactions": [],
                  "start": "2019-08-24T14:15:22Z",
                  "actionsQuota": 0,
                  "representative": "string",
                  "lastUpdated": "2019-08-24T14:15:22Z",
                  "plan": {},
                  "municipality": {
                    "name": "string",
                    "email": "string",
                    "phone": "string",
                    "website": "string",
                    "boundaries": {
                      "type": "Point",
                      "bbox": [
                        0
                      ],
                      "coordinates": [
                        [
                          [
                            [
                              null,
                              null
                            ],
                            [
                              null,
                              null
                            ],
                            [
                              null,
                              null
                            ],
                            [
                              null,
                              null
                            ]
                          ]
                        ]
                      ]
                    },
                    "members": [
                      {}
                    ],
                    "subscriptions": [
                      {}
                    ],
                    "regions": [
                      {
                        "boundaries": "string",
                        "municipality": {},
                        "approved": true,
                        "name": "string",
                        "government": true,
                        "createdAt": "2019-08-24T14:15:22Z",
                        "updatedAt": "2019-08-24T14:15:22Z",
                        "deleted": true,
                        "id": "string",
                        "notes": "string"
                      }
                    ],
                    "address": "string",
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  },
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "name": "string",
              "price": 0,
              "duration": 0,
              "updateInterval": 0,
              "active": true,
              "actionsQuota": 0,
              "description": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "session": "string",
        "profilePicture": "string",
        "address": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      },
      "amount": "string",
      "userId": "string",
      "subscription": {
        "transactions": [],
        "start": "2019-08-24T14:15:22Z",
        "actionsQuota": 0,
        "representative": "string",
        "lastUpdated": "2019-08-24T14:15:22Z",
        "plan": {
          "subscriptions": [
            {}
          ],
          "name": "string",
          "price": 0,
          "duration": 0,
          "updateInterval": 0,
          "active": true,
          "actionsQuota": 0,
          "description": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "municipality": {
          "name": "string",
          "email": "string",
          "phone": "string",
          "website": "string",
          "boundaries": {
            "type": "Point",
            "bbox": [
              0
            ],
            "coordinates": [
              [
                [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ]
              ]
            ]
          },
          "members": [
            {
              "fullname": "string",
              "phone": "string",
              "email": "string",
              "username": "string",
              "password": "string",
              "status": "Active",
              "role": "Member",
              "municipality": {},
              "transactions": [
                {}
              ],
              "requests": [
                {
                  "status": "Unread",
                  "user": {},
                  "plan": {
                    "subscriptions": [
                      {}
                    ],
                    "name": "string",
                    "price": 0,
                    "duration": 0,
                    "updateInterval": 0,
                    "active": true,
                    "actionsQuota": 0,
                    "description": "string",
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  },
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "session": "string",
              "profilePicture": "string",
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "subscriptions": [
            {}
          ],
          "regions": [
            {
              "boundaries": "string",
              "municipality": {},
              "approved": true,
              "name": "string",
              "government": true,
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "address": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      },
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "deleted": true,
      "id": "string",
      "notes": "string"
    }
  ],
  "start": "2019-08-24T14:15:22Z",
  "actionsQuota": 0,
  "representative": "string",
  "lastUpdated": "2019-08-24T14:15:22Z",
  "plan": {
    "subscriptions": [
      {
        "transactions": [
          {
            "user": {
              "fullname": "string",
              "phone": "string",
              "email": "string",
              "username": "string",
              "password": "string",
              "status": "Active",
              "role": "Member",
              "municipality": {
                "name": "string",
                "email": "string",
                "phone": "string",
                "website": "string",
                "boundaries": {
                  "type": "Point",
                  "bbox": [
                    0
                  ],
                  "coordinates": [
                    [
                      [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ]
                    ]
                  ]
                },
                "members": [
                  {}
                ],
                "subscriptions": [
                  {}
                ],
                "regions": [
                  {
                    "boundaries": "string",
                    "municipality": {},
                    "approved": true,
                    "name": "string",
                    "government": true,
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  }
                ],
                "address": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "transactions": [
                {}
              ],
              "requests": [
                {
                  "status": "Unread",
                  "user": {},
                  "plan": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "session": "string",
              "profilePicture": "string",
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "amount": "string",
            "userId": "string",
            "subscription": {},
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "start": "2019-08-24T14:15:22Z",
        "actionsQuota": 0,
        "representative": "string",
        "lastUpdated": "2019-08-24T14:15:22Z",
        "plan": {},
        "municipality": {
          "name": "string",
          "email": "string",
          "phone": "string",
          "website": "string",
          "boundaries": {
            "type": "Point",
            "bbox": [
              0
            ],
            "coordinates": [
              [
                [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ]
              ]
            ]
          },
          "members": [
            {
              "fullname": "string",
              "phone": "string",
              "email": "string",
              "username": "string",
              "password": "string",
              "status": "Active",
              "role": "Member",
              "municipality": {},
              "transactions": [
                {
                  "user": {},
                  "amount": "string",
                  "userId": "string",
                  "subscription": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "requests": [
                {
                  "status": "Unread",
                  "user": {},
                  "plan": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "session": "string",
              "profilePicture": "string",
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "subscriptions": [
            {}
          ],
          "regions": [
            {
              "boundaries": "string",
              "municipality": {},
              "approved": true,
              "name": "string",
              "government": true,
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "address": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "name": "string",
    "price": 0,
    "duration": 0,
    "updateInterval": 0,
    "active": true,
    "actionsQuota": 0,
    "description": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "id": "string",
    "notes": "string"
  },
  "municipality": {
    "name": "string",
    "email": "string",
    "phone": "string",
    "website": "string",
    "boundaries": {
      "type": "Point",
      "bbox": [
        0
      ],
      "coordinates": [
        [
          [
            [
              0,
              0
            ],
            [
              0,
              0
            ],
            [
              0,
              0
            ],
            [
              0,
              0
            ]
          ]
        ]
      ]
    },
    "members": [
      {
        "fullname": "string",
        "phone": "string",
        "email": "string",
        "username": "string",
        "password": "string",
        "status": "Active",
        "role": "Member",
        "municipality": {},
        "transactions": [
          {
            "user": {},
            "amount": "string",
            "userId": "string",
            "subscription": {
              "transactions": [
                {}
              ],
              "start": "2019-08-24T14:15:22Z",
              "actionsQuota": 0,
              "representative": "string",
              "lastUpdated": "2019-08-24T14:15:22Z",
              "plan": {
                "subscriptions": [
                  {}
                ],
                "name": "string",
                "price": 0,
                "duration": 0,
                "updateInterval": 0,
                "active": true,
                "actionsQuota": 0,
                "description": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "municipality": {},
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "requests": [
          {
            "status": "Unread",
            "user": {},
            "plan": {
              "subscriptions": [
                {
                  "transactions": [
                    {
                      "user": {},
                      "amount": "string",
                      "userId": "string",
                      "subscription": {},
                      "createdAt": "2019-08-24T14:15:22Z",
                      "updatedAt": "2019-08-24T14:15:22Z",
                      "deleted": true,
                      "id": "string",
                      "notes": "string"
                    }
                  ],
                  "start": "2019-08-24T14:15:22Z",
                  "actionsQuota": 0,
                  "representative": "string",
                  "lastUpdated": "2019-08-24T14:15:22Z",
                  "plan": {},
                  "municipality": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "name": "string",
              "price": 0,
              "duration": 0,
              "updateInterval": 0,
              "active": true,
              "actionsQuota": 0,
              "description": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "session": "string",
        "profilePicture": "string",
        "address": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "subscriptions": [
      {
        "transactions": [
          {
            "user": {
              "fullname": "string",
              "phone": "string",
              "email": "string",
              "username": "string",
              "password": "string",
              "status": "Active",
              "role": "Member",
              "municipality": {},
              "transactions": [
                {}
              ],
              "requests": [
                {
                  "status": "Unread",
                  "user": {},
                  "plan": {
                    "subscriptions": [
                      {}
                    ],
                    "name": "string",
                    "price": 0,
                    "duration": 0,
                    "updateInterval": 0,
                    "active": true,
                    "actionsQuota": 0,
                    "description": "string",
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  },
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "session": "string",
              "profilePicture": "string",
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "amount": "string",
            "userId": "string",
            "subscription": {},
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "start": "2019-08-24T14:15:22Z",
        "actionsQuota": 0,
        "representative": "string",
        "lastUpdated": "2019-08-24T14:15:22Z",
        "plan": {
          "subscriptions": [
            {}
          ],
          "name": "string",
          "price": 0,
          "duration": 0,
          "updateInterval": 0,
          "active": true,
          "actionsQuota": 0,
          "description": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "municipality": {},
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "regions": [
      {
        "boundaries": "string",
        "municipality": {},
        "approved": true,
        "name": "string",
        "government": true,
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "address": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "id": "string",
    "notes": "string"
  },
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "id": "string",
  "notes": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactions|[[Transaction](#schematransaction)]|false|write-only|none|
|start|string(date-time)|false|none|none|
|actionsQuota|number|false|none|none|
|representative|string|false|none|none|
|lastUpdated|string(date-time)|false|none|none|
|plan|[Plan](#schemaplan)|false|none|none|
|municipality|[Municipality](#schemamunicipality)|false|none|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|deleted|boolean|false|read-only|none|
|id|string|false|read-only|none|
|notes|string|false|none|none|

<h2 id="tocS_Municipality">Municipality</h2>

<a id="schemamunicipality"></a>
<a id="schema_Municipality"></a>
<a id="tocSmunicipality"></a>
<a id="tocsmunicipality"></a>

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "website": "string",
  "boundaries": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ]
    ]
  },
  "members": [
    {
      "fullname": "string",
      "phone": "string",
      "email": "string",
      "username": "string",
      "password": "string",
      "status": "Active",
      "role": "Member",
      "municipality": {
        "name": "string",
        "email": "string",
        "phone": "string",
        "website": "string",
        "boundaries": {
          "type": "Point",
          "bbox": [
            0
          ],
          "coordinates": [
            [
              [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ]
            ]
          ]
        },
        "members": [],
        "subscriptions": [
          {
            "transactions": [
              {
                "user": {},
                "amount": "string",
                "userId": "string",
                "subscription": {},
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "start": "2019-08-24T14:15:22Z",
            "actionsQuota": 0,
            "representative": "string",
            "lastUpdated": "2019-08-24T14:15:22Z",
            "plan": {
              "subscriptions": [
                {}
              ],
              "name": "string",
              "price": 0,
              "duration": 0,
              "updateInterval": 0,
              "active": true,
              "actionsQuota": 0,
              "description": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "municipality": {},
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "regions": [
          {
            "boundaries": "string",
            "municipality": {},
            "approved": true,
            "name": "string",
            "government": true,
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "address": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      },
      "transactions": [
        {
          "user": {},
          "amount": "string",
          "userId": "string",
          "subscription": {
            "transactions": [
              {}
            ],
            "start": "2019-08-24T14:15:22Z",
            "actionsQuota": 0,
            "representative": "string",
            "lastUpdated": "2019-08-24T14:15:22Z",
            "plan": {
              "subscriptions": [
                {}
              ],
              "name": "string",
              "price": 0,
              "duration": 0,
              "updateInterval": 0,
              "active": true,
              "actionsQuota": 0,
              "description": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "municipality": {
              "name": "string",
              "email": "string",
              "phone": "string",
              "website": "string",
              "boundaries": {
                "type": "Point",
                "bbox": [
                  0
                ],
                "coordinates": [
                  [
                    [
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ]
                    ]
                  ]
                ]
              },
              "members": [],
              "subscriptions": [
                {}
              ],
              "regions": [
                {
                  "boundaries": "string",
                  "municipality": {},
                  "approved": true,
                  "name": "string",
                  "government": true,
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          },
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        }
      ],
      "requests": [
        {
          "status": "Unread",
          "user": {},
          "plan": {
            "subscriptions": [
              {
                "transactions": [
                  {
                    "user": {},
                    "amount": "string",
                    "userId": "string",
                    "subscription": {},
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  }
                ],
                "start": "2019-08-24T14:15:22Z",
                "actionsQuota": 0,
                "representative": "string",
                "lastUpdated": "2019-08-24T14:15:22Z",
                "plan": {},
                "municipality": {
                  "name": "string",
                  "email": "string",
                  "phone": "string",
                  "website": "string",
                  "boundaries": {
                    "type": "Point",
                    "bbox": [
                      0
                    ],
                    "coordinates": [
                      [
                        [
                          [
                            0,
                            0
                          ],
                          [
                            0,
                            0
                          ],
                          [
                            0,
                            0
                          ],
                          [
                            0,
                            0
                          ]
                        ]
                      ]
                    ]
                  },
                  "members": [],
                  "subscriptions": [
                    {}
                  ],
                  "regions": [
                    {
                      "boundaries": "string",
                      "municipality": {},
                      "approved": true,
                      "name": "string",
                      "government": true,
                      "createdAt": "2019-08-24T14:15:22Z",
                      "updatedAt": "2019-08-24T14:15:22Z",
                      "deleted": true,
                      "id": "string",
                      "notes": "string"
                    }
                  ],
                  "address": "string",
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                },
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "name": "string",
            "price": 0,
            "duration": 0,
            "updateInterval": 0,
            "active": true,
            "actionsQuota": 0,
            "description": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          },
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        }
      ],
      "session": "string",
      "profilePicture": "string",
      "address": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "deleted": true,
      "id": "string",
      "notes": "string"
    }
  ],
  "subscriptions": [
    {
      "transactions": [
        {
          "user": {
            "fullname": "string",
            "phone": "string",
            "email": "string",
            "username": "string",
            "password": "string",
            "status": "Active",
            "role": "Member",
            "municipality": {
              "name": "string",
              "email": "string",
              "phone": "string",
              "website": "string",
              "boundaries": {
                "type": "Point",
                "bbox": [
                  0
                ],
                "coordinates": [
                  [
                    [
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ]
                    ]
                  ]
                ]
              },
              "members": [
                {}
              ],
              "subscriptions": [],
              "regions": [
                {
                  "boundaries": "string",
                  "municipality": {},
                  "approved": true,
                  "name": "string",
                  "government": true,
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "transactions": [
              {}
            ],
            "requests": [
              {
                "status": "Unread",
                "user": {},
                "plan": {
                  "subscriptions": [
                    {}
                  ],
                  "name": "string",
                  "price": 0,
                  "duration": 0,
                  "updateInterval": 0,
                  "active": true,
                  "actionsQuota": 0,
                  "description": "string",
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                },
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "session": "string",
            "profilePicture": "string",
            "address": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          },
          "amount": "string",
          "userId": "string",
          "subscription": {},
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        }
      ],
      "start": "2019-08-24T14:15:22Z",
      "actionsQuota": 0,
      "representative": "string",
      "lastUpdated": "2019-08-24T14:15:22Z",
      "plan": {
        "subscriptions": [
          {}
        ],
        "name": "string",
        "price": 0,
        "duration": 0,
        "updateInterval": 0,
        "active": true,
        "actionsQuota": 0,
        "description": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      },
      "municipality": {
        "name": "string",
        "email": "string",
        "phone": "string",
        "website": "string",
        "boundaries": {
          "type": "Point",
          "bbox": [
            0
          ],
          "coordinates": [
            [
              [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ]
            ]
          ]
        },
        "members": [
          {
            "fullname": "string",
            "phone": "string",
            "email": "string",
            "username": "string",
            "password": "string",
            "status": "Active",
            "role": "Member",
            "municipality": {},
            "transactions": [
              {
                "user": {},
                "amount": "string",
                "userId": "string",
                "subscription": {},
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "requests": [
              {
                "status": "Unread",
                "user": {},
                "plan": {
                  "subscriptions": [
                    {}
                  ],
                  "name": "string",
                  "price": 0,
                  "duration": 0,
                  "updateInterval": 0,
                  "active": true,
                  "actionsQuota": 0,
                  "description": "string",
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                },
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "session": "string",
            "profilePicture": "string",
            "address": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "subscriptions": [],
        "regions": [
          {
            "boundaries": "string",
            "municipality": {},
            "approved": true,
            "name": "string",
            "government": true,
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "address": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      },
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "deleted": true,
      "id": "string",
      "notes": "string"
    }
  ],
  "regions": [
    {
      "boundaries": "string",
      "municipality": {
        "name": "string",
        "email": "string",
        "phone": "string",
        "website": "string",
        "boundaries": {
          "type": "Point",
          "bbox": [
            0
          ],
          "coordinates": [
            [
              [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ]
            ]
          ]
        },
        "members": [
          {
            "fullname": "string",
            "phone": "string",
            "email": "string",
            "username": "string",
            "password": "string",
            "status": "Active",
            "role": "Member",
            "municipality": {},
            "transactions": [
              {
                "user": {},
                "amount": "string",
                "userId": "string",
                "subscription": {
                  "transactions": [
                    {}
                  ],
                  "start": "2019-08-24T14:15:22Z",
                  "actionsQuota": 0,
                  "representative": "string",
                  "lastUpdated": "2019-08-24T14:15:22Z",
                  "plan": {
                    "subscriptions": [
                      {}
                    ],
                    "name": "string",
                    "price": 0,
                    "duration": 0,
                    "updateInterval": 0,
                    "active": true,
                    "actionsQuota": 0,
                    "description": "string",
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  },
                  "municipality": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                },
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "requests": [
              {
                "status": "Unread",
                "user": {},
                "plan": {
                  "subscriptions": [
                    {
                      "transactions": [
                        {
                          "user": {},
                          "amount": "string",
                          "userId": "string",
                          "subscription": {},
                          "createdAt": "2019-08-24T14:15:22Z",
                          "updatedAt": "2019-08-24T14:15:22Z",
                          "deleted": true,
                          "id": "string",
                          "notes": "string"
                        }
                      ],
                      "start": "2019-08-24T14:15:22Z",
                      "actionsQuota": 0,
                      "representative": "string",
                      "lastUpdated": "2019-08-24T14:15:22Z",
                      "plan": {},
                      "municipality": {},
                      "createdAt": "2019-08-24T14:15:22Z",
                      "updatedAt": "2019-08-24T14:15:22Z",
                      "deleted": true,
                      "id": "string",
                      "notes": "string"
                    }
                  ],
                  "name": "string",
                  "price": 0,
                  "duration": 0,
                  "updateInterval": 0,
                  "active": true,
                  "actionsQuota": 0,
                  "description": "string",
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                },
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "session": "string",
            "profilePicture": "string",
            "address": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "subscriptions": [
          {
            "transactions": [
              {
                "user": {
                  "fullname": "string",
                  "phone": "string",
                  "email": "string",
                  "username": "string",
                  "password": "string",
                  "status": "Active",
                  "role": "Member",
                  "municipality": {},
                  "transactions": [
                    {}
                  ],
                  "requests": [
                    {
                      "status": "Unread",
                      "user": {},
                      "plan": {
                        "subscriptions": [
                          {}
                        ],
                        "name": "string",
                        "price": 0,
                        "duration": 0,
                        "updateInterval": 0,
                        "active": true,
                        "actionsQuota": 0,
                        "description": "string",
                        "createdAt": "2019-08-24T14:15:22Z",
                        "updatedAt": "2019-08-24T14:15:22Z",
                        "deleted": true,
                        "id": "string",
                        "notes": "string"
                      },
                      "createdAt": "2019-08-24T14:15:22Z",
                      "updatedAt": "2019-08-24T14:15:22Z",
                      "deleted": true,
                      "id": "string",
                      "notes": "string"
                    }
                  ],
                  "session": "string",
                  "profilePicture": "string",
                  "address": "string",
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                },
                "amount": "string",
                "userId": "string",
                "subscription": {},
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "start": "2019-08-24T14:15:22Z",
            "actionsQuota": 0,
            "representative": "string",
            "lastUpdated": "2019-08-24T14:15:22Z",
            "plan": {
              "subscriptions": [
                {}
              ],
              "name": "string",
              "price": 0,
              "duration": 0,
              "updateInterval": 0,
              "active": true,
              "actionsQuota": 0,
              "description": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "municipality": {},
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "regions": [],
        "address": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      },
      "approved": true,
      "name": "string",
      "government": true,
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "deleted": true,
      "id": "string",
      "notes": "string"
    }
  ],
  "address": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "id": "string",
  "notes": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|email|string|false|none|none|
|phone|string|false|none|none|
|website|string|false|none|none|
|boundaries|[MultiPolygon](#schemamultipolygon)|false|none|GeoJSon geometry|
|members|[[User](#schemauser)]|false|write-only|none|
|subscriptions|[[Subscription](#schemasubscription)]|false|write-only|none|
|regions|[[Region](#schemaregion)]|false|write-only|none|
|address|string|false|none|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|deleted|boolean|false|read-only|none|
|id|string|false|read-only|none|
|notes|string|false|none|none|

<h2 id="tocS_UserDto1">UserDto1</h2>

<a id="schemauserdto1"></a>
<a id="schema_UserDto1"></a>
<a id="tocSuserdto1"></a>
<a id="tocsuserdto1"></a>

```json
{
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "role": "string",
  "municipality": "string",
  "address": "string",
  "profilePicture": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullname|string|false|none|none|
|phone|string|false|none|none|
|email|string|false|none|none|
|username|string|false|none|none|
|role|string|false|none|none|
|municipality|string|false|none|none|
|address|string|false|none|none|
|profilePicture|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|deleted|boolean|false|none|none|
|notes|string|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_User">User</h2>

<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "password": "string",
  "status": "Active",
  "role": "Member",
  "municipality": {
    "name": "string",
    "email": "string",
    "phone": "string",
    "website": "string",
    "boundaries": {
      "type": "Point",
      "bbox": [
        0
      ],
      "coordinates": [
        [
          [
            [
              0,
              0
            ],
            [
              0,
              0
            ],
            [
              0,
              0
            ],
            [
              0,
              0
            ]
          ]
        ]
      ]
    },
    "members": [
      {
        "fullname": "string",
        "phone": "string",
        "email": "string",
        "username": "string",
        "password": "string",
        "status": "Active",
        "role": "Member",
        "municipality": {},
        "transactions": [
          {
            "user": {},
            "amount": "string",
            "userId": "string",
            "subscription": {
              "transactions": [
                {}
              ],
              "start": "2019-08-24T14:15:22Z",
              "actionsQuota": 0,
              "representative": "string",
              "lastUpdated": "2019-08-24T14:15:22Z",
              "plan": {
                "subscriptions": [
                  {}
                ],
                "name": "string",
                "price": 0,
                "duration": 0,
                "updateInterval": 0,
                "active": true,
                "actionsQuota": 0,
                "description": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "municipality": {},
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "requests": [
          {
            "status": "Unread",
            "user": {},
            "plan": {
              "subscriptions": [
                {
                  "transactions": [
                    {
                      "user": {},
                      "amount": "string",
                      "userId": "string",
                      "subscription": {},
                      "createdAt": "2019-08-24T14:15:22Z",
                      "updatedAt": "2019-08-24T14:15:22Z",
                      "deleted": true,
                      "id": "string",
                      "notes": "string"
                    }
                  ],
                  "start": "2019-08-24T14:15:22Z",
                  "actionsQuota": 0,
                  "representative": "string",
                  "lastUpdated": "2019-08-24T14:15:22Z",
                  "plan": {},
                  "municipality": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "name": "string",
              "price": 0,
              "duration": 0,
              "updateInterval": 0,
              "active": true,
              "actionsQuota": 0,
              "description": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "session": "string",
        "profilePicture": "string",
        "address": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "subscriptions": [
      {
        "transactions": [
          {
            "user": {
              "fullname": "string",
              "phone": "string",
              "email": "string",
              "username": "string",
              "password": "string",
              "status": "Active",
              "role": "Member",
              "municipality": {},
              "transactions": [
                {}
              ],
              "requests": [
                {
                  "status": "Unread",
                  "user": {},
                  "plan": {
                    "subscriptions": [
                      {}
                    ],
                    "name": "string",
                    "price": 0,
                    "duration": 0,
                    "updateInterval": 0,
                    "active": true,
                    "actionsQuota": 0,
                    "description": "string",
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  },
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "session": "string",
              "profilePicture": "string",
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "amount": "string",
            "userId": "string",
            "subscription": {},
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "start": "2019-08-24T14:15:22Z",
        "actionsQuota": 0,
        "representative": "string",
        "lastUpdated": "2019-08-24T14:15:22Z",
        "plan": {
          "subscriptions": [
            {}
          ],
          "name": "string",
          "price": 0,
          "duration": 0,
          "updateInterval": 0,
          "active": true,
          "actionsQuota": 0,
          "description": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "municipality": {},
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "regions": [
      {
        "boundaries": "string",
        "municipality": {},
        "approved": true,
        "name": "string",
        "government": true,
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "address": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "id": "string",
    "notes": "string"
  },
  "transactions": [
    {
      "user": {
        "fullname": "string",
        "phone": "string",
        "email": "string",
        "username": "string",
        "password": "string",
        "status": "Active",
        "role": "Member",
        "municipality": {
          "name": "string",
          "email": "string",
          "phone": "string",
          "website": "string",
          "boundaries": {
            "type": "Point",
            "bbox": [
              0
            ],
            "coordinates": [
              [
                [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ]
              ]
            ]
          },
          "members": [
            {}
          ],
          "subscriptions": [
            {
              "transactions": [
                {}
              ],
              "start": "2019-08-24T14:15:22Z",
              "actionsQuota": 0,
              "representative": "string",
              "lastUpdated": "2019-08-24T14:15:22Z",
              "plan": {
                "subscriptions": [
                  {}
                ],
                "name": "string",
                "price": 0,
                "duration": 0,
                "updateInterval": 0,
                "active": true,
                "actionsQuota": 0,
                "description": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "municipality": {},
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "regions": [
            {
              "boundaries": "string",
              "municipality": {},
              "approved": true,
              "name": "string",
              "government": true,
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "address": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "transactions": [],
        "requests": [
          {
            "status": "Unread",
            "user": {},
            "plan": {
              "subscriptions": [
                {
                  "transactions": [
                    {}
                  ],
                  "start": "2019-08-24T14:15:22Z",
                  "actionsQuota": 0,
                  "representative": "string",
                  "lastUpdated": "2019-08-24T14:15:22Z",
                  "plan": {},
                  "municipality": {
                    "name": "string",
                    "email": "string",
                    "phone": "string",
                    "website": "string",
                    "boundaries": {
                      "type": "Point",
                      "bbox": [
                        0
                      ],
                      "coordinates": [
                        [
                          [
                            [
                              null,
                              null
                            ],
                            [
                              null,
                              null
                            ],
                            [
                              null,
                              null
                            ],
                            [
                              null,
                              null
                            ]
                          ]
                        ]
                      ]
                    },
                    "members": [
                      {}
                    ],
                    "subscriptions": [
                      {}
                    ],
                    "regions": [
                      {
                        "boundaries": "string",
                        "municipality": {},
                        "approved": true,
                        "name": "string",
                        "government": true,
                        "createdAt": "2019-08-24T14:15:22Z",
                        "updatedAt": "2019-08-24T14:15:22Z",
                        "deleted": true,
                        "id": "string",
                        "notes": "string"
                      }
                    ],
                    "address": "string",
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  },
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "name": "string",
              "price": 0,
              "duration": 0,
              "updateInterval": 0,
              "active": true,
              "actionsQuota": 0,
              "description": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "session": "string",
        "profilePicture": "string",
        "address": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      },
      "amount": "string",
      "userId": "string",
      "subscription": {
        "transactions": [
          {}
        ],
        "start": "2019-08-24T14:15:22Z",
        "actionsQuota": 0,
        "representative": "string",
        "lastUpdated": "2019-08-24T14:15:22Z",
        "plan": {
          "subscriptions": [
            {}
          ],
          "name": "string",
          "price": 0,
          "duration": 0,
          "updateInterval": 0,
          "active": true,
          "actionsQuota": 0,
          "description": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "municipality": {
          "name": "string",
          "email": "string",
          "phone": "string",
          "website": "string",
          "boundaries": {
            "type": "Point",
            "bbox": [
              0
            ],
            "coordinates": [
              [
                [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ]
              ]
            ]
          },
          "members": [
            {
              "fullname": "string",
              "phone": "string",
              "email": "string",
              "username": "string",
              "password": "string",
              "status": "Active",
              "role": "Member",
              "municipality": {},
              "transactions": [],
              "requests": [
                {
                  "status": "Unread",
                  "user": {},
                  "plan": {
                    "subscriptions": [
                      {}
                    ],
                    "name": "string",
                    "price": 0,
                    "duration": 0,
                    "updateInterval": 0,
                    "active": true,
                    "actionsQuota": 0,
                    "description": "string",
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  },
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "session": "string",
              "profilePicture": "string",
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "subscriptions": [
            {}
          ],
          "regions": [
            {
              "boundaries": "string",
              "municipality": {},
              "approved": true,
              "name": "string",
              "government": true,
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "address": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      },
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "deleted": true,
      "id": "string",
      "notes": "string"
    }
  ],
  "requests": [
    {
      "status": "Unread",
      "user": {
        "fullname": "string",
        "phone": "string",
        "email": "string",
        "username": "string",
        "password": "string",
        "status": "Active",
        "role": "Member",
        "municipality": {
          "name": "string",
          "email": "string",
          "phone": "string",
          "website": "string",
          "boundaries": {
            "type": "Point",
            "bbox": [
              0
            ],
            "coordinates": [
              [
                [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ]
              ]
            ]
          },
          "members": [
            {}
          ],
          "subscriptions": [
            {
              "transactions": [
                {
                  "user": {},
                  "amount": "string",
                  "userId": "string",
                  "subscription": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "start": "2019-08-24T14:15:22Z",
              "actionsQuota": 0,
              "representative": "string",
              "lastUpdated": "2019-08-24T14:15:22Z",
              "plan": {
                "subscriptions": [
                  {}
                ],
                "name": "string",
                "price": 0,
                "duration": 0,
                "updateInterval": 0,
                "active": true,
                "actionsQuota": 0,
                "description": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "municipality": {},
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "regions": [
            {
              "boundaries": "string",
              "municipality": {},
              "approved": true,
              "name": "string",
              "government": true,
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "address": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "transactions": [
          {
            "user": {},
            "amount": "string",
            "userId": "string",
            "subscription": {
              "transactions": [
                {}
              ],
              "start": "2019-08-24T14:15:22Z",
              "actionsQuota": 0,
              "representative": "string",
              "lastUpdated": "2019-08-24T14:15:22Z",
              "plan": {
                "subscriptions": [
                  {}
                ],
                "name": "string",
                "price": 0,
                "duration": 0,
                "updateInterval": 0,
                "active": true,
                "actionsQuota": 0,
                "description": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "municipality": {
                "name": "string",
                "email": "string",
                "phone": "string",
                "website": "string",
                "boundaries": {
                  "type": "Point",
                  "bbox": [
                    0
                  ],
                  "coordinates": [
                    [
                      [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ]
                    ]
                  ]
                },
                "members": [
                  {}
                ],
                "subscriptions": [
                  {}
                ],
                "regions": [
                  {
                    "boundaries": "string",
                    "municipality": {},
                    "approved": true,
                    "name": "string",
                    "government": true,
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  }
                ],
                "address": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "requests": [],
        "session": "string",
        "profilePicture": "string",
        "address": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      },
      "plan": {
        "subscriptions": [
          {
            "transactions": [
              {
                "user": {
                  "fullname": "string",
                  "phone": "string",
                  "email": "string",
                  "username": "string",
                  "password": "string",
                  "status": "Active",
                  "role": "Member",
                  "municipality": {
                    "name": "string",
                    "email": "string",
                    "phone": "string",
                    "website": "string",
                    "boundaries": {
                      "type": "Point",
                      "bbox": [
                        0
                      ],
                      "coordinates": [
                        [
                          [
                            [
                              null,
                              null
                            ],
                            [
                              null,
                              null
                            ],
                            [
                              null,
                              null
                            ],
                            [
                              null,
                              null
                            ]
                          ]
                        ]
                      ]
                    },
                    "members": [
                      {}
                    ],
                    "subscriptions": [
                      {}
                    ],
                    "regions": [
                      {
                        "boundaries": "string",
                        "municipality": {},
                        "approved": true,
                        "name": "string",
                        "government": true,
                        "createdAt": "2019-08-24T14:15:22Z",
                        "updatedAt": "2019-08-24T14:15:22Z",
                        "deleted": true,
                        "id": "string",
                        "notes": "string"
                      }
                    ],
                    "address": "string",
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  },
                  "transactions": [
                    {}
                  ],
                  "requests": [],
                  "session": "string",
                  "profilePicture": "string",
                  "address": "string",
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                },
                "amount": "string",
                "userId": "string",
                "subscription": {},
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "start": "2019-08-24T14:15:22Z",
            "actionsQuota": 0,
            "representative": "string",
            "lastUpdated": "2019-08-24T14:15:22Z",
            "plan": {},
            "municipality": {
              "name": "string",
              "email": "string",
              "phone": "string",
              "website": "string",
              "boundaries": {
                "type": "Point",
                "bbox": [
                  0
                ],
                "coordinates": [
                  [
                    [
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ]
                    ]
                  ]
                ]
              },
              "members": [
                {
                  "fullname": "string",
                  "phone": "string",
                  "email": "string",
                  "username": "string",
                  "password": "string",
                  "status": "Active",
                  "role": "Member",
                  "municipality": {},
                  "transactions": [
                    {
                      "user": {},
                      "amount": "string",
                      "userId": "string",
                      "subscription": {},
                      "createdAt": "2019-08-24T14:15:22Z",
                      "updatedAt": "2019-08-24T14:15:22Z",
                      "deleted": true,
                      "id": "string",
                      "notes": "string"
                    }
                  ],
                  "requests": [],
                  "session": "string",
                  "profilePicture": "string",
                  "address": "string",
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "subscriptions": [
                {}
              ],
              "regions": [
                {
                  "boundaries": "string",
                  "municipality": {},
                  "approved": true,
                  "name": "string",
                  "government": true,
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "name": "string",
        "price": 0,
        "duration": 0,
        "updateInterval": 0,
        "active": true,
        "actionsQuota": 0,
        "description": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      },
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "deleted": true,
      "id": "string",
      "notes": "string"
    }
  ],
  "session": "string",
  "profilePicture": "string",
  "address": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "id": "string",
  "notes": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullname|string|false|none|none|
|phone|string|false|none|none|
|email|string|false|none|none|
|username|string|false|none|none|
|password|string|false|write-only|none|
|status|string|false|none|none|
|role|string|false|none|none|
|municipality|[Municipality](#schemamunicipality)|false|none|none|
|transactions|[[Transaction](#schematransaction)]|false|write-only|none|
|requests|[[Request](#schemarequest)]|false|write-only|none|
|session|string|false|write-only|none|
|profilePicture|string|false|read-only|none|
|address|string|false|none|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|deleted|boolean|false|read-only|none|
|id|string|false|read-only|none|
|notes|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Active|
|status|Suspended|
|role|Member|
|role|Supervisor|
|role|Admin|
|role|System|

<h2 id="tocS_Region">Region</h2>

<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
{
  "boundaries": "string",
  "municipality": {
    "name": "string",
    "email": "string",
    "phone": "string",
    "website": "string",
    "boundaries": {
      "type": "Point",
      "bbox": [
        0
      ],
      "coordinates": [
        [
          [
            [
              0,
              0
            ],
            [
              0,
              0
            ],
            [
              0,
              0
            ],
            [
              0,
              0
            ]
          ]
        ]
      ]
    },
    "members": [
      {
        "fullname": "string",
        "phone": "string",
        "email": "string",
        "username": "string",
        "password": "string",
        "status": "Active",
        "role": "Member",
        "municipality": {},
        "transactions": [
          {
            "user": {},
            "amount": "string",
            "userId": "string",
            "subscription": {
              "transactions": [
                {}
              ],
              "start": "2019-08-24T14:15:22Z",
              "actionsQuota": 0,
              "representative": "string",
              "lastUpdated": "2019-08-24T14:15:22Z",
              "plan": {
                "subscriptions": [
                  {}
                ],
                "name": "string",
                "price": 0,
                "duration": 0,
                "updateInterval": 0,
                "active": true,
                "actionsQuota": 0,
                "description": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "municipality": {},
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "requests": [
          {
            "status": "Unread",
            "user": {},
            "plan": {
              "subscriptions": [
                {
                  "transactions": [
                    {
                      "user": {},
                      "amount": "string",
                      "userId": "string",
                      "subscription": {},
                      "createdAt": "2019-08-24T14:15:22Z",
                      "updatedAt": "2019-08-24T14:15:22Z",
                      "deleted": true,
                      "id": "string",
                      "notes": "string"
                    }
                  ],
                  "start": "2019-08-24T14:15:22Z",
                  "actionsQuota": 0,
                  "representative": "string",
                  "lastUpdated": "2019-08-24T14:15:22Z",
                  "plan": {},
                  "municipality": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "name": "string",
              "price": 0,
              "duration": 0,
              "updateInterval": 0,
              "active": true,
              "actionsQuota": 0,
              "description": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "session": "string",
        "profilePicture": "string",
        "address": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "subscriptions": [
      {
        "transactions": [
          {
            "user": {
              "fullname": "string",
              "phone": "string",
              "email": "string",
              "username": "string",
              "password": "string",
              "status": "Active",
              "role": "Member",
              "municipality": {},
              "transactions": [
                {}
              ],
              "requests": [
                {
                  "status": "Unread",
                  "user": {},
                  "plan": {
                    "subscriptions": [
                      {}
                    ],
                    "name": "string",
                    "price": 0,
                    "duration": 0,
                    "updateInterval": 0,
                    "active": true,
                    "actionsQuota": 0,
                    "description": "string",
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  },
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "session": "string",
              "profilePicture": "string",
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "amount": "string",
            "userId": "string",
            "subscription": {},
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "start": "2019-08-24T14:15:22Z",
        "actionsQuota": 0,
        "representative": "string",
        "lastUpdated": "2019-08-24T14:15:22Z",
        "plan": {
          "subscriptions": [
            {}
          ],
          "name": "string",
          "price": 0,
          "duration": 0,
          "updateInterval": 0,
          "active": true,
          "actionsQuota": 0,
          "description": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "municipality": {},
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "regions": [
      {
        "boundaries": "string",
        "municipality": {},
        "approved": true,
        "name": "string",
        "government": true,
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "address": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "id": "string",
    "notes": "string"
  },
  "approved": true,
  "name": "string",
  "government": true,
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "id": "string",
  "notes": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundaries|string|false|none|none|
|municipality|[Municipality](#schemamunicipality)|false|none|none|
|approved|boolean|false|none|none|
|name|string|false|none|none|
|government|boolean|false|none|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|deleted|boolean|false|read-only|none|
|id|string|false|read-only|none|
|notes|string|false|none|none|

<h2 id="tocS_PlanDto">PlanDto</h2>

<a id="schemaplandto"></a>
<a id="schema_PlanDto"></a>
<a id="tocSplandto"></a>
<a id="tocsplandto"></a>

```json
{
  "id": "string",
  "name": "string",
  "price": 0,
  "duration": 0,
  "updateInterval": 0,
  "active": true,
  "actionsQuota": 0,
  "description": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|price|number|false|none|none|
|duration|number|false|none|none|
|updateInterval|number|false|none|none|
|active|boolean|false|none|none|
|actionsQuota|number|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_Plan">Plan</h2>

<a id="schemaplan"></a>
<a id="schema_Plan"></a>
<a id="tocSplan"></a>
<a id="tocsplan"></a>

```json
{
  "subscriptions": [
    {
      "transactions": [
        {
          "user": {
            "fullname": "string",
            "phone": "string",
            "email": "string",
            "username": "string",
            "password": "string",
            "status": "Active",
            "role": "Member",
            "municipality": {
              "name": "string",
              "email": "string",
              "phone": "string",
              "website": "string",
              "boundaries": {
                "type": "Point",
                "bbox": [
                  0
                ],
                "coordinates": [
                  [
                    [
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ]
                    ]
                  ]
                ]
              },
              "members": [
                {}
              ],
              "subscriptions": [
                {}
              ],
              "regions": [
                {
                  "boundaries": "string",
                  "municipality": {},
                  "approved": true,
                  "name": "string",
                  "government": true,
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "transactions": [
              {}
            ],
            "requests": [
              {
                "status": "Unread",
                "user": {},
                "plan": {
                  "subscriptions": [],
                  "name": "string",
                  "price": 0,
                  "duration": 0,
                  "updateInterval": 0,
                  "active": true,
                  "actionsQuota": 0,
                  "description": "string",
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                },
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "session": "string",
            "profilePicture": "string",
            "address": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          },
          "amount": "string",
          "userId": "string",
          "subscription": {},
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        }
      ],
      "start": "2019-08-24T14:15:22Z",
      "actionsQuota": 0,
      "representative": "string",
      "lastUpdated": "2019-08-24T14:15:22Z",
      "plan": {
        "subscriptions": [],
        "name": "string",
        "price": 0,
        "duration": 0,
        "updateInterval": 0,
        "active": true,
        "actionsQuota": 0,
        "description": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      },
      "municipality": {
        "name": "string",
        "email": "string",
        "phone": "string",
        "website": "string",
        "boundaries": {
          "type": "Point",
          "bbox": [
            0
          ],
          "coordinates": [
            [
              [
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ],
                [
                  0,
                  0
                ]
              ]
            ]
          ]
        },
        "members": [
          {
            "fullname": "string",
            "phone": "string",
            "email": "string",
            "username": "string",
            "password": "string",
            "status": "Active",
            "role": "Member",
            "municipality": {},
            "transactions": [
              {
                "user": {},
                "amount": "string",
                "userId": "string",
                "subscription": {},
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "requests": [
              {
                "status": "Unread",
                "user": {},
                "plan": {
                  "subscriptions": [],
                  "name": "string",
                  "price": 0,
                  "duration": 0,
                  "updateInterval": 0,
                  "active": true,
                  "actionsQuota": 0,
                  "description": "string",
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                },
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "session": "string",
            "profilePicture": "string",
            "address": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "subscriptions": [
          {}
        ],
        "regions": [
          {
            "boundaries": "string",
            "municipality": {},
            "approved": true,
            "name": "string",
            "government": true,
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "address": "string",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      },
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "deleted": true,
      "id": "string",
      "notes": "string"
    }
  ],
  "name": "string",
  "price": 0,
  "duration": 0,
  "updateInterval": 0,
  "active": true,
  "actionsQuota": 0,
  "description": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "id": "string",
  "notes": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscriptions|[[Subscription](#schemasubscription)]|false|read-only|none|
|name|string|false|none|none|
|price|number|false|none|none|
|duration|number|false|none|none|
|updateInterval|number|false|none|none|
|active|boolean|false|none|none|
|actionsQuota|number|false|none|none|
|description|string|false|none|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|deleted|boolean|false|read-only|none|
|id|string|false|read-only|none|
|notes|string|false|none|none|

<h2 id="tocS_RegionDto">RegionDto</h2>

<a id="schemaregiondto"></a>
<a id="schema_RegionDto"></a>
<a id="tocSregiondto"></a>
<a id="tocsregiondto"></a>

```json
{
  "name": "string",
  "boundaries": {
    "type": "Point",
    "bbox": [
      0
    ],
    "coordinates": [
      [
        [
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ],
          [
            0,
            0
          ]
        ]
      ]
    ]
  },
  "government": true,
  "municipality": "string",
  "approved": true,
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|boundaries|[MultiPolygon](#schemamultipolygon)|false|none|GeoJSon geometry|
|government|boolean|false|none|none|
|municipality|string|false|none|none|
|approved|boolean|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|deleted|boolean|false|none|none|
|notes|string|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_RequestDto">RequestDto</h2>

<a id="schemarequestdto"></a>
<a id="schema_RequestDto"></a>
<a id="tocSrequestdto"></a>
<a id="tocsrequestdto"></a>

```json
{
  "user": "string",
  "status": "string",
  "plan": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|string|false|none|none|
|status|string|false|none|none|
|plan|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|deleted|boolean|false|none|none|
|notes|string|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_Request">Request</h2>

<a id="schemarequest"></a>
<a id="schema_Request"></a>
<a id="tocSrequest"></a>
<a id="tocsrequest"></a>

```json
{
  "status": "Unread",
  "user": {
    "fullname": "string",
    "phone": "string",
    "email": "string",
    "username": "string",
    "password": "string",
    "status": "Active",
    "role": "Member",
    "municipality": {
      "name": "string",
      "email": "string",
      "phone": "string",
      "website": "string",
      "boundaries": {
        "type": "Point",
        "bbox": [
          0
        ],
        "coordinates": [
          [
            [
              [
                0,
                0
              ],
              [
                0,
                0
              ],
              [
                0,
                0
              ],
              [
                0,
                0
              ]
            ]
          ]
        ]
      },
      "members": [
        {}
      ],
      "subscriptions": [
        {
          "transactions": [
            {
              "user": {},
              "amount": "string",
              "userId": "string",
              "subscription": {},
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "start": "2019-08-24T14:15:22Z",
          "actionsQuota": 0,
          "representative": "string",
          "lastUpdated": "2019-08-24T14:15:22Z",
          "plan": {
            "subscriptions": [
              {}
            ],
            "name": "string",
            "price": 0,
            "duration": 0,
            "updateInterval": 0,
            "active": true,
            "actionsQuota": 0,
            "description": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          },
          "municipality": {},
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        }
      ],
      "regions": [
        {
          "boundaries": "string",
          "municipality": {},
          "approved": true,
          "name": "string",
          "government": true,
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        }
      ],
      "address": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "deleted": true,
      "id": "string",
      "notes": "string"
    },
    "transactions": [
      {
        "user": {},
        "amount": "string",
        "userId": "string",
        "subscription": {
          "transactions": [
            {}
          ],
          "start": "2019-08-24T14:15:22Z",
          "actionsQuota": 0,
          "representative": "string",
          "lastUpdated": "2019-08-24T14:15:22Z",
          "plan": {
            "subscriptions": [
              {}
            ],
            "name": "string",
            "price": 0,
            "duration": 0,
            "updateInterval": 0,
            "active": true,
            "actionsQuota": 0,
            "description": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          },
          "municipality": {
            "name": "string",
            "email": "string",
            "phone": "string",
            "website": "string",
            "boundaries": {
              "type": "Point",
              "bbox": [
                0
              ],
              "coordinates": [
                [
                  [
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ],
                    [
                      0,
                      0
                    ]
                  ]
                ]
              ]
            },
            "members": [
              {}
            ],
            "subscriptions": [
              {}
            ],
            "regions": [
              {
                "boundaries": "string",
                "municipality": {},
                "approved": true,
                "name": "string",
                "government": true,
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              }
            ],
            "address": "string",
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          },
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "requests": [
      {
        "status": "Unread",
        "user": {},
        "plan": {
          "subscriptions": [
            {
              "transactions": [
                {
                  "user": {},
                  "amount": "string",
                  "userId": "string",
                  "subscription": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "start": "2019-08-24T14:15:22Z",
              "actionsQuota": 0,
              "representative": "string",
              "lastUpdated": "2019-08-24T14:15:22Z",
              "plan": {},
              "municipality": {
                "name": "string",
                "email": "string",
                "phone": "string",
                "website": "string",
                "boundaries": {
                  "type": "Point",
                  "bbox": [
                    0
                  ],
                  "coordinates": [
                    [
                      [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ]
                    ]
                  ]
                },
                "members": [
                  {}
                ],
                "subscriptions": [
                  {}
                ],
                "regions": [
                  {
                    "boundaries": "string",
                    "municipality": {},
                    "approved": true,
                    "name": "string",
                    "government": true,
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  }
                ],
                "address": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "name": "string",
          "price": 0,
          "duration": 0,
          "updateInterval": 0,
          "active": true,
          "actionsQuota": 0,
          "description": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "session": "string",
    "profilePicture": "string",
    "address": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "id": "string",
    "notes": "string"
  },
  "plan": {
    "subscriptions": [
      {
        "transactions": [
          {
            "user": {
              "fullname": "string",
              "phone": "string",
              "email": "string",
              "username": "string",
              "password": "string",
              "status": "Active",
              "role": "Member",
              "municipality": {
                "name": "string",
                "email": "string",
                "phone": "string",
                "website": "string",
                "boundaries": {
                  "type": "Point",
                  "bbox": [
                    0
                  ],
                  "coordinates": [
                    [
                      [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ]
                    ]
                  ]
                },
                "members": [
                  {}
                ],
                "subscriptions": [
                  {}
                ],
                "regions": [
                  {
                    "boundaries": "string",
                    "municipality": {},
                    "approved": true,
                    "name": "string",
                    "government": true,
                    "createdAt": "2019-08-24T14:15:22Z",
                    "updatedAt": "2019-08-24T14:15:22Z",
                    "deleted": true,
                    "id": "string",
                    "notes": "string"
                  }
                ],
                "address": "string",
                "createdAt": "2019-08-24T14:15:22Z",
                "updatedAt": "2019-08-24T14:15:22Z",
                "deleted": true,
                "id": "string",
                "notes": "string"
              },
              "transactions": [
                {}
              ],
              "requests": [
                {
                  "status": "Unread",
                  "user": {},
                  "plan": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "session": "string",
              "profilePicture": "string",
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            },
            "amount": "string",
            "userId": "string",
            "subscription": {},
            "createdAt": "2019-08-24T14:15:22Z",
            "updatedAt": "2019-08-24T14:15:22Z",
            "deleted": true,
            "id": "string",
            "notes": "string"
          }
        ],
        "start": "2019-08-24T14:15:22Z",
        "actionsQuota": 0,
        "representative": "string",
        "lastUpdated": "2019-08-24T14:15:22Z",
        "plan": {},
        "municipality": {
          "name": "string",
          "email": "string",
          "phone": "string",
          "website": "string",
          "boundaries": {
            "type": "Point",
            "bbox": [
              0
            ],
            "coordinates": [
              [
                [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ]
              ]
            ]
          },
          "members": [
            {
              "fullname": "string",
              "phone": "string",
              "email": "string",
              "username": "string",
              "password": "string",
              "status": "Active",
              "role": "Member",
              "municipality": {},
              "transactions": [
                {
                  "user": {},
                  "amount": "string",
                  "userId": "string",
                  "subscription": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "requests": [
                {
                  "status": "Unread",
                  "user": {},
                  "plan": {},
                  "createdAt": "2019-08-24T14:15:22Z",
                  "updatedAt": "2019-08-24T14:15:22Z",
                  "deleted": true,
                  "id": "string",
                  "notes": "string"
                }
              ],
              "session": "string",
              "profilePicture": "string",
              "address": "string",
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "subscriptions": [
            {}
          ],
          "regions": [
            {
              "boundaries": "string",
              "municipality": {},
              "approved": true,
              "name": "string",
              "government": true,
              "createdAt": "2019-08-24T14:15:22Z",
              "updatedAt": "2019-08-24T14:15:22Z",
              "deleted": true,
              "id": "string",
              "notes": "string"
            }
          ],
          "address": "string",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "deleted": true,
          "id": "string",
          "notes": "string"
        },
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "deleted": true,
        "id": "string",
        "notes": "string"
      }
    ],
    "name": "string",
    "price": 0,
    "duration": 0,
    "updateInterval": 0,
    "active": true,
    "actionsQuota": 0,
    "description": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "id": "string",
    "notes": "string"
  },
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "id": "string",
  "notes": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|user|[User](#schemauser)|false|none|none|
|plan|[Plan](#schemaplan)|false|none|none|
|createdAt|string(date-time)|false|read-only|none|
|updatedAt|string(date-time)|false|read-only|none|
|deleted|boolean|false|read-only|none|
|id|string|false|read-only|none|
|notes|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Unread|
|status|Read|
|status|Done|

<h2 id="tocS_SubClassificationDto">SubClassificationDto</h2>

<a id="schemasubclassificationdto"></a>
<a id="schema_SubClassificationDto"></a>
<a id="tocSsubclassificationdto"></a>
<a id="tocssubclassificationdto"></a>

```json
{
  "id": "string",
  "name": "string",
  "classification": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|classification|string|false|none|none|

<h2 id="tocS_TransactionDto">TransactionDto</h2>

<a id="schematransactiondto"></a>
<a id="schema_TransactionDto"></a>
<a id="tocStransactiondto"></a>
<a id="tocstransactiondto"></a>

```json
{
  "amount": "string",
  "user": "string",
  "subscription": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|false|none|none|
|user|string|false|none|none|
|subscription|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|updatedAt|string(date-time)|false|none|none|
|deleted|boolean|false|none|none|
|notes|string|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_GeoJsonObject">GeoJsonObject</h2>

<a id="schemageojsonobject"></a>
<a id="schema_GeoJsonObject"></a>
<a id="tocSgeojsonobject"></a>
<a id="tocsgeojsonobject"></a>

```json
{
  "type": "Feature",
  "bbox": [
    0
  ]
}

```

    GeoJSon object

    The coordinate reference system for all GeoJSON coordinates is a
    geographic coordinate reference system, using the World Geodetic System
    1984 (WGS 84) datum, with longitude and latitude units of decimal
    degrees.
    This is equivalent to the coordinate reference system identified by the
    Open Geospatial Consortium (OGC) URN
    An OPTIONAL third-position element SHALL be the height in meters above
    or below the WGS 84 reference ellipsoid.
    In the absence of elevation values, applications sensitive to height or
    depth SHOULD interpret positions as being at local ground or sea level.

<a href="https://tools.ietf.org/html/rfc7946#section-3">External documentation</a>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|bbox|[number]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|
|type|FeatureCollection|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|
|type|GeometryCollection|

<h2 id="tocS_Geometry">Geometry</h2>

<a id="schemageometry"></a>
<a id="schema_Geometry"></a>
<a id="tocSgeometry"></a>
<a id="tocsgeometry"></a>

```json
{
  "type": "Point",
  "bbox": [
    0
  ]
}

```

        Abstract type for all GeoJSon object except Feature and
        FeatureCollection

<a href="https://tools.ietf.org/html/rfc7946#section-3">External documentation</a>

### Properties

allOf - discriminator: GeoJsonObject.type

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[GeoJsonObject](#schemageojsonobject)|false|none|GeoJSon object<br><br>    The coordinate reference system for all GeoJSON coordinates is a<br>    geographic coordinate reference system, using the World Geodetic System<br>    1984 (WGS 84) datum, with longitude and latitude units of decimal<br>    degrees.<br>    This is equivalent to the coordinate reference system identified by the<br>    Open Geospatial Consortium (OGC) URN<br>    An OPTIONAL third-position element SHALL be the height in meters above<br>    or below the WGS 84 reference ellipsoid.<br>    In the absence of elevation values, applications sensitive to height or<br>    depth SHOULD interpret positions as being at local ground or sea level.|

and - discriminator: type

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|
|type|GeometryCollection|

<h2 id="tocS_GeometryElement">GeometryElement</h2>

<a id="schemageometryelement"></a>
<a id="schema_GeometryElement"></a>
<a id="tocSgeometryelement"></a>
<a id="tocsgeometryelement"></a>

```json
{
  "type": "Point",
  "bbox": [
    0
  ]
}

```

      Abstract type for all GeoJSon 'Geometry' object the type of which is not
      'GeometryCollection'

<a href="https://tools.ietf.org/html/rfc7946#section-3">External documentation</a>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Geometry](#schemageometry)|false|none|Abstract type for all GeoJSon object except Feature and<br>        FeatureCollection|

and - discriminator: type

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Point|
|type|MultiPoint|
|type|LineString|
|type|MultiLineString|
|type|Polygon|
|type|MultiPolygon|

<h2 id="tocS_Feature">Feature</h2>

<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
{
  "type": "Feature",
  "bbox": [
    0
  ],
  "geometry": {
    "type": "Point",
    "bbox": [
      0
    ]
  },
  "properties": {},
  "id": 0
}

```

GeoJSon 'Feature' object

<a href="https://tools.ietf.org/html/rfc7946#section-3.2">External documentation</a>

### Properties

allOf - discriminator: GeoJsonObject.type

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[GeoJsonObject](#schemageojsonobject)|false|none|GeoJSon object<br><br>    The coordinate reference system for all GeoJSON coordinates is a<br>    geographic coordinate reference system, using the World Geodetic System<br>    1984 (WGS 84) datum, with longitude and latitude units of decimal<br>    degrees.<br>    This is equivalent to the coordinate reference system identified by the<br>    Open Geospatial Consortium (OGC) URN<br>    An OPTIONAL third-position element SHALL be the height in meters above<br>    or below the WGS 84 reference ellipsoid.<br>    In the absence of elevation values, applications sensitive to height or<br>    depth SHOULD interpret positions as being at local ground or sea level.|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; geometry|any|true|none|none|

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|any|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|[Geometry](#schemageometry)|false|none|Abstract type for all GeoJSon object except Feature and<br>        FeatureCollection|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp; properties|object¦null|true|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; id|any|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|number|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *anonymous*|string|false|none|none|

<h2 id="tocS_FeatureCollection">FeatureCollection</h2>

<a id="schemafeaturecollection"></a>
<a id="schema_FeatureCollection"></a>
<a id="tocSfeaturecollection"></a>
<a id="tocsfeaturecollection"></a>

```json
{
  "type": "Feature",
  "bbox": [
    0
  ],
  "features": [
    {
      "type": "Feature",
      "bbox": [
        0
      ],
      "geometry": {
        "type": "Point",
        "bbox": [
          0
        ]
      },
      "properties": {},
      "id": 0
    }
  ]
}

```

GeoJSon 'FeatureCollection' object

<a href="https://tools.ietf.org/html/rfc7946#section-3.3">External documentation</a>

### Properties

allOf - discriminator: GeoJsonObject.type

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[GeoJsonObject](#schemageojsonobject)|false|none|GeoJSon object<br><br>    The coordinate reference system for all GeoJSON coordinates is a<br>    geographic coordinate reference system, using the World Geodetic System<br>    1984 (WGS 84) datum, with longitude and latitude units of decimal<br>    degrees.<br>    This is equivalent to the coordinate reference system identified by the<br>    Open Geospatial Consortium (OGC) URN<br>    An OPTIONAL third-position element SHALL be the height in meters above<br>    or below the WGS 84 reference ellipsoid.<br>    In the absence of elevation values, applications sensitive to height or<br>    depth SHOULD interpret positions as being at local ground or sea level.|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; features|[[Feature](#schemafeature)]|true|none|[GeoJSon 'Feature' object]|

<h2 id="tocS_Position">Position</h2>

<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
[
  0,
  0
]

```

      GeoJSon fundamental geometry construct.
      
      A position is an array of numbers. There MUST be two or more elements.
      The first two elements are longitude and latitude, or easting and
      northing, precisely in that order and using decimal numbers.
      Altitude or elevation MAY be included as an optional third element.
      
      Implementations SHOULD NOT extend positions beyond three elements
      because the semantics of extra elements are unspecified and ambiguous.
      Historically, some implementations have used a fourth element to carry
      a linear referencing measure (sometimes denoted as "M") or a numerical
      timestamp, but in most situations a parser will not be able to properly
      interpret these values. The interpretation and meaning of additional
      elements is beyond the scope of this specification, and additional
      elements MAY be ignored by parsers.

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.1">External documentation</a>

### Properties

*None*

<h2 id="tocS_LineStringCoordinates">LineStringCoordinates</h2>

<a id="schemalinestringcoordinates"></a>
<a id="schema_LineStringCoordinates"></a>
<a id="tocSlinestringcoordinates"></a>
<a id="tocslinestringcoordinates"></a>

```json
[
  [
    0,
    0
  ],
  [
    0,
    0
  ]
]

```

GeoJSon fundamental geometry construct, array of two or more positions.

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.4">External documentation</a>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Position](#schemaposition)]|false|none|GeoJSon fundamental geometry construct, array of two or more positions.|

<h2 id="tocS_LinearRing">LinearRing</h2>

<a id="schemalinearring"></a>
<a id="schema_LinearRing"></a>
<a id="tocSlinearring"></a>
<a id="tocslinearring"></a>

```json
[
  [
    0,
    0
  ],
  [
    0,
    0
  ],
  [
    0,
    0
  ],
  [
    0,
    0
  ]
]

```

      A linear ring is a closed LineString with four or more positions.
      
      The first and last positions are equivalent, and they MUST contain
      identical values; their representation SHOULD also be identical.
      
      A linear ring is the boundary of a surface or the boundary of a hole in
      a surface.
      
      A linear ring MUST follow the right-hand rule with respect to the area
      it bounds, i.e., exterior rings are counterclockwise, and holes are
      clockwise.

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.6">External documentation</a>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Position](#schemaposition)]|false|none|A linear ring is a closed LineString with four or more positions.<br>      <br>      The first and last positions are equivalent, and they MUST contain<br>      identical values; their representation SHOULD also be identical.<br>      <br>      A linear ring is the boundary of a surface or the boundary of a hole in<br>      a surface.<br>      <br>      A linear ring MUST follow the right-hand rule with respect to the area<br>      it bounds, i.e., exterior rings are counterclockwise, and holes are<br>      clockwise.|

<h2 id="tocS_MultiPoint">MultiPoint</h2>

<a id="schemamultipoint"></a>
<a id="schema_MultiPoint"></a>
<a id="tocSmultipoint"></a>
<a id="tocsmultipoint"></a>

```json
{
  "type": "Point",
  "bbox": [
    0
  ],
  "coordinates": [
    [
      0,
      0
    ]
  ]
}

```

GeoJSon geometry

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.3">External documentation</a>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[GeometryElement](#schemageometryelement)|false|none|Abstract type for all GeoJSon 'Geometry' object the type of which is not<br>      'GeometryCollection'|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; coordinates|[[Position](#schemaposition)]|true|none|[<br>      GeoJSon fundamental geometry construct.<br>      <br>      A position is an array of numbers. There MUST be two or more elements.<br>      The first two elements are longitude and latitude, or easting and<br>      northing, precisely in that order and using decimal numbers.<br>      Altitude or elevation MAY be included as an optional third element.<br>      <br>      Implementations SHOULD NOT extend positions beyond three elements<br>      because the semantics of extra elements are unspecified and ambiguous.<br>      Historically, some implementations have used a fourth element to carry<br>      a linear referencing measure (sometimes denoted as "M") or a numerical<br>      timestamp, but in most situations a parser will not be able to properly<br>      interpret these values. The interpretation and meaning of additional<br>      elements is beyond the scope of this specification, and additional<br>      elements MAY be ignored by parsers.]|

<h2 id="tocS_LineString">LineString</h2>

<a id="schemalinestring"></a>
<a id="schema_LineString"></a>
<a id="tocSlinestring"></a>
<a id="tocslinestring"></a>

```json
{
  "type": "Point",
  "bbox": [
    0
  ],
  "coordinates": [
    [
      0,
      0
    ],
    [
      0,
      0
    ]
  ]
}

```

GeoJSon geometry

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.4">External documentation</a>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[GeometryElement](#schemageometryelement)|false|none|Abstract type for all GeoJSon 'Geometry' object the type of which is not<br>      'GeometryCollection'|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; coordinates|[LineStringCoordinates](#schemalinestringcoordinates)|true|none|GeoJSon fundamental geometry construct, array of two or more positions.|

<h2 id="tocS_MultiLineString">MultiLineString</h2>

<a id="schemamultilinestring"></a>
<a id="schema_MultiLineString"></a>
<a id="tocSmultilinestring"></a>
<a id="tocsmultilinestring"></a>

```json
{
  "type": "Point",
  "bbox": [
    0
  ],
  "coordinates": [
    [
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  ]
}

```

GeoJSon geometry

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.5">External documentation</a>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[GeometryElement](#schemageometryelement)|false|none|Abstract type for all GeoJSon 'Geometry' object the type of which is not<br>      'GeometryCollection'|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; coordinates|[[LineStringCoordinates](#schemalinestringcoordinates)]|true|none|[GeoJSon fundamental geometry construct, array of two or more positions.]|

<h2 id="tocS_Polygon">Polygon</h2>

<a id="schemapolygon"></a>
<a id="schema_Polygon"></a>
<a id="tocSpolygon"></a>
<a id="tocspolygon"></a>

```json
{
  "type": "Point",
  "bbox": [
    0
  ],
  "coordinates": [
    [
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        0
      ]
    ]
  ]
}

```

GeoJSon geometry

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.6">External documentation</a>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[GeometryElement](#schemageometryelement)|false|none|Abstract type for all GeoJSon 'Geometry' object the type of which is not<br>      'GeometryCollection'|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; coordinates|[[LinearRing](#schemalinearring)]|true|none|[<br>      A linear ring is a closed LineString with four or more positions.<br>      <br>      The first and last positions are equivalent, and they MUST contain<br>      identical values; their representation SHOULD also be identical.<br>      <br>      A linear ring is the boundary of a surface or the boundary of a hole in<br>      a surface.<br>      <br>      A linear ring MUST follow the right-hand rule with respect to the area<br>      it bounds, i.e., exterior rings are counterclockwise, and holes are<br>      clockwise.]|

<h2 id="tocS_GeometryCollection">GeometryCollection</h2>

<a id="schemageometrycollection"></a>
<a id="schema_GeometryCollection"></a>
<a id="tocSgeometrycollection"></a>
<a id="tocsgeometrycollection"></a>

```json
{
  "type": "Point",
  "bbox": [
    0
  ],
  "geometries": [
    {
      "type": "Point",
      "bbox": [
        0
      ]
    }
  ]
}

```

      GeoJSon geometry collection
      
      GeometryCollections composed of a single part or a number of parts of a
      single type SHOULD be avoided when that single part or a single object
      of multipart type (MultiPoint, MultiLineString, or MultiPolygon) could
      be used instead.

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.8">External documentation</a>

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Geometry](#schemageometry)|false|none|Abstract type for all GeoJSon object except Feature and<br>        FeatureCollection|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|&nbsp;&nbsp;&nbsp;&nbsp; geometries|[[GeometryElement](#schemageometryelement)]|true|none|[<br>      Abstract type for all GeoJSon 'Geometry' object the type of which is not<br>      'GeometryCollection']|

