const { expect } = require(`chai`);

const soundsliceUrlToScorehash = require(`../index.js`);

describe(`soundslice-url-to-scorehash`, () => {
  it(`should be a function`, () => {
    expect(soundsliceUrlToScorehash).to.be.a(`function`);
  });

  it(`should return a scorehash for a basic URL`, () => {
    const input = `https://www.soundslice.com/slices/C1FVc/`;
    const expectedOutput = `C1FVc`;

    expect(soundsliceUrlToScorehash(input)).to.equal(expectedOutput);
  });

  it(`should handle a missing trailing slash`, () => {
    const input = `https://www.soundslice.com/slices/C1FVc`;
    const expectedOutput = `C1FVc`;

    expect(soundsliceUrlToScorehash(input)).to.equal(expectedOutput);
  });

  it(`should handle an extra trailing slash`, () => {
    const input = `https://www.soundslice.com/slices/C1FVc//`;
    const expectedOutput = `C1FVc`;

    expect(soundsliceUrlToScorehash(input)).to.equal(expectedOutput);
  });

  it(`should handle an "edit" URL`, () => {
    const input = `https://www.soundslice.com/slices/C1FVc/edit/`;
    const expectedOutput = `C1FVc`;

    expect(soundsliceUrlToScorehash(input)).to.equal(expectedOutput);
  });

  it(`should handle an "edit" URL with a missing trailing slash`, () => {
    const input = `https://www.soundslice.com/slices/C1FVc/edit`;
    const expectedOutput = `C1FVc`;

    expect(soundsliceUrlToScorehash(input)).to.equal(expectedOutput);
  });

  it(`should handle an "edit" URL with an extra trailing slash`, () => {
    const input = `https://www.soundslice.com/slices/C1FVc/edit//`;
    const expectedOutput = `C1FVc`;

    expect(soundsliceUrlToScorehash(input)).to.equal(expectedOutput);
  });

  it(`should handle a URL with a query string`, () => {
    const input = `https://www.soundslice.com/slices/C1FVc/?from=search`;
    const expectedOutput = `C1FVc`;

    expect(soundsliceUrlToScorehash(input)).to.equal(expectedOutput);
  });

  it(`should handle an http (not https) URL`, () => {
    const input = `http://www.soundslice.com/slices/C1FVc/`;
    const expectedOutput = `C1FVc`;

    expect(soundsliceUrlToScorehash(input)).to.equal(expectedOutput);
  });

  it(`should handle a URL with no "www"`, () => {
    const input = `https://soundslice.com/slices/C1FVc/`;
    const expectedOutput = `C1FVc`;

    expect(soundsliceUrlToScorehash(input)).to.equal(expectedOutput);
  });

  it(`should handle an http (not https) URL with no "www"`, () => {
    const input = `http://soundslice.com/slices/C1FVc/`;
    const expectedOutput = `C1FVc`;

    expect(soundsliceUrlToScorehash(input)).to.equal(expectedOutput);
  });

  it(`should handle a URL starting with "www"`, () => {
    const input = `www.soundslice.com/slices/C1FVc/`;
    const expectedOutput = `C1FVc`;

    expect(soundsliceUrlToScorehash(input)).to.equal(expectedOutput);
  });

  it(`should handle a URL starting with "soundslice.com"`, () => {
    const input = `soundslice.com/slices/C1FVc/`;
    const expectedOutput = `C1FVc`;

    expect(soundsliceUrlToScorehash(input)).to.equal(expectedOutput);
  });
});
