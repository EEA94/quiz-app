import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { setCurrentGroup } from "../features/data/data";
import Game from "./Game"
import styles from '../styles/ContainerGame.module.css';

function ContainerGame() {
    const datas = useSelector(state=>state.datas) 
    console.log(datas)
    const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(setCurrentGroup())
   },[])

  return (
    <div>
        <h2>Resultados</h2>
        <div>
            <section>
                <h4>Equipo {datas.dataInputs.groupOne}</h4>
                <span>Puntaje: {datas.resultGroup1.score}</span>
            </section>
            <section>
                <h4>Equipo {datas.dataInputs.groupTwo}</h4>
                <span>Puntaje: {datas.resultGroup2.score}</span>
            </section>
            <Link to={'/game'}><button>Siguiente turno</button></Link>
            <button>Volver a jugar</button>
        </div>
    </div>
  )
}

export default ContainerGame