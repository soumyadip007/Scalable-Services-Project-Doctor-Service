# Doctor Management API

This API provides endpoints for managing doctor records.

## Create a Doctor

Creates a new doctor record in the database.


## Base URL

The base URL for accessing the Doctor API is `http://localhost:3000/project/v1/doctor`. Replace `http://localhost:3000` with the appropriate URL of your API server.

## Endpoints

### Create a Doctor

- **URL:** `/project/v1/doctor`
- **Method:** `POST`
- **Description:** Create a new doctor record.
- **Request Body:**
  ```json
{
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1980-01-01",
    "gender": "Male",
    "contactNumber": "1234567890",
    "address": "123 Main St, City",
    "email": "johndoe@example.com",
    "bloodType": "A+",
    "qualifications": [
      {
        "degree": "MD",
        "institute": "Medical College",
        "year": 2005
      }
    ],
    "specialties": ["Cardiology", "Internal Medicine"],
    "workExperience": [
      {
        "hospital": "City Hospital",
        "designation": "Consultant Cardiologist",
        "from": "2010-01-01",
        "to": "2020-12-31"
      }
    ],
    "emergencyContact": {
        "name": "Jane Doe",
        "relationship": "Spouse",
        "phoneNumber": "9876543210"
    }
}
  ```
- **Response:** Returns the created doctor record.

### Get All Doctors

- **URL:** `/project/v1/doctor`
- **Method:** `GET`
- **Description:** Get a list of all doctor records.

### Get a Doctor by ID

- **URL:** `/project/v1/doctor/:id`
- **Method:** `GET`
- **Description:** Get a specific doctor record by its ID.
- **Path Parameter:**
  - `:id` - The unique identifier of the doctor.

### Update a Doctor

- **URL:** `/project/v1/doctor/:id`
- **Method:** `PUT`
- **Description:** Update an existing doctor record.
- **Path Parameter:**
  - `:id` - The unique identifier of the doctor.
- **Request Body:** JSON object containing fields to be updated.
- **Response:** Returns the updated doctor record.

### Delete a Doctor

- **URL:** `/project/v1/doctor/:id`
- **Method:** `DELETE`
- **Description:** Delete a specific doctor record by its ID.
- **Path Parameter:**
  - `:id` - The unique identifier of the doctor.
- **Response:** Returns a success message upon successful deletion.

## cURL Examples

Below are some cURL examples demonstrating how to interact with the Doctor API:

1. **Create a Doctor:**
curl --location 'http://localhost:3000/project/v1/doctor' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1980-01-01",
    "gender": "Male",
    "contactNumber": "1234567890",
    "address": "123 Main St, City",
    "email": "johndoe@example.com",
    "bloodType": "A+",
    "qualifications": [
      {
        "degree": "MD",
        "institute": "Medical College",
        "year": 2005
      }
    ],
    "specialties": ["Cardiology", "Internal Medicine"],
    "workExperience": [
      {
        "hospital": "City Hospital",
        "designation": "Consultant Cardiologist",
        "from": "2010-01-01",
        "to": "2020-12-31"
      }
    ],
    "emergencyContact": {
        "name": "Jane Doe",
        "relationship": "Spouse",
        "phoneNumber": "9876543210"
    }
}'
    ```

2. **Get All Doctors:**
    ```bash
    curl -X GET http://localhost:3000/project/v1/doctor
    ```

3. **Get a Doctor by ID:**
    ```bash
    curl -X GET http://localhost:3000/project/v1/doctor/:id
    ```
   Replace `:id` with the ID of the doctor you want to retrieve.

4. **Update a Doctor:**
    ```bash
    curl -X PUT \
      http://localhost:3000/project/v1/doctor/:id \
      -H 'Content-Type: application/json' \
      -d '{
        "firstName": "UpdatedName"
    }'
    ```
   Replace `:id` with the ID of the doctor you want to update.

5. **Delete a Doctor:**
    ```bash
    curl -X DELETE http://localhost:3000/project/v1/doctor/:id
    ```
   Replace `:id` with the ID of the doctor you want to delete.

## Error Handling

If an error occurs while processing a request, the API will return an appropriate HTTP status code along with a JSON response containing an error message.
