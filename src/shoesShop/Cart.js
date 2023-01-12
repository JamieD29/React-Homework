import React, { Component } from "react";

export default class Cart extends Component {
  countTotal = () => {
    return this.props.cart.reduce((prevValue, item) => {
      return prevValue + item.quantity * item.product.price;
    }, 0)
  };

  

  renderCartItem = () => {
    return this.props.cart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{(index += 1)}</td>
          <td>
            <img src={item.product.image} className="w-50" alt="prod.jpg"></img>
          </td>
          <td>{item.product.name}</td>
          <td>
            <div className="d-flex">
              <button
                className="btn btn-info"
                onClick={() => this.props.decreaseQuantity(item.product.id)}
              >
                -
              </button>
              <span className="mx-3 d-flex align-items-center">
                {item.quantity}
              </span>
              <button
                className="btn btn-info"
                onClick={() => this.props.increaseQuantity(item.product.id)}
              >
                +
              </button>
            </div>
          </td>
          <td>{item.product.price}</td>
          <td>{item.product.price * item.quantity}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteCartItem(item.product.id)}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Giỏ hàng
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Hình ảnh</th>
                    <th>Tên</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderCartItem()}</tbody>
              </table>

              <h2>Tổng tiền: {this.countTotal()}</h2>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button type="button" className="btn btn-primary" onClick={()=>this.props.checkout(this.countTotal())}>
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
