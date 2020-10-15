export function handleData(dispatch, data, type) {
    dispatch({
        type: type,
        data,
        isLoading: false,
    });
}

export function handleErrorData(dispatch, err, type) {
    dispatch({
        type: type,
        err,
        isLoading: true,
    });
}