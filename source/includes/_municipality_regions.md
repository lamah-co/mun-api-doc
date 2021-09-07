# Municipality Regions

## List Municipality Regions

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{pid}/regions", {
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

This endpoint retrieves a municipality's region.

### HTTP Request

`GET /api/municipalities/{pid}/regions`

<h3 id="get__api_municipalities_{pid}_regions-parameters">Parameters</h3>

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
    "boundaries": "string",
    "municipality": "string",
    "approved": true,
    "name": "string",
    "goverment": true,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "id": "string",
    "notes": "string"
  }
]
```

<h3 id="get__api_municipalities_{pid}_regions-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                          |
| ------ | ------------------------------------------------------- | ------------- | ------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [[RegionDto](#schemaregiondto)] |

## Create Municipality Region

> Code samples

```javascript
const inputBody = {
  boundaries: "string",
  municipality: "string",
  approved: true,
  name: "string",
  goverment: true,
  notes: "string",
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{pid}/regions", {
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

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

This endpoint is used to create a municipality's region.

### HTTP Request

`POST /api/municipalities/{pid}/regions`

> Body parameter

```json
{
  "boundaries": "string",
  "municipality": "string",
  "approved": true,
  "name": "string",
  "goverment": true,
  "notes": "string"
}
```

```yaml
boundaries: string
municipality: string
approved: true
name: string
goverment: true
notes: string
```

<h3 id="post__api_municipalities_{pid}_regions-parameters">Parameters</h3>

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

<h3 id="post__api_municipalities_{pid}_regions-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Get Municipality Region Details

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{pid}/regions/{id}", {
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

This endpoint is used to get the details of a municipality's region.

### HTTP Request

`GET /api/municipalities/{pid}/regions/{id}`

<h3 id="get__api_municipalities_{pid}_regions_{id}-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description     |
| ------ | ----- | ------ | -------- | --------------- |
| pid    | path  | string | true     | Municipality Id |
| id     | path  | string | true     | Region Id       |
| select | query | string | false    | none            |

> Example responses

> 200 Response

```json
{
  "boundaries": "string",
  "municipality": "string",
  "approved": true,
  "name": "string",
  "goverment": true,
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "id": "string",
  "notes": "string"
}
```

<h3 id="get__api_municipalities_{pid}_regions_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                        |
| ------ | ------------------------------------------------------- | ------------- | ----------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [RegionDto](#schemaregiondto) |

## Update Municipality Region

> Code samples

```javascript
const inputBody = {
  boundaries: "string",
  municipality: "string",
  approved: true,
  name: "string",
  goverment: true,
  notes: "string",
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{pid}/regions/{id}", {
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

<p class="policies">[Admin, MunicipalitySupervisor, MunicipalityMember]</p>

This endpoint is used to update a municipality region.

### HTTP Request

`PATCH /api/municipalities/{pid}/regions/{id}`

> Body parameter

```json
{
  "boundaries": "string",
  "municipality": "string",
  "approved": true,
  "name": "string",
  "goverment": true,
  "notes": "string"
}
```

```yaml
boundaries: string
municipality: string
approved: true
name: string
goverment: true
notes: string
```

<h3 id="patch__api_municipalities_{pid}_regions_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| pid  | path | string | true     | Municipality Id |
| id   | path | string | true     | Region Id       |
| body | body | any    | true     | none            |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_municipalities_{pid}_regions_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Delete Municipality Region

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{pid}/regions/{id}", {
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

This endpoint i used to delete a municipality's region.

### HTTP Request

`DELETE /api/municipalities/{pid}/regions/{id}`

<h3 id="delete__api_municipalities_{pid}_regions_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| pid  | path | string | true     | Municipality Id |
| id   | path | string | true     | Region Id       |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="delete__api_municipalities_{pid}_regions_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |
