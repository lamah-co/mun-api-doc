# Plans

## List Plans

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/plans", {
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

<p class="policies">[Public]</p>

This endpoint is used to retrieve all plans.

### HTTP Request

`GET /api/plans`

<h3 id="get__api_plans-parameters">Parameters</h3>

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

| Status | Meaning                                                 | Description   | Schema                      |
| ------ | ------------------------------------------------------- | ------------- | --------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [[PlanDto](#schemaplandto)] |

## Create Plan

> Code samples

```javascript
const inputBody = {
  name: "string",
  price: 0,
  duration: 0,
  updateInterval: 0,
  active: true,
  actionsQuota: 0,
  description: "string",
  notes: "string",
  subscriptions: ["string"],
};
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/plans", {
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

<p class="policies">[Admin]</p>

This endpoint is used to create a Plan entry.

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
  "notes": "string"
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
```

<h3 id="post__api_plans-parameters">Parameters</h3>

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

<h3 id="post__api_plans-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Get Plan Details

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/plans/{id}", {
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

<p class="policies">[Public]</p>

This endpoint retrieves the details of a Plan entry.

### HTTP Request

`GET /api/plans/{id}`

<h3 id="get__api_plans_{id}-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description |
| ------ | ----- | ------ | -------- | ----------- |
| id     | path  | string | true     | Plan Id     |
| select | query | string | false    | none        |

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

| Status | Meaning                                                 | Description   | Schema                    |
| ------ | ------------------------------------------------------- | ------------- | ------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [PlanDto](#schemaplandto) |

## Update Plan

> Code samples

```javascript
const inputBody = {
  name: "string",
  price: 0,
  duration: 0,
  updateInterval: 0,
  active: true,
  actionsQuota: 0,
  description: "string",
  notes: "string",
  subscriptions: ["string"],
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/plans/{id}", {
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

This endpoint is used to update a Plan entry.

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
  "notes": "string"
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

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     | Plan Id     |
| body | body | any    | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_plans_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |
