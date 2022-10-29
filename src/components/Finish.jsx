import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Finish({score}) {
  const datas = useSelector(state=>state.datas)
  return (
    <section className='app'>
        <div className='endGame'>
            <span>
                {`Obtuviste ${score} puntos de ${datas.questions.length}`}
            </span>
            <Link to={'/results'}><button>Siguiente</button></Link>
        </div>
    </section>
  )
}
