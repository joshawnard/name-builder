import { createContext, Dispatch, SetStateAction } from "react";
import { SettingsInterface } from "./interfaces/settingsInterfaces";

export interface NameGeneratorContextInterface {
  connections: string[];
  prefixes: string[];
  suffixes: string[];
  selectedBits: string[];
  setSelectedBits: Dispatch<SetStateAction<string[]>>;

  settings: SettingsInterface;
  setSettings: Dispatch<SetStateAction<SettingsInterface>>;
}

const NameGeneratorContext = createContext({} as NameGeneratorContextInterface);

export default NameGeneratorContext;