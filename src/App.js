import React from 'react';
// import About from './components/About'
// import Nav from './components/Nav'
// import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
// import Contact from './components/Contact'
import Footer from './components/Footer'
import projects from './projects.json';

import './App.css';
import './style/style.css'


function App() {
  // const [currentPage, handlePageChange] = useState('About');

  // const renderPage = () => {
  //   // Add a switch statement that will return the appropriate component of the 'currentPage'
  //   switch (currentPage) {
  //     case 'About':
  //       return <About />;
  //     case 'Portfolio':
  //       return <Portfolio />;
  //     case 'Contact':
  //       return <Contact />;
  //     case 'Resume':
  //       return <Resume />;
  //     default: 'About';
  //       return <About />
  //   }

  // };
  return (
    <div>
      {/* <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      <main>
      <Portfolio />
        {/* {
          // Render the component returned by 'renderPage()'
          renderPage()
          //
        } */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
