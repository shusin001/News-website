#first view of my project
![Screenshot 2025-05-08 022120](https://github.com/user-attachments/assets/68aa6713-152f-4917-b806-95211054fa6d)
# search bar searches
![Screenshot 2025-05-08 022205](https://github.com/user-attachments/assets/ed2f2fdb-db74-4a2c-87df-4e05da3275b0)
# redirect if you click on read_more or topic (for eg. here i click Amazon new tv stick and it redirect me to the original site)
![Screenshot 2025-05-08 022311](https://github.com/user-attachments/assets/701b4f57-4103-4493-9bcb-0675589a47c7)




# Trendy News App

This is a responsive and user-friendly React-based news application that fetches and displays the latest news articles using the NewsAPI. It includes search functionality, a sidebar with predefined categories, and interactive cards for each news article.

## Features

- **Live News Search**: Search for news articles using keywords.
- **Category Navigation**: Quickly access trending topics like Sports, Politics, Health, etc.
- **Responsive Design**: Fully adaptable layout suitable for all screen sizes.
- **Interactive Cards**: Each card displays a title, image, short description, and a direct link to read the full article.
- **Sidebar Toggle**: Sidebar menu allows easy navigation across predefined categories.

## Tech Stack

- **ReactJS** (Functional Components, Hooks)
- **HTML5** and **CSS3** (with custom styling)
- **NewsAPI** for fetching news articles

## Folder Structure

```
src/
│
├── App.js              # Main application component
├── App.css             # Basic app-wide styles
├── index.js            # ReactDOM entry point
├── index.css           # Global and layout styles
├── Component/
│   ├── Newsapp.js      # Core news fetching and UI logic
│   └── Card.js         # Reusable card component for news display
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your system

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/trendy-news-app.git
   cd trendy-news-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Replace the API key in `Newsapp.js` with your own key from [NewsAPI](https://newsapi.org/).

4. Start the development server:
   ```
   npm start
## Customization

- Update the background image in `.card` via the CSS class (ensure the path is correctly resolved).
- Modify categories by editing the sidebar buttons in `Newsapp.js`.

## License

This project is for educational purposes and personal use. API usage is subject to [NewsAPI's terms](https://newsapi.org/terms).


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
