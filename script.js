$(document).ready(function(){
    $(".conten1").show();
    $(".conten2").hide();
    $(".conten3").hide();
    $(".conten4").hide();

    //hover 

    $("a").hover(function(){
        $(this).css({
            'color':'#BD3147'
        });
    }, function(){
        $(this).css({
            'color':'white'
        });
    });

    
    $("#aboutme").click(function(){
        $(".conten1").show();
        $(".conten2").hide();
        $(".conten3").hide();
        $(".conten4").hide();
       
    });
    $("#education").click(function(){
        $(".conten1").hide();
        $(".conten2").show();
        $(".conten3").hide();
        $(".conten4").hide();
       
    });
    $("#expe").click(function(){
        $(".conten1").hide();
        $(".conten2").hide();
        $(".conten3").show();
        $(".conten4").hide();
        
    });
    $("#project").click(function(){
        $(".conten1").hide();
        $(".conten2").hide();
        $(".conten3").hide();
        $(".conten4").show();
        
    })
});
