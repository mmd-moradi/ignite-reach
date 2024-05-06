// NODE_ENV Constants
export const isProduction = process.env.NODE_ENV === "production";
export const isDevelopment = process.env.NODE_ENV === "development";

// Revalidate Constants
export const REVALIDATE_IN_TEN_MINUTES = 60 * 10;
export const REVALIDATE_IN_ONE_HOUR = 60 * 60 * 1;
export const REVALIDATE_IN_SIX_HOURS = 60 * 60 * 6;
export const REVALIDATE_IN_ONE_DAY = 60 * 60 * 24;