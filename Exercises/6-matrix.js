'use strict';

const max = (matrix) => {
  let max;

  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      const elem = matrix[i][j];
      if (elem > max || (i === j && i === 0)) max = elem;
    }
  }
  
  return max;
};


module.exports = { max };
