// selecciono el tipo de questionario

document.getElementById("challenge1").addEventListener("click", function (){
    closeIntroModal(1)
    document.getElementById("levelChallenge").setAttribute("src","./media/Bronze.fw.png")
    
})

document.getElementById("challenge2").addEventListener("click", function (){
    closeIntroModal(2)
    document.getElementById("levelChallenge").setAttribute("src","./media/silver.fw.png")
   
})

document.getElementById("challenge3").addEventListener("click", function (){
    closeIntroModal(3)
    document.getElementById("levelChallenge").setAttribute("src","./media/gold.fw.png")
    
})
var questionSelected = 0
function closeIntroModal(n){
    document.getElementById("introModal").classList.add("introModalOut")
    document.getElementById("introModal").classList.remove("introModal")
    questionSelected = n
    if(questionSelected == 1){
        questions=[
            {
                id:1,
                q: '<strong>Inside which HTML element do we put the JavaScript?</strong>',
                options:['&lt;script&gt;','&lt;javascript&gt;','&lt;js&gt;','&lt;scripting&gt;'],
                r:0
            }, 
            {
                id:2,
                q: '<strong>What is the correct JavaScript syntax to change the content of the HTML element below?</strong><p>&lt;p id="demo"&gt;This is a demonstration.&lt;/p&gt;</p>',
                options:['#demo.innerHTML = "Javascript is Cool"','document.getElementById("demo").innerHTML = "Javascript is Cool"','document.getElement("p").innerHTML = "Javascript is Cool"','document.getElementByName("p").innerHTML = "Javascript is Cool"'],
                r:1
            },
            {
                id:3,
                q: '<strong>Where is the correct place to insert a JavaScript?</strong>',
                options:['&lt;head&gt; section','&lt;body&gt; section','&lt;div&gt; section','&lt;head&gt; and &lt;body&gt;'],
                r:3
            },
            {
                id:4,
                q: '<strong>What is the correct syntax for referring to an external script called "functions.js"?</strong>',
                options:['&lt;script name="name.js"&gt;','&lt;script href="name.js"&gt;','&lt;script src="name.js"&gt;','&lt;script type="name.js"&gt;'],
                r:2
            }, 
            {
                id:5,
                q: '<strong>How do you write "Hello World" in an alert box?</strong>',
                options:['alert("Javascript is easy")','msgbox("Javascript is easy")','echo("Javascript is easy")','print("Javascript is easy")'],
                r:0
            },
            {
                id:6,
                q: '<strong>How do you create a function in JavaScript?</strong>',
                options:['function:myFunction()','function myFunction()','myFunction function()','function = myFunction()'],
                r:1
            },
            {
                id:7,
                q: '<strong>How do you call a function named "myFunction"?</strong>',
                options:['start myFunction()','call myFunction()','myFunction()','invoke function myFunction()'],
                r:2
            },
            {
                id:8,
                q: '<strong>How to write an IF statement in JavaScript?</strong>',
                options:['if num == 7 then','if num == 7:','if num = 7','if (num == 7)'],
                r:3
            },
            {
                id:9,
                q: '<strong>How to write an IF statement for executing some code if "i" is NOT equal to 7?</strong>',
                options:['if (i < > 7)','if (i != 7)','if i < > 7','if (i =! 7)'],
                r:1
            },
            {
                id:10,
                q: '<strong>How does a WHILE loop start?</strong>',
                options:['while (i <= 7 )','while (i <= 7; i++)','while (i = 0 to 7)','while i <= 7:'],
                r:0
            },
            {
                id:11,
                q: '<strong>Which event do you use to run something after the page has finished loading?</strong>',
                options:['onreload','onchange','onload','onopen'],
                r:2
            }, 
            {
                id:12,
                q: '<strong>How does a FOR loop start?</strong>',
                options:['for i = 1 to 7','for (i = 0; i < 7; i++)','for (i <= 7; i++)','for (i = 0; i < 5)'],
                r:1
            },
            {
                id:13,
                q: '<strong>How can you add a comment in a JavaScript?</strong>',
                options:['//comment','&lt;!-- comment --&gt;','"comment"','["comment"]'],
                r:0
            },
            {
                id:14,
                q: '<strong>How to insert a comment that has more than one line?</strong>',
                options:['//comment1<br>comment2//','&lt;!-- comment1 <br>comment2--&gt;','"comment1<br>comment2"','/*comment1<br>comment2*/'],
                r:3
            }, 
            {
                id:15,
                q: '<strong>What is the correct way to write a JavaScript array?</strong>',
                options:['var cities = "Cali", "Bogota", "Medellin"','var cities = {1:"Cali", 2:"Bogota", 3:"Medellin"','var cities = ["Cali", "Bogota", "Medellin"]','var cities = ("Cali", "Bogota", "Medellin")'],
                r:2
            }

            
            ]
    
    }
    else if (questionSelected == 2){
        questions=[
            {
                id:1,
                q: '<strong>To see if three variables are all equal we would use:</strong>',
                options:['(A == B) && (B == C)','(A == B) & (B == C)','(A == B) and (B == C)','(A = B) && (B = C)'],
                r:0
            }, 
            {
                id:2,
                q: '<strong>The code to obtain a random number between 5 and 9 inclusive is:</strong>',
                options:['Math.floor((Math.random() * 5) + 4)','Math.floor((Math.random() * 5) + 5)','Math.floor(Math.random() * 9)','Math.floor((Math.random() * 4) + 4)'],
                r:1
            },
            {
                id:3,
                q: '<strong>You define a method using:</strong>',
                options:['obj.method()','obj.method[]','"obj.method"','obj-method'],
                r:0
            },
            {
                id:4,
                q: '<strong>Which event is specific to the keyboard?</strong>',
                options:['keydown','onclick','"keyboardpress"','keyfocus'],
                r:0
            }, 
            {
                id:5,
                q: '<strong>Which of the following is not a mouse event?</strong>',
                options:['onclick','onmouseover','onmousescroller','onmousemove'],
                r:2
            },
            {
                id:6,
                q: '<strong>How do you round the number 10.35, to the nearest integer?</strong>',
                options:['rnd(10.35)','Math.round(10.35)','round(10.35)','Math.rnd(10.35)'],
                r:1
            },
            {
                id:7,
                q: '<strong>How do you find the number with the highest value of x and y?</strong>',
                options:['Math.top(x, y)','Math.ceil(x, y)','Math.max(x, y)','Math.high(x, y)'],
                r:2
            },
            {
                id:8,
                q: '<strong>What is the correct JavaScript syntax for opening a new window called "mywindow" ?</strong>',
                options:['mywindow = window.open("https://twitter.com/karlgarmor")','mywindow = window.new("https://twitter.com/karlgarmor")','mywindow = window.go("https://twitter.com/karlgarmor")','mywindow = window.start("https://twitter.com/karlgarmor")'],
                r:0
            },
            {
                id:9,
                q: '<strong>How can you detect the client\'s browser name?</strong>',
                options:['browser.name','client.navName','navigator.appName','browser.getName()'],
                r:2
            },
            {
                id:10,
                q: '<strong>Which event occurs when the user clicks on an HTML element?</strong>',
                options:['onclick','onmouseover','onmouseclick','onchange'],
                r:0
            },
            {
                id:11,
                q: '<strong>How do you declare a JavaScript variable?</strong>',
                options:['new myVar','myVar','variable myVar','var myVar'],
                r:3
            },
            {
                id:12,
                q: '<strong>Which operator is used to assign a value to a variable?</strong>',
                options:[':','==','=','->'],
                r:2
            },
            {
                id:13,
                q: '<strong>What will the following code return: Boolean(11 > 7)</strong>',
                options:['NaN','false','true','undefined'],
                r:2
            },
            {
                id:14,
                q: '<strong>Where does JavaScript code generally run?</strong>',
                options:['Client Side','Server side','ISP side','None of the above'],
                r:0
            },
            {
                id:15,
                q: '<strong>What is the statement used to return a value in a JavaScript function?</strong>',
                options:["send","call","start","return"],
                r:3
            },
            {
                id:16,
                q: '<strong>Which of these instructions is correctly written in Javascript?</strong>',
                options:["if (a==0) alert (a);","if (a=0) print a;","if (a==0) { print [a] }","if (a==0): alert(a);"],
                r:0
            },
            {
                id:17,
                q: '<strong>To concatenate character strings in Javascript the character is used:</strong>',
                options:["&",".","@","+"],
                r:3
            },
            {
                id:18,
                q: '<strong>Is it possible to make a form run by JavaScript?</strong>',
                options:["No, this function can only be performed using PHP code, and must therefore be performed on the server.","Yes, in fact the forms are created with Javascript code, so it is Javascript itself that executes them.","Yes, for example, it is enough to pass the identifier of the form to a Javascript function, and apply the command 'submit' to execute that form","No, you cannot pass a Javascript function from a form"],
                r:2
            },
            {
                id:19,
                q: "<strong>What is the correct Javascript syntax to write 'Welcome to Javascript'?</strong>",
                options:["('Welcome to Javascript')","echo 'Welcome to Javascript'","document.write('Welcome to Javascript')","print('Welcome to Javascript')"],
                r:2
            },
            {
                id:20,
                q: '<strong>a ? b : c is equivalent to</strong>',
                options:["if (a){c} else{b}","if (a){b} else{c}","if (a){b}","if (b){a} else{c}"],
                r:1
            },
            {
                id:21,
                q: '<strong>The opposite to onmouseover is:</strong>',
                options:["onmouseoff","onmouseunder","onmouseup","onmouseout"],
                r:3
            },
            {
                id:22,
                q: '<strong>What label catches all values except those specified?</strong>',
                options:["default","otherwise","any","all"],
                r:0
            },
            {
                id:23,
                q: '<strong> Which of the following is NOT a valid function call?</strong>',
                options:["var x = muFunct()","x = myFunct()","myFunct()","myFunct"],
                r:3
            },
            {
                id:24,
                q: '<strong>Which of the following is not a property of the window object?</strong>',
                options:["document","navigator","menu","history"],
                r:2
            },
            {
                id:25,
                q: "<strong>In your JavaScript code, how do you find out which character occurs at the 5th position in a string 'How are you'?</strong>",
                options:["Substring()","String()","CharAt()","Stringlength()"],
                r:2
            }
            
            ]
    
    }
    
    else if (questionSelected == 3){
        questions=[
            {
                id:1,
                q: '<strong>Which of the following do you use for a multi-way branch?</strong>',
                options:['switch','if','if / else','try'],
                r:0
            }, 
            {
                id:2,
                q: '<strong>You work on a JavaScript project. Which of the following correctly describe the relationships of JavaScript and "objects"?</strong>',
                options:['Javascript is Object-oriented','JavaScript is Object-based','Javascript is Object-driven"','Javascripts has no relationship with objects'],
                r:1
            },
            {
                id:3,
                q: '<strong>Your company assigns you to work on a JavaScript project. With the DATE object, which of the following allows you to call a function based on an elapsed time?</strong>',
                options:['setTime()','setElapsedTime()','setTimeout()','setInterval()'],
                r:0
            },
            {
                id:4,
                q: '<strong>You work on a JavaScript project. How do you notify users with messages and at the same time requesting user inputs?</strong>',
                options:['Alert()','Confirm()','Prompt()','Display()'],
                r:2
            }, 
            {
                id:5,
                q: '<strong>What will product output for the following JavaScript code fragment:</strong><p><code>var counter=50;<br>while(counter>15){<br>&nbsp;&nbsp;counter-=5;<br>}<br>document.write(counter);</code></p>',
                options:['10','0','15','error'],
                r:2
            },
            {
                id:6,
                q: '<strong>What will produce output for the following JavaScript code:</strong><p><code>var alpha=(15<20) && ("pen">"Sword");<br>var beta=("big">"tall") && (20<30);<br>document.write(alpha+","+beta);</code></p>',
                options:['false,true','true,false','true,true','false,false'],
                r:1
            },
            {
                id:7,
                q: '<strong>What will produce for the following JavaScript code fragment?</strong><p><code>var BidA="33";<br>var BidB="24";<br>document.write(Math.max(BidA,BidB));</code></p>',
                options:['24','error','33','undefined'],
                r:2
            },
            {
                id:8,
                q: '<strong>Which is the correct JavaScript syntax for "for/in" loop?</strong>',
                options:['for(object in variable){ //statement }','forin(object in variable){ //statement }','forin(variable; test; increment){ //statement }','for(variable in object){ //statement }'],
                r:3
            },
            {
                id:9,
                q: '<strong>What will be the output for the following JavaScript bitwise operation?</strong><p><code>var alpha=5<<1;<br>document.write(alpha);</code></p>',
                options:['10','6','2','4'],
                r:0
            },
            {
                id:10,
                q: '<strong>What will be output for the following JavaScript bitwise operation?</strong><p><code>var a=1;<br>var b=1;<br>var c=0;<br>var d=0;<br>document.write(a^b);<br>document.write(",");<br>document.write(a^c);<br>document.write(",");<br>document.write(c^d);</code></p>',
                options:['0,1,0','1,0,1','1,1,1','0,0,0'],
                r:0
            },
            {
                id:11,
 /**/               q: '<strong>What will produce output for the following JavaScript code?</strong><p><code>function greeting(a,n){<br>&nbsp;&nbsp;for(i=0;i&lt;n;i++){<br>&nbsp;&nbsp;&nbsp;&nbsp;if(a=="m") return "morning "<br>&nbsp;&nbsp;&nbsp;&nbsp;if(a=="e") return "evening "<br><br>&nbsp;&nbsp;}<br>}<br>document.write(greeting("m",3));</code></p>',
                options:['morning morning morning','morning morning','morning','morning evening'],
                r:2
            },
            {
                id:12,
                q: '<strong>To redirect any webpage which of the following code fragment is used to accomplish this in javascript</strong>',
                options:['window.location("http://yourdomain.com/yourpage")','widow.redirect("http://yourdomain.com/yourpage");','widow.redirect="http://yourdomain.com/yourpage";','window.location="http://yourdomain.com/yourpage";'],
                r:3
            },
            {
                id:13,
                q: '<strong>What will produce output for the following JavaScript code:</strong><p><code>var x="10">3;<br>document.write(x);</code></p>',
                options:['null','false','true','Syntax error'],
                r:2
            },
            {
                id:14,
                q: '<strong>What will produce output for the following JavaScript code?</strong><p><code>total=10;<br>for(i=1;i<5;i++){<br>&nbsp;&nbsp;if(i%2) continue;<br>&nbsp;&nbsp;total+=i+2<br>}<br>document.write(total)</code></p>',
                options:['20','28','23','none'],
                r:0
            },
            {
                id:15,
                q: '<strong>To convert string lowercase to uppercase, JavaScript use:</strong>',
                options:["toUpperCase(string)","string.strToUpper()","None","string.toUpperCase()"],
                r:3
            },
            {
                id:16,
                q: '<strong>What will produce for the following JavaScript code:</strong><p><code> var alpha="apples";<br>var beta="Apples";<br>var output=alpha>beta;<br>document.write(output);</code></p>',
                options:["true","false","null","0"],
                r:0
            },
            {
                id:17,
                q: '<strong>The following Javascript code fragments (A and B) is identical to each other?</strong><p><code> <strong>A:</strong><br>var a=2;<br>var b=3;<br>a>b ? alert("It is true") : alert("Not true");</code></p> <p><code> <strong>B:</strong><br>var a=2;<br>var b=3;<br>if (a>b) alert("It is true") else alert("Not true");</code></p>',
                options:["Code in A and B is not identical for output","Both code in A and B are correct syntax for the  identical output","Code A is correct syntax but Code B is incorrect syntax","Both is incorrect syntax"],
                r:1
            },
            {
                id:18,
                q: '<strong>What will be output for the following JavaScript expression?</strong><p><code> var alpha=3*4+7;<br>var beta=3*(4+7);<br>document.write(alpha+","+beta);</code></p>',
                options:["19,19","33,33","19,33","33,19"],
                r:2
            },
            {
                id:19,
                q: '<strong>What is the result?</strong><p><code> Number("1") - 1 == 0;</code></p>',
                options:["false","true","0","error"],
                r:1
            },
            {
                id:20,
                q: '<strong>What is the result? </strong><p><code>String("Hello") === "Hello";</code></p>',
                options:["false","error","undefined","true"],
                r:3
            },
            {
                id:21,
                q: '<strong>What will be output for the following JavaScript expression?</strong><p><code>function bar(){<br>&nbsp;&nbsp;return foo;<br>&nbsp;&nbsp;foo = 10;<br>&nbsp;&nbsp;function foo(){ }<br>&nbsp;&nbsp;var foo = "11";<br>}<br>alert(typeof bar());</code></p>',
                options:['undefined','number','string','function'],
                r:3
            }, 
            {
                id:22,
                q: '<strong>What will be output for the following JavaScript expression?</strong><p><code>(true + false) > 2 + true;</code></p>',
                options:['true','false','TypeError','NaN'],
                r:1
            },
            {
                id:23,
                q: '<strong>What is the result? </strong><p><code>var foo = function foo() {<br>&nbsp;&nbsp;console.log(foo === foo);<br>}<br>foo();  </code></p>',
                options:['true','false','ReferenceError','undefined'],
                r:0
            },
            {
                id:24,
                q: '<strong>What is the result? </strong><p><code> new String("This is a string") instanceof String;<code></p>',
                options:['ReferenceError','TypeError','true','false'],
                r:2
            }, 
            {
                id:25,
                q: '<strong>What will be output for the following JavaScript expression?</strong><p><code>function aaa(){<br>&nbsp;&nbsp;return {test:1};<br>}<br>alert(typeof aaa());</code></p>',
                options:['function','number','object','undefined'],
                r:2
            },
            {
                id:26,
                q: "<strong>What will be output for the following JavaScript expression?</strong><p><code>  var myArr = ['foo', 'bar', 'baz'];<br>console.log(myArr[2]);</code></p>",
                options:['undefined','baz','bar','string'],
                r:1
            },
            {
                id:27,
                q: '<strong>What is the result?</strong><p><code>NaN === NaN;</code></p>',
                options:['true','undefined','false','NaN'],
                r:2
            },
            {
                id:28,
                q: '<strong>What will be output for the following JavaScript expression?</strong><p><code>var arr = [];<br>arr[0] = "a";<br>arr[1] = "b";<br>arr.foo = "c";<br>console.log(arr.length);</code></p>',
                options:['1','2','3','undefined'],
                r:1
            },
            {
                id:29,
                q: '<strong>Which of the following is not a reserved word in JavaScript?</strong>',
                options:['program','interface','throws','short'],
                r:0
            },
            {
                id:30,
                q: '<strong>Predict the output of the following JavaScript code</strong><p><code>var a = "karlgarmor";<br>var result = a.substring(4, 5);<br>document.write(result);</code></p>',
                options:['g','a','garmor','undefined'],
                r:0
            },
            {
                id:31,
     /**/           q: '<strong>Which of the following does the pop() method do?</strong>',
                options:['It increments the total length by 1','It prints the first element but no effect on the length','It decrements the total length by 1','"None of the above options"'],
                r:2
            },
            {
                id:32,
                q: '<strong>What is the JavaScript syntax for printing values in Console?</strong>',
                options:['print(5)','console.print(5);','alert(5)','console.log(5);'],
                r:3
            },
            {
                id:33,
                q: '<strong>What will be the output of the following code?</strong>',
                options:['float','integer','number','double'],
                r:2
            },
            {
                id:34,
                q: '<strong>What will be the command to print the number of characters in the string “karlgarmor”?</strong>',
                options:['document.write("karlgarmor".length);','document.write(lenof("karlgarmor"));','document.write(sizeof("karlgarmor"));','document.write("karlgarmor".len);'],
                r:0
            },
            {
                id:35,
                q: '<strong>What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?</strong>',
                options:["trimmed()","stripped()","strip()","trim()"],
                r:3
            },
            {
                id:36,
                q: '<strong>In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?</strong>',
                options:["isInteger(value)","ifinteger(value)","ifInteger(value)","Integer(value)"],
                r:0
            },
            {
                id:37,
                q: '<strong>Predict the output on the console for the following JavaScript code.</strong><p><code>let myName = "Carlos";<br>let myCity = "Cali";<br>console.log(`My name is ${myName}. My favorite city is ${myCity}.`)</code></p>',
                options:["undefined","My name is ${myName}.My favorite city is ${myCity}.","Compilation Error","My name is Carlos. My favorite city is Cali."],
                r:3
            },
            {
                id:38,
                q: '<strong>Which function of an Array object calls a function for each element in the array?</strong>',
                options:["each()","forEvery()","forEach()","every()"],
                r:2
            },
            {
                id:39,
                q: '<strong>JavaScript is ________ language</strong>',
                options:["a compiled","an interpreted","a Low level","Mobile"],
                r:1
            },
            {
                id:40,
                q: '<strong>Which was the first browser to support JavaScript?</strong>',
                options:["Mozilla Firefox","Netscape","Google Chrome","IE"],
                r:1
            },
            {
                id:41,
                q: '<strong>Predict the output on the console for the following JavaScript code.</strong><p><code>var elem;<br>if ( 11 == 11 && 12 < 10 ){<br>&nbsp;&nbsp;elem = 12;<br>}<br>else {<br>&nbsp;&nbsp;elem = "undefined";<br>}</code></p>',
                options:["true","false","undefined","12"],
                r:2
            },
            {
                id:42,
                q: '<strong>How do you declare a new date in JavaScript?</strong>',
                options:["var date = Date();","var date = date('now');","var date = date().current();","var date = new Date();"],
                r:3
            },
            {
                id:43,
                q: '<strong>Which function is used to load the next URL in the history list?</strong>',
                options:["window.history.next();","window.history.load_next();","window.history.forward();","window.history.load_forward();"],
                r:2
            },
            {
                id:44,
                q: '<strong>How do you get cookies in JavaScript?</strong>',
                options:["window.cookies","location.cookies","document.cookie","document.cookies"],
                r:2
            },
            {
                id:45,
                q: '<strong>How do you get the DOM element with id in JavaScript?</strong>',
                options:["document.getElementById(...)","window.getElementById(...)","page.getElementById(...)","document.innerHTML.getElementById(...)"],
                r:0
            }     
            
            ]
    
        }
    
    else {
        console.log("Questionary Error load")
    }
    //console.log(questionSelected)
    randomQuestion();
    answerTracker();
    pantalla = document.getElementById("timeQuiz");
    start();
}
console.log(questionSelected)

// declare variable for options answers
const questionNum=document.getElementById("qNum");
const question=document.querySelector(".question");
const answerTrackerContainer=document.querySelector(".answer-tracker");
const percent1=document.querySelector(".percentage1");
const percent2=document.querySelector(".percentage2");
const options=document.querySelector(".options").children;
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;
let questions = []

// questions and options and answers






//console.log(Object.values(questions));

// Set Question and Options

function load(){
    ///console.log(questions.length);
    //questionIndex=randomNum;
    
    //questionIndex++;
    questionNum.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    index++;
    //questionIndex++;
    //console.log(questions.length +""+index);
    

}

function check(element){
    //console.log(element.id);
    if(element.id==questions[questionIndex].r){
        //console.log("correct");
        element.classList.add("correct");
        updateAnswerTracker("correct");
        score++;    
        //showScore();
        //console.log("score: "+score);
         }
    else{
        //console.log("wrong");
        element.classList.add("wrong");
        updateAnswerTracker("wrong");  
    }
    //disable all options after select the option
    disabledoption();
   }
   
   function disabledoption(){
   for(let i=0; i<options.length; i++){
       options[i].classList.add("disabled");
       if(options[i].id==questions[questionIndex].r){
           options[i].classList.add("correct");
       }
   }
   }
   
   function enabledoption(){
       for(let i=0; i<options.length; i++){
           options[i].classList.remove("disabled","correct","wrong");
          }
   
   }
   
   
   function validate(){
       if(!options[0].classList.contains("disabled")){
           alert("Please Select One Answer");
       }
       else{
           enabledoption();
           randomQuestion();
           }
   }
   
   
   function next(){
   validate();
   }
   
   function randomQuestion(){
       let randomNumber=Math.floor(Math.random()*questions.length);
       let hitDuplicate=0;
       
       if(index==questions.length){
            testOver();
            
       }
       else{
           
           if(myArray.length>0){
                   for(let i=0; i<myArray.length; i++){
                       if(myArray[i]==randomNumber){
                           hitDuplicate=1;
                           break;
                       }
                   }
                   if(hitDuplicate==1){
                       randomQuestion();
                   }
                   else{
                       questionIndex=randomNumber;
                       load();
                       myArr.push(questionIndex);
                   }          
               }
           if(myArray.length==0){
               //console.log(myArray.length);
                   questionIndex=randomNumber;
                   load();
                   myArr.push(questionIndex);
               }
   
               myArray.push(randomNumber);
                   }
      
   }
   
   function answerTracker(){
           for(let i=0; i<questions.length; i++){
               const div=document.createElement("div");
               answerTrackerContainer.appendChild(div);
               answerTrackerContainer.children[i].innerHTML="Check"+i
           }
   }
   
   function updateAnswerTracker(classNam){
       answerTrackerContainer.children[index-1].classList.add(classNam);
      }


      window.onload=function(){
        
       //showScore();
        //pantalla = document.getElementById("clockText");
        //start();
    
        //var carga = document.getElementById('loader-container')
          //  carga.style.visibility = 'hidden';
           // carga.style.opacity = '0';
    }

    /*function showScore(){
        document.getElementById("user").innerText=score*5;
        
    }*/

    function testOver(){
        //console.log(score);
        var finalscore = (score/questions.length)*100;
        


        if(finalscore >= 90){
            document.querySelector(".testover1").classList.add("show");
            document.querySelector(".time1").innerHTML = timeQ
            percent1.innerHTML= finalscore.toFixed(2) + "%";
            if(questionSelected == 1){
                document.getElementById("badgeFooter").innerHTML = '<img src="./media/BadgeBronzeJS.fw.png" class="img-fluid" alt="Responsive image"></img>'
            }
            if(questionSelected == 2){
                document.getElementById("badgeFooter").innerHTML = '<img src="./media/BadgeSilverJS.fw.png" class="img-fluid" alt="Responsive image"></img>'
            }
            if(questionSelected == 3){
                document.getElementById("badgeFooter").innerHTML = '<img src="./media/BadgeGoldenJS.fw.png" class="img-fluid" alt="Responsive image"></img>'
            }
            //console.log("aqui");
        }
        else{
            document.querySelector(".testover").classList.add("show");
            percent2.innerHTML= finalscore.toFixed(2) + "%";
        }
        
    }



    // time
    var isMarch = false; 
var acumularTime = 0; 
var timeQ
function start () {
         if (isMarch == false) { 
            timeInicial = new Date();
            control = setInterval(cronometro,10);
            isMarch = true;
            }
         }
function cronometro () { 
         timeActual = new Date();
         acumularTime = timeActual - timeInicial;
         acumularTime2 = new Date();
         acumularTime2.setTime(acumularTime); 
         cc = Math.round(acumularTime2.getMilliseconds()/10);
         ss = acumularTime2.getSeconds();
         mm = acumularTime2.getMinutes();
         hh = acumularTime2.getHours()-19;
         if (cc < 10) {cc = "0"+cc;}
         if (ss < 10) {ss = "0"+ss;} 
         if (mm < 10) {mm = "0"+mm;}
         if (hh < 10) {hh = "0"+hh;}
         timeQ = pantalla.innerHTML = hh+" : "+mm+" : "+ss;
         }


         //compartir en twitter
         function twitter(){
            if(questionSelected == 1){
                window.location="https://twitter.com/intent/tweet?text=I%20just%20earned%20a%20badge%20in%20JSQuiz,%20Thanks%20@karlgarmor%20%23Javascript%20%23JSQuiz%20https%3A//imgur.com/V5bP0Gt";
            }
            if(questionSelected == 2){
                window.location="https://twitter.com/intent/tweet?text=I%20just%20earned%20a%20badge%20in%20JSQuiz,%20Thanks%20@karlgarmor%20%23Javascript%20%23JSQuiz%20https%3A//imgur.com/la93Dwf";
            }
            if(questionSelected == 3){
                window.location="https://twitter.com/intent/tweet?text=I%20just%20earned%20a%20badge%20in%20JSQuiz,%20Thanks%20@karlgarmor%20%23Javascript%20%23JSQuiz%20https%3A//imgur.com/QhQl9Bj";
            }
            
            }