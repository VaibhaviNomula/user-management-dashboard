<<<<<<< HEAD
# user-management-dashboard
=======
# User Management Dashboard

A simple React application for viewing, adding, editing, and deleting user details.  This application uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock backend API.  It simulates data persistence using `localStorage`.

## Features

*   View a list of users with their details (ID, First Name, Last Name, Email, Department).
*   Add new users.
*   Edit existing user details.
*   Delete users.
*   Displays error messages for API failures and form validation errors.
*   Simulates data persistence using `localStorage`.

## Technologies Used

*   React
*   Axios
*   CSS Modules

## Setup Instructions

1.  Clone the repository:

    ```
    git clone [repository URL]
    ```

2.  Navigate to the project directory:

    ```
    cd user-management-dashboard
    ```

3.  Install dependencies:

    ```
    npm install
    ```

4.  Start the development server:

    ```
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Assumptions

*   This application uses JSONPlaceholder as a mock API. **Data is not truly persisted on the server.** The application uses `localStorage` to simulate persistence.  Clearing your browser's `localStorage` will reset the data.
*   Form validation is performed client-side, including required fields and email format.
*   The application assumes a basic internet connection. No specific handling for offline scenarios is implemented.

## Known Issues

*   No real-time updates from the server (JSONPlaceholder).  The user list is fetched once on initial load and then managed locally.
*   Limited error handling.

## Future Improvements

*   Implement more comprehensive error handling.
*   Add more robust form validation (e.g., using a library like Formik or React Hook Form).
*   Implement a loading state while fetching data.
*   Make the UI responsive.
*   Implement proper pagination.
*   Add unit tests.

>>>>>>> 056e540 (Initial commit)
