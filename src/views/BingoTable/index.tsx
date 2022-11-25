import React, { useEffect, useState } from "react"
import BingoTableRow from "../../components/BingoTableRow"
import {rows as initRows} from '../../definitions'
import BingoNewGame from "../BingoNewGame"

export default function BingoTable() {
  const [rows, setRows] = useState(initRows)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if(!rows.length) {
      setRows(initRows)
    }
  }, [rows])

  return <div className="w-100 flex flex-col">
    <BingoNewGame show={show} onSelect={() => setRows([])}/>
    <div className="mb-12">
      <button className="mr-8 bg-blue-600 rounded-lg font-semibold text-white px-4 py-2" type="button" onClick={() => setRows([])}>Reiniciar</button>
    </div>
  {rows.map(row => <BingoTableRow key={row.letter} row={row}/>)}
  </div>
}