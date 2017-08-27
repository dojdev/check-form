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
    setData: (Object) => { },
    submit: () => { }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    MyForm.submit();
});