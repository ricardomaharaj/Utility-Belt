type Unit =
  | 'Kilometer'
  | 'Meter'
  | 'Centimeter'
  | 'Mile'
  | 'Yard'
  | 'Foot'
  | 'Inch'

const units: Unit[] = [
  'Kilometer',
  'Meter',
  'Centimeter',
  'Mile',
  'Yard',
  'Foot',
  'Inch'
]

export function Length() {
  document.title = 'Length Converter'

  const handleChange = (unit: Unit) => {
    const CentimeterE = document.querySelector<HTMLInputElement>('#Centimeter')!
    const MeterE = document.querySelector<HTMLInputElement>('#Meter')!
    const KilometerE = document.querySelector<HTMLInputElement>('#Kilometer')!
    const MileE = document.querySelector<HTMLInputElement>('#Mile')!
    const YardE = document.querySelector<HTMLInputElement>('#Yard')!
    const FootE = document.querySelector<HTMLInputElement>('#Foot')!
    const InchE = document.querySelector<HTMLInputElement>('#Inch')!

    if (unit === 'Kilometer') {
      const kilometer = KilometerE.valueAsNumber || 0
      MeterE.value = (kilometer * 1000).toString()
      CentimeterE.value = (kilometer * 100000).toString()
      MileE.value = (kilometer / 1.609).toString()
      YardE.value = (kilometer * 1094).toString()
      FootE.value = (kilometer * 3281).toString()
      InchE.value = (kilometer * 39370).toString()
    }

    if (unit === 'Meter') {
      const meters = MeterE.valueAsNumber || 0
      KilometerE.value = (meters / 1000).toString()
      CentimeterE.value = (meters * 100).toString()
      MileE.value = (meters / 1609).toString()
      YardE.value = (meters * 1.094).toString()
      FootE.value = (meters * 3.281).toString()
      InchE.value = (meters * 39.37).toString()
    }

    if (unit === 'Centimeter') {
      const centimeter = CentimeterE.valueAsNumber || 0
      KilometerE.value = (centimeter / 100000).toString()
      MeterE.value = (centimeter / 100).toString()
      MileE.value = (centimeter / 160900).toString()
      YardE.value = (centimeter / 91.44).toString()
      FootE.value = (centimeter / 30.48).toString()
      InchE.value = (centimeter / 2.54).toString()
    }

    if (unit === 'Mile') {
      const mile = MileE.valueAsNumber || 0
      KilometerE.value = (mile * 1.609).toString()
      MeterE.value = (mile * 1609).toString()
      CentimeterE.value = (mile * 160900).toString()
      YardE.value = (mile * 1760).toString()
      FootE.value = (mile * 5280).toString()
      InchE.value = (mile * 63360).toString()
    }

    if (unit === 'Yard') {
      const yard = YardE.valueAsNumber || 0
      KilometerE.value = (yard / 1094).toString()
      MeterE.value = (yard / 1.094).toString()
      CentimeterE.value = (yard * 91.44).toString()
      MileE.value = (yard / 1760).toString()
      FootE.value = (yard * 3).toString()
      InchE.value = (yard * 36).toString()
    }

    if (unit === 'Foot') {
      const foot = FootE.valueAsNumber || 0
      KilometerE.value = (foot / 3281).toString()
      MeterE.value = (foot / 3.281).toString()
      CentimeterE.value = (foot * 30.48).toString()
      MileE.value = (foot / 5280).toString()
      YardE.value = (foot / 3).toString()
      InchE.value = (foot * 12).toString()
    }

    if (unit === 'Inch') {
      const inch = InchE.valueAsNumber || 0
      KilometerE.value = (inch / 39370).toString()
      MeterE.value = (inch / 39.37).toString()
      CentimeterE.value = (inch * 2.54).toString()
      MileE.value = (inch / 63360).toString()
      YardE.value = (inch / 36).toString()
      FootE.value = (inch / 12).toString()
    }
  }

  return (
    <>
      <div className='row tool-header'>
        <div className='bg-red-300'>Length Converter</div>
      </div>
      <div className='col tool-surface space-y-4 bg-red-300 p-6'>
        {units.map((unit) => (
          <div className='row justify-between' key={unit}>
            <div>{unit}</div>
            <input
              className='input selection:bg-red-400'
              type='number'
              placeholder={unit}
              id={unit}
              onChange={() => handleChange(unit)}
            />
          </div>
        ))}
      </div>
    </>
  )
}
