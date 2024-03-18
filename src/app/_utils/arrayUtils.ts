//item should be a primitive value
export function addOrRemoveNumberFromArray(arr: Array<any>, item: any) : Array<any> {
  const index = arr.indexOf(item);

  if (index === -1) {
      arr.push(item);
  } else {
      arr.splice(index, 1);
  }
  return arr
}