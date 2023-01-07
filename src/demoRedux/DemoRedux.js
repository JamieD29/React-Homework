import React, { Component } from "react";

//BƯỚC 1:
import { connect } from "react-redux";

class DemoRedux extends Component {
  render() {

    const {demoRedux, dispatch} = this.props;

   
    return (
      <h1 className="text-center">
        DemoRedux <br />
        {demoRedux.map((item, index)=> <span key={index}>{item.id} <br /> </span>)}
        <br />
        <button
          onClick={
            () => dispatch({
              //Type dùng để phân biệt loại dữ liệu đưa lên store
              //payload là dữ liệu để đưa lên
              type: "CHANGE_NAME",
              payload: 3,
            })
          }
        >
          Show
        </button>
      </h1>
    );
  }
}

//BƯỚC 2:
const mapStateToProps = (state) => {
  return {
    demoRedux: state.demoReducer.danhSach,
    cart: state.cartReducer
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeName: () => {
//       //nhận vào obj có 2 thuộc tính
//       // type, data
//       //giống setState(){}
//       dispatch({
//         type: "type",
//         data: "data ",
//       });
//     },
//   };
// };

//BƯỚC 3 VÀ 4:
export default connect(mapStateToProps, null)(DemoRedux);

//B1: import hàm connect từ thư viện react-redux
//B2: tạo hàm mapStateToProps => lấy dữ liệu từ store chung redux về component
//B3: gọi hàm connect truyền vào 2 tham số ở 2 hàm
//  + Hàm 1: mapStateToProps, null
//  + Hàm 2: tên của component
//B4: đưa export default phía trên class component xuống trước hàm connect
