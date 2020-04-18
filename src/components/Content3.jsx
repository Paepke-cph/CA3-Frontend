import React, { useState, useContext } from "react";
import { StateContext } from "../contexts/StateContext";

export default function Content3() {
  const emptyObject = { name: "", age: 0, email: "" };
  const [object, setObject] = useState(emptyObject);
  const {
    stateObjects,
    addState,
    RemoveState,
    undoState,
    redoState,
    isPast,
    isFuture
  } = useContext(StateContext);

  const handleChange = ({ target }) => {
    setObject({ ...object, [target.id]: target.value });
  };

  const handleSubmit = () => {
    addState(object);
  };

  const handleRemove = id => {
    RemoveState(id);
  };

  return (
    <React.Fragment>
      <h1>Content 3</h1>
      <h2>Advanced State management</h2>
      <button onClick={undoState} disabled={!isPast}>
        Undo
      </button>
      <button onClick={redoState} disabled={!isFuture}>
        Redo
      </button>
      <form>
        <label>name</label>
        <input
          id="name"
          type="text"
          value={object.name}
          onChange={handleChange}
        />
        <label>age</label>
        <input
          id="age"
          type="Number"
          value={object.age}
          onChange={handleChange}
        />
        <label>email</label>
        <input
          id="email"
          type="text"
          value={object.email}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Add</button>
      </form>
      <ul>
        {stateObjects.map((obj, index) => (
          <React.Fragment key={obj.id}>
            <li>
              name: {obj.name}, age: {obj.age}, email:{obj.email}
            </li>
            <button
              onClick={() => {
                handleRemove(obj.id);
              }}
            >
              Remove
            </button>
          </React.Fragment>
        ))}
      </ul>
    </React.Fragment>
  );
}
