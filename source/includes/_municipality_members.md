# Municipality Members

## List Members

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{pid}/members", {
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

<p class="policies">[Admin, MunicipalitySupervisor]</p>

This endpoint retrieves all users of a municipality.

### HTTP Request

`GET /api/municipalities/{pid}/members`

<h3 id="get__api_municipalities_{pid}_members-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description     |
| ------ | ----- | ------ | -------- | --------------- |
| pid    | path  | string | true     | Municipality Id |
| offset | query | number | false    | none            |
| limit  | query | number | false    | none            |
| filter | query | string | false    | none            |
| select | query | string | false    | none            |
| order  | query | string | false    | none            |

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

| Status | Meaning                                                 | Description   | Schema                      |
| ------ | ------------------------------------------------------- | ------------- | --------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [[UserDto](#schemauserdto)] |

## Create Member

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

fetch("/api/municipalities/{pid}/members", {
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

<h3 id="post__api_municipalities_{pid}_members-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| pid  | path | string | true     | Municipality Id |
| body | body | any    | true     | none            |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_municipalities_{pid}_members-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Get Member Details

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{pid}/members/{id}", {
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

<p class="policies">[Admin, MunicipalitySupervisor]</p>

This endpoint retrieves member details.

### HTTP Request

`GET /api/municipalities/{pid}/members/{id}`

<h3 id="get__api_municipalities_{pid}_members_{id}-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description     |
| ------ | ----- | ------ | -------- | --------------- |
| pid    | path  | string | true     | Municipality Id |
| id     | path  | string | true     | User Id         |
| select | query | string | false    | none            |

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

| Status | Meaning                                                 | Description   | Schema                    |
| ------ | ------------------------------------------------------- | ------------- | ------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [UserDto](#schemauserdto) |

<h3 id="get__api_municipalities_{pid}_members_{id}-responseschema">Response Schema</h3>

## Update Member

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

fetch("/api/municipalities/{pid}/members/{id}", {
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

<p class="policies">[Admin, MunicipalitySupervisor]</p>

This endpoint is used to update member details.

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
  "transactions": ["string"],
  "requests": ["string"]
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

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| pid  | path | string | true     | none        |
| id   | path | string | true     | none        |
| body | body | any    | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_municipalities_{pid}_members_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Delete Municipality

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{pid}/members/{id}", {
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

<p class="policies">[Admin, MunicipalitySupervisor]</p>

This endpoint is used to delete a municipality.

### HTTP Request

`DELETE /api/municipalities/{pid}/members/{id}`

<h3 id="delete__api_municipalities_{pid}_members_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| pid  | path | string | true     | Municipality Id |
| id   | path | string | true     | none            |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="delete__api_municipalities_{pid}_members_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |
