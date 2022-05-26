import {createReducer} from "@reduxjs/toolkit";

export const isAdminReducer = createReducer('', (builder) => {
	builder
		.addCase('ADMIN_IS_FALSE', (state, action) => {
			// state.
		})
})