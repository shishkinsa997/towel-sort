module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  matrix.map((x, i) => {
    if (i % 2 === 0) return x;
    return x.reverse();
  });

  return matrix.flat();
};
