# HiveMall - React Product Store

HiveMall is a simple React-based product store where users can view product details and browse related products. The project is deployed on GitHub Pages, showcasing the capabilities of React, Redux, Axios, and routing with React Router.

## Features

- View product details (Title, Price, Description, and Image).
- Browse related products based on the selected product's category.
- "Add to Cart" and "Buy Now" buttons for each product (future implementation).
- Responsive design for better usability on mobile and desktop devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management for handling global state (product details, related products).
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: For navigation and routing between different views.
- **Bootstrap**: For responsive design and styling.

## Setup

### Prerequisites

- Node.js installed on your machine.
- A GitHub account to host the project on GitHub Pages.

### Getting Started Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repository-name>.git
   ```

```

```

2. Navigate into the project folder:

   ```bash
   cd <your-repository-name>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app locally.

## Folder Structure

- `public/`: Contains the `index.html` file and other static assets.
- `src/`: Contains the main React components, styles, and Redux setup.
  - `components/`: Contains React components such as `ProductCard`, `ProductDetails`.
  - `redux/`: Contains Redux actions and reducers.
  - `App.js`: The main app component that handles routing.

## Contributing

Feel free to fork this project and submit pull requests for improvements, bug fixes, or new features.

### Steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
