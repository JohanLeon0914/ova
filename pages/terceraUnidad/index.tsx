import Layout from "@/components/Layout";
import Head from "next/head";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Unidad-3</title>
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
                ¡Bienvenidos a la tercera unidad de la materia de Física
                Mecánica! En esta unidad, continuaremos nuestro estudio de la
                mecánica y nos enfocaremos en la dinámica de los cuerpos y las
                leyes que rigen su movimiento. En esta unidad, estudiaremos la
                fuerza y el movimiento circular, incluyendo el movimiento
                armónico simple (MAS) y el movimiento oscilatorio. También
                exploraremos el concepto de momentum y la conservación de la
                cantidad de movimiento, lo que nos permitirá entender cómo
                interactúan los cuerpos en colisiones y en situaciones donde hay
                fuerzas externas que actúan sobre ellos. Además, en esta unidad,
                estudiaremos los conceptos de trabajo y energía, incluyendo la
                ley de conservación de la energía mecánica, la energía potencial
                y la energía cinética. También estudiaremos la ley de
                conservación del momentum, que nos permitirá entender cómo se
                transfieren las fuerzas y la cantidad de movimiento en
                diferentes situaciones. Por último, en esta unidad, estudiaremos
                el concepto de torque y la rotación de los cuerpos rígidos.
                Conoceremos las leyes de la dinámica rotacional, incluyendo la
                ley de inercia rotacional y la ley de acción y reacción
                rotacional, y cómo se relacionan con la conservación del
                momentum angular. Espero que disfruten de esta tercera unidad y
                que puedan aplicar lo aprendido en su vida diaria y en su
                formación académica. ¡Sigamos explorando el fascinante mundo de
                la mecánica!
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
