# User API Documentation

This document provides details about the user-related API endpoints.

---

## Register a new user

Registers a new user in the system. It validates the user's input, creates a new user record in the database, and returns a JWT token for authentication.

-   **Endpoint:** `POST /user/register`
-   **Content-Type:** `application/json`

### Request Body

The body of the request must be a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yoursecurepassword"
}
```

#### Field Descriptions:

-   `fullname.firstname` (String, required): The user's first name. Must be at least 3 characters long.
-   `fullname.lastname` (String, optional): The user's last name.
-   `email` (String, required): The user's email address. Must be a valid email format and unique.
-   `password` (String, required): The user's password. Must be at least 6 characters long.

---

### Responses

#### Success Response

-   **Status Code:** `201 Created`
-   **Description:** The user was successfully registered.
-   **Body:** A JSON object containing a JWT token and the created user object.

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Mz...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "_id": "63c3f9a7e1b2f1e8a9f8d1c1",
    "email": "john.doe@example.com",
    "__v": 0
  }
}
```

#### Error Responses

-   **Status Code:** `400 Bad Request`
-   **Description:** The request is invalid due to failed validation.
-   **Body:** An array of error objects.

```json
{
  "errors": [
    {
      "type": "field",
      "value": "jd",
      "msg": "First name must be at least 3 characters long",
      "path": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

-   **Description:** The request could also fail if a user with the given email already exists. The server will likely return an error, which could be a generic server error if not handled specifically. 