import { id } from "./id";
import { en } from "./en";

export const locales = {
    id,
    en
};

export type LocaleType = typeof id;
export type LanguageType = "id" | "en";
