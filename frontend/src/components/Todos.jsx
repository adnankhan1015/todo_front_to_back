/***
 * todos = [
 * {
 *  title: '32432'
 * description: 'sdfdsffsd'
 * }
 * ]
 *
 *
 */

export function Todos({ todos }) {
  console.log("todos", todos);

  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed === true ? "Completed" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
