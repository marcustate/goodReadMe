const axios = require("axios");
require("dotenv").config();


const api = {
	getUser(username) {
		// Gets user information
		const queryUrl = "https://api.github.com/users/${username}";
		console.log(queryUrl);
		return axios.get(queryUrl).catch(err => {
			console.log("User not found");
			process.exit(1);
		});
	},
	getStars(username) {
		// Gets repo information for user
		const queryUrl = "https://api.github.com/users/${username}/repos?per_page=100";
		return axios.get(queryUrl).then(res => {
			return res.data.reduce((acc, current) => {
				acc += current.stargazers_count;
				return acc;
			}, 0);
		});
	}
};

module.exports = api;
