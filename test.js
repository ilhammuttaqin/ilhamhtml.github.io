function test()
{
	let variabel = document.getElementById('variabel').value;
	let konstanta = document.getElementById('konstanta').value;
	hasil = variabel * konstanta;
	document.getElementById('Hasil').value = hasil;

	table = document.getElementsByTagName('table')[0];
	newRow = table.insertRow(table.rows.length/2+1);

	let F = newRow.insertCell(0);
	let d = newRow.insertCell(1);
	let W = newRow.insertCell(2);
	F.innerHTML = variabel;
	d.innerHTML = konstanta;
	W.innerHTML = hasil;
}




