import demoKey from "./demoKey.js";
import functions from "./utils/functions.js";
import constants from "./utils/constants.js";

const functionsEl = document.querySelector("#functions");
const codeEl = document.querySelector("code");
const dynamicEl = document.querySelector("#dynamic");
const sendBtn = document.querySelector("#send-btn");

const dynamicFields = () => {
	const functionsValue = functionsEl.value;
	if (functionsValue === constants.SELECT) return;
	// display button
	sendBtn.parentElement.classList.remove("hide");

	// process manual query
	if (functionsValue === constants.OTHERS) {
		const manualEl = document.querySelector("#manual");
		return manualEl.classList.remove("hide");
	}

	// process dynamic query
	const { required } = functions[functionsValue];
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
	const functionsValue = functionsEl.value;
	let queryString = ``;

	// manual query
	if (functionsValue === constants.OTHERS) {
		const othersEl = document.querySelector("#others");
		const othersInput = othersEl.value;
		queryString += othersInput;
	}
	// dynamic query
	else {
		const { required } = functions[functionsValue];
		if (!required && !required.lengtn) return;
		queryString = `function=${functionsValue}`;
		// extract values using loop
		required.forEach((field) => {
			const fieldInput = document.querySelector(`#${field.param}`).value;
			queryString += `&${field.param}=${fieldInput}`;
		});
	}

	console.log(queryString);
	const res = await urlBuilder(queryString);
	return displayResponse(res);
};

const urlBuilder = async (queryString) => {
	const url = `${constants.BASEURL}/query?${queryString}&apikey=${demoKey}`;
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
functionsEl.addEventListener("change", dynamicFields);
