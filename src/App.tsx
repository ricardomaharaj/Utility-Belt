import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './Home'
import { Discount } from './tools/Discount'
import { Temperature } from './tools/Temperature'
import { Tip } from './tools/Tip'
import { Length } from './tools/Length'

export function App() {
    return (
        <BrowserRouter>
            <div className='container mx-auto my-2'>
                <div className='m-2'>
                    <Link
                        to='/'
                        className='row text-xl m-4 text-center justify-center'
                    >
                        <span>Utility Belt</span>
                    </Link>
                    <div className='bg-slate-800 rounded-xl p-4'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/tip' element={<Tip />} />
                            <Route path='/discount' element={<Discount />} />
                            <Route
                                path='/temperature'
                                element={<Temperature />}
                            />
                            <Route path='/length' element={<Length />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}
