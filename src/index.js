module.exports = function check(str, bracketsConfig) {
  let length = str.length;

  function recursion (pos) {
    if (pos < 0) return pos;

    let elem1 = str[pos];
    let elem2 = '';

    for (i = 0; i < bracketsConfig.length; i++)
      if (bracketsConfig[i][0] == elem1) elem2 = bracketsConfig[i][1];

    if (elem2 == '') return -1;

    pos++;
    while (true) {
      if (pos == length) return -1;
      if (pos == -1) return -1;     
      if (str[pos] == elem2) return pos + 1
      else pos = recursion (pos);
    }
  }

  let i = 0;
  while (i < length) {
    i = recursion(i);
    if (i < 0) return false;
  }

  return true;
}
