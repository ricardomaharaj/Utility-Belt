import { useEffect, useState } from 'react'
import BiCurrencyDollar from '~icons/bi/currency-dollar'
import BiPercent from '~icons/bi/percent'

export function Discount() {
  document.title = 'Discount Calculator'

  const [total, setTotal] = useState(0)
  const [percent, setPercent] = useState(0)
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    const newDiscount = Math.round(total * (percent / 100))
    setDiscount(newDiscount)
  }, [total, percent])

  return (
    <>
      <div className='row tool-header'>
        <div className='bg-green-300 '>Discount Calculator</div>
      </div>
      <div className='col tool-surface space-y-2 bg-green-300 '>
        <div className='row p-2'>
          <BiCurrencyDollar className='m-1 mr-3' />
          <input
            className='input selection:bg-green-400'
            type='number'
            placeholder='Total'
            onChange={(e) => setTotal(e.currentTarget.valueAsNumber || 0)}
          />
        </div>
        <div className='row p-2'>
          <BiPercent className='m-1 mr-3' />
          <input
            className='input selection:bg-green-400'
            type='number'
            placeholder='Percent Off'
            onChange={(e) => setPercent(e.currentTarget.valueAsNumber || 0)}
          />
        </div>
        <div className='col max-w-[150px] p-2'>
          <div className='row justify-between'>
            <div>Savings:</div>
            <div>${discount.toLocaleString()}</div>
          </div>
          <div className='row justify-between'>
            <div>New Total:</div>
            <div>${(total - discount).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </>
  )
}
