const input = document.getElementById("input");
const container = document.getElementById("todoContainer");
const button = document.getElementById("button");
const del = document.getElementsByClassName("del");
const todoList = document.getElementById("todoList");

button.addEventListener("click", function() {
    if(input.value.length === 0) {
            alert("ug bhgu bna");
    } else {
        const div = document.createElement("div");
        container.appendChild(div);
        const frame = document.createElement("div");
        div.className = "div";
        frame.innerHTML = input.value;
        input.value = "";
        const date = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        }); 
        const formattedTime = formatter.format(date);
        formattedTime.className = "date"
        console.log(formattedTime);
        const dateContainer = document.createElement("div");
        dateContainer.innerHTML = formattedTime;
    const box = document.createElement("div");
    box.className = "box";
    const outerBox = document.createElement("div"); 
    div.appendChild(outerBox);
    outerBox.className = "outerBox";
    outerBox.appendChild(frame);
    outerBox.appendChild(dateContainer);
    outerBox.appendChild(box);
    const edit = document.createElement("button");
    box.appendChild(edit);
    edit.className = "edit";
    const del = document.createElement("button");
    box.appendChild(del);
    del.className = "del";
    del.addEventListener("click", function() {
        div.remove();
    })
     const editInput = document.getElementsByClassName("editInput");
         edit.addEventListener("click", function() {

            const div2 = document.createElement("div");
            div.appendChild(div2);
            div2.className = "div2";    
            const editInput = document.createElement("input");
            div2.appendChild(editInput);
            editInput.className = "wordChangeInput";
            const doneBtn = document.createElement("button");
            div2.appendChild(doneBtn);
            doneBtn.innerHTML = "Done";
            doneBtn.className = "donebutton";
            doneBtn.addEventListener("click", function() {
                if(editInput.value == "") {
                    alert("ug bhgu bna");
                }else{
                frame.innerHTML = editInput.value;
                div2.remove();
                }
        })
    })
}
})














