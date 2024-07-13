import { color_options, tries } from "../constants";
import { GameState } from "../reducer/types";
import { initGameState } from "./helper";

describe("initGameState", () => {
  it("should initialize currentRow to 0", () => {
    const state = initGameState();
    expect(state.currentRow).toBe(0);
  });

  it("should initialize currentColor to the first color option", () => {
    const state = initGameState();
    expect(state.currentColor).toBe(color_options[0]);
  });

  it("should initialize rows to an array of empty strings", () => {
    const state = initGameState();
    expect(state.rows.length).toBe(tries);
    state.rows.forEach((row) => {
      expect(row).toEqual(["", "", "", ""]);
    });
  });

  it("should initialize hints to an array of empty strings", () => {
    const state = initGameState();
    expect(state.hints.length).toBe(tries);
    state.hints.forEach((hint) => {
      expect(hint).toEqual(["", "", "", ""]);
    });
  });

  it("should initialize secret to an array of four colors from color_options", () => {
    const state = initGameState();
    expect(state.secret.length).toBe(4);
    state.secret.forEach((color) => {
      expect(color_options).toContain(color);
    });
  });

  it("should initialize gameState to GameState.Ongoing", () => {
    const state = initGameState();
    expect(state.gameState).toBe(GameState.Ongoing);
  });

  it("should create a new secret each time it is called", () => {
    const state1 = initGameState();
    const state2 = initGameState();
    expect(state1.secret).not.toEqual(state2.secret);
  });
});
