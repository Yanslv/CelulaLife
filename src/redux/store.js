import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme.js";

export default configureStore({
  reducer: {
    theme: theme
  }
});