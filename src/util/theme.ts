export function themeCheck() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
  } else {
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
  }
}

export function toggleTheme() {
  const htmlE = document.documentElement
  const theme = localStorage.theme
  if (theme === 'dark') {
    localStorage.setItem('theme', 'light')
    htmlE.classList.remove('dark')
  }
  if (theme === 'light') {
    localStorage.setItem('theme', 'dark')
    htmlE.classList.add('dark')
  }
}
