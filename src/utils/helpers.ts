function standardizeDate(isoString: string): string {
  return isoString.replace(
    /^(\d{4})-(\d{1,2})-(\d{1,2})/,
    (_, year, month, day) =>
      `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`,
  );
}

export function formatDate(isoString: string): string {
  const standardizedDate = standardizeDate(isoString);
  const date = new Date(standardizedDate);

  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);
}
