import questions from "../questions";

export default function SearchQuestions(){
    const allQuestions = questions;
    let typeWho = allQuestions.filter(e=>e.typeQuestion === '¿Quién/Quiénes?');
    let typeVarious = allQuestions.filter(e=>e.typeQuestion === 'Varios');

    for (let i = typeWho.length - 1; i > 0; i--) {
		let indexRandom = Math.floor(Math.random() * (i + 1));
		let temporal = typeWho[i];
		typeWho[i] = typeWho[indexRandom];
		typeWho[indexRandom] = temporal;
	}

    for (let i = typeVarious.length - 1; i > 0; i--) {
		let indexRandom = Math.floor(Math.random() * (i + 1));
		let temporal = typeVarious[i];
		typeVarious[i] = typeVarious[indexRandom];
		typeVarious[indexRandom] = temporal;
	}

    let questionsGroup1 = [typeWho.slice(0,5), typeVarious.slice(0,5)];
    let questionsGroup2 = [typeWho.slice(-5), typeVarious.slice(-5)];

    return [questionsGroup1.flat(),questionsGroup2.flat()];
}