import { BingoRow } from '../../definitions'
import BingoTableLetter from '../BingoLetter'
import BingoNumberCell from '../BingoNumberCell'

interface BingoTableRowProps {
  row: BingoRow
  values: boolean[]
}

export default function BingoTableRow({ row, values }: BingoTableRowProps) {
  return (
    <div className='flex flex-row mb-12'>
      <BingoTableLetter letter={row.letter} />
      {row.numbers.map((number, index) => (
        <BingoNumberCell
          key={number.value}
          marked={values[index]}
          number={number}
        />
      ))}
    </div>
  )
}
