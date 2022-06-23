export type Coordinates = Readonly<{
  x: number;
  y: number;
}>;

const computeOneDimensionDistance = (first: number, second: number): number => {
  return Math.abs(first - second);
};

const distance = (first: Coordinates, second: Coordinates): number => {
  return computeOneDimensionDistance(first.x, second.x) + computeOneDimensionDistance(first.y, second.y);
};

export default distance;
