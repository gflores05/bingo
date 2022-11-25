import React, { useState } from "react"
import { BingoNumber } from "../../definitions"

interface BingoNumberProps {
  number: BingoNumber
}

export default function BingoNumberCell({number}: BingoNumberProps) {
  const [marked, setMarked] = useState(number.marked)

  function toggle(evt:  React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setMarked(!marked)
  }

  return <div onClick={toggle} className={`w-20 h-20 flex justify-center items-center cursor-pointer mr-6 text-center text-3xl border-4 border-yellow-600 text-gray-600 rounded-full ${marked ? 'bg-green-600' : 'bg-white'}`}>{number.value}</div>
}