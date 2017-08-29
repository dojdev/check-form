const
    form = document.querySelector('#myForm'),
    fio = document.querySelector('[data-field="fio"]'),
    email = document.querySelector('[data-field="email"]'),
    phone = document.querySelector('[data-field="phone"]'),
    button = document.querySelector('#submitButton'),
    result = document.querySelector('#resultContainer');

const MyForm = {
    validate: () => {
        var isValid = true,
            errorFields = [];

        var removeError = (item) => {
            var checkField = item.dataset.field;
            errorFields.pop(checkField);
            console.log(checkField + ' is clear');
        }
        var setError = (item) => {
            var checkField = item.dataset.field;
            errorFields.push(checkField);
            isValid = false;
            console.log(checkField + ' has error');
        }

        fio
            .value.replace(/[0-9]/g, '')
            .split(' ').length == 3
            ? true : setError(fio);

        var mailDomain = email.value.split('@')[1],
            mailList = ['ya.ru', 'yandex.ru', 'yandex.ua', 'yandex.by', 'yandex.kz', 'yandex.com'];

        mailList
            .indexOf(mailDomain) != -1
            ? true : setError(email);

        var phoneClean = phone.value.replace(/\D+/g, '');

        var phoneSumm = 0;

        for (var i = 0; i < phoneClean.length; i++) {
            phoneSumm += +phoneClean[i];

        }

        phoneSumm <= 30 ? console.log(phoneSumm) : setError(phone);


        return { isValid, errorFields };
    },
    getData: () => {
        const MyFormFields = {
            fio: fio.value,
            email: email.value,
            phone: phone.value,
        }
        return MyFormFields;
    },
    setData: (item) => {
        fio.value = item.fio;
        email.value = item.email;
        phone.value = item.phone;
    },
    submit: () => {
        MyForm.validate();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    MyForm.setData({
        fio: 'dummy user data',
        email: 'dummy@yandex.com',
        phone: '+7(111)228-33-11'
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    MyForm.submit();
});