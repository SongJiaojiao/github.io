(function($) {

  $.fn.visible = function(partial) {
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  }; 
})(jQuery);




$(document).ready(function(){
    

  $(".add-next").delay(800).animate({
       opacity: 1
      }, { duration: 400, queue: true }); 

 
    $(".page-footer").load("../page/footer.html"); 
    $(".clock").load("../page/clock.html"); 

    //nav toggler
    var $hamburger = $(".hamburger");
            $hamburger.on("click", function() {
                $hamburger.toggleClass("is-active");
            });

    $(".menu-button").click(function(){
        $("#overlay").toggle("slide", {direction:"right"}, 300);
        $(".navbar-vertical li").each(function(i) {
            $(this).delay(80 * i).slideToggle(400);
        });
          });

    
    //ABOUT PAGE--------------------------------
    //image hover effect

    $(".fun-fact").mouseenter(function(){
            $(this).find(".color-cover").animate({
                    opacity:0.4
            },{ duration: 150, queue: false });
            $(this).children('img').css({"transform":"scale(1.2)"});
        });

    $(".fun-fact").mouseleave(function(){
            $(this).find(".color-cover").animate({
                    opacity:0
            },{ duration: 200, queue: false });
            $(this).children('img').css({"transform":"scale(1)"});
            $(this).find(".white_des").animate({
                    marginTop: "200px", 
                    opacity: 0
                }, { duration: 400, queue: true });
        });  


    //ABOUT PAGE END--------------------------------

    //Modal

    var crtproject = ''
    
    $('#myModal').on('show.bs.modal', function(e) {
        var pjID = $(e.relatedTarget).data('pjid');
        crtproject = pjID
       

    }); 

    $(".checkPasscode").click(function(){
        var userinput = $("#project1Passcode").val(); 
        checkPasscode(userinput,crtproject);

        
    });



    
    
     $('.modal').on('hidden.bs.modal', function(){
        $(this).find('#project1Passcode').val('').end();
        $(this).find("#validation").css("display2", "none");
    });
    
    
 
    //btn-scroll
    $(".scroll-btn").click(function(){
        $('html, body').animate({
        scrollTop: ($(".designhilights").first().offset().top)
    },700);
    });

    checkSize();
    $(window).resize(checkSize);

    AOS.init({
      duration: 1200,
    })
    
});





function checkPasscode(userinput,crtproject){
    if (userinput=="1625"){
        $('.modal').modal('hide');
        if (crtproject=='credit'){
             window.open('../page/credit.html')
        }
        if (crtproject=='borrowersummary'){
            window.open('../page/BorrowerSummary.html')

        }
       
    }

    else {
        $("#validation").css("display2", "block");        
        } 
}




//move overlay
function checkSize(){
    //if screen > 992
    if ($("#overlay").css("display2") == "none" ){
        $(".hamburger").removeClass("is-active");
    }
    //if screen <= 992
    if ($("#overlay").css("display2") == "block" && !$(".hamburger").hasClass("is-active") ){
        $("#overlay").hide();
        $(".navbar-vertical li").hide();
    }
    
}


// $(document).bind("contextmenu",function(e) {
//     e.preventDefault();
//    });
//    $(document).keydown(function(e){
//        if(e.which === 123){
//           return false;
//        }
//    });