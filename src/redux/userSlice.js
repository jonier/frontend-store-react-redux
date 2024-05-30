import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: null,
    userName: null,
    firstName: null,
    lastName: null,
    // photo: null,
    // address: null,
    // telephone: null,
    // active: true
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { email, userName, firstName, lastName } = action.payload
            state.email = email
            state.userName = userName
            state.firstName = firstName
            state.lastName = lastName
            // state.photo = photo
            // state.address = address
            // state.telephone = telephone
            // state.active = active
        },
        editUser: (state, action) => {
            console.log('Este es el payload: ', action)
            state[action.payload.field] = action.payload.value
        }
    }
})

export const { addUser, editUser } = userSlide.actions
export default userSlide.reducer