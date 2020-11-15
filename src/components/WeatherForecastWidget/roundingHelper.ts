const roundingHelper = (num: number | undefined, dec?: number) => {
  if(num === undefined) {
    return;
  }
  let decimal = 1;
  if(dec) {
    for(let i = 0; i < dec; i++) {
      decimal *= 10;
    }
  }
  const rounded = Math.round((num + Number.EPSILON) * decimal);
  return rounded / decimal;
};

export default roundingHelper;
