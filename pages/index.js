import React, { useEffect, useState } from "react";
import Head from 'next/head'
import DarkModeToggle from "react-dark-mode-toggle"
import isDarkTheme from 'is-dark-theme'
import ls from 'local-storage'
import Posts from "../components/posts";

export default function Home({ name }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const lsDarkMode = ls('dark-mode')
    setIsDarkMode(lsDarkMode === null ? isDarkTheme() : lsDarkMode)
  }, [])
  
  function changeDarkMode(isDark) {
    ls('dark-mode', isDark)
    setIsDarkMode(isDark)
  }

  return (
    <div className={isDarkMode ? 'scheme-dark' : ''}>
      <div className="fixed inset-0 background transition-all duration-1000 ease-in-out opacity-100 dark:opacity-0" style={{ zIndex: -1 }}></div>
      <div className="fixed inset-0 dark:background transition-all duration-1000 ease-in-out opacity-0 dark:opacity-100" style={{ zIndex: -1 }}>
        <div className="relative w-full max-w-screen mx-auto opacity-50 sm:opacity-100">
          <div className="absolute" style={{ left: '80%', top: 20 }}><div className="star opacity-70 transform scale-30"></div></div>
          <div className="absolute" style={{ left: '60%', top: 80 }}><div className="star opacity-40 transform scale-40"></div></div>
          <div className="absolute" style={{ left: '70%', top: 200 }}><div className="star opacity-50 transform scale-40"></div></div>
          <div className="absolute" style={{ left: '0', top: 112 }}><div className="star opacity-60 transform scale-40"></div></div>
          <div className="absolute" style={{ left: '50%', top: 220 }}><div className="star opacity-60 transform scale-40"></div></div>
          <div className="absolute" style={{ left: '44%', top: 80 }}><div className="star opacity-50 transform scale-30"></div></div>
          <div className="absolute" style={{ left: '12%', top: 40 }}><div className="star opacity-40 transform scale-40"></div></div>
          <div className="absolute opacity-0 sm:opacity-100" style={{ left: '45%', top: 60 }}><div className="moon transform scale-30"></div></div>
        </div>
      </div>
      <section className="fixed inset-0 overflow-auto">
        <Head>
          <title>Las increíbles aventuras de {name}</title>
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <header className="relative w-full max-w-screen-lg mx-auto">
          <img src="/patucos.png" className="w-full sm:absolute sm:right-0 sm:top-0 sm:w-1/2" />
          <h1 className="transition-all duration-1000 ease-in-out font-blueberry absolute left-0 top-0 pt-20 text-lg tracking-wider text-teal-800 text-center sm:relative sm:left-auto sm:top-auto sm:pt-6 sm:pl-0 sm:w-1/2 sm:pt-20 sm:text-4xl dark:text-teal-500">
            <div>Las incre&iacute;bles</div>
            <div>aventuras de</div>
            <div className="inline-block px-16 transition-all duration-1000 ease-in-out text-5xl transform -rotate-10 tracking-wider text-red-400 sm:text-6xl lg:text-7xl dark:text-red-500">
              {name}
              <div className="opacity-0 dark:opacity-100 transition-all duration-1000 ease-in-out">
                <div className="absolute left-0 top-0 pl-4 pt-5 sm:pl-0"><div className="star opacity-70 transform scale-50"></div></div>
                <div className="absolute right-0 top-0 pr-4 pt-5 sm:pr-0"><div className="star opacity-80 transform scale-50"></div></div>
              </div>
            </div>
          </h1>
          <div className="absolute top-0 left-0 w-full pt-4 text-center">
            <DarkModeToggle
              onChange={changeDarkMode}
              checked={isDarkMode}
              size={60}
              className="inline-block"
            />
          </div>
        </header>

        <main className="relative w-full max-w-screen-md mx-auto px-4 mt-20 transition-all duration-1000 ease-in-out text-teal-800 dark:text-white">
          <Posts />
        </main>

        <footer className="text-center text-sm mt-20 mb-3 text-gray-500">
          Hecho con
          <svg className="inline-block h-4 text-red-500 mx-2" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
          </svg>
          por {name} (con la ayuda de algunos amigos)
        </footer>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      name: process.env.BABY_NAME || null,
    },
  }
}
