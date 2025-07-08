/** @format */

export const openInNewsTab = (url: string) => {
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferre');
};
