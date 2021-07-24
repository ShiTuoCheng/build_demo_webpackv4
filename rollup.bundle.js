'use strict';

const bar = () => {
  const x = 1;
  console.log(x); // treeshaking

  return x; // tree-shaking
};

bar();
