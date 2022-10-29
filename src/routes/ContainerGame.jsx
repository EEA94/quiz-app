import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { setCurrentGroup } from "../features/data/data";
import Game from "./Game"
import '../styles/ContainerGame.css';

function ContainerGame() {
    const datas = useSelector(state=>state.datas) 
    console.log(datas)
    const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(setCurrentGroup())
   },[])

  return (
    <div className="results-groups">
        <h2>Resultados</h2>
        <div className="container-results">
            <section>
                <h4>Equipo {datas.dataInputs.groupOne}</h4>
                <span>Puntaje: {datas.resultGroup1.score}</span>
            </section>
            <section>
                <h4>Equipo {datas.dataInputs.groupTwo}</h4>
                <span>Puntaje: {datas.resultGroup2.score}</span>
            </section>
        </div>
        <Link to={'/game'}><button className="btn">Siguiente turno</button></Link>
        <Link to={'/'}><button className="btn">Volver a jugar</button></Link>
    </div>
  )
}

export default ContainerGame