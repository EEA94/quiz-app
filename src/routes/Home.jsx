import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { setInputs } from '../features/data/data';
import styles from '../styles/Home.module.css';

function Home() {
const input = useSelector(state=>state.datas.dataInputs);
const datas = useSelector(state=>state.datas);
console.log(datas)
const dispatch = useDispatch();

    // const [input, setInput] = useState({
    //     quantity:'',
    //     groupOne:'Mujeres',
    //     groupTwo:'Hombres'
    // });

    const handleChange = (e)=>{
        dispatch(setInputs({
                    ...input,
                    [e.target.name]: e.target.value
                }))
        // setInput(
        //     {
        //         ...input,
        //         [e.target.name]: e.target.value
        //     })
    }
    
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     // dispatch(setInputs(input))
    //     navigate("/game")
    // }
    // console.log(input)
  return (
    <main>
        <h1>Bienvenidos!</h1>
        <form>
            <div>
                {/* {console.log(input)} */}
            <label>Cantidad de Preguntas por Grupo: </label>
            <input type='number' name='quantity' value={input.quantity} onChange={(e)=>handleChange(e)}></input>
            </div>
            <div>
            <label>Nombre del grupo1: </label>
            <input type='text' name='groupOne' value={input.groupOne} onChange={(e)=>handleChange(e)}></input>
            </div>
            <div>
            <label>Nombre del grupo2: </label>
            <input type='text' name='groupTwo' value={input.groupTwo} onChange={(e)=>handleChange(e)}></input>
            </div>
            <Link to={"/game"}><button>Comenzar</button></Link>
        </form>
    </main>
  )
}

export default Home;
