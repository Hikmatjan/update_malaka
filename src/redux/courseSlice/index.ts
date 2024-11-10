import { createSlice } from "@reduxjs/toolkit";

const initialState: { selectedCourse: any; activeCourse: any } = {
	selectedCourse: null,
	activeCourse: {
		index: 0,
	},
};

const courseSlice = createSlice({
	name: "courseAction",
	initialState,
	reducers: {
		setSelectedCourse(state, { payload }) {
			state.selectedCourse = payload;
		},
		setActiveCourse(state, { payload }) {
			state.activeCourse = payload;
		},
	},
});
export default courseSlice.reducer;
export const { setSelectedCourse, setActiveCourse } = courseSlice.actions;
