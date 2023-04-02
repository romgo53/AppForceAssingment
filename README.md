# AppForceAssingment 
this is an Express API that manages the users and departmemts of a company.

## Detials 📃:
- The app is writen in `TypeScript`
- The data is stored in `MySQL`
- The app and the DB are hosted on `AWS` 

## API 🅰️:
the API url is:
```
ec2-3-122-56-232.eu-central-1.compute.amazonaws.com
```
use this [Postman workspace](https://www.postman.com/romgo53/workspace/appforce-assingment/overview) to interact with the API

## Endpoints 🔚
- check out this [Postman workspace](https://www.postman.com/romgo53/workspace/appforce-assingment/overview) to interact with the API
- /users:
    - [GET] /byId/{id} - Get user by ID
    - [GET] / - Get all users, you can filter the result with the following params:
    - ```
       limit - limits the amount of docs (default: 10)
       page - jump to a pages (limit is the number of docs in each page) (default:1)
       sortBy - choose by which field you want to sort the results(default: id)
       sortDirection - choose the direction of the sort (DESC or ASC) (default: ASC)
       search - filters by the value of the 'firstName' field
       ```
    - [POST] - / - create a new user
    - ```
        {
            "firstName": "test",
            "lastName": "tester",  
            "title": "A Tester",
            "email": "testaw",
            "image": "image",
            "departmentId": 1
        }
        ```
    - [PATCH] - /{id} - Update an existing user
    - [DELETE] - /{id} - Delete an existing user

- /departments:
    - [GET] - /byId/{id} - Get department by ID
    - [GET] - / - Get all departments
    - [GET] - /usercount - returns all the departments with the user count of each department
    - [POST] - / - create a new department
    - ```
        {
            "name": "Business",
            "descriptions": "The business department!"
        }
        ```
    - [PATCH] - /{id} - Update an existing department
    - [DELETE] - /{id} - Deletes an existing department

---
