import { 
  Graficas,
} from "src/app/interfaces";

export const dataGraficaCalificaciones: Graficas = { 
  labels: ["20/03/2023", "21/03/2023", "22/03/2023", "23/03/2023", "24/03/2023", "25/03/2023", "26/03/2023"],
  datasets: [
    { data: [12, 35, 25, 14, 3, 15, 14],  label: 'Calificaciones Positivas' },
    { data: [5, 59, 75, 20, 20, 55, 40],  label: 'Calificaciones Negativas' },
  ] 
}