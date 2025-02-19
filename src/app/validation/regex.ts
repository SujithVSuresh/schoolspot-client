const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// const passwordRegex = {
//     letter: /[a-zA-Z]/,
//     lowercase: /[A-Z]/,
//     uppercase: /[a-z]/,
//     specialChar: /[!@#$%^&*(),.?":{}|<>+-]/
// }
const passwordRegex = /^.{8,}$/

export {
    emailRegex,
    passwordRegex
}