import React, { Component } from "react";

export default class Cart extends Component {
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
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td><img src="" alt="prod.jpg"></img></td>
                        <td>Adidas</td>
                        <td>
                        <div className="d-flex">
                        <button className="btn btn-info">-</button>
                        <span className="mx-3 d-flex align-items-center">2</span>
                        <button className="btn btn-info">+</button>
                        </div>

                        </td>
                        <td>$200</td>
                        <td>$1000</td>
                        <td>
                            <button className="btn btn-danger">Xoá</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button type="button" className="btn btn-primary">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
