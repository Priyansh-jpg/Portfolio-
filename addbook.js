import React, { useState } from "react";

const Book_Form = () => {
  const [formData, setFormData] = useState({
    booktitle: "",
    PubYear: "",
    author: "",
    Topic: "",
    formate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Book Title:</label>
        <input type="text" name="booktitle" value={formData.booktitle} onChange={handleChange} />
      </div>
      <div>
        <label>Publication Year:</label>
        <input type="number" name="PubYear" value={formData.PubYear} onChange={handleChange} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} />
      </div>
      <div>
        <label>Topic:</label>
        <select name="Topic" value={formData.Topic} onChange={handleChange}>
          <option value="Computer Science">Computer Science</option>
          <option value="Programming">Programming</option>
          <option value="Data Science">Data Science</option>
        </select>
      </div>
      <div>
        <label>Format:</label>
        <input type="text" name="formate" value={formData.formate} onChange={handleChange} />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Book_Form;
