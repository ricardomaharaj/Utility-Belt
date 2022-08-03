import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { TipCalculator } from './TipCalculator'

export function App() {
    return (
        <BrowserRouter>
            <div className='container mx-auto my-2'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tip-calculator' element={<TipCalculator />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
