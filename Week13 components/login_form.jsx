// function below is the login form component + used css to create border and style the heading (color & fontsize)
function Login () {
    return (
        <form style={{border: '1px solid black'}}>
            <h3 style={{color: "Green", fontSize: "35px"}}>Log In</h3>
            <label>Username</label>
            <input /><br/>
            <label>Password</label>
            <input /><br/>
        </form>
    );
}

// export to allow login component to be used outside of this file
export default Login;