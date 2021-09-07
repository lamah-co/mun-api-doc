# Users

These endpoints use only by the Admin, except of Uploading Profile Picture endpoint.

## Upload User Profile Picture

> Code samples

```javascript
const input = document.querySelector('input[type="file"]');

var data = new FormData();
data.append("file", input.files[0]);

const headers = {
  "Content-Type": "multipart/form-data",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/users/{pid}/uploadprofile", {
  method: "POST",
  body: data,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

<p class="policies">[ResourceOwner]</p>

This endpoint allows the user to change his own profile picture. The endpoint accepts body of type `multipart/form-data`.

### HTTP Request

`POST /api/users/{pid}/uploadprofile`

> Body parameter

```yaml
file: string
```

<h3 id="post__api_users_{pid}_uploadprofile-parameters">Parameters</h3>

| Name                          | In   | Type           | Required | Description |
| ----------------------------- | ---- | -------------- | -------- | ----------- |
| pid                           | path | string         | true     | User Id     |
| body                          | body | object         | true     | none        |
| &nbsp;&nbsp;&nbsp;&nbsp; file | body | string(binary) | false    | none        |

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="post__api_users_{pid}_uploadprofile-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                          |
| ------ | ------------------------------------------------------- | ------------- | ------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [SuccessDto](#schemasuccessdto) |

## List Users

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/users", {
  method: "GET",
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

<p class="policies">[System, Admin]</p>

### HTTP Request

This endpoint retrieves a list of all the users.

`GET /api/users`

<h3 id="get__api_users-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description |
| ------ | ----- | ------ | -------- | ----------- |
| offset | query | number | false    | none        |
| limit  | query | number | false    | none        |
| filter | query | string | false    | none        |
| select | query | string | false    | none        |
| order  | query | string | false    | none        |

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

| Status | Meaning                                                 | Description   | Schema                      |
| ------ | ------------------------------------------------------- | ------------- | --------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [[UserDto](#schemauserdto)] |

## Create User

> Code samples

```javascript
const inputBody = {
  fullname: "string",
  phone: "string",
  email: "string",
  username: "string",
  password: "string",
  status: "Active",
  role: "Member",
  municipality: "string",
  address: "string",
  notes: "string",
};
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/users", {
  method: "POST",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

<p class="policies">[System, Admin]</p>

This endpoint is used by the Admin to create users.

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
  "notes": "string"
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
```

<h3 id="post__api_users-parameters">Parameters</h3>

| Name | In   | Type | Required | Description |
| ---- | ---- | ---- | -------- | ----------- |
| body | body | any  | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_users-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Get User Details

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/users/{id}", {
  method: "GET",

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

<p class="policies">[System, Admin, ResourceOwner]</p>

This endpoint retrieves the users full details. Can be accessed by Admin, or the User himself.

### HTTP Request

`GET /api/users/{id}`

<h3 id="get__api_users_{id}-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description |
| ------ | ----- | ------ | -------- | ----------- |
| id     | path  | string | true     | User Id     |
| select | query | string | false    | none        |

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

| Status | Meaning                                                 | Description   | Schema                    |
| ------ | ------------------------------------------------------- | ------------- | ------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [UserDto](#schemauserdto) |

## Update User

> Code samples

```javascript
const inputBody = {
  fullname: "string",
  phone: "string",
  email: "string",
  username: "string",
  password: "string",
  status: "Active",
  role: "Member",
  municipality: "string",
  address: "string",
  notes: "string",
  transactions: ["string"],
  requests: ["string"],
};
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/users/{id}", {
  method: "PATCH",
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

<p class="policies">[System, Admin, ResourceOwner]</p>

This endpoint is used to update the user details. It can be used by Admin, and the User himself.

<aside class="warning">
Only the admin can change user's role.
</aside>

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
  "address": "string",
  "notes": "string"
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
```

<h3 id="patch__api_users_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     | User Id     |
| body | body | any    | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_users_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Delete User

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/users/{id}", {
  method: "DELETE",
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

<p class="policies">[System, Admin]</p>

This endpoint is used to delete a user.

<aside class="notice">
The delete is a soft delete (the field `deleted` changes to 'true').
</aside>

### HTTP Request

`DELETE /api/users/{id}`

<h3 id="delete__api_users_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="delete__api_users_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |
