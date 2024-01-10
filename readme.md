# Full Stack Login Form

This is a simple login form application built using HTML, CSS, JavaScript, Node.js, and PostgreSQL. It allows users to signin, signup, and logout.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js
- PostgreSQL

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/srivaishnavi26/mini-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mini-project
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the PostgreSQL database:

   - Create a new database in PostgreSQL.
   - Update the database configuration in `config.js` file with your PostgreSQL credentials.

5. Start the application:

   ```bash
   npm start
   ```

6. Open your web browser and visit `http://localhost:3000` to access the login form.

## Usage

- Register: Enter your desired username and password, then click the "Register" button.
- Login: Enter your registered username and password, then click the "Login" button.
- Logout: Click the "Logout" button to log out of the application.

## Folder Structure

- `public/`: Contains the static files (HTML, CSS, JavaScript) for the client-side.
- `src/`: Contains the server-side code (Node.js).
- `src/routes/`: Contains the routes for handling user registration, login, and logout.
- `src/controllers/`: Contains the controllers for handling user authentication.
- `src/models/`: Contains the database models for user registration and login.
- `src/config.js`: Contains the configuration for connecting to the PostgreSQL database.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Thank you!
