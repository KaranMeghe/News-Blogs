/** @format */

export const formatNewsDate = (isoDateString: string) => {
  const date = new Date(isoDateString);

  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formatted = date.toLocaleString('en-US', options);

  // Replace colon with dot for time
  return formatted.replace(/(\d+):(\d+)/, (_, h, m) => `${h}.${m}`);
};
