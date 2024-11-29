import { createSlice} from "@reduxjs/toolkit"

const initialstate = {
  user: null,
  token: null
}

export const userSlice = createSlice({
  name: "user",
  initialstate,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setLogout: (state) =>{
      state.user = null,
      state.token = null
    }
  }
})

export const { setLogin, setLogout } = userSlice.actions
export default userSlice.reducer