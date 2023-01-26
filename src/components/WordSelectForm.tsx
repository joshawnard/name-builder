import React, { ChangeEvent, useContext } from 'react';
import NameGeneratorContext from "../NameGeneratorContext";

const WordSelectForm = (): JSX.Element => {
  const { prefixes, suffixes, selectedBits, setSelectedBits } = useContext(NameGeneratorContext);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>, bit: string) => {
    const { currentTarget: { checked } } = e;

    if (checked) {
      setSelectedBits([...selectedBits, bit]);
    } else {
      const index = selectedBits.indexOf(bit, 0);

      if (index > -1) {
         selectedBits.splice(index, 1);
      }

      setSelectedBits([...selectedBits]);
    }
  };

  return (
    <div>
      <div>
        <h3>
          Prefixes
        </h3>

        {
          prefixes.sort().map((prefix) => {
            return (
              <div>
                <label>
                  <input
                    checked={selectedBits.includes(prefix)}
                    name={prefix}
                    onChange={(e) => handleCheck(e, prefix)}
                    type="checkbox"
                  />

                  {prefix}
                </label>
              </div>
            );
          })
        }

        <h3>
          Suffixes
        </h3>

        {
          suffixes.sort().map((suffix) => {
            return (
              <div>
                <label>
                  <input
                    checked={selectedBits.includes(suffix)}
                    name={suffix}
                    onChange={(e) => handleCheck(e, suffix)}
                    type="checkbox"
                  />

                  {suffix}
                </label>
              </div>
            );
          })
        }

        {/*{*/}
        {/*  engWords.map((engWordCategory) => {*/}
        {/*    return Object.entries(engWordCategory).map((foo) => {*/}
        {/*      const [category, wordObjArr] = foo;*/}

        {/*      return (*/}
        {/*        <div key={category}>*/}
        {/*          <h3>{category}</h3>*/}

        {/*          {*/}
        {/*            wordObjArr.map((word, index) => {*/}
        {/*              if (word) {*/}
        {/*                return (*/}
        {/*                  <div key={`word-${index}`}>*/}
        {/*                    <label>*/}
        {/*                      <input*/}
        {/*                        checked={flattenedSelectedWordList.includes(word)}*/}
        {/*                        name={word}*/}
        {/*                        onChange={(e) => handleCheck(e, category, word)}*/}
        {/*                        type="checkbox"*/}
        {/*                      />*/}

        {/*                      {word}*/}
        {/*                    </label>*/}
        {/*                  </div>*/}
        {/*                );*/}
        {/*              }*/}

        {/*              return null;*/}
        {/*            })*/}
        {/*          }*/}
        {/*        </div>*/}
        {/*      );*/}
        {/*    })*/}
        {/*  })*/}
        {/*}*/}
      </div>
    </div>
  );
};

export default WordSelectForm;