import questions from '../questions';
import { useState, useEffect } from 'react';
import Finish from '../components/Finish';
import correctSound from '../assets/correct-ding.mp3';
import incorrectSound from '../assets/incorrect-sound.mp3';

function Home(){

const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [isFinished, setIsFinished] = useState(false);
const [timeRemaining, setTimeRemaining] = useState(20);
const [timeFinished, setTimeFinished] = useState(false);
const [selectedOption, setSelectedOption] = useState(false);

useEffect(()=>{
  const interval = setInterval(()=>{
    if(timeRemaining > 0) setTimeRemaining((prev)=>prev -1)
    if(timeRemaining === 0) setTimeFinished(true);
  },1000)

  return ()=> clearInterval(interval);
},[timeRemaining])

function timeFinishedOrSelected (){
    return timeFinished || selectedOption;
}

function handleAnswerSubmit(e, isCorrect, options){
    const optionCorrect = options.filter(e=>e.isCorrect);
    const button = document.getElementById(optionCorrect[0].textResponse)
    if(timeFinished) button.disabled = false;

if(isCorrect){
    let soundCorrect = new Audio(correctSound);
    soundCorrect.play();
    setScore(score + 1);
    e.target.classList.add(isCorrect ? 'correct' : 'incorrect');
    
    setTimeFinished(true);
    setSelectedOption(true);
}
else{
    let soundIncorrect = new Audio(incorrectSound);
    soundIncorrect.play();
    e.target.classList.add(isCorrect ? 'correct' : 'incorrect');
    setTimeFinished(true);
    setSelectedOption(true);
    
    button.className += 'correct';
    console.log(button.disabled)

    
}


//si es incorrecta buscar en las options la correcta
//asignar la clase correct al button de la clase correcta

}

function handleTimeFinished(){
  setTimeRemaining(20);
  setTimeFinished(false);
  if(currentQuestion === questions.length -1) {
    setIsFinished(true);
    setSelectedOption(false);
  }
  else{
    setTimeRemaining(20);
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(false)
  }
}

if(isFinished){
  return (
    <Finish score={score}/>
  )
}

  return (
    <main className="app">
      <section className='left-section'>
        <div className='number-question'>
          <span>Pregunta {currentQuestion + 1} de</span> {questions.length}
        </div>
        <div className='title-question'>{questions[currentQuestion].title}</div>
        <div className='buttons-dinamic'>
          {!timeFinished && (
            <span className='time-remaining'>Tiempo restante: {timeRemaining}</span>
          )}
          {
            timeFinishedOrSelected() &&
            (<button
                onClick={()=>handleTimeFinished()}>
                Continuar
                </button>)
          }
        </div>
      </section>

      <section className='right-section'>
        {questions[currentQuestion].options.map((option)=>{
          return (
            <button 
            id={option.textResponse}
            key={option.textResponse}
            disabled={timeFinished || selectedOption}
            onClick={(e)=>handleAnswerSubmit(e, option.isCorrect,questions[currentQuestion].options)}
            >{option.textResponse}
            </button>
          )
        })}
      </section>
    </main>
  )
}

export default Home;
