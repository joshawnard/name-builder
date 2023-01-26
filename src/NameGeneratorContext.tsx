import { createContext, Dispatch, SetStateAction } from "react";
import { SelectedWordsInterface } from "./types/selectedWords";
import { EngWordsInterface, RootWordsObjInterface } from "./interfaces/rootWordInterface";
import { SettingsInterface } from "./interfaces/settingsInterfaces";

export interface NameGeneratorContextInterface {
  prefixes: string[];
  suffixes: string[];
  selectedBits: string[];
  setSelectedBits: Dispatch<SetStateAction<string[]>>;

  //
  engWords: EngWordsInterface[];
  rootWordsObj: RootWordsObjInterface;
  settings: SettingsInterface;
  setSettings: Dispatch<SetStateAction<SettingsInterface>>;
}

const NameGeneratorContext = createContext({} as NameGeneratorContextInterface);

export default NameGeneratorContext;