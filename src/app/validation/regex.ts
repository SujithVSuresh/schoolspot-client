const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = {
    letter: /[a-zA-Z]/,
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    specialChar: /[!@#$%^&*(),.?":{}|<>+-]/,
    spaces: /^\S+$/
}


export {
    emailRegex,
    passwordRegex
}