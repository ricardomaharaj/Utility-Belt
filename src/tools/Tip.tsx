import { useEffect, useState } from 'react'

export function Tip() {
    document.title = 'Tip Calculator'

    let [total, setTotal] = useState<number>(0.0)
    let [percent, setPercent] = useState<number>(0)
    let [tip, setTip] = useState(0)

    useEffect(() => {
        let x = Math.round(total * (percent / 100))
        setTip(x)
    }, [total, percent])

    return (
        <div className='col bg2 p-4 rounded-xl'>
            <div className='row'>
                <span className='bg3 p-2 rounded-xl '>$</span>
                <input
                    className='bg3 p-2 rounded-xl'
                    type='number'
                    placeholder='Total'
                    onChange={(e) => {
                        setTotal(parseFloat(e.currentTarget.value) || 0.0)
                    }}
                />
            </div>
            <div className='row'>
                <span className='bg3 p-2 rounded-xl '>%</span>
                <input
                    className='bg3 p-2 rounded-xl'
                    type='number'
                    placeholder='Tip Percent'
                    onChange={(e) => {
                        setPercent(parseInt(e.currentTarget.value) || 0)
                    }}
                />
            </div>
            <div className='bg3 p-2 rounded-xl '>
                <div className='row'>{`Tip: $${tip.toLocaleString()}`}</div>
                <div className='row'>
                    {`Total with tip: $${(total + tip).toLocaleString()}`}
                </div>
            </div>
        </div>
    )
}
