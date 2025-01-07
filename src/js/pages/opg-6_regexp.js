document.addEventListener('DOMContentLoaded', () => {
	const sourceTextElement = document.getElementById('source-text');
	const searchPatternInput = document.getElementById('search-pattern');
	const replaceTextInput = document.getElementById('replace-text');
	const useRegexCheckbox = document.getElementById('use-regex');
	const searchBtn = document.getElementById('search-btn');
	const replaceBtn = document.getElementById('replace-btn');
	const resultText = document.getElementById('result-text');

	const phoneRegex = /\b\d{8}\b/g; // Valider danske telefonnumre (8 cifre)

	// Søgning
	searchBtn.addEventListener('click', () => {
		const pattern = searchPatternInput.value;
		const text = sourceTextElement.textContent; // Læs indholdet af teksten
		const useRegex = useRegexCheckbox.checked;

		try {
			let matches;
			if (useRegex) {
				// Brug RegEx
				const regex = new RegExp(pattern, 'g');
				matches = text.match(regex);
			} else {
				// Brug almindelig tekst (case-sensitive søgning)
				const regex = new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'); // Escape specialtegn
				matches = text.match(regex);
			}

			if (matches) {
				resultText.textContent = `Fundet ${matches.length} match(es):\n${matches.join(', ')}`;
				resultText.className = 'mt-6 p-4 bg-green-100 rounded-lg border border-green-300';
				resultText.classList.remove('hidden');
			} else {
				resultText.textContent = 'Ingen match fundet.';
				resultText.className = 'mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-300';
				resultText.classList.remove('hidden');
			}
		} catch (err) {
			resultText.textContent = 'Ugyldigt RegEx mønster.';
			resultText.className = 'mt-6 p-4 bg-red-100 rounded-lg border border-red-300';
			resultText.classList.remove('hidden');
		}
	});

	// Erstatning
	replaceBtn.addEventListener('click', () => {
		const pattern = searchPatternInput.value;
		const replacement = replaceTextInput.value;
		const text = sourceTextElement.textContent; // Læs indholdet af teksten
		const useRegex = useRegexCheckbox.checked;

		try {
			let regex;
			if (useRegex) {
				// Brug RegEx
				regex = new RegExp(pattern, 'g');
			} else {
				// Brug almindelig tekst (case-sensitive søgning)
				regex = new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'); // Escape specialtegn
			}

			// Valider, at mønstret matcher et dansk telefonnummer
			if (!phoneRegex.test(pattern)) {
				resultText.textContent = 'Kun danske telefonnumre kan erstattes.';
				resultText.className = 'mt-6 p-4 bg-red-100 rounded-lg border border-red-300';
				resultText.classList.remove('hidden');
				return;
			}

			const replacedText = text.replace(regex, replacement);

			// Opdater resultatet
			resultText.textContent = replacedText;
			resultText.className = 'mt-6 p-4 bg-blue-100 rounded-lg border border-blue-300';
			resultText.classList.remove('hidden');

			// Opdater source-text med de ændrede data
			sourceTextElement.textContent = replacedText;
		} catch (err) {
			resultText.textContent = 'Ugyldigt RegEx mønster.';
			resultText.className = 'mt-6 p-4 bg-red-100 rounded-lg border border-red-300';
			resultText.classList.remove('hidden');
		}
	});
});
