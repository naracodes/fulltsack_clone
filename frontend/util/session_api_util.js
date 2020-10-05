
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
    const login = $.ajax({
        method: 'POST',
        url: `/api/session`,
        data: { user }
    })
    return login;
}

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/session`
    })
}

// export const fetchCurrentUser = user => {
    
// }