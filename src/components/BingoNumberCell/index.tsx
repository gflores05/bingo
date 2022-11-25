import { useState } from "react"
import { BingoNumber } from "../../definitions"

interface BingoNumberProps {
  number: BingoNumber
}

export default function BingoNumberCell({ number }: BingoNumberProps) {
  const [marked, setMarked] = useState(number.marked)

  function toggle() {
    setMarked(!marked)
  }

  return (
    <div
      onClick={toggle}
      className={`w-16 h-16 flex justify-center items-center cursor-pointer mr-4 text-center text-2xl font-bold border-4 border-gray-600 rounded-full ${
        marked ? "bg-green-600 text-white" : "bg-white text-gray-600"
      }`}
    >
      {number.value}
    </div>
  )
}
