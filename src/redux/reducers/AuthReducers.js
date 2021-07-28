const INITIAL_STATE = {
  id: 0,
  is_verified: 0,
  islogin: false,
  loading: false,
  cart: [],
  transaction: [],
  role: "",
  error: "",
  password: "",
  sendemail: "",
  emailOrUsername: "",
};

const AuthReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        ...action.payload,
        islogin: true,
        loading: true,
        error: ""
      };
    case "ERROR":
      return { ...state, error: action.error, loading: false };
    case "EMAIL":
      return { ...state, sendemail: action.mess, loading: false };
    case "LOGOUT":
      return INITIAL_STATE;
    case "LOADING":
      return { ...state, loading: true };
    case "RESET":
      return { ...state, error: "", sendemail: "", loading: false };
    case "UPDATECART":
      return { ...state, cart: action.cart };
      case "UPDATETRANSACTION":
      return { ...state, transaction: action.transaction };
    default:
      return state;
  }
};

export default AuthReducers;