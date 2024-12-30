const lærred = document.getElementById('staticDrawing');
const kontekst = lærred.getContext('2d');
const tilRadianer = (grader) => (Math.PI / 180) * grader;

kontekst.fillStyle = 'red';
kontekst.fillRect(25, 25, 100, 100); // top, left, bredde, højde
kontekst.clearRect(45, 45, 60, 60);
kontekst.lineWidth = 5;
kontekst.strokeStyle = 'green';
kontekst.strokeRect(50, 50, 50, 50);
kontekst.lineWidth = 2;
kontekst.strokeStyle = 'blue';
kontekst.strokeRect(55, 55, 40, 40);

kontekst.beginPath();
kontekst.moveTo(50, 150);
kontekst.lineTo(150, 200);
kontekst.lineTo(100, 250);
kontekst.closePath(); // Danner en linje mellem sidste angivet punkt til det første angivne punkt i pathen.
kontekst.strokeStyle = 'red';
//kontekst.stroke();
kontekst.fill();

kontekst.beginPath();
kontekst.arc(185, 75, 50, 0, tilRadianer(360), true); // Outer circle
kontekst.moveTo(220, 75);
kontekst.arc(185, 75, 35, 0, tilRadianer(180), false); // Mouth (⟳)
kontekst.moveTo(175, 65);
kontekst.arc(170, 65, 5, 0, tilRadianer(360), true); // Left eye
kontekst.moveTo(205, 65);
kontekst.arc(200, 65, 5, 0, tilRadianer(360), true); // Right eye
kontekst.stroke();

kontekst.beginPath();
kontekst.arc(150, 150, 100, 0, tilRadianer(90), false); // Bue fra 0 til 90 grader (⟳)
kontekst.strokeStyle = 'green';
kontekst.lineWidth = 50;
kontekst.stroke();

for (let i = 0; i < 4; i++) {
	for (let j = 0; j < 3; j++) {
		kontekst.beginPath();
		const x = 400 + j * 50; // x-koordinat
		const y = 400 + i * 50; // y-koordinat
		const radius = 20; // Radius
		const startAngle = tilRadianer(0); // Startvinkel i grader
		const endAngle = tilRadianer(180) + tilRadianer(90) * j; // Slutvinkel i grader
		const counterclockwise = i % 2 !== 0; // Mod uret på ulige rækker

		// Tegn buen
		kontekst.arc(x, y, radius, startAngle, endAngle, counterclockwise);

		// Sæt specifikke stilarter
		kontekst.lineWidth = 2;
		if (i > 1) {
			kontekst.fillStyle = `rgb(${i * 60}, ${j * 40}, 120)`;
			kontekst.fill();
		} else {
			kontekst.strokeStyle = `rgb(${j * 60}, ${i * 40}, 200)`;
			kontekst.stroke();
		}
	}
}
/*
// SVG-path-data
const svgPath =
	'M765.6 762.6H258.4c-42.1 0-76.4-34.3-76.4-76.4V253.7c0-42.1 34.3-76.4 76.4-76.4h507.3c42.1 0 76.4 34.3 76.4 76.4v432.5c-0.1 42.1-34.3 76.4-76.5 76.4zM228.1 217.7h570.1V713H228.1z M803.6 718.4H222.7v-506h580.9v506z m-570.2-10.7h559.4V223.1H233.4v484.6z' +
	'M770 656c0 19-15.5 34.5-34.5 34.5H288.6c-19 0-34.5-15.5-34.5-34.5V283.9c0-19 15.5-34.5 34.5-34.5h446.9c19 0 34.5 15.5 34.5 34.5V656z' +
	'M512 309.1c-3 0-5.4-2.4-5.4-5.4v-54.3c0-3 2.4-5.4 5.4-5.4 3 0 5.4 2.4 5.4 5.4v54.3c0 3-2.4 5.4-5.4 5.4z' +
	'M512 695.4c-3 0-5.4-2.4-5.4-5.4v-54.3c0-3 2.4-5.4 5.4-5.4 3 0 5.4 2.4 5.4 5.4V690c0 3-2.4 5.4-5.4 5.4z' +
	'M255.9 469.9h54.3' +
	'M310.2 475.3h-54.3c-3 0-5.4-2.4-5.4-5.4 0-3 2.4-5.4 5.4-5.4h54.3c3 0 5.4 2.4 5.4 5.4-0.1 3-2.5 5.4-5.4 5.4z' +
	'M715.7 469.9H770' +
	'M770 475.3h-54.3c-3 0-5.4-2.4-5.4-5.4 0-3 2.4-5.4 5.4-5.4H770c3 0 5.4 2.4 5.4 5.4-0.1 3-2.5 5.4-5.4 5.4z' +
	'M512 469.9m-65.5 0a65.5 65.5 0 1 0 131 0 65.5 65.5 0 1 0-131 0Z' +
	'M512 540.8c-39.1 0-70.8-31.8-70.8-70.8s31.8-70.8 70.8-70.8 70.8 31.8 70.8 70.8-31.7 70.8-70.8 70.8z m0-131c-33.1 0-60.1 27-60.1 60.1s27 60.1 60.1 60.1 60.1-27 60.1-60.1-27-60.1-60.1-60.1z' +
	'M512 469.9m-24.3 0a24.3 24.3 0 1 0 48.6 0 24.3 24.3 0 1 0-48.6 0Z' +
	'M512 499.6c-16.3 0-29.6-13.3-29.6-29.6s13.3-29.6 29.6-29.6 29.6 13.3 29.6 29.6-13.3 29.6-29.6 29.6z m0-48.6c-10.4 0-18.9 8.5-18.9 18.9s8.5 18.9 18.9 18.9c10.4 0 18.9-8.5 18.9-18.9S522.4 451 512 451z' +
	'M663.3 475.3H538.8c-3 0-5.4-2.4-5.4-5.4 0-3 2.4-5.4 5.4-5.4h124.5c3 0 5.4 2.4 5.4 5.4-0.1 3-2.5 5.4-5.4 5.4z' +
	'M487.7 445.7l-143.6-99.8' +
	'M487.7 451c-1.1 0-2.1-0.3-3.1-1L341 350.2c-2.4-1.7-3-5-1.3-7.5 1.7-2.4 5-3 7.5-1.3l143.6 99.8c2.4 1.7 3 5 1.3 7.5-1 1.5-2.7 2.3-4.4 2.3z' +
	'M724.9 841.3H300.8c-14.5 0-24.9-13.9-20.8-27.8l16.7-56.3H729l16.7 56.3c4.1 13.9-6.3 27.8-20.8 27.8z' +
	'M724.9 846.7H300.8c-8.6 0-16.5-4-21.6-10.9-5.1-6.9-6.7-15.6-4.3-23.8l17.8-60.1H733l17.8 60.1c2.4 8.3 0.9 16.9-4.3 23.8-5.1 6.9-13 10.9-21.6 10.9z m-424.2-84.1L285.2 815c-1.5 5-0.5 10.2 2.6 14.4 3.1 4.2 7.9 6.5 13 6.5h424.1c5.2 0 9.9-2.4 13.1-6.5 3.1-4.2 4-9.4 2.6-14.4L725 762.6H300.7z';

// Opret en Path2D fra SVG-path-data
const sti = new Path2D(svgPath);

// Tegn stien
kontekst.fillStyle = 'darkgray';
kontekst.fill(sti);

kontekst.strokeStyle = 'black';
kontekst.lineWidth = 2;
kontekst.stroke(sti);
*/

/*
let x = 0;
const flytRektangel = () => {
	kontekst.clearRect(0, 0, lærred.width, lærred.height);
	kontekst.fillStyle = 'green';
	kontekst.fillRect(x, 50, 50, 50);
	x += 2; // Flytter rektanglet.
	if (x < lærred.width) requestAnimationFrame(flytRektangel);
};
flytRektangel();

const billede = new Image();
billede.src = 'billede.jpg';
billede.onload = () => {
	kontekst.drawImage(billede, 0, 0);
	const billedData = kontekst.getImageData(0, 0, lærred.width, lærred.height);
	const data = billedData.data;
	for (let i = 0; i < data.length; i += 4) {
		data[i] = 255 - data[i]; // Inverterer rød.
	}
	kontekst.putImageData(billedData, 0, 0);
};
*/

const fileInput = document.querySelector('#imageFileInput');
const canvas = document.querySelector('#billedbehandling');
const canvasCtx = canvas.getContext('2d');
const brightnessInput = document.querySelector('#brightness');
const saturationInput = document.querySelector('#saturation');
const blurInput = document.querySelector('#blur');
const inversionInput = document.querySelector('#inversion');

const settings = {};
let image = null;

function resetSettings() {
	settings.brightness = '100';
	settings.saturation = '100';
	settings.blur = '0';
	settings.inversion = '0';

	brightnessInput.value = settings.brightness;
	saturationInput.value = settings.saturation;
	blurInput.value = settings.blur;
	inversionInput.value = settings.inversion;
}

function updateSetting(key, value) {
	if (!image) return;

	settings[key] = value;
	renderImage();
}

function generateFilter() {
	const { brightness, saturation, blur, inversion } = settings;

	return `brightness(${brightness}%) saturate(${saturation}%) blur(${blur}px) invert(${inversion}%)`;
}

function renderImage() {
	canvas.width = image.width;
	canvas.height = image.height;

	canvasCtx.filter = generateFilter();
	canvasCtx.drawImage(image, 0, 0);
}

brightnessInput.addEventListener('change', () => updateSetting('brightness', brightnessInput.value));
saturationInput.addEventListener('change', () => updateSetting('saturation', saturationInput.value));
blurInput.addEventListener('change', () => updateSetting('blur', blurInput.value));
inversionInput.addEventListener('change', () => updateSetting('inversion', inversionInput.value));

fileInput.addEventListener('change', () => {
	image = new Image();

	image.addEventListener('load', () => {
		resetSettings();
		renderImage();
	});

	image.src = URL.createObjectURL(fileInput.files[0]);
});

resetSettings();

// Ur animation
function clock() {
	const now = new Date();
	const artboard = document.getElementById('animatetClock');
	const art = artboard.getContext('2d');
	art.save();
	art.clearRect(0, 0, 150, 150);
	art.translate(75, 75);
	art.scale(0.4, 0.4);
	//art.rotate(tilRadianer(360));
	art.rotate(-Math.PI / 2);
	art.strokeStyle = 'black';
	art.fillStyle = 'white';
	art.lineWidth = 8;
	art.lineCap = 'round';

	// Hour marks
	art.save();
	for (let index = 0; index < 12; index++) {
		art.beginPath();
		art.rotate(Math.PI / 6);
		art.moveTo(100, 0);
		art.lineTo(120, 0);
		art.stroke();
	}
	art.restore();

	// Minute marks
	art.save();
	art.lineWidth = 5;
	for (let index = 0; index < 60; index++) {
		if (index % 5 !== 0) {
			art.beginPath();
			art.moveTo(117, 0);
			art.lineTo(120, 0);
			art.stroke();
		}
		art.rotate(Math.PI / 30);
	}
	art.restore();

	//const sec = now.getSeconds();
	const sec = now.getSeconds() + now.getMilliseconds() / 1000;
	const min = now.getMinutes();
	const hr = now.getHours() % 12;

	art.fillStyle = 'black';

	// Write image description
	artboard.innerText = ` klokken er nu: ${hr}:${min}`;

	// Write Hours
	art.save();
	art.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
	art.lineWidth = 14;
	art.beginPath();
	art.moveTo(-20, 0);
	art.lineTo(80, 0);
	art.stroke();
	art.restore();

	// Write Minutes
	art.save();
	art.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
	art.lineWidth = 10;
	art.beginPath();
	art.moveTo(-28, 0);
	art.lineTo(112, 0);
	art.stroke();
	art.restore();

	// Write seconds
	art.save();
	art.rotate((sec * Math.PI) / 30);
	art.strokeStyle = '#D40000';
	art.fillStyle = '#D40000';
	art.lineWidth = 6;
	art.beginPath();
	art.moveTo(-30, 0);
	art.lineTo(83, 0);
	art.stroke();
	art.beginPath();
	art.arc(0, 0, 10, 0, Math.PI * 2, true);
	art.fill();
	art.beginPath();
	art.arc(95, 0, 10, 0, Math.PI * 2, true);
	art.stroke();
	art.fillStyle = 'rgb(0 0 0 / 0%)';
	art.arc(0, 0, 3, 0, Math.PI * 2, true);
	art.fill();
	art.restore();

	art.beginPath();
	art.lineWidth = 14;
	art.strokeStyle = '#325FA2';
	art.arc(0, 0, 142, 0, Math.PI * 2, true);
	art.stroke();

	art.restore();

	window.requestAnimationFrame(clock);
}
window.requestAnimationFrame(clock);
