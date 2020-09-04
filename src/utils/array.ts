// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const chunkArray = (arr: any, size: number) => {
  const myArray = [];

  for (let index = 0; index < arr.length; index += size) {
    myArray.push(arr.slice(index, index + size));
  }

  return myArray;
};
