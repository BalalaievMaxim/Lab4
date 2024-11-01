'use strict';

const ages = (persons) => {
  const result = {}

  for (const person in persons){
    const age = persons[person].died - persons[person].born;
    result[person] = age;
  }

  return result;
};

// uncomment for testing
// console.log(ages({
//     lenin: { born: 1870, died: 1924 },
//     mao: { born: 1893, died: 1976 },
//     gandhi: { born: 1869, died: 1948 },
//     hirohito: { born: 1901, died: 1989 },
//   }))

module.exports = { ages };
