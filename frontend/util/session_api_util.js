
export const signup = user => {
    // debugger;
    const signup = $.ajax({
        method: 'POST',
        url: `/api/users`,
        data: { user }
    });
    // debugger;
    return signup;
};

export const login = user => {
    debugger
    const login = $.ajax({
        method: 'POST',
        url: `/api/session`,
        data: { user }
    })
    debugger
    return login;
}

export const logout = () => {
    debugger
    return $.ajax({
        method: 'DELETE',
        url: `/api/session`
    })
}

// export const fetchCurrentUser = user => {
    
// }