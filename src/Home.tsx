import { Link } from 'react-router-dom'
import BiBox from '~icons/bi/box'
import BiCalendarDate from '~icons/bi/calendar-date'
import BiCashCoin from '~icons/bi/cash-coin'
import BiCoin from '~icons/bi/coin'
import BiHourglassSplit from '~icons/bi/hourglass-split'
import BiRulers from '~icons/bi/rulers'
import BiThermometerHalf from '~icons/bi/thermometer-half'

export function Home() {
  document.title = 'Utility Belt'

  return (
    <div className='col'>
      <div className='my-2 p-1 text-xl dark:text-white'>Calculate</div>
      <div className='grid grid-cols-2 gap-4'>
        <Link
          className='col purple-gradient rounded-xl p-4 shadow-lg'
          to='/tip'
        >
          <BiCoin className='mb-2 text-xl' />
          <div className='text-lg'>Tip</div>
        </Link>

        <Link
          className='col green-gradient rounded-xl p-4 shadow-lg'
          to='/discount'
        >
          <BiCashCoin className='mb-2 text-xl' />
          <div className='text-lg'>Discount</div>
        </Link>

        <Link
          className='col yellow-gradient rounded-xl p-4 shadow-lg'
          to='/tax'
        >
          <BiCashCoin className='mb-2 text-xl' />
          <div className='text-lg'>Tax</div>
        </Link>

        <Link className='col cyan-gradient rounded-xl p-4 shadow-lg' to='/date'>
          <BiCalendarDate className='mb-2 text-xl' />
          <div className='text-lg'>Date</div>
        </Link>
      </div>

      <div className='my-2 p-1 text-xl dark:text-white'>Convert</div>
      <div className='grid grid-cols-2 gap-4'>
        <Link
          className='col blue-gradient rounded-xl p-4 shadow-lg '
          to='/temperature'
        >
          <BiThermometerHalf className='mb-2 text-xl' />
          <div className='text-lg'>Temperature</div>
        </Link>

        <Link
          className='col red-gradient rounded-xl p-4 shadow-lg'
          to='/length'
        >
          <BiRulers className='mb-2 text-xl' />
          <div className='text-lg'>Length</div>
        </Link>

        <Link
          className='col orange-gradient rounded-xl p-4 shadow-lg'
          to='/time'
        >
          <BiHourglassSplit className='mb-2 text-xl' />
          <div className='text-lg'>Time</div>
        </Link>

        <Link
          className='col fuchsia-gradient rounded-xl p-4 shadow-lg'
          to='/mass'
        >
          <BiBox className='mb-2 text-xl' />
          <div className='text-lg'>Mass</div>
        </Link>
      </div>
    </div>
  )
}
