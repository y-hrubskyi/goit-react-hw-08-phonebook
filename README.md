# Phonebook App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app). To get
acquainted and configure additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Overview

This application is designed to help you manage your contacts effectively and
efficiently. With the Phonebook app, you can easily store, search, add, update,
and delete contacts, keeping all your important contact information organized
and accessible.

## Preview

Include demo GIF to visually showcase the application.

![Preview](/public/preview.gif)

## Features

- **User Authentication:** Register securely with unique credentials. Login
  easily to access your account.
- **Contact Management:** Add, edit, and delete contacts effortlessly.
- **Search Functionality:** Find contacts quickly by name or number.
- **Data Persistence:** Securely store your contact data.
- **User-Friendly Interface:** Enjoy a seamless experience with an intuitive,
  attractive and responsive design.

## Tech Stack

- **Frontend:**
  - React: A popular JavaScript library for building user interfaces.
  - Styled Components: For styling and theming components in a dynamic and
    maintainable way.
  - React Router: Declarative routing in single-page applications.
  - Redux Toolkit: State management library for handling application-level
    state.
  - Axios: JavaScript library for making HTTP requests from the browser.
  - react-hot-toast: React notifications library for displaying toast messages.
- **Backend:**
  - [Connections API](https://connections-api.herokuapp.com/docs/): External API
    as the backend for data operations.
- **Deployment:**
  - GitHub Pages: Hosting platform for deploying the frontend.
- **Version Control:**
  - Git: Distributed version control system for tracking changes in the
    codebase.
- **Development Tools:**
  - Visual Studio Code: An integrated development environment for efficient
    coding.
  - GitHub: Version control platform for collaborative development.

## Project Structure

```plaintext
goit-react-hw-08-phonebook/
|-- public/                # Public assets and files
|-- src/                   # Source code
|   |-- assets/            # Static assets such as images, icons, etc.
|   |-- components/        # Main App component and React components
|   |-- constants/         # Constants and configuration files
|   |-- helpers/           # General utility functions and helper modules
|   |-- hooks/             # Custom React hooks
|   |-- pages/             # React components representing pages of the app
|   |-- redux/             # Redux store configuration, actions, reducers, etc.
|   |-- services/          # Services for handling API calls, etc.
|   |-- styles/            # Global and component-specific styles
|   |-- index.js           # Entry point for rendering the React app
|-- package.json           # Project configuration and dependencies
```

## Getting Started

These instructions will help you set up and run the Phonebook App on your local
machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/y-hrubskyi/goit-react-hw-08-phonebook.git

    cd goit-react-hw-08-phonebook
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

### Run the application:

1. Run app using following command:

   ```bash
   npm start
   ```
