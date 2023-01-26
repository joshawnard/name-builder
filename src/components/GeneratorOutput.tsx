import React, { useContext, useEffect, useState } from 'react';
import NameGeneratorContext from "../NameGeneratorContext";
import formatSelectedWords from "../utils/formatSelectedWords";
import { GeneratedName } from "../interfaces/rootWordInterface";
import renderFormattedWords from '../utils/renderFormattedWords';
import renderGenerated from "../utils/renderGeneratedNames";
import generateNames from "../utils/generateNames";

const GeneratorOutput = () => {
  const {
    rootWordsObj,
    selectedBits,
    settings: { showFormattedWords },
  } = useContext(NameGeneratorContext);
  // const [formatted

  return (
    <>
      <h2>Bits!</h2>

      {
        selectedBits.map((bit) => {
          return (
            <div>
              {bit}
            </div>
          );
        })
      }
    </>
  );

  // return (
  //   <>
  //     <div
  //       className="formatted-word-wrapper"
  //       style={formattedWordsStyle}
  //     >
  //       {renderFormattedWords(formattedWordStructures)}
  //     </div>
  //
  //     <div
  //       className="generated-names-wrapper"
  //       style={generatedNamesStyle}
  //     >
  //       {renderGenerated(generatedNames)}
  //     </div>
  //   </>
  // );
};

export default GeneratorOutput;