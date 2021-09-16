import { AbstractControl } from "@angular/forms";
 
//função para validar senhas (validação customizada)
export function passwordValidator(control: AbstractControl) {
 
    //verificando se o campo não está vazio
    if (control.value == '' || control.value == null || control.value == undefined) {
        return { passwordInvalid: true };
    }
 
    //não pode ter menos de 8 caracteres
    else if (control.value.length < 8) {
        return { passwordInvalid: true };
    }
 
    //não pode ter mais de 20 caracteres
    else if (control.value.length > 20) {
        return { passwordInvalid: true };
    }
 
    //verificando se a senha possui pelo menos 1 digito numerico
    else if (!control.value.match(/[0-9]+/)) {
        return { passwordAnyDigit: true };
    }
 
    //verificando se a senha possui pelo menos 1 letra maiuscula
    else if (!control.value.match(/[A-Z]+/)) {
        return { passwordAnyIsUpper: true };
    }
 
    //verificando se a senha possui pelo menos 1 letra minuscula
    else if (!control.value.match(/[a-z]+/)) {
        return { passwordAnyIsLower: true };
    }
 
    //verificando se a senha possui pelo menos 1 caractere especial
    else if (!control.value.match(/[@#$%&]+/)) {
        return { passwordAnyIsSpecialChar: true };
    }
 
    return null;
}