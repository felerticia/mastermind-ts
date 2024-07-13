import { color_options, tries } from "../constants";
import { GameState } from "../reducer/types";
import { getHints, initGameState } from "./helper";

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

describe("getHints", () => {
  it("should return 4 blacks when secret and rows are the same", () => {
    const secret = ["red", "blue", "green", "green"];
    const row = ["red", "blue", "green", "green"];
    const result = ["black", "black", "black", "black"];
    expect(getHints(secret, row)).toEqual(result);
  });

  it("should return 4 whites when secret and rows are the same but not in correct order", () => {
    const secret = ["red", "blue", "green", "green"];
    const row = ["green", "green", "blue", "red"];
    const result = ["white", "white", "white", "white"];
    expect(getHints(secret, row)).toEqual(result);
  });

  it("should return one black and one white", () => {
    const secret = ["red", "blue", "green", "green"];
    const row = ["red", "orange", "blue", "orange"];
    const result = ["black", "white", "", ""];
    expect(getHints(secret, row)).toEqual(result);
  });

  it("should return two blacks and two whites for a mix of correct and incorrect positions", () => {
    const secret = ["red", "blue", "green", "green"];
    const row = ["green", "blue", "green", "red"];
    const result = ["black", "black", "white", "white"];
    expect(getHints(secret, row)).toEqual(result);
  });

  it("should return four whites when all colors are correct but in different positions", () => {
    const secret = ["red", "blue", "green", "yellow"];
    const row = ["blue", "yellow", "red", "green"];
    const result = ["white", "white", "white", "white"];
    expect(getHints(secret, row)).toEqual(result);
  });

  it("should return an empty array when no colors match", () => {
    const secret = ["red", "blue", "green", "yellow"];
    const row = ["purple", "orange", "pink", "brown"];
    const result = ["", "", "", ""];
    expect(getHints(secret, row)).toEqual(result);
  });

  it("should handle repeated colors correctly", () => {
    const secret = ["red", "blue", "blue", "green"];
    const row = ["blue", "blue", "red", "green"];
    const result = ["black", "black", "white", "white"];
    expect(getHints(secret, row)).toEqual(result);
  });
});
