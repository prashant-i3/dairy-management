const sheds = { A: 510, B: 308, C: 486, D: 572 };
const months = {
	january: 31,
	february: 29,
	march: 31,
	june: 30,
	july: 31,
	august: 31,
	september: 30,
	october: 31,
	november: 30,
	december: 31,
};
function totalProduction() {
	printProductionToConsole();

	populateUITable();
}
function totalResult() {
	let sum = 0;
	Object.keys(sheds).forEach((item) => (sum += sheds[item]));
	return sum;
}

function populateUITable() {
	const tableContainer = document.getElementById("table-container");
	const prodTotalContainer = document.getElementById("prod-total");
	let tableString = `	<table id="">
    <tr>
        <th>Shed Letter</th>

        <th>Numbers of Litres</th>

        <th>Duration</th>
    </tr>`;
	Object.keys(sheds).forEach(
		(item) =>
			(tableString += `<tr>
        <td>${item}</td>
        <td>${sheds[item]}</td>
        <td>A day</td>
    </tr>`)
	);
	tableString += "</table>";
	tableContainer.innerHTML = tableString;
	prodTotalContainer.innerText = totalResult();
}

function printProductionToConsole() {
	let prefix = "Your production in Shed ";
	let postFix = " litres per day";

	Object.keys(sheds).forEach((key) =>
		console.log(prefix + sheds[key] + postFix)
	);

	console.log("The total production is " + totalResult() + postFix);
}
function incomeOverTime(selling_price, time) {
	return totalResult() * selling_price * time;
}
function submitInputs() {
	let resultContainer = document.getElementById("time-div");
	let BuyingPrice = Number(document.getElementById("buying").value);
	let numberOfDays = Number(document.getElementById("days").value);
	// console.log([BuyingPrice, numberOfDays]);
	let result = incomeOverTime(BuyingPrice, numberOfDays);
	console.log(result);
	console.log(BuyingPrice);
	console.log(calculateMonthlyIncome(BuyingPrice));
	resultContainer.innerHTML = `Your income is ${result}`;
	return [BuyingPrice, numberOfDays];
}
function calculateMonthlyIncome(selling_price) {
	let prefix = "Your income for ";
	Object.keys(months).forEach((month) => {
		let monthTotal = months[month] * selling_price * totalResult();
		console.log(prefix + month + " is " + monthTotal);
	});
}

function monthlySalesIncome() {
	let sum = 0;
	let BuyingPrice = Number(document.getElementById("buying").value);
	const tableContainer = document.getElementById("table-container");
	const prodTotalContainer = document.getElementById("prod-total");
	let tableString = `	<table id="">
    <tr>
        <th>Months</th>

        <th>Price In KSH</th>

        <th>Rates</th>
    </tr>`;
	Object.keys(months).forEach((month) => {
		let monthTotal = months[month] * BuyingPrice * totalResult();
		sum += monthTotal;
		tableString += `<tr>
        <td>${month}</td>
        <td>${monthTotal}</td>
        <td>${BuyingPrice}</td>
    </tr>`;
	});
	tableString += "</table>";
	tableContainer.innerHTML = tableString;
	prodTotalContainer.innerText = sum;
}
