const mysql = require("mysql2");

const connect = mysql.createConnection({
	user: "taskfromibro",
	host: "localhost",
	database: "taskfromibro",
	password: "taskfromibro",
	// port: "3000",

	
});

connect.connect((err) => {
	if (err) {
		console.log(err.message);
	} else {
		console.log("connected");
	}
});

module.exports = { connect };
