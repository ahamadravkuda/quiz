const questions=[
    {
        'question':"which of the following is the markup language ?",
        'a':"HTML",
        'b':"CSS",
        'c':"JAVASCRIPT",
        'd':"PHP",
        'correct':"a"
    },
    {
        'question':"what year was javascript launched ?",
        'a':"1996",
        'b':"1995",
        'c':"1994",
        'd':"1997",
        'correct':"b"
    },
    {
        'question':"which of the following is the scripting language ?",
        'a':"HTML",
        'b':"CSS",
        'c':"JAVASCRIPT",
        'd':"C",
        'correct':"c"
    },
   
    {
        'question':" what does css stands for?",
        'a':"cashcadeting style sheet",
        'b':"cascading style sheet",
        'c':"cashcading style sheet",
        'd':"cascading stylish sheet",
        'correct':"b"
    },
    {
        'question':"what year was paython launched ?",
        'a':"1999",
        'b':"2001",
        'c':"1994",
        'd':"1991",
        'correct':"d"
    },
    {
        'question': "What does SQL stand for?",
        'a':"Statement Question Language",
        'b':"Stylesheet Query Language",
        'c':"Stylish Question Language",
        'd':"Structured Query Language",
        'correct':"d"
    },
    {
        'question':"what year was reactjs launched ?",
        'a':"29 May 2013",
        'b':"29 april 2013",
        'c':"29 March 2013",
        'd':"21 May 2013",
        'correct':"a"
    },
    {
        'question':"what year was php launched ?",
        'a':"1994",
        'b':"1955",
        'c':"2000",
        'd':"1997",
        'correct':"a"
    },
    {
        'question':"what year was c++ launched ?",
        'a':"1970",
        'b':"1980",
        'c':"1988",
        'd':"1985",
        'correct':"a"
    },
    {
        'question':"what year was c++ launched ?",
        'a':"1970",
        'b':"1980",
        'c':"1988",
        'd':"1985",
        'correct':"a"
    },
]


let index=0;
let right=0,
    wrong=0;
let total=questions.length;
const quesBox=document.getElementById("quesBox")
const optionInput=document.querySelectorAll(("input[type='radio']"))
const loadQuestion=()=>{
    if(index===total){
        return endQuiz()
    }
    reset()
    const data=questions[index]
    console.log(data);
    quesBox.innerText=`${index+1}) ${data.question}`;
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}
const submitQuiz=()=>{
    const data=questions[index]
    const ans=getAnswer()
    if(ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return
}
const getAnswer=()=>{
    let answer;
   optionInput.forEach(
    (input) => {
      if(input.checked){
        answer= input.value;
      }
    }
   )
   return answer;
}

const reset=()=>{
    optionInput.forEach(
        (input) => {
          input.checked=false;
          
        }
       )
}
const endQuiz=()=>{
    console.log(document.getElementsByClassName("container"));
       document.getElementById("container").innerHTML=`
       <h3 style="color:blue;"> THANK YOU FOR PLAYING THE QUIZ</h3>
       <h2 style="color:blue;"> ${right}/${total} are correct</h2>
       `
    }

//inital call
loadQuestion()

// getAnswer()
// reset()
