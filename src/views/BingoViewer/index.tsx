import { useEffect, useState } from "react"
import BingoTable from "../../components/BingoTable"
import { rows as initRows } from "../../constants"
import BingoNewGame from "../BingoNewGame"

export default function BingoViewer() {
  const [rows, setRows] = useState(initRows)

  useEffect(() => {
    if (!rows.length) {
      setRows(initRows)
    }
  }, [rows])

  return (
    <div className="w-full min-h-full flex flex-row items-stretch">
      <BingoNewGame onSelect={() => setRows([])} />
      <BingoTable rows={rows} />
    </div>
  )
}
