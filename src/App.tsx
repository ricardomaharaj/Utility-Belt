import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Header } from './comps/header'
import { DateCalc } from './tools/calculation/Date'
import { Discount } from './tools/calculation/Discount'
import { Tax } from './tools/calculation/Tax'
import { Tip } from './tools/calculation/Tip'
import { Length } from './tools/conversion/Length'
import { Mass } from './tools/conversion/Mass'
import { Temperature } from './tools/conversion/Temperature'
import { Time } from './tools/conversion/Time'
import { themeCheck } from './util/theme'

export function App() {
  themeCheck()

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/date' element={<DateCalc />} />
        <Route path='/discount' element={<Discount />} />
        <Route path='/tax' element={<Tax />} />
        <Route path='/tip' element={<Tip />} />

        <Route path='/length' element={<Length />} />
        <Route path='/mass' element={<Mass />} />
        <Route path='/temperature' element={<Temperature />} />
        <Route path='/time' element={<Time />} />
      </Routes>
    </BrowserRouter>
  )
}
