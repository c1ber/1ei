// ==UserScript==
// @name         thevideo.me
// @namespace    Melkisedeh
// @version      0.4
// @description  try to take over the world!
// @author       You
// @match        http://thevideo.me/*
// @match        https://openload.co/*
// @match        http://gorillavid.in/* 
// @match        http://daclips.in/* 
// @match        http://allmyvideos.net/* 
// @match        http://vidbull.com/* 
// @match        http://movpod.in/* 
// @match        http://vodlocker.com/* 
// @match        http://filehoot.com/* 
// @match        http://streamin.to/* 
// @match        http://vidzi.tv/* 
// @match        http://nosvideo.com/* 
// @match        http://vidspot.net/* 
// @match        http://vidto.me/* 
// @match        http://vshare.eu/* 
// @match        http://flashx.tv/*
// @match        http://rosharing.net/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

window.open = function (open) {
    return function (url, name, features) {            
        console.log(">>>>>> " + url);
        //return open.call(window, url, name, features);
    };
}(window.open);

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

if(location.href.indexOf("https://openload.co/")>-1)
{
    eventFire(document.getElementById('videooverlay'), 'click');
    if (window.self === window.top)
        $(".vjs-big-play-button").click();
    
    //player.play();
     //$("html").unbind('click');
    function resetPP()
    {
       // $("html").unbind('click');
        pos=1;
        console.log('reset PP');    
       // player.play();
    }
    //window.resetPP = resetPP;
    //window.setTimeout("window.resetPP();", 2000);
}
else if(location.href.indexOf("http://thevideo.me/")>-1)
{
    if(location.href.indexOf("embed")==-1)
        location.href = location.href.replace("http://thevideo.me/", "http://thevideo.me/embed-") + "-640x360.html"

        $("#veriform").submit();
    $(".player_hover_a").hide();
    $("#fci").hide();

    function obsoletefn() {console.log('obsoletefn');}
    function resetPP()
    {
        window.jsPopunder=obsoletefn;
        window.check_pop=obsoletefn;
        window.install_repeat_popup=obsoletefn;
        window.install_popads_popup=obsoletefn;
        window.install_2nd_popup=obsoletefn;

        jwplayer().onPause(function(){
            console.log('jwplayer pause');    
        });
    }
    window.resetPP = resetPP;
    window.clearObject = clearObject;

    function clearObject()
    {
        var bfa = $("#beforeswfanchor0")[0];
        if(bfa==null)
            return;
        var ref = bfa.href;
        ref = ref.split("#")[1];
        $("#"+ref).remove();
    }

    window.setTimeout("window.resetPP();window.clearObject();", 2000);
    
    if (window.self === window.top)
        jwplayer().play();
}
