const
    form = document.querySelector('#myForm'),
    fio = document.querySelector('[data-field="fio"]'),
    email = document.querySelector('[data-field="email"]'),
    phone = document.querySelector('[data-field="phone"]'),
    button = document.querySelector('#submitButton');

const MyForm = {
    validate: () => {
        const status = {
            isValid: true,
            errorFields: []
        }
    },
    getData: () => { },
    setData: (item) => {
        fio.value = item.fio;
        email.value = item.email;
        phone.value = item.phone;
    },
    submit: () => { }
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