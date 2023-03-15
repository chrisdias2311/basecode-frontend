const initialState = {
    validateUsers: [],
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SIGNUP_USER":
            console.log("Called from userreducer")
            return { ...state, user: payload };
        default:
            return state;
    }
}