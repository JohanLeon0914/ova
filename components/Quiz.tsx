import { useState } from 'react';
import Question from './Question';
import questionsjson from "../public/segundaUnidad/examen.json";
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import * as Tone from 'tone';
  
const questions = questionsjson;
  
const Quiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const router = useRouter();
    const correctSound = new Tone.Player('/sounds/correct.mp3').toDestination();
  
    const handleAnswer = (answer: string) => {
        if (answer === questions[currentQuestion].answer) {
            correctSound.start()
            Swal.fire({
                icon: 'success',
                title: '¡Buen trabajo!',
                text: 'Correcto'
              });
            setScore(score + 1);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: "La respuesta correcta es: " + questions[currentQuestion].answer
              });
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            Swal.fire({
                title: `Examen terminado. tu puntaje es ${score}/${questions.length}`,
                confirmButtonText: 'Ok',
              }).then((result) => {
                if (result.isConfirmed) {
                  router.push('/segundaUnidad')
                }
              })
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
            ) : "null"
            }
        </div>
    )
}
  
export default Quiz;