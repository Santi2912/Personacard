import React, { useState, useEffect } from "react";

interface PersonFormProps {
  onSubmit: (person: {
    id?: number;
    name: string;
    role: string;
    description: string;
    image: string;
  }) => void;
  personToEdit?: {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
  } | null;
  onCancel?: () => void;
}

const PersonForm: React.FC<PersonFormProps> = ({
  onSubmit,
  personToEdit,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (personToEdit) {
      setFormData(personToEdit);
    }
  }, [personToEdit]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", role: "", description: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Rol
        </label>
        <input
          type="text"
          id="role"
          name="role"
          className="form-control"
          value={formData.role}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          className="form-control"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Imagen URL
        </label>
        <input
          type="text"
          id="image"
          name="image"
          className="form-control"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success me-2">
        {personToEdit ? "Actualizar" : "Agregar"}
      </button>
      {onCancel && (
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default PersonForm;
