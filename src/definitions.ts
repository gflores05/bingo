import range from 'lodash/range'

export type BingoNumber = {
  value: number,
  marked: boolean
}

export type BingoRow = {
  letter: string,
  numbers: BingoNumber[]
}

export const rows: BingoRow[] = [
  {letter: "B", numbers: range(1, 16).map(value => ({value, marked: false}))},
  {letter: "I", numbers: range(16, 31).map(value => ({value, marked: false}))},
  {letter: "N", numbers: range(31, 46).map(value => ({value, marked: false}))},
  {letter: "G", numbers: range(46, 61).map(value => ({value, marked: false}))},
  {letter: "O", numbers: range(61, 76).map(value => ({value, marked: false}))},
]