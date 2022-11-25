import React from "react"
import BingoTableRow from "../../components/BingoTableRow"
import {rows} from '../../definitions'

export default function BingoTable() {
  return <div className="w-100 flex flex-col">
  {rows.map(row => <BingoTableRow key={row.letter} row={row}/>)}
  </div>
}