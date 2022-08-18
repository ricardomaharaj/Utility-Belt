type Unit = 'C' | 'F' | 'K'

export function Temperature() {
    document.title = 'Temperature Converter'

    let tempChange = (unit: Unit) => {
        const C = document.querySelector<HTMLInputElement>('#C')!
        const F = document.querySelector<HTMLInputElement>('#F')!
        const K = document.querySelector<HTMLInputElement>('#K')!

        let c = parseFloat(C.value)
        let f = parseFloat(F.value)
        let k = parseFloat(K.value)

        switch (unit) {
            case 'C':
                F.value = (c * (9 / 5) + 32).toString()
                K.value = (c + 273.15).toString()
                break
            case 'F':
                c = (f - 32) * (5 / 9)
                C.value = c.toString()
                K.value = (c + 273.15).toString()
                break
            case 'K':
                c = k - 273.15
                C.value = c.toString()
                F.value = ((c * 9) / 5 + 32).toString()
                break
        }
    }

    return (
        <div className='col bg2 p-4 rounded-xl'>
            <div className='row'>
                <input
                    className='bg3 p-2 rounded-xl'
                    type='number'
                    id='C'
                    onChange={() => tempChange('C')}
                />
                <span>Celsius</span>
            </div>
            <div className='row'>
                <input
                    className='bg3 p-2 rounded-xl'
                    type='number'
                    id='F'
                    onChange={() => tempChange('F')}
                />
                <span>Fahrenheit</span>
            </div>
            <div className='row'>
                <input
                    className='bg3 p-2 rounded-xl'
                    type='number'
                    id='K'
                    onChange={() => tempChange('K')}
                />
                <span>Kelvin</span>
            </div>
        </div>
    )
}
