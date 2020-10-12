export default function HolaMundo({ className = '' }) {
  return (
    <div className={`${className} mb-20`}>
      <h2 className="font-blueberry text-2xl">Hola Mamá</h2>
      <div className="text-teal-600 mt-1 text-sm">11 de Octubre de 2020</div>
      <p className="text-xl mt-6">
        Hola mamá! Hola mundo! He creado un blog porque hay unas cuantas cosas que te quiero decir y
        no sé como decírtelas porque no me escuchas.
      </p>
      <p className="text-xl mt-6">
        Quiero que sepas que estoy bien, eso que vaya por delante. Me mareo un poco a veces porque esto
        se mueve mucho. Me ha parecido escuchar a papá alguna vez diciendo que es porque le haces bailes "sexies"
        a la bisabuela Maxi y a la abuela Pili. Debe ser cierto porque las escucho reírse a carcajadas.
      </p>
      <p className="text-xl mt-6">
        Ah! Estoy de acuerdo con la bisa en que no me tenéis que llamar "lentejita". Yo ya soy grande como una naranja
        pero por favor no me llaméis "naranjito". He buscado en Google y... qué horror! Quién hacía esos dibujos!? Y quién
        es ese señor!? Bueno ya me contarás algún día.
      </p>
      <p className="text-xl mt-6">
        Bueno que me desvío del tema. Sólo quería que supieras que ando por aquí y que iré escribiendo de tanto en tanto.
        Perdona que haya tardado tanto en hablar pero es que he tenido que aprender a programar para hacerme este blog.
      </p>
      <p className="text-xl mt-6">
        Te quiero mucho! Nos vemos pronto! 👋 💜
      </p>
    </div>
  )
}