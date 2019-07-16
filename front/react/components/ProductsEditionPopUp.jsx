import React from "react";

export default props => (
  <div>
    <div
      className="modal fade"
      id={`modalSubscriptionForm${props.id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">
              Edit selected product ({props.id})
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body mx-3">
            <div className="md-form mb-5">
              <i className="fa fa-gear mr-5" />
              <input
                type="text"
                name="name"
                id="form3"
                placeholder="Product Name"
                className="form-control validate"
                onChange={props.handleChange}
              />
            </div>
            <div className="md-form mb-5">
              <i className="fa fa-gear mr-5" />
              <input
                type="text"
                name="stock"
                id="form3"
                placeholder="Stock"
                className="form-control validate"
                onChange={props.handleChange}
              />
            </div>
            <div className="md-form mb-5">
              <i className="fa fa-gear mr-5" />
              <input
                type="text"
                name="price"
                id="form3"
                placeholder="Price"
                className="form-control validate"
                onChange={props.handleChange}
              />
            </div>
            <div className="md-form mb-5">
              <i className="fa fa-gear mr-5" />
              <input
                type="text"
                name="description"
                id="form3"
                placeholder="Description"
                className="form-control validate"
                onChange={props.handleChange}
              />
            </div>
            <div className="md-form mb-5">
              Categories:{" "}
              <select
                className="selectpicker"
                multiple
                onChange={props.handleCatChange}
              >
                {props.cat.length &&
                  props.cat.map(cati => (
                    <option key={cati.id} value={cati.name}>
                      {cati.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div
            className="modal-footer d-flex justify-content-center"
            data-toggle="modal"
            data-target="#modalSubscriptionForm"
          >
            <button className="btn btn-indigo" onClick={props.handleSubmit}>
              Send <i className="fas fa-paper-plane-o ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
