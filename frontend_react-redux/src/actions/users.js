import axios from 'axios'
const request = axios.create({
    baseURL: 'http://192.168.1.99:3000/',
    timeout: 1000,
    headers: { 'Authorization': 'token' }
});

export const loadUserSuccess = (data) => ({
    type: 'LOAD_USER_SUCCESS',
    data,
})

export const loadUserFailure = (err) => ({
    type: 'LOAD_USER_FAILURE',
    err
})

export const loadUser = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.get('users')
            if (data.success) {
                dispatch(loadUserSuccess(data.data))
            } else {
                alert('gagal load user')
            }
        } catch (error) {
            dispatch(loadUserFailure(error))
        }
    }
}

export const addUserSuccess = (id, data) => ({
    type: 'ADD_USER_SUCCESS',
    id,
    data
})


export const addUserFailure = (id) => ({
    type: 'ADD_USER_FAILURE',
    id
})


export const addUserRedux = (id, firstName, lastName, email) => ({
    type: 'ADD_USER',
    id,
    firstName,
    lastName,
    email
})

export const addUser = (firstName, lastName, email) => {
    return async (dispatch, getState) => {
        const id = Date.now()
        dispatch(addUserRedux(id, firstName, lastName, email))
        try {
            const { data } = await request.post('users', { firstName, lastName, email })
            if (data.success) {
                dispatch(addUserSuccess(id, data.data))
            } else {
                alert('gagal tambah user')
            }
        } catch (error) {
            dispatch(addUserFailure(id))
        }
    }
}

export const removeUserSuccess = (id) => ({
    type: 'REMOVE_USER_SUCCESS',
    id
})


export const removeUserFailure = (err) => ({
    type: 'REMOVE_USER_FAILURE',
    err
})

export const removeUser = (id) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.delete(`users/${id}`)
            if (data.success) {
                dispatch(removeUserSuccess(id))
            } else {
                alert('gagal hapus user')
            }
        } catch (error) {
            dispatch(removeUserFailure(error))
        }
    }
}


export const updateUserSuccess = (id, data) => ({
    type: 'UPDATE_USER_SUCCESS',
    id,
    data
})


export const updateUserFailure = (err) => ({
    type: 'UPDATE_USER_FAILURE',
    err
})


export const updateUser = (id, firstName, lastName) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.put(`users/${id}`, { firstName, lastName })
            if (data.success) {
                dispatch(updateUserSuccess(id, data.data))
            } else {
                alert('gagal update user')
            }
        } catch (error) {
            dispatch(updateUserFailure(error))
        }
    }
}


export const resendUserSuccess = (id, data) => ({
    type: 'RESEND_USER_SUCCESS',
    id,
    data
})


export const resendUserFailure = (err) => ({
    type: 'RESEND_USER_FAILURE',
    err
})

export const resendUser = (id, firstName, lastName, email) => {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.post('users', { firstName, lastName, email })
            if (data.success) {
                dispatch(resendUserSuccess(id, data.data))
            } else {
                alert('gagal resend')
            }
        } catch (error) {
            dispatch(resendUserFailure(error))
        }
    }
}