//default state

const initialState = {
  danhSach: [{ id: 1 }, { id: 2 }],
};

export const demoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // if(type == "CHANGE_NAME"){
  //     state = payload;
  // }

  switch (type) {
    case "CHANGE_NAME": {
      let danhSach = [...state.danhSach];

      danhSach.push({ id: payload });

      //spread operator
      return { ...state, danhSach };
    }

    case "CHANGE_PASSWORD": {
      state.id += payload;
      return state;
    }
    default: {
      return state;
    }
  }
};

//store user

//store giỏ hàng
