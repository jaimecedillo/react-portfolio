import React, {useState} from 'react';
import About from './components/About'
import Nav from './components/Nav'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'


import './App.css';
import './style/style.css'


function App() {
  const [currentPage, handlePageChange] = useState('About Me');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case 'About Me':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default: 
        return <About />
    }

  };
  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
   
        {
          // Render the component returned by 'renderPage()'
       renderPage()
          //
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
