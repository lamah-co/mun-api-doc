# Subscriptions

## List Subscriptions

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/subscriptions", {
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

### HTTP Request

`GET /api/subscriptions`

<h3 id="get__api_subscriptions-parameters">Parameters</h3>

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

| Status | Meaning                                                 | Description   | Schema                                      |
| ------ | ------------------------------------------------------- | ------------- | ------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [[SubscriptionDto](#schemasubscriptiondto)] |

## Get Subscription Details

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/subscriptions/{id}", {
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

### HTTP Request

`GET /api/subscriptions/{id}`

<h3 id="get__api_subscriptions_{id}-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description     |
| ------ | ----- | ------ | -------- | --------------- |
| id     | path  | string | true     | Subscription Id |
| select | query | string | false    | none            |

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

| Status | Meaning                                                 | Description   | Schema                                    |
| ------ | ------------------------------------------------------- | ------------- | ----------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [SubscriptionDto](#schemasubscriptiondto) |
