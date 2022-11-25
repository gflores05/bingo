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
  {letter: "B", numbers: range(1, 15).map(value => ({value, marked: false}))},
  {letter: "I", numbers: range(16, 30).map(value => ({value, marked: false}))},
  {letter: "N", numbers: range(31, 45).map(value => ({value, marked: false}))},
  {letter: "G", numbers: range(46, 60).map(value => ({value, marked: false}))},
  {letter: "O", numbers: range(61, 75).map(value => ({value, marked: false}))},
]