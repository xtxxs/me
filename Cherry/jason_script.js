(function(){


    $(document).ready(function(){

        setTimeout(function(){
            $(".jd-load-xatspace").animate({
                "opacity":"0",
                "z-index":"-1"         
            }, 500)
        }, 8000);
    })

    VanillaTilt.init(document.querySelectorAll(".jd-item-menu"), {
        max: 25,
        speed: 400
    });
    
    var home = true,
        about = false,
        friend = false,
        video = false,
        love = false;

///////////////////MENU PRINCIPAL FUNÇAO/////////////////////

    $(".jd-item-menu").each(function(){

        $(this).on('click', function(){

            removeMenu()

            var page = $(this).attr("data-page");

            setTimeout(function(){

                switch(page){

                    case 'about':
                        about = true;
                        home = false;
                        if(about == true){

                            $("#about").animate({
                                "left":"50%"
                            },500)
                        }
                    break;

                    case 'friend':
                        friend = true;
                        home = false;
                        if(friend == true){

                            $("#friend").animate({
                                "left":"50%"
                            }, 500)
                        }
                    break;

                    case 'video':
                        video = true;
                        home = false;
                        if(video == true){

                            $("#video").animate({
                                "left":"50%"
                            }, 500)
                        }
                    break;

                    case 'love':
                        love = true;
                        home = false;
                        if(love == true){

                            $("#love").animate({
                                "left":"50%"
                            }, 500)
                        }
                    break;

                }
            }, 500);
        })
        
    });

/////////////////////CLOSE BTN FUNÇAO/////////////////////////////

    $(".jd-btn-close").each(function(){

        $(this).on('click', function(){

            var page = $(this).attr("data-page");

            $(".jd-menu-footer").removeClass("show");
            $(".jd-bar").removeClass("close");

            switch(page){

                case 'about':
                    if(about == true){
                        about = false;
                        $("#about").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#about").css({"left":"-150%"})
                                addMenu()
                                home = true;
                            }
                        })
                    }
                break;

                case 'video':
                    if(video == true){
                        video = false;
                        $("#video").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#video").css({"left":"-150%"})
                                addMenu()
                                home = true;
                            }
                        })
                    }
                break;

                case 'friend':
                    if(friend == true){
                        friend = false;
                        $("#friend").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#friend").css({"left":"-150%"})
                                addMenu()
                                home = true;
                            }
                        })
                    }
                break;

                case 'love':
                    if(love == true){
                        love = false;
                        $("#love").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#love").css({"left":"-150%"})
                                addMenu()
                                home = true;
                            }
                        })
                    }
                break;
            }
        })
    })

///////////////////MENU SECUNDARIO FUNÇAO/////////////////////////////

    $(".jd-item-menu-footer").each(function(){

        $(this).on('click', function(){

            var page = $(this).attr("data-page");

            switch(page){

                case 'home':
                    if(home == false && about == true){
                        $("#about").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                addMenu()
                                $("#about").css({"left":"-150%"})
                                $(".jd-menu-footer").removeClass("show")
                                $(".jd-bar").removeClass("close")
                                home = true;
                                about = false;
                            }
                        })
                    }
                    if(home == false && friend == true){
                        $("#friend").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                addMenu()
                                $("#friend").css({"left":"-150%"})
                                $(".jd-menu-footer").removeClass("show")
                                $(".jd-bar").removeClass("close")
                                home = true;
                                friend = false;
                            }
                        })
                    }
                    if(home == false && video == true){
                        $("#video").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                addMenu()
                                $("#video").css({"left":"-150%"})
                                $(".jd-menu-footer").removeClass("show")
                                $(".jd-bar").removeClass("close")
                                home = true;
                                video = false;
                            }
                        })
                    }
                    if(home == false && love == true){
                        $("#love").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                addMenu()
                                $("#love").css({"left":"-150%"})
                                $(".jd-menu-footer").removeClass("show")
                                $(".jd-bar").removeClass("close")
                                home = true;
                                love = false;
                            }
                        })
                    }
                break;

                case 'about':
                    if(about == false && friend == true){
                        $("#friend").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#friend").css({"left":"-150%"})
                                $("#about").animate({
                                    "left":"50%"
                                }, 500)
                                about = true;
                                friend = false;
                            }
                        })
                    }
                    if(about == false && video == true){
                        $("#video").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#video").css({"left":"-150%"})
                                $("#about").animate({
                                    "left":"50%"
                                }, 500)
                                about = true;
                                video = false;
                            }
                        })
                    }
                    if(about == false && love == true){
                        $("#love").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#love").css({"left":"-150%"})
                                $("#about").animate({
                                    "left":"50%"
                                }, 500)
                                about = true;
                                love = false;
                            }
                        })
                    }
                break;

                case 'video':
                    if(video == false && friend == true){
                        $("#friend").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#friend").css({"left":"-150%"})
                                $("#video").animate({
                                    "left":"50%"
                                }, 500)
                                video = true;
                                friend = false;
                            }
                        })
                    }
                    if(video == false && about == true){
                        $("#about").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#about").css({"left":"-150%"})
                                $("#video").animate({
                                    "left":"50%"
                                }, 500)
                                video = true;
                                about = false;
                            }
                        })
                    }
                    if(video == false && love == true){
                        $("#love").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#love").css({"left":"-150%"})
                                $("#video").animate({
                                    "left":"50%"
                                }, 500)
                                video = true;
                                love = false;
                            }
                        })
                    }
                break;

                case 'friend':
                    if(friend == false && about == true){
                        $("#about").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#about").css({"left":"-150%"})
                                $("#friend").animate({
                                    "left":"50%"
                                }, 500)
                                friend = true;
                                about = false;
                            }
                        })
                    }
                    if(friend == false && video == true){
                        $("#video").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#video").css({"left":"-150%"})
                                $("#friend").animate({
                                    "left":"50%"
                                }, 500)
                                friend = true;
                                video = false;
                            }
                        })
                    }
                    if(friend == false && love == true){
                        $("#love").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#love").css({"left":"-150%"})
                                $("#friend").animate({
                                    "left":"50%"
                                }, 500)
                                friend = true;
                                love = false;
                            }
                        })
                    }
                break;

                case 'love':
                    if(love == false && friend == true){
                        $("#friend").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#friend").css({"left":"-150%"})
                                $("#love").animate({
                                    "left":"50%"
                                }, 500)
                                love = true;
                                friend = false;
                            }
                        })
                    }
                    if(love == false && video == true){
                        $("#video").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#video").css({"left":"-150%"})
                                $("#love").animate({
                                    "left":"50%"
                                }, 500)
                                love = true;
                                video = false;
                            }
                        })
                    }
                    if(love == false && about == true){
                        $("#about").animate({
                            "left":"150vw"
                        }, {
                            duration: 500,
                            complete: function(){
                                $("#about").css({"left":"-150%"})
                                $("#love").animate({
                                    "left":"50%"
                                }, 500)
                                love = true;
                                about = false;
                            }
                        })
                    }
                break;
            }
        })
    })

//////////////////////////SHOW MENU SECUNDARIO//////////////////////////

    $(".jd-btn-menu").on('click', function(){
        $(".jd-bar").toggleClass("close")
        $(".jd-menu-footer").toggleClass("show")
    })

////////////////////////////REMOVER MENU FUNÇAO///////////////////////

    function removeMenu(){

        $("#btn-one").animate({
            "top":"-150vh"
        }, 500)
        setTimeout(function(){
            $("#btn-two").animate({
                "top":"-150vh"
            }, 500)
            setTimeout(function(){
                $("#btn-tree").animate({
                    "top":"-150vh"
                }, 500)
                setTimeout(function(){
                    $("#btn-four").animate({
                        "top":"-150vh"
                    }, {
                        duration:500,
                        complete: function(){
                            setTimeout(function(){
                                $(".jd-item-menu").css({"top":"150vh"})
                            }, 500)
                            $(".jd-btn-menu").addClass("show")
                        }
                    })
                }, 100)
            }, 100)
        },100)
    }


/////////////////////ADICIONAR MENU FUNÇAO/////////////////////////

    function addMenu(){

        $("#btn-one").animate({
            "top":"0"
        }, 500)
        setTimeout(function(){
            $("#btn-two").animate({
                "top":"0"
            }, 500)
            setTimeout(function(){
                $("#btn-tree").animate({
                    "top":"0"
                }, 500)
                setTimeout(function(){
                    $("#btn-four").animate({
                        "top":"0"
                    }, 500)
                }, 100)
            }, 100)
            $(".jd-btn-menu").removeClass("show")
        }, 100)
    }

////////////////////////////AUDIO//////////////////////////

    var audio = new Audio();
    var source = 'dez_coracao.mp3';

    audio.volume = 0.5;
    //audio.autoplay = true;
    audio.src = source;

    $(".jd-sound-controll").on('click', function(){

        if(audio.paused){
            audio.src = source;
            audio.play();
        }
        else{
            audio.pause();
            audio.src = '';
            $(".jd-txt").text('Sound Off');
            $("#sound").addClass("fa-volume-down");
            $("#sound").removeClass("fa-volume-up");
        }
    })

    $(audio).on('playing', function(){
        $(".jd-txt").text('Sound On');
        $("#sound").removeClass("fa-volume-down");
        $("#sound").addClass("fa-volume-up");
    })

    $(audio).on('pause', function(){
        $(".jd-txt").text('Sound Off');
        $("#sound").addClass("fa-volume-down");
        $("#sound").removeClass("fa-volume-up");
    })

/////////////////////////FRIENDS//////////////////////////////

    var _friends = [
        {
            name: 'Jason',
            url: 'https://xat.me/JasonOficial',
            img: 'https://i.postimg.cc/7HSBNGTC/gif-03.png',
            width: 5000
        },
        {
            name: 'Nathy',
            url: 'https://xat.me/xNathy',
            img: 'https://i.postimg.cc/zvFzjzYL/nathy.png',
            width: 350
        },
        {
            name: 'Wason',
            url: 'https://xat.me/HeldDesign',
            img: 'https://i.postimg.cc/8kRzDHf1/wason.png',
            width: 1050
        },
        {
            name: 'Drika',
            url: 'https://xat.me/Drika',
            img: 'https://i.postimg.cc/TdQbGfz7/gif-04.png',
            width: 5000
        },
        {
            name: 'Erick',
            url: 'https://xat.me/VaLLenatos',
            img: 'https://i.postimg.cc/TwmYKjkJ/erick.png',
            width: 250
        },
        {
            name: 'Louis',
            url: 'https://xat.me/xLouis',
            img: 'https://i.postimg.cc/rskyxd3X/louis.png',
            width: 200
        }
    ];

    var content = document.querySelector(".jd-group-friend");
    var i = 0;
    var box = '';
    
    while(i < _friends.length){

        nome = _friends[i].name;
        link = _friends[i].url;
        avatar = _friends[i].img;
        w = _friends[i].width;

        var _width = w,
            _height = 50,
            _time,
            _steps;

            _time = _width / _height;
            _steps = _time - 1;

            box = '<div class="jd-row">'+
                '<div class="jd-avatar" style="width:50px;height:50px;background-image:'+
                'url('+avatar+');background-position:left top;animation:loop '+_time/10+'s steps('+_steps+') infinite;"></div>'+
                '<div class="jd-data-friend">'+
                    '<i class="fas fa-user-circle"></i>'+
                    '<span>'+nome+'</span>'+
                    '<a href="'+link+'" target="_blank">xat.me</a>'+
                '</div>'+
               '</div>';

        content.innerHTML += box;

        i++;
    }

})();