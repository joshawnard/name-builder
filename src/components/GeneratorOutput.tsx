import React, { useContext, useEffect, useMemo, useState } from 'react';
import GridLayout from "react-grid-layout";

import NameGeneratorContext from "../NameGeneratorContext";

const GeneratorOutput = () => {
  const {
    selectedBits,
    // settings: { showFormattedWords },
  } = useContext(NameGeneratorContext);

  const layout = useMemo(() => {
    return selectedBits.map((bit, index) => {
      return {
        i: bit,
        x: 0,
        y: index+1,
        w: bit.length,
        h: 1,
        // minW: 2,
        // maxW: 4,
      };
    });
  }, [selectedBits]);

  return (
    <>
      <h2>Bits!</h2>

      <GridLayout
        className="layout"
        cols={36}
        isResizable={false}
        layout={layout}
        margin={[0, 0]}
        rowHeight={50}
        width={800}
      >
        {
          selectedBits.map((bit) => {
            return (
              <div
                className="bit"
                key={bit}
              >
                {
                  bit.split("").map((char, index) => {
                    return (
                      <div
                        className="bit-char"
                        style={{ width: `${100 / bit.length}%` }}
                      >
                        {char}
                      </div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </GridLayout>
    </>
  );
};

export default GeneratorOutput;