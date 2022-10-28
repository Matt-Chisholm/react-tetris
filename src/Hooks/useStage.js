import { useState } from "react";
import { createStage } from "../gameHelpers";

// Custom Hook that sets the stage state and updates the stage state
export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
};
