//https://api.web3forms.com/submit
const getEmailResult = async () => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    console.log(json);

    const result = document.getElementById("result");
    result.innerHTML = "Please Wait....";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:json
        });
        return response;
    } catch(error) {
        console.log(error);
        result.innerHTML = "Sorry, your email could not be sent.";
    }
}

/*const showEmailResult = async(e) => {
    e.preventDefault();

    const result = document.getElementById("result");
    let response = await getEmailResult();

    if(response.status == 200){
        result.innerHTML = "Email successfully sent";
    } else {
        result.innerHTML = "Sorry, your email was not sent";
    }
    return false;
};

document.getElementById("contact-form").onsubmit = showEmailResult;*/

document.getElementById("contact-form").onsubmit = async(e) => {
    e.preventDefault();

    const result = document.getElementById("result");
    let response = await getEmailResult();

    if(response.status == 200){
        result.innerHTML = "Email successfully sent";
    } else {
        result.innerHTML = "Sorry, your email was not sent";
    }
}