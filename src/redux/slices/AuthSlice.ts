import { createSlice } from "@reduxjs/toolkit"

interface IState {

}

const initialState: IState = {

}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // leaveRoom(state, action: PayloadAction<any>) {
        //     state.hotels = state.hotels.map((i: IHotel) => { return { ...i, isHover: false }; })
        //   },
    }
})


export default AuthSlice.reducer