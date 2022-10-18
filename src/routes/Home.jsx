import questions from '../questions';
import { useState, useEffect } from 'react';
import Finish from '../components/Finish';

function Home() {

const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [isFinished, setIsFinished] = useState(false);
const [timeRemaining, setTimeRemaining] = useState(20);
const [timeFinished, setTimeFinished] = useState(false);

useEffect(()=>{
  const interval = setInterval(()=>{
    if(timeRemaining > 0) setTimeRemaining((prev)=>prev -1)
    if(timeRemaining === 0) setTimeFinished(true);
  },1000)

  return ()=> clearInterval(interval);
},[timeRemaining])

function handleAnswerSubmit(e, isCorrect){
  //agrega puntuacion
if(isCorrect) setScore(score + 1);
  //agrega clases a los botones
e.target.classList.add(isCorrect ? 'correct' : 'incorrect');
  //siguiente pregunta o fin del juego
setTimeout(() => {
  if(currentQuestion === questions.length -1) {
    setIsFinished(true);
  }
  else{
    setCurrentQuestion(currentQuestion + 1);
    setTimeRemaining(20)
  }
}, 2000);
}

function handleTimeFinished(){
  setTimeRemaining(20);
  setTimeFinished(false);
  if(currentQuestion === questions.length -1) {
    setIsFinished(true);
  }
  else{
    setCurrentQuestion(currentQuestion + 1);
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
        <div>
          {!timeFinished ? (
            <span className='time-remaining'>Tiempo restante: {timeRemaining}</span>
          ) :
          <button
          onClick={()=>handleTimeFinished()}>
          Continuar
          </button>
          }
          
        </div>
      </section>

      <section className='right-section'>
        {questions[currentQuestion].options.map((option,index)=>{
          return (
            <button 
            key={option.textResponse}
            disabled={timeFinished}
            onClick={(e)=>handleAnswerSubmit(e, option.isCorrect)}
            >{option.textResponse} 
            </button>
          )
        })}
      </section>
    </main>
  )
}

export default Home;
