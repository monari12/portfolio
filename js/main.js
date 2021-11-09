// main.js
$(function(){
    
    AOS.init();

    Fancybox.bind(".graphic-box a", {
        groupAll : true, // Group all items
        on : {
        ready : (fancybox) => {
            // 클릭시 실행되는 함수
            console.log('함수실행');
        }
        }
    });

});