export function healtySort(herosArray) {
  const result = herosArray.sort((name1, name2) => (name1.health > name2.health ? -1 : 1));
  return result;
}
