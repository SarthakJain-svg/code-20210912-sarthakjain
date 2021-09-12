function tableRowGenerator(bmi, bmiCategory, healthRisk)
{
	const tableBody = document.querySelector("#tbody");
	const tableRow = tableBody.insertRow(0);
	tableRow.insertCell(0).innerHTML = bmi;
	tableRow.insertCell(1).innerHTML = bmiCategory;
	tableRow.insertCell(2).innerHTML = healthRisk;
}

function jsonDataReader()
{
	let cntHeading = document.querySelector("#countHeading");
	cntHeading.innerHTML = '';

	const inputValue = document.querySelector("#jsonData").value;
	const parsedData = inputValue ? JSON.parse(inputValue) : '';

	if(parsedData) {
		parsedData.map((item) => {
			let bmi = (item.WeightKg)/((item.HeightCm/100) ** 2);
			let category = '', healthRisk = '';

			if (bmi <= 18.4) category = 'Underweight', healthRisk = 'Malnutrition risk';
			else if(bmi > 18.4 && bmi <= 24.9) category = 'Normal weight', healthRisk = 'Low risk';
			else if(bmi > 24.9 && bmi <= 29.9) category = 'Overweight', healthRisk = 'Enhanced risk';
			else if(bmi > 29.9 && bmi <= 34.9) category = 'Moderately obese', healthRisk = 'Medium risk';
			else if(bmi > 34.9 && bmi <= 39.9) category = 'Severely obese', healthRisk = 'High risk';
			else if(bmi > 39.9) category = 'Very severely obese', healthRisk = 'Very high risk';
			
			let tableHeading = document.querySelector("#heading");
			let tableContainer = document.querySelector(".container");
			if(tableHeading.style.display !== "block") tableHeading.style.display = "block";
			if(tableContainer.style.display !== "table") tableContainer.style.display = "table";
			tableRowGenerator(bmi.toFixed(2), category, healthRisk);
		});

		cntHeading.innerHTML = 'Total number of Overweight people : ' + $('td:contains("Overweight")').length;
	}
	else {
		alert("Please fill in the JSON Data field; it cannot be left blank");
	}
}