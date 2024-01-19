import { writable } from "svelte/store";
import { BettingGame } from "./game.js";

export const game = writable(new BettingGame("init"));
