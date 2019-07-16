import React from "react";

export default props => {
  return (
    <div>
      <div
        className="modal fade"
        id="modalLoginForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={props.handleSubmit}>
              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  <i className="fas fa-envelope prefix grey-text" />
                  <input
                    type="email"
                    id="defaultForm-email"
                    placeholder="Your email"
                    className="form-control validate"
                    onChange={props.handleChange}
                  />
                </div>

                <div className="md-form mb-4">
                  <i className="fas fa-lock prefix grey-text" />
                  <input
                    type="password"
                    id="defaultForm-pass"
                    placeholder="Your password"
                    className="form-control validate"
                    onChange={props.handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-default"
                  data-toggle="modal"
                  data-target="#modalLoginForm"
                  style={{ backgroundColor: "#113692" }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
