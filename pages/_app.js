import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { AuthProvider } from './Providers'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}
