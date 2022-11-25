interface BingoTableLetterProps {
  letter: string
}

export default function BingoTableLetter({ letter }: BingoTableLetterProps) {
  return (
    <div className="w-20 h-20 flex justify-center items-center mr-6 text-center text-3xl border-4 border-red-600 bg-yellow-600 text-gray-600 rounded-full">
      {letter}
    </div>
  )
}
