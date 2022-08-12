export class UI{
    showQuestion(text){
        const questionTitle = document.getElementById("question")
        questionTitle.innerText=text
    }
    showChoices(choices,callback){
        const choicesContainer =document.getElementById('choices')
        choicesContainer.innerHTML=``
        for(let i=0; i<choices.length; i++){
            const button = document.createElement("button")
            button.innerText = choices[i] 
            button.className= 'button'
            button.addEventListener('click', ()=> callback(choices[i]))
            choicesContainer.append(button)
        }
    }
    showScore(score){
        const quizEndHtml=`
        <h2>Result<h2>
        <h3>your final score is: ${score}<h3>`
        const element = document.getElementById('quiz')
        element.innerHTML= quizEndHtml
    }
    showProgress(currentIndex, score){
        const element = document.getElementById('progress')
        element.innerHTML= `question ${currentIndex} of ${score}`
    }
}