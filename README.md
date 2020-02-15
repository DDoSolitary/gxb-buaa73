# 坏孩子的高校邦工具箱（北航🐍院专属）

## 批量完成视频观看

感谢[@TakiVotoid](https://github.com/TakiVotoid)提供插件脚本：[#1](https://github.com/DDoSolitary/gxb-buaa73/issues/1)
1. 在任意视频播放页面按F12打开开发者工具，切换到控制台（不同浏览器情况不同，一般显示为`控制台`，`Console`等）。
2. 粘贴以下代码并按回车，将会自动完成当前课程所有视频的观看。等几秒刷新即可看到效果。

```js
var urlPrefix = `${location.protocol}//${location.host}`;
unitList.forEach(function (unit) {
	unit.itemList.forEach(function (item) {
		item.chapterList.forEach(function (chapter) {
			if (chapter.contentType == 'Video') {
				$.ajax({
					url: `${urlPrefix}/class/${classinfo.classId}/chapter/${chapter.chapterId}/api`,
					type: 'GET',
					success: function (result) {
						$.ajax({
							url: `${urlPrefix}/log/video/${chapter.chapterId}/${classinfo.classId}/api`,
							type: 'POST',
							data: {
								data: JSON.stringify([{
									"state": "listening",
									"level": 2,
									"ch": result.chapter.video.seconds,
									"mh": 0
								}])
							}
						});
					}
				});
			}
		});
	});
});
```


## 快速播放

1. 在视频播放页面按F12打开开发者工具，切换到控制台（不同浏览器情况不同，一般显示为`控制台`，`Console`等）。
2. 粘贴以下代码并按回车，将会防止窗口切换时自动暂停，并且以两倍速播放视频。

```js
var p = videojs.players.video_player;
p.muted(true);
p.pause = function() {};
p.realTrigger = p.trigger;
p.trigger = function(e, h) {
	if (e !== "ratechange") {
		p.realTrigger(e, h);
	}
};
p.playbackRate(2);
```

最后一行括号中数字为视频加速倍数，目前来看2~3倍比较安全，倍率较高可能会因服务器检测到异常而不更新播放进度，建议自己测试后选择最佳值。

## 测验答案自动填充

1. 在视频播放页面按F12打开开发者工具，切换到控制台（不同浏览器情况不同，一般显示为`控制台`，`Console`等）。
2. 粘贴以下代码并按回车，将会自动勾选所有当前页面所有题目的正确答案。


```js
var data = {
	33943: {
		170974: [[0, 1, 2, 3], [1]],
		170975: [[0], [0, 1, 2], [0], [1], [0, 2, 3], [0], [0, 1, 2], [1, 2, 3], [2]],
		170976: [[0, 1], [0], [0], [0], [1], [0], [0], [0, 1, 2, 3], [0], [1], [0], [0, 1, 2, 3], [0], [0]],
		170977: [[3], [1, 2, 3], [0, 1, 2, 3], [1, 2, 3], [0, 1, 2]],
		170978: [[0, 1, 2, 3], [0, 1, 2, 3], [0, 2], [0, 1, 2, 3], [0, 3], [0, 1, 2, 3]],
		170979: [[0], [0], [1], [0], [0], [0], [2, 3], [0], [1], [0, 1, 2, 3], [0, 1], [1]],
		170980: [[2], [0], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]],
		170981: [[0, 1], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 3], [0, 1, 2, 3], [0, 1, 3]],
		170982: [[0], [0], [0, 2, 3], [1], [0], [2], [1, 2, 3], [1]],
		170983: [[0, 1, 2], [0], [0], [1], [0], [0], [0, 1, 2, 3], [0, 1], [0, 1], [0, 1, 2, 3], [3], [0, 1, 2, 3], [0, 1, 2, 3], [1], [0]],
		170984: [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1]],
		170985: [[0, 1, 2], [0, 1, 3], [0, 1, 2], [0, 1, 2, 3], [0, 1, 2], [0, 1, 3]],
		170986: [[0, 1, 2, 3], [0, 1, 2], [0, 1, 2], [0, 1, 2, 3], [0], [0, 1, 2], [0]]
	},
	33944: {
		170987: [[0, 1, 2], [2], [0, 1, 2], [0, 1, 2, 3], [1, 2], [1], [0], [3], [1], [2], [0, 2, 3], [0, 1, 3], [0, 1, 3], [1, 3], [0], [3], [0, 1, 3], [2], [0, 1, 2, 3], [1, 2], [0, 3], [1], [0, 2, 3], [1, 2, 3], [1], [0], [0, 1, 2], [0, 1], [0], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2], [0], [2], [0], [0, 1, 2], [0, 1], [0], [3], [0, 1, 3], [0, 1, 2, 3], [0], [0, 1, 2, 3], [3], [3], [1, 2, 3], [1], [3], [2], [2], [1], [0, 3], [2], [1], [1], [2], [1, 2, 3], [1, 3], [0, 1, 3], [0, 2, 3], [1], [0], [0, 1], [0, 1, 2, 3], [2], [0, 1, 2], [2], [0, 1, 2], [0, 1, 2, 3]],
		170988: [[0, 1, 2, 3], [0, 1, 2, 3, 4], [0, 1, 3], [3], [2], [1], [0, 1], [0, 1, 2, 3, 4], [2], [0, 1, 2], [0, 1, 2, 3], [2], [0, 2], [3], [0, 2], [0, 1, 2, 3], [0], [0, 1, 2], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [1], [3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [2], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2]]
	},
	33946: {
		170991: [[0, 1, 2, 3], [3], [2], [3], [0, 1, 2, 3]],
		170992: [[1], [3], [3], [3], [0], [2], [3], [3], [2], [3], [3], [3], [3], [2], [1], [2], [2], [2], [1], [3], [2], [2], [3], [2], [3], [1], [1], [3], [1], [3], [2], [0, 1, 2, 3], [2], [3], [3], [3]],
		170993: [[0], [1], [2], [2], [1], [3], [0], [3], [3], [2], [3], [3], [3], [1, 3], [0, 1, 2, 3], [3]],
		170994: [[3], [1], [3], [0], [3], [3], [3], [0], [3], [3], [0], [2], [2], [2], [1], [0], [3], [3], [2], [3], [3], [3], [0, 1, 2, 3], [0], [2], [1], [3], [3]],
		170995: [[3], [0], [0, 1, 2, 3], [3], [0], [1], [3], [3], [1], [3], [3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2]],
		170996: [[1], [1], [3], [2], [0], [3], [0, 1, 2, 3], [2], [0, 1, 2, 3], [0], [3], [1], [3], [2], [3], [0], [0], [0], [2], [0, 2], [1], [3], [3], [0, 1, 2, 3], [3], [3]]
	},
	33947: {
		170997: [[0, 1, 2], [3], [0, 1, 2, 3], [0, 1, 2, 3]],
		170998: [[0, 1], [3], [0, 1, 2, 3], [1, 2, 3]],
		170999: [[0, 1], [0, 1, 2, 3], [0, 1, 3], [0]],
		171000: [[0], [0, 1, 2], [0, 1], [1]],
		171001: [[1], [0, 3], [0, 2], [0, 1, 2, 3]],
		171002: [[2], [3], [0, 1, 2, 3], [1]],
		171003: [[0, 2], [1, 2, 3, 4]],
		171004: [[2]],
		171005: [[0, 1, 2], [0, 1, 3]]
	},
	38251: {
		194644: [[0], [0, 1, 2, 3]],
		194645: [[3]],
		194646: [[2], [1], [0, 1, 2, 3], [0, 1, 2, 3], [3]]
	},
	38258: {
		194713: [[0, 1, 2]],
		194714: [[0], [1], [0], [1]]
	},
	38259: {
		194723: [[1], [1], [1]]
	}
};
var answers = data[quizInfo.contextId][quizInfo.quizId];
$('.question-item').each(function (i) {
	var boxes = $(this).find('[answer_id]');
	answers[i].forEach(function (x) {
		boxes.eq(x).click();
	});
});
```

## 快速播放增强版

此方法可以一次性快速看完所有所有视频，但是需要已root的安卓手机

1. 下载repo中的[`progress.xml`](https://github.com/DDoSolitary/gxb-buaa73/raw/master/progress.xml)文件。
2. 参照下文[获取用户ID](#获取用户ID)中的内容获取自己的用户ID，然后把`progress.xml`中每一行`name="`之后，`null`之前的`2333`替换为自己的用户ID。
3. 下载[高校邦App](http://android.myapp.com/myapp/detail.htm?apkName=com.kaikeba.u.student)，通过课程页面右上角的下载按钮下载所有你还未看完的视频。
4. 彻底退出高校邦App。
5. 随便你用什么方法，用修改后的`progress.xml`的内容，替换手机上`/data/data/com.kaikeba.u.student/shared_prefs/progress_file.xml`和`/data/data/com.kaikeba.u.student/shared_prefs/maxprogress_file.xml`这两个文件的内容。(这一步需要root）
6. 手机断开WiFi和流量，打开高校邦App，打开`我的`->`离线课程`，逐个打开之前下载好的课程视频并等待其播放完毕。（如果之前修改文件的操作没有问题，这时每个视频打开后都会自动跳到最后，只要等几秒就可以播放完毕了）
7. 不要关闭App，联网，等待App自动同步数据，此时可以在电脑端刷新一下课程页面看看相应的视频是否都显示看完了。

## 获取用户ID

1. 打开高校邦任意页面，确保已经登录
2. 按`Ctrl+U`打开网页源代码
3. 在页面中查找`UserID`，第一个结果应该类似于`config.identifier.setUserID('2333');`，引号中的数字（这里用`2333`代替）就是你的用户ID。
