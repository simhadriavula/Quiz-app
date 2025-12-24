const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Home Tool Markup Language",
    b: "Hyperlinks and Text Markup Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Tools Markup Language",
    correct: "c"
  },
  {
    question: "What does CSS stand for?",
    a: "Central StyleSheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Central Style and Sheets",
    correct: "b"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    a: "<link>",
    b: "<a>",
    c: "<href>",
    d: "<hyper>",
    correct: "b"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    a: "<!-- -->",
    b: "/* */",
    c: "//",
    d: "**",
    correct: "c"
  },
  {
    question: "Which HTML tag is used to display an image?",
    a: "<image>",
    b: "<img>",
    c: "<pic>",
    d: "<src>",
    correct: "b"
  },
  {
    question: "Which HTML tag creates a numbered list?",
    a: "<ul>",
    b: "<ol>",
    c: "<li>",
    d: "<list>",
    correct: "b"
  },
  {
    question: "Which HTML tag creates a bulleted list?",
    a: "<ol>",
    b: "<li>",
    c: "<ul>",
    d: "<list>",
    correct: "c"
  },
  {
    question: "Which CSS property changes text color?",
    a: "text-style",
    b: "font-color",
    c: "color",
    d: "background",
    correct: "c"
  },
  {
    question: "Which CSS property controls text size?",
    a: "text-size",
    b: "font-style",
    c: "font-size",
    d: "size",
    correct: "c"
  },
  {
    question: "Which CSS property is used for background color?",
    a: "color",
    b: "bgcolor",
    c: "background-color",
    d: "background",
    correct: "c"
  },
  {
    question: "Which JavaScript keyword declares a variable?",
    a: "var",
    b: "int",
    c: "string",
    d: "declare",
    correct: "a"
  },
  {
    question: "Which method selects an element by ID?",
    a: "getElementByClass",
    b: "getElementById",
    c: "querySelectorAll",
    d: "selectId",
    correct: "b"
  },
  {
    question: "Which JavaScript method writes to the console?",
    a: "print()",
    b: "log()",
    c: "console.log()",
    d: "write()",
    correct: "c"
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    a: "=",
    b: "==",
    c: "===",
    d: "!=",
    correct: "c"
  },
  {
    question: "Which HTML attribute specifies a link destination?",
    a: "src",
    b: "href",
    c: "link",
    d: "url",
    correct: "b"
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    a: "<h6>",
    b: "<heading>",
    c: "<h1>",
    d: "<head>",
    correct: "c"
  },
  {
    question: "Which HTML tag is used to insert a line break?",
    a: "<lb>",
    b: "<break>",
    c: "<br>",
    d: "<hr>",
    correct: "c"
  },
  {
    question: "Which CSS property is used to center text?",
    a: "align",
    b: "text-align",
    c: "center",
    d: "font-align",
    correct: "b"
  },
  {
    question: "Which JavaScript loop runs at least once?",
    a: "for",
    b: "while",
    c: "do...while",
    d: "foreach",
    correct: "c"
  },
  {
    question: "Which HTML tag is used to create a table row?",
    a: "<td>",
    b: "<table>",
    c: "<tr>",
    d: "<th>",
    correct: "c"
  },
  {
    question: "Which HTML tag defines a table cell?",
    a: "<tr>",
    b: "<th>",
    c: "<td>",
    d: "<cell>",
    correct: "c"
  },
  {
    question: "Which JavaScript function converts JSON to object?",
    a: "JSON.stringify()",
    b: "JSON.parse()",
    c: "JSON.convert()",
    d: "JSON.object()",
    correct: "b"
  },
  {
    question: "Which HTML attribute provides alternate text for images?",
    a: "title",
    b: "src",
    c: "alt",
    d: "href",
    correct: "c"
  },
  {
    question: "Which CSS unit is relative to parent element?",
    a: "px",
    b: "%",
    c: "cm",
    d: "pt",
    correct: "b"
  },
  {
    question: "Which JavaScript event occurs on button click?",
    a: "onhover",
    b: "onchange",
    c: "onclick",
    d: "onload",
    correct: "c"
  }
];


const quiz = document.getElementById("quiz")
const  resultEle= document.getElementById("result")
const answerEls = document.querySelectorAll(".answer")
const labelEls = document.querySelectorAll(".op_label")
const questionEle = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const submitBtn = document.getElementById("submit")
const scoreEle = document.getElementById("score")
const reloadBtn = document.getElementById("reload")
let currentQtn=0;
let answerd=0
let submitted=false
let userSelected={
    

}
loadQuiz()
function loadQuiz(){

    questionEle.innerHTML=quizData[currentQtn].question;
    a_text.innerText = quizData[currentQtn].a;
    b_text.innerText = quizData[currentQtn].b;
    c_text.innerText = quizData[currentQtn].c;
    d_text.innerText = quizData[currentQtn].d;
    deSelectAnswer()
    if(userSelected[currentQtn]){
        let selected = userSelected[currentQtn];
        document.getElementById(selected).checked= true
    }
    if(currentQtn == quizData.length-1){
        nextBtn.style.display="none"
        if(submitted)
        {
            submitBtn.style.display="none"
            reloadBtn.style.display="block"
        }
        else{
            submitBtn.style.display="block"
            reloadBtn.style.display="none"
        }

    }
    if(submitted){
        let actualAns= quizData[currentQtn].correct
        let userSelectd=userSelected[currentQtn]
        labelEls.forEach((labelEls)=>{
            labelEls.classList.remove("correct")
            labelEls.classList.remove("wrong")
        })
        if(actualAns==userSelectd){
            let op=actualAns+"_text"
            document.getElementById(op).classList.add("correct")
        }
        else{
             let correct_op=actualAns+"_text"
            document.getElementById(correct_op).classList.add("correct")
             let user_op=userSelectd+"_text"
            document.getElementById(user_op).classList.add("wrong")
        }
    }
}
nextBtn.addEventListener("click",()=>{
    let answer = getSelected()
    
    if(!submitted){
        if(answer){
        if(answer==quizData[currentQtn].correct){
      answerd++  
    }
        currentQtn++;
        if(currentQtn < quizData.length){
            loadQuiz()
        }
    }
    }
    else{
        currentQtn++
        loadQuiz()
    }

    

})
prevBtn.addEventListener("click",()=>{
    if(currentQtn>0){
        currentQtn--
        loadQuiz()
    }
})
submitBtn.addEventListener("click",()=>{
    if(getSelected()){
        answer = getSelected()
           if(answer==quizData[currentQtn].correct){
      answerd++  
    }
        submitted=true
        quiz.style.display="none"
        resultEle.style.display="block"
        scoreEle.innerHTML=answerd+"/"+quizData.length+"questions answered correcly"
    }
})
function getSelected(){
    let answer;
    answerEls.forEach((answerEls)=>{
        if(answerEls.checked){
            answer = answerEls.id
            userSelected[currentQtn]=answer
        }
    })
    return answer
}
function deSelectAnswer(){
    answerEls.forEach((answerEls)=>{
        answerEls.checked = false
            
        
    })
}

function loadAns(){
    currentQtn=0;
    quiz.style.display="block"
    resultEle.style.display="none"
    answerEls.forEach((answerEls)=>{
       answerEls.disabled=true;
    })
    submitBtn.style.display="none"
    nextBtn.style.display="block"
    loadQuiz()
}