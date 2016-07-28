/*TODO: Sort everything in some kind of useful order*/


//When the jQuery Mobile starts to execute, it triggers a mobileinit event on the document object,
//to which you can bind to apply overrides to jQuery Mobile's defaults.
$(document).bind("mobileinit", function() {
    $.mobile.allowCrossDomainPages = true;
    $.mobile.orientationChangeEnabled = false;
    //TODO:Is this still wroking?
    /*$.mobile.zoom = "disable";*/
    $.mobile.loadingMessageTheme = "d";
    // 0 can cause selection of buttons when scrolling
    $.mobile.hoverDelay = 200;
    $.mobile.pushStateEnabled = false;
});

//Used with animate.css
//Example: $('#yourElement').animateCss('bounce');
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

var oneMoreKK = 0;
var oneMoreVCK = 0;

//Resets the VCK-form
function clearVC() {
    console.log('Clearing VC-Kurt');
    $('#vcq2').val('null').selectmenu('refresh');
    $('#vcpage input[type=radio]').attr('checked', false).next("label").removeClass("ui-btn-active");
    $('#vcpage :radio').attr('checked', false).checkboxradio("refresh");
    //Comments
    $("#vcq14").val("");
    //Lottery
    $("#vcq16").val("");
    //Operating System
    $("#vcq17").val("");
    //Hide form
    $("#vcOrt").hide();
    $("#restOfVC").hide();
    console.log('VC-Kurt cleared');
}

//Resets the KK-form
function clearKK() {
    console.log('Clearing Klinik-Kurt');
    $('#kkq1').val('null').selectmenu('refresh');
    $('#kkq2').val('null').selectmenu('refresh');
    $('#kkq3').val('null').selectmenu('refresh');
    $('#kkq4').val('null').selectmenu('refresh');
    $('input[type=radio]').attr('checked', false).next("label").removeClass("ui-btn-active");
    $('#kkpage :radio').attr('checked', false).checkboxradio("refresh");
    //Name a tutor
    $("#kkq15").val("");
    //Explain your choice
    $("#kkq16").val("");
    //Comments
    $("#kkq17").val("");
    //Lottery
    $("#kkq19").val("");
    //Submit button
    $('#KKopendialog').addClass('ui-disabled');
    $("#kkfr3").hide();
    $("#kkfr4").hide();
    $(".fewq").show();
    $(".moreq").hide();
    $("#kkt5").hide();
    $("#kkt6").hide();
    $("#kkt7").hide();
    $("#kkt8").hide();
    $("#kkt9").hide();
    //Choose a semester message
    $("#terminfo").removeClass("slideOutDown");
    $("#terminfo").show();
    $("#ortcont").hide();
    $("#restofkk").hide();
    /*$.mobile.changePage("#tackkkbody", {
     transition: "slidefade"
     });*/
    console.log('Klinik-Kurt cleared');
}

/*function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    } else {
        return [0, 0, 0];
    }
}
var pushNotification;
var ver = new Array();
ver = iOSversion();
*/

//Executes when all content is loaded
function onBodyLoad() {
    console.log("onBodyLoad initiated");
    //    StatusBar.overlaysWebView(true);
    //Executes when cordova.js is fully loaded
    document.addEventListener("deviceready", onDeviceReady, false);
    //document.addEventListener("deviceready", initPushwoosh, false);

    /*//Moves headers dues to sta
    if (ver[0] >= 7) {
        window.plugins.webviewcolor.change('#FFFFFF');
        //$(".ui-header .ui-title").css("padding-top", "10px");
        //$(".ui-header .ui-btn-left").css("margin-top", "10px");
        //$("#omalltitles").css("padding-top", "10px");
        //$("#omallbackbtn").css("margin-top", "10px");
    }*/
}

/*function initPushwoosh() {
    var pushNotification = window.plugins.pushNotification;

    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;

        if (typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }

        alert(title);
    });

    //initialize Pushwoosh with projectid: "996348093822", appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({
        projectid: "996348093822",
        appid: "C25C8-A3BC7"
    });

    //register for pushes
    pushNotification.registerDevice(function(status) {
        var pushToken = status;
        console.warn('push token: ' + pushToken);
    }, function(status) {
        console.warn(JSON.stringify(['failed to register ', status]));
    });
}*/

//TODO: Sort out the splashscreen
function onDeviceReady() {
    console.log("DeviceReady");

    //Prefetch pages
    function preFetch() {
        console.log("Fetching");
        $.mobile.loadPage("#hem");
        $.mobile.loadPage("#kkpage");
        $.mobile.loadPage("#vcpage");
        $.mobile.loadPage("#vadfylltjag");
        $.mobile.loadPage("#omall");
        console.log("Prefetched");
    }

    preFetch();
    /*navigator.splashscreen.show();*/
    /*var devicePlatform = device.platform;
    if (devicePlatform === "Android") {
        var link = document.createElement("link");
        link.href = "css/androidspecific.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    }*/

/*
 document.addEventListener("backbutton", function (e) {
            e.preventDefault();
        }, false );
        */

    /*$("#toKlinikkurt").hide();
    $("#toVcKurt").hide();
    $("#toIfyllt").hide();
    $("#toOmAll").hide();*/
    /*$("#newcontcover").hide();*/
    /*$("#newcont").height(function() {
        $(window).height();
    });*/
    /*$("#newcontcover").height(function() {
        $(window).height();
    });*/
    document.addEventListener("offline", onOffline, false);
    /*$("#splash").show();*/

    //TODO: Needed?
    /*window.deviceOS = device.platform;*/

/*
    ranNum = Math.floor((Math.random() * 10) + 1);
    console.log(ranNum);
    if (ranNum === 1) {
        window.introClass = 'bounceInLeft';
    } else if (ranNum === 2) {
        window.introClass = 'bounceInRight';
    } else if (ranNum === 3) {
        window.introClass = 'bounceInDown';
    } else {
        window.introClass = 'bounceInUp';
    }

    setTimeout(function() {
        cordova.exec(null, null, "SplashScreen", "hide", []);
        setTimeout(function() {
            $("#toOmAll").addClass(introClass).show().delay(300).queue(function() {
                $("#toIfyllt").addClass(introClass).show().delay(300).queue(function() {
                    $("#toVcKurt").addClass(introClass).show().delay(300).queue(function() {
                        $("#toKlinikkurt").addClass(introClass).show().delay(300).queue(function() {
                            //                            $("#newcontcover").show().delay(1600).queue(function() {
                            $("#splash").hide();
                            $("#newcont").addClass("hemcontbg");
                            //                            });
                        });
                    });
                });
            });
        }, 100);
    }, 100);*/


    /*
    $("#vftbtn").on('tap', vadfyllterminTapHandler);
    				function vadfyllterminTapHandler(event) {
    					console.log('termintap');
    					if (VadFyllt === "jag") {
    						console.log('vadfyllttermintap');
    						window.VadFyllt = "termin";
    						$("#vfjcont").removeClass('fadeIn').addClass('fadeOut').delay(750).queue(function() {
    							$(this).hide();
    							$(this).dequeue();
    						});
    						$("#vfjtitle").removeClass('fadeIn').addClass('fadeOut').delay(750).queue(function() {
    							$(this).hide();
    							$(this).dequeue();
    						});
    						$("#tabD").removeClass('ui-btn-active');
    						$("#vftcont").delay(751).queue(function() {
    							$(this).removeClass('fadeOut').addClass('fadeIn').show();
    							$(this).dequeue();
    						});
    						$("#vfttitle").delay(751).queue(function() {
    							$(this).removeClass('fadeOut').addClass('fadeIn').show();
    							$(this).dequeue();
    						});
    						$("#tabE").addClass('ui-btn-active');

    						event.stopImmediatePropagation();
    						return false;
    					} else {
    						console.log('nope');
    					}
    				}


    				$("#vfjbtn").on('tap', vadfylljagTapHandler);
    				function vadfylljagTapHandler(event) {
    					console.log('jagtap');
    					if (VadFyllt === "termin") {
    						window.VadFyllt = "jag";
    						console.log('vadfylltjagtap');
    						$("#vftcont").addClass('fadeOut').delay(750).queue(function() {
    							$(this).hide();
    							$(this).dequeue();
    						});
    						$("#vfttitle").addClass('fadeOut').delay(750).queue(function() {
    							$(this).hide();
    							$(this).dequeue();
    						});
    						$("#tabE").removeClass('ui-btn-active');
    						$("#vfjcont").delay(751).queue(function() {
    							$(this).removeClass('fadeOut').addClass('fadeIn').show();
    							$(this).dequeue();
    						});
    						$("#vfjtitle").delay(751).queue(function() {
    							$(this).removeClass('fadeOut').addClass('fadeIn').show();
    							$(this).dequeue();
    						});
    						$("#tabD").addClass('ui-btn-active');
    						event.stopImmediatePropagation();
    						return false;
    					} else {
    						console.log('nope');
    					}
    				}


    				$("[data-position='fixed']").fixedtoolbar({
    					tapToggle : false,
    					updatePagePadding : true,
    					visibleOnPageShow : true
    				});*/



    function onConfirmLogin(buttonIndex) {
      console.log('You selected button ' + buttonIndex);
      if(buttonIndex == 1 || buttonIndex == 0){
        var iframe = $('#loginout');
        var url="https://cas.weblogin.uu.se/Shibboleth.sso/Logout"
        var url2="http://www.sitedev.beachtime.se/cas/cas2.php"
        var user = window.localStorage.getItem("user");

        if ( iframe.length ) {
            iframe.attr('src',url);
            window.localStorage.removeItem("user");
            setTimeout(function() {
              iframe.attr('src',url2);
              $.mobile.changePage("#login", {

              });
            }, 1000);
        }
      }

      else if(buttonIndex==2){
        console.log(window.localStorage.getItem("user"));
        var user = window.localStorage.getItem("user");
        $("#klinik-kurt-username").val(user);
        $("#vc-kurt-username").val(user);
        //("#klinik-kurt-username").val("rise6452");
        //console.log("var user =" + user);
        console.log("klinik-kurt-username =" + $("#klinik-kurt-username").val());
        console.log("vc-kurt-username =" + $("#vc-kurt-username").val());


      }
    }

    // Show a custom confirmation dialog
    function showConfirm() {
     var user = window.localStorage.getItem("user");
     navigator.notification.confirm(
          'Du är inloggad som ' + user + '.', // message
          onConfirmLogin, // callback to invoke with index of button pressed
          'Användare', // title
          ['Byt användare', 'Fortsätt'] // buttonLabels
      );
    }

    if (window.localStorage.getItem("user") === null){
      $.mobile.changePage("#login", {

      });
    }

    else {
      console.log(window.localStorage.getItem("user"));
      showConfirm();
    }


    // Lyssna på meddelanden från iframen, dvs inlogget
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
    eventer(messageEvent, function(e) {
      var key = e.message ? "message" : "data";
      var data = e[key];
      //run function//
      window.localStorage.setItem("user", data);
      var user = window.localStorage.getItem("user");
      //navigator.notification.alert("Du är inloggad som " + user, alertDismissed, "Inloggad", "OK");
      if (oneMoreKK === 1) {
        console.log("To kkPage from login");
        $.mobile.changePage("#kkpage", {
        });
        oneMoreKK = 0;
      }
      else if (oneMoreVCK === 1) {
        console.log("To VCpage from login");
        $.mobile.changePage("#vcpage", {
          transition: "slide"
        });
        oneMoreVCK = 0;
      }
      else {
        console.log("To hem from login");
      $.mobile.changePage("#hem", {

      });
    }

    showConfirm() ;

    }, false);
        /*navigator.splashscreen.hide();*/
}



function onOffline() {
    navigator.notification.alert(
      "Du verkar ha lite problem med din nätverksanslutning. Du kan fortfarande fylla i din KURTning men du kommer inte kunna skicka in den utan att ansluta till ett WiFi-nätverk eller mobilnätverk.", null, "Kontrollera anslutning", "OK");
}

//function refreshPage(page) {
// Page refresh
//	page.trigger('pagecreate');
//	page.listview('refresh');
//}

//Not used anymore
/*function TillKK() {
    $.mobile.changePage("#kkpage", {
        transition: "slide"
    });
    $.mobile.loading('show');
    setTimeout(function() {
        $.mobile.changePage("#kkpage", {
            transition: "slide"
        });
    }, 5);
    e.stopImmediatePropagation();
    return false;
}

function TillVCK() {
    $.mobile.loading('show');
    setTimeout(function() {
        $.mobile.changePage("#vcpage", {
            transition: "slide"
        });
    }, 5);
    e.stopImmediatePropagation();
    return false;
}

function TillIfyllt() {
    $.mobile.loading('show');
    setTimeout(function() {
        $.mobile.changePage("#vadfylltjag", {
            transition: "slide"
        });
    }, 5);
    e.stopImmediatePropagation();
    //window.plugins.googleAnalyticsPlugin.trackPageview("Ifyllt");
    return false;
}*/
/*//TODO: Only used in VC-kurt, probably exchangable for the other Home-function
function TillHem(e) {
    console.log("TillHem");
    $.mobile.loading('show');
    clearVC();
    clearKK();
    setTimeout(function() {
        $.mobile.changePage("#hem", {
            transition: "slide",
            reverse: true
        });
    }, 5);
    e.stopImmediatePropagation();
    //e.stopPropagation();
    //e.preventDefault();
    return false;
}*/

function tillHemTapHandler(event) {
    //	$.mobile.loading('show');
    //clearVC();
    //	clearKK();
    console.log("tillHemTapHandler")
    setTimeout(function() {
        $.mobile.changePage("#hem", {
            transition: "slide",
            reverse: true
        });
    }, 5);
    /*event.stopImmediatePropagation();*/

    /*event.preventDefault();*/
    return false;
}

//Not used anymore
/*function TillHemFade() {
    $.mobile.loading('show');
    setTimeout(function() {
        $.mobile.changePage("#hem", {
            transition: "slidefade",
            reverse: true
        });
    }, 5);
    e.stopImmediatePropagation();
    return false;
}*/


$(document).delegate("#hem", "pageinit", function() {
    console.log("Heminit");
    //No #om exists
    /*jQuery(function() {
        var omdiv = $('#om');
        var omwidth = omdiv.width();
        omdiv.css('height', omwidth);
    });*/
    /*$.mobile.loadPage("#vcpage", {
        prefetch: "true"
    });
    $.mobile.loadPage("#kkpage", {
        prefetch: "true"
    });
    $.mobile.loadPage("#vadfylltjag", {
        prefetch: "true"
    });
    $.mobile.loadPage("#tackkkbody", {
        prefetch: "true"
    });
    $.mobile.loadPage("#vadfyllttermin", {
        prefetch: "true"
    });*/


    $(".hemKnapp").on('tap', tillHemTapHandler);

    $("#toOmAll").on('tap', toOmAllTapHandler);

    function toOmAllTapHandler(event) {
        console.log("toOmAllTapHandler");
        /*$.mobile.loading('show');
        $("#splash").hide();
        setTimeout(function() {
            $("#newcont").addClass('slideOutDown');
            setTimeout(function() {
                $.mobile.changePage("#omall", {
                    transition: "fade"
                });
                setTimeout(function() {
                    $("#newcont").removeClass('slideOutDown')
                }, 1000);
            }, 300);
        }, 5);*/
        $.mobile.changePage("#omall", {
          transition: "slide"
        });
        event.stopImmediatePropagation();
        return false;
    }


    $("#toIfyllt").on('tap', toIfylltTapHandler);

    function toIfylltTapHandler(event) {
        console.log("toIfylltTapHandler");
        /*$.mobile.loading('show');
        $("#splash").hide();
        setTimeout(function() {
            $("#newcont").addClass('slideOutDown');
            setTimeout(function() {
                $.mobile.changePage("#vadfylltjag", {
                    transition: "fade"
                });
                setTimeout(function() {
                    $("#newcont").removeClass('slideOutDown')
                }, 1000);
            }, 300);
        }, 5);*/
        $.mobile.changePage("#vadfylltjag", {
          transition: "slide"
        });
        /*window.VadFyllt = "jag";*/
        event.stopImmediatePropagation();
        return false;
    }


    $("#toVcKurt").on('tap', toVcKurtTapHandler);

    function toVcKurtTapHandler(event) {
        console.log("toVcKurtTapHandler")
        /*$.mobile.loading('show');
        $("#splash").hide();
        setTimeout(function() {
            $("#newcont").addClass('slideOutDown');
            setTimeout(function() {
                $.mobile.changePage("#vcpage", {
                    transition: "fade"
                });
                setTimeout(function() {
                    $("#newcont").removeClass('slideOutDown')
                }, 1000);
            }, 300);
        }, 5);*/
        $.mobile.changePage("#vcpage", {
          transition: "slide"
        });
        var navBarHeight = screen.height - window.outerHeight;
        $("#vcpage").css("marginBottom", navBarHeight);
        console.log("navBarHeight=" + " " + navBarHeight);
        event.stopImmediatePropagation();
        return false;
    }

    $("#toKlinikkurt").on('tap', toKlinikkurtTapHandler);

    function toKlinikkurtTapHandler(event) {
        console.log("toKlinikkurtTapHandler");
        /*$.mobile.loading('show');
        $("#splash").hide();
        setTimeout(function() {
            $("#newcont").addClass('slideOutDown');
            setTimeout(function() {
                $.mobile.changePage("#kkpage", {
                    transition: "fade"
                });
                setTimeout(function() {
                    $("#newcont").removeClass('slideOutDown')
                }, 1000);
            }, 300);
        }, 5);*/
        $.mobile.changePage("#kkpage", {
          transition: "slide"
        });
        event.stopImmediatePropagation();
        return false;
    }
    console.log("Hem loaded");
});

/*$(document).delegate("#tackkkbody", "pageshow", function() {
    $('#facebookkk').bind('tap', function(e) {
        event.preventDefault();
        $.mobile.loading('show');
        setTimeout(function() {
            facebookWallPost();
        }, 5);
        setTimeout(function() {
            $.mobile.loading('hide');
        }, 100);
        //window.plugins.googleAnalyticsPlugin.trackPageview("FB-Delat");
        return false;
    });
});*/

touchMove = function(event) {
    // Prevent scrolling on this element
    event.preventDefault();
};

//TODO: Needed if all loading message are removed?
$(document).delegate("#hem", "pageshow", function(event) {
    /*$.mobile.loading('hide');*/
});


$(document).delegate("#vadfylltjag", "pageinit", function(event, ui) {
    $(".ui-icon-tabE").on('tap', vadfylltterminTapHandler);

    function vadfylltjagTapHandler(e) {
        console.log("vadfylltjagTapHandler");
        $("#tabD").addClass('ui-btn-active');
        $("#tabE").removeClass('ui-btn-active');

        $("#vfjtitle").show();
        $("#vfttitle").hide();
        $("#vfjcont").show();
        $("#vftcont").hide();


        e.stopImmediatePropagation();
        return false;
    }
    $(".ui-icon-tabD").on('tap', vadfylltjagTapHandler);

    function vadfylltterminTapHandler(e) {
        console.log("vadfylltterminTapHandler");
        $("#tabE").addClass('ui-btn-active');
        $("#tabD").removeClass('ui-btn-active');

        $("#vfjtitle").hide();
        $("#vfttitle").show();
        $("#vfjcont").hide();
        $("#vftcont").show();


        e.stopImmediatePropagation();
        return false;
    }


    $.mobile.loading('hide');
    //TODO: Does this still work? Need to put the scripts on another server reached from anywhere
    jQuery(function() {

        $("#mailk").submit(function(e) {

            var cas_regex = /[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[0-9]+[0-9]+[0-9]+[0-9]/g;
            if (!cas_regex.test($("#mailkcasid").val())) {
                navigator.notification.alert("Du har inte fyllt i ett giltigt CAS-id, skriv in ett giltig CAS-id och försök igen. Om du vet att du fyllt i ett giltigt CAS-id, försök skicka in igen, vi arbetar på att lösa problemet!", null, "Ogiltigt CAS-id", "OK");
            } else {
                $.mobile.loading('show');
                var mailkDataString = $("#mailk").serialize();
                $.ajax({
                    type: "GET",
                    url: "http://studentit-bevakare.user.uu.se/klinikkurt/mailk.asp",
                    data: mailkDataString,
                    datatype: "html",
                    success: function() {
                        navigator.notification.alert("Kontrollera din inkorg, du bör nu ha fått ett mail med vilka kurtningar du fyllt i!", null, "Kolla din inkorg!", "OK");
                        $.mobile.loading('hide');
                    }
                });
            }
            e.preventDefault();
        });
        $("#svark").submit(function(e) {
            var cas_regex = /[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[0-9]+[0-9]+[0-9]+[0-9]/g;
            if (!cas_regex.test($("#svarkcasid").val())) {
                navigator.notification.alert("Du har inte fyllt i ett giltigt CAS-id, skriv in ett giltig CAS-id och försök igen. Om du vet att du fyllt i ett giltigt CAS-id, försök skicka in igen, vi arbetar på att lösa problemet!", null, "Ogiltigt CAS-id", "OK");
            } else {
                $.mobile.loading('show');
                var svarkDataString = $("#svark").serialize();
                $.ajax({
                    type: "GET",
                    url: "http://studentit-bevakare.user.uu.se/klinikkurt/svark.asp",
                    data: svarkDataString,
                    datatype: "html",
                    success: function() {
                        navigator.notification.alert("Kontrollera din inkorg, du bör nu ha fått ett mail med din termins svarsfrekvens!", null, "Kolla din inkorg!", "OK");
                        $.mobile.loading('hide');
                    },
                    error: function() {
                        alert("syntax errrrrorrrr 1337");
                    }
                });
            }
            e.preventDefault();
        });
        console.log("vadfylltjag loaded");



    });
});


$(document).delegate("#vadfylltjag", "pageshow", function(event) {
    /*$.mobile.loading('hide');*/

    $("#tabD").addClass('ui-btn-active');
    $("#tabE").removeClass('ui-btn-active');

    $("#vfjtitle").show();
    $("#vfttitle").hide();
    $("#vfjcont").show();
    $("#vftcont").hide();

    console.log('VFJ show');
    /* alert("show vfj");
     jQuery(function(){
     $( "#jagcont" ).delegate("#submitmailk", 'tap', function(event) {
     alert("submitmailk");
     });
     });
     */
});
/* $(document).delegate("#vadfyllttermin", "pageinit", function (event) {
 $.mobile.loading('hide');
 //alert("init vfj");
 jQuery(function () {
 $("#svark").submit(function (e) {
 $.mobile.loading('show');
 var mailkDataString = $("#svark").serialize();
 $.ajax({
 type: "GET",
 url: "http://studentit-bevakare.user.uu.se/klinikkurt/svark.asp",
 data: mailkDataString,
 datatype: "html",
 success: function () {
 navigator.notification.alert("Kontrollera din inkorg, du bör nu ha fått ett mail med din termins svarsfrekvens!", null, "Kolla din inkorg!", "OK");
 $.mobile.loading('hide');
 }
 });
 e.preventDefault();
 });
 });
 });

 */

$(document).delegate("#vadfyllttermin", "pageshow", function(event) {
    /*$.mobile.loading('hide');*/
    //alert("show vfj");
    /*jQuery(function(){
    $( "#termincont" ).delegate("#submitsvark", 'tap', function(event) {
    alert("submitsvark");
    });
    });
    */
    //    function iOSversion() {
    //        if (/iP(hone|od|ad)/.test(navigator.platform)) {
    //            // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    //            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    //            return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    //        }
    //    }
    //
    //    ver = iOSversion();
    //
    //    if (ver[0] >= 7) {
    //        alert('This is running iOS 7 or later.');
    //    }
    console.log("VFT show");
});

$(document).delegate("#omall", "pageinit", function() {
  function tabFHandler() {
    console.log("tabFHandler");
    $("li > .ui-btn-active").removeClass('ui-btn-active');
    $("#tabF").addClass('ui-btn-active');
    $("#omkkdiv").hide();
    $("#omappdiv").hide();
    /*$.mobile.silentScroll(0)*/
    $("#ommsrdiv").show();
    //Titles
    $("#omkkt").hide();
    $("#omappt").hide();
    $("#ommsrt").show();
  }

  function tabGHandler() {
    console.log("tabGHandler");
    $("li > .ui-btn-active").removeClass('ui-btn-active');
    $("#tabG").addClass('ui-btn-active');
    $("#omappdiv").hide();
    $("#ommsrdiv").hide();
    /*$.mobile.silentScroll(0)*/
    $("#omkkdiv").show();
    //Titles
    $("#omappt").hide();
    $("#ommsrt").hide();
    $("#omkkt").show();
  }

  function tabHHandler() {
    console.log("tabHHandler");
    $("li > .ui-btn-active").removeClass('ui-btn-active');
    $("#tabH").addClass('ui-btn-active');
    $("#omkkdiv").hide();
    $("#ommsrdiv").hide();
    /*$.mobile.silentScroll(0)*/
    $("#omappdiv").show();
    //Titles
    $("#omkkt").hide();
    $("#ommsrt").hide();
    $("#omappt").show();
  }

  function extLink(link) {
    navigator.notification.confirm(link + ' kommer att öppnas i din webbläsare, är du säker på att du vill fortsätta?', // message
    openLink, // callback to invoke with index of button pressed
    'Lämna appen?', // title
    'Ja,Nej' // buttonLabels
  );
  function openLink(button) {
    if (button === 1) {
      //InAppBrowser-plugin needed for this to work
      window.open(link, '_system');
    }
  }

  }

  $("#tabF").on('tap', tabFHandler);
  $("#tabG").on('tap', tabGHandler);
  $("#tabH").on('tap', tabHHandler);

  $(".msrWeb").on('tap', function() {
    extLink('http://www.studieradet.se');
  });
  /*$("#msrsdr").on('tap', function() {
    extLink('http://www.studieradet.se');
  });*/
  $("#kkkk").on('tap', function() {
    extLink('http://www.klinikkurt.se');
  });
  $("#apptw").on('tap', function() {
    extLink('http://appanaget.launchrock.com');
  });
  /*$("#appanaget").on('tap', function() {
    $("#appanaget").addClass('bounce').delay(1600).queue(function() {
      extLink('http://appanaget.launchrock.com');
    });
  });*/
  $("#msrordf").on('tap', function() {
    extLink('mailto:ordf@msr.studorg.uu.se');
  });
  $("#msrVordf").on('tap', function() {
    extLink('mailto:vordf@msr.studorg.uu.se');
  });
  $("#itbevMail").on('tap', function() {
    extLink('mailto:it-bevakare@msr.studorg.uu.se');
  });

  console.log("Omall loaded");
});

$(document).delegate("#omkk", "pageshow", function(event) {
    /*$.mobile.loading('hide');
    if ((screen.width = 320) && (screen.height >= 568)) {
        $("#omkk").bind("touchmove", function(event) {
            event.preventDefault();
        });
    }*/
});
$(document).delegate("#ommsr", "pageshow", function(event) {
    /*if ((screen.width = 320) && (screen.height >= 568)) {
        $("#ommsr").bind("touchmove", function(event) {
            event.preventDefault();
        });
    }*/
});


$(document).delegate("#kkpage", "pageshow", function(event) {
    //window.plugins.googleAnalyticsPlugin.trackPageview("KKpage");
    /*if (ver[0] >= 7) {
        window.plugins.webviewcolor.change('#C6E0FF');
    }*/
    /*$.mobile.loading('hide');

    function openKurtCheckKK() {
        // what is now?
        $.ajax({
            url: 'http://www.kk.beachtime.se/openDev.php',
            data: {
                type: "klinik"
            },
            dataType: 'json',
        }).then(function(res) {
            console.log(res);
            switch (res) {
                case "open":
                    return true;
                    break;
                case "closed":
                    $.mobile.changePage("#hem", {
                        transition: "flip"
                    });
                    navigator.notification.alert("Attans! Den här terminens KlinikKurt har tyvärr stängt. Om du vet med dig att den inte alls borde ha stängt, kontrollera att du har den senaste uppdateringen av appen.", null, "KlinikKurt har stängt!", "OK");
                    return false;
                    break;
                case "construction":
                    $.mobile.changePage("#hem", {
                        transition: "flip"
                    });
                    navigator.notification.alert("Attans! Den här terminens KlinikKurt har tyvärr stängt. Om du vet med dig att den inte alls borde ha stängt, kontrollera att du har den senaste uppdateringen av appen.", null, "KlinikKurt har stängt!", "OK");
                    return false;
                    break;
            }
        });

    }*/
    //openKurtCheckKK();
});


$(document).delegate("#kkpage", "pageinit", function(event) {

    /*function toKlinikkurtTapHandler(event2) {
        $.mobile.loading('show');
        $("#splash").hide();
        setTimeout(function() {
            $("#newcont").addClass('slideOutDown');
            setTimeout(function() {
                $.mobile.changePage("#kkpage", {
                    transition: "fade"
                });
                setTimeout(function() {
                    $("#newcont").removeClass('slideOutDown')
                }, 1000);
            }, 300);
        }, 5);
        event2.stopImmediatePropagation();
        return false;
    }*/





    /*//Submits the form and asks if the user wants to fill in a second form
    function kksubmitter() {
        console.log("kksubmitter");
        //$("#kkq19").val(deviceOS);
        console.log($("#klinik-kurt-username").val());
        $.mobile.loading('show');
        //Serialize the form
        var dataString = $("#klinikkurt").serialize();
        console.log("datastring =" + " " + dataString)
        console.log($("#klinik-kurt-username").val());

        function tackPrompt() {
            console.log('tackprompt1');
            //Return to homepage
            $.mobile.changePage("#hem", {
                transition: "slide",
                direction: "reverse"
            });
            console.log('tackprompt2');

            //TODO: Does not let you send in a second one, Submit button greys out

            function oneMore(buttonIndex) {
                //If user wants to fill in a second form
                if (buttonIndex === 1) {
                    console.log("Fill in one more");
                    function changeUser(buttonIndex) {
                        //If user wants to change user
                        if (buttonIndex === 1){
                        console.log("Change user");
                        function logOut(buttonIndex) {
                            if(buttonIndex == 1){
                                var iframe = $('#loginout');
                                var url="https://cas.weblogin.uu.se/Shibboleth.sso/Logout"
                                var url2="http://www.sitedev.beachtime.se/cas/cas2.php"

                                if ( iframe.length ) {
                                    iframe.attr('src',url);
                                    window.localStorage.removeItem("user");
                                    console.log("Logout");
                                    setTimeout(function() {
                                        iframe.attr('src',url2);
                                        $.mobile.changePage("#login", {

                                            		});
                                  }, 1000);
                               }
                        }
                            }
                        logOut(1);
                        //TODO: Make it so that you return to KlinikKurt form from loginpage
                        }
                        else {
                        //Return to the form for a second one
                        backToKlinikKurt();
                        }
                        }

                    navigator.notification.confirm("Vill du byta användare?",
                    changeUser,
                    "Byta användare?",
                    ["Ja","Nej"]
                    );
                    }
            }
            console.log('tackprompt3');
            navigator.notification.confirm('Tack för din utvärdering! Vill du kurta en placering till?', // message
                oneMore, // callback to invoke with index of button pressed
                'Tack!', // title
                ["Ja","Nej"] // buttonLabels
            );
            console.log('tackprompt4');
        }


        $.ajax({
            type: "POST",
            url: "http://doit.medfarm.uu.se/script/kurt2/receive.php",
            data: dataString,
            timeout: 20000,
            datatype: "html",
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            success: function(data) {
                //The POST will always succeed in loading the page. Hence the "if" which shows on the page when the answers are received
                if (data.indexOf("Du saknar behörighet för denna sida") > -1){
                console.log("Success och Mottagen");
                clearKK();
                tackPrompt();
                }
                else {
                console.log("Success och EJ mottagen");
                $.mobile.loading('hide');
                navigator.notification.alert("Attans! Din KURTning kunde inte skickas. Kontrollera att du har internetåtkomst och försök igen!", null, "Kunde inte skicka KURTning", "OK");
                $('#KKopendialog').removeClass('ui-disabled');
                }
                console.log(data);
            },
            error: function(x, e) {
                console.log("Error och EJ mottagen");
                $.mobile.loading('hide');
                navigator.notification.alert("Attans! Din KURTning kunde inte skickas. Kontrollera att du har internetåtkomst och försök igen!", null, "Kunde inte skicka KURTning", "OK");
                $('#KKopendialog').removeClass('ui-disabled');
            }
        });
    }*/

    var KKTermInfo = $("#terminfo");
    var RestOfKK = $("#restofkk");
    var OrtCont = $("#ortcont");
    var FewQ = $(".fewq");
    var MoreQ = $(".moreq");
    var KKfr3 = $("#kkfr3");
    var KKfr4 = $("#kkfr4");
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    //Run when semester radios are clicked to show the correct placement selectors
    $("input[name=qx]").click(function() {
        //$("#kkpage").addClass("kkpagestatheight");
        //Needed to make sure the change event only fires once on radio click
        //Debug, lists all attributes of element
          /*$(this).each(function() {
            $.each(this.attributes, function() {
              // this.attributes is not a plain object, but an array
              // of attribute nodes, which contain both the name and value
              if(this.specified) {
                console.log(this.name, this.value);
              }
            });
          });*/

          //Hide semester requirement message
          KKTermInfo.addClass("fadeOutRightOpacity").one(animationEnd, function(){
            KKTermInfo.removeClass("fadeOutRightOpacity").hide();
          });



        //Hide placement selectors if one is already shown
        function hidePreviousPlacement() {
          if ( $("#kkt5").css('display') != 'none' && $('input[name=qx]:checked').val() != "5") {
            console.log("Previous: T5");
            $("#kkt5").addClass("fadeOutRight").one(animationEnd, function() {
              $("#kkt5").removeClass("fadeOutRight").hide();
            });
          }
          else if ( $("#kkt6").css('display') != 'none' && $('input[name=qx]:checked').val() != "6") {
            console.log("Previous: T6");
            $("#kkt6").addClass("fadeOutRight").one(animationEnd, function() {
              $("#kkt6").removeClass("fadeOutRight").hide();
            });
          }
          else if ( $("#kkt7").css('display') != 'none' && $('input[name=qx]:checked').val() != "7") {
            console.log("Previous: T7");
            $("#kkt7").addClass("fadeOutRight").one(animationEnd, function() {
              $("#kkt7").removeClass("fadeOutRight").hide();
            });
          }
          else if ( $("#kkt8").css('display') != 'none' && $('input[name=qx]:checked').val() != "8") {
            console.log("Previous: T8");
            $("#kkt8").addClass("fadeOutRight").one(animationEnd, function() {
              $("#kkt8").removeClass("fadeOutRight").hide();
            });
          }
          else if ( $("#kkt9").css('display') != 'none' && $('input[name=qx]:checked').val() != "9") {
            console.log("Previous: T9");
            $("#kkt9").addClass("fadeOutRight").one(animationEnd, function() {
              $("#kkt9").removeClass("fadeOutRight").hide();
            });
          }
        }
        /*console.log("Hide");
          $("#kkt5").animateCss("fadeOutRight");
          $("#kkt5").hide();
          $("#kkt6").animateCss("fadeOutRight");
          $("#kkt6").hide();
          $("#kkt7").animateCss("fadeOutRight");
          $("#kkt7").hide();
          $("#kkt8").animateCss("fadeOutRight");
          $("#kkt8").hide();
          $("#kkt9").animateCss("fadeOutRight");
          $("#kkt9").hide();*/

        //Show the correct placement selector
        //Same delay as the animation to let the previous selector slide out
        var delayFadeInLeft = 200;

        switch ($(this).val()) {
          case "5":
            console.log("T5");
            hidePreviousPlacement();
            if ($("#kkt5").css('display') == 'none') {
              setTimeout( function(){
                $("#kkt5").show();
                $("#kkt5").animateCss("fadeInLeft");
              }, delayFadeInLeft);
            }
            break;
          case "6":
            console.log("T6");
            hidePreviousPlacement();
            if ($("#kkt6").css('display') == 'none') {
              setTimeout( function(){
                $("#kkt6").show();
                $("#kkt6").animateCss("fadeInLeft");
              }, delayFadeInLeft);
            }
            break;
          case "7":
            console.log("T7");
            hidePreviousPlacement();
            if ($("#kkt7").css('display') == 'none') {
              setTimeout( function(){
                $("#kkt7").show();
                $("#kkt7").animateCss("fadeInLeft");
              }, delayFadeInLeft)
            }
            break;
          case "8":
            console.log("T8");
            hidePreviousPlacement();
            if ($("#kkt8").css('display') == 'none') {
              setTimeout( function(){
                $("#kkt8").show();
                $("#kkt8").animateCss("fadeInLeft");
              }, delayFadeInLeft)
            }
            break;
          case "9":
            console.log("T9");
            hidePreviousPlacement();
            if ($("#kkt9").css('display') == 'none') {
              setTimeout( function(){
                $("#kkt9").show();
                $("#kkt9").animateCss("fadeInLeft");
              }, delayFadeInLeft)
            }
            break;
          default:
            break;
        }
        //Hide the form if shown
        /*if (OrtCont.css("display") != "none"){
          OrtCont.addClass("fadeOutDown").one(animationEnd, function() {
            OrtCont.removeClass("fadeOutDown").hide();
          });
        }

        if (RestOfKK.css("display") != "none"){
          RestOfKK.addClass("fadeOutDown").one(animationEnd, function() {
            RestOfKK.removeClass("fadeOutDown").hide();
          });
        }*/

        //Hide placements
        /*setTimeout(function() {
            $("#kkt5").hide();
        }, 700);*/

        //Clean placement and county choices if present
        $("input[name=q1]").prop('checked', false).checkboxradio('refresh', true);
        $("#kkq2").val(["null"]).selectmenu("refresh", true);
        /*setTimeout(function() {
            OrtCont.hide();
            KKTermInfo.hide();
        }, 700);*/



        /*if ($(this).val() === "6") {
            $("#kkt6").addClass("fadeInLeft").show();
          }*/
        /*if ($(this).val() === "10") {
            $("#kkt10").removeClass("slideOutDown abspos").show();
        } else {
            $("#kkt10").addClass("slideOutDown abspos");
            setTimeout(function() {
                $("#kkt10").hide();
            }, 700);
        }*/
        /*if ($(this).val() === "9") {
            $("#kkt9").removeClass("slideOutDown abspos").show();
        } else {
            $("#kkt9").addClass("slideOutDown abspos");
            setTimeout(function() {
                $("#kkt9").hide();
            }, 700);
        }
        if ($(this).val() === "8") {
            $("#kkt8").removeClass("slideOutDown abspos").show();
        } else {
            $("#kkt8").addClass("slideOutDown abspos");
            setTimeout(function() {
                $("#kkt8").hide();
            }, 700);
        }
        if ($(this).val() === "7") {
            $("#kkt7").removeClass("slideOutDown abspos").show();
        } else {
            $("#kkt7").addClass("slideOutDown abspos");
            setTimeout(function() {
                $("#kkt7").hide();
            }, 700);
        }*/

            /*$("#kkt6").removeClass("slideOutDown abspos").show();*/
        /* else
            $("#kkt6").addClass("slideOutDown abspos");
            setTimeout(function() {
                $("#kkt6").hide();
            }, 700);*/

        /*if ($(this).val() === "5") {
            $("#kkt5").removeClass("slideOutDown abspos").show();
        } else {

        }*/
    });

    //Show county list when placement is selected
    jQuery("input[name=q1]").click(function() {
      $("#kkq2").val(["null"]).selectmenu("refresh", true);
      if (OrtCont.css("display") == "none") {
        OrtCont.show();
        OrtCont.animateCss("fadeInUp");
      }
      /*else if ($('#kkq2 :selected').val() === 'null'){
        RestOfKK.addClass("fadeOutDown").one(animationEnd, function() {
          RestOfKK.removeClass("fadeOutDown").hide();
        });
      }*/

      //Check if extra question should be shown
      /*T9GynObsPed();
      T8Psyk();*/
      extraQuestions();

      //Show or hide the required firelds message
      verifyReq1();

        /*if (ver[0] >= 7) {
            $("#ios7whitefix").show();
        }*/
        //$("#kkpage").removeClass("kkpagestatheight");
    });

    //Show rest of questions when county is selected
    jQuery("select[name=q2]").change(function() {
        if (RestOfKK.css("display") == "none") {
          //Clear previous selections if there are any
          /*$('#restofkk :radio').attr('checked', false).checkboxradio("refresh");
          //Name a tutor
          $("#kkq15").val("");
          //Explain your choice
          $("#kkq16").val("");
          //Comments
          $("#kkq17").val("");
          //Lottery
          $("#kkq19").val("");*/
          RestOfKK.show();
          RestOfKK.animateCss("fadeInUp");
          //Needed to make sure that the extraQuestions function doesn't hide the numbers
          FewQ.show();
        }

        //Check if extra question should be shown
        /*T9GynObsPed();
        T8Psyk();*/
        extraQuestions();

        //Show or hide the required firelds message
        verifyReq1();

        /*if (ver[0] >= 7) {
            $("#ios7whitefix").hide();
        }*/
        //$("#kkcont").css('height','auto');
        //$("#kkpage").css('height','auto');
        //$("#kkcont").css('height','3000px');
    });

    /*$('input[name=q1]').change(T8Psyk);
    $('#kkq2').change(T8Psyk);*/

    //Show the extra questions for T8PsykUppsala and T9ObsPedGynUppsala
    function extraQuestions() {
      console.log("extraQuestions");
      //Show T8PsykUppsala
      if ($('input[name=q1]:checked').val() === '22' && $('#kkq2 :selected').val() === '16') {
          if (KKfr3.css("display") == "none") {
            KKfr3.show();
            KKfr3.animateCss("fadeInLeft");
          }
          if (MoreQ.css("display") == "none") {
            MoreQ.show();
            FewQ.hide();
          }
      }
      //Hide and clear T8PsykUppsala if already shown and another placement or county is selected
      else if (KKfr3.css("display") != "none") {
        $('#kkq3').val('null').selectmenu('refresh');
        KKfr3.addClass("fadeOutRight").one(animationEnd, function() {
          KKfr3.removeClass("fadeOutRight").hide();
        });
        if (MoreQ.css("display") != "none") {
          MoreQ.hide();
          FewQ.show();
        }
      }
      //Show T9GynObsPed
      else if (($('input[name=q1]:checked').val() === '27' || $('input[name=q1]:checked').val() === '28' || $('input[name=q1]:checked').val() === '29') && $('#kkq2 :selected').val() === '16') {
          if (KKfr4.css("display") == "none") {
            KKfr4.show();
            KKfr4.animateCss("fadeInLeft");
          }
          if (MoreQ.css("display") == "none") {
            MoreQ.show();
            FewQ.hide();
          }
      }
      //Hide and clear T9ObsPedGynUppsala if already shown and another placement or county is selected
      else if (KKfr4.css("display") != "none") {
            $('#kkq4').val('null').selectmenu('refresh');
            KKfr4.addClass("fadeOutRight").one(animationEnd, function() {
              KKfr4.removeClass("fadeOutRight").hide();
            });
            if (MoreQ.css("display") != "none") {
              MoreQ.hide();
              FewQ.show();
            }
          }
    }

    /*function T8Psyk() {
        //Show extra question
        if ($('input[name=q1]:checked').val() === '22' && $('#kkq2 :selected').val() === '16') {
            if (KKfr3.css("display") == "none") {
              KKfr3.show();
              KKfr3.animateCss("fadeInLeft");
            }
            FewQ.hide();
            MoreQ.show();
        }
        //Hide extra question
        else {
            if (KKfr3.css("display") != "none") {
              $('#kkq3').val('null').selectmenu('refresh');
              KKfr3.addClass("fadeOutRight").one(animationEnd, function() {
                KKfr3.removeClass("fadeOutRight").hide();
              });
            }
            FewQ.show();
            MoreQ.hide();
          }
    }

    function T9GynObsPed() {
      //Show extra question
      if (($('input[name=q1]:checked').val() === '27' || $('input[name=q1]:checked').val() === '28' || $('input[name=q1]:checked').val() === '29') && $('#kkq2 :selected').val() === '16') {
          if (KKfr4.css("display") == "none") {
            KKfr4.show();
            KKfr4.animateCss("fadeInLeft");
          }
          FewQ.hide();
          MoreQ.show();
      }
      //Hide extra question
      else {
          if (KKfr4.css("display") != "none") {
            $('#kkq4').val('null').selectmenu('refresh');
            KKfr4.addClass("fadeOutRight").one(animationEnd, function() {
              KKfr4.removeClass("fadeOutRight").hide();
            });
          }
          if (MoreQ.css("display"))
          FewQ.show();
          MoreQ.hide();
        }
    }*/

    /*function Uppsala() {
        if ($('#kkq2 :selected').val() === '16') {
            T9gyn();
        }
    }*/

    /*function T9gyn() {
        if ($('input[name=q1]:checked').val() === '27' || $('input[name=q1]:checked').val() === '28' || $('input[name=q1]:checked').val() === '29') {
            $("#kkfr4").removeClass("hinge");
            $("#kkfr4").show();
            FewQ.hide();
            MoreQ.show();
        } else {
            $("#kkfr4").addClass("hinge");
            setTimeout(function() {
                $("#kkfr4").hide();
            }, 2500);
        }
    }*/


    /*$('input[name=q1]').change(Uppsala);
    $('#kkq2').change(Uppsala);*/

    //Show required fields message if no county or placement is selected
    function verifyReq1() {
        if ($('#kkq1 :selected').val() === 'null' || $('#kkq2 :selected').val() === 'null') {
            $('#KKopendialog').addClass('ui-disabled');
            $("#kkreqmsg").show();
        } else {
            $('#KKopendialog').removeClass('ui-disabled');
            $("#kkreqmsg").hide();
        }
    }

    /*//TODO: Check if this can be moved into the other change methods for q1/2
    $('#kkq1').change(verifyReq1);
    $('#kkq2').change(verifyReq1);*/
    /*$('#kkq19').change(verifyReq1);*/
    /*$("#KKopendialog").click(BlurIt2);*/

    //Removes focus from textboxes
    /*function BlurIt2() {
        $("#kkq15").blur();
        $("#kkq16").blur();
        $("#kkq17").blur();
        $("#kkq19").blur();
    }*/



    /*$('#KKopendialog').addClass('ui-disabled');
    console.log("('#KKopendialog').addClass('ui-disabled');");*/
    /*$("#KKopendialog").click(BlurIt2);*/

    //Used for submitting the form
    $("#kkpage").delegate("#KKopendialog", 'tap', function(event) {
        //showConfirmKK();
        console.log("KKopendialog tap");
        $("#klinikkurt").submit();
        return false;

    });

    //Checks for valid CAS-id
    jQuery(function() {
        console.log("Check CAS-id");
        var cas_regex = /[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[0-9]+[0-9]+[0-9]+[0-9]/g;
        $("#klinikkurt").submit(function(e) {
            e.preventDefault();
            /*BlurIt2();*/
            //if (cas_regex.test($("#kkq19").val()))
             if (1) {
                console.log('giltigt cas');
                showConfirmKK();
                //   e.preventDefault();
            } else {
                navigator.notification.alert("Du har inte fyllt i ett giltigt CAS-id, skriv in ett giltig CAS-id och försök igen. Om du vet att du fyllt i ett giltigt CAS-id, försök skicka in igen, vi arbetar på att lösa problemet!", null, "Ogiltigt CAS-id", "OK");
            }
        });

    });

    //Checks which questions are answered and alerts the user which aren't
    function showConfirmKK(cdata) {
        console.log('showConfirmKK');
        if ($("input:radio[name='q5']:checked").val() && $("input:radio[name='q6']:checked").val() && $("input:radio[name='q7']:checked").val() && $("input:radio[name='q8']:checked").val() && $("input:radio[name='q9']:checked").val() && $("input:radio[name='q10']:checked").val() && $("input:radio[name='q11']:checked").val() && $("input:radio[name='q12']:checked").val() && $("input:radio[name='q13']:checked").val() && $("input:radio[name='q14']:checked").val() && ($("#kkq15").val().length !== 0) && ($("#kkq16").val().length !== 0) && $("input:radio[name='q18']:checked").val() && ($("#kkq19").val().length !== 0)) {
            console.log("1");
            if ($("#kkq17").val().length === 0) {
                console.log("2");
                $('#KKopendialog').addClass('ui-disabled');
                navigator.notification.confirm('Du har inte lämnat någon kommentar. Är du säker på att du vill skicka in din Kurtning?', // message
                    SubKK, // callback to invoke with index of button pressed
                    'Skicka in?', // title
                    ["Ja","Nej"] // buttonLabels
                );
            } else {
                console.log("3");
                $('#KKopendialog').addClass('ui-disabled');
                navigator.notification.confirm('Är du säker på att du vill skicka in din Kurtning?', // message
                    SubKK, // callback to invoke with index of button pressed
                    'Skicka in?', // title
                    ["Ja","Nej"] // buttonLabels
                );
            }
        } else {
            console.log("4");
            if ($("#kkq17").val().length === 0) {
                console.log("5");
                $('#KKopendialog').addClass('ui-disabled');
                navigator.notification.confirm('Du har inte svarat på alla frågor och inte lämnat någon kommentar.  Är du säker på att du vill skicka in din Kurtning?', // message
                    SubKK, // callback to invoke with index of button pressed
                    'Skicka in?', // title
                    ["Ja","Nej"] // buttonLabels
                );
            } else {
                console.log("6");
                $('#KKopendialog').addClass('ui-disabled');
                navigator.notification.confirm('Du har inte svarat på alla frågor.  Är du säker på att du vill skicka in din Kurtning?', // message
                    SubKK, // callback to invoke with index of button pressed
                    'Skicka in?', // title
                    ["Ja","Nej"] // buttonLabels
                );
            }
        }
    }

    //Used to call the function which sends in the form
    function SubKK(button) {
        console.log("SubKK");
        if (button === 1) {
            kksubmitter();
            //$("#klinikkurt").submit();
        } else if (button === 2) {
            $('#KKopendialog').removeClass('ui-disabled');
        }
    }

    //Revisit the KKpage, used when user wants to fill in another form
    function backToKlinikKurt() {
        console.log("backToKlinikKurt");
        $.mobile.changePage("#kkpage", {
          transition: "slide"
        });
        return false;
    }

    //Submits the form and asks if the user wants to fill in a second form
    function kksubmitter() {
        console.log("kksubmitter");
        //$("#kkq19").val(deviceOS);
        console.log($("#klinik-kurt-username").val());
        $.mobile.loading('show');
        //Serialize the form
        var dataString = $("#klinikkurt").serialize();
        console.log("datastring =" + " " + dataString)
        console.log($("#klinik-kurt-username").val());

        function tackPrompt() {
            console.log('tackprompt1');
            //Return to homepage
            $.mobile.changePage("#hem", {
                transition: "slide",
                direction: "reverse"
            });
            console.log('tackprompt2');

            function oneMore(buttonIndex) {
                //If user wants to fill in a second form
                if (buttonIndex === 1) {
                    console.log("Fill in one more");
                    function changeUser(buttonIndex) {
                        //If user wants to change user
                        if (buttonIndex === 1){
                        console.log("Change user");
                        function logOut(buttonIndex) {
                            oneMoreKK = 1;
                            if(buttonIndex == 1){
                                var iframe = $('#loginout');
                                var url="https://cas.weblogin.uu.se/Shibboleth.sso/Logout"
                                var url2="http://www.sitedev.beachtime.se/cas/cas2.php"

                                if ( iframe.length ) {
                                    iframe.attr('src',url);
                                    window.localStorage.removeItem("user");
                                    console.log("Logout");
                                    setTimeout(function() {
                                        iframe.attr('src',url2);
                                        $.mobile.changePage("#login", {

                                            		});
                                  }, 1000);
                               }
                        }
                            }
                        logOut(1);
                        }
                        else {
                        //Return to the form for a second one
                        backToKlinikKurt();
                        }
                        }

                    navigator.notification.confirm("Vill du byta användare?",
                    changeUser,
                    "Byta användare?",
                    ["Ja","Nej"]
                    );
                    }
            }
            console.log('tackprompt3');
            navigator.notification.confirm('Tack för din utvärdering! Vill du kurta en placering till?', // message
                oneMore, // callback to invoke with index of button pressed
                'Tack!', // title
                ["Ja","Nej"] // buttonLabels
            );
            console.log('tackprompt4');
        }


        $.ajax({
            type: "POST",
            url: "http://doit.medfarm.uu.se/script/kurt2/receive.php",
            data: dataString,
            timeout: 20000,
            datatype: "html",
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            success: function(data) {
                //The POST will always succeed in loading the page. Hence the "if" which shows on the page when the answers are received
                if (data.indexOf("Du saknar behörighet för denna sida") > -1){
                console.log("Success och Mottagen");
                clearKK();
                tackPrompt();
                }
                else {
                console.log("Success och EJ mottagen");
                $.mobile.loading('hide');
                navigator.notification.alert("Attans! Din KURTning kunde inte skickas. Kontrollera att du har internetåtkomst och försök igen!", null, "Kunde inte skicka KURTning", "OK");
                $('#KKopendialog').removeClass('ui-disabled');
                }
                console.log(data);
            },
            error: function(x, e) {
                console.log("Error och EJ mottagen");
                $.mobile.loading('hide');
                navigator.notification.alert("Attans! Din KURTning kunde inte skickas. Kontrollera att du har internetåtkomst och försök igen!", null, "Kunde inte skicka KURTning", "OK");
                $('#KKopendialog').removeClass('ui-disabled');
            }
        });
    }
  console.log("kkPage loaded");
});


/*function DynTermPlac() {
    if ($("input:radio[name='qx']:checked").val()) {
        $(".placercont").hide();
    } else {
        $(".placercont").show();
    }
}*/


$(document).delegate("#vcpage", "pageshow", function(event) {
    /*if (device.platform === "iPhone" || device.platform === "iOS") {
        $('#vcq2').selectmenu({
            preventFocusZoom: true
        });
    }*/

    /*if (ver[0] >= 7) {
        window.plugins.webviewcolor.change('#FFC6C6');
    }*/
    //window.plugins.googleAnalyticsPlugin.trackPageview("VCpage");
    /*$.mobile.loading('hide');*/
    // returns true if if date <= today
    // returns false if if date > today

    function vCKurtnotfinished() {
        $.mobile.changePage("#hem", {
            transition: "flip"
        });
        navigator.notification.alert("Attans! VC-kurt går ej att fylla i via appen just nu!", null, "VC-Kurt fungerar ej just nu!", "OK");
        return false;
    };

    // TODO: Sends back to homepage when trying to acces VC-kurt since it's not finished. Commented out for development reasons
    //vCKurtnotfinished();

    /*function openKurtCheckVC() {
        // what is now?
        $.ajax({
            url: 'http://www.kk.beachtime.se/openDev.php',
            data: {
                type: "vc"
            },
            dataType: 'json',
        }).then(function(res) {
            console.log(res);
            switch (res) {
                case "open":
                    return true;
                    break;
                case "closed":
                    $.mobile.changePage("#hem", {
                        transition: "flip"
                    });
                    navigator.notification.alert("Attans! Den här terminens VC-Kurt har tyvärr stängt. Om du vet med dig att den inte alls borde ha stängt, kontrollera att du har den senaste uppdateringen av appen.", null, "VC-Kurt har stängt denna termin!", "OK");
                    return false;
                    break;
                case "construction":
                    $.mobile.changePage("#hem", {
                        transition: "flip"
                    });
                    navigator.notification.alert("Attans! Den här terminens VC-Kurt har tyvärr stängt. Om du vet med dig att den inte alls borde ha stängt, kontrollera att du har den senaste uppdateringen av appen.", null, "VC-Kurt har stängt pga tekniska problem!", "OK");
                    return false;
                    break;
            }
        });

    }*/

    //openKurtCheckVC();


});
$(document).delegate("#vcpage", "pageinit", function() {

    $('#VCopendialog').addClass('ui-disabled');

    function verifyReq2() {
        if (!$(':radio[name="qT"]').is(':checked') || $('#vcq2 :selected').val() === 'null') {
            $('#VCopendialog').addClass('ui-disabled');
            $("#vcreqmsg").show();
        } else {
            $('#VCopendialog').removeClass('ui-disabled');
            $("#vcreqmsg").hide();
        }
    }

    /*verifyReq2();*/
    /*$(':radio[name="qT"]').change(verifyReq2);*/
    var vcSemester = 0;

    $('#vcpage :radio[name="qT"]').click(function() {

        console.log($(this).attr("id"));
        if ($(this).attr("id") != 'vcq1v5') {
            navigator.notification.confirm('Attans! VC-kurt i mobilen finns bara för termin 11! Vill du KURTa din VC-placering på internet?', // message
                VCTermin, // callback to invoke with index of button pressed
                'Bara termin 11!', // title
                ["Ja","Nej"] // buttonLabels
            );
        }
        else if ($(this).attr("id") == 'vcq1v5') {
          if ($("#vcOrt").css("display") == "none") {
            $("#vcOrt").show();
            $("#vcOrt").animateCss("fadeInUp");
          }
        }
        verifyReq2();
    });

    //TODO: Change to correct adress every semester
    function VCTermin(yesno) {
        console.log("VCTermin");
        $('#vcpage :radio[name="qT"]').attr('checked', false).checkboxradio("refresh");
        if (yesno === 1) {
            window.open("http://doit.medfarm.uu.se/kurt7292", '_system');
        } else {
            tillHemTapHandler();
        }
    }

    $('#vcq2').change(function() {
      if ($("#restOfVC").css("display") == "none") {
        $("#restOfVC").show();
        $("#restOfVC").animateCss("fadeInUp");
      }
    });

    $("#vcpage").delegate("#VCopendialog", 'tap', function(event) {
        console.log("delegate tap");
        $("#vckurt").submit();
        /*showConfirmVCK();*/
        return false;
    });

    //Checks for valid CAS-id
    $(function() {
        console.log("Check for valid CAS-id");
        var cas_regex = /[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[0-9]+[0-9]+[0-9]+[0-9]/g;
        $("#vckurt").submit(function(e) {
            e.preventDefault();
            /*BlurIt2();*/
            //if (cas_regex.test($("#kkq19").val()))
             if (1) {
                console.log('giltigt cas');
                showConfirmVCK();
                //   e.preventDefault();
            } else {
                navigator.notification.alert("Du har inte fyllt i ett giltigt CAS-id, skriv in ett giltig CAS-id och försök igen. Om du vet att du fyllt i ett giltigt CAS-id, försök skicka in igen, vi arbetar på att lösa problemet!", null, "Ogiltigt CAS-id", "OK");
            }
        });

    });

    //Checks which questions are answered and alerts the user which aren't
    function showConfirmVCK(cdata) {
        console.log('showconfirmVCk');
        if ($("input:radio[name='q2']:checked").val() && $("input:radio[name='q3']:checked").val() && $("input:radio[name='q4']:checked").val() && $("input:radio[name='q5']:checked").val() && $("input:radio[name='q6']:checked").val() && $("input:radio[name='q7']:checked").val() && $("input:radio[name='q8']:checked").val() && $("input:radio[name='q9']:checked").val() && $("input:radio[name='q10']:checked").val() && $("input:radio[name='q11']:checked").val() && $("input:radio[name='q13']:checked").val()) {
            if ($("#vcq14").val().length === 0) {
                $('#VCopendialog').addClass('ui-disabled');
                navigator.notification.confirm('Du har inte lämnat någon kommentar. Är du säker på att du vill skicka in din Kurtning?', // message
                    SubVCK, // callback to invoke with index of button pressed
                    'Skicka in?', // title
                    ["Ja","Nej"] // buttonLabels
                );
            } else {
                $('#VCopendialog').addClass('ui-disabled');
                navigator.notification.confirm('Är du säker på att du vill skicka in din Kurtning?', // message
                    SubVCK, // callback to invoke with index of button pressed
                    'Skicka in?', // title
                    ["Ja","Nej"] // buttonLabels
                );
            }
        } else {
            if ($("#vcq14").val().length === 0) {
                $('#VCopendialog').addClass('ui-disabled');
                navigator.notification.confirm('Du har inte svarat på alla frågor och inte lämnat någon kommentar.  Är du säker på att du vill skicka in din Kurtning?', // message
                    SubVCK, // callback to invoke with index of button pressed
                    'Skicka in?', // title
                    ["Ja","Nej"] // buttonLabels
                );
            } else {
                $('#VCopendialog').addClass('ui-disabled');
                navigator.notification.confirm('Du har inte svarat på alla frågor.  Är du säker på att du vill skicka in din Kurtning?', // message
                    SubVCK, // callback to invoke with index of button pressed
                    'Skicka in?', // title
                    ["Ja","Nej"] // buttonLabels
                );
            }
        }
    }

    //Used to call the function which sends in the form
    function SubVCK(button) {
        console.log("SubVCK");
        if (button === 1) {
            vcksubmitter();
            //$("#klinikkurt").submit();
        } else if (button === 2) {
            $('#VCopendialog').removeClass('ui-disabled');
        }
    }

    //Revisit the VCKpage, used when user wants to fill in another form
    function backToVCKurt() {
        console.log("backToVCKurt");
        $.mobile.changePage("#vcpage", {
          transition: "slide"
        });
        return false;
    }

    //Submits the form and asks if the user wants to fill in a second form
    function vcksubmitter() {
        //$("#kkq19").val(deviceOS);
        console.log("vcksubmitter");
        console.log($("#vc-kurt-username").val());
        $.mobile.loading('show');
        //Serialize the form
        var dataString = $("#vckurt").serialize();
        console.log("datastring =" + " " + dataString)
        console.log($("#vc-kurt-username").val());

        function tackPrompt() {
            console.log('tackprompt1');
            //Return to homepage
            $.mobile.changePage("#hem", {
                transition: "slide",
                direction: "reverse"
            });
            console.log('tackprompt2');

            function oneMore(buttonIndex) {
                //If user wants to fill in a second form
                if (buttonIndex === 1) {
                    console.log("Fill in one more");
                    function changeUser(buttonIndex) {
                        //If user wants to change user
                        if (buttonIndex === 1){
                        console.log("Change user");
                        function logOut(buttonIndex) {
                            oneMoreVCK = 1;
                            if(buttonIndex == 1){
                                var iframe = $('#loginout');
                                var url="https://cas.weblogin.uu.se/Shibboleth.sso/Logout"
                                var url2="http://www.sitedev.beachtime.se/cas/cas2.php"

                                if ( iframe.length ) {
                                    iframe.attr('src',url);
                                    window.localStorage.removeItem("user");
                                    console.log("Logout");
                                    setTimeout(function() {
                                        iframe.attr('src',url2);
                                        $.mobile.changePage("#login", {

                                            		});
                                  }, 1000);
                               }
                        }
                            }
                        logOut(1);
                        }
                        else {
                        //Return to the form for a second one
                        backToVCKurt();
                        }
                        }

                    navigator.notification.confirm("Vill du byta användare?",
                    changeUser,
                    "Byta användare?",
                    ["Ja","Nej"]
                    );
                    }
            }
            console.log('tackprompt3');
            navigator.notification.confirm('Tack för din utvärdering! Vill du kurta en placering till?', // message
                oneMore, // callback to invoke with index of button pressed
                'Tack!', // title
                ["Ja","Nej"] // buttonLabels
            );
            console.log('tackprompt4');
        }


        $.ajax({
            type: "POST",
            url: "http://doit.medfarm.uu.se/script/kurt2/receive.php",
            data: dataString,
            timeout: 20000,
            datatype: "html",
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            success: function(data) {
                //The POST will always succeed in loading the page. Hence the "if" which shows on the page when the answers are received
                if (data.indexOf("Du saknar behörighet för denna sida") > -1){
                console.log("Success och Mottagen");
                clearKK();
                tackPrompt();
                }
                else {
                console.log("Success och EJ mottagen");
                $.mobile.loading('hide');
                navigator.notification.alert("Attans! Din KURTning kunde inte skickas. Kontrollera att du har internetåtkomst och försök igen!", null, "Kunde inte skicka KURTning", "OK");
                $('#VCopendialog').removeClass('ui-disabled');
                }
                console.log(data);
            },
            error: function(x, e) {
                console.log("Error och EJ mottagen");
                $.mobile.loading('hide');
                navigator.notification.alert("Attans! Din KURTning kunde inte skickas. Kontrollera att du har internetåtkomst och försök igen!", null, "Kunde inte skicka KURTning", "OK");
                $('#VCopendialog').removeClass('ui-disabled');
            }
        });
    }


    /*$("#reqmsg").show();*/
    /*$("#VCopendialog").click(BlurIt);

    function BlurIt() {
        $("#vcq14").blur();
        $("#vcq16").blur();
    }*/

    /*function SubVCK(button) {
        console.log("SubVCK");
        if (button === 1) {
            $("#vckurt").submit();
        } else if (button === 2) {
            $('#VCopendialog').removeClass('ui-disabled');
        }
    }

    function showConfirmVCK(cdata) {
        console.log("showConfirmVCK");
        $("#vckurt").submit();
    }

    function showConfirmVCKbkp(cdata) {
        console.log("showConfirmVCKbkp");
        if ($("input:radio[name='q2']:checked").val() && $("input:radio[name='q3']:checked").val() && $("input:radio[name='q4']:checked").val() && $("input:radio[name='q5']:checked").val() && $("input:radio[name='q6']:checked").val() && $("input:radio[name='q7']:checked").val() && $("input:radio[name='q9']:checked").val() && $("input:radio[name='q10']:checked").val() && $("input:radio[name='q11']:checked").val() && $("input:radio[name='q13']:checked").val()) {
            if ($("#vcq14").val().length === 0) {
                $('#VCopendialog').addClass('ui-disabled');
                navigator.notification.confirm('Du har inte lämnat någon kommentar. Är du säker på att du vill skicka in din Kurtning?', // message
                    SubVCK, // callback to invoke with index of button pressed
                    'Skicka in?', // title
                    ["Ja","Nej"] // buttonLabels
                );
            } else {
                $('#VCopendialog').addClass('ui-disabled');
                navigator.notification.confirm('Är du säker på att du vill skicka in din Kurtning?', // message
                    SubVCK, // callback to invoke with index of button pressed
                    'Skicka in?', // title
                    ["Ja","Nej"] // buttonLabels
                );
            }
        } else {
            if ($("#vcq14").val().length === 0) {
                $('#VCopendialog').addClass('ui-disabled');
                navigator.notification.confirm('Du har inte svarat på alla frågor och inte lämnat någon kommentar. Är du säker på att du vill skicka in din Kurtning?', // message
                    SubVCK, // callback to invoke with index of button pressed
                    'Skicka in?', // title
                    ["Ja","Nej"] // buttonLabels
                );
            } else {
                $('#VCopendialog').addClass('ui-disabled');
                navigator.notification.confirm('Du har inte svarat på alla frågor. Är du säker på att du vill skicka in din Kurtning?', // message
                    SubVCK, // callback to invoke with index of button pressed
                    'Skicka in?', // title
                    ["Ja","Nej"] // buttonLabels
                );
            }

        }
    }*/

    /*
     JESPER: DEN HÄR FUNKTIONEN BEHÖVS JU INTE LÄNGRE, NU ÄR DET JU BARA VCFR10 SOM SKA SYNAS DE ANDRA ÄR JU INTE LÄNGRE MED I ORIGINALFORMULÄRET. ÄNDRADE HÄR, I JS OCH HTML-FILEN
     jQuery(function() {
     jQuery("input[name=qT]").change(function() {
     if ($(this).val() === "5") {
     $("#vcfr10").show();
     $("#vcfr9").hide();
     } else {
     //                $("#vcfr10").hide();
     //                $("#vcfr9").show();
     }
     });
     });

     function VCterm11() {
     if ($("input:radio[name='qT']:checked").val() === '5') {
     $("#vcfr10").show();
     $("#vcfr9").hide();
     } else {
     $("#vcfr10").hide();
     $("#vcfr9").show();
     }
     }
     */
    /*var cas_regex = /[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[0-9]+[0-9]+[0-9]+[0-9]/g;
    $("#vckurt").submit(function(e) {
        e.preventDefault();
        console.log("VC kurt submit function");
        //BlurIt();
        //if (cas_regex.test($("#vcq16").val())) {
        if (1) {

            if ($(':radio[name="qT"]:checked') > !0 || $('#vcq2 :selected').val() === 'null' || $('#vcq16').val().length === 0) {} else {
                if ($("input:radio[name='q2']:checked").val() && $("input:radio[name='q3']:checked").val() && $("input:radio[name='q4']:checked").val() && $("input:radio[name='q5']:checked").val() && $("input:radio[name='q6']:checked").val() && $("input:radio[name='q7']:checked").val() && $("input:radio[name='q9']:checked").val() && $("input:radio[name='q10']:checked").val() && $("input:radio[name='q11']:checked").val() && $("input:radio[name='q13']:checked").val()) {
                    if ($("#vcq14").val().length === 0) {
                        $('#VCopendialog').addClass('ui-disabled');
                        navigator.notification.confirm('Du har inte lämnat någon kommentar. Är du säker på att du vill skicka in din Kurtning?', // message
                            SubVCKil, // callback to invoke with index of button pressed
                            'Skicka in?', // title
                            ["Ja","Nej"] // buttonLabels
                        );
                    } else {
                        $('#VCopendialog').addClass('ui-disabled');
                        navigator.notification.confirm('Är du säker på att du vill skicka in din Kurtning?', // message
                            SubVCKil, // callback to invoke with index of button pressed
                            'Skicka in?', // title
                            ["Ja","Nej"] // buttonLabels
                        );
                    }
                } else {
                    if ($("#vcq14").val().length === 0) {
                        $('#VCopendialog').addClass('ui-disabled');
                        navigator.notification.confirm('Du har inte svarat på alla frågor och inte lämnat någon kommentar. Är du säker på att du vill skicka in din Kurtning?', // message
                            SubVCKil, // callback to invoke with index of button pressed
                            'Skicka in?', // title
                            ["Ja","Nej"] // buttonLabels
                        );
                    } else {
                        $('#VCopendialog').addClass('ui-disabled');
                        navigator.notification.confirm('Du har inte svarat på alla frågor. Är du säker på att du vill skicka in din Kurtning?', // message
                            SubVCKil, // callback to invoke with index of button pressed
                            'Skicka in?', // title
                            ["Ja","Nej"] // buttonLabels
                        );
                    }

                }
            }

            function SubVCKil(button) {
                console.log("SubVCKil");
                if (button === 1) {
                    $("#vcq17").val(deviceOS);
                    $.mobile.loading('show');
                    var dataStringVC = $("#vckurt").serialize();
                    console.log(dataStringVC);
                    $.ajax({
                        type: "POST",
                        url: "http://doit.medfarm.uu.se/script/kurt2/receive.php",
                        data: dataStringVC,
                        contentType: "application/x-www-form-urlencoded;charset=utf-8",
                        datatype: "html",
                        success: function(data) {
                                        if (data.indexOf("mottagen") > -1){
                                        console.log("Mottagen");
                                        tillHemTapHandler();
                                        //window.plugins.googleAnalyticsPlugin.trackPageview("VCKifyllt");
                                        navigator.notification.alert("Tack för din Kurtning! Du har precis gjort läkarprogrammet lite bättre. Se nu till att dina kursare gör samma sak!", null, "Tack!", "OK");
                                        }
                                        else {
                                        console.log("Ej mottagen");
                                        $.mobile.loading('hide');
                                        navigator.notification.alert("Attans! Din KURTning kunde inte skickas. Kontrollera att du har internetåtkomst och försök igen!", null, "Kunde inte skicka KURTning", "OK");
                                        $('#VCopendialog').removeClass('ui-disabled');
                                        }
                                        console.log(data);
                                    },
                        error: function(x, e) {
                            $.mobile.loading('hide');
                            navigator.notification.alert("Attans! Din KURTning kunde inte skickas. Kontrollera att du har internetåtkomst och försök igen!", null, "Kunde inte skicka KURTning", "OK");
                            $('#VCopendialog').removeClass('ui-disabled');
                        }
                    });
                }
                else if (button === 2) {
                    $('#VCopendialog').removeClass('ui-disabled');
                }
            }

        } else {
            navigator.notification.alert("Du har inte fyllt i ett giltigt CAS-id, skriv in ett giltig CAS-id och försök igen. Om du vet att du fyllt i ett giltigt CAS-id, försök skicka in igen, vi arbetar på att lösa problemet!", null, "Ogiltigt CAS-id", "OK");
        }
    });*/
console.log("VC-kurt loaded")
});
