# Backend API Documentation

## Users

### Login

**Endpoint:** `POST /users/login`

**Description:** Logs in a user.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Responses:**

* **200 OK:**
  ```json
  {
    "token": "your-jwt-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com"
    }
  }
  ```
* **400 Bad Request:** (Invalid input)
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```
* **401 Unauthorized:** (Invalid credentials)
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Register

**Endpoint:** `POST /users/register`

**Description:** Registers a new user.

**Request Body:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "user@example.com",
  "password": "password123"
}
```

**Responses:**

* **201 Created:**
  ```json
  {
    "token": "your-jwt-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com"
    }
  }
  ```
* **400 Bad Request:** (Invalid input)
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
    ]
  }
  ```
* **400 Bad Request:** (User already exists)
  ```json
  {
    "message": "User already exist"
  }
  ```
