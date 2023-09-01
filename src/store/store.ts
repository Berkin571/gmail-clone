import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "../service/mailSlice";

export default configureStore({
  reducer: {
    mail: mailSlice,
  },
});
