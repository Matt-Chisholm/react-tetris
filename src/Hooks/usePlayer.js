import { useState } from "react";
import { randomTetromino } from "../tetrominos";

// UsePlayer Custom Hook that sets the player state and updates the player state
export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = () => {
    setPlayer({
      pos: { x: 0, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  };

  return [player, resetPlayer, updatePlayerPos];
};
