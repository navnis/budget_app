// BUDGET CONTROLlER

var budgetController = (function(){
    //some Code
})();

// UI Controller
var UIContoller= (function(){
    //some Code
})();

//Global app Controller
var controller = (function(budgetController, UICtrl){

    document.querySelector('.add__btn').addEventListener('click', function(){
        
    });


    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13) {
            console.log('ENTer WAs Pressed.');
        }
    });
})(budgetController, UIContoller);