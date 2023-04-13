const initialState = {
    data: []
}
const users = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_USER_SUCCESS':
            return {
                data: action.data.map(item => {
                    item.sent = true
                    return item
                })
            }
        case 'LOAD_USER_FAILURE':
            alert(action.err)
            return state
        case 'ADD_USER':
            return {
                data: [
                    ...state.data,
                    {
                        id: action.id,
                        firstName: action.firstName,
                        lastName: action.lastName,
                        email: action.email,
                        sent: true
                    }
                ]
            }

        case 'ADD_USER_SUCCESS':
            return {
                data: [...state.data.map(item => {
                    if (item.id === action.id) {
                        return {
                            id: action.data.id,
                            firstName: action.data.firstName,
                            lastName: action.data.lastName,
                            email: action.data.email,
                            sent: true
                        }
                    }
                    return item
                })]
            }

        case 'ADD_USER_FAILURE':
            return {
                data: [...state.data.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            sent: false
                        }
                    }
                    return item
                })]
            }

        case 'RESEND_USER_SUCCESS':
            return {
                data: [...state.data.map(item => {
                    if (item.id === action.id) {
                        return {
                            id: action.data.id,
                            firstName: action.data.firstName,
                            lastName: action.data.lastName,
                            email: action.data.email,
                            sent: true
                        }
                    }
                    return item
                })]
            }
        case 'RESEND_USER_FAILURE':
            alert(action.err)
            return state
        case 'REMOVE_USER_SUCCESS':
            return {
                data: [...state.data.filter(item => item.id !== action.id)]
            }

        case 'REMOVE_USER_FAILURE':
            break;
        case 'UPDATE_USER_SUCCESS':
            return {
                data: [...state.data.map(item => {
                    if (item.id === action.id) {
                        return {
                            id: action.data.id,
                            firstName: action.data.firstName,
                            lastName: action.data.lastName,
                            email: action.data.email,
                            sent: true
                        }
                    }
                    return item
                })]
            }

        case 'UPDATE_USER_FAILURE':
            alert(action.err)
            return state
        default:
            return state
    }
}

export default users