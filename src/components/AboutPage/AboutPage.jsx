import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>

        <h1 className='thank-you'>Thank you! </h1>

        <p className='technologies'>Which technologies did you use?</p>
        <ul className='tech-list'>
          <li > JavaScript</li>
          <li> React</li>
          <li> Redux</li>
          <li> Node.js</li>
          <li> Express</li>
          <li> SQL</li>
          <li> PostSQL</li>
          <li> Prime react UI</li>
        </ul>

        <p className='tackle'>What is the 1 next thing you are excited to tackle</p>
        <div className='question-form'>
          <ul>
            <li> I would like set up the app to add friends to challenges</li>
            <li> I would like set up a calendar to view your progress on the calendar</li>


          </ul>
        </div>
        <h4 className='connect'> CONNECT WITH ME: </h4>

        <p className='github'> Github:https://github.com/EvenRam </p>
        <p className='linkedin'> Linkedin:www.linkedin.com/in/crystal-evenram</p>


      </div>
    </div>
  );
}

export default AboutPage;
