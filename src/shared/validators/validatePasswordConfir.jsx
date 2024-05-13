export const validatePasswordConfir = (pass, confPass) => {
    return pass === confPass
}

export const validatePasswordConfirmationMessage = 'Las contraseñas no coinciden'