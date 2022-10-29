const questions = [
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Oí tu voz en el huerto y tuve miedo',
        options: [
            {textResponse: 'Adan',isCorrect: true},
            {textResponse: 'Eva',isCorrect: false},
            {textResponse: 'Cain',isCorrect: false},
            {textResponse: 'Abel',isCorrect: false}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Grande es mi castigo para ser soportado',
        options: [
            {textResponse: 'Abel',isCorrect: false},
            {textResponse: 'David',isCorrect: false},
            {textResponse: 'Cain',isCorrect: true},
            {textResponse: 'Salomon',isCorrect: false}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Con que salvaré yo a Israel? He aqui que mi familia es pobre en Manases, y yo el menor en la casa de mi padre',
        options: [
            {textResponse: 'Moises',isCorrect: false},
            {textResponse: 'Samuel',isCorrect: false},
            {textResponse: 'Gedeon',isCorrect: true},
            {textResponse: 'Siba',isCorrect: false}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Yo te ruego que me declares en que consiste tu gran fuerza',
        options: [
            {textResponse: 'Sanson',isCorrect: false},
            {textResponse: 'Manoa',isCorrect: false},
            {textResponse: 'Dalila',isCorrect: true},
            {textResponse: 'Micaía',isCorrect: false}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? He sabido todo lo que has hecho con tu suegra despues de la muerte de tu marido',
        options: [
            {textResponse: 'Elimelec',isCorrect: false},
            {textResponse: 'Orfa',isCorrect: false},
            {textResponse: 'Booz',isCorrect: true},
            {textResponse: 'Rut',isCorrect: false}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Ya ves que Jehová me ha hecho esteril; te ruego, pues, que te llegues a mi sierva',
        options: [
            {textResponse: 'Raquel',isCorrect: false},
            {textResponse: 'Sarai',isCorrect: true},
            {textResponse: 'Lea',isCorrect: false},
            {textResponse: 'Rebeca',isCorrect: false}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Este filisteo incircunciso será como uno de ellos, porque ha provocado al Dios viviente',
        options: [
            {textResponse: 'Samuel',isCorrect: false},
            {textResponse: 'Saul',isCorrect: false},
            {textResponse: 'Jonatán',isCorrect: false},
            {textResponse: 'David',isCorrect: true}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Iré contigo; mas no será tuya la gloria de la jornada que emprendes, porque en la mano de mujer venderá Jehova a Sísara.',
        options: [
            {textResponse: 'Rahab',isCorrect: false},
            {textResponse: 'Jael',isCorrect: false},
            {textResponse: 'Betsabé',isCorrect: false},
            {textResponse: 'Débora',isCorrect: true}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Verdad es lo que habia oido en mis tierras a cerca de tus cosas y tu sabiduria',
        options: [
            {textResponse: 'Rey de Tiro',isCorrect: false},
            {textResponse: 'Reina de Sabá',isCorrect: true},
            {textResponse: 'Rey de Sodoma',isCorrect: false},
            {textResponse: 'Rey de Gomorra',isCorrect: false}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Perezca el dia en que yo nací, Y la noche en que se dijo: Varón es concebido',
        options: [
            {textResponse: 'Abraham',isCorrect: false},
            {textResponse: 'Jacob',isCorrect: false},
            {textResponse: 'Job',isCorrect: true},
            {textResponse: 'Noé',isCorrect: false}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Más tu, Jehová, eres escudo alrededor de mi; mi gloria y el que levanta mi cabeza',
        options: [
            {textResponse: 'Moises',isCorrect: false},
            {textResponse: 'David',isCorrect: true},
            {textResponse: 'Salomón',isCorrect: false},
            {textResponse: 'Isaías',isCorrect: false}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Ve, y di a Acab: Unce tu carro y desciende, para que la lluvia no te ataje',
        options: [
            {textResponse: 'Elías',isCorrect: true},
            {textResponse: 'Eliseo',isCorrect: false},
            {textResponse: 'Moises',isCorrect: false},
            {textResponse: 'Jeremías',isCorrect: false}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Te ruego que hagas la prueba con tus siervos por diez dias, y nos den legumbres a comer, y aguas a beber',
        options: [
            {textResponse: 'Melsar',isCorrect: false},
            {textResponse: 'Ananías',isCorrect: false},
            {textResponse: 'Daniel',isCorrect: true},
            {textResponse: 'Darío',isCorrect: false}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Jehová en mi luz y mi salvación, ¿de quien temeré?',
        options: [
            {textResponse: 'Moises',isCorrect: false},
            {textResponse: 'Josué',isCorrect: true},
            {textResponse: 'Salomón',isCorrect: false},
            {textResponse: 'David',isCorrect: false}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'Quién/Quiénes?',
        title: '¿Quién dijo estas palabras? Si habeis juzgado que yo sea fiel al Señor, entrad en mi casa y posad',
        options: [
            {textResponse: 'Febe',isCorrect: false},
            {textResponse: 'Marta',isCorrect: false},
            {textResponse: 'Priscila',isCorrect: false},
            {textResponse: 'Lidia',isCorrect: true}
        ],
        biblicalReference: '',
    },
    {
        typeQuestion:'¿Quién/Quiénes?',
        title: '¿Quiénes fueron los dos hombres en la Biblia que murieron al caer accidentalmente?',
        options: [
            {textResponse: 'Elí y Benjamín ',isCorrect: false},
            {textResponse: 'Ofni y Finnes',isCorrect: false},
            {textResponse: 'Elí y Eutico',isCorrect: true },
            {textResponse: 'Eutico y Finnes',isCorrect: false}
        ],
        biblicalReference: '1 Sam. 4:18, Hechos 20:9',
    },
    {
        typeQuestion:'¿Quién/Quiénes?',
        title: '¿Quién murió en el monte Hor?',
        options: [
            {textResponse: 'Aarón', isCorrect: true},
            {textResponse: 'Moisés', isCorrect: false},
            {textResponse: 'Gad', isCorrect: false},
            {textResponse: 'Abraham',isCorrect: false}
        ],
        biblicalReference: 'Núm. 33:39',
    },
    {
        typeQuestion:'¿Quién/Quiénes?',
        title: '¿Quién fué la primera mujer egipcia mencionada en la Biblia?',
        options: [
            {textResponse: 'Sara',isCorrect: false},
            {textResponse: 'Agar',isCorrect: true},
            {textResponse: 'Rebeca',isCorrect: false},
            {textResponse: 'Noemí',isCorrect: false}
        ],
        biblicalReference: 'Génesis 16:1',
    },
    {
        typeQuestion:'¿Quién/Quiénes?',
        title: '¿Quién usó una piedra como almohada?',
        options: [
            {textResponse: 'Pablo',isCorrect: false},
            {textResponse: 'Job',isCorrect: false},
            {textResponse: 'Elías',isCorrect:false },
            {textResponse: 'Jacob',isCorrect:true }
        ],
        biblicalReference: 'Gén. 28:18',
    },
    {
        typeQuestion:'¿Quién/Quiénes?',
        title: '¿Quién fue el rey que ordenó que Daniel fuera echado en el foso de los leones?',
        options: [
            {textResponse: 'David',isCorrect: false},
            {textResponse: 'Darío',isCorrect: true},
            {textResponse: 'Nabucodonosor',isCorrect: false},
            {textResponse: 'Asuero',isCorrect: false}
        ],
        biblicalReference: 'Dan. 6:1-16',
    },
    {
        typeQuestion:'¿Quién/Quiénes?',
        title: '¿Quién tentó a un hombre diciéndole "¿Cómo dices yo te amo, cuando tu corazón no está conmmigo?',
        options: [
            {textResponse: 'Asenat',isCorrect: false},
            {textResponse: 'María',isCorrect: false},
            {textResponse: 'Rebeca',isCorrect: false},
            {textResponse: 'Dalila',isCorrect: true}
        ],
        biblicalReference: 'Jueces 16:15',
    },
    {
        typeQuestion:'¿Quién/Quiénes?',
        title: '¿Quién fué la viuda embarazada que se casó con un rey?',
        options: [
            {textResponse: 'Betsabé',isCorrect: true},
            {textResponse: 'Abigaíl',isCorrect: false},
            {textResponse: 'Ana',isCorrect: false},
            {textResponse: 'Débora',isCorrect: false}
        ],
        biblicalReference: '2 Sam. 11:4-27',
    },
    {
        typeQuestion:'¿Quién/Quiénes?',
        title: '¿Quién era el padre de Lot?',
        options: [
            {textResponse: 'Taré',isCorrect: false},
            {textResponse: 'Abram',isCorrect: false},
            {textResponse: 'Harán',isCorrect: true},
            {textResponse: 'Nacor',isCorrect: false}
        ],
        biblicalReference: 'Gén. 11:27',
    },
    {
        typeQuestion:'¿Quién/Quiénes?',
        title: '¿Quién fue el profeta que profetizó sobre un valle de huesos secos?',
        options: [
            {textResponse: 'Daniel',isCorrect: false},
            {textResponse: 'Pedro',isCorrect: false},
            {textResponse: 'José',isCorrect: false},
            {textResponse: 'Ezequiel',isCorrect: true}
        ],
        biblicalReference: 'Ezeq. 37:1-18',
    },
    {
        typeQuestion:'¿Quién/Quiénes?',
        title: '¿Quién fué el hombre que puso, algunas veces, un velo sobre su rostro?',
        options: [
            {textResponse: 'Moisés',isCorrect: true},
            {textResponse: 'Daniel',isCorrect: false},
            {textResponse: 'Leví',isCorrect: false},
            {textResponse: 'Judá',isCorrect: false}
        ],
        biblicalReference: 'Ex. 34:33-35',
    },
    {
        typeQuestion:'Varios',
        title: '¿Cuál fue la primera medida de longitud mencionada en la Biblia?',
        options: [
            {textResponse: 'Pie',isCorrect: false},
            {textResponse: 'Codo',isCorrect: true},
            {textResponse: 'Metros',isCorrect: false},
            {textResponse: 'Millas',isCorrect: false}
        ],
        biblicalReference: 'Gén. 6:15',
    },
    {
        typeQuestion:'Varios',
        title: '¿En la armadura de Dios, en Efesios 6, que representa la coraza?',
        options: [
            {textResponse: 'Verdad',isCorrect: false},
            {textResponse: 'Amor',isCorrect: false},
            {textResponse: 'Justicia',isCorrect: true},
            {textResponse: 'Fe',isCorrect: false}
        ],
        biblicalReference: 'Ef. 6:14',
    },
    {
        typeQuestion:'Varios',
        title: '¿Que fue dividido en dos cuando Jesús murió en la cruz?',
        options: [
            {textResponse: 'El piso del templo',isCorrect: false},
            {textResponse: 'El cielo',isCorrect: false},
            {textResponse: 'El velo del templo',isCorrect: true},
            {textResponse: 'La pared del templo',isCorrect: false}
        ],
        biblicalReference: 'Mat. 27:51',
    },
    {
        typeQuestion:'Varios',
        title: 'De acuerdo a Filipenses 3, ¿en que no debía Pablo poner su confianza? ',
        options: [
            {textResponse: 'En su hermano',isCorrect: false},
            {textResponse: 'En su carne',isCorrect: true},
            {textResponse: 'En su amigo',isCorrect: false},
            {textResponse: 'En la ley',isCorrect: false}
        ],
        biblicalReference: 'Filipenses 3:3',
    },
    {
        typeQuestion:'Varios',
        title: '¿A qué tribu de Israel pertenecía el rey Saúl?',
        options: [
            {textResponse: 'Benjamín',isCorrect: true},
            {textResponse: 'Leví',isCorrect: false},
            {textResponse: 'Gad',isCorrect: false},
            {textResponse: 'Judá',isCorrect: false}
        ],
        biblicalReference: '1 Sam. 9:1-2',
    },
    {
        typeQuestion:'Varios',
        title: '¿Cuáles son las dos cosas más importantes, que Jesús dijo que debíamos buscar en primer lugar?',
        options: [
            {textResponse: 'Fe y paz',isCorrect: false},
            {textResponse: 'El reino de Dios y su justicia',isCorrect: true},
            {textResponse: 'Amor y dominio propio',isCorrect: false},
            {textResponse: 'Amor y Fe',isCorrect: false}
        ],
        biblicalReference: 'Mat. 6:33',
    },
    {
        typeQuestion:'Varios',
        title: '¿Cuántos capítulos hay en el libro de 1 Pedro?',
        options: [
            {textResponse: '1',isCorrect: false},
            {textResponse: '3',isCorrect: false},
            {textResponse: '5',isCorrect: true},
            {textResponse: '7',isCorrect: false}
        ],
        biblicalReference: '1 Pedro',
    },
    {
        typeQuestion:'Varios',
        title: '¿Cuántos capítulos hay en el evangelio de Mateo?',
        options: [
            {textResponse: '28',isCorrect: true},
            {textResponse: '29',isCorrect: false},
            {textResponse: '30',isCorrect: false},
            {textResponse: '31',isCorrect: false}
        ],
        biblicalReference: 'Mateo',
    },
    {
        typeQuestion:'Varios',
        title: '¿Cuántos libros de la Biblia comienzan con la letra "D"?',
        options: [
            {textResponse: '1',isCorrect: false},
            {textResponse: '3',isCorrect: false},
            {textResponse: '2',isCorrect: true},
            {textResponse: '4',isCorrect: false}
        ],
        biblicalReference: 'La Biblia',
    },
    {
        typeQuestion:'Varios',
        title: '¿Cuántos libros de la Biblia comienzan con la letra "L"?',
        options: [
            {textResponse: '1',isCorrect: false},
            {textResponse: '3',isCorrect: true},
            {textResponse: '2',isCorrect: false},
            {textResponse: '4',isCorrect: false}
        ],
        biblicalReference: 'La Biblia',
    },
    {
        typeQuestion:'Varios',
        title: '¿Cuál es el libro que está entre Abdías y Miqueas?',
        options: [
            {textResponse: 'Joel',isCorrect: false},
            {textResponse: 'Amós',isCorrect: false},
            {textResponse: 'Nahúm',isCorrect: false},
            {textResponse: 'Jonás',isCorrect: true}
        ],
        biblicalReference: 'La Biblia',
    },
    {
        typeQuestion:'Varios',
        title: '¿En qué libro de la Biblia se encuentra "La prueba de vuestra fe produce paciencia"?',
        options: [
            {textResponse: 'Filipenses',isCorrect: false},
            {textResponse: 'Colosenses',isCorrect: false},
            {textResponse: 'Santiago',isCorrect: true},
            {textResponse: 'Tito',isCorrect: false}
        ],
        biblicalReference: 'Santiago1:3',

    },
    {
        typeQuestion:'¿Quién/Quiénes?',
        title: '¿Quién acompañó a Pablo en su segundo viaje misionero?',
        options: [
            {textResponse: 'Juan',isCorrect: false},
            {textResponse: 'Silas',isCorrect: true},
            {textResponse: 'Pedro',isCorrect: false},
            {textResponse: 'Santiago',isCorrect: false}
        ],
        biblicalReference: 'Hechos 15:40',
        
    },
    {
        typeQuestion:'Varios',
        title: '¿En la armadura de Dios, en Efesios 6, que representa el yelmo?',
        options: [
            {textResponse: 'Justicia',isCorrect: false},
            {textResponse: 'Libertad',isCorrect: false},
            {textResponse: 'Salvación',isCorrect: true},
            {textResponse: 'Amor',isCorrect: false}
        ],
        biblicalReference: 'Efes.6:17',
        
    },
    
]
console.log(questions.length)
export default questions;