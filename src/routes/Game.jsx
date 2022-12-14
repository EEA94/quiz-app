import { useState, useEffect } from 'react';
import Finish from '../components/Finish';
import { setIsFinished, setQuestions, setScoreGroup } from '../features/data/data';
import correctSound from '../assets/correct-ding.mp3';
import incorrectSound from '../assets/incorrect-sound.mp3';
import '../styles/Game.css';
import { useSelector, useDispatch } from 'react-redux';

// const questionsall = SearchQuestions();
//   const questions = questionsall[0]

function Game(){  
const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
//const [isFinished, setIsFinished] = useState(false);
const [timeRemaining, setTimeRemaining] = useState(30);
const [timeFinished, setTimeFinished] = useState(false);
const [selectedOption, setSelectedOption] = useState(false);

const isFinished = useSelector(state=>state.datas.isFinished);
const datas = useSelector(state=>state.datas);
const questions = datas.questions;
// console.log(datas)
// console.log(isFinished)
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(setQuestions())
  dispatch(setIsFinished(false))
},[])

useEffect(()=>{
  const interval = setInterval(()=>{
    if(timeRemaining > 0) setTimeRemaining((prev)=>prev -1)
    if(timeRemaining === 0) setTimeFinished(true);
  },1000)

  return ()=> {clearInterval(interval);
  }
},[timeRemaining])

function timeFinishedOrSelected (){
    return timeFinished || selectedOption;
}

function handleAnswerSubmit(e, isCorrect, options){
    const optionCorrect = options.filter(e=>e.isCorrect);
    const button = document.getElementById(optionCorrect[0].textResponse)

if(isCorrect){
    let soundCorrect = new Audio(correctSound);
    soundCorrect.play();
    setScore(score + 1);
    e.target.classList.add(isCorrect ? 'correct' : 'incorrect');
    setTimeFinished(true);
    setSelectedOption(true);
    dispatch(setScoreGroup());
}
else{
    let soundIncorrect = new Audio(incorrectSound);
    soundIncorrect.play();
    e.target.classList.add(isCorrect ? 'correct' : 'incorrect');
    setTimeFinished(true);
    setSelectedOption(true);
    button.className += 'correct';
}
}

function handleNextQuestion(){
  document.getElementsByClassName('correct')[0]?.classList.remove('correct')
  document.getElementsByClassName('incorrect')[0]?.classList.remove('incorrect')

  setTimeRemaining(30);
  setTimeFinished(false);

  if(currentQuestion === questions.length -1) {
    dispatch(setIsFinished(true));
    setSelectedOption(false);
  }
  else{
    setTimeRemaining(30);
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
    <div className='app'>
      {/* {console.log(isFinished)} */}
      <section className='leftSection'>
        <div className='numberQuestion'>
          <span>Pregunta {currentQuestion + 1} de {questions.length}</span> 
        </div>
        <div className='titleQuestion'>{questions[currentQuestion].title}</div>
      </section>

      <section className='rightSection'>
        <div className='container-options'>
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
        </div>
        <div className='container-dinamic'>
          {!timeFinished && (
            <span className='timeRemaining'>Tiempo restante: {timeRemaining}</span>
          )}
          {
            timeFinishedOrSelected() &&
            (<div className='continue'>
            <button className='btn'
                onClick={()=>handleNextQuestion()}>
                Continuar
            </button>
            <span className='reference'>Referencia: ({questions[currentQuestion].biblicalReference})</span>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Game;
