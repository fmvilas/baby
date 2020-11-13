import HolaMundo from "./hola-mundo";
import HolaPersonitas from "./hola-personitas";
import MiCaptoraEsUnaFalsaria from "./mi-captora-es-una-falsaria";
import PlanDeEntrenamiento from "./plan-de-entrenamiento";
import PetitPois from "./petit-pois";

export default function Posts() {
  return (
    <>
      <PetitPois />
      <PlanDeEntrenamiento />
      <MiCaptoraEsUnaFalsaria />
      <HolaPersonitas />
      <HolaMundo />
    </>
  );
}
