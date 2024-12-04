import React from "react";

interface PersonCardProps {
  person: {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
  };
  onDelete: (id: number) => void;
  onEdit: (person: PersonCardProps["person"]) => void;
}

const PersonCard: React.FC<PersonCardProps> = ({
  person,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="card mb-3">
      <img src={person.image} className="card-img-top" alt={person.name} />
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <p className="card-text">{person.role}</p>
        <p className="card-text">{person.description}</p>
        <button className="btn btn-primary me-2" onClick={() => onEdit(person)}>
          Editar
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(person.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
