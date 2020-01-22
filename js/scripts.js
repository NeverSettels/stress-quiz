$(document).ready(() => {
  $('#stress').submit(event => {
    event.preventDefault();
    var result=0;
    const questions = ["negative-effect", "symptoms", "coping-mechs"];
    questions.forEach(question => {if(!isNaN(parseInt($(`input:checkbox[name=${question}]:checked`).val())))result+=parseInt($(`input:checkbox[name=${question}]:checked`).val())})
    
    

    if (result >= 6)  alert("Please seek professional help");
    else if (0 < result && result < 6) alert("Take a deep breath")
    else  alert("You're doing fine, get out of here")
  });
});

// questions.forEach(question => {
//   var temp = parseInt($(`input:checkbox[name=${question}]:checked`).val())
//   if(!isNaN(temp)){
//      result += temp
//     }; 
// });