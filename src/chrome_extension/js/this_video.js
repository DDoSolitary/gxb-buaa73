var video=document.querySelector('video');
//如果没有获取到video，则提示
if (video==null)
        alert("未能成功获取到video，请等待视频开始播放后修改");
    //成功获取video，开始工作
    else
    {
        //var obj=jwplayer(0);
        var obj=video;
        var href=window.location.href;
        var index=href.indexOf("chapterId=");
        var index2=href.indexOf('&',index);
        var arg1=href.substring(index+10,index2>0?index2:href.length);
		var arg2=href.substring(href.indexOf("class/")+6,href.indexOf("/unit"));
        var time=Math.floor(Math.random()*100000)+1565841600000+(arg1-2101002)*900000;
        var duration=parseInt(obj.duration);
        //
        var infoUrl = "https://bh3773.class.gaoxiaobang.com/class/"+arg2+"/chapter/"+arg1+"/api?"+time;
        $.post(infoUrl,function(result){
            var maxViewTime = result.userRecord.maxViewTime;
            if(!maxViewTime){
                maxViewTime = 0;
            }
            var url="https://bh3773.class.gaoxiaobang.com/log/video/"+arg1+"/"+arg2+"/api?"+time;
            var data='[{"state":"listening","level":2,"ch":'+duration+',"mh":'+maxViewTime+',"ct":'+time+'}]';
            $.post(url,{rl:href,data:data},function(result){
                alert("本课已刷完~(●ˇ∀ˇ●)");
            });
        });
    }