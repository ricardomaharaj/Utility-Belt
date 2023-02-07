import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './Home'
import { Header } from './comps/header'

import { Tip } from './tools/calculation/Tip'
import { Discount } from './tools/calculation/Discount'
import { Tax } from './tools/calculation/Tax'
import { DateCalc } from './tools/calculation/Date'

import { Temperature } from './tools/conversion/Temperature'
import { Length } from './tools/conversion/Length'
import { Time } from './tools/conversion/Time'
import { Mass } from './tools/conversion/Mass'

import { themeCheck } from './util/theme'

export function App() {
  themeCheck()

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/tip' element={<Tip />} />
        <Route path='/discount' element={<Discount />} />
        <Route path='/tax' element={<Tax />} />
        <Route path='/date' element={<DateCalc />} />

        <Route path='/temperature' element={<Temperature />} />
        <Route path='/length' element={<Length />} />
        <Route path='/time' element={<Time />} />
        <Route path='/mass' element={<Mass />} />
      </Routes>
    </BrowserRouter>
  )
}
