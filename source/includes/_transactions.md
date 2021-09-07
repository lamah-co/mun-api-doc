# Transactions

## List Transactions

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/transactions", {
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

`GET /api/transactions`

<h3 id="get__api_transactions-parameters">Parameters</h3>

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

| Status | Meaning                                                 | Description   | Schema                                    |
| ------ | ------------------------------------------------------- | ------------- | ----------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [[TransactionDto](#schematransactiondto)] |

## Get Transactions Details

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/transactions/{id}", {
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

`GET /api/transactions/{id}`

<h3 id="get__api_transactions_{id}-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description    |
| ------ | ----- | ------ | -------- | -------------- |
| id     | path  | string | true     | Transaction Id |
| select | query | string | false    | none           |

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

| Status | Meaning                                                 | Description   | Schema                                  |
| ------ | ------------------------------------------------------- | ------------- | --------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [TransactionDto](#schematransactiondto) |
