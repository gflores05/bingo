interface BingoTableLetterProps {
  letter: string
}

export default function BingoTableLetter({ letter }: BingoTableLetterProps) {
  return (
    <div className="w-16 h-16 flex justify-center items-center mr-4 text-center text-2xl border-4 border-yellow-400 bg-red-800 text-white font-bold rounded-full">
      {letter}
    </div>
  )
}
