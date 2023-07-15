import FloatingContainer from '../../../components/FloatingContainer';

export default function LocalInstruccions() {
  return (
    <FloatingContainer title="Local">
      <ol className="flex flex-col list-decimal h-96 overflow-auto px-6 gap-2 font-[VinegarStroke] text-slate-300 text-xl">
        <li>
          <span>Presiona el boton en la parte derecha del temporizador</span>
        </li>
        <li>
          <span>
            Se generará aleatoriamente una patente en la parte superior de la
            pantalla
          </span>
        </li>
        <li>
          <span>
            Tendrás 60 segundos para pensar una plabra con las 3 letras
            generadas en la patente (puedes agregar o quitar letras entre medio,
            adelante y al final)
          </span>
        </li>
        <li>
          <span>
            Una vez terminado el tiempo debes restar la cantidad de letras de tu
            palabra con el puntaje indicado en la pantalla (generado por la suma
            de los numeros de la patente) y esos serán tus puntos de la ronda
          </span>
        </li>
        <li>
          <span>
            Al finalizar 10 rondas el que haya conseguido mas puntos gana la
            partida
          </span>
        </li>
      </ol>
    </FloatingContainer>
  );
}
