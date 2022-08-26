import Header from './components/Header'
import Sidebar from './components/Sidebar'
import About from './components/About'
import SocialMedia from './components/SocialMedia'
import Sponsor from './components/Sponsor'
import Media from './components/Media'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='h-full w-full'>
      <div className='bg-[url("https://www.elraenn.com/img/banner.png")] bg-no-repeat bg-cover bg-right header-con'>
        <Header />
        <Sidebar />
      </div>
      <About />
      <SocialMedia />
      <Sponsor />
      <Media />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
