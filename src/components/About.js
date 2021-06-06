import React from 'react';
import myImage from '../../src/assets/jaime.jpg'

function About() {
  return (
    <section>
      <h1 className="title">About Me</h1>

      <img src={myImage} className="bio-image" alt="Jaime" />

      <div  style={{textAlign:"center"}}>
        <h2>Jaime Cedillo <br /> Web Developer</h2>
        <p>
          Hi my name is Jaime, I'm based in Utah, USA. I have skills on HTML, CSS, Git, JavaScript, React.js, Node.js, jQuery, AJAX, Moongose, Express.js. If you're an employer looking for a Web Developer, feel free to look at my work and get in touch with me.
         </p>
     
    
      </div >
     </section >
  );
}

export default About;