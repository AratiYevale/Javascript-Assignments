
const mark = prompt("ENTER THE MARK");
console.log("Using Ternary Statement")
grade = mark < 50 ? "Grade : Fail" : mark < 60 ? "Grade : F" : mark < 70 ? "Grade : D" : mark < 80 ? "Grade : C" : mark < 90 ? "Grade : B" : mark < 100 ? "Grade : A" : "Grade :S";
    console.log(grade)



console.log("Using Conditional Satement")
    if (mark < 50) {
      console.log("Grade : Fail")
    }
    else if (mark < 60) {
      console.log("Grade : E");
    }
    else if (mark < 70) {
      console.log("Grade : D");
    }
    else if (mark < 80) {
      console.log("Grade : C");
    }
    else if (mark < 90) {
      console.log("Grade : B");
    }
    else if (mark < 100) {
      console.log("Grade : A");
    }
    else {
      console.log("Grade : S");
    }

    console.log("Using Switch Case Satement")

    switch((mark >= 60 && mark <= 100) ? 1 : (mark > 50 && mark < 60) ? 2 : 3 )
     {
            case 1 :console.log("Grade A");break;
            case 2 :console.log("Grade B");break;
            case 3 :console.log("Grade C");break;
            
    }