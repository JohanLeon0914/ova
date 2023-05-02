/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Head from "next/head";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Unidad-2</title>
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-10 pt-20">
          {/* Bienvenida */}
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Unidad 2
              </h1>
              <p className="text-gray-700">
                ¡Bienvenidos a la segunda unidad de la materia de Física
                Mecánica! En esta unidad, profundizaremos nuestro estudio de la
                mecánica y nos enfocaremos en los aspectos más avanzados del
                movimiento de los cuerpos y las leyes que lo rigen. En esta
                unidad, estudiaremos el movimiento en dos y tres dimensiones, lo
                que implica describir la trayectoria de los cuerpos en planos y
                en el espacio tridimensional. También exploraremos el movimiento
                circular uniforme (MCU) y el movimiento circular uniformemente
                acelerado (MCUA), que son tipos de movimiento en los que los
                cuerpos se desplazan en una trayectoria circular con velocidad
                constante o con aceleración constante. Además, en esta unidad,
                estudiaremos las leyes de Newton, que son las leyes
                fundamentales que rigen el movimiento de los cuerpos y la
                interacción entre ellos. Conoceremos la primera ley de Newton,
                que establece que un cuerpo permanecerá en reposo o en
                movimiento rectilíneo uniforme si no hay fuerzas que actúen
                sobre él. También estudiaremos la segunda ley de Newton, que
                establece la relación entre la fuerza que actúa sobre un cuerpo
                y la aceleración que experimenta, y la tercera ley de Newton,
                que establece que a cada acción corresponde una reacción igual y
                opuesta. Por último, en esta unidad, estudiaremos la energía
                mecánica, que es una propiedad de los cuerpos en movimiento y
                que puede ser transferida o transformada. Aprenderemos sobre la
                energía cinética y la energía potencial, y cómo se relacionan
                con el trabajo y la conservación de la energía. Espero que
                disfruten de esta segunda unidad y que puedan aplicar lo
                aprendido en su vida diaria y en su formación académica.
                ¡Sigamos explorando el fascinante mundo de la mecánica!
              </p>
            </div>
          </div>
        </section>
        {/* Primer tema */}
        <section>
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Introducción a la historia de la cinematica
              </h1>
              <p className="text-gray-700">
                La cinemática es la rama de la física que estudia el movimiento
                de los cuerpos sin tener en cuenta las causas que lo producen.
                La historia de la cinemática se remonta a la antigua Grecia,
                donde filósofos como Aristóteles y Platón desarrollaron teorías
                sobre el movimiento de los cuerpos en el universo. Sin embargo,
                fue en el siglo XVII cuando la cinemática comenzó a
                desarrollarse como ciencia moderna, gracias a los trabajos de
                científicos como Galileo Galilei, quien estableció las leyes del
                movimiento y sentó las bases para el estudio del movimiento de
                los cuerpos. En el siglo XVIII, el matemático suizo Leonhard
                Euler introdujo el concepto de coordenadas cartesianas para
                representar el movimiento de los cuerpos en el espacio, lo que
                permitió un mayor desarrollo de la cinemática. En el siglo XIX,
                el físico francés Augustin-Louis Cauchy formuló las ecuaciones
                de la cinemática, y el matemático y físico británico George
                Boole desarrolló una nueva notación matemática para describir el
                movimiento de los cuerpos. En el siglo XX, la cinemática se
                desarrolló aún más con el advenimiento de la mecánica cuántica y
                la relatividad, que revolucionaron nuestra comprensión del
                movimiento de los cuerpos a nivel subatómico y en el
                espacio-tiempo. Hoy en día, la cinemática sigue siendo una rama
                fundamental de la física y tiene aplicaciones en numerosas
                áreas, desde la ingeniería hasta la animación por ordenador.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Posici%C3%B3n_2D.svg/800px-Posici%C3%B3n_2D.svg.png"
                alt="Cinematica"
                className="mx-auto my-4"
              />
            </div>
          </div>
        </section>
        {/* Segundo tema */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Definición de variables en función del tiempo: Aspectos físicos
                y matemáticos
              </h1>
              <p className="text-gray-700">
                La definición de variables en función del tiempo es una
                herramienta importante en la cinemática, ya que nos permite
                describir cómo cambian las magnitudes físicas a medida que pasa
                el tiempo. Las variables en función del tiempo son aquellas
                magnitudes que dependen del tiempo, como la posición, velocidad,
                aceleración, fuerza, energía, entre otras. Desde un punto de
                vista físico, las variables en función del tiempo describen cómo
                cambian las propiedades físicas de un objeto en movimiento a lo
                largo del tiempo. Por ejemplo, la posición de un objeto en un
                instante dado puede describirse como la distancia que se
                encuentra respecto a un punto de referencia, mientras que la
                velocidad es la tasa a la que cambia la posición del objeto en
                función del tiempo. Desde un punto de vista matemático, las
                variables en función del tiempo se representan mediante
                ecuaciones o funciones que relacionan la variable con el tiempo.
                Por ejemplo, la ecuación de la posición en función del tiempo es
                x(t) = x0 + v0t + 1/2at^2, donde x0 es la posición inicial del
                objeto, v0 es la velocidad inicial, a es la aceleración y t es
                el tiempo transcurrido. En resumen, la definición de variables
                en función del tiempo es fundamental para entender el movimiento
                de los objetos y para poder describirlo con precisión tanto
                desde un punto de vista físico como matemático. Para
                complementar de mejor manera este tema, puedes ver el siguiente
                video:
              </p>
              <div
                className="mx-auto my-4 w-full"
                style={{ maxWidth: "800px" }}
              >
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/ojiMGOqwwCE"
                  title="Video de YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* Tercer tema */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Posición y desplazamiento
              </h1>
              <p className="text-gray-700">
                La posición y el desplazamiento son dos conceptos fundamentales
                en la cinemática que nos permiten describir el movimiento de un
                objeto en un instante determinado. La posición de un objeto es
                la ubicación o localización del objeto en un sistema de
                referencia en un momento dado. Es decir, la posición de un
                objeto se refiere a su distancia y dirección con respecto a un
                punto de referencia, como un origen de coordenadas. El
                desplazamiento, por otro lado, se refiere al cambio en la
                posición de un objeto desde un momento inicial hasta un momento
                final. El desplazamiento se mide como la distancia y la
                dirección entre la posición final y la posición inicial del
                objeto. En resumen, la posición se refiere a la ubicación actual
                de un objeto en un instante de tiempo determinado, mientras que
                el desplazamiento describe el cambio en la posición de un objeto
                entre dos instantes de tiempo diferentes. Ambos conceptos son
                fundamentales para entender y describir el movimiento de los
                objetos en la cinemática.
              </p>
              <img
                src="https://media.gcflearnfree.org/content/62da99e3c980ce07ac5e4723_07_22_2022/Desplazamiento-y-distancia-1.png"
                alt="Posición y desplazamiento"
                className="mx-auto my-4"
              />
            </div>
          </div>
        </section>
        {/* Cuarto tema */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Posición y desplazamiento
              </h1>
              <p className="text-gray-700">
                La posición y el desplazamiento son dos conceptos fundamentales
                en la cinemática que nos permiten describir el movimiento de un
                objeto en un instante determinado. La posición de un objeto es
                la ubicación o localización del objeto en un sistema de
                referencia en un momento dado. Es decir, la posición de un
                objeto se refiere a su distancia y dirección con respecto a un
                punto de referencia, como un origen de coordenadas. El
                desplazamiento, por otro lado, se refiere al cambio en la
                posición de un objeto desde un momento inicial hasta un momento
                final. El desplazamiento se mide como la distancia y la
                dirección entre la posición final y la posición inicial del
                objeto. En resumen, la posición se refiere a la ubicación actual
                de un objeto en un instante de tiempo determinado, mientras que
                el desplazamiento describe el cambio en la posición de un objeto
                entre dos instantes de tiempo diferentes. Ambos conceptos son
                fundamentales para entender y describir el movimiento de los
                objetos en la cinemática.
              </p>
              <div
                className="mx-auto my-4 w-full"
                style={{ maxWidth: "800px" }}
              >
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/75xi6aasdw4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Vector y aceleración
              </h1>
              <p className="text-gray-700">
                El vector aceleración es una magnitud física vectorial que
                describe cómo cambia la velocidad de un objeto en el tiempo. La
                aceleración es una medida de la rapidez con la que cambia la
                velocidad de un objeto en el tiempo y está directamente
                relacionada con las fuerzas que actúan sobre el objeto. La
                dirección del vector aceleración puede ser la misma o diferente
                de la dirección del vector velocidad. Si el vector aceleración y
                el vector velocidad tienen la misma dirección, el objeto se está
                acelerando en la misma dirección de su movimiento y, por lo
                tanto, su velocidad está aumentando. Si el vector aceleración y
                el vector velocidad tienen direcciones opuestas, el objeto se
                está desacelerando y su velocidad está disminuyendo. El módulo
                del vector aceleración se mide en metros por segundo al cuadrado
                (m/s^2) y se define como el cambio en la velocidad por unidad de
                tiempo. Si un objeto se mueve con una velocidad constante,
                entonces su aceleración es cero. Por otro lado, si la velocidad
                del objeto está cambiando, entonces el objeto está acelerando o
                desacelerando y su aceleración no es cero. En resumen, el vector
                aceleración es una magnitud física vectorial que indica cómo
                cambia la velocidad de un objeto en el tiempo. Su dirección y
                módulo pueden variar dependiendo de la dirección y magnitud de
                las fuerzas que actúan sobre el objeto.
              </p>
              <div
                className="mx-auto my-4 w-full"
                style={{ maxWidth: "800px" }}
              >
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/if_ZS_ZVfl0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* Cuarto tema */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                ¡Vamos a repasar tus nuevos conocimientos!
              </h1>
              <p className="text-gray-700">
                En el siguiente quiz evaluaremos los temas que vimos en las
                secciones de arriba, siente libre de volver a presentarlo las
                veces que considere necesario.
              </p>
              <a
                href="https://take.quiz-maker.com/QNHMW6ABI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Ir al quiz
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
