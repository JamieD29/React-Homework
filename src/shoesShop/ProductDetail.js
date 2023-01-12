import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { name, price, image, description, quantity } =
      this.props.selectedProduct;
    return (
      <div
        class="modal fade"
        id="detailModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                {name}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body ">
              <div className="row">
                <div className="col-5">
                  <img src={image} className='w-100' alt="prod.jpg"></img>
                </div>
                <div className="col-7">
                  <h4>Giá: ${price}</h4>
                  <hr />
                  <h4>
                    Mô tả: <span className="fw-normal fs-5">{description}</span>{" "}
                  </h4>
                  <hr />
                  <h4>Số lượng: {quantity}</h4>
                  <hr />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
