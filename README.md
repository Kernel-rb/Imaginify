# Imaginify: A Full Stack MERN AI Image Generation App

## Overview 🚀

*Imaginify* is a Full Stack MERN (MongoDB, Express.js, React, Node.js) application designed for AI image generation. This project is a MidJourney & DALL E Clone, bringing together powerful technologies to create an innovative image generation experience.

## Project Structure 📂

The repository is organized into two main folders:

1. **Server:**
   - The server-side of the application is built using Node.js and Express.js.
   - It handles API requests, interacts with the database, and integrates with the OpenAI API for image generation.

2. **Client:**
   - The client-side of the application is a React-based front-end.
   - It provides a user-friendly interface for interacting with the AI image generation features.

## Features 🌟

- **AI Image Generation:**
  - Leveraging the capabilities of OpenAI, *Imaginify* enables users to generate unique and creative images using state-of-the-art models.

- **MidJourney Integration:**
  - MidJourney integration enhances the user experience with additional features and functionalities.

- **DALL E Clone:**
  - Incorporating concepts from DALL E, the app brings cutting-edge image synthesis capabilities to users.

## Getting Started 🛠️

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or accessible remotely.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Kernel-rb/Imaginify.git
    ```

2. Install dependencies for the server:

    ```bash
    cd Imaginify/server
    npm install
    ```

3. Install dependencies for the client:

    ```bash
    cd ../client
    npm install
    ```

### Configuration

1. Create a `.env` file in the `server` directory and add the following:

    ```env
    PORT=3001
    MONGODB_URI=<your_mongodb_uri>
    OPENAI_API_KEY=<your_openai_api_key>
    ```

2. Replace `<your_mongodb_uri>` and `<your_openai_api_key>` with your MongoDB connection URI and OpenAI API key.

### Running the Application

1. Start the server:

    ```bash
    cd ../server
    npm start
    ```

2. Start the client:

    ```bash
    cd ../client
    npm start
    ```

3. Visit `http://localhost:3000` in your browser to use the *Imaginify* app.

## Contributing 🤝

If you would like to contribute to *Imaginify*, feel free to submit issues or pull requests. Your contributions are welcome!

## License 📄

This project is licensed under the [MIT License](LICENSE).