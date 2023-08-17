import { CakeView } from './features/cake/CakeView'
import { IceCreamView } from './features/iceCream/IceCreamView'
import { UserView } from './features/user/UserView'

function App() {
  return (
    <>
      <h1>TypeScript Cake Shop</h1>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  )
}

export default App
