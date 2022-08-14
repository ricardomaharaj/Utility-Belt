import { useEffect, useState } from 'react'

export function Discount() {
    document.title = 'Discount Calculator'

    let [total, setTotal] = useState<number>(0.0)
    let [percent, setPercent] = useState<number>(0)
    let [discount, setDiscount] = useState(0)

    useEffect(() => {
        let x = Math.round(total * (percent / 100))
        setDiscount(x)
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
                    placeholder='Percent Off'
                    onChange={(e) => {
                        setPercent(parseInt(e.currentTarget.value) || 0)
                    }}
                />
            </div>
            <div className='bubble'>
                <div className='row'>{`Savings: $${discount.toLocaleString()}`}</div>
                <div className='row'>
                    {`Total minus discount: $${(
                        total - discount
                    ).toLocaleString()}`}
                </div>
            </div>
        </div>
    )
}
