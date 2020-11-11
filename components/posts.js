import HolaMundo from "./hola-mundo";
import HolaPersonitas from "./hola-personitas";
import MiCaptoraEsUnaFalsaria from "./mi-captora-es-una-falsaria";
import PlanDeEntrenamiento from "./plan-de-entrenamiento";

export default function Posts() {
  return (
    <>
      <PlanDeEntrenamiento />
      <MiCaptoraEsUnaFalsaria />
      <HolaPersonitas />
      <HolaMundo />
    </>
  );
}
