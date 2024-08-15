import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({ marca: '', nombre: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.marca.trim()) newErrors.marca = 'Marca is required';
    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Marca:
          <input
            type="text"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
          />
        </label>
        {errors.marca && <span style={{ color: 'red' }}>{errors.marca}</span>}
      </div>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
        {errors.nombre && <span style={{ color: 'red' }}>{errors.nombre}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;