const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// // Render Html File
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/creator", (req, res) => {
	res.status(200).send({
		name: "Dipankar Shaw",
		date_of_creation: "19-12-2022",
		github: "https://github.com/dshaw0004",
		contact: "dipankarshaw692+github@gmail.com",
	});
});

app.use("/api/iphones/", require("./iphones.js"));

app.listen(port, () => {
	// Code.....
	console.log("server is running");
});
