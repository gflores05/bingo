import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { doc, getFirestore, onSnapshot } from 'firebase/firestore'
import BingoTable from '../../components/BingoTable'
import { rows as initRows } from '../../constants'
import BingoNewGame from '../BingoNewGame'
import firebaseConfig from '../../firebaseConfig'
import { GameMode } from '../../definitions'

const app = initializeApp(firebaseConfig)

export default function BingoViewer() {
  const [values, setValues] = useState({
    B: [false, false, false, false, false],
    I: [false, false, false, false, false],
    N: [false, false, false, false, false],
    G: [false, false, false, false, false],
    O: [false, false, false, false, false],
  } as { [key: string]: boolean[] })

  const [gameMode, setGameMode] = useState(GameMode.NONE)

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app)

  useEffect(() => {
    onSnapshot(doc(db, 'bingo', 'current'), (doc) => {
      if (!doc.exists()) {
        return
      }

      const data = doc.data()

      if (!data || !data['B'].length) {
        return
      }

      setGameMode(data['type'] as GameMode)
      setValues(data as { [key: string]: boolean[] })
    })
  }, [])

  return (
    <div className='w-full min-h-full flex flex-row items-stretch'>
      <BingoNewGame gameMode={gameMode} />
      <BingoTable values={values} rows={initRows} />
    </div>
  )
}
