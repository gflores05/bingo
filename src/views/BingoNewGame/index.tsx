import { ReactElement, useEffect, useState } from 'react'
import range from 'lodash/range'
import {
  GameNoneCells,
  GameLCells,
  GameHorizontalCells,
  GameVerticalCells,
  GameCornersCells,
  GameFullCells,
  GameDiagonalCells,
  GameXCells,
} from '../../constants'
import { BingoMarkedCells, GameMode } from '../../definitions'

interface BingoNewGameProps {
  gameMode: GameMode
}

export default function BingoNewGame({ gameMode }: BingoNewGameProps) {
  const [marked, setMarked] = useState(GameNoneCells)

  useEffect(() => {
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
  }, [gameMode])

  return (
    <div className='w-full min-h-full flex flex-col mb-12 pl-8 bg-green-800'>
      <div className='w-full flex flex-row justify-center py-4'>
        <GameModeTitle gameMode={gameMode} />
      </div>
      <div>
        <Game variants={marked} />
      </div>
    </div>
  )
}

interface TitleProps {
  children: string
}

const Title = ({ children }: TitleProps) => {
  return (
    <h2 className='text-2xl text-white font-bold text-center mb-4'>
      {children}
    </h2>
  )
}

interface GameModeTitleProps {
  gameMode: GameMode
}

const GameModeTitle = ({ gameMode }: GameModeTitleProps) => {
  switch (gameMode) {
    case GameMode.L:
      return <Title>Jugar en L</Title>
    case GameMode.HORIZONTAL:
      return <Title>Jugar en Horizontal</Title>
    case GameMode.VERTICAL:
      return <Title>Jugar en Vertical</Title>
    case GameMode.CORNERS:
      return <Title>Jugar en Cuatro esquinas</Title>
    case GameMode.DIAGONAL:
      return <Title>Jugar en Diagonal</Title>
    case GameMode.X:
      return <Title>Jugar en X</Title>
    case GameMode.FULL:
      return <Title>Jugar en Completa</Title>
    default:
      return <Title>Seleccionar Modo de Juego</Title>
  }
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
  return <div className='w-100 flex flex-row'>{children}</div>
}

interface TableCellProps {
  children: ReactElement | string
  marked: boolean
}
const TableCell = ({ children, marked }: TableCellProps) => {
  return (
    <div
      className={`w-8 h-8 rounded-full justify-center items-center flex border-4 mr-2 mb-2 ${
        marked ? 'bg-green-600' : ''
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
    <div className='w-8 h-8 rounded-full justify-center items-center bg-red-800 text-white border-yellow-400 flex border-4 mr-2 mb-2'>
      {children}
    </div>
  )
}

interface GameVariantProps {
  marked: BingoMarkedCells
}

export const GameVariant = ({ marked }: GameVariantProps) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='mb-6 border-2 p-4 border-gray-600 rounded-xl bg-white'>
        <div className='w-full flex flex-row border-b-2 boder-gray-600 mb-2'>
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
    <div className='w-full grid grid-cols-2'>
      {variants.map((marked) => (
        <GameVariant marked={marked} />
      ))}
    </div>
  )
}
