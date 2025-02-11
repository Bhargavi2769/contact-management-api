
CONTACT MANAGEMENT API

This is a simple Contact Management API built using Node.js, Express.js, and MongoDB/SQLite. It provides CRUD operations for managing contacts.

Features
Create a new contact
Retrieve all contacts
Update an existing contact
Delete a contact
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB or SQLite
Testing: Mocha, Chai, Chai-HTTP
Installation
Clone the repository

sh
Copy
Edit
git clone https://github.com/Bhargavi2769/contact-management-api.git
cd contact-management-api
Install dependencies


npm install
Start the server

npm start
The API will run on http://localhost:5000.

Run tests


npm test
API Endpoints
Method	Endpoint	Description
GET	/contacts	Get all contacts
POST	/contacts	Add a new contact
PUT	/contacts/:id	Update a contact
DELETE	/contacts/:id	Delete a contact
Example Request
Add a New Contact
sh
Copy
Edit
POST /contacts
Content-Type: application/json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890"
}
License
This project is open-source and available under the MIT License.
