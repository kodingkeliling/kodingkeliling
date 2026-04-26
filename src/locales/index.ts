import { id } from "./id";
import { en } from "./en";
import { jp } from "./jp";
import { es } from "./es";
import { fr } from "./fr";
import { de } from "./de";
import { zh } from "./zh";
import { ko } from "./ko";

export const locales = {
    id,
    en,
    jp,
    es,
    fr,
    de,
    zh,
    ko
};

export type LocaleType = typeof id;
export type LanguageType = keyof typeof locales;
