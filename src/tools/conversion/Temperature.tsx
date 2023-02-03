type Unit = 'Celsius' | 'Fahrenheit' | 'Kelvin'

const units: Unit[] = ['Celsius', 'Fahrenheit', 'Kelvin']

export function Temperature() {
  document.title = 'Temperature Converter'

  const handleChange = (unit: Unit) => {
    const CelsiusE = document.querySelector<HTMLInputElement>('#Celsius')!
    const FahrenheitE = document.querySelector<HTMLInputElement>('#Fahrenheit')!
    const KelvinE = document.querySelector<HTMLInputElement>('#Kelvin')!

    let c = CelsiusE.valueAsNumber || 0
    let f = FahrenheitE.valueAsNumber || 0
    let k = KelvinE.valueAsNumber || 0

    if (unit === 'Celsius') {
      FahrenheitE.value = (c * (9 / 5) + 32).toString()
      KelvinE.value = (c + 273.15).toString()
    }

    if (unit === 'Fahrenheit') {
      c = (f - 32) * (5 / 9)
      CelsiusE.value = c.toString()
      KelvinE.value = (c + 273.15).toString()
    }

    if (unit === 'Kelvin') {
      c = k - 273.15
      CelsiusE.value = c.toString()
      FahrenheitE.value = ((c * 9) / 5 + 32).toString()
    }
  }

  return (
    <>
      <div className='row tool-header'>
        <div className='bg-blue-300'>Temperature Converter</div>
      </div>

      <div className='col tool-surface space-y-4 bg-blue-300 p-8 '>
        {units.map((unit) => (
          <div className='row justify-between' key={unit}>
            <div>{unit}</div>
            <input
              className='input selection:bg-blue-400'
              type='number'
              id={unit}
              placeholder={unit}
              onChange={() => handleChange(unit)}
            />
          </div>
        ))}
      </div>
    </>
  )
}
