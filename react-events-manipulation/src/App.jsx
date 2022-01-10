import React from "react";
import "./styles.css";

const listCustumer = [
  {
    id: 1,
    name: "Rian Bispo",
    skills: ['React', 'CSS', 'Node']
  },
  {
    id: 2,
    name: "Caio Marques",
    skills: ['Java', 'Spring', 'Go']

  },
  {
    id: 3,
    name: "Fernada Souza",
    skills: ['HTML', 'Python', 'CSS']

  },
  {
    id: 4,
    name: "Amanda Lima",
    skills: ['VUE', 'TypeScrpt']
  },
]

const App = () => {

  const handleClick = (e, id) => {
    console.log('Deletar Cliente');
    alert(`ID do cliente: ${id}`)
  }

  const deleteButton = <button onClick={(e) => handleClick(e, listCustumer.id)}>Deletar Cliente X</button>
  
  const renderCustumers = (custumer, index) => {
    return (
      <div key={`custumer: ${custumer.id}`}>
        <li >{custumer.name} {deleteButton}</li>
        {custumer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div className="skills" key={`skill: ${index}`}>
          <li >{skill}</li>
      </div>
    )
  }
    
  return (
    <div>
      <h2>Lists & Keys:</h2>
      <div>
        <ul>
          {listCustumer.map(renderCustumers)}
        </ul>
      </div>
    </div>
  );
};

export default App;