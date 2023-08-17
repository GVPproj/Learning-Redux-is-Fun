
import './App.css'
import { CakeView } from './features/cake/cakeView'
import { IceCreamView } from './features/iceCream/IceCreamView'
import { UserView } from './features/user/UserView'


function App() {
  return (
    <>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  )
}

export default App
