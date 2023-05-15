/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Head from "next/head";
import firstUnitDefinitionsJson from "../../public/firstUnitDefinitions.json";
import Link from "next/link";

interface FirstUnitDefinitions {
  presentacion_primera_unidad: string;
  definicion_movimiento_particula_1D: string;
  definicion_mecanica_clasica: string;
  definicion_metodo_cientifico: string;
  definicion_valores_escalares: string;
  definicion_vectores_libres_espacio: string;
  definicion_marcos_referencia: string;
  definicion_sistema_coordenadas_general: string;
  definicion_sistema_coordenado_r2_r3: string;
}
import { useEffect, useState } from "react";
import { auth } from "../../firebaseconfig";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Index() {
  const definitions: FirstUnitDefinitions = firstUnitDefinitionsJson as FirstUnitDefinitions;
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
        <title>Unidad-1 | OVA-Física Mecánica</title>
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-10 pt-20">
          {/* Bienvenida */}
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Unidad 1
              </h1>
              <p className="text-gray-700">
               {
                firstUnitDefinitionsJson.presentacion_primera_unidad
              
               }
              </p>
            </div>
          </div>
        </section>

         {/* Primer tema */}
         <section>
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Introducción a la Mecánica Clásica
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_mecanica_clasica}
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
                El Método Científico
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_metodo_cientifico}
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
                Valores Escalares
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_valores_escalares}
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
                Vectores Libres en el Espacio
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_vectores_libres_espacio}
              </p>
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
                href="https://take.quiz-maker.com/Q6PD5FY7T" 
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
                Marcos de Referencia
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_marcos_referencia}
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
                Sistema de Coordenadas
              </h1>
              <p className="text-gray-700">
             
                {definitions.definicion_sistema_coordenadas_general}
              </p>
            </div>
          </div>
        </section>

        {/* Septimo tema */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                Sistemas de ecuaciones R2 y R3
              </h1>
              <p className="text-gray-700">
                {definitions.definicion_sistema_coordenado_r2_r3}
              </p>
        
            </div>
          </div>
        </section>
  
        {/* Examen */}
        <section className="py-10 pt-10">
          <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-6 pt-4">
              <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
                ¡Examen primera unidad!
              </h1>
              <p className="text-gray-700">
                El examen completo de Física Mecánica para la Unidad 1 incluirá
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
                  href="/primeraUnidad/examen"
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
