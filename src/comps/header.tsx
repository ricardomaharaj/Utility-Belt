import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toggleTheme } from '../util/theme'

export function Header() {
  let [fill, setFill] = useState(false)

  return (
    <>
      <div className='row my-4 justify-center space-x-6'>
        <i
          onClick={() => setFill(!fill)}
          className={`bi ${
            fill ? 'bi-heart-fill' : 'bi-heart'
          } rounded-xl bg-gradient-to-l from-white to-slate-100 p-4 text-xl shadow-lg dark:from-stone-600 dark:to-stone-700 dark:text-white`}
        />
        <Link
          to='/'
          className='rounded-xl bg-gradient-to-r from-white to-slate-100 px-6 py-3 text-2xl shadow-lg dark:from-stone-600 dark:to-stone-700 dark:text-white'
        >
          Utility Belt
        </Link>
        <button
          onClick={toggleTheme}
          className='rounded-xl bg-gradient-to-l from-white to-slate-100 p-4 shadow-lg dark:from-stone-600 dark:to-stone-700'
        >
          <i className='bi bi-sun text-xl dark:hidden' />
          <i className='bi bi-moon hidden text-xl text-white dark:block' />
        </button>
      </div>
    </>
  )
}
