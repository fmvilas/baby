import isDarkTheme from 'is-dark-theme'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  pageProps.darkMode = isDarkTheme()
  return <Component {...pageProps} />
}

export default MyApp
