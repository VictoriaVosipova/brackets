module.exports = function check(str, bracketsConfig) {
  let bracketsConfigNew = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    console.log(bracketsConfig[i]);
    bracketsConfigNew.push(bracketsConfig[i].join(''));

  }
  console.log(bracketsConfigNew);

  for (let j = 0; j < 100; j++) {
    for (let i = 0; i < bracketsConfigNew.length; i++) {
      if (str.includes(bracketsConfigNew[i])) {
        str = str.replace(bracketsConfigNew[i], '');
      }
    }
  }
  console.log(str.length);
  console.log(str);
  return (str.length === 0);

}


// your solution