$('#post-form').on('submit', function(event){
    var name = $('#Name').val();
    var email = $('#Email').val();
    $.post("/postmethod", {
         jsName: name,
         jsEmail: email
         },function(){
             alert("Success: Your name is: "+name+ " and your email is " + email); 
     });
});