import React from "react";
import Cell from "./Cell";

export default function Stage({ stage }) {
  // Map over the stage array and return a row of cells
  return (
    <div>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </div>
  );
}
