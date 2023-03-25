# DuckDuckGo API Proxy and UI

This project creates an API proxy and a UI using Node.js and React with Redux Toolkit. The API proxy uses the DuckDuckGo API to fetch search results based on the user's query and returns a JSON response that consists only of URL and title fields for that URL. The UI allows the user to submit a search query and displays the results in a list where each title is a link to the corresponding URL. The UI also supports paging, displaying past queries, and highlighting search terms.

## How to Run the Code

To run the code, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `duckduckgo-proxy` directory and run `npm install` to install the dependencies.
3. Create a `.env` file in the `duckduckgo-proxy` directory with the following content:

PORT=<PORT_NUMBER>

DDG_API_URL=http://api.duckduckgo.com

Replace `<PORT_NUMBER>` with the port number you want to use for the API proxy.

4. Run `npm start` to start the API proxy.
5. Navigate to the `duckduckgo-ui` directory and run `npm install` to install the dependencies.
6. Create a `.env` file in the `duckduckgo-ui` directory with the following content:

REACT_APP_API_BASE_URL=http://localhost:<PORT_NUMBER>

Replace `<PORT_NUMBER>` with the same port number you used for the API proxy.

7. Run `npm start` to start the UI.
8. Navigate to `http://localhost:3000` in your browser to use the UI.

### Available Scripts

In the `duckduckgo-proxy` directory, you can run:

#### `npm start`

Runs the API proxy in development mode. The API proxy will listen on the port specified in the `.env` file.

In the `duckduckgo-ui` directory, you can run:

#### `npm start`

Runs the UI in development mode. The UI will listen on port 3000 by default.

## Technical Overview

### Backend

The API proxy is built with Node.js and Express, which handles incoming requests and proxies them to the DuckDuckGo API. It uses the `axios` library to make HTTP requests to the API and returns the JSON response to the client. The API proxy is hosted on a separate server from the UI and communicates with the UI through HTTP requests.

### Frontend

The UI is built with React and Redux Toolkit, using the Material-UI (Mui) framework for styling and UI components. The UI consists of a search bar, a list of search results, and a sidebar showing past queries. When the user submits a search query, the UI sends an HTTP request to the API proxy and displays the results in the list. The UI supports paging, where the user can navigate through the search results, and highlighting search terms in the results.

The sidebar shows a list of past queries, and when the user clicks on a past query, it populates the search input with that query and repeats the API request to show the results below the search input. The sidebar also uses Mui components for displaying the list of past queries and handling click events.
