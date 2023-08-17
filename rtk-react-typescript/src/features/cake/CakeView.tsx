import { ordered, restocked } from './cakeSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)
  const dispatch = useAppDispatch()
  return (
    <div>
      <span>Number of Cakes - {numOfCakes} </span>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(3))}>Restock Cakes</button>
      <hr />
    </div>
  )
}
