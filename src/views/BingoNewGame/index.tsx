import React, { ReactElement, useState } from "react"
import range from 'lodash/range'

interface BingoNewGameProps {
  show: boolean
  onSelect: () => void
}

enum GameMode {
  NONE,
  L,
  HORIZONTAL,
  VERTICAL,
  CORNERS,
  FULL,
}

export default function BingoNewGame({show, onSelect}: BingoNewGameProps) {
  const [game, setGame] = useState(GameMode.NONE)

  if (!show) {
    return <></>
  }

  return <div className="w-100 h-100 bg-white flex flex-col mb-12">
<div className="flex flex-row mb-12">
  <button className="mr-8 bg-blue-600 rounded-lg font-semibold text-white px-4 py-2" onClick={() => setGame(GameMode.L)}>Jugar en L</button>
  <button className="mr-8 bg-blue-600 rounded-lg font-semibold text-white px-4 py-2" onClick={() => setGame(GameMode.HORIZONTAL)}>Jugar en Horizontal</button>
  <button className="mr-8 bg-blue-600 rounded-lg font-semibold text-white px-4 py-2" onClick={() => setGame(GameMode.VERTICAL)}>Jugar en Vertical</button>
  <button className="mr-8 bg-blue-600 rounded-lg font-semibold text-white px-4 py-2" onClick={() => setGame(GameMode.CORNERS)}>Jugar en Cuatro esquinas</button>
  <button className="mr-8 bg-blue-600 rounded-lg font-semibold text-white px-4 py-2" onClick={() => setGame(GameMode.FULL)}>Jugar en Completa</button>
</div>
<div>
  <SwGame game={game}/>
</div>
  </div>
}

const GameLCells: {[key: string]: boolean[]} = {
  B: range(1, 6).map(e => true),
  I: [false, false, false, false, true],
  N: [false, false, false, false, true],
  G: [false, false, false, false, true],
  O: [false, false, false, false, true],
}

const GameHorizontalCells: {[key: string]: boolean[]} = {
  B: [false, false, false, false, true],
  I: [false, false, false, false, true],
  N: [false, false, false, false, true],
  G: [false, false, false, false, true],
  O: [false, false, false, false, true],
}

const GameVerticalCells: {[key: string]: boolean[]} = {
  B: range(1, 6).map(e => true),
  I: [false, false, false, false, false],
  N: [false, false, false, false, false],
  G: [false, false, false, false, false],
  O: [false, false, false, false, false],
}

const GameCornersCells: {[key: string]: boolean[]} = {
  B: [true, false, false, false, true],
  I: [false, false, false, false, false],
  N: [false, false, false, false, false],
  G: [false, false, false, false, false],
  O: [true, false, false, false, true],
}

const GameFullCells: {[key: string]: boolean[]} = {
  B: range(1, 6).map(e => true),
  I: range(1, 6).map(e => true),
  N: range(1, 6).map(e => true),
  G: range(1, 6).map(e => true),
  O: range(1, 6).map(e => true),
}


interface SwGameProps {
  game: GameMode
}
const SwGame = ({game}: SwGameProps) => {
  switch (game) {
  case GameMode.L:
    return <Game marked={GameLCells}/>
case GameMode.HORIZONTAL:
  return <Game marked={GameHorizontalCells}/>
  case GameMode.VERTICAL:
    return <Game marked={GameVerticalCells}/>
    case GameMode.CORNERS:
      return <Game marked={GameCornersCells}/>
      case GameMode.FULL:
        return <Game marked={GameFullCells}/>
  default:
    return <></>
}}

const cells: {[key: string]: number[]} = {
  B: range(1, 6),
  I: range(1, 6),
  N: range(1, 6),
  G: range(1, 6),
  O: range(1, 6),
}

interface TableRowProps {
  children: ReactElement[]
}
const TableRow = ({children}: TableRowProps) =>{
  return <div className="w-100 flex flex-row">{children}</div>
}

interface TableCellProps {
  children: ReactElement | string
  marked: boolean
}
const TableCell = ({children, marked}: TableCellProps) =>{
  return <div className={`w-10 h-10 rounded-full justify-center items-center flex border-4 ${marked ? "bg-green-600" : ""}`}>{children}</div>
}

interface GameProps {
  marked: {[key: string]: boolean[]}
}
const Game = ({marked}: GameProps) => {
  return <div className="w-full">
    <div className="w-100 flex flex-row">
      <div className="w-10 h-10 rounded-full justify-center items-center bg-yellow-600 flex border-4">B</div>
      <div className="w-10 h-10 rounded-full justify-center items-center bg-yellow-600 flex border-4">I</div>
      <div className="w-10 h-10 rounded-full justify-center items-center bg-yellow-600 flex border-4">N</div>
      <div className="w-10 h-10 rounded-full justify-center items-center bg-yellow-600 flex border-4">G</div>
      <div className="w-10 h-10 rounded-full justify-center items-center bg-yellow-600 flex border-4">0</div>
    </div>
    {
      range(1, 6).map((row, i) =><TableRow key={row}>
        {Object.keys(cells).map((letter, index) => <TableCell key={index} marked={marked[letter][i]}>X</TableCell>)}
      </TableRow>)
    }
  </div>
}
