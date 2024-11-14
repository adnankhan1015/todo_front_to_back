import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos").then(async function (res) {
  //   const json = await res.json();
  //   console.log("json", json);
  //   setTodos(json.todos);
  // });

  console.log("todos", todos);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
