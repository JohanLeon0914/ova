import { useEffect, useState } from "react";
import Question from "./Question";
import questionsjson from "../public/terceraUnidad/examenTerceraUnidad.json";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { firebaseApp } from "../firebaseconfig";
import { User } from "firebase/auth";
import { auth } from "../firebaseconfig";
import {
  getDocs,
  collection,
  doc,
  updateDoc,
  getFirestore,
} from "firebase/firestore";
interface DocData {
  email: string;
  notes: number[];
}

interface Doc {
  id: string;
  notes: number[];
  email: string;
}

const questions = questionsjson;

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

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
          existingNotes[2] = Math.round((score / questions.length) * 5);
          // Actualizar el documento en Firestore
          await updateDoc(docRef, { notes: existingNotes });

          Swal.fire({
            title: `Examen terminado. Tu puntaje es ${score}/${questions.length}`,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              router.push("/terceraUnidad");
            }
          });
        } catch (error) {
          console.error("Error al actualizar las notas:", error);
        }
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
