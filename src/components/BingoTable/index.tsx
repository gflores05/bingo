import { BingoRow } from '../../definitions'
import BingoTableRow from '../BingoTableRow'

interface BingoTableProps {
  rows: BingoRow[]
  values: { [key: string]: boolean[] }
}

export default function BingoTable({ rows, values }: BingoTableProps) {
  return (
    <div className='w-full flex flex-col p-8'>
      <h2 className='text-4xl text-white font-bold text-center mb-8'>
        ¡Comprueba tus n&uacute;meros!
      </h2>
      {rows.map((row) => (
        <BingoTableRow key={row.letter} values={values[row.letter]} row={row} />
      ))}
    </div>
  )
}
