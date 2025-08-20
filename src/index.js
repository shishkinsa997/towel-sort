module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  let res = [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
      res = res.concat(matrix[i]);
    } else {
      res = res.concat(matrix[i].reverse());
    }
  }

  return res;
};
