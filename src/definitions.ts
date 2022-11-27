export type BingoNumber = {
  value: number
  marked: boolean
}

export type BingoRow = {
  letter: string
  numbers: BingoNumber[]
}

export type BingoMarkedCells = { [key: string]: boolean[] }

export enum GameMode {
  NONE,
  L,
  HORIZONTAL,
  VERTICAL,
  CORNERS,
  DIAGONAL,
  X,
  FULL,
}
