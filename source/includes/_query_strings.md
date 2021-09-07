# Query Strings

Both get by id and get list route has some extra query string to manipulate the response match your need.

| Query String | Example                                           | Default        | Description                                           |
| ------------ | ------------------------------------------------- | -------------- | ----------------------------------------------------- |
| `select`     | `GET /users?select=name,email,dob`                | All properties | Select properties to include in JSON response         |
| `limit`      | `GET /users?limit=40`                             | 20             | Limit number of records returned in response (Max 50) |
| `offset`     | `GET /users?offset=3`                             | 0              | Offset of the record set returned in response         |
| `filter`     | `GET /users?filter=(name='john' and active=true)` | -              | Find records by property using exact comparison       |
| `order`      | `GET /users?order=-createdAt,name`                | -              | Order by properties, - for descending order           |
