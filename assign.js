function CalculateResult(){
    let n= document.getElementById("subject").value;
    let total=0;
    for(let i=1;i<=n;i++){
        let marks= parseFloat(prompt("enter your marks"+ i));
        total=total+marks;
    }
    let grade;
    let result;
    let average=total/n;
    if(average>=95){
        grade="A+";
    }
    else if(average>=85){
      grade="A"
    }
    else if(average>=75){
        grade="B";
    }
    else if(average>=55){
        grade="C";
     }
    else if(average>=45){
       grade="D";
      }
    else if(average>=35){
       grade="E";
      }
    else{
      grade="F";
      }
      if(average>30){
        result="PASS";
      }
      else{
        result="FAIL";
      }
      document.getElementById("result").innerHTML=
      "TOTAL MARKS:" + average.toFixed(2)+ "<br>"+
      "Grade: "+ grade + "<br>"+
      "result: "+ result;
}

