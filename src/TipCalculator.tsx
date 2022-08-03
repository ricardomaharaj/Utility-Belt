import { useEffect, useState } from 'react'

export function TipCalculator() {
    document.title = 'Tip Calculator'

    let [total, setTotal] = useState<number>(0.0)
    let [percent, setPercent] = useState<number>(0)
    let [tip, setTip] = useState(0)

    useEffect(() => {
        let x = Math.round(total * (percent / 100))
        setTip(x)
    }, [total, percent])

    return (
        <div className='col'>
            <div className='row'>
                <span className='bubble'>$</span>
                <input
                    type='number'
                    placeholder='Total'
                    onChange={(e) => {
                        setTotal(parseFloat(e.currentTarget.value) || 0.0)
                    }}
                />
            </div>
            <div className='row'>
                <span className='bubble'>%</span>
                <input
                    type='number'
                    placeholder='Tip Percent'
                    onChange={(e) => {
                        setPercent(parseInt(e.currentTarget.value) || 0)
                    }}
                />
            </div>
            <div className='bubble'>
                <div className='row'>{`${percent}% of ${total} is ${tip}`}</div>
                <div className='row'>{`Tip: $${tip.toLocaleString()}`}</div>
                <div className='row'>
                    {`Total with tip: $${(total + tip).toLocaleString()}`}
                </div>
            </div>
        </div>
    )
}
