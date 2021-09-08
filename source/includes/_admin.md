# Admin

## Users Count

```javascript
const options = {
  method: "GET",
};

const res = await fetch("/api/admin/users-count", options);
```

> The above command returns JSON structured like this:

```json
[
  {
    "count": "2",
    "municipalityId": "f2cde2c4-7659-4353-9453-2ff2a91fe109"
  },
  {
    "count": "3",
    "municipalityId": "f2cde7c8-7659-7789-8520-2hh2n91rf177"
  }
]
```

<p class="policies">[Admin]</p>

This endpoint returns an array of users count in each municipality.

### HTTP Request

`GET /api/admin/users-count`

## Monthly Income

```javascript
const options = {
  method: "GET",
};

const res = await fetch("/api/admin/monthly-income", options);
```

> The above command returns JSON structured like this:

```json
[
  {
    "month": "2021-08-01T00:00:00.000Z",
    "amount": "2510.00"
  },
  {
    "month": "2021-09-01T00:00:00.000Z",
    "amount": "4500.00"
  }
]
```

<p class="policies">[Admin]</p>

This endpoint retrieves income by month.

### HTTP Request

`GET /api/admin/monthly-income`

## Yearly Income

```javascript
const options = {
  method: "GET",
};

const res = await fetch("/api/admin/yearly-income", options);
```

> The above command returns JSON structured like this:

```json
[
  {
    "month": "2020-01-01T00:00:00.000Z",
    "amount": "25510.00"
  },
  {
    "month": "2021-01-01T00:00:00.000Z",
    "amount": "47500.00"
  }
]
```

<p class="policies">[Admin]</p>

This endpoint retrieves income by year.

### HTTP Request

`GET /api/admin/yearly-income`
