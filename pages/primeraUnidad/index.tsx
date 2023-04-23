import Layout from "@/components/Layout";
import Head from "next/head";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Unidad-1</title>
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
      </main>
    </Layout>
  );
}
