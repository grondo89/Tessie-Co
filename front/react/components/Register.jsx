import React from "react";

export default ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <div
        className="modal fade"
        id="modalRegisterForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  <i className="fas fa-user prefix grey-text" />
                  <input
                    name="name"
                    id="orangeForm-name"
                    className="form-control validate"
                    placeholder="Your name"
                    onChange={handleChange}
                  />
                </div>
                <div className="md-form mb-5">
                  <i className="fas fa-user prefix grey-text" />
                  <input
                    name="lastname"
                    id="orangeForm-surname"
                    className="form-control validate"
                    placeholder="Your surname"
                    onChange={handleChange}
                  />
                </div>
                <div className="md-form mb-5">
                  <i className="fas fa-envelope prefix grey-text" />
                  <input
                    type="email"
                    name="email"
                    id="orangeForm-email"
                    className="form-control validate"
                    placeholder="Your email"
                    onChange={handleChange}
                  />
                </div>

                <div className="md-form mb-4">
                  <i className="fas fa-lock prefix grey-text" />
                  <input
                    type="password"
                    name="password"
                    id="orangeForm-pass"
                    className="form-control validate"
                    placeholder="Your password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-deep-orange"
                  data-toggle="modal"
                  data-target="#modalRegisterForm"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
