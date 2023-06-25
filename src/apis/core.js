import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_URL + "/movie/upcoming",
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
	},
});
