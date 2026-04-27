import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurrentFeatures from './components/CurrentFeatures';
import ProPreview from './components/ProPreview';
import OpenSourceCommitment from './components/OpenSourceCommitment';
import WaitingListForm from './components/WaitingListForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#060b14] text-white font-sans antialiased">
      <Navbar />
      <Hero />
      <CurrentFeatures />
      <ProPreview />
      <OpenSourceCommitment />
      <WaitingListForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
