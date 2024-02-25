import { useState } from 'react';

// TODO: Fix error, good luck have fun!!!
function ProductForm() {
  const [questions, setQuestions] = useState([
    { id: 1, question: '', answer: '' },
  ]);

  const addQuestion = () => {
    const newId = questions.length + 1;
    setQuestions([...questions, { id: newId, question: '', answer: '' }]);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleQuestionChange = (id, value, isQuestion = true) => {
    const newQuestions = questions.map((q) => {
      if (q.id === id) {
        return isQuestion ? { ...q, question: value } : { ...q, answer: value };
      }
      return q;
    });
    setQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Concatenate questions and answers into a single string
    const formattedData = questions
      .map(
        (q, index) =>
          `Q${index + 1}: ${q.question}\nA${index + 1}: ${q.answer}`,
      )
      .join('\n');

    console.log(formattedData); // For demonstration purposes

    // Replace 'your-backend-endpoint' with your actual backend route
    fetch('http://localhost:3000/', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formattedData }),
    })
      .then((response) => response)
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-2xl mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Product Q&A Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map(({ id, question, answer }) => (
          <div key={id} className="flex flex-col space-y-4 mb-4">
            <input
              type="text"
              value={question}
              onChange={(e) => handleQuestionChange(id, e.target.value, true)}
              placeholder="Question"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              value={answer}
              onChange={(e) => handleQuestionChange(id, e.target.value, false)}
              placeholder="Answer"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="button"
              onClick={() => removeQuestion(id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Remove Q&A
            </button>
          </div>
        ))}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={addQuestion}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Q&A
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
