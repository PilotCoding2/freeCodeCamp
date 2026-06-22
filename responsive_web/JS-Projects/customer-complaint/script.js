const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const orderNumber = document.getElementById('order-no');
const productCode = document.getElementById('product-code');
const quantity = document.getElementById('quantity');

const complaintsGroup = document.getElementById('complaints-group');
const complaintDesc = document.getElementById('complaint-description');
const complaintDescCont = document.getElementById('complaint-description-container');

const solutionsGroup = document.getElementById('solutions-group');
const solutionsDesc = document.getElementById('solution-description');
const submitBtn = document.getElementById('submit-btn');
const solutionDescCont = document.getElementById('solution-description-container');

const otherComplaint = document.getElementById('other-complaint');
const otherSolution = document.getElementById('other-solution');
const inputs = document.querySelectorAll('input, textarea, #complaints-group, #solutions-group');

const messageBox = document.getElementById('message-box');

complaintDescCont.style.display = 'none';
solutionDescCont.style.display = 'none';



otherComplaint.addEventListener('click', () => {
    if(complaintDescCont.style.display === 'none'){
        complaintDescCont.style.display = 'block'
    } else {
        complaintDescCont.style.display = 'none'
    }
});

solutionsGroup.addEventListener('change', () => {
    if(otherSolution.checked){
        solutionDescCont.style.display = 'block';
    } else {
        solutionDescCont.style.display = 'none';
    }
});

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

inputs.forEach(input => input.addEventListener('change', (e) => {
    const validation = validateForm();
    if(validation[e.currentTarget.id] === true){
        e.currentTarget.style.border = '2px solid green';
    } else {
        e.currentTarget.style.border = '2px solid red';
    }
}));

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let validation = validateForm();
    if(isValid(validation)){
        alert('Form succesfully submitted.');
    } else {
        Object.entries(validation).forEach(([key, value]) => {
            if(value === false){
                document.querySelector(`#${key}`).style.border = '2px solid red';
                messageBox.textContent = 'Please, fill out the required fields correctly before submitting.';
            }
        });
    }
});










