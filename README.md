
# Prescripto 🩺

**Prescripto** is a full-stack doctor appointment booking system developed from scratch. It facilitates seamless interactions between patients, doctors, and administrators, ensuring efficient appointment scheduling and management.

## 🌟 Features

* **Patient Portal**:

  * User registration and authentication.
  * Browse and book appointments with available doctors.
  * View and manage existing appointments.

* **Doctor Dashboard**:

  * Secure login for doctors.
  * View scheduled appointments.
  * Update availability and profile information.

* **Admin Panel**:

  * Manage doctor and patient profiles.
  * Oversee all appointments.
  * System-wide analytics and reporting.

## 🛠️ Technologies Used

### Frontend

* **React.js**: For building interactive user interfaces.
* **React Router**: Handling client-side routing.
* **Axios**: Making HTTP requests to the backend.
* **Tailwind-CSS**: For better and smooth CSS
### Backend

* **Node.js**: JavaScript runtime environment.
* **Express.js**: Web framework for Node.js.
* **MongoDB**: NoSQL database for storing application data.
* **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
* **JWT**: JSON Web Tokens for authentication.

## 🚀 Getting Started

### Prerequisites

* Node.js and npm installed on your machine.
* MongoDB installed and running.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Amolraut638/Prescripto.git
   cd Prescripto
   ```

2. **Install dependencies for the backend**:

   ```bash
   cd Backend
   npm install
   ```

3. **Install dependencies for the frontend**:

   ```bash
   cd ../frontend
   npm install
   ```

4. **Install dependencies for the admin panel**:

   ```bash
   cd ../admin
   npm install
   ```

### Running the Application

1. **Start the backend server**:

   ```bash
   cd Backend
   npm start
   ```

2. **Start the frontend application**:

   ```bash
   cd ../frontend
   npm start
   ```

3. **Start the admin panel**:

   ```bash
   cd ../admin
   npm start
   ```

The applications should now be running at their respective local hosts.

## 📁 Project Structure

```bash
Prescripto/
├── .vscode/           # VSCode configurations
├── Backend/           # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── admin/             # Admin panel frontend
│   ├── public/
│   └── src/
├── frontend/          # Patient and doctor frontend
│   ├── public/
│   └── src/
└── README.md
```

