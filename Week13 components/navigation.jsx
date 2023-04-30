// function below is navigation component (1st link 'home' has a blank destination / 2nd link is linked to google)
function Navigation () {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <a class="navbar-brand" href="">Home</a>
            <a class="navbar-brand" href="https://www.google.com">Google</a>
        </nav>
    );
}

// exporting the function to allow import outside of this file
export default Navigation;





