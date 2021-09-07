# Settings

## Save Settings

> Code samples

```javascript
const inputBody = {
  aboutSystem: "string",
  aboutPlans: "string",
};
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/settings", {
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

This endpoint is used to change settings of the system.

### HTTP Request

`POST /api/settings`

> Body parameter

```json
{
  "aboutSystem": "string",
  "aboutPlans": "string"
}
```

```yaml
aboutSystem: string
aboutPlans: string
```

<h3 id="post__api_settings-parameters">Parameters</h3>

| Name | In   | Type                              | Required | Description |
| ---- | ---- | --------------------------------- | -------- | ----------- |
| body | body | [SettingsDto](#schemasettingsdto) | true     | none        |

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="post__api_settings-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                          |
| ------ | ------------------------------------------------------- | ------------- | ------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [SuccessDto](#schemasuccessdto) |

## Read Settings

> Code samples

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "Bearer {access-token}",
};

fetch("/api/settings", {
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

This endpoint is used to read the settings of the system.

### HTTP Request

`GET /api/settings`

> Example responses

> 200 Response

```json
{
  "aboutSystem": "string",
  "aboutPlans": "string"
}
```

<h3 id="get__api_settings-responses">Responses</h3>

| Status | Meaning                                                 | Description   | Schema                            |
| ------ | ------------------------------------------------------- | ------------- | --------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Response body | [SettingsDto](#schemasettingsdto) |
