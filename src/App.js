import React from 'react';
import './app.scss'
import Intro from './components/intro';
//import Skills from './components/skills';
import Portfolio from './components/portfolio';
//import Blogs from './components/blogs';
import About from './components/about'
import Contact from './components/contact';
//import Footer from './components/footer';

const App = () => {
  return (
    <div>
        <Intro />
        <About />
        {/*<Skills /> */}
        {/* <Blogs/> */}
        <Portfolio/>
        <Contact />
       {/* <Footer /> */}
    </div>
  )
}

export default App;