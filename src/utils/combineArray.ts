export function CombineArrayTwoByTwo<T>(list: Array<T>):T[][] {
  let res = [];
  for (let i = 0; i <= list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (i < j) {
        res.push([list[i], list[j]]);
      }
    }
  }
  return res;
}

