# Municipality Buildings

## List Buildings

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/buildings/municipality/{pid}/buildings", {
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

This endpoint returns a list of all the buildings that are located within the municipality's boundaries, it returns 10 items by default, and it can return 50 items maximum. use parameters bellow to paginate.

### HTTP Request

`GET /api/buildings/municipality/{pid}/buildings`

<h3 id="get__api_buildings_municipality_{pid}_buildings-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description     |
| ------ | ----- | ------ | -------- | --------------- |
| pid    | path  | string | true     | Municipality Id |
| offset | query | number | false    | none            |
| limit  | query | number | false    | none            |
| order  | query | string | false    | none            |
| filter | query | string | false    | none            |

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "makani_id": 0,
    "name": "string",
    "description": "string",
    "licenseState": "string",
    "subClassification": "string"
  }
]
```

<h3 id="get__api_buildings_municipality_{pid}_buildings-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                        |
| ------ | ------------------------------------------------------- | ------------- | --------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [[ListBuildingsDto](#schemalistbuildingsdto)] |

## Search Buildings

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/buildings/municipality/{pid}/buildings/search?s=string", {
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

This endpoint retrieves the buildings which match the search term. You can search by name, description, or Makani address.

### HTTP Request

`GET /api/buildings/municipality/{pid}/buildings/search`

<h3 id="get__api_buildings_municipality_{pid}_buildings_search-parameters">Parameters</h3>

| Name   | In    | Type   | Required | Description     |
| ------ | ----- | ------ | -------- | --------------- |
| pid    | path  | string | true     | Municipality Id |
| s      | query | string | true     | Search term     |
| offset | query | number | false    | none            |
| limit  | query | number | false    | none            |
| order  | query | string | false    | none            |
| filter | query | string | false    | none            |

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "makani_id": 0,
    "name": "string",
    "description": "string",
    "licenseState": "string",
    "subClassification": "string"
  }
]
```

<h3 id="get__api_buildings_municipality_{pid}_buildings_search-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                        |
| ------ | ------------------------------------------------------- | ------------- | --------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [[ListBuildingsDto](#schemalistbuildingsdto)] |

## Get Building Details

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/buildings/municipality/{pid}/buildings/{id}", {
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

This endpoint will retrieve all details about a building. This endpoint is rate limited to 20 requests every 5 minutes.

### HTTP Request

`GET /api/buildings/municipality/{pid}/buildings/{id}`

<h3 id="get__api_buildings_municipality_{pid}_buildings_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| pid  | path | string | true     | Municipality Id |
| id   | path | string | true     | Building Id     |

> Example responses

> 200 Response

```json
{
  "id": "string",
  "makani_id": 0,
  "name": "string",
  "description": "string",
  "email": "string",
  "website": "string",
  "phone": "string",
  "b_id": "string",
  "zip_id": "string",
  "coordinates": "string",
  "floorsAboveGround": 0,
  "floorsUnderGround": 0,
  "licenseState": "string",
  "subClassification": "string",
  "classification": "string"
}
```

<h3 id="get__api_buildings_municipality_{pid}_buildings_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                          |
| ------ | ------------------------------------------------------- | ------------- | ----------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [BuildingDetailsDto](#schemabuildingdetailsdto) |
