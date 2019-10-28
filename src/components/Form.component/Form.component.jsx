import React from "react";

import "./form-styles.css";

function Form({ jmeno, receptPopis, email, nazev, handleChange }) {
  return (
    <form id="form-menu-link" className="form-container">
      <div className="form-column">
        <input
          type="text"
          name="nazev"
          value={nazev}
          onChange={handleChange}
          placeholder="zadejte název receptu"
        />
        <input
          type="text"
          name="jmeno"
          value={jmeno}
          onChange={handleChange}
          placeholder="zadejte vaše jméno"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="zadejte váš email"
        />
        <textarea
          id=""
          className="form-textarea"
          cols="30"
          rows="10"
          value={receptPopis}
          onChange={handleChange}
          name="receptPopis"
          placeholder="zadejte recept"
        ></textarea>
      </div>
      <button className="form-submit">Odeslat</button>
    </form>
  );
}

export default Form;
