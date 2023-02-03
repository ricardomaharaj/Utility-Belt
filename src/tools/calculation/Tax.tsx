import { useEffect, useState } from 'react'

export function Tax() {
  document.title = 'Tax Calculator'

  let [total, setTotal] = useState(0)
  let [percent, setPercent] = useState(0)
  let [tax, setTax] = useState(0)

  useEffect(() => {
    let x = Math.round(total * (percent / 100))
    setTax(x)
  }, [total, percent])

  return (
    <>
      <div className='row tool-header'>
        <div className='bg-yellow-200'>Tax Calculator</div>
      </div>
      <div className='col tool-surface space-y-2 bg-yellow-200'>
        <div className='row p-2'>
          <i className='bi bi-currency-dollar mr-4' />
          <input
            className='input selection:bg-yellow-300'
            type='number'
            placeholder='Total'
            onChange={(e) => setTotal(e.currentTarget.valueAsNumber || 0)}
          />
        </div>
        <div className='row p-2'>
          <i className='bi bi-percent mr-4' />
          <input
            className='input selection:bg-yellow-300'
            type='number'
            placeholder='Tax percent'
            onChange={(e) => setPercent(e.currentTarget.valueAsNumber || 0)}
          />
        </div>
        <div className='col max-w-[150px] p-2'>
          <div className='row justify-between'>
            <div>Tax:</div>
            <div>${tax.toLocaleString()}</div>
          </div>
          <div className='row justify-between'>
            <div>New Total:</div>
            <div>${(total + tax).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </>
  )
}
