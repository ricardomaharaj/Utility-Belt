import { useState } from 'react'
import { Link } from 'react-router-dom'
import BiHeart from '~icons/bi/heart'
import BiHeartFill from '~icons/bi/heart-fill'
import BiMoon from '~icons/bi/moon'
import BiSun from '~icons/bi/sun'
import { toggleTheme } from '../util/theme'

export function Header() {
  const [fill, setFill] = useState(false)
  const toggleFill = () => setFill(!fill)

  return (
    <>
      <div className='row my-4 justify-center space-x-6'>
        <div
          onClick={toggleFill}
          className='rounded-xl bg-gradient-to-l from-white to-slate-100 p-4 shadow-lg dark:from-stone-600 dark:to-stone-700 dark:text-white'
        >
          {fill ? (
            <BiHeartFill className='mt-1' />
          ) : (
            <BiHeart className='mt-1' />
          )}
        </div>

        <Link
          to='/'
          className='rounded-xl bg-gradient-to-r from-white to-slate-100 px-6 py-3 text-2xl shadow-lg dark:from-stone-600 dark:to-stone-700 dark:text-white'
        >
          Utility Belt
        </Link>
        <button
          onClick={toggleTheme}
          className='rounded-xl bg-gradient-to-l from-white to-slate-100 p-4 shadow-lg dark:from-stone-600 dark:to-stone-700 dark:text-white'
        >
          <BiSun className='dark:hidden' />
          <BiMoon className='hidden dark:block' />
        </button>
      </div>
    </>
  )
}
