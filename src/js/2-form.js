const form = document.querySelector(".feedback-form");

const loadFromLocal = () => {
    const localObj = localStorage.getItem("feedback-form-state");
    if (localObj) {
        const { email, message } = JSON.parse(localObj);
        form.elements.email.value = email;
        form.elements.message.value = message;
    }
};

window.addEventListener("load", loadFromLocal);

const inputToLocal = () => {
    const inputTemplate = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(inputTemplate));
}

form.addEventListener("input", inputToLocal);



form.addEventListener("submit", event => {
    event.preventDefault();
    if (form.elements.email.value === "" || form.elements.message.value === "") {
        return;
    } else {
        const consolOutput = {
            email: form.elements.email.value.trim(),
            message: form.elements.message.value.trim(),
        }
        console.log(consolOutput);
    localStorage.removeItem("feedback-form-state")
    form.reset();
    }
    });