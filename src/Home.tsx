import { Link } from 'react-router-dom'

export function Home() {
    document.title = 'Utility Belt'
    return (
        <div className='col'>
            <Link to='/tip'>Tip Calculator</Link>
            <Link to='/discount'>Discount Calculator</Link>
            <Link to='/temperature'>Temperature Converter</Link>
            <Link to='/length'>Length Converter</Link>
        </div>
    )
}
