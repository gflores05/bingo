import BingoTable from "./views/BingoTable"

function App() {
  return (
    <div className="w-100">
      <header className="w-100 text-center mb-12">
        <h1 className="text-4xl">Bingo!</h1>
        <h2 className="text-3xl">
          JMJ 2023 - Parroquia Nuestra Se&ntilde;ora de la Altagracia
        </h2>
      </header>
      <div className="w-100 flex justify-center items-center">
        <BingoTable />
      </div>
    </div>
  )
}

export default App
