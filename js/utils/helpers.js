import constants from "./constants.js";
import demoKey from "../demoKey.js";

export const displayCurrentYear = () => {
	const currentYearEl = document.querySelector("#currentYear");
	const year = new Date().getFullYear();
	currentYearEl.textContent = year;
};

export const displayResponse = async (result) => {
	const urlEl = document.querySelector(".url");
	const codeEl = document.querySelector("code");
	urlEl.classList.remove("hide");
	urlEl.innerHTML = "";
	codeEl.innerHTML = "";
	const preEl = document.createElement("pre");
	const pEl = document.createElement("p");
	pEl.textContent = `${result.url}`;
	preEl.textContent = `${JSON.stringify(result.response, null, 3)}`;
	urlEl.append(pEl);
	codeEl.append(preEl);
};

export const apiRequest = async (url) => {
	return await fetch(url, {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => data)
		.catch((e) => new Error("Ding! You got an error: ", e));
};

export const makeApiCall = async (queryString) => {
	const url = `${constants.BASEURL}/query?${queryString}&apikey=${demoKey}`;
	const maskedUrl = url.replace(demoKey, constants.DEMO_KEY_MASK);
	const response = await apiRequest(url);
	return { url: maskedUrl, response };
};
