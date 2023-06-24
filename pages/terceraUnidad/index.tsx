/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Head from "next/head";
import definitionsJson from "../../public/thirdUnitDefinitions.json";
import Link from "next/link";



interface Definitions {
  presentacion_tercera_unidad: string;
  definicion_movimiento_relativo: string;
  definicion_masa: string;
  definicion_cuerpo_puntual: string;
  definicion_unidades_fuerza: string;
  definicion_fuerzas_fundamentales_naturaleza: string;
  definicion_fuerzas_friccion: string;
  definicion_leyes_newton: string;
  definicion_sistemas_masa_variable: string;
  definicion_sistemas_inerciales_referencia: string;
}
import { useEffect, useState } from "react";
import { auth } from "../../firebaseconfig";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Index() {
  const definitions: Definitions = definitionsJson as Definitions;

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Inicia sesión con Google
      await signInWithPopup(auth, provider);
      Swal.fire({
        icon: 'success',
        title: '¡Sesión iniciada correctamente!',
        text: 'Bienvenido'
      });
      Swal
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Unidad-2 | OVA-Física Mecánica</title>
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-10 pt-20">
          {/* Bienvenida */}
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Unidad 3
              </h1>
              <p className="text-gray-700">
                {definitions.presentacion_tercera_unidad}
              </p>
            </div>
          </div>
        </section>
        {/* Primer tema */}
        <section>
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Movimiento Relativo
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_movimiento_relativo}
              </p>
              <div
                className="mx-auto my-4 w-full"
                style={{ maxWidth: "800px" }}
              >
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/zdDGwLwLA_c"
                  title="Video de YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* Segundo tema */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Cuerpo Puntual
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_cuerpo_puntual}
              </p>
              <div
                className="mx-auto my-4 w-full"
                style={{ maxWidth: "800px" }}
              >
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/PP1orhr_MCA"
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
                Unidades de Fuerza
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_unidades_fuerza}
              </p>
              <div
                className="mx-auto my-4 w-full"
                style={{ maxWidth: "800px" }}
              >
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/_zdNnsNzR3I"
                  title="Video de YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
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
                Fuerzas Fundamentales de la Naturaleza
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_fuerzas_fundamentales_naturaleza}
              </p>
              <div
                className="mx-auto my-4 w-full"
                style={{ maxWidth: "800px" }}
              >
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/GJIRHzYOn1U"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Fuerzas de fricción
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_fuerzas_friccion}
              </p>
              <div
                className="mx-auto my-4 w-full"
                style={{ maxWidth: "800px" }}
              >
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/NNz8zUSMUD8"
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
                href="https://take.quiz-maker.com/QBVSIJPYA"
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
                Leyes de Newton
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_leyes_newton}
              </p>
              <div
                className="mx-auto my-4 w-full"
                style={{ maxWidth: "800px" }}
              >
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/m8NBT0SL5CA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* Sexto tema */}
    
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Sistemas de Masa variable
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_sistemas_masa_variable}
              </p>
              <div
                className="mx-auto my-4 w-full"
                style={{ maxWidth: "800px" }}
              >
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/MolVR0U8Svg"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* Octavo tema */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Sistemas Inerciales de Referencia
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_sistemas_inerciales_referencia}
              </p>
              <div
                className="mx-auto my-4 w-full"
                style={{ maxWidth: "800px" }}
              >
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/4Z-VZgGcX4g"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
       
        {/* Examen */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                ¡Examen tercera unidad!
              </h1>
              <p className="text-gray-700">
                El examen completo de Física Mecánica para la Unidad 3 incluirá
                una evaluación de todos los temas abordados en esta unidad. Los
                estudiantes pueden esperar preguntas que aborden la comprensión
                y aplicación de estos temas, así como la capacidad para realizar
                cálculos utilizando las fórmulas y ecuaciones relevantes.
                Además, se puede evaluar la capacidad de los estudiantes para
                analizar y resolver problemas utilizando el pensamiento crítico
                y la aplicación de los conceptos aprendidos. Es importante que
                los estudiantes se preparen para el examen estudiando y
                revisando los temas de la unidad en profundidad, así como
                practicando la resolución de problemas y la aplicación de las
                fórmulas y ecuaciones relevantes. También se recomienda que los
                estudiantes participen en discusiones en clase y trabajen en
                ejercicios de práctica para fortalecer su comprensión de los
                conceptos y su capacidad para aplicarlos.
              </p>
              {!user ? (
                <button
                  onClick={handleLogin}
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Logueate para presentar el examen
                </button>
              ) : (
                <Link
                  href="/terceraUnidad/examen"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Ir al examen
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
