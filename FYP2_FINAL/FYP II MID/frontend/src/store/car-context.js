import { createContext } from "react";

const CarContext = createContext({
  userInfo: null,
  setUserInfo: () => {},
});

export default CarContext;
