module.exports = function soundsliceUrlToScorehash(soundsliceUrl) {
  const scorehash = soundsliceUrl
    .replace(`https://`, ``)
    .replace(`http://`, ``)
    .replace(`www.`, ``)
    .replace(`soundslice.com/slices/`, ``)
    .replace(`/edit`, ``)
    .replace(/\//g, ``);

  if (scorehash.includes(`?`)) {
    return scorehash.split(`?`)[0];
  }

  return scorehash;
};
