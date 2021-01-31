module.exports = function soundsliceUrlToScorehash(soundsliceUrl) {
  const scorehash = soundsliceUrl.split(`slices/`)[1];

  if (scorehash.includes(`/`)) {
    return scorehash.split(`/`)[0];
  }

  return scorehash;
};
