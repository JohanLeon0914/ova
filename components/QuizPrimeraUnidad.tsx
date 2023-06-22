import { useEffect, useState } from "react";
import Question from "./Question";
import questionsjson from "../public/primeraUnidad/examenPrimeraUnidad.json";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { User } from "firebase/auth";
import {
  getDocs,
  collection,
  doc,
  updateDoc,
  getFirestore,
  addDoc
} from "firebase/firestore";
import { firebaseApp } from "../firebaseconfig";
import { auth } from "../firebaseconfig";

interface DocData {
  email: string | null | undefined;
  notes: number[];
}

interface Doc {
  id: string;
  notes: number[];
  email: string | null | undefined;
}

const questions = questionsjson;

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [user]);

  const handleAnswer = async (answer: string) => {
    if (answer === questions[currentQuestion].answer) {
      Swal.fire({
        icon: "success",
        title: "¡Buen trabajo!",
        text: "Correcto",
      });
      setScore(score + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "La respuesta correcta es: " + questions[currentQuestion].answer,
      });
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const db = getFirestore(firebaseApp);
      const querySnapshot = await getDocs(collection(db, "users"));
      const documents: Doc[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as DocData;
        documents.push({ ...data, id: doc.id });
      });
      const docWithMatchingEmail: Doc | undefined = documents.find(
        (doc) => doc.email === user?.email
      );
      if (docWithMatchingEmail) {
        const docRef = doc(db, "users", docWithMatchingEmail.id);

        try {
          const existingNotes = docWithMatchingEmail.notes; // Obtener el arreglo actual de notas

          // Actualizar la segunda posición del arreglo
          existingNotes[0] = Math.round((score / questions.length) * 5);
          // Actualizar el documento en Firestore
          await updateDoc(docRef, { notes: existingNotes });

          Swal.fire({
            title: `Examen terminado. Tu puntaje es ${score}/${questions.length}`,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              router.push("/primeraUnidad");
            }
          });
        } catch (error) {
          console.error("Error al actualizar las notas:", error);
        }
      } else {
        const note = Math.round((score / questions.length) * 5);
        let docData: DocData = {
            email: user?.email,
            notes: [note, 0, 0]
        };
        await addDoc(collection(db, "users"), {
            ...docData
        })
        Swal.fire({
          title: `Examen terminado. Tu puntaje es ${score}/${questions.length}`,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/primeraUnidad");
          }
        });
          router.push("/primeraUnidad");
      }
    }
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          choices={questions[currentQuestion].choices}
          answer={questions[currentQuestion].answer}
          onAnswer={handleAnswer}
        />
      ) : (
        "null"
      )}
    </div>
  );
};

export default Quiz;
