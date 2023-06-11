function takeValue(value) {
	document.getElementById('screen').value += value;
}

function clearInput(value) {
	document.getElementById('screen').value = value;
}

function calculateResult() {
	var result = eval(document.getElementById('screen').value);
	document.getElementById('screen').value = result;
}