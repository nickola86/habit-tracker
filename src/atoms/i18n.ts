import { atom } from "recoil";
export const supportedLanguages = atom<Array<string>>({
    key:'supportedLanguages',
    default: ["it","en"]
});

export const selectedLanguage = atom<string>(
    {
        key:'selectedLanguage',
        default: "it"
    }
)