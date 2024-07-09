import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h2 className='info-welcome'>Welcome! </h2>
      <p className='intro-text'>If you enjoy creating habits and tackling challenges, this app is designed for you.</p>

      <div className='challenge-container'>
        <img className='challenge-image' src='./images/challenge.jpg' alt="Habit Tracker" />
        <div className="challenge-text">
          <ul>
            <li className='challenge-onetext'>
              A challenge is a task or goal that pushes you to do something difficult or new,
              often to test your abilities or encourage personal growth. </li>
              
              <li className='challenge-onetext'> Challenges typically involve a wager or something to gain or lose,
              such as betting money, agreeing on a prize for the winner, or setting consequences for not meeting the challenge.
              This adds motivation and accountability to achieving the goal.
            </li>
          </ul>

        </div>
      </div>

      <div className="habit-container">
        <img className='habit-image' src='./images/habit-tracker.jpeg' alt="Habit Tracker" />
        <div className="habit-text">
          <ul>
            <li className='textone'>A habit tracker is a tool that helps you monitor and record your daily habits to track your progress over time.
              This can include daily exercises, reading, or smaller habits like drinking enough water each day.</li>
            <li className='texttwo'>This app provides the space for you to create and track whichever habit or challenge you prefer to accomplish.
              You can use them interchangeably based on your needs and aspirations.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default InfoPage;
