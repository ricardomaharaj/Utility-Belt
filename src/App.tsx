import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './Home'
import { Discount } from './tools/Discount'
import { Temperature } from './tools/Temperature'
import { Tip } from './tools/Tip'
import { Length } from './tools/Length'
import { Time } from './tools/Time'
import { Tax } from './tools/Tax'
import { Mass } from './tools/Mass'

export function App() {
    return (
        <BrowserRouter>
            <div className='container mx-auto'>
                <div className='m-2'>
                    <Link
                        to='/'
                        className='row text-xl m-4 text-center justify-center'
                    >
                        <span className='bg2 p-4 rounded-xl'>Utility Belt</span>
                    </Link>

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/tip' element={<Tip />} />
                        <Route path='/discount' element={<Discount />} />
                        <Route path='/tax' element={<Tax />} />
                        <Route path='/temperature' element={<Temperature />} />
                        <Route path='/length' element={<Length />} />
                        <Route path='/time' element={<Time />} />
                        <Route path='/mass' element={<Mass />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
