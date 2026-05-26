export const parseUrl = (url: string): string => {
  return url?.replace(/^https?:\/\/(www\.)?/, '') || '';
}