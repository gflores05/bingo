import { ReactElement, useState } from "react"
import range from "lodash/range"
import {
  GameNoneCells,
  GameLCells,
  GameHorizontalCells,
  GameVerticalCells,
  GameCornersCells,
  GameFullCells,
  GameDiagonalCells,
  GameXCells,
} from "../../constants"
import { BingoMarkedCells, GameMode } from "../../definitions"

interface BingoNewGameProps {
  onSelect: () => void
}

export default function BingoNewGame({ onSelect }: BingoNewGameProps) {
  const [marked, setMarked] = useState(GameNoneCells)

  function selectGame(gameMode: GameMode) {
    switch (gameMode) {
      case GameMode.L:
        setMarked(GameLCells)
        break
      case GameMode.HORIZONTAL:
        setMarked(GameHorizontalCells)
        break
      case GameMode.VERTICAL:
        setMarked(GameVerticalCells)
        break
      case GameMode.CORNERS:
        setMarked(GameCornersCells)
        break
      case GameMode.DIAGONAL:
        setMarked(GameDiagonalCells)
        break
      case GameMode.X:
        setMarked(GameXCells)
        break
      case GameMode.FULL:
        setMarked(GameFullCells)
        break
      default:
        setMarked(GameNoneCells)
        break
    }
    onSelect()
  }

  return (
    <div className="w-full min-h-full flex flex-col mb-12 pl-8 bg-green-800">
      <div className="w-full flex flex-row justify-center py-4">
        <SelectGameMode onSelect={selectGame} />
      </div>
      <div>
        <Game variants={marked} />
      </div>
    </div>
  )
}

interface SelectGameModeProps {
  onSelect: (gameMode: GameMode) => void
}

const SelectGameMode = ({ onSelect }: SelectGameModeProps) => {
  return (
    <select
      className="bg-white py-1 px-4 rounded-md"
      onChange={(evt) => onSelect(parseInt(evt.target.value))}
    >
      <option value={GameMode.NONE}>Seleccionar Modo de Juego</option>
      <option value={GameMode.L}>Jugar en L</option>
      <option value={GameMode.HORIZONTAL}>Jugar en Horizontal</option>
      <option value={GameMode.VERTICAL}>Jugar en Vertical</option>
      <option value={GameMode.CORNERS}>Jugar en Cuatro esquinas</option>
      <option value={GameMode.DIAGONAL}>Jugar en Diagonal</option>
      <option value={GameMode.X}>Jugar en X</option>
      <option value={GameMode.FULL}>Jugar en Completa</option>
    </select>
  )
}

const cells: { [key: string]: number[] } = {
  B: range(1, 6),
  I: range(1, 6),
  N: range(1, 6),
  G: range(1, 6),
  O: range(1, 6),
}

interface TableRowProps {
  children: ReactElement[]
}
const TableRow = ({ children }: TableRowProps) => {
  return <div className="w-100 flex flex-row">{children}</div>
}

interface TableCellProps {
  children: ReactElement | string
  marked: boolean
}
const TableCell = ({ children, marked }: TableCellProps) => {
  return (
    <div
      className={`w-8 h-8 rounded-full justify-center items-center flex border-4 mr-2 mb-2 ${
        marked ? "bg-green-600" : ""
      }`}
    >
      {children}
    </div>
  )
}
interface GameLetterCellProps {
  children: string
}

const GameLetterCell = ({ children }: GameLetterCellProps) => {
  return (
    <div className="w-8 h-8 rounded-full justify-center items-center bg-red-800 text-white border-yellow-400 flex border-4 mr-2 mb-2">
      {children}
    </div>
  )
}

interface GameVariantProps {
  marked: BingoMarkedCells
}

export const GameVariant = ({ marked }: GameVariantProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mb-6 border-2 p-4 border-gray-600 rounded-xl bg-white">
        <div className="w-full flex flex-row border-b-2 boder-gray-600 mb-2">
          <GameLetterCell>B</GameLetterCell>
          <GameLetterCell>I</GameLetterCell>
          <GameLetterCell>N</GameLetterCell>
          <GameLetterCell>G</GameLetterCell>
          <GameLetterCell>0</GameLetterCell>
        </div>
        {range(1, 6).map((row, i) => (
          <TableRow key={row}>
            {Object.keys(cells).map((letter, index) => (
              <TableCell key={index} marked={marked[letter][i]}>
                X
              </TableCell>
            ))}
          </TableRow>
        ))}
      </div>
    </div>
  )
}

interface GameProps {
  variants: BingoMarkedCells[]
}
const Game = ({ variants }: GameProps) => {
  return (
    <div className="w-full grid grid-cols-2">
      {variants.map((marked) => (
        <GameVariant marked={marked} />
      ))}
    </div>
  )
}
