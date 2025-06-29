export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
