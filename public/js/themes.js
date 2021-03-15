$(document).ready(async function () {
	if (!(await getDark())) {
		document.documentElement.setAttribute('data-theme', 'light');
		//console.log('Light mode');
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		//console.log('Dark Mode');
	}
});

async function getDark() {
	return JSON.parse(localStorage.getItem('isDark'));
}
async function setDark(value) {
	localStorage.setItem('isDark', value);
}

function changeTxt() {
	let x = document.getElementById("btnChangeTxt");
	if (x.innerHTML === "Change to Light Mode") {
		x.innerHTML = "Change to Dark Mode";
	} else {
		x.innerHTML = "Change to Light Mode";
	}
}


async function toggle() {
	let x = !(await getDark());
	await setDark(x);
	if (!x) {
		// changeTxt()
		document.documentElement.setAttribute('data-theme', 'light');
		document.documentElement.classList.add('transition');
		//console.log('Light mode');
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		document.documentElement.classList.add('transition');
		//console.log('Dark Mode');
	}
	let t = document.getElementById("btnChangeTxt");
	if (t.innerHTML === "Change to Light Mode") {
		t.innerHTML = "Change to Dark Mode";
	} else {
		t.innerHTML = "Change to Light Mode";
	}
}