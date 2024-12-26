import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import QrCodeGenerator from './components/QrGenerate/QrCodeGenerator'
import QrCodeScanner from './components/QrScan/QrCodeScanner'
import GenerateHistory from './components/GenerateHistory/GenerateHistory'
import ScanHistory from './components/ScanHistory/ScanHistory'

const Layout = () => {
   return (
      <div>
         <Navigation />
         <Routes>
            <Route path="/generate" element={<QrCodeGenerator />} />
            <Route path="/scan" element={<QrCodeScanner />} />
            <Route path="/gen_history" element={<GenerateHistory />} />
            <Route path="/scan_history" element={<ScanHistory />} />
         </Routes>
      </div>
   )
}

export default Layout
