// Imports
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faListAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faListAlt);

function App() {
  // Déclaration des states
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Ajouter la tâche entrée dans le formulaire dans le tableau de tâches
  const handleSubmit = (event) => {
    // Annule le rafraîchissiment auto
    event.preventDefault();

    // Modèle de tâche
    const newTask = {
      name: "",
      isDone: false,
    };

    // Création d'une copie du tableau
    const newArray = [...tasks];

    // Passer le texte entré dans le formulaire à l'objet tâche
    newTask.name = input;

    // Pousser la tâche dans la copie du tableau
    newArray.push(newTask);

    // Mettre à jour le tableau avec la copie de celui-ci
    setTasks(newArray);

    // Remettre à 0 le formulaire
    setInput("");
  };

  // Modifier la valeur de la clé isDone à l'index donné
  const handleCheckBox = (index) => {
    // Copie du tableau
    const newTasks = [...tasks];

    // La valeur de la clé sera égale à son inverse
    newTasks[index].isDone = !newTasks[index].isDone;

    // Mise à jour du tableau avec la copie
    setTasks(newTasks);
  };

  // Supprimer l'élément du tableau à l'index donné
  const handleTrash = (index) => {
    // Copie du tableau
    const newTasks = [...tasks];

    // Utilisation de splice()
    newTasks.splice(newTasks.indexOf(newTasks[index]), 1);

    // Mise à jour du tableau avec la copie
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Header className="header" title="To-do List" />
      <div className="container">
        <Task
          tasks={tasks}
          handleCheckBox={handleCheckBox}
          handleTrash={handleTrash}
        />
        <Form input={input} setInput={setInput} handleSubmit={handleSubmit} />
      </div>
      <Footer
        className="footer"
        technoLink="https://fr.reactjs.org/"
        technoName="React"
        companyLink="https://www.lereacteur.io"
        companyName="le Reacteur"
        authorLink="https://github.com/TomPerrau94"
        authorName="Tom Perrau"
      />
    </div>
  );
}

export default App;
