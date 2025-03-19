# API Documentation

## POST /user/register

### Description
Registers a new user by accepting a JSON payload with the following fields:
- **firstname**: string (min Length: 3, required)
- **lastname**: string (min Length: 3, optional)
- **email**: string (valid email, required)
- **password**: string (min Length: 8, required)

The endpoint creates a new user record with the hashed password and returns an authentication token.

### Request Body
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "yourpassword123"
}
```

### Success Response
- **Status Code:** 201 Created
- **Body:**
```json
{
  "success": true,
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    // ...other user fields, password excluded...
  },
  "token": "jwt_token_here"
}
```

### Error Responses
- **Status Code:** 400 Bad Request  
  When the request data is invalid as per defined express-validator rules.
- **Status Code:** 500 Internal Server Error  
  For unexpected server errors.

<!-- ...other documentation... -->
