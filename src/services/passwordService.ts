export default function generatePass() {
    let password: string = "";
    let caracteres: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?";
    let passwordLength: number = 8;

    for (let index = 0; index < passwordLength; index++) {
        password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return password;
}