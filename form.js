
// function validator(options){
//     var formElement = document.querySelector(options.form);
// // function implement validate
//     var validate = function(inputElement, rule, errorElement){
//         var errorMessage = rule.test(inputElement.value)
//             if(errorMessage){
//                 errorElement.innerText = errorMessage;
//                 inputElement.parentElement.classList.add("invalid");
//             }
//             else{
//                 errorElement.innerText ='';
//                 inputElement.parentElement.classList.remove("invalid");
//             }
//     }

// //get Element Form validate
//     if(formElement)
//     {
//         options.rules.forEach(function(rule){
//             var inputElement = formElement.querySelector(rule.selector);
//             var errorElement = inputElement.parentElement.querySelector(".form-message");

//             inputElement.onblur = function(){
//                 validate(inputElement, rule, errorElement)
//             }

//             inputElement.oninput = function(){
//                 errorElement.innerText ='';
//                 inputElement.parentElement.classList.remove("invalid"); 
//             }
//         })
//     }
// }

// validator.isRequired = function(selector){
//     return {
//         selector: selector,
//         test: function(value){
//             return value.trim() ? undefined : "Vui lòng nhập trường này";
//         }
//     }
// }

// // validate

// validator.isEmail = function(selector){
//     return {
//         selector: selector,
//         test: function(value){
//             var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             if(regex.test(value)){//regex.test này là mặc định của regex trên w3
//                 return undefined;
//             }
//             else{
//                 return 'Trường này phải là Email'
//             }
//         }
//         //return regex.test(value) ? undefined : "trường này phải là email"
//     }
// }
// validator.minLength = function(selector, min){
//     return {
//         selector: selector,
//         test: function(value){
//             return value.length >= min ? undefined : "Vui lòng nhập tối thiểu 6 ký tự";
//         }
//     }
// }
// validator.isConfirmed = function(selector,getConfirmation){
//     return {
//         selector: selector,
//         test: function(value){
//             return value === getConfirmation() ? undefined : "Giá trị nhập vào không chính xác"
//         }
//     }
// }

function log(...a)
{
    console.log(a);
}
console.log(log(1,2,3,4,5))