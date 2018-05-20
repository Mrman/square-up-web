import { push } from 'react-router-redux'

const setAccessToken = function setAccessToken(token) {
    return { type: "SET_ACCESS_TOKEN", token }
}
const setLongAccessToken = function setLongAccessToken(token) {
    return { type: "SET_LONG_ACCESS_TOKEN", token }
} 
const isLoading = function isLoadingAction(isLoading) { 
    return { type: 'IS_LOADING', isLoading } 
}
const hasErrored = function hasErroredAction(error) {
    return { type: 'HAS_ERRORED', error }
}
const isLoggedIn = function isLoggedIn(status) {
    return { type: 'IS_LOGGED_IN', status }
}

export const requestTokenAction = function requestTokenAction(payload) {
    return (dispatch) => {
        if (!payload || !payload.accessToken) {
            dispatch(hasErrored("No payload with token provided when setting user token"))
        } else {
            dispatch(isLoading(true))
            dispatch(hasErrored(null))
            // TODO: Change me to system defined host
            fetch("http://localhost:8080/fb/login",
                {
                    method: "POST",
                    headers: {
                        "FB-Access-Token": `Bearer ${payload.accessToken}`
                    }
                }
            )
            .then((response) => {
                if (!response.ok) {
                    dispatch(isLoggedIn(false))
                    throw Error(`Token retrieval failed: Response code - ${response.status}. Response text - '${response.statusText}'`)
                }
                return response;
            })
            .then((response) => { return response.json() })
            .then((data) => {
                dispatch(isLoggedIn(true)) 
                // TODO TRV: Set this when we have the true token ID
                dispatch(setLongAccessToken(data.id))
                dispatch(push("/"))
            })
            .catch((error) => { 
                dispatch(hasErrored(error.message)) 
            })
            .finally(dispatch(isLoading(false)))
        }
    }
}