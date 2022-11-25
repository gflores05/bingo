import { useEffect, useState } from "react"
import BingoTableRow from "../../components/BingoTableRow"
import { rows as initRows } from "../../definitions"
import BingoNewGame from "../BingoNewGame"

export default function BingoTable() {
  const [rows, setRows] = useState(initRows)

  useEffect(() => {
    if (!rows.length) {
      setRows(initRows)
    }
  }, [rows])

  return (
    <div className="w-100 flex flex-col">
      <BingoNewGame onSelect={() => setRows([])} />
      {rows.map((row) => (
        <BingoTableRow key={row.letter} row={row} />
      ))}
    </div>
  )
}
