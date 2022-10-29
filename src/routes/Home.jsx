import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { setInputs } from '../features/data/data';
import '../styles/Home.css';

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
    <main className='container'>
        <h1 className='title-principal'>Bienvenidos!</h1>
        <form>
            <div>
                {/* {console.log(input)} */}
            <label className='label-data'>Cantidad de Preguntas por Grupo: </label>
            <input className='input-number' type='number' name='quantity' value={input.quantity} onChange={(e)=>handleChange(e)}></input>
            </div>
            <div>
            <label className='label-data'>Nombre del grupo1: </label>
            <input className='input-text' type='text' name='groupOne' value={input.groupOne} onChange={(e)=>handleChange(e)}></input>
            </div>
            <div>
            <label className='label-data'>Nombre del grupo2: </label>
            <input className='input-text' type='text' name='groupTwo' value={input.groupTwo} onChange={(e)=>handleChange(e)}></input>
            </div>
            <Link to={"/game"}><button className='btn'>Comenzar</button></Link>
        </form>
    </main>
  )
}

export default Home;
