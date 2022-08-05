export const displayCurrentYear = () => {
	const currentYearEl = document.querySelector("#currentYear");
	const year = new Date().getFullYear();
	currentYearEl.textContent = year;
};
