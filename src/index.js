module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  return matrix.flatMap((x, i) => {
    if (i % 2 === 0) return x;
    return x.reverse();
  });
};
