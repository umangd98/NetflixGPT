const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
export const checkValidData = (email, password ) => {
   const isEmailValid =  emailRegex.test(email)
   const isPasswordValid  = passwordRegex.test(password)

   if(!isEmailValid) return "Email ID not valid"

   if(!isPasswordValid) return 'Password Not Valid'

   return null
}