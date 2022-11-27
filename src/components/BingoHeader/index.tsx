export default function BingoHeader() {
  return (
    <header className="w-full flex flex-row justify-center items-center text-center bg-red-800 py-4">
      <img
      alt="logo"
        className="max-w-full"
        width={70}
        src={require("../../assets/logo.png")}
      />
      <h1 className="text-3xl font-black text-white">
        JMJ 2023 - Parroquia Nuestra Se&ntilde;ora de la Altagracia
      </h1>
    </header>
  )
}
