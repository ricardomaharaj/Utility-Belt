import { useEffect, useState } from 'react'

export function Tip() {
  document.title = 'Tip Calculator'

  let [total, setTotal] = useState(0)
  let [percent, setPercent] = useState(0)
  let [tip, setTip] = useState(0)

  useEffect(() => {
    let newTip = Math.round(total * (percent / 100))
    setTip(newTip)
  }, [total, percent])

  return (
    <>
      <div className='row tool-header'>
        <div className='bg-purple-300'>Tip Calculator</div>
      </div>
      <div className='col tool-surface bg-purple-300'>
        <div className='row p-2'>
          <i className='bi bi-currency-dollar mr-4' />
          <input
            className='input selection:bg-purple-400 '
            type='number'
            placeholder='Total'
            onChange={(e) => setTotal(e.currentTarget.valueAsNumber || 0)}
          />
        </div>

        <div className='row p-2'>
          <i className='bi bi-percent mr-4' />
          <input
            className='input selection:bg-purple-400'
            type='number'
            placeholder='Tip Percent'
            onChange={(e) => setPercent(e.currentTarget.valueAsNumber || 0)}
          />
        </div>

        <div className='col max-w-[150px] p-2'>
          <div className='row justify-between'>
            <div>Tip:</div>
            <div>${tip.toLocaleString()}</div>
          </div>

          <div className='row justify-between'>
            <div>New Total:</div>
            <div>${(total + tip).toLocaleString()}</div>
          </div>
        </div>
      </div>
    </>
  )
}
