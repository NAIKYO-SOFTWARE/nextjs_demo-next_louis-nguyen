import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
    taskName: string;
    color: string;
}
const initialState: CounterState[] = [];

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<CounterState>) => {
            state.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
