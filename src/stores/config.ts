import { atom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

// Define the shape of your config store
export interface ConfigStore {
  currency: string;
  lang: string;
  theme: "light" | "dark";
  [key: string]: any;
}

// Default config values
const defaultConfig: ConfigStore = {
  currency: "USD",
  lang: "en",
  theme: "light",
};

// Create a persistent nanostore
export const configStore = persistentAtom<ConfigStore>(
  "configStore", // storage key
  defaultConfig,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

// Update functions
export function setCurrency(currency: string) {
  configStore.set({ ...configStore.get(), currency });
}

export function setLang(lang: string) {
  configStore.set({ ...configStore.get(), lang });
}

export function setTheme(theme: "light" | "dark") {
  configStore.set({ ...configStore.get(), theme });
}

// Generic update function for any config key
export function updateConfig<K extends keyof ConfigStore>(
  key: K,
  value: ConfigStore[K]
) {
  configStore.set({ ...configStore.get(), [key]: value });
}
