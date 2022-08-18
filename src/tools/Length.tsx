const UnitMap = [
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

    let handleChange = (unit: string) => {
        const CentimeterE =
            document.querySelector<HTMLInputElement>('#Centimeter')!
        const MeterE = document.querySelector<HTMLInputElement>('#Meter')!
        const KilometerE =
            document.querySelector<HTMLInputElement>('#Kilometer')!
        const MileE = document.querySelector<HTMLInputElement>('#Mile')!
        const YardE = document.querySelector<HTMLInputElement>('#Yard')!
        const FootE = document.querySelector<HTMLInputElement>('#Foot')!
        const InchE = document.querySelector<HTMLInputElement>('#Inch')!

        if (unit === 'Kilometer') {
            let kilometer = parseFloat(KilometerE.value)
            MeterE.value = (kilometer * 1000).toString()
            CentimeterE.value = (kilometer * 100000).toString()
            MileE.value = (kilometer / 1.609).toString()
            YardE.value = (kilometer * 1094).toString()
            FootE.value = (kilometer * 3281).toString()
            InchE.value = (kilometer * 39370).toString()
        }

        if (unit === 'Meter') {
            let meters = parseFloat(MeterE.value)
            KilometerE.value = (meters / 1000).toString()
            CentimeterE.value = (meters * 100).toString()
            MileE.value = (meters / 1609).toString()
            YardE.value = (meters * 1.094).toString()
            FootE.value = (meters * 3.281).toString()
            InchE.value = (meters * 39.37).toString()
        }

        if (unit === 'Centimeter') {
            let centimeter = parseFloat(CentimeterE.value)
            KilometerE.value = (centimeter / 100000).toString()
            MeterE.value = (centimeter / 100).toString()
            MileE.value = (centimeter / 160900).toString()
            YardE.value = (centimeter / 91.44).toString()
            FootE.value = (centimeter / 30.48).toString()
            InchE.value = (centimeter / 2.54).toString()
        }

        if (unit === 'Mile') {
            let mile = parseFloat(MileE.value)
            KilometerE.value = (mile * 1.609).toString()
            MeterE.value = (mile * 1609).toString()
            CentimeterE.value = (mile * 160900).toString()
            YardE.value = (mile * 1760).toString()
            FootE.value = (mile * 5280).toString()
            InchE.value = (mile * 63360).toString()
        }

        if (unit === 'Yard') {
            let yard = parseFloat(YardE.value)
            KilometerE.value = (yard / 1094).toString()
            MeterE.value = (yard / 1.094).toString()
            CentimeterE.value = (yard * 91.44).toString()
            MileE.value = (yard / 1760).toString()
            FootE.value = (yard * 3).toString()
            InchE.value = (yard * 36).toString()
        }

        if (unit === 'Foot') {
            let foot = parseFloat(FootE.value)
            KilometerE.value = (foot / 3281).toString()
            MeterE.value = (foot / 3.281).toString()
            CentimeterE.value = (foot * 30.48).toString()
            MileE.value = (foot / 5280).toString()
            YardE.value = (foot / 3).toString()
            InchE.value = (foot * 12).toString()
        }

        if (unit === 'Inch') {
            let inch = parseFloat(InchE.value)
            KilometerE.value = (inch / 39370).toString()
            MeterE.value = (inch / 39.37).toString()
            CentimeterE.value = (inch * 2.54).toString()
            MileE.value = (inch / 63360).toString()
            YardE.value = (inch / 36).toString()
            FootE.value = (inch / 12).toString()
        }
    }

    return (
        <div className='col bg2 p-4 rounded-xl'>
            {UnitMap.map((x, i) => (
                <div className='row' key={i}>
                    <input
                        className='bg3 p-2 rounded-xl'
                        type='number'
                        id={x}
                        onChange={() => handleChange(x)}
                    />
                    <span>{x}</span>
                </div>
            ))}
        </div>
    )
}
