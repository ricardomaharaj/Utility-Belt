import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Discount } from './tools/Discount'
import { Temperature } from './tools/Temperature'
import { Tip } from './tools/Tip'
import { Length } from './tools/Length'

export function App() {
    return (
        <BrowserRouter>
            <div className='container mx-auto my-2'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tip' element={<Tip />} />
                    <Route path='/discount' element={<Discount />} />
                    <Route path='/temperature' element={<Temperature />} />
                    <Route path='/length' element={<Length />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
