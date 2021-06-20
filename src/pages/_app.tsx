/* eslint-disable import/extensions */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'

import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false}>
      <ToastContainer
        autoClose={3000}
        position="top-right"
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
