# Classifications

## List Classifications

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/classifications", {
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

<p class="policies">[AnyUser]</p>

This endpoint retrieves all classifications.

### HTTP Request

`GET /api/classifications`

<h3 id="get__api_classifications-parameters">Parameters</h3>

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
    "name": "string"
  }
]
```

<h3 id="get__api_classifications-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                          |
| ------ | ------------------------------------------------------- | ------------- | ----------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [[ClassificationDto](#schemaclassificationdto)] |

## Get Classification

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/classifications/{id}", {
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

<p class="policies">[AnyUser]</p>

This endpoint retrieves classification details.

### HTTP Request

`GET /api/classifications/{id}`

<h3 id="get__api_classifications_{id}-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description       |
| ------ | ----- | ------ | -------- | ----------------- |
| id     | path  | string | true     | Classification Id |
| select | query | string | false    | none              |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="get__api_classifications_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                        |
| ------ | ------------------------------------------------------- | ------------- | --------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [ClassificationDto](#schemaclassificationdto) |
