export function TemperatureConverter() {
    document.title = 'Temperature Converter'

    return (
        <div className='col'>
            <div className='row'>
                <input
                    type='number'
                    id='C'
                    onChange={() => {
                        const C = document.querySelector(
                            '#C'
                        ) as HTMLInputElement
                        const F = document.querySelector(
                            '#F'
                        ) as HTMLInputElement
                        const K = document.querySelector(
                            '#K'
                        ) as HTMLInputElement
                        let c = parseFloat(C.value)
                        F.value = (c * (9 / 5) + 32).toString()
                        K.value = (c + 273.15).toString()
                    }}
                />
                <span>Celsius</span>
            </div>
            <div className='row'>
                <input
                    type='number'
                    id='F'
                    onChange={() => {
                        const C = document.querySelector(
                            '#C'
                        ) as HTMLInputElement
                        const F = document.querySelector(
                            '#F'
                        ) as HTMLInputElement
                        const K = document.querySelector(
                            '#K'
                        ) as HTMLInputElement
                        let f = parseFloat(F.value)
                        let c = (f - 32) * (5 / 9)
                        C.value = c.toString()
                        K.value = (c + 273.15).toString()
                    }}
                />
                <span>Fahrenheit</span>
            </div>
            <div className='row'>
                <input
                    type='number'
                    id='K'
                    onChange={() => {
                        const C = document.querySelector(
                            '#C'
                        ) as HTMLInputElement
                        const F = document.querySelector(
                            '#F'
                        ) as HTMLInputElement
                        const K = document.querySelector(
                            '#K'
                        ) as HTMLInputElement
                        let k = parseFloat(K.value)
                        let c = k - 273.15
                        C.value = c.toString()
                        F.value = ((c * 9) / 5 + 32).toString()
                    }}
                />
                <span>Kelvin</span>
            </div>
        </div>
    )
}
