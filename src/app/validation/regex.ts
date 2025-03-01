const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = {
    letter: /[a-zA-Z]/,
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    specialChar: /[!@#$%^&*(),.?":{}|<>+-]/,
    spaces: /^\S+$/
}
const phoneNumberRegex = /^[6-9]\d{9}$/
const schoolNameRegex = /^[A-Za-z][A-Za-z .-]{1,98}[A-Za-z]$/
const yearRegex = /^(19|20)\d{2}$/
const nameRegex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w- ./?%&=]*)?$/i;
const alphabetOnlyRegex = /^[a-zA-Z]+$/;
const addressRegex = /^[a-zA-Z]+([ -][a-zA-Z]+)*$/
const postalCodeRegex = /^\d{6}$/


export {
    emailRegex,
    passwordRegex,
    phoneNumberRegex,
    schoolNameRegex,
    yearRegex,
    nameRegex,
    urlRegex,
    alphabetOnlyRegex,
    addressRegex,
    postalCodeRegex
}