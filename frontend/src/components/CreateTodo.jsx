import { useState } from "react";

export function CreateTodo() {
  // react query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        id="title"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        id="description"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              contentType: "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("todo added");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
