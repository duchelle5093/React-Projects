import React, { useState } from "react";


function Form(props) {

    const [name, setName] = useState('');


    function handleSubmit(e) {
            e.preventDefault();
            props.addTask(name);
            setName('')
    }

    function handleChange(e){
        setName(e.target.value)
    }
        

  return (
    <form onSubmit={handleSubmit}>
      <h2 >
        <label htmlFor="new-todo-input">Qu'y a-t-il à faire ?</label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />

      <button type="submit"  >
        Ajouter
      </button>
    </form>
  );
}

export default Form;
