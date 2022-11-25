import range from "lodash/range"
import { BingoMarkedCells, BingoRow } from "./definitions"

export const rows: BingoRow[] = [
  {
    letter: "B",
    numbers: range(1, 16).map((value) => ({ value, marked: false })),
  },
  {
    letter: "I",
    numbers: range(16, 31).map((value) => ({ value, marked: false })),
  },
  {
    letter: "N",
    numbers: range(31, 46).map((value) => ({ value, marked: false })),
  },
  {
    letter: "G",
    numbers: range(46, 61).map((value) => ({ value, marked: false })),
  },
  {
    letter: "O",
    numbers: range(61, 76).map((value) => ({ value, marked: false })),
  },
]

export const GameNoneCells: BingoMarkedCells[] = []

export const GameLCells: BingoMarkedCells[] = [
  {
    B: range(1, 6).map((_) => true),
    I: [false, false, false, false, true],
    N: [false, false, false, false, true],
    G: [false, false, false, false, true],
    O: [false, false, false, false, true],
  },
]

export const GameHorizontalCells: BingoMarkedCells[] = [
  {
    B: [false, false, false, false, true],
    I: [false, false, false, false, true],
    N: [false, false, false, false, true],
    G: [false, false, false, false, true],
    O: [false, false, false, false, true],
  },
  {
    B: [false, false, false, true, false],
    I: [false, false, false, true, false],
    N: [false, false, false, true, false],
    G: [false, false, false, true, false],
    O: [false, false, false, true, false],
  },
  {
    B: [false, false, true, false, false],
    I: [false, false, true, false, false],
    N: [false, false, true, false, false],
    G: [false, false, true, false, false],
    O: [false, false, true, false, false],
  },
  {
    B: [false, true, false, false, false],
    I: [false, true, false, false, false],
    N: [false, true, false, false, false],
    G: [false, true, false, false, false],
    O: [false, true, false, false, false],
  },
  {
    B: [true, false, false, false, false],
    I: [true, false, false, false, false],
    N: [true, false, false, false, false],
    G: [true, false, false, false, false],
    O: [true, false, false, false, false],
  },
]

export const GameVerticalCells: BingoMarkedCells[] = [
  {
    B: range(1, 6).map((_) => true),
    I: [false, false, false, false, false],
    N: [false, false, false, false, false],
    G: [false, false, false, false, false],
    O: [false, false, false, false, false],
  },
  {
    B: [false, false, false, false, false],
    I: range(1, 6).map((_) => true),
    N: [false, false, false, false, false],
    G: [false, false, false, false, false],
    O: [false, false, false, false, false],
  },
  {
    B: [false, false, false, false, false],
    I: [false, false, false, false, false],
    N: range(1, 6).map((_) => true),
    G: [false, false, false, false, false],
    O: [false, false, false, false, false],
  },
  {
    B: [false, false, false, false, false],
    I: [false, false, false, false, false],
    N: [false, false, false, false, false],
    G: range(1, 6).map((_) => true),
    O: [false, false, false, false, false],
  },
  {
    B: [false, false, false, false, false],
    I: [false, false, false, false, false],
    N: [false, false, false, false, false],
    G: [false, false, false, false, false],
    O: range(1, 6).map((_) => true),
  },
]

export const GameCornersCells: BingoMarkedCells[] = [
  {
    B: [true, false, false, false, true],
    I: [false, false, false, false, false],
    N: [false, false, false, false, false],
    G: [false, false, false, false, false],
    O: [true, false, false, false, true],
  },
]

export const GameFullCells: BingoMarkedCells[] = [
  {
    B: range(1, 6).map((_) => true),
    I: range(1, 6).map((_) => true),
    N: range(1, 6).map((_) => true),
    G: range(1, 6).map((_) => true),
    O: range(1, 6).map((_) => true),
  },
]

export const GameDiagonalCells: BingoMarkedCells[] = [
  {
    B: [true, false, false, false, false],
    I: [false, true, false, false, false],
    N: [false, false, true, false, false],
    G: [false, false, false, true, false],
    O: [false, false, false, false, true],
  },
  {
    B: [false, false, false, false, true],
    I: [false, false, false, true, false],
    N: [false, false, true, false, false],
    G: [false, true, false, false, false],
    O: [true, false, false, false, false],
  },
]

export const GameXCells: BingoMarkedCells[] = [
  {
    B: [true, false, false, false, true],
    I: [false, true, false, true, false],
    N: [false, false, true, false, false],
    G: [false, true, false, true, false],
    O: [true, false, false, false, true],
  },
]
