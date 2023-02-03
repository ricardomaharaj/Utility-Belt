type Unit =
  | 'Seconds'
  | 'Minutes'
  | 'Hours'
  | 'Days'
  | 'Weeks'
  | 'Months'
  | 'Years'
  | 'Decades'
  | 'Centuries'

const units: Unit[] = [
  'Seconds',
  'Minutes',
  'Hours',
  'Days',
  'Weeks',
  'Months',
  'Years',
  'Decades',
  'Centuries'
]

export function Time() {
  document.title = 'Time Converter'

  const handleChange = (unit: Unit) => {
    const SecondsE = document.querySelector<HTMLInputElement>('#Seconds')!
    const MinutesE = document.querySelector<HTMLInputElement>('#Minutes')!
    const HoursE = document.querySelector<HTMLInputElement>('#Hours')!
    const DaysE = document.querySelector<HTMLInputElement>('#Days')!
    const WeeksE = document.querySelector<HTMLInputElement>('#Weeks')!
    const MonthsE = document.querySelector<HTMLInputElement>('#Months')!
    const YearsE = document.querySelector<HTMLInputElement>('#Years')!
    const DecadesE = document.querySelector<HTMLInputElement>('#Decades')!
    const CenturiesE = document.querySelector<HTMLInputElement>('#Centuries')!

    if (unit === 'Seconds') {
      const seconds = SecondsE.valueAsNumber || 0
      MinutesE.value = (seconds / 60).toString()
      HoursE.value = (seconds / 3600).toString()
      DaysE.value = (seconds / 86400).toString()
      WeeksE.value = (seconds / 604800).toString()
      MonthsE.value = (seconds / 2.628e6).toString()
      YearsE.value = (seconds / 3.154e7).toString()
      DecadesE.value = (seconds / 3.154e8).toString()
      CenturiesE.value = (seconds / 3.154e9).toString()
    }

    if (unit === 'Minutes') {
      const minutes = MinutesE.valueAsNumber || 0
      SecondsE.value = (minutes * 60).toString()
      HoursE.value = (minutes / 60).toString()
      DaysE.value = (minutes / 1440).toString()
      WeeksE.value = (minutes / 10080).toString()
      MonthsE.value = (minutes / 43800).toString()
      YearsE.value = (minutes / 525600).toString()
      DecadesE.value = (minutes / 5.256e6).toString()
      CenturiesE.value = (minutes / 5.256e7).toString()
    }

    if (unit === 'Hours') {
      const hours = HoursE.valueAsNumber || 0
      SecondsE.value = (hours * 3600).toString()
      MinutesE.value = (hours * 60).toString()
      DaysE.value = (hours / 24).toString()
      WeeksE.value = (hours / 168).toString()
      MonthsE.value = (hours / 730).toString()
      YearsE.value = (hours / 8760).toString()
      DecadesE.value = (hours / 87600).toString()
      CenturiesE.value = (hours / 876000).toString()
    }

    if (unit === 'Days') {
      const days = DaysE.valueAsNumber || 0
      SecondsE.value = (days * 86400).toString()
      MinutesE.value = (days * 1440).toString()
      HoursE.value = (days * 24).toString()
      WeeksE.value = (days / 7).toString()
      MonthsE.value = (days / 30.417).toString()
      YearsE.value = (days / 365).toString()
      DecadesE.value = (days / 3650).toString()
      CenturiesE.value = (days / 36500).toString()
    }

    if (unit === 'Weeks') {
      const weeks = WeeksE.valueAsNumber || 0
      SecondsE.value = (weeks * 604800).toString()
      MinutesE.value = (weeks * 10080).toString()
      HoursE.value = (weeks * 168).toString()
      DaysE.value = (weeks * 7).toString()
      MonthsE.value = (weeks / 4.345).toString()
      YearsE.value = (weeks / 52.143).toString()
      DecadesE.value = (weeks / 521.4).toString()
      CenturiesE.value = (weeks / 5214).toString()
    }

    if (unit === 'Months') {
      const months = MonthsE.valueAsNumber || 0
      SecondsE.value = (months * 2.628e6).toString()
      MinutesE.value = (months * 43800).toString()
      HoursE.value = (months * 730).toString()
      DaysE.value = (months * 30.417).toString()
      WeeksE.value = (months * 4.345).toString()
      YearsE.value = (months / 12).toString()
      DecadesE.value = (months / 120).toString()
      CenturiesE.value = (months / 1200).toString()
    }

    if (unit === 'Years') {
      const years = YearsE.valueAsNumber || 0
      SecondsE.value = (years * 3.154e7).toString()
      MinutesE.value = (years * 525600).toString()
      HoursE.value = (years * 8760).toString()
      DaysE.value = (years * 365).toString()
      WeeksE.value = (years * 52.143).toString()
      MonthsE.value = (years * 12).toString()

      DecadesE.value = (years / 10).toString()
      CenturiesE.value = (years / 100).toString()
    }

    if (unit === 'Decades') {
      const decades = DecadesE.valueAsNumber || 0
      SecondsE.value = (decades * 3.154e8).toString()
      MinutesE.value = (decades * 5.256e6).toString()
      HoursE.value = (decades * 87600).toString()
      DaysE.value = (decades * 3650).toString()
      WeeksE.value = (decades * 521.4).toString()
      MonthsE.value = (decades * 120).toString()
      YearsE.value = (decades * 10).toString()

      CenturiesE.value = (decades / 10).toString()
    }

    if (unit === 'Centuries') {
      const centuries = CenturiesE.valueAsNumber || 0
      SecondsE.value = (centuries * 3.154e9).toString()
      MinutesE.value = (centuries * 3.154e9).toString()
      HoursE.value = (centuries * 876000).toString()
      DaysE.value = (centuries * 36500).toString()
      WeeksE.value = (centuries * 5214).toString()
      MonthsE.value = (centuries * 1200).toString()
      YearsE.value = (centuries * 100).toString()
      DecadesE.value = (centuries * 10).toString()
    }
  }

  return (
    <>
      <div className='row tool-header'>
        <div className='bg-orange-300'>Time Converter</div>
      </div>
      <div className='col tool-surface space-y-4 bg-orange-300 p-8'>
        {units.map((unit) => (
          <div className='row justify-between' key={unit}>
            <div>{unit}</div>
            <input
              className='input selection:bg-orange-400'
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
