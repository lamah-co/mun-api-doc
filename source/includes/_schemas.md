# Schemas

<h2 id="tocS_UsersCountDto">UsersCountDto</h2>

<a id="schemauserscountdto"></a>
<a id="schema_UsersCountDto"></a>
<a id="tocSuserscountdto"></a>
<a id="tocsuserscountdto"></a>

```json
{
  "count": 0,
  "municipalityId": "string"
}
```

### Properties

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| count          | number | false    | none         | none        |
| municipalityId | string | false    | none         | none        |

<h2 id="tocS_MonthlyIncomeDto">MonthlyIncomeDto</h2>

<a id="schemamonthlyincomedto"></a>
<a id="schema_MonthlyIncomeDto"></a>
<a id="tocSmonthlyincomedto"></a>
<a id="tocsmonthlyincomedto"></a>

```json
{
  "month": "2019-08-24T14:15:22Z",
  "amount": 0
}
```

### Properties

| Name   | Type              | Required | Restrictions | Description |
| ------ | ----------------- | -------- | ------------ | ----------- |
| month  | string(date-time) | false    | none         | none        |
| amount | number            | false    | none         | none        |

<h2 id="tocS_YearlyIncomeDto">YearlyIncomeDto</h2>

<a id="schemayearlyincomedto"></a>
<a id="schema_YearlyIncomeDto"></a>
<a id="tocSyearlyincomedto"></a>
<a id="tocsyearlyincomedto"></a>

```json
{
  "year": "2019-08-24T14:15:22Z",
  "amount": 0
}
```

### Properties

| Name   | Type              | Required | Restrictions | Description |
| ------ | ----------------- | -------- | ------------ | ----------- |
| year   | string(date-time) | false    | none         | none        |
| amount | number            | false    | none         | none        |

<h2 id="tocS_StatsDo">StatsDo</h2>

<a id="schemastatsdo"></a>
<a id="schema_StatsDo"></a>
<a id="tocSstatsdo"></a>
<a id="tocsstatsdo"></a>

```json
{
  "municipalitiesCount": 0,
  "usersCount": 0,
  "regionsCount": 0,
  "income": 0
}
```

### Properties

| Name                | Type   | Required | Restrictions | Description |
| ------------------- | ------ | -------- | ------------ | ----------- |
| municipalitiesCount | number | false    | none         | none        |
| usersCount          | number | false    | none         | none        |
| regionsCount        | number | false    | none         | none        |
| income              | number | false    | none         | none        |

<h2 id="tocS_IdDto">IdDto</h2>

<a id="schemaiddto"></a>
<a id="schema_IdDto"></a>
<a id="tocSiddto"></a>
<a id="tocsiddto"></a>

```json
{
  "id": "string"
}
```

### Properties

| Name | Type   | Required | Restrictions | Description |
| ---- | ------ | -------- | ------------ | ----------- |
| id   | string | false    | none         | none        |

<h2 id="tocS_TokensDto">TokensDto</h2>

<a id="schematokensdto"></a>
<a id="schema_TokensDto"></a>
<a id="tocStokensdto"></a>
<a id="tocstokensdto"></a>

```json
{
  "token": "string",
  "refreshToken": "string"
}
```

### Properties

| Name         | Type   | Required | Restrictions | Description |
| ------------ | ------ | -------- | ------------ | ----------- |
| token        | string | false    | none         | none        |
| refreshToken | string | false    | none         | none        |

<h2 id="tocS_ConfirmPasswordDto">ConfirmPasswordDto</h2>

<a id="schemaconfirmpassworddto"></a>
<a id="schema_ConfirmPasswordDto"></a>
<a id="tocSconfirmpassworddto"></a>
<a id="tocsconfirmpassworddto"></a>

```json
{
  "password": "string"
}
```

### Properties

| Name     | Type   | Required | Restrictions | Description |
| -------- | ------ | -------- | ------------ | ----------- |
| password | string | false    | none         | none        |

<h2 id="tocS_SuccessDto">SuccessDto</h2>

<a id="schemasuccessdto"></a>
<a id="schema_SuccessDto"></a>
<a id="tocSsuccessdto"></a>
<a id="tocssuccessdto"></a>

```json
{
  "success": true
}
```

### Properties

| Name    | Type    | Required | Restrictions | Description |
| ------- | ------- | -------- | ------------ | ----------- |
| success | boolean | false    | none         | none        |

<h2 id="tocS_ListBuildingsDto">ListBuildingsDto</h2>

<a id="schemalistbuildingsdto"></a>
<a id="schema_ListBuildingsDto"></a>
<a id="tocSlistbuildingsdto"></a>
<a id="tocslistbuildingsdto"></a>

```json
{
  "id": "string",
  "makani_id": 0,
  "name": "string",
  "description": "string",
  "licenseState": "string",
  "subClassification": "string"
}
```

### Properties

| Name              | Type   | Required | Restrictions | Description |
| ----------------- | ------ | -------- | ------------ | ----------- |
| id                | string | false    | none         | none        |
| makani_id         | number | false    | none         | none        |
| name              | string | false    | none         | none        |
| description       | string | false    | none         | none        |
| licenseState      | string | false    | none         | none        |
| subClassification | string | false    | none         | none        |

<h2 id="tocS_BuildingDetailsDto">BuildingDetailsDto</h2>

<a id="schemabuildingdetailsdto"></a>
<a id="schema_BuildingDetailsDto"></a>
<a id="tocSbuildingdetailsdto"></a>
<a id="tocsbuildingdetailsdto"></a>

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

### Properties

| Name              | Type   | Required | Restrictions | Description |
| ----------------- | ------ | -------- | ------------ | ----------- |
| id                | string | false    | none         | none        |
| makani_id         | number | false    | none         | none        |
| name              | string | false    | none         | none        |
| description       | string | false    | none         | none        |
| email             | string | false    | none         | none        |
| website           | string | false    | none         | none        |
| phone             | string | false    | none         | none        |
| b_id              | string | false    | none         | none        |
| zip_id            | string | false    | none         | none        |
| coordinates       | string | false    | none         | none        |
| floorsAboveGround | number | false    | none         | none        |
| floorsUnderGround | number | false    | none         | none        |
| licenseState      | string | false    | none         | none        |
| subClassification | string | false    | none         | none        |
| classification    | string | false    | none         | none        |

<h2 id="tocS_SubscriptionDto">SubscriptionDto</h2>

<a id="schemasubscriptiondto"></a>
<a id="schema_SubscriptionDto"></a>
<a id="tocSsubscriptiondto"></a>
<a id="tocssubscriptiondto"></a>

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

### Properties

| Name           | Type              | Required | Restrictions | Description |
| -------------- | ----------------- | -------- | ------------ | ----------- |
| start          | string(date-time) | false    | none         | none        |
| actionsQouta   | number            | false    | none         | none        |
| plan           | string            | false    | none         | none        |
| municipality   | string            | false    | none         | none        |
| representative | string            | false    | none         | none        |
| lastUpdated    | string(date-time) | false    | none         | none        |
| createdAt      | string(date-time) | false    | none         | none        |
| updatedAt      | string(date-time) | false    | none         | none        |
| deleted        | boolean           | false    | none         | none        |
| notes          | string            | false    | none         | none        |
| id             | string            | false    | none         | none        |

<h2 id="tocS_SettingsDto">SettingsDto</h2>

<a id="schemasettingsdto"></a>
<a id="schema_SettingsDto"></a>
<a id="tocSsettingsdto"></a>
<a id="tocssettingsdto"></a>

```json
{
  "aboutSystem": "string",
  "aboutPlans": "string"
}
```

### Properties

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| aboutSystem | string | false    | none         | none        |
| aboutPlans  | string | false    | none         | none        |

<h2 id="tocS_SubClassificationStatsDto">SubClassificationStatsDto</h2>

<a id="schemasubclassificationstatsdto"></a>
<a id="schema_SubClassificationStatsDto"></a>
<a id="tocSsubclassificationstatsdto"></a>
<a id="tocssubclassificationstatsdto"></a>

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

### Properties

| Name              | Type   | Required | Restrictions | Description |
| ----------------- | ------ | -------- | ------------ | ----------- |
| all               | number | false    | none         | none        |
| health            | number | false    | none         | none        |
| pharmacies        | number | false    | none         | none        |
| non_govermental   | number | false    | none         | none        |
| homes             | number | false    | none         | none        |
| apartment_complex | number | false    | none         | none        |
| hotels            | number | false    | none         | none        |
| lands             | number | false    | none         | none        |
| education         | number | false    | none         | none        |
| mosques_religious | number | false    | none         | none        |
| colleges          | number | false    | none         | none        |
| bakeries          | number | false    | none         | none        |
| resturants_cafes  | number | false    | none         | none        |
| companies         | number | false    | none         | none        |
| factories         | number | false    | none         | none        |
| commercial        | number | false    | none         | none        |
| banks             | number | false    | none         | none        |
| govermental       | number | false    | none         | none        |
| parking           | number | false    | none         | none        |
| gas_stations      | number | false    | none         | none        |
| ports             | number | false    | none         | none        |
| entertainment     | number | false    | none         | none        |
| sports            | number | false    | none         | none        |
| parks             | number | false    | none         | none        |
| other             | number | false    | none         | none        |

<h2 id="tocS_MonthlyCountDto">MonthlyCountDto</h2>

<a id="schemamonthlycountdto"></a>
<a id="schema_MonthlyCountDto"></a>
<a id="tocSmonthlycountdto"></a>
<a id="tocsmonthlycountdto"></a>

```json
{
  "month": "2019-08-24T14:15:22Z",
  "count": 0
}
```

### Properties

| Name  | Type              | Required | Restrictions | Description |
| ----- | ----------------- | -------- | ------------ | ----------- |
| month | string(date-time) | false    | none         | none        |
| count | number            | false    | none         | none        |

<h2 id="tocS_ClassificationStatsDto">ClassificationStatsDto</h2>

<a id="schemaclassificationstatsdto"></a>
<a id="schema_ClassificationStatsDto"></a>
<a id="tocSclassificationstatsdto"></a>
<a id="tocsclassificationstatsdto"></a>

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

### Properties

| Name                | Type                                        | Required | Restrictions | Description |
| ------------------- | ------------------------------------------- | -------- | ------------ | ----------- |
| all                 | number                                      | false    | none         | none        |
| health              | number                                      | false    | none         | none        |
| civil               | number                                      | false    | none         | none        |
| realestate          | number                                      | false    | none         | none        |
| religious_education | number                                      | false    | none         | none        |
| economy             | number                                      | false    | none         | none        |
| govermental         | number                                      | false    | none         | none        |
| entertainment       | number                                      | false    | none         | none        |
| other               | number                                      | false    | none         | none        |
| countByMonth        | [[MonthlyCountDto](#schemamonthlycountdto)] | false    | none         | none        |

<h2 id="tocS_ClassificationsSelection">ClassificationsSelection</h2>

<a id="schemaclassificationsselection"></a>
<a id="schema_ClassificationsSelection"></a>
<a id="tocSclassificationsselection"></a>
<a id="tocsclassificationsselection"></a>

```json
{
  "health": true,
  "civil": true,
  "realestate": true,
  "religious": true,
  "economy": true,
  "govermental": true,
  "entertainment": true,
  "other": true
}
```

### Properties

| Name          | Type    | Required | Restrictions | Description |
| ------------- | ------- | -------- | ------------ | ----------- |
| health        | boolean | false    | none         | none        |
| civil         | boolean | false    | none         | none        |
| realestate    | boolean | false    | none         | none        |
| religious     | boolean | false    | none         | none        |
| economy       | boolean | false    | none         | none        |
| govermental   | boolean | false    | none         | none        |
| entertainment | boolean | false    | none         | none        |
| other         | boolean | false    | none         | none        |

<h2 id="tocS_MapDto">MapDto</h2>

<a id="schemamapdto"></a>
<a id="schema_MapDto"></a>
<a id="tocSmapdto"></a>
<a id="tocsmapdto"></a>

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
    "type": "Point",
    "bbox": [0],
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

### Properties

| Name            | Type                                                        | Required | Restrictions | Description      |
| --------------- | ----------------------------------------------------------- | -------- | ------------ | ---------------- |
| classifications | [ClassificationsSelection](#schemaclassificationsselection) | false    | none         | none             |
| area            | [MultiPolygon](#schemamultipolygon)                         | false    | none         | GeoJSon geometry |

<h2 id="tocS_Point">Point</h2>

<a id="schemapoint"></a>
<a id="schema_Point"></a>
<a id="tocSpoint"></a>
<a id="tocspoint"></a>

```json
{
  "type": "Point",
  "bbox": [0],
  "coordinates": [0, 0]
}
```

GeoJSon geometry

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.2">External documentation</a>

### Properties

allOf

| Name        | Type                                      | Required | Restrictions | Description                                                                                       |
| ----------- | ----------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------- |
| _anonymous_ | [GeometryElement](#schemageometryelement) | false    | none         | Abstract type for all GeoJSon 'Geometry' object the type of which is not<br> 'GeometryCollection' |

and

| Name                                 | Type                        | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------ | --------------------------- | -------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                          | object                      | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| &nbsp;&nbsp;&nbsp;&nbsp; coordinates | [Position](#schemaposition) | true     | none         | GeoJSon fundamental geometry construct.<br> <br> A position is an array of numbers. There MUST be two or more elements.<br> The first two elements are longitude and latitude, or easting and<br> northing, precisely in that order and using decimal numbers.<br> Altitude or elevation MAY be included as an optional third element.<br> <br> Implementations SHOULD NOT extend positions beyond three elements<br> because the semantics of extra elements are unspecified and ambiguous.<br> Historically, some implementations have used a fourth element to carry<br> a linear referencing measure (sometimes denoted as "M") or a numerical<br> timestamp, but in most situations a parser will not be able to properly<br> interpret these values. The interpretation and meaning of additional<br> elements is beyond the scope of this specification, and additional<br> elements MAY be ignored by parsers. |

<h2 id="tocS_MapBuildingsDto">MapBuildingsDto</h2>

<a id="schemamapbuildingsdto"></a>
<a id="schema_MapBuildingsDto"></a>
<a id="tocSmapbuildingsdto"></a>
<a id="tocsmapbuildingsdto"></a>

```json
{
  "id": "string",
  "coordinates": {
    "type": "Point",
    "bbox": [0],
    "coordinates": [0, 0]
  },
  "subClassification": "string"
}
```

### Properties

| Name              | Type                  | Required | Restrictions | Description      |
| ----------------- | --------------------- | -------- | ------------ | ---------------- |
| id                | string                | false    | none         | none             |
| coordinates       | [Point](#schemapoint) | false    | none         | GeoJSon geometry |
| subClassification | string                | false    | none         | none             |

<h2 id="tocS_HealthStatsDto">HealthStatsDto</h2>

<a id="schemahealthstatsdto"></a>
<a id="schema_HealthStatsDto"></a>
<a id="tocShealthstatsdto"></a>
<a id="tocshealthstatsdto"></a>

```json
{
  "health": 0,
  "pharmacies": 0
}
```

### Properties

| Name       | Type   | Required | Restrictions | Description |
| ---------- | ------ | -------- | ------------ | ----------- |
| health     | number | false    | none         | none        |
| pharmacies | number | false    | none         | none        |

<h2 id="tocS_CivilStatsDto">CivilStatsDto</h2>

<a id="schemacivilstatsdto"></a>
<a id="schema_CivilStatsDto"></a>
<a id="tocScivilstatsdto"></a>
<a id="tocscivilstatsdto"></a>

```json
{
  "non_govermental": 0
}
```

### Properties

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| non_govermental | number | false    | none         | none        |

<h2 id="tocS_RealEstateStatsDto">RealEstateStatsDto</h2>

<a id="schemarealestatestatsdto"></a>
<a id="schema_RealEstateStatsDto"></a>
<a id="tocSrealestatestatsdto"></a>
<a id="tocsrealestatestatsdto"></a>

```json
{
  "homes": 0,
  "apartment_complex": 0,
  "hotels": 0,
  "lands": 0
}
```

### Properties

| Name              | Type   | Required | Restrictions | Description |
| ----------------- | ------ | -------- | ------------ | ----------- |
| homes             | number | false    | none         | none        |
| apartment_complex | number | false    | none         | none        |
| hotels            | number | false    | none         | none        |
| lands             | number | false    | none         | none        |

<h2 id="tocS_ReligiousEducationStatsDto">ReligiousEducationStatsDto</h2>

<a id="schemareligiouseducationstatsdto"></a>
<a id="schema_ReligiousEducationStatsDto"></a>
<a id="tocSreligiouseducationstatsdto"></a>
<a id="tocsreligiouseducationstatsdto"></a>

```json
{
  "education": 0,
  "mosques_religious": 0,
  "colleges": 0
}
```

### Properties

| Name              | Type   | Required | Restrictions | Description |
| ----------------- | ------ | -------- | ------------ | ----------- |
| education         | number | false    | none         | none        |
| mosques_religious | number | false    | none         | none        |
| colleges          | number | false    | none         | none        |

<h2 id="tocS_EconomyStatsDto">EconomyStatsDto</h2>

<a id="schemaeconomystatsdto"></a>
<a id="schema_EconomyStatsDto"></a>
<a id="tocSeconomystatsdto"></a>
<a id="tocseconomystatsdto"></a>

```json
{
  "bakeries": 0,
  "resturants_cafes": 0,
  "companies": 0,
  "factories": 0,
  "commercial": 0,
  "banks": 0
}
```

### Properties

| Name             | Type   | Required | Restrictions | Description |
| ---------------- | ------ | -------- | ------------ | ----------- |
| bakeries         | number | false    | none         | none        |
| resturants_cafes | number | false    | none         | none        |
| companies        | number | false    | none         | none        |
| factories        | number | false    | none         | none        |
| commercial       | number | false    | none         | none        |
| banks            | number | false    | none         | none        |

<h2 id="tocS_GovermentalStatsDto">GovermentalStatsDto</h2>

<a id="schemagovermentalstatsdto"></a>
<a id="schema_GovermentalStatsDto"></a>
<a id="tocSgovermentalstatsdto"></a>
<a id="tocsgovermentalstatsdto"></a>

```json
{
  "govermental": 0,
  "parking": 0,
  "gas_stations": 0,
  "ports": 0
}
```

### Properties

| Name         | Type   | Required | Restrictions | Description |
| ------------ | ------ | -------- | ------------ | ----------- |
| govermental  | number | false    | none         | none        |
| parking      | number | false    | none         | none        |
| gas_stations | number | false    | none         | none        |
| ports        | number | false    | none         | none        |

<h2 id="tocS_EntertainmentStatsDto">EntertainmentStatsDto</h2>

<a id="schemaentertainmentstatsdto"></a>
<a id="schema_EntertainmentStatsDto"></a>
<a id="tocSentertainmentstatsdto"></a>
<a id="tocsentertainmentstatsdto"></a>

```json
{
  "entertainment": 0,
  "sports": 0,
  "parks": 0
}
```

### Properties

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| entertainment | number | false    | none         | none        |
| sports        | number | false    | none         | none        |
| parks         | number | false    | none         | none        |

<h2 id="tocS_OtherStatsDto">OtherStatsDto</h2>

<a id="schemaotherstatsdto"></a>
<a id="schema_OtherStatsDto"></a>
<a id="tocSotherstatsdto"></a>
<a id="tocsotherstatsdto"></a>

```json
{
  "other": 0
}
```

### Properties

| Name  | Type   | Required | Restrictions | Description |
| ----- | ------ | -------- | ------------ | ----------- |
| other | number | false    | none         | none        |

<h2 id="tocS_DetailedStatsDto">DetailedStatsDto</h2>

<a id="schemadetailedstatsdto"></a>
<a id="schema_DetailedStatsDto"></a>
<a id="tocSdetailedstatsdto"></a>
<a id="tocsdetailedstatsdto"></a>

```json
{
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
```

### Properties

| Name                | Type                                                            | Required | Restrictions | Description |
| ------------------- | --------------------------------------------------------------- | -------- | ------------ | ----------- |
| health              | [HealthStatsDto](#schemahealthstatsdto)                         | false    | none         | none        |
| civil               | [CivilStatsDto](#schemacivilstatsdto)                           | false    | none         | none        |
| realestate          | [RealEstateStatsDto](#schemarealestatestatsdto)                 | false    | none         | none        |
| religious_education | [ReligiousEducationStatsDto](#schemareligiouseducationstatsdto) | false    | none         | none        |
| economy             | [EconomyStatsDto](#schemaeconomystatsdto)                       | false    | none         | none        |
| govermental         | [GovermentalStatsDto](#schemagovermentalstatsdto)               | false    | none         | none        |
| entertainment       | [EntertainmentStatsDto](#schemaentertainmentstatsdto)           | false    | none         | none        |
| other               | [OtherStatsDto](#schemaotherstatsdto)                           | false    | none         | none        |

<h2 id="tocS_MapStatsDto">MapStatsDto</h2>

<a id="schemamapstatsdto"></a>
<a id="schema_MapStatsDto"></a>
<a id="tocSmapstatsdto"></a>
<a id="tocsmapstatsdto"></a>

```json
{
  "area": 0,
  "buildings": [
    {
      "id": "string",
      "coordinates": {
        "type": "Point",
        "bbox": [0],
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

### Properties

| Name      | Type                                        | Required | Restrictions | Description |
| --------- | ------------------------------------------- | -------- | ------------ | ----------- |
| area      | number                                      | false    | none         | none        |
| buildings | [[MapBuildingsDto](#schemamapbuildingsdto)] | false    | none         | none        |
| stats     | [DetailedStatsDto](#schemadetailedstatsdto) | false    | none         | none        |

<h2 id="tocS_HousesStatsDto">HousesStatsDto</h2>

<a id="schemahousesstatsdto"></a>
<a id="schema_HousesStatsDto"></a>
<a id="tocShousesstatsdto"></a>
<a id="tocshousesstatsdto"></a>

```json
{
  "homes": 0,
  "apartmentComplex": 0,
  "area": 0
}
```

### Properties

| Name             | Type   | Required | Restrictions | Description |
| ---------------- | ------ | -------- | ------------ | ----------- |
| homes            | number | false    | none         | none        |
| apartmentComplex | number | false    | none         | none        |
| area             | number | false    | none         | none        |

<h2 id="tocS_MultiPolygon">MultiPolygon</h2>

<a id="schemamultipolygon"></a>
<a id="schema_MultiPolygon"></a>
<a id="tocSmultipolygon"></a>
<a id="tocsmultipolygon"></a>

```json
{
  "type": "Point",
  "bbox": [0],
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

GeoJSon geometry

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.7">External documentation</a>

### Properties

allOf

| Name        | Type                                      | Required | Restrictions | Description                                                                                       |
| ----------- | ----------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------- |
| _anonymous_ | [GeometryElement](#schemageometryelement) | false    | none         | Abstract type for all GeoJSon 'Geometry' object the type of which is not<br> 'GeometryCollection' |

and

| Name                                 | Type    | Required | Restrictions | Description |
| ------------------------------------ | ------- | -------- | ------------ | ----------- |
| _anonymous_                          | object  | false    | none         | none        |
| &nbsp;&nbsp;&nbsp;&nbsp; coordinates | [array] | true     | none         | none        |

<h2 id="tocS_ClassificationDto">ClassificationDto</h2>

<a id="schemaclassificationdto"></a>
<a id="schema_ClassificationDto"></a>
<a id="tocSclassificationdto"></a>
<a id="tocsclassificationdto"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

| Name | Type   | Required | Restrictions | Description |
| ---- | ------ | -------- | ------------ | ----------- |
| id   | string | false    | none         | none        |
| name | string | false    | none         | none        |

<h2 id="tocS_FAQDto">FAQDto</h2>

<a id="schemafaqdto"></a>
<a id="schema_FAQDto"></a>
<a id="tocSfaqdto"></a>
<a id="tocsfaqdto"></a>

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

### Properties

| Name      | Type              | Required | Restrictions | Description |
| --------- | ----------------- | -------- | ------------ | ----------- |
| question  | string            | false    | none         | none        |
| answer    | string            | false    | none         | none        |
| createdAt | string(date-time) | false    | none         | none        |
| updatedAt | string(date-time) | false    | none         | none        |
| deleted   | boolean           | false    | none         | none        |
| notes     | string            | false    | none         | none        |
| id        | string            | false    | none         | none        |

<h2 id="tocS_MunicipalityDto">MunicipalityDto</h2>

<a id="schemamunicipalitydto"></a>
<a id="schema_MunicipalityDto"></a>
<a id="tocSmunicipalitydto"></a>
<a id="tocsmunicipalitydto"></a>

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "website": "string",
  "boundaries": {
    "type": "Point",
    "bbox": [0],
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

### Properties

| Name       | Type                                | Required | Restrictions | Description      |
| ---------- | ----------------------------------- | -------- | ------------ | ---------------- |
| name       | string                              | false    | none         | none             |
| email      | string                              | false    | none         | none             |
| phone      | string                              | false    | none         | none             |
| website    | string                              | false    | none         | none             |
| boundaries | [MultiPolygon](#schemamultipolygon) | false    | none         | GeoJSon geometry |
| address    | string                              | false    | none         | none             |
| createdAt  | string(date-time)                   | false    | none         | none             |
| updatedAt  | string(date-time)                   | false    | none         | none             |
| deleted    | boolean                             | false    | none         | none             |
| notes      | string                              | false    | none         | none             |
| id         | string                              | false    | none         | none             |

<h2 id="tocS_UserDto1">UserDto</h2>

<a id="schemauserdto"></a>
<a id="schema_UserDto"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{
  "fullname": "string",
  "phone": "string",
  "email": "string",
  "username": "string",
  "role": "string",
  "municipality": "string",
  "address": "string",
  "profilePicture": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

### Properties

| Name           | Type              | Required | Restrictions | Description |
| -------------- | ----------------- | -------- | ------------ | ----------- |
| fullname       | string            | false    | none         | none        |
| phone          | string            | false    | none         | none        |
| email          | string            | false    | none         | none        |
| username       | string            | false    | none         | none        |
| role           | string            | false    | none         | none        |
| municipality   | string            | false    | none         | none        |
| address        | string            | false    | none         | none        |
| profilePicture | string            | false    | none         | none        |
| createdAt      | string(date-time) | false    | none         | none        |
| updatedAt      | string(date-time) | false    | none         | none        |
| deleted        | boolean           | false    | none         | none        |
| notes          | string            | false    | none         | none        |
| id             | string            | false    | none         | none        |

#### Enumerated Values

| Property | Value                               |
| -------- | ----------------------------------- |
| status   | [Active, Suspended]                 |
| role     | [Member, Supervisor, Admin, System] |

<h2 id="tocS_PlanDto">PlanDto</h2>

<a id="schemaplandto"></a>
<a id="schema_PlanDto"></a>
<a id="tocSplandto"></a>
<a id="tocsplandto"></a>

```json
{
  "id": "string",
  "name": "string",
  "price": 0,
  "duration": 0,
  "updateInterval": 0,
  "active": true,
  "actionsQuota": 0,
  "description": "string"
}
```

### Properties

| Name           | Type    | Required | Restrictions | Description |
| -------------- | ------- | -------- | ------------ | ----------- |
| id             | string  | false    | none         | none        |
| name           | string  | false    | none         | none        |
| price          | number  | false    | none         | none        |
| duration       | number  | false    | none         | none        |
| updateInterval | number  | false    | none         | none        |
| active         | boolean | false    | none         | none        |
| actionsQuota   | number  | false    | none         | none        |
| description    | string  | false    | none         | none        |

<h2 id="tocS_RegionDto">RegionDto</h2>

<a id="schemaregiondto"></a>
<a id="schema_RegionDto"></a>
<a id="tocSregiondto"></a>
<a id="tocsregiondto"></a>

```json
{
  "name": "string",
  "boundaries": {
    "type": "Point",
    "bbox": [0],
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
  "goverment": true,
  "municipality": "string",
  "approved": true,
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

### Properties

| Name         | Type                                | Required | Restrictions | Description      |
| ------------ | ----------------------------------- | -------- | ------------ | ---------------- |
| name         | string                              | false    | none         | none             |
| boundaries   | [MultiPolygon](#schemamultipolygon) | false    | none         | GeoJSon geometry |
| goverment    | boolean                             | false    | none         | none             |
| municipality | string                              | false    | none         | none             |
| approved     | boolean                             | false    | none         | none             |
| createdAt    | string(date-time)                   | false    | none         | none             |
| updatedAt    | string(date-time)                   | false    | none         | none             |
| deleted      | boolean                             | false    | none         | none             |
| notes        | string                              | false    | none         | none             |
| id           | string                              | false    | none         | none             |

<h2 id="tocS_RequestDto">RequestDto</h2>

<a id="schemarequestdto"></a>
<a id="schema_RequestDto"></a>
<a id="tocSrequestdto"></a>
<a id="tocsrequestdto"></a>

```json
{
  "user": "string",
  "status": "string",
  "plan": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "deleted": true,
  "notes": "string",
  "id": "string"
}
```

### Properties

| Name      | Type              | Required | Restrictions | Description |
| --------- | ----------------- | -------- | ------------ | ----------- |
| user      | string            | false    | none         | none        |
| status    | string            | false    | none         | none        |
| plan      | string            | false    | none         | none        |
| createdAt | string(date-time) | false    | none         | none        |
| updatedAt | string(date-time) | false    | none         | none        |
| deleted   | boolean           | false    | none         | none        |
| notes     | string            | false    | none         | none        |
| id        | string            | false    | none         | none        |

#### Enumerated Values

| Property | Value                |
| -------- | -------------------- |
| status   | [Unread, Read, Done] |

<h2 id="tocS_SubClassificationDto">SubClassificationDto</h2>

<a id="schemasubclassificationdto"></a>
<a id="schema_SubClassificationDto"></a>
<a id="tocSsubclassificationdto"></a>
<a id="tocssubclassificationdto"></a>

```json
{
  "id": "string",
  "name": "string",
  "classification": "string"
}
```

### Properties

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| id             | string | false    | none         | none        |
| name           | string | false    | none         | none        |
| classification | string | false    | none         | none        |

<h2 id="tocS_TransactionDto">TransactionDto</h2>

<a id="schematransactiondto"></a>
<a id="schema_TransactionDto"></a>
<a id="tocStransactiondto"></a>
<a id="tocstransactiondto"></a>

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

### Properties

| Name         | Type              | Required | Restrictions | Description |
| ------------ | ----------------- | -------- | ------------ | ----------- |
| amount       | string            | false    | none         | none        |
| user         | string            | false    | none         | none        |
| subscription | string            | false    | none         | none        |
| createdAt    | string(date-time) | false    | none         | none        |
| updatedAt    | string(date-time) | false    | none         | none        |
| deleted      | boolean           | false    | none         | none        |
| notes        | string            | false    | none         | none        |
| id           | string            | false    | none         | none        |

<h2 id="tocS_GeoJsonObject">GeoJsonObject</h2>

<a id="schemageojsonobject"></a>
<a id="schema_GeoJsonObject"></a>
<a id="tocSgeojsonobject"></a>
<a id="tocsgeojsonobject"></a>

```json
{
  "type": "Feature",
  "bbox": [0]
}
```

    GeoJSon object

    The coordinate reference system for all GeoJSON coordinates is a
    geographic coordinate reference system, using the World Geodetic System
    1984 (WGS 84) datum, with longitude and latitude units of decimal
    degrees.
    This is equivalent to the coordinate reference system identified by the
    Open Geospatial Consortium (OGC) URN
    An OPTIONAL third-position element SHALL be the height in meters above
    or below the WGS 84 reference ellipsoid.
    In the absence of elevation values, applications sensitive to height or
    depth SHOULD interpret positions as being at local ground or sea level.

<a href="https://tools.ietf.org/html/rfc7946#section-3">External documentation</a>

### Properties

| Name | Type     | Required | Restrictions | Description |
| ---- | -------- | -------- | ------------ | ----------- |
| type | string   | true     | none         | none        |
| bbox | [number] | false    | none         | none        |

#### Enumerated Values

| Property | Value                                                                                                                   |
| -------- | ----------------------------------------------------------------------------------------------------------------------- |
| type     | [Feature, FeatureCollection, Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon, GeometryCollection] |

<h2 id="tocS_Geometry">Geometry</h2>

<a id="schemageometry"></a>
<a id="schema_Geometry"></a>
<a id="tocSgeometry"></a>
<a id="tocsgeometry"></a>

```json
{
  "type": "Point",
  "bbox": [0]
}
```

        Abstract type for all GeoJSon object except Feature and
        FeatureCollection

<a href="https://tools.ietf.org/html/rfc7946#section-3">External documentation</a>

### Properties

allOf - discriminator: GeoJsonObject.type

| Name        | Type                                  | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ------------------------------------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_ | [GeoJsonObject](#schemageojsonobject) | false    | none         | GeoJSon object<br><br> The coordinate reference system for all GeoJSON coordinates is a geographic coordinate reference system, using the World Geodetic System 1984 (WGS 84) datum, with longitude and latitude units of decimal degrees.<br> This is equivalent to the coordinate reference system identified by the<br> Open Geospatial Consortium (OGC) URN An OPTIONAL third-position element SHALL be the height in meters above or below the WGS 84 reference ellipsoid.<br> In the absence of elevation values, applications sensitive to height or depth SHOULD interpret positions as being at local ground or sea level. |

and - discriminator: type

| Name                          | Type   | Required | Restrictions | Description |
| ----------------------------- | ------ | -------- | ------------ | ----------- |
| _anonymous_                   | object | false    | none         | none        |
| &nbsp;&nbsp;&nbsp;&nbsp; type | string | true     | none         | none        |

#### Enumerated Values

| Property | Value                                                                                       |
| -------- | ------------------------------------------------------------------------------------------- |
| type     | [Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon, GeometryCollection] |

<h2 id="tocS_GeometryElement">GeometryElement</h2>

<a id="schemageometryelement"></a>
<a id="schema_GeometryElement"></a>
<a id="tocSgeometryelement"></a>
<a id="tocsgeometryelement"></a>

```json
{
  "type": "Point",
  "bbox": [0]
}
```

      Abstract type for all GeoJSon 'Geometry' object the type of which is not
      'GeometryCollection'

<a href="https://tools.ietf.org/html/rfc7946#section-3">External documentation</a>

### Properties

allOf

| Name        | Type                        | Required | Restrictions | Description                                                                   |
| ----------- | --------------------------- | -------- | ------------ | ----------------------------------------------------------------------------- |
| _anonymous_ | [Geometry](#schemageometry) | false    | none         | Abstract type for all GeoJSon object except Feature and<br> FeatureCollection |

and - discriminator: type

| Name                          | Type   | Required | Restrictions | Description |
| ----------------------------- | ------ | -------- | ------------ | ----------- |
| _anonymous_                   | object | false    | none         | none        |
| &nbsp;&nbsp;&nbsp;&nbsp; type | string | true     | none         | none        |

#### Enumerated Values

| Property | Value                                                                   |
| -------- | ----------------------------------------------------------------------- |
| type     | [Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon] |

<h2 id="tocS_Feature">Feature</h2>

<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
{
  "type": "Feature",
  "bbox": [0],
  "geometry": {
    "type": "Point",
    "bbox": [0]
  },
  "properties": {},
  "id": 0
}
```

GeoJSon 'Feature' object

<a href="https://tools.ietf.org/html/rfc7946#section-3.2">External documentation</a>

### Properties

allOf - discriminator: GeoJsonObject.type

| Name        | Type                                  | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------- | ------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _anonymous_ | [GeoJsonObject](#schemageojsonobject) | false    | none         | GeoJSon object<br><br> The coordinate reference system for all GeoJSON coordinates is a geographic coordinate reference system, using the World Geodetic System1984 (WGS 84) datum, with longitude and latitude units of decimal degrees.<br> This is equivalent to the coordinate reference system identified by the Open Geospatial Consortium (OGC) URN An OPTIONAL third-position element SHALL be the height in meters above or below the WGS 84 reference ellipsoid.<br> In the absence of elevation values, applications sensitive to height or depth SHOULD interpret positions as being at local ground or sea level. |

and

| Name                              | Type   | Required | Restrictions | Description |
| --------------------------------- | ------ | -------- | ------------ | ----------- |
| _anonymous_                       | object | false    | none         | none        |
| &nbsp;&nbsp;&nbsp;&nbsp; geometry | any    | true     | none         | none        |

allOf

| Name                                                         | Type | Required | Restrictions | Description |
| ------------------------------------------------------------ | ---- | -------- | ------------ | ----------- |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _anonymous_ | any  | false    | none         | none        |

and

| Name                                                         | Type                        | Required | Restrictions | Description                                                                   |
| ------------------------------------------------------------ | --------------------------- | -------- | ------------ | ----------------------------------------------------------------------------- |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _anonymous_ | [Geometry](#schemageometry) | false    | none         | Abstract type for all GeoJSon object except Feature and<br> FeatureCollection |

continued

| Name                                | Type        | Required | Restrictions | Description |
| ----------------------------------- | ----------- | -------- | ------------ | ----------- |
| &nbsp;&nbsp;&nbsp;&nbsp; properties | object¦null | true     | none         | none        |
| &nbsp;&nbsp;&nbsp;&nbsp; id         | any         | false    | none         | none        |

oneOf

| Name                                                         | Type   | Required | Restrictions | Description |
| ------------------------------------------------------------ | ------ | -------- | ------------ | ----------- |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _anonymous_ | number | false    | none         | none        |

xor

| Name                                                         | Type   | Required | Restrictions | Description |
| ------------------------------------------------------------ | ------ | -------- | ------------ | ----------- |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _anonymous_ | string | false    | none         | none        |

<h2 id="tocS_FeatureCollection">FeatureCollection</h2>

<a id="schemafeaturecollection"></a>
<a id="schema_FeatureCollection"></a>
<a id="tocSfeaturecollection"></a>
<a id="tocsfeaturecollection"></a>

```json
{
  "type": "Feature",
  "bbox": [0],
  "features": [
    {
      "type": "Feature",
      "bbox": [0],
      "geometry": {
        "type": "Point",
        "bbox": [0]
      },
      "properties": {},
      "id": 0
    }
  ]
}
```

GeoJSon 'FeatureCollection' object

<a href="https://tools.ietf.org/html/rfc7946#section-3.3">External documentation</a>

### Properties

allOf - discriminator: GeoJsonObject.type

| Name        | Type                                  | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------- | ------------------------------------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_ | [GeoJsonObject](#schemageojsonobject) | false    | none         | GeoJSon object<br><br> The coordinate reference system for all GeoJSON coordinates is a<br> geographic coordinate reference system, using the World Geodetic System<br> 1984 (WGS 84) datum, with longitude and latitude units of decimal<br> degrees.<br> This is equivalent to the coordinate reference system identified by the<br> Open Geospatial Consortium (OGC) URN<br> An OPTIONAL third-position element SHALL be the height in meters above<br> or below the WGS 84 reference ellipsoid.<br> In the absence of elevation values, applications sensitive to height or<br> depth SHOULD interpret positions as being at local ground or sea level. |

and

| Name                              | Type                        | Required | Restrictions | Description                |
| --------------------------------- | --------------------------- | -------- | ------------ | -------------------------- |
| _anonymous_                       | object                      | false    | none         | none                       |
| &nbsp;&nbsp;&nbsp;&nbsp; features | [[Feature](#schemafeature)] | true     | none         | [GeoJSon 'Feature' object] |

<h2 id="tocS_Position">Position</h2>

<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
[0, 0]
```

      GeoJSon fundamental geometry construct.

      A position is an array of numbers. There MUST be two or more elements.
      The first two elements are longitude and latitude, or easting and
      northing, precisely in that order and using decimal numbers.
      Altitude or elevation MAY be included as an optional third element.

      Implementations SHOULD NOT extend positions beyond three elements
      because the semantics of extra elements are unspecified and ambiguous.
      Historically, some implementations have used a fourth element to carry
      a linear referencing measure (sometimes denoted as "M") or a numerical
      timestamp, but in most situations a parser will not be able to properly
      interpret these values. The interpretation and meaning of additional
      elements is beyond the scope of this specification, and additional
      elements MAY be ignored by parsers.

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.1">External documentation</a>

### Properties

_None_

<h2 id="tocS_LineStringCoordinates">LineStringCoordinates</h2>

<a id="schemalinestringcoordinates"></a>
<a id="schema_LineStringCoordinates"></a>
<a id="tocSlinestringcoordinates"></a>
<a id="tocslinestringcoordinates"></a>

```json
[
  [0, 0],
  [0, 0]
]
```

GeoJSon fundamental geometry construct, array of two or more positions.

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.4">External documentation</a>

### Properties

| Name        | Type                          | Required | Restrictions | Description                                                             |
| ----------- | ----------------------------- | -------- | ------------ | ----------------------------------------------------------------------- |
| _anonymous_ | [[Position](#schemaposition)] | false    | none         | GeoJSon fundamental geometry construct, array of two or more positions. |

<h2 id="tocS_LinearRing">LinearRing</h2>

<a id="schemalinearring"></a>
<a id="schema_LinearRing"></a>
<a id="tocSlinearring"></a>
<a id="tocslinearring"></a>

```json
[
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0]
]
```

      A linear ring is a closed LineString with four or more positions.

      The first and last positions are equivalent, and they MUST contain
      identical values; their representation SHOULD also be identical.

      A linear ring is the boundary of a surface or the boundary of a hole in
      a surface.

      A linear ring MUST follow the right-hand rule with respect to the area
      it bounds, i.e., exterior rings are counterclockwise, and holes are
      clockwise.

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.6">External documentation</a>

### Properties

| Name        | Type                          | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------- | ----------------------------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_ | [[Position](#schemaposition)] | false    | none         | A linear ring is a closed LineString with four or more positions.<br> <br> The first and last positions are equivalent, and they MUST contain<br> identical values; their representation SHOULD also be identical.<br> <br> A linear ring is the boundary of a surface or the boundary of a hole in<br> a surface.<br> <br> A linear ring MUST follow the right-hand rule with respect to the area<br> it bounds, i.e., exterior rings are counterclockwise, and holes are<br> clockwise. |

<h2 id="tocS_MultiPoint">MultiPoint</h2>

<a id="schemamultipoint"></a>
<a id="schema_MultiPoint"></a>
<a id="tocSmultipoint"></a>
<a id="tocsmultipoint"></a>

```json
{
  "type": "Point",
  "bbox": [0],
  "coordinates": [[0, 0]]
}
```

GeoJSon geometry

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.3">External documentation</a>

### Properties

allOf

| Name        | Type                                      | Required | Restrictions | Description                                                                                       |
| ----------- | ----------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------- |
| _anonymous_ | [GeometryElement](#schemageometryelement) | false    | none         | Abstract type for all GeoJSon 'Geometry' object the type of which is not<br> 'GeometryCollection' |

and

| Name                                 | Type                          | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------ | ----------------------------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                          | object                        | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| &nbsp;&nbsp;&nbsp;&nbsp; coordinates | [[Position](#schemaposition)] | true     | none         | [<br> GeoJSon fundamental geometry construct.<br> <br> A position is an array of numbers. There MUST be two or more elements.<br> The first two elements are longitude and latitude, or easting and<br> northing, precisely in that order and using decimal numbers.<br> Altitude or elevation MAY be included as an optional third element.<br> <br> Implementations SHOULD NOT extend positions beyond three elements<br> because the semantics of extra elements are unspecified and ambiguous.<br> Historically, some implementations have used a fourth element to carry<br> a linear referencing measure (sometimes denoted as "M") or a numerical<br> timestamp, but in most situations a parser will not be able to properly<br> interpret these values. The interpretation and meaning of additional<br> elements is beyond the scope of this specification, and additional<br> elements MAY be ignored by parsers.] |

<h2 id="tocS_LineString">LineString</h2>

<a id="schemalinestring"></a>
<a id="schema_LineString"></a>
<a id="tocSlinestring"></a>
<a id="tocslinestring"></a>

```json
{
  "type": "Point",
  "bbox": [0],
  "coordinates": [
    [0, 0],
    [0, 0]
  ]
}
```

GeoJSon geometry

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.4">External documentation</a>

### Properties

allOf

| Name        | Type                                      | Required | Restrictions | Description                                                                                       |
| ----------- | ----------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------- |
| _anonymous_ | [GeometryElement](#schemageometryelement) | false    | none         | Abstract type for all GeoJSon 'Geometry' object the type of which is not<br> 'GeometryCollection' |

and

| Name                                 | Type                                                  | Required | Restrictions | Description                                                             |
| ------------------------------------ | ----------------------------------------------------- | -------- | ------------ | ----------------------------------------------------------------------- |
| _anonymous_                          | object                                                | false    | none         | none                                                                    |
| &nbsp;&nbsp;&nbsp;&nbsp; coordinates | [LineStringCoordinates](#schemalinestringcoordinates) | true     | none         | GeoJSon fundamental geometry construct, array of two or more positions. |

<h2 id="tocS_MultiLineString">MultiLineString</h2>

<a id="schemamultilinestring"></a>
<a id="schema_MultiLineString"></a>
<a id="tocSmultilinestring"></a>
<a id="tocsmultilinestring"></a>

```json
{
  "type": "Point",
  "bbox": [0],
  "coordinates": [
    [
      [0, 0],
      [0, 0]
    ]
  ]
}
```

GeoJSon geometry

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.5">External documentation</a>

### Properties

allOf

| Name        | Type                                      | Required | Restrictions | Description                                                                                       |
| ----------- | ----------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------- |
| _anonymous_ | [GeometryElement](#schemageometryelement) | false    | none         | Abstract type for all GeoJSon 'Geometry' object the type of which is not<br> 'GeometryCollection' |

and

| Name                                 | Type                                                    | Required | Restrictions | Description                                                               |
| ------------------------------------ | ------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------- |
| _anonymous_                          | object                                                  | false    | none         | none                                                                      |
| &nbsp;&nbsp;&nbsp;&nbsp; coordinates | [[LineStringCoordinates](#schemalinestringcoordinates)] | true     | none         | [GeoJSon fundamental geometry construct, array of two or more positions.] |

<h2 id="tocS_Polygon">Polygon</h2>

<a id="schemapolygon"></a>
<a id="schema_Polygon"></a>
<a id="tocSpolygon"></a>
<a id="tocspolygon"></a>

```json
{
  "type": "Point",
  "bbox": [0],
  "coordinates": [
    [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ]
  ]
}
```

GeoJSon geometry

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.6">External documentation</a>

### Properties

allOf

| Name        | Type                                      | Required | Restrictions | Description                                                                                       |
| ----------- | ----------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------- |
| _anonymous_ | [GeometryElement](#schemageometryelement) | false    | none         | Abstract type for all GeoJSon 'Geometry' object the type of which is not<br> 'GeometryCollection' |

and

| Name                                 | Type                              | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------ | --------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _anonymous_                          | object                            | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| &nbsp;&nbsp;&nbsp;&nbsp; coordinates | [[LinearRing](#schemalinearring)] | true     | none         | [<br> A linear ring is a closed LineString with four or more positions.<br> <br> The first and last positions are equivalent, and they MUST contain<br> identical values; their representation SHOULD also be identical.<br> <br> A linear ring is the boundary of a surface or the boundary of a hole in<br> a surface.<br> <br> A linear ring MUST follow the right-hand rule with respect to the area<br> it bounds, i.e., exterior rings are counterclockwise, and holes are<br> clockwise.] |

<h2 id="tocS_GeometryCollection">GeometryCollection</h2>

<a id="schemageometrycollection"></a>
<a id="schema_GeometryCollection"></a>
<a id="tocSgeometrycollection"></a>
<a id="tocsgeometrycollection"></a>

```json
{
  "type": "Point",
  "bbox": [0],
  "geometries": [
    {
      "type": "Point",
      "bbox": [0]
    }
  ]
}
```

      GeoJSon geometry collection

      GeometryCollections composed of a single part or a number of parts of a
      single type SHOULD be avoided when that single part or a single object
      of multipart type (MultiPoint, MultiLineString, or MultiPolygon) could
      be used instead.

<a href="https://tools.ietf.org/html/rfc7946#section-3.1.8">External documentation</a>

### Properties

allOf

| Name        | Type                        | Required | Restrictions | Description                                                                   |
| ----------- | --------------------------- | -------- | ------------ | ----------------------------------------------------------------------------- |
| _anonymous_ | [Geometry](#schemageometry) | false    | none         | Abstract type for all GeoJSon object except Feature and<br> FeatureCollection |

and

| Name                                | Type                                        | Required | Restrictions | Description                                                                                              |
| ----------------------------------- | ------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------- |
| _anonymous_                         | object                                      | false    | none         | none                                                                                                     |
| &nbsp;&nbsp;&nbsp;&nbsp; geometries | [[GeometryElement](#schemageometryelement)] | true     | none         | [<br> Abstract type for all GeoJSon 'Geometry' object the type of which is not<br> 'GeometryCollection'] |
