import React, { useContext, useEffect, useState } from 'react';
import GridLayout from "react-grid-layout";

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
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];

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

      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
      </GridLayout>
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