# Statistics

## Municipality Sub-Classification Statistics

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/statistics/municipality/{pid}/subclassifications", {
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

This endpoint retrieves count of buildings in each sub-classification in a municipality's borders.

### HTTP Request

`GET /api/statistics/municipality/{pid}/subclassifications`

<h3 id="get__api_statistics_municipality_{pid}_subclassifications-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| pid  | path | string | true     | Municipality Id |

> Example responses

> 200 Response

```json
{
  "all": 0,
  "health": 0,
  "pharmacies": 0,
  "non_govermental": 0,
  "homes": 0,
  "apartment_complex": 0,
  "hotels": 0,
  "lands": 0,
  "education": 0,
  "mosques_religious": 0,
  "colleges": 0,
  "bakeries": 0,
  "resturants_cafes": 0,
  "companies": 0,
  "factories": 0,
  "commercial": 0,
  "banks": 0,
  "govermental": 0,
  "parking": 0,
  "gas_stations": 0,
  "ports": 0,
  "entertainment": 0,
  "sports": 0,
  "parks": 0,
  "other": 0
}
```

<h3 id="get__api_statistics_municipality_{pid}_subclassifications-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                                        |
| ------ | ------------------------------------------------------- | ------------- | ------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [SubClassificationStatsDto](#schemasubclassificationstatsdto) |

## Municipality Classification Statistics

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/statistics/municipality/{pid}/classifications", {
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

This endpoint retrieves count of buildings in each classification in a municipality's borders.

### HTTP Request

`GET /api/statistics/municipality/{pid}/classifications`

<h3 id="get__api_statistics_municipality_{pid}_classifications-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| pid  | path | string | true     | Municipality Id |

> Example responses

> 200 Response

```json
{
  "all": 0,
  "health": 0,
  "civil": 0,
  "realestate": 0,
  "religious_education": 0,
  "economy": 0,
  "govermental": 0,
  "entertainment": 0,
  "other": 0,
  "countByMonth": [
    {
      "month": "2019-08-24T14:15:22Z",
      "count": 0
    }
  ]
}
```

<h3 id="get__api_statistics_municipality_{pid}_classifications-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                                  |
| ------ | ------------------------------------------------------- | ------------- | ------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [ClassificationStatsDto](#schemaclassificationstatsdto) |

## Region Sub-Classification Statistics

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/statistics/region/{pid}/subclassifications", {
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

This endpoint retrieves count of buildings in each sub-classification in a region's borders.

### HTTP Request

`GET /api/statistics/region/{pid}/subclassifications`

<h3 id="get__api_statistics_region_{pid}_subclassifications-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| pid  | path | string | true     | Region Id   |

> Example responses

> 200 Response

```json
{
  "all": 0,
  "health": 0,
  "pharmacies": 0,
  "non_govermental": 0,
  "homes": 0,
  "apartment_complex": 0,
  "hotels": 0,
  "lands": 0,
  "education": 0,
  "mosques_religious": 0,
  "colleges": 0,
  "bakeries": 0,
  "resturants_cafes": 0,
  "companies": 0,
  "factories": 0,
  "commercial": 0,
  "banks": 0,
  "govermental": 0,
  "parking": 0,
  "gas_stations": 0,
  "ports": 0,
  "entertainment": 0,
  "sports": 0,
  "parks": 0,
  "other": 0
}
```

<h3 id="get__api_statistics_region_{pid}_subclassifications-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                                        |
| ------ | ------------------------------------------------------- | ------------- | ------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [SubClassificationStatsDto](#schemasubclassificationstatsdto) |

## Region Classification Statistics

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/statistics/region/{pid}/classifications", {
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

This endpoint retrieves count of buildings in each classification in a region's borders.

### HTTP Request

`GET /api/statistics/region/{pid}/classifications`

<h3 id="get__api_statistics_region_{pid}_classifications-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| pid  | path | string | true     | Region Id   |

> Example responses

> 200 Response

```json
{
  "all": 0,
  "health": 0,
  "civil": 0,
  "realestate": 0,
  "religious_education": 0,
  "economy": 0,
  "govermental": 0,
  "entertainment": 0,
  "other": 0,
  "countByMonth": [
    {
      "month": "2019-08-24T14:15:22Z",
      "count": 0
    }
  ]
}
```

<h3 id="get__api_statistics_region_{pid}_classifications-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                                  |
| ------ | ------------------------------------------------------- | ------------- | ------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [ClassificationStatsDto](#schemaclassificationstatsdto) |

## Map Statistics

> Code samples

```javascript
const inputBody = {
  classifications: {
    health: true,
    civil: true,
    realestate: true,
    religious: true,
    economy: true,
    govermental: true,
    entertainment: true,
    other: true,
  },
  area: {
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
};
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/statistics/municipality/{pid}/map", {
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

### HTTP Request

`POST /api/statistics/municipality/{pid}/map`

> Body parameter

```json
{
  "classifications": {
    "health": true,
    "civil": true,
    "realestate": true,
    "religious": true,
    "economy": true,
    "govermental": true,
    "entertainment": true,
    "other": true
  },
  "area": {
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
  }
}
```

```yaml
classifications:
  health: true
  civil: true
  realestate: true
  religious: true
  economy: true
  govermental: true
  entertainment: true
  other: true
area:
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
```

<h3 id="post__api_statistics_municipality_{pid}_map-parameters">Parameters</h3>

| Name | In   | Type                    | Required | Description     |
| ---- | ---- | ----------------------- | -------- | --------------- |
| pid  | path | string                  | true     | Municipality Id |
| body | body | [MapDto](#schemamapdto) | true     | none            |

> Example responses

> 200 Response

```json
{
  "area": 0,
  "buildings": [
    {
      "id": "string",
      "coordinates": {
        "type": "Point",
        "coordinates": [0, 0]
      },
      "subClassification": "string"
    }
  ],
  "stats": {
    "health": {
      "health": 0,
      "pharmacies": 0
    },
    "civil": {
      "non_govermental": 0
    },
    "realestate": {
      "homes": 0,
      "apartment_complex": 0,
      "hotels": 0,
      "lands": 0
    },
    "religious_education": {
      "education": 0,
      "mosques_religious": 0,
      "colleges": 0
    },
    "economy": {
      "bakeries": 0,
      "resturants_cafes": 0,
      "companies": 0,
      "factories": 0,
      "commercial": 0,
      "banks": 0
    },
    "govermental": {
      "govermental": 0,
      "parking": 0,
      "gas_stations": 0,
      "ports": 0
    },
    "entertainment": {
      "entertainment": 0,
      "sports": 0,
      "parks": 0
    },
    "other": {
      "other": 0
    }
  }
}
```

<h3 id="post__api_statistics_municipality_{pid}_map-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                            |
| ------ | ------------------------------------------------------- | ------------- | --------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [MapStatsDto](#schemamapstatsdto) |

## Count of Houses of Municipality

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/statistics/municipality/{pid}/houses", {
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

This endpoint returns the count of houses and apartment complexes, and the area of the municipality. Which should be used to calculate the population density.

### HTTP Request

`GET /api/statistics/municipality/{pid}/houses`

<h3 id="get__api_statistics_municipality_{pid}_houses-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description     |
| ---- | ---- | ------ | -------- | --------------- |
| pid  | path | string | true     | Municipality Id |

> Example responses

> 200 Response

```json
{
  "homes": 0,
  "apartmentComplex": 0,
  "area": 0
}
```

<h3 id="get__api_statistics_municipality_{pid}_houses-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                  |
| ------ | ------------------------------------------------------- | ------------- | --------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [HousesStatsDto](#schemahousesstatsdto) |

## Count of Houses of Custom Area

> Code samples

```javascript
const inputBody = {
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
};
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/statistics/municipality/{pid}/houses", {
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

This endpoint returns the count of houses and apartment complexes, and the area of the defined MultiPolygon in the post body. Which should be used to calculate the population density.

### HTTP Request

`POST /api/statistics/municipality/{pid}/houses`

> Body parameter

```json
{
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
}
```

```yaml
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
```

<h3 id="post__api_statistics_municipality_{pid}_houses-parameters">Parameters</h3>

| Name | In   | Type                                | Required | Description                      |
| ---- | ---- | ----------------------------------- | -------- | -------------------------------- |
| pid  | path | string                              | true     | Municipality Id                  |
| body | body | [MultiPolygon](#schemamultipolygon) | true     | MultiPolygon of Area in Interest |

> Example responses

> 200 Response

```json
{
  "homes": 0,
  "apartmentComplex": 0,
  "area": 0
}
```

<h3 id="post__api_statistics_municipality_{pid}_houses-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                  |
| ------ | ------------------------------------------------------- | ------------- | --------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [HousesStatsDto](#schemahousesstatsdto) |

## Count of Houses of Region

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/statistics/region/{pid}/houses", {
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

This endpoint returns the count of houses and apartment complexes, and the area of the region. Which should be used to calculate the population density.

### HTTP Request

`GET /api/statistics/region/{pid}/houses`

<h3 id="get__api_statistics_region_{pid}_houses-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| pid  | path | string | true     | Region Id   |

> Example responses

> 200 Response

```json
{
  "homes": 0,
  "apartmentComplex": 0,
  "area": 0
}
```

<h3 id="get__api_statistics_region_{pid}_houses-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                                  |
| ------ | ------------------------------------------------------- | ------------- | --------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [HousesStatsDto](#schemahousesstatsdto) |
