import { convertNumber } from '../convert_number';

describe('Test for convertNumber() function', () => {
    const validPhones = [
        { phone: '8 999 123 45 67', expected: '+79991234567' },
        { phone: '79991234567', expected: '+79991234567' },
        { phone: '7(999)123-45-67', expected: '+79991234567' },
        { phone: '+7 999 123 45 67', expected: '+79991234567' },
        { phone: '8 (999) 123-45-67', expected: '+79991234567' },
        { phone: '12345678901', expected: '+12345678901' },
        { phone: '1234567890123', expected: '+1234567890123' },
        { phone: '8999123456789', expected: '+8999123456789' },
        { phone: '#8999(123)4567!', expected: '+79991234567' },
        { phone: '(999) 123-45-69', expectedError: true },
        { phone: '12345678901234', expectedError: true },
        { phone: 'abcde', expectedError: true },
        { phone: '*8999@@$1234', expectedError: true },
        { phone: '+8(899)912-345', expectedError: true },
    ];
   
    test.each(validPhones)('%s',
        ({ phone, expected, expectedError }) => {
            if (expectedError) {
                expect(() => convertNumber(phone)).toThrow('Invalid phone number entered');
            } else {
                expect(convertNumber(phone)).toBe(expected);
            }
        }
    );
})