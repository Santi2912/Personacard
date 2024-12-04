import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonCard from "./components/PersonaCard";
import PersonForm from "./components/PersonForm";

interface Person {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [editingPerson, setEditingPerson] = useState<Person | null>(null);

  const addPerson = (person: Omit<Person, "id">) => {
    setPeople([...people, { id: Date.now(), ...person }]);
  };

  const deletePerson = (id: number) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const updatePerson = (updatedPerson: Person) => {
    setPeople(
      people.map((person) =>
        person.id === updatedPerson.id ? updatedPerson : person
      )
    );
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Gestión de Personas</h1>
      <PersonForm
        onSubmit={editingPerson ? updatePerson : addPerson}
        personToEdit={editingPerson}
        onCancel={() => setEditingPerson(null)}
      />
      <div className="row">
        {people.map((person) => (
          <div className="col-md-4" key={person.id}>
            <PersonCard
              person={person}
              onDelete={deletePerson}
              onEdit={setEditingPerson}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
