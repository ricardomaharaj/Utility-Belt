const TimeMap = [
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

    let handleChange = (unit: string) => {
        const SecondsE = document.querySelector<HTMLInputElement>('#Seconds')!
        const MinutesE = document.querySelector<HTMLInputElement>('#Minutes')!
        const HoursE = document.querySelector<HTMLInputElement>('#Hours')!
        const DaysE = document.querySelector<HTMLInputElement>('#Days')!
        const WeeksE = document.querySelector<HTMLInputElement>('#Weeks')!
        const MonthsE = document.querySelector<HTMLInputElement>('#Months')!
        const YearsE = document.querySelector<HTMLInputElement>('#Years')!
        const DecadesE = document.querySelector<HTMLInputElement>('#Decades')!
        const CenturiesE =
            document.querySelector<HTMLInputElement>('#Centuries')!

        if (unit === 'Seconds') {
            let seconds = parseFloat(SecondsE.value)
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
            let minutes = parseFloat(MinutesE.value)
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
            let hours = parseFloat(HoursE.value)
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
            let days = parseFloat(DaysE.value)
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
            let weeks = parseFloat(WeeksE.value)
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
            let months = parseFloat(MonthsE.value)
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
            let years = parseFloat(YearsE.value)
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
            let decades = parseFloat(DecadesE.value)
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
            let centuries = parseFloat(CenturiesE.value)
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
        <div className='col bg2 p-4 rounded-xl'>
            {TimeMap.map((x, i) => (
                <div className='row' key={i}>
                    <input
                        className='bg3 p-2 rounded-xl'
                        type='number'
                        id={x}
                        onChange={(e) => handleChange(x)}
                    />
                    <span>{x}</span>
                </div>
            ))}
        </div>
    )
}
