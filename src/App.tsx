import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DiscountCalculator } from './DiscountCalculator'
import { Home } from './Home'
import { TemperatureConverter } from './TemperatureConverter'
import { TipCalculator } from './TipCalculator'

export function App() {
    return (
        <BrowserRouter>
            <div className='container mx-auto my-2'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tip-calculator' element={<TipCalculator />} />
                    <Route
                        path='/discount-calculator'
                        element={<DiscountCalculator />}
                    />
                    <Route
                        path='/temperature-converter'
                        element={<TemperatureConverter />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
