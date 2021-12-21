function validatepassword(string) {
    let message = '';
    if (string.length > 5) {
        if (string.match(/^[0-9a-zA-Z]+$/)) {
            if (/\d/.test(string) && /[a-zA-Z]/.test(string)) {
                message = "User has been logged in successfully";
            }
            else {
                message = "Password must contain one alphabet and one letter";
            }
        }
        else {
            message = "Password should be alphanumeric";
        }
    }
    else {
        message = "Password should be greater than 5 characters";
    }
    return message;
}

module.exports = { validatepassword };