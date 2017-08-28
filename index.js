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
            item.classList.remove('error') & errorFields.pop(checkField);
            console.log(checkField + ' is clear');
        }
        var setError = (item) => {
            var checkField = item.dataset.field;
            item.classList.add('error') & errorFields.push(checkField);
            isValid = false;
            console.log(checkField + ' has error');
        }

        fio
            .value.replace(/[0-9]/g, '')
            .split(' ').length == 3
            ? removeError(fio) : setError(fio);

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
        phone: '+79111234567'
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    MyForm.submit();
});