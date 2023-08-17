import { useState } from 'react'
import { ordered, restocked } from './iceCreamSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export const IceCreamView = () => {
  const [stockValue, setStockValue] = useState(1)
  const numOfIceCreams = useAppSelector((state) => state.iceCream.numOfIceCreams)
  const dispatch = useAppDispatch()
  return (
    <div>
      <span>Number of Ice Creams - {numOfIceCreams}</span>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <input type="number" value={stockValue} onChange={(e) => setStockValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(stockValue))}>Restock Ice Creams</button>
      <hr />
    </div>
  )
}
