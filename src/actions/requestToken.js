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
            // TODO: TRV - doing this here for now, will move it to server call
            fetch(
                "https://graph.facebook.com/v2.12/oauth/access_token" +
                "?grant_type=fb_exchange_token" +
                "&client_id=1560055450772174" +
                "&client_secret=???" +
                "&fb_exchange_token=" + payload.accessToken)
            .then((response) => {
                if (!response.ok) {
                    throw Error(`Token retrieval failed with: Response code: ${response.status}. Response text: '${response.statusText}'`)
                }
                return response;
            })
            .then((response) => { return response.json() })
            .then((data) => {
                dispatch(isLoggedIn(true)) 
                dispatch(setLongAccessToken(data))
            })
            .catch((error) => { 
                dispatch(hasErrored(error.message)) 
            })
            .finally(dispatch(isLoading(false)))
        }
    }
}