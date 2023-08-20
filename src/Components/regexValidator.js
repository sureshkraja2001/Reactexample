//emailRegex = /^[^\s@]+@[^\s@]+$/;
// passwordRegex = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/;

export const emailValidator = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    return emailRegex.test(email)
}
export const passwordValidator = password =>{
    const passwordRegex =  /^(?=(.*[A-Z]){1})(?=(.*[a-z]){1})(?=(.*[0-9]){1})(?=(.*[@#$%^!&+=.-_*]){2})([a-zA-Z0-9@#$%^!&+=*.-_]){8,16}$/;
    return passwordRegex.test(password)
}