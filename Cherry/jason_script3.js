(function(){

    VanillaTilt.init(document.querySelectorAll(".jd-item-menu"), {
        max: 25,
        speed: 400
    });
    
    var home = true,
        about = false,
        friend = false,
        video = false,
        love = false;

    $(".jd-item-menu").each(function(){

        $(this).on('click', function(){

            home = false;

            var page = $(this).attr("data-page");

            gsap.to(".jd-item-menu", {duration: 1, top: "-80vh", stagger: 0.2, ease: Power2.easeIn});

            setTimeout(function(){

                switch(page){

                    case 'about':
                        about = true;

                        if(about == true){

                            $(".jd-item-menu").css({"opacity":"0"});
                            $("#about").animate({
                                "left":"50%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    
                                    $(".jd-item-menu").animate({
                                        "top":"150%"
                                    }, {
                                        duration: 0,
                                        complet: function(){

                                            $(".jd-item-menu").css({"opacity":"1"});
                                        }
                                    });
                                }
                            })
                        }

                        if(about == true && video == true){

                            $("#video").animate({
                                "left":"150%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    $("#video").css({"left":"-150%"});
                                    $("#about").animate({
                                        "left":"50%"
                                    }, 500)
                                }
                            })
                        }

                        if(about == true && friend == true){

                            $("#friend").animate({
                                "left":"150%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    $("#friend").css({"left":"-150%"});
                                    $("#about").animate({
                                        "left":"50%"
                                    }, 500)
                                }
                            })
                        }

                        if(about == true && love == true){

                            $("#love").animate({
                                "left":"150%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    $("#love").css({"left":"-150%"});
                                    $("#about").animate({
                                        "left":"50%"
                                    }, 500)
                                }
                            })
                        }
                    break;

                    case 'friend':
                        friend = true;

                        if(friend == true){

                            $(".jd-item-menu").css({"opacity":"0"});
                            $("#friend").animate({
                                "left":"50%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    
                                    $(".jd-item-menu").animate({
                                        "top":"150%"
                                    }, {
                                        duration: 0,
                                        complet: function(){

                                            $(".jd-item-menu").css({"opacity":"1"});
                                        }
                                    });
                                }
                            })
                        }

                        if(friend == true && video == true){

                            $("#video").animate({
                                "left":"150%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    $("#video").css({"left":"-150%"});
                                    $("#friend").animate({
                                        "left":"50%"
                                    }, 500)
                                }
                            })
                        }

                        if(friend == true && love == true){

                            $("#love").animate({
                                "left":"150%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    $("#love").css({"left":"-150%"});
                                    $("#friend").animate({
                                        "left":"50%"
                                    }, 500)
                                }
                            })
                        }

                        if(friend == true && about == true){

                            $("#about").animate({
                                "left":"150%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    $("#about").css({"left":"-150%"});
                                    $("#friend").animate({
                                        "left":"50%"
                                    }, 500)
                                }
                            })
                        }
                    break;

                    case 'video':
                        video = true;

                        if(video == true){

                            $(".jd-item-menu").css({"opacity":"0"});
                            $("#video").animate({
                                "left":"50%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    
                                    $(".jd-item-menu").animate({
                                        "top":"150%"
                                    }, {
                                        duration: 0,
                                        complet: function(){

                                            $(".jd-item-menu").css({"opacity":"1"});
                                        }
                                    });
                                }
                            })
                        }

                        if(video == true && friend == true){

                            $("#friend").animate({
                                "left":"150%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    $("#friend").css({"left":"-150%"});
                                    $("#video").animate({
                                        "left":"50%"
                                    }, 500)
                                }
                            })
                        }

                        if(video == true && friend == true){

                            $("#friend").animate({
                                "left":"150%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    $("#friend").css({"left":"-150%"});
                                    $("#video").animate({
                                        "left":"50%"
                                    }, 500)
                                }
                            })
                        }

                        if(video == true && about == true){

                            $("#about").animate({
                                "left":"150%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    $("#about").css({"left":"-150%"});
                                    $("#video").animate({
                                        "left":"50%"
                                    }, 500)
                                }
                            })
                        }
                    break;

                    case 'love':
                        love = true;

                        if(love == true){

                            $(".jd-item-menu").css({"opacity":"0"});
                            $("#love").animate({
                                "left":"50%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    
                                    $(".jd-item-menu").animate({
                                        "top":"150%"
                                    }, {
                                        duration: 0,
                                        complet: function(){

                                            $(".jd-item-menu").css({"opacity":"1"});
                                        }
                                    });
                                }
                            })
                        }

                        if(love == true && video == true){

                            $("#video").animate({
                                "left":"150%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    $("#video").css({"left":"-150%"});
                                    $("#love").animate({
                                        "left":"50%"
                                    }, 500)
                                }
                            })
                        }

                        if(love == true && friend == true){

                            $("#friend").animate({
                                "left":"150%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    $("#friend").css({"left":"-150%"});
                                    $("#love").animate({
                                        "left":"50%"
                                    }, 500)
                                }
                            })
                        }

                        if(love == true && about == true){

                            $("#about").animate({
                                "left":"150%"
                            }, {
                                duration: 500,
                                complete: function(){
                                    $("#about").css({"left":"-150%"});
                                    $("#love").animate({
                                        "left":"50%"
                                    }, 500)
                                }
                            })
                        }
                    break;

                }
            }, 1800);
        })
    });


    $(".jd-btn-close").each(function(){

        $(this).on('click', function(){

            var page = $(this).attr("data-page");

            switch(page){

                case 'about':
                    home = true;
                    $("#about").animate({
                        "left":"150%"
                    }, {
                        duration: 500,
                        complete: function(){
                            gsap.from(".jd-item-menu", {duration: .5, top: "0", stagger: 0.2, ease: Power2.easeOut});
                        }
                    })
                break;

                case 'video':

                break;

                case 'friend':

                break;

                case 'love':

                break;
            }
        })
    })

})();