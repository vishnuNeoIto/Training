function sumInput () {
  let sum = 0;
  let ar = [];
  while (true) {
    let a = +prompt ('Enter an integer');

    if (a === '' || a=== null || isNaN(a)) {
      break;
    }
    ar.push (a);
  }
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

alert (sumInput ());
