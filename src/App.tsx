import Quiz from "./quiz/quiz";

const sampleQuestions = [
  {
    question: "Chan's algorithm is used for computing: ",
    options: ["Shortest path between two points", "Convex hull", "Area of a polygon", "Closest distance between two points"],
    correctAnswer: "Convex hull",
    explanation: "Chan's algorithm is an output-sensitive algorithm used to compute the convex hull set of n points in a 2D or 3D space. Closest pair algorithm is used to compute the closest distance between two points.",
  },
  {
    question: " Dijkstra’s algorithm cannot be applied on:",
    options: ["Directed and weighted graphs", "Container of objects of similar types", "Container of objects of mixed types", "All of the mentioned"],
    correctAnswer: "Container of objects of similar types",
    explanation: "Container of objects of similar types",
  },
  {
    question: "What is the order of growth of Dijkstra's algorithm if we use an ordered array for the PQ? Assume there are no self-edges or parallel edges.",
    options: ["V", "EV", "V²", "E(logV)"],
    correctAnswer: "EV",
    explanation: "With respect to the PQ, there are V insert operations, V delete-min operations, and E decrease-key operations. The PQ is at most size V.",
  }
];

function App() {
  return (
    <div className="App">
      <Quiz questions={sampleQuestions} />
    </div>
  );
}

export default App;