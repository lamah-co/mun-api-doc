# FAQs

## List FAQs

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/faqs", {
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

This endpoint retrieves all FAQs.

### HTTP Request

`GET /api/faqs`

<h3 id="get__api_faqs-parameters">Parameters</h3>

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

| Status | Meaning                                                 | Description   | Schema                    |
| ------ | ------------------------------------------------------- | ------------- | ------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [[FAQDto](#schemafaqdto)] |

## Create FAQ

> Code samples

```javascript
const inputBody = {
  question: "string",
  answer: "string",
  notes: "string",
};
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/faqs", {
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

This endpoint creates a new FAQ entry.

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

<h3 id="post__api_faqs-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Get FAQ Details

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/faqs/{id}", {
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

This endpoint retrieves the details of a FAQ entry.

### HTTP Request

`GET /api/faqs/{id}`

<h3 id="get__api_faqs_{id}-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description |
| ------ | ----- | ------ | -------- | ----------- |
| id     | path  | string | true     | FAQ Id      |
| select | query | string | false    | none        |

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

| Status | Meaning                                                 | Description   | Schema                  |
| ------ | ------------------------------------------------------- | ------------- | ----------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [FAQDto](#schemafaqdto) |

## Update FAQ

> Code samples

```javascript
const inputBody = {
  question: "string",
  answer: "string",
  notes: "string",
};
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/faqs/{id}", {
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

This endpoint is used to update a FAQ entry.

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

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     | FAQ Id      |
| body | body | any    | true     | none        |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_faqs_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Delete FAQ

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/faqs/{id}", {
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

<p class="policies">[Admin]</p>

This endpoint is used to delete a FAQ entry.

### HTTP Request

`DELETE /api/faqs/{id}`

<h3 id="delete__api_faqs_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     | FAQ Id      |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="delete__api_faqs_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |
