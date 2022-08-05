import demoKey from "./demoKey.js";
const HOST = `https://www.alphavantage.co`;
const KEY = demoKey;

const fxnTypeEl = document.querySelector("#functions");
const fmCurrencyEl = document.querySelector("#fm-currency");
const toCurrencyEl = document.querySelector("#to-currency");
const codeEl = document.querySelector("code");
const dynamicEl = document.querySelector("#dynamic");
const sendBtn = document.querySelector("#send-btn");
const markets = ["USD", "NGN", "JPY", "CNY"];
const currencies = ["BTC", "USD", "NGN", "JPY", "CNY"];
const symbols = ["BTC", "ETH"];
const intervals = ["1min", "5min", "15min", "30min", "60min"];
const outputsizes = ["compact", "full"];
const datatypes = ["json", "csv"];

const functions = {
	CURRENCY_EXCHANGE_RATE: {
		required: [
			{ param: "from_currency", values: currencies },
			{ param: "to_currency", values: currencies },
		],
	},
	CRYPTO_INTRADAY: {
		required: [
			{ param: "symbol", values: symbols },
			{ param: "market", values: markets },
			{ param: "interval", values: intervals },
		],
		optional: [
			{ param: "outputsize", values: outputsizes },
			{ param: "datatype", values: datatypes },
		],
	},
	DIGITAL_CURRENCY_DAILY: {
		required: [
			{ param: "symbol", values: symbols },
			{ param: "market", values: markets },
		],
	},
	DIGITAL_CURRENCY_WEEKLY: {
		required: [
			{ param: "symbol", values: symbols },
			{ param: "market", values: markets },
		],
	},
	DIGITAL_CURRENCY_MONTHLY: {
		required: [
			{ param: "symbol", values: symbols },
			{ param: "market", values: markets },
		],
	},
};

const dynamicFields = () => {
	const fxnTypeInput = fxnTypeEl.value;
	const { required } = functions[fxnTypeInput];
	if (!required && !required.lengtn) return;
	dynamicEl.innerHTML = "";

	// create the required fields
	required.forEach((field) => {
		const divEl = document.createElement("div");
		const labelEl = document.createElement("label");
		const selectEl = document.createElement("select");

		labelEl.setAttribute("for", field.param);
		labelEl.textContent = `Select ${field.param} type:`;
		selectEl.setAttribute("class", "form-control");
		selectEl.setAttribute("id", field.param);

		// loop to create & insert options
		field.values.map((value) => {
			const option = document.createElement("option");
			option.setAttribute("value", value);
			option.innerText = value;
			selectEl.append(option);
		});

		divEl.append(labelEl);
		divEl.append(selectEl);
		dynamicEl.append(divEl);
	});
};

const sendRequest = async (e) => {
	e.preventDefault();
	const fxnTypeInput = fxnTypeEl.value;
	const { required } = functions[fxnTypeInput];
	if (!required && !required.lengtn) return;
	let queryString = `function=${fxnTypeInput}`;

	// extract values with loop
	required.forEach((field) => {
		const fieldInput = document.querySelector(`#${field.param}`).value;
		queryString += `&${field.param}=${fieldInput}`;
	});

	console.log(queryString);
	const res = await urlBuilder(queryString);
	return displayResponse(res);
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

const displayResponse = async (response) => {
	codeEl.innerHTML = "";
	const preEl = document.createElement("pre");
	preEl.textContent = `${JSON.stringify(response, null, 3)}`;
	codeEl.append(preEl);
};

sendBtn.addEventListener("click", sendRequest);
fxnTypeEl.addEventListener("change", dynamicFields);
