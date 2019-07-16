import React from "react";

const button = {
  display: "block",
  margin: "auto"
};

const letters = {
  fontSize: "20px"
};
const title = {
  textAlign: "center",
  fontSize: "56px"
};

export default ({ handleChange, handleSubmit, cat, handleCatChange }) => {
  return (
    <div className="container">
      <h1 style={title}>Agregar Productos</h1>

      <form
        onSubmit={e => {
          handleSubmit(e);
          document
            .querySelectorAll(".form-control")
            .forEach(input => (input.value = ""));
        }}
      >
        <div className="form-group row">
          <label style={letters} className="col-sm-2 col-form-label">
            Nombre
          </label>
          <div className="col-sm-10">
            <input
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label style={letters} className="col-sm-2 col-form-label">
            Precio
          </label>
          <div className="col-sm-10">
            <input
              name="price"
              onChange={handleChange}
              type="number"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label style={letters} className="col-sm-2 col-form-label">
            Stock
          </label>
          <div className="col-sm-10">
            <input
              name="stock"
              type="number"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label style={letters} className="col-sm-2 col-form-label">
            Descripcion
          </label>
          <div className="col-sm-10">
            <input
              name="description"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label style={letters} className="col-sm-2 col-form-label">
            Imagenes (Links)
          </label>
          <div className="col-sm-10">
            <input
              name="images"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <label style={letters} className="col-sm-2 col-form-label">
            Categorias del producto
          </label>
          <select className="selectpicker" multiple onChange={handleCatChange}>
            {cat.length &&
              cat.map(cati => (
                <option key={cati.id} value={cati.name}>
                  {cati.name}
                </option>
              ))}
          </select>
        </div>

        <br />
        <br />
        <br />
        <div>
          <button
            style={button}
            type="submit"
            className="btn btn-primary btn-lg"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};
