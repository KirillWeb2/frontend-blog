import { createSlice } from '@reduxjs/toolkit'

interface IState {
}

const initialState: IState = {
}

export const NewsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        // leaveRoom(state, action: PayloadAction<any>) {
        //     state.hotels = state.hotels.map((i: IHotel) => { return { ...i, isHover: false }; })
        // },
    }
})
export default NewsSlice.reducer