import { createSlice } from '@reduxjs/toolkit';
import SearchQuestions from '../../components/SearchQuestions';

const allQuestions = SearchQuestions()
// const resultOne = allQuestions[0];
// const resultTwo = allQuestions[1];

const initialState = {
    questions: allQuestions[0],
    currentGroup: 1,
    dataInputs: {
        quantity:'',
        groupOne:'Mujeres',
        groupTwo:'Hombres'
    },
    resultGroup1: {
        score: 0
    },
    resultGroup2: {
        score: 0
    },
    isFinished: false,
}

export const data = createSlice({
    name: 'datas',
    initialState,
    reducers:{
        setQuestions: (state)=>{
            state.currentGroup === 1 ?
            state.questions = allQuestions[0] :
            state.questions = allQuestions[1]
        },
        setInputs: (state, action)=> {
            state.dataInputs = action.payload
        },
        setIsFinished: (state, action)=>{
            state.isFinished = action.payload
        },
        setScoreGroup: (state, action)=>{
            state.currentGroup == 1 ?
            state.resultGroup1.score += 1 :
            state.resultGroup2.score += 1
        },
        setCurrentGroup: (state)=>{
            state.currentGroup += 1
        }
    }
})

export const {setInputs, setIsFinished, setScoreGroup, setQuestions, setCurrentGroup} = data.actions;
export default data.reducer;




