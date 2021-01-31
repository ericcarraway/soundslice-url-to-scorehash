const { expect } = require(`chai`);

const soundsliceUrlToScorehash = require(`../index.js`);

describe(`soundslice-url-to-scorehash`, () => {
  it(`should be a function`, () => {
    expect(soundsliceUrlToScorehash).to.be.a(`function`);
  });
});
