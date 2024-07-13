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
