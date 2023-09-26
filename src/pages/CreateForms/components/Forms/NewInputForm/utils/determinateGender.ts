export function determinateGender(word: string): string {
	if (!word) return 'Indeterminate';

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
