/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { auth } from "../firebaseconfig";
import { onAuthStateChanged, User, signOut } from "firebase/auth";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Inicio | OVA-Física Mecánica</title>
      </Head>

      <section className="py-10 pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bienvenida */}
        <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-6 pt-4">
            <h1 className="text-3xl font-bold leading-tight mb-4 text-black">
              ¡Bienvenidos a esta OVA sobre física mecánica!
            </h1>
            <p className="text-gray-700">
              En este curso podrás aprender los conceptos básicos de la física
              mecánica y cómo aplicarlos en la resolución de problemas. La
              mecánica es una rama fundamental de la física, que nos permite
              entender el movimiento de los objetos y las leyes que lo rigen. En
              esta OVA, abordaremos temas como la cinemática, las leyes de
              Newton y la energía mecánica, entre otros. Espero que disfruten de
              este curso y que puedan aplicar lo aprendido en su vida diaria y
              en su formación académica. ¡Comencemos!
            </p>
            <img
              src="https://departamentmathcoestehaw.files.wordpress.com/2018/09/fisica-mecanica.jpg?w=640"
              alt="Física mecánica"
              className="mx-auto my-4"
            />
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Unidad 1 */}
            <Link
              href="/primeraUnidad"
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Unidad 1
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    ¡Vamos a ponernos manos a la obra! esta unidad será una
                    introducción a los temas básicos para el aprendizaje de la
                    física mecánica, aquí empezaran tus cimientos para poder
                    seguir con los temas más complejos. ¡Comencemos a explorar
                    el fascinante mundo de la mecánica!
                  </p>
                  <img
                    src="https://danielabg.files.wordpress.com/2014/08/finde-cientifico.jpg"
                    alt="Física mecánica"
                    className="mx-auto my-4"
                  />
                </div>
              </div>
            </Link>

            {/* Unidad 2 */}
            <Link
              href="/segundaUnidad"
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Unidad 2
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    ¡Sigamos avanzando! esta unidad te prepara para hacer cosas
                    más complejas en el mundo de la física, como ejercicios de
                    MRU y demás, continuaremos cimentando tus conocimientos de
                    la anterior unidad, para que así puedas continuar tu camino
                    en la física mecánica!
                  </p>
                  <img
                    src="https://previews.123rf.com/images/seamartini/seamartini1602/seamartini160200065/51856839-s%C3%ADmbolos-de-la-ciencia-de-la-f%C3%ADsica-tales-como-im%C3%A1n-energ%C3%ADa-el%C3%A9ctrica-modelo-del-%C3%A1tomo-el-campo.jpg"
                    alt="Física mecánica"
                    className="mx-auto my-4"
                  />
                </div>
              </div>
            </Link>

            {/* Unidad 3 */}
            <Link
              href="/terceraUnidad"
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Unidad 3
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    ¡Subamos el escalón final! en esta unidad terminar de
                    afianzar todos tus conocimientos adquiridos en las secciones
                    anteriores, necesitaras poner en práctica todo lo aprendido
                    en las unidades anteriores, así que prepárate para afianzar
                    y poner en práctica todos tus conocimientos
                  </p>
                  <img
                    src="https://media.istockphoto.com/id/1274320612/pt/vetorial/physics-or-education-seamless-pattern-icons-and-formulas-background-atomic-nuclear.jpg?s=612x612&w=0&k=20&c=_HALRV4I5QFYSJTHFaqXk6Aq5JOSvAXqi90fQpss6aw="
                    alt="Física mecánica"
                    className="mx-auto my-4"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
