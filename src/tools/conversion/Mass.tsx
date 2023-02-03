type Unit =
  | 'Tonne'
  | 'Kilogram'
  | 'Gram'
  | 'Milligram'
  | 'Imperial_Ton'
  | 'US_Ton'
  | 'Pound'
  | 'Ounce'

const units: Unit[] = [
  'Tonne',
  'Kilogram',
  'Gram',
  'Milligram',
  'Imperial_Ton',
  'US_Ton',
  'Pound',
  'Ounce'
]

export function Mass() {
  document.title = 'Mass Converter'

  const handleChange = (unit: Unit) => {
    const TonneE = document.querySelector<HTMLInputElement>('#Tonne')!
    const KilogramE = document.querySelector<HTMLInputElement>('#Kilogram')!
    const GramE = document.querySelector<HTMLInputElement>('#Gram')!
    const MilligramE = document.querySelector<HTMLInputElement>('#Milligram')!
    const Imperial_TonE =
      document.querySelector<HTMLInputElement>('#Imperial_Ton')!
    const US_TonE = document.querySelector<HTMLInputElement>('#US_Ton')!
    const PoundE = document.querySelector<HTMLInputElement>('#Pound')!
    const OunceE = document.querySelector<HTMLInputElement>('#Ounce')!

    if (unit === 'Tonne') {
      const tonne = TonneE.valueAsNumber || 0
      KilogramE.value = (tonne * 1000).toString()
      GramE.value = (tonne * 1e6).toString()
      MilligramE.value = (tonne * 1e9).toString()
      Imperial_TonE.value = (tonne / 1.016).toString()
      US_TonE.value = (tonne * 1.102).toString()
      PoundE.value = (tonne * 2205).toString()
      OunceE.value = (tonne * 35270).toString()
    }

    if (unit === 'Kilogram') {
      const kilogram = KilogramE.valueAsNumber || 0
      TonneE.value = (kilogram / 1000).toString()
      GramE.value = (kilogram * 1000).toString()
      MilligramE.value = (kilogram * 1e6).toString()
      Imperial_TonE.value = (kilogram / 1016).toString()
      US_TonE.value = (kilogram / 907.2).toString()
      PoundE.value = (kilogram * 2.205).toString()
      OunceE.value = (kilogram * 35.274).toString()
    }

    if (unit === 'Gram') {
      const gram = GramE.valueAsNumber || 0
      TonneE.value = (gram / 1e6).toString()
      KilogramE.value = (gram / 1000).toString()
      MilligramE.value = (gram * 1000).toString()
      Imperial_TonE.value = (gram / 1.016e6).toString()
      US_TonE.value = (gram / 907200).toString()
      PoundE.value = (gram / 453.6).toString()
      OunceE.value = (gram / 28.35).toString()
    }

    if (unit === 'Milligram') {
      const milligram = MilligramE.valueAsNumber || 0
      TonneE.value = (milligram / 1e9).toString()
      KilogramE.value = (milligram / 1e6).toString()
      GramE.value = (milligram / 1000).toString()
      Imperial_TonE.value = (milligram / 1.016e9).toString()
      US_TonE.value = (milligram / 9.072e8).toString()
      PoundE.value = (milligram / 453600).toString()
      OunceE.value = (milligram / 28350).toString()
    }

    if (unit === 'Imperial_Ton') {
      const imperialTon = Imperial_TonE.valueAsNumber || 0
      TonneE.value = (imperialTon * 1.016).toString()
      KilogramE.value = (imperialTon * 1016).toString()
      GramE.value = (imperialTon * 1.016e6).toString()
      MilligramE.value = (imperialTon * 1.016e9).toString()
      US_TonE.value = (imperialTon * 1.12).toString()
      PoundE.value = (imperialTon * 2240).toString()
      OunceE.value = (imperialTon * 35840).toString()
    }

    if (unit === 'US_Ton') {
      const usTon = US_TonE.valueAsNumber || 0
      TonneE.value = (usTon / 1.102).toString()
      KilogramE.value = (usTon * 907.2).toString()
      GramE.value = (usTon * 907200).toString()
      MilligramE.value = (usTon * 9.072e8).toString()
      Imperial_TonE.value = (usTon / 1.12).toString()
      PoundE.value = (usTon * 2000).toString()
      OunceE.value = (usTon * 32000).toString()
    }

    if (unit === 'Pound') {
      const pound = PoundE.valueAsNumber || 0
      TonneE.value = (pound / 2205).toString()
      KilogramE.value = (pound / 2.205).toString()
      GramE.value = (pound * 453.6).toString()
      MilligramE.value = (pound * 453600).toString()
      Imperial_TonE.value = (pound / 2240).toString()
      US_TonE.value = (pound / 2000).toString()
      OunceE.value = (pound * 16).toString()
    }

    if (unit === 'Ounce') {
      const ounce = OunceE.valueAsNumber || 0
      TonneE.value = (ounce / 35270).toString()
      KilogramE.value = (ounce / 35.274).toString()
      GramE.value = (ounce * 28.35).toString()
      MilligramE.value = (ounce * 28350).toString()
      Imperial_TonE.value = (ounce / 35840).toString()
      US_TonE.value = (ounce / 32000).toString()
      PoundE.value = (ounce / 16).toString()
    }
  }

  return (
    <>
      <div className='row tool-header'>
        <div className='bg-fuchsia-300'>Mass Converter</div>
      </div>
      <div className='col tool-surface space-y-4 bg-fuchsia-300 p-6'>
        {units.map((unit) => (
          <div className='row justify-between' key={unit}>
            <div>{unit.replace('_', ' ')}</div>
            <input
              className='input selection:bg-fuchsia-400'
              type='number'
              placeholder={unit.replace('_', ' ')}
              id={unit}
              onChange={() => handleChange(unit)}
            />
          </div>
        ))}
      </div>
    </>
  )
}
