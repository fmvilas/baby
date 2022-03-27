import HolaMundo from "./hola-mundo";
import HolaPersonitas from "./hola-personitas";
import MiCaptoraEsUnaFalsaria from "./mi-captora-es-una-falsaria";
import PlanDeEntrenamiento from "./plan-de-entrenamiento";
import PetitPois from "./petit-pois";
import DiezDiasASolasConMama from "./10-dias-a-solas-con-mama";
import ContratoDeRecomenderConLovely from "./contrato-de-recomender-con-lovely";
import YaVoy from "./ya-voy";

export default function Posts() {
  return (
    <>
      <YaVoy />
      <ContratoDeRecomenderConLovely />
      <DiezDiasASolasConMama />
      <PetitPois />
      <PlanDeEntrenamiento />
      <MiCaptoraEsUnaFalsaria />
      <HolaPersonitas />
      <HolaMundo />
    </>
  );
}
