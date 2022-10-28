export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// Multidimensional array of 20 rows and 12 columns
export const createStage = () => {
  return Array.from(Array(STAGE_HEIGHT), () => {
    return new Array(STAGE_WIDTH).fill([0, "clear"]);
  });
};
