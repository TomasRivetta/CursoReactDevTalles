export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'ABC':
            throw new Error("'ACTION.TYPE = abc, NO ESTA IMPLEMENTADA");

        default:
            return initialState
    }
}