chrome.runtime.onMessage.addListener(
    function (msg) {
        var inj_3_2 = document.createElement('script');
        inj_3_2.innerHTML = "var p = videojs.players.video_player;\n" +
            "jQuery(window).blur(function(){p.play();})\n" +
            "if (!p.realTrigger) {\n" +
            "    p.realTrigger = p.trigger;\n" +
            "    p.trigger = function (e, h) {\n" +
            "        if (e !== \"ratechange\") {\n" +
            "            p.realTrigger(e, h);\n" +
            "        }\n" +
            "    };\n" +
            "}" +
            "p.playbackRate(" + msg + ")";
        inj_3_2.onload = function () {
            this.parentNode.removeChild(this);
        };
        (document.head || document.documentElement).appendChild(inj_3_2);
    });