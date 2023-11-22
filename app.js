require('dotenv').config();

const express = require('express');
const https = require('https');

const app = express();

app.use(express.static( __dirname + "/public/" ));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function(req, res) {    
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    const query = req.body.cityName;
    const unit = "metric";
    const apiKey = process.env.API_KEY;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {

            if (response.statusCode == 404) {
                res.redirect("/");                
            } else {
                const weatherData = JSON.parse(data);
                res.render("index", { myWeather: weatherData });
            }
        });
    });
});

app.post("/result", function(req, res) {
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server is running at port 3000.");
})
