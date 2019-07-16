import React from "react";

export default props => (
  <div>
    <div
      className="modal fade"
      id="modalSubscriptionForm"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">
              Add one category
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
                id="form3"
                placeholder="Add one category!"
                className="form-control validate"
                onChange={props.handleChange}
              />
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              className="btn btn-indigo"
              onClick={() => {
                props.handleSubmit();
                document.getElementById("form3").value = "";
              }}
            >
              Send <i className="fas fa-paper-plane-o ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
