import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import reportWebVitals from '../reportWebVitals.js'
import GlobalStyles from "./Components/GlobalStyles"
import '@popperjs/core/dist/cjs/popper.js'
import '../node_modules/jquery/dist/jquery.js'
import './assets/js/scripts.js'
import 'owl.carousel/dist/owl.carousel'
import 'bootstrap/dist/js/bootstrap.bundle'

ReactDOM.createRoot(document.getElementById('root')).render(
      <GlobalStyles>
        <App />
      </GlobalStyles>
)

reportWebVitals(console.log);