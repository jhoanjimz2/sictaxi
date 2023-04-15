import { 
  Comentarios, 
  TaxistaEasy, 
  QuejaSiONoTramitada, 
  GraficaComentarios,
  GraficaCalificaciones,
} from "src/app/interfaces";

export const dataComentarioN: Comentarios[] = [
  { name:'Comentario Negativo 1', id: '1' },
  { name:'Comentario Negativo 2', id: '2' },
  { name:'Comentario Negativo 3', id: '3' },
  { name:'Comentario Negativo 4', id: '4' },
  { name:'Comentario Negativo 5', id: '5' },
  { name:'Comentario Negativo 6', id: '6' }
]
export const dataComentarioP: Comentarios[] = [
  { name:'Comentario Positivo 1', id: '1' },
  { name:'Comentario Positivo 2', id: '2' },
  { name:'Comentario Positivo 3', id: '3' },
  { name:'Comentario Positivo 4', id: '4' },
  { name:'Comentario Positivo 5', id: '5' },
  { name:'Comentario Positivo 6', id: '6' }
]
export const dataTaxistasQuejas: TaxistaEasy[] = [
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '1',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '2',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '3',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '4',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '5',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '6',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '7',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '8',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '9',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '10', img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '11', img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '12', img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '13', img: '', placa: 'TZT 850', cantidad: 2 }
]
export const dataTaxistasBuenas: TaxistaEasy[] = [
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '1',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '2',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '3',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '4',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '5',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '6',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '7',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '8',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '9',  img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '10', img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '11', img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '12', img: '', placa: 'TZT 850', cantidad: 2 },
  { name: 'Jhoan Alexander', surname: 'Jimenez Teran' , idVinculacion: '13', img: '', placa: 'TZT 850', cantidad: 2 }
]

export const quejasNoTramitadas: QuejaSiONoTramitada[] = [
  { email: 'jhoanjimz2@gmail.com', nombre: 'Jhoan Alexander Jimenez Teran', telefono: '3052766362', fecha: '2022-06-03 21:23:45', comentarios: ['Comentario 1','Comentario 2', 'Comentario 3'] },
  { email: 'jhoanjimz2@gmail.com', nombre: 'Jhoan Alexander Jimenez Teran', telefono: '3052766362', fecha: '2022-06-03 21:23:45', comentarios: ['Comentario 1','Comentario 2', 'Comentario 3'] },
  { email: 'jhoanjimz2@gmail.com', nombre: 'Jhoan Alexander Jimenez Teran', telefono: '3052766362', fecha: '2022-06-03 21:23:45', comentarios: ['Comentario 1','Comentario 2', 'Comentario 3'] },
  { email: 'jhoanjimz2@gmail.com', nombre: 'Jhoan Alexander Jimenez Teran', telefono: '3052766362', fecha: '2022-06-03 21:23:45', comentarios: ['Comentario 1','Comentario 2', 'Comentario 3'] }
]
export const quejasSiTramitadas: QuejaSiONoTramitada[] = [
  { email: 'jhoanjimz2@gmail.com', nombre: 'Jhoan Alexander Jimenez Teran', telefono: '3052766362', fecha: '2022-06-03 21:23:45', comentarios: ['Comentario 1','Comentario 2', 'Comentario 3'] },
  { email: 'jhoanjimz2@gmail.com', nombre: 'Jhoan Alexander Jimenez Teran', telefono: '3052766362', fecha: '2022-06-03 21:23:45', comentarios: ['Comentario 1','Comentario 2', 'Comentario 3'] },
  { email: 'jhoanjimz2@gmail.com', nombre: 'Jhoan Alexander Jimenez Teran', telefono: '3052766362', fecha: '2022-06-03 21:23:45', comentarios: ['Comentario 1','Comentario 2', 'Comentario 3'] }
]
export const dataGraficaComentariosNeg: GraficaComentarios = { 
  labels: ["20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023", "24/03/2023", "25/03/2023", "26/03/2023"],
  datasets: [
    { data: [5, 59, 75, 20, 20, 55, 40],  label: 'Comentario negativo 1' },
    { data: [12, 35, 25, 14, 3, 15, 14],  label: 'Comentario negativo 2' },
    { data: [11, 36, 24, 22, 2, 52, 41],  label: 'Comentario negativo 3' },
    { data: [10, 37, 23, 12, 13, 51, 42], label: 'Comentario negativo 4' },
    { data: [9, 38, 29, 21, 33, 25, 24],  label: 'Comentario negativo 5' }
  ] 
}
export const dataGraficaComentariosPos: GraficaComentarios = { 
  labels: ["20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023", "24/03/2023", "25/03/2023", "26/03/2023"],
  datasets: [
    { data: [5, 59, 75, 20, 20, 55, 40],  label: 'Comentario positivo 1' },
    { data: [12, 35, 25, 14, 3, 15, 14],  label: 'Comentario positivo 2' },
    { data: [11, 36, 24, 22, 2, 52, 41],  label: 'Comentario positivo 3' },
    { data: [10, 37, 23, 12, 13, 51, 42], label: 'Comentario positivo 4' },
    { data: [9, 38, 29, 21, 33, 25, 24],  label: 'Comentario positivo 5' }
  ] 
}
export const dataGraficaCalificaciones: GraficaCalificaciones = { 
  labels: ["20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023", "24/03/2023", "25/03/2023", "26/03/2023"],
  datasets: [
    { data: [12, 35, 25, 14, 3, 15, 14],  label: 'Calificaciones Positivas' },
    { data: [5, 59, 75, 20, 20, 55, 40],  label: 'Calificaciones Negativas' },
  ] 
}