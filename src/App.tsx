import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './Home'
import { Discount } from './tools/Discount'
import { Temperature } from './tools/Temperature'
import { Tip } from './tools/Tip'
import { Length } from './tools/Length'

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
                        <Route path='/temperature' element={<Temperature />} />
                        <Route path='/length' element={<Length />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
