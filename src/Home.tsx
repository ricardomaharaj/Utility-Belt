import { Link } from 'react-router-dom'

export function Home() {
    document.title = 'Utility Belt'
    return (
        <div className='col'>
            <Link className='bg2 p-4 rounded-xl' to='/tip'>
                Tip Calculator
            </Link>
            <Link className='bg2 p-4 rounded-xl' to='/discount'>
                Discount Calculator
            </Link>
            <Link className='bg2 p-4 rounded-xl' to='/tax'>
                Tax Calculator
            </Link>
            <Link className='bg2 p-4 rounded-xl' to='/temperature'>
                Temperature Converter
            </Link>
            <Link className='bg2 p-4 rounded-xl' to='/length'>
                Length Converter
            </Link>
            <Link className='bg2 p-4 rounded-xl' to='/time'>
                Time Converter
            </Link>
        </div>
    )
}
