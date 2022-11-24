import React from 'react'
import BingoTableLetter from '../BingoLetter'

interface BingoRowProps {
  letter: string
  start: number
  end: number
}

export default function BingoRow({letter, start, end}: BingoRowProps) {
return (
  <div className="flex flex-row">
  <BingoTableLetter letter="B"/>
  </div>
  )
}
  