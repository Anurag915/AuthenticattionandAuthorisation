# Authentication and Authorization System

## Overview
This project implements a robust authentication and authorization system using Node.js and MySQL. It ensures secure user access and permission management with role-based access control (RBAC).

## Features
- User registration and login with password hashing
- JWT-based authentication for secure API access
- Role-based access control (RBAC) for resource management
- Session management and token expiration handling
- Secure password storage using bcrypt
- Email verification and password reset functionality

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Authentication:** JSON Web Token (JWT), bcrypt
- **Deployment:** Render (for backend), Aiven (for MySQL)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Anurag915/auth-system.git
   cd auth-system
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   PORT=5000
   DB_HOST=your-database-host
   DB_USER=your-database-user
   DB_PASSWORD=your-database-password
   DB_NAME=your-database-name
   JWT_SECRET=your-secret-key
   ```
4. Run database migrations:
   ```sh
   npx sequelize-cli db:migrate
   ```
5. Start the server:
   ```sh
   npm start
   ```

## API Endpoints
### Authentication
- `POST https://authenticattionandauthorisation.onrender.com/api/v1/signup` - Register a new user
- `POST https://authenticattionandauthorisation.onrender.com/api/v1/login` - Authenticate and get a JWT token

### Protected Routes
- `GET https://authenticattionandauthorisation.onrender.com/api/v1/student` - Access student-specific resources (Student only)
- `GET https://authenticattionandauthorisation.onrender.com/api/v1/admin` - Access admin-specific resources (Admin only)

## Security Measures
- **JWT Authentication:** Secure token-based access control
- **Password Hashing:** Bcrypt for password encryption
- **Rate Limiting:** Prevent brute force attacks
- **Input Validation:** Secure user input handling
- **CORS:** Restricts access to authorized domains

## Deployment
- Deploy backend using [Render](https://render.com/)
- Use [Aiven](https://aiven.io/) for MySQL database hosting

## Contribution Guidelines
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request

## License
This project is licensed under the MIT License.

## Contact
For any queries, contact **Anurag Prajapati** via [email](mailto:your-email@example.com).

