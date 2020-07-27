import React from "react";

const Form = ({ input, setInput, handleSubmit }) => {
  // Récupérer le texte rentré dans le formulaire
  const handleInput = (event) => {
    const value = event.target.value;

    // Mise à jour de l'input
    setInput(value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label for="input">Ajoutez une tâche</label>
      <div className="inputContainer">
        <input
          type="text"
          name="input"
          placeholder="Sortir les poubelles"
          onChange={handleInput}
          value={input}
        />
        <button type="submit">Add task</button>
      </div>
    </form>
  );
};

export default Form;
