# Municipality Subscriptions

## Subscribe

> Code samples

```javascript
const inputBody = {
  planId: "string",
  amountPaid: 0,
  representative: "string",
};
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{pid}/subscriptions/subscribe", {
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

<p class="policies">[Admin, System]</p>

This endpoint is used to activate a subscription for a municipality.

It will fail in case of activating a subscription for a municipality which already has active subscription, and it return a response of 405 (Method Not Allowed).

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

| Name                                    | In   | Type   | Required | Description                     |
| --------------------------------------- | ---- | ------ | -------- | ------------------------------- |
| pid                                     | path | string | true     | Municipality Id                 |
| body                                    | body | object | true     | none                            |
| &nbsp;&nbsp;&nbsp;&nbsp; planId         | body | string | true     | Plan Id                         |
| &nbsp;&nbsp;&nbsp;&nbsp; amountPaid     | body | number | true     | Amount of money the client paid |
| &nbsp;&nbsp;&nbsp;&nbsp; representative | body | string | true     | The person who paid the money   |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_municipalities_{pid}_subscriptions_subscribe-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Change Subscription

> Code samples

```javascript
const inputBody = {
  planId: "string",
  amountPaid: 0,
  representative: "string",
};
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{pid}/subscriptions/change", {
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

<p class="policies">[Admin, System]</p>

This endpoint is used to change the active subscription with a new one. The new subscription quota will be the sum of the remaining quota of the old subscription, and the new subscription's quota.

The endpoint will fail with error 405, in two scenarios:

- The municipality does not have an active subscription
- The old plan is the same as the new plan

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

| Name                                    | In   | Type   | Required | Description                     |
| --------------------------------------- | ---- | ------ | -------- | ------------------------------- |
| pid                                     | path | string | true     | Municiality Id                  |
| body                                    | body | object | true     | none                            |
| &nbsp;&nbsp;&nbsp;&nbsp; planId         | body | string | true     | Plan Id                         |
| &nbsp;&nbsp;&nbsp;&nbsp; amountPaid     | body | number | true     | Amount of money the client paid |
| &nbsp;&nbsp;&nbsp;&nbsp; representative | body | string | true     | The person who paid the money   |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="post__api_municipalities_{pid}_subscriptions_change-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Get Active Subscription

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{pid}/subscriptions/active-subscription", {
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

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

This endpoint will retrieve the active subscription of a municipality.

### HTTP Request

`GET /api/municipalities/{pid}/subscriptions/active-subscription`

<h3 id="get__api_municipalities_{pid}_subscriptions_active-subscription-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| pid  | path | string | true     | Municipality Id |

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

| Status | Meaning                                                 | Description   | Schema                                    |
| ------ | ------------------------------------------------------- | ------------- | ----------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [SubscriptionDto](#schemasubscriptiondto) |
