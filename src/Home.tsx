import { Link } from 'react-router-dom'

export function Home() {
    document.title = 'Utility Belt'
    return (
        <div className='col'>
            <Link to='/tip-calculator'>Tip Calculator</Link>
            <Link to='/discount-calculator'>Discount Calculator</Link>
            <Link to='/temperature-converter'>Temperature Converter</Link>
        </div>
    )
}
