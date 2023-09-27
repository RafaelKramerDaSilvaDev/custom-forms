export function determinateGender(input: string): string {
	if (!input) return '';

	const word = input.split(' ')[0].trim();

	const feminineEndings = ['a', 'dade', 'ção', 'são', 'tude', 'gem'];

	for (let ending of feminineEndings) {
		if (word.endsWith(ending)) {
			return 'a';
		}
	}

	const masculineEndings = ['o', 'e', 'l', 'r', 'm', 's'];

	for (let ending of masculineEndings) {
		if (word.endsWith(ending)) {
			return 'o';
		}
	}

	return '';
}
