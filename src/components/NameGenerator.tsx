import React, { useState } from 'react';

import NameGeneratorContext, { NameGeneratorContextInterface } from "../NameGeneratorContext";

import WordSelectForm from "./WordSelectForm";

import GeneratorOutput from "./GeneratorOutput";
import { SettingsInterface } from "../interfaces/settingsInterfaces";
import Settings from "./Settings";

import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"
import prefixes from "../bits/prefixes";
import suffixes from "../bits/suffixes";
import connections from "../bits/connections";

const NameGenerator = () => {
  const [selectedBits, setSelectedBits] = useState<string[]>([]);
  const [settings, setSettings] = useState<SettingsInterface>({
    showFormattedWords: true,
  })

  const setNameGeneratorContext = (): NameGeneratorContextInterface => {
    return {
      connections,
      prefixes,
      suffixes,
      selectedBits,
      setSelectedBits,

      // OLD
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