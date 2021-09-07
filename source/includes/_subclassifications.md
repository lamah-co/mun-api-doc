# SubClassifications

## List SubClassifications

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/subclassifications", {
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

`GET /api/subclassifications`

<h3 id="get__api_subclassifications-parameters">Parameters</h3>

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
    "classification": "string"
  }
]
```

<h3 id="get__api_subclassifications-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                                |
| ------ | ------------------------------------------------------- | ------------- | ----------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [[SubClassificationDto](#schemasubclassificationdto)] |

## Get SubClassification Details

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/subclassifications/{id}", {
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

`GET /api/subclassifications/{id}`

<h3 id="get__api_subclassifications_{id}-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description          |
| ------ | ----- | ------ | -------- | -------------------- |
| id     | path  | string | true     | SubClassification Id |
| select | query | string | false    | none                 |

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

| Status | Meaning                                                 | Description   | Schema                                              |
| ------ | ------------------------------------------------------- | ------------- | --------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [SubClassificationDto](#schemasubclassificationdto) |
