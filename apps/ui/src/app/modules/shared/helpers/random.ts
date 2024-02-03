export const random = <T>(list: T[]): T => {
  return list[randomIndex(list.length)];
};

export const randomIndex = (length: number): number => {
  return Math.floor(Math.random() * length);
};
