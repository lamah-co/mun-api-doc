# Requests

## List Requests

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/requests", {
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

<p class="policies">[Admin]</p>

This endpoint is ued to retrieves all requests.

### HTTP Request

`GET /api/requests`

<h3 id="get__api_requests-parameters">Parameters</h3>

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

| Status | Meaning                                                 | Description   | Schema |
| ------ | ------------------------------------------------------- | ------------- | ------ | --------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body |        | [[RequestDto](#schemarequestdto)] |

## Create Request

> Code samples

```javascript
const inputBody = {
  status: "Unread",
  user: "string",
  plan: "string",
  notes: "string",
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/requests", {
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

<p class="policies">[AnyUser]</p>

This endpoint is used to create a Request entry.

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

<h3 id="post__api_requests-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Get Request Details

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/requests/{id}", {
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

<p class="policies">[Admin]</p>

This endpoint retrieves the details of a Request entry.

### HTTP Request

`GET /api/requests/{id}`

<h3 id="get__api_requests_{id}-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description |
| ------ | ----- | ------ | -------- | ----------- |
| id     | path  | string | true     | Request Id  |
| select | query | string | false    | none        |

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

| Status | Meaning                                                 | Description   | Schema                          |
| ------ | ------------------------------------------------------- | ------------- | ------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [RequestDto](#schemarequestdto) |

## Update Request

> Code samples

```javascript
const inputBody = {
  status: "Unread",
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/requests/{id}", {
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

<p class="policies">[Admin]</p>

This endpoint is used to update a Request entry.

### HTTP Request

`PATCH /api/requests/{id}`

> Body parameter

```json
{
  "status": "Unread"
}
```

```yaml
status: Unread
```

<h3 id="patch__api_requests_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     | Request Id  |
| body | body | any    | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_requests_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |
