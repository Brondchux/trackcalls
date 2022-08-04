import demoKey from "./demoKey.js";
const HOST = `https://www.alphavantage.co`;
const KEY = demoKey;

const fxnTypeEl = document.querySelector("#function");
const fmCurrencyEl = document.querySelector("#fm-currency");
const toCurrencyEl = document.querySelector("#to-currency");
const codeEl = document.querySelector("code");
const sendBtn = document.querySelector("#send-btn");

const sendRequest = async (e) => {
	e.preventDefault();
	const fxnTypeInput = fxnTypeEl.value;
	const fmCurrencyInput = fmCurrencyEl.value;
	const toCurrencyInput = toCurrencyEl.value;
	const queryString = `function=${fxnTypeInput}&from_currency=${fmCurrencyInput}&to_currency=${toCurrencyInput}`;
	const res = await urlBuilder(queryString);
	console.log(res);
	return displayResponse(res);
};

const displayResponse = async (response) => {
	codeEl.innerHTML = "";
	const preEl = document.createElement("pre");
	preEl.textContent = `${JSON.stringify(response, null, 3)}`;
	codeEl.append(preEl);
};

const urlBuilder = async (queryString) => {
	const url = `${HOST}/query?${queryString}&apikey=${KEY}`;
	console.log(url);
	return await apiCall(url);
};

const apiCall = async (url) => {
	return await fetch(url, {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => data)
		.catch((e) => new Error("You got this error: ", e));
};

sendBtn.addEventListener("click", sendRequest);
