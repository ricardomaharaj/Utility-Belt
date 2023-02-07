import { useEffect, useState } from 'react'
import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds
} from 'date-fns'

export function DateCalc() {
  document.title = 'Date Calculator'

  let [startDate, setStartDate] = useState<Date | null>(null)
  let [endDate, setEndDate] = useState<Date | null>(null)

  let [years, setYears] = useState(0)
  let [months, setMonths] = useState(0)
  let [weeks, setWeeks] = useState(0)
  let [days, setDays] = useState(0)
  let [hours, setHours] = useState(0)
  let [minutes, setMinutes] = useState(0)
  let [seconds, setSeconds] = useState(0)

  let diffArr = [
    {
      name: 'Years',
      val: years
    },
    {
      name: 'Months',
      val: months
    },
    {
      name: 'Weeks',
      val: weeks
    },
    {
      name: 'Days',
      val: days
    },
    {
      name: 'Hours',
      val: hours
    },
    {
      name: 'Minutes',
      val: minutes
    },
    {
      name: 'Seconds',
      val: seconds
    }
  ]

  useEffect(() => {
    if (startDate && endDate) {
      setYears(differenceInYears(endDate, startDate))
      setMonths(differenceInMonths(endDate, startDate))
      setWeeks(differenceInWeeks(endDate, startDate))
      setDays(differenceInDays(endDate, startDate))
      setHours(differenceInHours(endDate, startDate))
      setMinutes(differenceInMinutes(endDate, startDate))
      setSeconds(differenceInSeconds(endDate, startDate))
    }
  }, [endDate, startDate])

  return (
    <>
      <div className='row tool-header'>
        <div className='bg-cyan-300'>Date Calculator</div>
      </div>
      <div className='col rounded-xl bg-cyan-300 p-4 shadow-lg'>
        <div className='row justify-between p-2'>
          <div className='mr-4'>Start:</div>
          <input
            type='date'
            className='input w-[80%] selection:bg-cyan-400'
            onChange={(e) => setStartDate(e.currentTarget.valueAsDate)}
          />
        </div>
        <div className='row justify-between p-2'>
          <div className='mr-4'>End:</div>
          <input
            type='date'
            className='input w-[80%] selection:bg-cyan-400'
            onChange={(e) => setEndDate(e.currentTarget.valueAsDate)}
          />
        </div>
        <div className='col w-52 space-y-3 p-2'>
          <div>Differences:</div>
          {diffArr.map(({ name, val }, i) => (
            <div key={i} className='row justify-between border-b border-black'>
              <div>{name}</div>
              <div>{val}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
