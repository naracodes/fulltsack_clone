
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
    return $.ajax({
        method: 'POST',
        url: `/api/session`,
        data: { user }
    })
}

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/session`
    })
}

export const fetchCurrentUser = user => {
    
}