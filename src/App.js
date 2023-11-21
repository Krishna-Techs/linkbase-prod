import React, {useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';  
import Preloader from './Components/Preloader';
import ScrollTopBtn from './Components/ScrollTopBtn';
import Home from './pages/Home';
import CheckIn from './pages/CheckIn';
import CheckOuts from './pages/CheckOuts';
import Streamline from './pages/Streamline';
import Guidebooks from './pages/Guidebooks';
import SmartLocks from './pages/SmartLocks';
import Hospitality from './pages/Hospitality';
import HospitalitySaas from './pages/HospitalitySaas';
import Pricing from './pages/Pricing';
import Upsells from './pages/Upsells';
import AffiliateUpsells from './pages/AffiliateUpsells';
import CombatFrauds from './pages/CombatFrauds';
import IncreaseRepeatGuests from './pages/IncreaseRepeatGuests';
import Integrations from './pages/Integrations';
import Company from './pages/Company';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Preloader/>
  } else {
    return (
    <>
      <ScrollTopBtn/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/check-outs" element={<CheckOuts />} />
          <Route path="/digital-guidebooks" element={<Guidebooks />} />
          <Route path="/smart-locks" element={<SmartLocks />} />
          <Route path="/direct-upsells" element={<Upsells />} />
          <Route path="/affiliate-upsells" element={<AffiliateUpsells />} />
          <Route path="/streamline" element={<Streamline />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/hospitality-saas" element={<HospitalitySaas />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/combatFrauds" element={<CombatFrauds />} />
          <Route path="/increaseRepeatGuests" element={<IncreaseRepeatGuests />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/company" element={<Company />} />
          <Route path="/privacy-and-policy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<Terms />} />
        </Routes>
      <Footer/>
    </>
    )
  }
}

export default App;
