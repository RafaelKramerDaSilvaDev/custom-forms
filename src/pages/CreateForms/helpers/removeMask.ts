export function removeMask(cpfMasked: string): string {
	return cpfMasked.replace(/\D/g, '');
}
