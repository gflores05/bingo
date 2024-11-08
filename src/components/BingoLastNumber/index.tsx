interface BingoLastNumberProps {
  lastNumber: string
}

export default function BingoLastNumber({ lastNumber }: BingoLastNumberProps) {
  return (
    <div className="w-full text-center font-bold text-5xl text-green-800 pt-12">
      Ultimo N&uacute;mero: {lastNumber}
    </div>
  )
}
