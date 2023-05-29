interface Props {
    question: string;
    choices: string[];
    answer: string;
    onAnswer: (answer: string) => void;
}
  
const Question: React.FC<Props> = (
    { question, choices, answer, onAnswer }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg text-black">
                <h2 className="text-xl font-bold mb-4">{question}</h2>
                <div className="">
                    {choices.map((choice, index) => (
                        <button className="bg-green-500 text-white rounded px-4 py-2 m-2" 
                            key={index}
                            onClick={() => onAnswer(choice)}>
                                            {choice}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};
  
export default Question;