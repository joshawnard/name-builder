import React, { useState } from 'react';

import NameGeneratorContext, { NameGeneratorContextInterface } from "../NameGeneratorContext";

import WordSelectForm from "./WordSelectForm";

import GeneratorOutput from "./GeneratorOutput";
import rootWordsObj from "../root_words/rootWords";
import { EngWordsInterface } from "../interfaces/rootWordInterface";
import { SettingsInterface } from "../interfaces/settingsInterfaces";
import Settings from "./Settings";
import parseEnglishString from "../utils/parseEnglishString";

const engWordsArr = Object.keys(rootWordsObj).map((category) => {
  return {
    [category]: rootWordsObj[category].map((rootWordObj) => {
      return parseEnglishString(rootWordObj.english);
    })
  }
});

const NameGenerator = () => {
  const [selectedBits, setSelectedBits] = useState<string[]>([]);
  const [engWords, setEngWords] = useState<EngWordsInterface[]>(
    engWordsArr,
  );
  const [settings, setSettings] = useState<SettingsInterface>({
    showFormattedWords: true,
  })

  // TODO: Move these into own files
  const prefixes = ["bry", "clau", "ash", "eve"];
  const suffixes = ["lynn", "leigh", "ton", "lon"];

  const setNameGeneratorContext = (): NameGeneratorContextInterface => {
    return {
      prefixes,
      suffixes,
      selectedBits,
      setSelectedBits,

      // OLD
      engWords,
      rootWordsObj,
      settings,
      setSettings,
    };
  };

  return (
    <NameGeneratorContext.Provider value={setNameGeneratorContext()}>
      <div className="settings">
        <Settings />
      </div>

      <div className="page-wrapper">
        <div className="word-select">
          <WordSelectForm />
        </div>

        <div className="generated">
          <GeneratorOutput />
        </div>
      </div>
    </NameGeneratorContext.Provider>
  );
};

export default NameGenerator;