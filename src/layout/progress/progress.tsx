import { FC } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

let timer: any = null
let state: string = ''
let activeRequests = 0
const delay = 250

NProgress.configure({ showSpinner: false })

const load = () => {
  if (state === 'loading') return

  state = 'loading'

  timer = setTimeout(() => {
    NProgress.start()
  }, delay) // only show progress bar if it takes longer than the delay
}

const stop = () => {
  if (activeRequests > 0) return

  state = 'stop'

  clearTimeout(timer)
  NProgress.done()
}

Router.events.on('routeChangeStart', load)
Router.events.on('routeChangeComplete', stop)
Router.events.on('routeChangeError', stop)

const originalFetch = window.fetch
window.fetch = async (...args) => {
  if (activeRequests === 0) load()

  activeRequests++

  try {
    const response = await originalFetch(...args)
    return response
  } catch (error) {
    return Promise.reject(error)
  } finally {
    activeRequests -= 1
    if (activeRequests === 0) stop()
  }
}

const TopProgressBar: FC = () => null
export default TopProgressBar
