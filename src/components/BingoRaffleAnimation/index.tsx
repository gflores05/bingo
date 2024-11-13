export default function BingoRaffleAnimation() {
  return <div className="absolute flex w-full h-full content-center justify-center flex-wrap">
    <audio autoPlay>
      <source src={require('../../assets/spinning.wav')} type="audio/wav" />
    </audio>
    <div className="rounded-full overflow-hidden">
    <img src={require('../../assets/raffle.gif')} alt="tombola"/>
    </div>
  </div>
}