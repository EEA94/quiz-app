import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Finish.css';

export default function Finish({score}) {
  const datas = useSelector(state=>state.datas)
  return (
    <section className='finish'>
        <div className='endGame'>
            <span>
                {`Obtuviste ${score} puntos de ${datas.questions.length}`}
            </span>
            <Link to={'/results'}><button className='btn'>Siguiente</button></Link>
        </div>
    </section>
  )
}
