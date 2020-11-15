const roundingHelper = (num: number | undefined, dec?: number) => {
  if(num === undefined) {
    return;
  }
  const rounded = Math.round((num + Number.EPSILON) * 100);
  if(dec) {
    return rounded / dec;
  }
  return rounded;
};

export default roundingHelper;
