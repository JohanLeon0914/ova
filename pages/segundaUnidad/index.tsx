/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Head from "next/head";
import definitionsJson from "../../public/definitions.json";

interface Definitions {
  presentacion_segunda_unidad: string;
  introduccion_historia_cinematica: string;
  definicion_variables_funcion_tiempo: string;
  definicion_posicion_desplazamiento: string;
  definicion_vector_velocidad_y_rapidez: string;
  definicion_vector_y_aceleracion: string;
  definicion_movimiento_particula_3D: string;
  definicion_MRU: string;
  definicion_MRUA: string;
  definicion_movimiento_circular: string;
  definicion_movimiento_parabolico: string;
  definicion_ecuaciones_y_condiciones_iniciales: string;
  definicion_movimiento_partidcula_1D: string;
}

export default function Index() {
  const definitions: Definitions = definitionsJson as Definitions;

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
                {definitions.presentacion_segunda_unidad}
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
                {definitions.introduccion_historia_cinematica}
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
                {definitions.definicion_variables_funcion_tiempo}
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
                {definitions.definicion_posicion_desplazamiento}
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
                Vector Velocidad y rapidez
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_vector_velocidad_y_rapidez}
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
                {definitions.definicion_vector_y_aceleracion}
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
        {/* Primer quiz */}
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
        {/* Quinto tema */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Descripción general del movimiento de una partícula (3D) en
                función del tiempo.
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_movimiento_particula_3D}
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Posici%C3%B3n_3D.svg/260px-Posici%C3%B3n_3D.svg.png"
                alt="Posición y desplazamiento"
                className="mx-auto my-4"
              />
            </div>
          </div>
        </section>
        {/* Sexto tema */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Tipos de movimiento en función del tiempo
              </h1>
              <p className="text-gray-700">
                <b>Movimiento rectilineo uniforme (MRU):</b>{" "}
                {definitions.definicion_MRU} <br></br>
                <b>
                  Movimiento rectilineo uniformememente acelerado (MRUA):
                </b>{" "}
                {definitions.definicion_MRUA} <br></br>
                <b>Movimiento circular:</b>{" "}
                {definitions.definicion_movimiento_circular} <br></br>
                <b>Movimiento parabolico (MRU):</b>{" "}
                {definitions.definicion_movimiento_parabolico} <br></br>
              </p>
              <div className="flex justify-center items-center">
                <img
                  src="https://matemovil.com/wp-content/uploads/2020/01/movimiento-rectil%C3%ADneo-uniforme-f%C3%B3rmulas-01.jpg"
                  alt="Posición y desplazamiento"
                  className="mx-2"
                  width={450}
                />
                <img
                  src="https://www.ingenierizando.com/wp-content/uploads/2023/02/movimiento-rectilineo-uniformemente-acelerado-MRUA-.png"
                  alt="Posición y desplazamiento"
                  className="mx-2"
                  width={650}
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="https://lh4.googleusercontent.com/TNB-HDxNIyVF6Z-jmuNs0AvukFPv0WlkVoa5s_J6JnekiDKzKNtjGyi6UpkGdeMsk1dT3MfmoyptaD8sr3UHdHbYgfX1zyZ8_Zikl_185tZBtFQP031iZTMhbnKe-E1Ud3vRdxY"
                  alt="Posición y desplazamiento"
                  className="mx-2"
                  width={450}
                />
                <img
                  src="https://www.ingenierizando.com/wp-content/uploads/2023/02/movimiento-parabolico.png"
                  alt="Posición y desplazamiento"
                  className="mx-2"
                  width={650}
                />
              </div>

              <div
                className="mx-auto my-4 w-full"
                style={{ maxWidth: "800px" }}
              >
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/geCN2IbDXpM"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* Septimo tema */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Ecuaciones y condiciones iniciales
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_ecuaciones_y_condiciones_iniciales}
              </p>
              <img
                src="https://www.shutterstock.com/image-vector/handwritten-mathematic-equations-260nw-605416160.jpg"
                alt="Posición y desplazamiento"
                className="mx-auto my-4"
              />
            </div>
          </div>
        </section>
        {/* Octavo tema */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Análisis gráfico del movimiento de una partícula en 1D.
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_movimiento_partidcula_1D}
              </p>
              <img
                src="https://oliverosacostajavier.files.wordpress.com/2012/10/320px-grafico_pva_del_mrua-svg.png"
                alt="Posición y desplazamiento"
                className="mx-auto my-4"
              />
            </div>
          </div>
        </section>
        {/* Segundo quiz */}
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
                href="https://take.quiz-maker.com/QYY27IJ33"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Ir al quiz 2
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
