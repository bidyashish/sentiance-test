const express = require("express");

const SPACEX_API = 'https://api.spacexdata.com/v4';

const app = express();

app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	next();
});

app.get("/", (req, res) => {
	res.send("Welcome to Assingment 2. For Function 1 go to URI /launches and For Function 2 got to ");
});

 

app.listen(process.env.PORT || 5555, (err) => {
	if (err) {
		console.error(err);
		process.exit(1);
	} else {
		console.log(`Running on ${process.env.PORT || 5555}`);
	}
});

// last resorts
process.on("uncaughtException", (err) => {
	console.log(`Caught exception: ${err}`);
	process.exit(1);
});
process.on("unhandledRejection", (reason, p) => {
	console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
	process.exit(1);
});