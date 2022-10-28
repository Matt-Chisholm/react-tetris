import React, { useState } from "react";

// Styled components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

// Custom Hooks
import { usePlayer } from "../Hooks/usePlayer";
import { useStage } from "../Hooks/useStage";

//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

export default function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("rerender");
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          <div>
            <Display text='Score' />
            <Display text='Rows' />
            <Display text='Level' />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}
