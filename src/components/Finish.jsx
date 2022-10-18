import React from 'react';
import questions from '../questions';

export default function Finish({score}) {
  return (
    <section className='app'>
        <div className='end-game'>
            <span>
                {`Obtuviste ${score} puntos de ${questions.length}`}
            </span>
            <button onClick={()=>{(window.location.href='/')}}>Volver a jugar</button>
        </div>
    </section>
  )
}
