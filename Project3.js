const appstate={
    qanswered:0,
    qcorrect:0,
    qwrong:0
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector("#woo").onsubmit = function(){
        const qchoice = document.querySelector("#quiztype").value;
        console.log(qchoice);
        if(qchoice==="HTML"){
            console.log("geg");
            document.querySelector("#task").style.display = "none";
            document.querySelector("#submit").style.display = "none";
            document.querySelector("#quiztype").style.display = "none";
            create_user_view();
        }
        if(qchoice==="JavaScript"){
            document.querySelector("#task").style.display = "none";
            document.querySelector("#submit").style.display = "none";
            document.querySelector("#quiztype").style.display = "none";
        }
        return false;
    }
});

const create_user_view = async (question) => {
    const data = await fetch("https://my-json-server.typicode.com/PhosWave/Project3json/db")
    const model = await data.json()
    console.log(model)
    const html_element = render_widget(question,"#user_view")
    document.querySelector("#app_widget").innerHTML = html_element
}
const render_widget= () =>{
const quizTemplate = Handlebars.compile(document.getElementById("quiz-template").innerHTML);
quizContainer.innerHTML = quizTemplate({ questions: appstate.questions });
}
