import { useState } from "react";
import { db } from "../utils/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import styled from "styled-components";
import Button from "./Button";

const AddTodoForm = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 15px 20px;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  margin-bottom: 1.2rem;
  box-shadow: 0px 20px 30px -10px ${({ theme }) => theme.shadow};

  @media screen and (min-width: 768px) {
  }
`;

const AddTodoInput = styled.input`
  width: 100%;
  line-height: 1.5;
  font-family: "Josefin Sans", sans-serif;
  font-size: 14px;
  border: none;
  outline: none;
  background: transparent;
`;

function AddTodo() {
  const [value, setValue] = useState("");

  /* function to add new todo to firestore */
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "todos"), {
        value: value,
        completed: false,
        created: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
    }
    setValue("");
  };

  return (
    <AddTodoForm onSubmit={handleAdd} name="addTodo">
      <AddTodoInput
        type="text"
        name="value"
        placeholder="Create a new todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button btnType="Add" />
    </AddTodoForm>
  );
}

export default AddTodo;
