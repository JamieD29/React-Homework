//default state

const initialState = {
    cart: [ ]
       
};
  
  export const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    // if(type == "CHANGE_NAME"){
    //     state = payload;
    // }
  
    switch (type) {
        case "THEM_GIO_HANG":{
            let cart = [...state.cart];

            cart.push({...payload, quanity: 1});
            
            

            return {...state, cart};
        }
      default: {
        return state;
      }
    }
  };
  
// Khi nào dùng state, props => với 2 tầng 

// Khi nào dùng store redux