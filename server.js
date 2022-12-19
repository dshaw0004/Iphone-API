const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const iphones  = require("./iphones.js");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// // Render Html File
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'templates/index.html'));
// });

app.get("/creator", (req, res) => {
	res.status(200).send({
		name: "Dipankar Shaw",
		date_of_creation: "19-12-2022",
		github: "https://github.com/dshaw0004",
		contact: "dipankarshaw692+github@gmail.com",
	});
});

app.get("/api/iphones", (req, res)=> {
res.json(iphones)
	   })

app.get("/api/iphones/random", (req, res)=>{
	let ran = Math.floor(Math.random() * iphones.info.length)
	res.json(iphones.info[ran])
} )

app.get("/api/iphones/:id", (req, res)=> {
res.json(iphones.info[req.params.id - 1])
	   })

app.listen(port, () => {
  // Code.....
})
