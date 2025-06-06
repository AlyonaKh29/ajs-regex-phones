export function convertNumber(phone) {
    let cleanedPhone = phone.replace(/[^\d]/g, '');  //Удаляем все символы, кроме цифр
    const pattern = /^\d{11,13}$/;       //Номер должен иметь длину от 11 до 13 цифр,
    if (!pattern.test(cleanedPhone)) {    //иначе ошибка
        throw new Error('Invalid phone number entered'); 
    }

    if (cleanedPhone.length === 11) {  //Если в номере 11 цифр и начинается на 7 или 8, то заменить на +7
       cleanedPhone = cleanedPhone.replace(/^(7|8)/, '+7');
    }
    
    if (!cleanedPhone.startsWith('+')) {  //Все остальные номера считать нероссийскими, добавить '+'
      cleanedPhone = '+' + cleanedPhone;
    }
    return cleanedPhone;
}