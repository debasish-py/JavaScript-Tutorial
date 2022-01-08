function check() {
    var c=0;
    var quiz=document.getElementById("quiz");
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var result=document.getElementById('result');
    
    if (q1=="Object-Based") {c++}
    if (q2=="Function/Method") {c++}
    if (q3=="Mutable variable") {c++}
    if (q4=="valueOf()") {c++}
    if (q5=="Invocation expression") {c++}
    if (q6=="in") {c++}
    if (q7=="?") {c++}
   quiz.style.display="none";

    if (c<=3) {
     result.textContent=`Your result is ${c}. It is not so good please try to work on yourself.`
    } else {
    result.textContent=`Your result is ${c}. It is awesome. Keep it up!.`
    }
}
