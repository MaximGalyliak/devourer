const connection = require("./connection");

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

module.exports = {
	selectAll: function (table_name) {
		return new Promise((resolve, reject) => {

			let selectQ = "SELECT * FROM ??";

			connection.query(selectQ, [table_name], (err, results) => {
				if (err) console.log("SELECT query error: ", err.code, err.message);
				resolve(results);
			});
		});
	},

	insertRow: function (table_name, columns, values) {
		return new Promise((resolve, reject) => {

			let columnsArr = [];
			let valuesArr = [];

			columns.map(() => {
				columnsArr.push("??");
				valuesArr.push("?");
			});

			let insertQ = `INSERT INTO ${table_name}(${columnsArr.toString()}) VALUES (${valuesArr.toString()})`;

			connection.query(insertQ, columns.concat(values), (err, results) => {
				if (err) console.log("INSERT query error: ", err.code, err.message);
				resolve(results);
			});
		});
	},

	updateById: function (table_name, column, value, id) {
		return new Promise((resolve, reject) => {

			let updateQ = "UPDATE ?? SET ?? = ? WHERE id = ?";

			connection.query(updateQ, [table_name, column, value, id], (err, results) => {
				if (err) console.log("UPDATE query error: ", err.code, err.message);

				resolve(results);
			});
		});
	}
};
