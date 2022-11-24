import React from "react"

interface BingoTableLetterProps{
  letter: string
}

export default function BingoTableLetter({letter}: BingoTableLetterProps) {
  return <div className="text-center text-2xl rounded-full">{letter}</div>
}