import { color_options, tries } from "../constants";
import { GameState } from "../reducer/types";

export const initGameState = () => ({
  currentRow: 0,
  currentColor: color_options[0],
  rows: new Array(tries).fill(0).map((_) => ["", "", "", ""]),
  hints: new Array(tries).fill(0).map((_) => ["", "", "", ""]),
  secret: new Array(4)
    .fill(0)
    .map(
      (_) => color_options[Math.floor(color_options.length * Math.random())]
    ),
  gameState: GameState.Ongoing,
});

export const getHints = (secret: string[], row: string[]) => {
  const secretCopy = [...secret];
  const rowCopy = [...row];
  const hints: string[] = [];

  for (let i = 3; i >= 0; i--) {
    if (secretCopy[i] === rowCopy[i]) {
      hints.push("black");
      secretCopy.splice(i, 1);
      rowCopy.splice(i, 1);
    }
  }

  for (let i = secretCopy.length; i >= 0; i--) {
    const j = rowCopy.indexOf(secretCopy[i]);
    if (j !== -1) {
      hints.push("white");
      secretCopy.splice(i, 1);
      rowCopy.splice(j, 1);
    }
  }

  return new Array(4).fill("").map((_, i) => hints[i] || "");
};
