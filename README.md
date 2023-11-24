# Weather Application

Developed a dynamic weather application using Node.js and Express.js, and the Mailchimp API.

## Project Structure

- `app.js`: Server file containing the main logic for handling HTTP requests, integrating with the OpenWeatherMap API, and serving static files.
- `public/`: Folder containing static files such as images, CSS, and JS files.
    - `css/`: Stylesheets for the web application.
- `views/`: Folder containing ejs files
    - `index.ejs`: JavaScript templating language for generating HTML with plain JavaScript. 
- `index.html`: Main HTML file for the weather application home page.

## Briefly describe what this code sample does:

This code sample builds a weather application using Node.js, Express.js, and EJS, integrating with the OpenWeatherMap API. It allows users to enter a city name, fetches weather data for that location from the OpenWeatherMap API, and displays the current weather conditions on a web page.

Here's a breakdown of the code:

- This Node.js application, employing Express and EJS, creates a dynamic weather web application by interfacing with the OpenWeatherMap API.
- The server, hosted on either the designated environment port (process.env.PORT) or 3000 by default, handles GET requests to the root by presenting an "index.html" file.
- On submitting a form, a POST request triggers, extracting the city name and querying the OpenWeatherMap API for weather data.
- The server then dynamically renders the "index" view, showcasing the received weather details.
- If the city is not found (404 status), it redirects to the root. There's also a POST request to "/result," redirecting to the root. The server logs its status to the console upon initiation.