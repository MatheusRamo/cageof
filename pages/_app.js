import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faRss, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'


import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout'

library.add(faHome, faRss, faEnvelope, faUser)
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
