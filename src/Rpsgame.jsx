// import React from 'react'

// function Rpsgame() {
//   return (
//     <div>Rpsgame</div>
//   )
// }


import React, { useState } from 'react';
import './App.css';

const Rpsgame = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const reset =()=>{
    setComputerChoice(null)
    setPlayerChoice(null)
    setResult(null)
    
  }

  const generateComputerChoice = () => {
    const choices = [
      '<i class="fas fa-hand-rock fa-2x"></i>',
      '<i class="fas fa-hand-paper fa-2x"></i>',
      '<i class="fas fa-hand-scissors fa-2x"></i>',
    ];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const handlePlayerChoice = (choice) => {
    const computerChoice = generateComputerChoice();

    if (choice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (choice === '<i class="fas fa-hand-rock fa-2x"></i>' && computerChoice === '<i class="fas fa-hand-scissors fa-2x"></i>') ||
      (choice === '<i class="fas fa-hand-paper fa-2x"></i>' && computerChoice === '<i class="fas fa-hand-rock fa-2x"></i>') ||
      (choice === '<i class="fas fa-hand-scissors fa-2x"></i>' && computerChoice === '<i class="fas fa-hand-paper fa-2x"></i>')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }

    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
  };

  return (
    <div className="cont">
      <div className="con">
        <h1>Rock Paper Scissors</h1>
        <div className='show' >
            <div className='show1' ><p className='p1'>Your choice</p> <div className='icon' dangerouslySetInnerHTML={{ __html: playerChoice }}></div></div>
            <div className='show1'><p className='p2'>Computer's choice</p> <div className='icon' dangerouslySetInnerHTML={{ __html: computerChoice }}></div></div>
        </div>
        <div className='res'><h3>{result}</h3></div>
        <div className="btns">
        <div>
          <button onClick={() => handlePlayerChoice('<i class="fas fa-hand-rock fa-2x"></i>')} className='r'>
            Rock
          </button>
          <button onClick={() => handlePlayerChoice('<i class="fas fa-hand-paper fa-2x"></i>')} className='p'>
            Paper
          </button>
          <button onClick={() => handlePlayerChoice('<i class="fas fa-hand-scissors fa-2x"></i>')} className="s">
            Scissors
          </button>
        </div>
        <div>
            <button onClick={reset} id="reset">Reset</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Rpsgame;



