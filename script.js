const submitForm = () => {
    let formData = {
        first_name : document.getElementById("fname").value,
        last_name : document.getElementById("lname").value,
        mobile_no : document.getElementById("mobile").value,
        email : document.getElementById("email").value

    };
    console.log("Form Data: ", formData);
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#submitForm').click(() => {
        submitForm();
    })
    $('.modal').modal();
});
