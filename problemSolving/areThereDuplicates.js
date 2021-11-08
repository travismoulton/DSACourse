function areThereDuplicates(...args) {
  if (args.length < 2) return false;

  const freqCounter = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    freqCounter[arg] ? freqCounter[arg]++ : (freqCounter[arg] = 1);
    if (freqCounter[arg] > 1) return true;
  }

  return false;
}

areThereDuplicates("a", 1, 4);
