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

## POST /user/login

### Description
Logs in an existing user by accepting a JSON payload with the following fields:
- **email**: string (valid email, required)
- **password**: string (min Length: 8, required)

The endpoint verifies the credentials and returns an authentication token along with user details.

### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword123"
}
```

### Success Response
- **Status Code:** 200 OK
- **Body:**
```json
{
  "success": true,
  "user": {
    // ...user details, password excluded...
  },
  "token": "jwt_token_here"
}
```

### Error Responses
- **Status Code:** 400 Bad Request  
  When the provided data does not meet validation rules.
- **Status Code:** 401 Unauthorized  
  When email or password is incorrect.
- **Status Code:** 500 Internal Server Error  
  For unexpected server errors.

## GET /profile

### Description
Requires a valid authentication token. Returns the profile of the authenticated user.

### Success Response
- **Status Code:** 200 OK  
- **Body:**
```json
{
  "success": true,
  "user": { /* ...user details... */ }
}
```

### Error Responses
- **Status Code:** 401 Unauthorized – When the authentication token is missing or invalid.

## GET /logout

### Description
Clears the authentication token from cookies and blacklists it.

### Success Response
- **Status Code:** 200 OK  
- **Body:**
```json
{
  "success": true,
  "message": "Logged out"
}
```

### Error Responses
- **Status Code:** 401 Unauthorized – When the authentication token is missing or invalid.

## POST /captain/register

### Description
Registers a new captain by accepting a JSON payload with the following fields:
- **fullname**: object containing:
  - **firstname**: string (min length: 3, required)
  - **lastname**: string (min length: 3, required)
- **email**: string (valid email, required)
- **password**: string (min length: 8, required)
- **vehicle**: object containing:
  - **color**: string (required)
  - **plate**: string (required)
  - **capacity**: number (required)
  - **type**: string (must be one of "motorcycle", "car", "auto")

The endpoint creates a new captain with hashed password and returns an authentication token.

### Request Body
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "type": "car"
  }
}
```

### Success Response
- **Status Code:** 201 Created
- **Body:**
```json
{
  "Captain": {
    // ...captain details...
  },
  "token": "jwt_token_here"
}
```

### Error Responses
- **Status Code:** 400 Bad Request – if validation fails or if the captain already exists.
- **Status Code:** 500 Internal Server Error – for unexpected errors.

## POST /captain/login

### Description
Logs in an existing captain by accepting a JSON payload with:
- **email**: string (valid email, required)
- **password**: string (min length: 8, required)

Authenticates the captain and returns an authentication token along with captain details.

### Request Body
```json
{
  "email": "jane.doe@example.com",
  "password": "securePassword123"
}
```

### Success Response
- **Status Code:** 200 OK
- **Body:**
```json
{
  "success": true,
  "captain": {
    // ...captain details, password excluded...
  },
  "token": "jwt_token_here"
}
```

### Error Responses
- **Status Code:** 400 Bad Request – When validation fails.
- **Status Code:** 401 Unauthorized – When credentials are invalid.
- **Status Code:** 500 Internal Server Error – For unexpected errors.

## GET /captain/profile

### Description
A protected route that returns the logged-in captain's profile. Requires a valid authentication token.

### Success Response
- **Status Code:** 200 OK
- **Body:**
```json
{
  "success": true,
  "captain": {
    // ...captain details...
  }
}
```

### Error Responses
- **Status Code:** 401 Unauthorized – When the authentication token is missing or invalid.

## GET /capatin/logout

### Description
Logs out the captain by clearing the authentication token from cookies and blacklisting the token.

### Success Response
- **Status Code:** 200 OK
- **Body:**
```json
{
  "success": true,
  "message": "Logout successfully"
}
```

### Error Responses
- **Status Code:** 401 Unauthorized – When the authentication token is missing or invalid.

<!-- ...other documentation... -->
