import Form from './components/form';
import Navbar from './components/navbar';
import Information from './components/information';
import ExtraInformation from './components/extraInformation';
import Footer from './components/footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="md:max-w-7xl mx-auto pt-32">
        <div>
          <Information />
        </div>
        <div>
          <Form />
        </div>
        <div>
          <ExtraInformation />
        </div>
      </div>
      <Footer />
    </>
  );
}
