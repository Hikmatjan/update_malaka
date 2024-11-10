import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./ModalSlice";
import courseSlice from "./courseSlice";
const store = configureStore({
	reducer: {
		modal: ModalSlice,
		course: courseSlice,
	},
});
export default store;
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
