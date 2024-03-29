import { FC, Fragment } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import GlobalStyles from '@/styles/GlobalStyles'
import { useRecoilDebugObserver } from '@/hooks/useRecoilDebugObserver'
import Header from './header/header.component'
import Menu from './menu/menu.component'
import Auth from './auth/auth'
import { StyledMain } from './layout.styles'

const Layout: FC = (props) => {
  const { children } = props

  useRecoilDebugObserver()

  return (
    <Fragment>
      <HtmlHead />
      <GlobalStyles />
      <TopProgressBar />
      <Header />
      <Menu />
      <StyledMain>{children}</StyledMain>
      <Auth />
    </Fragment>
  )
}

export default Layout

const TopProgressBar = dynamic(
  () => {
    return import('./progress/progress')
  },
  { ssr: false },
)

const HtmlHead = () => (
  <Head>
    <meta
      name='viewport'
      content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=5, viewport-fit=cover'
    />
    <link
      href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap'
      rel='stylesheet'
    />
    <title>Food Delivery</title>
  </Head>
)
