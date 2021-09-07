# Municipalities

## List Municipalities

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities", {
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

<p class="policies">[System, Admin]</p>

This endpoint retrieves all municipalities.

### HTTP Request

`GET /api/municipalities`

<h3 id="get__api_municipalities-parameters">Parameters</h3>

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
    "name": "string",
    "email": "string",
    "phone": "string",
    "website": "string",
    "boundaries": {
      "type": "MultiPolygon",
      "coordinates": [
        [
          [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
          ]
        ]
      ]
    },
    "address": "string",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "deleted": true,
    "notes": "string",
    "id": "string"
  }
]
```

<h3 id="get__api_municipalities-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                      |
| ------ | ------------------------------------------------------- | ------------- | ------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [[MunicipalityDto](#schemamunicipalitydto)] |

## Create Municipality

> Code samples

```javascript
const inputBody = {
  name: "string",
  email: "string",
  phone: "string",
  website: "string",
  boundaries: {
    type: "MultiPolygon",
    coordinates: [
      [
        [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      ],
    ],
  },
  address: "string",
  notes: "string",
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities", {
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

<p class="policies">[System, Admin]</p>

This endpoint is used by Admin to create a municipality.

### HTTP Request

`POST /api/municipalities`

> Body parameter

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "website": "string",
  "boundaries": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0]
        ]
      ]
    ]
  },
  "address": "string",
  "notes": "string"
}
```

```yaml
name: string
email: string
phone: string
website: string
boundaries:
  type: MultiPolygon
  coordinates:
    - - - - 0
          - 0
        - - 0
          - 0
        - - 0
          - 0
        - - 0
          - 0
address: string
notes: string
```

<h3 id="post__api_municipalities-parameters">Parameters</h3>

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

<h3 id="post__api_municipalities-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |

## Get Municipality Details

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{id}", {
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

<p class="policies">[System, Admin, MunicipalityMember, MunicipalitySupervisor]</p>

This endpoint is used to get the details of a municipality.

### HTTP Request

`GET /api/municipalities/{id}`

<h3 id="get__api_municipalities_{id}-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description     |
| ------ | ----- | ------ | -------- | --------------- |
| id     | path  | string | true     | Municipality Id |
| select | query | string | false    | none            |

> Example responses

> 200 Response

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "website": "string",
  "boundaries": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0]
        ]
      ]
    ]
  },
  "address": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

<h3 id="get__api_municipalities_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                    |
| ------ | ------------------------------------------------------- | ------------- | ----------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [MunicipalityDto](#schemamunicipalitydto) |

## Update Municipality

> Code samples

```javascript
const inputBody = {
  name: "string",
  email: "string",
  phone: "string",
  website: "string",
  boundaries: {
    type: "MultiPolygon",
    coordinates: [
      [
        [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0],
        ],
      ],
    ],
  },
  address: "string",
  notes: "string",
};

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/municipalities/{id}", {
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

<p class="policies">[System, Admin, MunicipalitySupervisor]</p>

This endpoint is used to update a municipality. Note that the fields `name`, `boundaries` can only be changed by the admin.

### HTTP Request

`PATCH /api/municipalities/{id}`

> Body parameter

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "website": "string",
  "boundaries": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [0, 0],
          [0, 0],
          [0, 0],
          [0, 0]
        ]
      ]
    ]
  },
  "address": "string",
  "notes": "string"
}
```

```yaml
name: string
email: string
phone: string
website: string
boundaries:
  type: MultiPolygon
  coordinates:
    - - - - 0
          - 0
        - - 0
          - 0
        - - 0
          - 0
        - - 0
          - 0
address: string
notes: string
```

<h3 id="patch__api_municipalities_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| id   | path | string | true     | Municipality Id |
| body | body | any    | true     | none            |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="patch__api_municipalities_{id}-responses">Responses</h3>

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

fetch("/api/municipalities/{id}", {
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

<p class="policies">[System, Admin]</p>

This endpoint is used to delete a municipality.

### HTTP Request

`DELETE /api/municipalities/{id}`

<h3 id="delete__api_municipalities_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| id   | path | string | true     | Municipality Id |

> Example responses

> 200 Response

```json
{
  "id": "string"
}
```

<h3 id="delete__api_municipalities_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                |
| ------ | ------------------------------------------------------- | ------------- | --------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [IdDto](#schemaiddto) |
