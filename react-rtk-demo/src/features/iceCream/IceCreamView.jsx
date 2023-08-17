import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

export const IceCreamView = () => {
  const [stockValue, setStockValue] = useState(1)
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Ice Creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <hr />
      <input type="number" value={stockValue} onChange={(e) => setStockValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(stockValue))}>Restock Ice Creams</button>
    </div>
  )
}
