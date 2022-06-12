export const API_URL = "https://api.covid19api.com/";
export const API_URL_COUNTRY = (slug: string) =>
  `${API_URL}dayone/country/${slug}/status/confirmed`;
export const API_URL_COUNTRIES = `${API_URL}countries`;

export const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

export const URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}/`
  : process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000/";
