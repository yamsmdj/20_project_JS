const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz");
form.addEventListener("Submit", handleSubmit)


function handleSubmit(e){
    e.preventDefault()

    const result = [];

    const radioBuuttons = document.querySelectorAll("input[type='radio']:checked")

    radioButtons.ForEach( (radioButton, index)){
        if(radioButton.value ===responses[index]){}
    }
    console.log(radioButtons);
}