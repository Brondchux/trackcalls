import functions from "./utils/functions.js";
import constants from "./utils/constants.js";
import {
	displayCurrentYear,
	displayResponse,
	makeApiCall,
} from "./utils/helpers.js";

const functionsEl = document.querySelector("#functions");
const dynamicEl = document.querySelector("#dynamic");
const manualEl = document.querySelector("#manual");
const sendBtn = document.querySelector("#send-btn");

// on load, auto extract all functions into options;
(() => {
	if (!functions || !functionsEl) return;

	for (let fxn in functions) {
		fxn = fxn.toUpperCase();
		const option = document.createElement("option");
		option.setAttribute("value", fxn);
		option.innerText = fxn;
		functionsEl.append(option);
	}
})();

const generateFields = () => {
	dynamicEl.innerHTML = "";
	manualEl.classList.add("hide");
	const functionsValue = functionsEl.value;
	if (functionsValue === constants.SELECT)
		return sendBtn.parentElement.classList.add("hide");

	// display button
	sendBtn.parentElement.classList.remove("hide");

	// process manual query
	if (functionsValue === constants.OTHERS)
		return manualEl.classList.remove("hide");

	// process dynamic query
	const { required } = functions[functionsValue];
	if (!required || !required.lengtn) return;

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
	if (functionsValue === constants.SELECT) return;
	let queryString = ``;

	// manual query
	if (functionsValue === constants.OTHERS) {
		const othersEl = document.querySelector("#others");
		const alertEl = document.querySelector(".alert");
		const othersInput = othersEl.value;
		if (!othersInput.lengtn) {
			return (alertEl.textContent = "Query string is required!");
		}
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
	const res = await makeApiCall(queryString);
	return displayResponse(res);
};

sendBtn.addEventListener("click", sendRequest);
functionsEl.addEventListener("change", generateFields);
displayCurrentYear();
