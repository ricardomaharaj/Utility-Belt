import { Link } from 'react-router-dom'

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
          <i className='bi bi-coin text-2xl' />
          <div className='text-lg'>Tip</div>
        </Link>

        <Link
          className='col green-gradient rounded-xl p-4 shadow-lg'
          to='/discount'
        >
          <i className='bi bi-cash-coin text-2xl' />
          <div className='text-lg'>Discount</div>
        </Link>

        <Link
          className='col yellow-gradient rounded-xl p-4 shadow-lg'
          to='/tax'
        >
          <i className='bi bi-cash-coin text-2xl' />
          <div className='text-lg'>Tax</div>
        </Link>

        <Link className='col cyan-gradient rounded-xl p-4 shadow-lg' to='/date'>
          <i className='bi bi-calendar-date text-2xl' />
          <div className='text-lg'>Date</div>
        </Link>
      </div>

      <div className='my-2 p-1 text-xl dark:text-white'>Convert</div>
      <div className='grid grid-cols-2 gap-4'>
        <Link
          className='col blue-gradient rounded-xl p-4 shadow-lg '
          to='/temperature'
        >
          <i className='bi bi-thermometer-half text-2xl' />
          <div className='text-lg'>Temperature</div>
        </Link>

        <Link
          className='col red-gradient rounded-xl p-4 shadow-lg'
          to='/length'
        >
          <i className='bi bi-rulers text-2xl' />
          <div className='text-lg'>Length</div>
        </Link>

        <Link
          className='col orange-gradient rounded-xl p-4 shadow-lg'
          to='/time'
        >
          <i className='bi bi-hourglass-split text-2xl' />
          <div className='text-lg'>Time</div>
        </Link>

        <Link
          className='col fuchsia-gradient rounded-xl p-4 shadow-lg'
          to='/mass'
        >
          <i className='bi bi-box text-2xl' />
          <div className='text-lg'>Mass</div>
        </Link>
      </div>
    </div>
  )
}
