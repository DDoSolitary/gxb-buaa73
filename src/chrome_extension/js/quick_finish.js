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
alert("本章节已刷完~ˋ( ° ▽、° ) ");	