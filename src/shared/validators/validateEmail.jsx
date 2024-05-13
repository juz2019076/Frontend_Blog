export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/

    return regex.test(email)
}

export const emailValidateMessage = 'Por favor ingrese una dirección de correo válida.'