import BingoHeader from "./components/BingoHeader"
import BingoViewer from "./views/BingoViewer"

function App() {
  return (
    <div className="w-full flex flex-col justify-start min-h-full bg-yellow-600">
      <BingoHeader />
      <div className="w-full flex-1 h-full flex justify-center items-stretch">
        <BingoViewer />
      </div>
    </div>
  )
}

export default App
