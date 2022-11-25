import { BingoRow } from "../../definitions"
import BingoTableLetter from "../BingoLetter"
import BingoNumberCell from "../BingoNumberCell"

interface BingoTableRowProps {
  row: BingoRow
}

export default function BingoTableRow({ row }: BingoTableRowProps) {
  return (
    <div className="flex flex-row mb-12">
      <BingoTableLetter letter={row.letter} />
      {row.numbers.map((number) => (
        <BingoNumberCell key={number.value} number={number} />
      ))}
    </div>
  )
}
