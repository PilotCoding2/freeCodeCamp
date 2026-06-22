const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const orderNumber = document.getElementById('order-no');
const productCode = document.getElementById('product-code');
const quantity = document.getElementById('quantity');
const complaintsGroup = document.getElementById('complaints-group');
const complaintDesc = document.getElementById('complaint-description');
const solutionsGroup = document.getElementById('solutions-group');
const solutionsDesc = document.getElementById('solution-description');
const submitBtn = document.getElementById('submit-btn');

const validateForm = () => {
    const isNameValid = fullName.value !== "";
    const isEmailValid = email.value.match(/^[a-z0-9_.+-]+@[a-z0-9-]+\.com$/gi) !== null;
    const isOrderNoValid = orderNumber.value.match(/^2024\d{6}$/gi) !== null;
    const isProductCodeValid = productCode.value.match(/^[a-z]{2}\d{2}-[a-z]{1}\d{3}-[a-z]{2}\d{1}$/gi) !== null;
    const isQuantityValid = Number(quantity.value) > 0 && Number.isInteger(Number(quantity.value));
    
    const isComplaintSelected = complaintsGroup.querySelectorAll('[name="complaint"]:checked').length > 0;
    let isComplaintDescValid;
    if(complaintsGroup.querySelector('[value="other"]:checked') !== null){
        isComplaintDescValid = complaintDesc.value !== "" && complaintDesc.value.length >= 20;
    } else {
        isComplaintDescValid = true;
    }

    const isSolutionSelected = solutionsGroup.querySelectorAll('[name="solutions"]:checked').length > 0;
    let isSolutionDescValid;
    if(solutionsGroup.querySelector('[value="other"]:checked') !== null){
        isSolutionDescValid = solutionsDesc.value !== "" && solutionsDesc.value.length >= 20;
    } else {
        isSolutionDescValid = true;
    }

    return {'full-name':isNameValid, 'email':isEmailValid, 'order-no':isOrderNoValid,
            'product-code':isProductCodeValid, 'quantity':isQuantityValid, 'complaints-group':isComplaintSelected,
            'complaint-description':isComplaintDescValid, 'solutions-group':isSolutionSelected, 'solution-description':isSolutionDescValid
    }

}

const isValid = obj => {
    const objToArr = Object.values(obj);
    return objToArr.every(element => element === true);
}

const inputs = document.querySelectorAll('input, textarea, fieldset');

inputs.forEach(input => input.addEventListener('change', (e) => {
    const validation = validateForm();
    if(validation[e.currentTarget.id] === true){
        e.currentTarget.style.border = '2px solid green';
    } else {
        e.currentTarget.style.border = '2px solid red';
    }
}));

submitBtn.addEventListener('submit', () => {
    let validForm = validateForm();
    isValid(validForm);
});









