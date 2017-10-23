function Sexo(str) {
    var returnS = '';
    var sex = str;
    switch (sex) {
        case 'M':
            returnS = 'Masculino';
            break;

        case 'F':
            returnS = 'Femenino';
            break;

        default:
            returnS = 'Otro';
    }
    return returnS;
}