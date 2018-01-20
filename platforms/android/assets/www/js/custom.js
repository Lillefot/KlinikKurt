

//When the jQuery Mobile starts to execute, it triggers a mobileinit event on the document object,
//to which you can bind to apply overrides to jQuery Mobile's defaults.
$(document).bind("mobileinit", function() {
    $.mobile.allowCrossDomainPages = true;
    $.mobile.orientationChangeEnabled = false;
    //TODO:Is this still wroking?
    $.mobile.zoom = "disable";
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

//Check if android device
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;

//Resets the VCK-form
function clearVC() {
    console.log('Clearing VC-Kurt');
    $('#vcq2').val('null').selectmenu('refresh');
    $('#vcpage input[type=radio]').attr('checked', false).next("label").removeClass("ui-btn-active");
    $('#vcpage :radio').attr('checked', false).checkboxradio("refresh");
    //Comments
    $("#vcq14").val("");
    //Sex
    $('#vcq15').val('null').selectmenu('refresh');
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
    //Sex
    $('#kkq18').val('null').selectmenu('refresh');
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
    console.log('Klinik-Kurt cleared');
}

//Executes when all content is loaded
function onBodyLoad() {
    console.log("onBodyLoad initiated");
    //Executes when cordova.js is fully loaded
    document.addEventListener("deviceready", onDeviceReady, false);
}



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

    document.addEventListener("offline", onOffline, false);

    function onConfirmLogin(buttonIndex) {
      console.log('You selected button ' + buttonIndex);
      if(buttonIndex == 1 || buttonIndex == 0){
        var iframe = $('#loginout');
        var url="https://cas.weblogin.uu.se/Shibboleth.sso/Logout"
        var url2="http://script.studieradet.se/cas/cas2.php"
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
      window.localStorage.setItem("user", data);
      var user = window.localStorage.getItem("user");
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

}



function onOffline() {
    navigator.notification.alert(
      "Du verkar ha lite problem med din nätverksanslutning. Du kan fortfarande fylla i din KURTning men du kommer inte kunna skicka in den utan att ansluta till ett WiFi-nätverk eller mobilnätverk.", null, "Kontrollera anslutning", "OK");
}





function tillHemTapHandler(event) {
    console.log("tillHemTapHandler")
    setTimeout(function() {
        $.mobile.changePage("#hem", {
            transition: "slide",
            reverse: "true"
        });
    }, 5);
    return false;
}

$(document).delegate("#hem", "pageinit", function() {
    console.log("Heminit");



    $(".hemKnapp").on('tap', tillHemTapHandler);

    $("#toOmAll").on('tap', toOmAllTapHandler);

    function toOmAllTapHandler(event) {
        console.log("toOmAllTapHandler");
        $.mobile.changePage("#omall", {
          transition: "slide"
        });
        event.stopImmediatePropagation();
        return false;
    }


    $("#toIfyllt").on('tap', toIfylltTapHandler);

    function toIfylltTapHandler(event) {
        console.log("toIfylltTapHandler");
        $.mobile.changePage("#vadfylltjag", {
          transition: "slide"
        });
        event.stopImmediatePropagation();
        return false;
    }


    $("#toVcKurt").on('tap', toVcKurtTapHandler);

    function toVcKurtTapHandler(event) {
        console.log("toVcKurtTapHandler")
        $.mobile.changePage("#vcpage", {
          transition: "slide"
        });
        event.stopImmediatePropagation();
        return false;
    }

    $("#toKlinikkurt").on('tap', toKlinikkurtTapHandler);

    function toKlinikkurtTapHandler(event) {
        console.log("toKlinikkurtTapHandler");
        $.mobile.changePage("#kkpage", {
          transition: "slide"
        });
        event.stopImmediatePropagation();
        return false;
    }
    console.log("Hem loaded");
});



touchMove = function(event) {
    // Prevent scrolling on this element
    event.preventDefault();
};


//TODO: Make it behave and animate as the About-pages
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

    navigator.notification.alert("Denna funktion kräver att du är uppkopplad mot universitetets nätverk!", null, "Kräver UpUnet", "OK");

    $("#vadfylltjag").swiperight(function(){
      console.log("Swipe Right");
      $.mobile.changePage("#hem",{
        transition: "slide",
        reverse: "true"
      });
    });

    $("#tabD").addClass('ui-btn-active');
    $("#tabE").removeClass('ui-btn-active');

    $("#vfjtitle").show();
    $("#vfttitle").hide();
    $("#vfjcont").show();
    $("#vftcont").hide();

    console.log('VFJ show');
});

$(document).delegate("#vadfyllttermin", "pageshow", function(event) {


    console.log("VFT show");
});

$(document).delegate("#omall", "pageinit", function() {

  function tabFHandler() {
    console.log("tabFHandler");
    $("li > .ui-btn-active").removeClass('ui-btn-active');
    $("#tabF").addClass('ui-btn-active');
    $("#omkkdiv").hide();
    $("#omappdiv").hide();
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
  $("#kkkk").on('tap', function() {
    extLink('http://www.klinikkurt.se');
  });
  $("#apptw").on('tap', function() {
    extLink('http://appanaget.launchrock.com');
  });
  $("#msrordf").on('tap', function() {
    extLink('mailto:ordf@msr.studorg.uu.se');
  });
  $("#msrVordf").on('tap', function() {
    extLink('mailto:vordf@msr.studorg.uu.se');
  });
  $("#klinikKurtAnsv").on('tap', function() {
    extLink('mailto:klinikkurt@gmail.com');
  });
  $("#itbevMail").on('tap', function() {
    extLink('mailto:it-bevakare@msr.studorg.uu.se');
  });

  console.log("Omall loaded");
});

$(document).delegate("#omall", "pageshow", function() {
  $("#omall").swiperight(function(){
    console.log("Swipe Right");
    $.mobile.changePage("#hem",{
      transition: "slide",
      reverse: "true"
    })
  });
});



$(document).delegate("#kkpage", "pageshow", function(event) {

  $("#kkpage").swiperight(function(){
    console.log("Swipe Right");
    $.mobile.changePage("#hem",{
      transition: "slide",
      reverse: "true"
    })
  });

if (isAndroid){
  var navBarHeight = screen.height - window.outerHeight;
  $("#kkpage").css("padding-bottom", navBarHeight);
  console.log("navBarHeight=" + " " + navBarHeight);
}

});


$(document).delegate("#kkpage", "pageinit", function(event) {


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


        //Clean placement and county choices if present
        $("input[name=q1]").prop('checked', false).checkboxradio('refresh', true);
        $("#kkq2").val(["null"]).selectmenu("refresh", true);





    });

    //Show county list when placement is selected
    jQuery("input[name=q1]").click(function() {
      $("#kkq2").val(["null"]).selectmenu("refresh", true);
      if (OrtCont.css("display") == "none") {
        OrtCont.show();
        OrtCont.animateCss("fadeInUp");
      }


      //Check if extra question should be shown
      extraQuestions();

      //Show or hide the required firelds message
      verifyReq1();

    });

    //Show rest of questions when county is selected
    jQuery("select[name=q2]").change(function() {
        if (RestOfKK.css("display") == "none") {
          //Clear previous selections if there are any

          RestOfKK.show();
          RestOfKK.animateCss("fadeInUp");
          //Needed to make sure that the extraQuestions function doesn't hide the numbers
          FewQ.show();
        }

        //Check if extra question should be shown

        extraQuestions();

        //Show or hide the required firelds message
        verifyReq1();

    });


    //Show the extra questions for T8PsykUppsala and T9ObsPedGynUppsala
    function extraQuestions() {
      console.log("extraQuestions");
      //Show T8PsykUppsala
      if ($('input[name=q1]:checked').val() === '23' && $('#kkq2 :selected').val() === '17') {
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
      else if (($('input[name=q1]:checked').val() === '27' || $('input[name=q1]:checked').val() === '28' || $('input[name=q1]:checked').val() === '29') && $('#kkq2 :selected').val() === '17') {
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



    //Used for submitting the form
    $("#kkpage").delegate("#KKopendialog", 'tap', function(event) {
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
             if (1) {
                console.log('giltigt cas');
                showConfirmKK();
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
                                var url2="http://script.studieradet.se/cas/cas2.php"

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




$(document).delegate("#vcpage", "pageshow", function(event) {
  //TODO: Change when VC-kurt is opened
  //navigator.notification.alert("Ingen VC-Kurt för termin 11 har skapats.", null, "VC-Kurt ej öppen", "OK");

  $("#vcpage").swiperight(function(){
    console.log("Swipe Right");
    $.mobile.changePage("#hem",{
      transition: "slide",
      reverse: "true"
    });
  });

if (isAndroid){
  var navBarHeight = screen.height - window.outerHeight;
  $("#vcpage").css("padding-bottom", navBarHeight);
  console.log("navBarHeight=" + " " + navBarHeight);
}

});
$(document).delegate("#vcpage", "pageinit", function() {

    $('#VCopendialog').addClass('ui-disabled');

    function verifyReq2() {
        if ($('#vcq2 :selected').val() === 'null') {
            $('#VCopendialog').addClass('ui-disabled');
            $("#vcreqmsg").show();
            console.log("vcreqmsg show");
        } else {
            $('#VCopendialog').removeClass('ui-disabled');
            $("#vcreqmsg").hide();
            console.log("vcreqmsg hide");
        }
    }

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
    });

    //TODO: Change to correct VC-kurt depending on checked semester
    function VCTermin(yesno) {
        console.log("VCTermin");
        $('#vcpage :radio[name="qT"]').attr('checked', false).checkboxradio("refresh");
        if (yesno === 1) {
            window.open("https://doit.medfarm.uu.se/kurt/?action=mypage", '_system');
        } else {
            tillHemTapHandler();
        }
    }

    $('#vcq2').change(function() {
      if ($("#restOfVC").css("display") == "none") {
        $("#restOfVC").show();
        $("#restOfVC").animateCss("fadeInUp");
        $(".vckq").show();
      }
      verifyReq2();
    });

    $("#vcpage").delegate("#VCopendialog", 'tap', function(event) {
        console.log("delegate tap");
        $("#vckurt").submit();
        return false;
    });

    //Checks for valid CAS-id
    $(function() {
        console.log("Check for valid CAS-id");
        var cas_regex = /[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[a-zA-Z]+[0-9]+[0-9]+[0-9]+[0-9]/g;
        $("#vckurt").submit(function(e) {
            e.preventDefault();
             if (1) {
                console.log('giltigt cas');
                showConfirmVCK();
            } else {
                navigator.notification.alert("Du har inte fyllt i ett giltigt CAS-id, skriv in ett giltig CAS-id och försök igen. Om du vet att du fyllt i ett giltigt CAS-id, försök skicka in igen, vi arbetar på att lösa problemet!", null, "Ogiltigt CAS-id", "OK");
            }
        });

    });

    //Checks which questions are answered and alerts the user which aren't
    function showConfirmVCK(cdata) {
        console.log('showconfirmVCk');
        if ($("input:radio[name='q2']:checked").val() && $("input:radio[name='q3']:checked").val() && $("input:radio[name='q4']:checked").val() && $("input:radio[name='q5']:checked").val() && $("input:radio[name='q6']:checked").val() && $("input:radio[name='q7']:checked").val() && $("input:radio[name='q8']:checked").val() && $("input:radio[name='q9']:checked").val() && $("input:radio[name='q10']:checked").val() && $("input:radio[name='q11']:checked").val()) {
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
                                var url2="http://script.studieradet.se/cas/cas2.php"

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
                clearVC();
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


console.log("VC-kurt loaded")
});
