//9030
function loadMenuItemOption(id, selected) {
	$.ajax({
		url: "/settings/mainList",
		type: "GET",

		success: function (data) {
			drawMenuItemOption(data, id, selected);
		}
	});
}

function drawMenuItemOption(menus, id, selected) {
	var option = '';
	for (var i = 0; i < menus.length; i++) {
		if (menus[i].menuCd == selected) {
			option += '<option value="' + menus[i].menuCd + '" selected>' + menus[i].menuCd + ' ' + menus[i].menuName + '</option>';
		} else {
			option += '<option value="' + menus[i].menuCd + '">' + menus[i].menuCd + ' ' + menus[i].menuName + '</option>';
		}
	}
	$(id).append(option);
}

function loadPrgOption() {
	$.ajax({
		url: "/settings/myMenuList",
		type: "GET",

		success: function (data) {
			var len = data.length;
			for (var i = 0; i < 15; i++) {
				var menuCd, prgCd;

				if (i < len) {
					menuCd = data[i].menuCd;
					prgCd = data[i].prgCd;
				} else {
					menuCd = prgCd = '';
				}

				loadMenuItemOption("#items" + i + "\\.myMenu\\.menuCd", menuCd);

				if (i < len) {
					drawPrgOption(menuCd, "#items" + i + "\\.myMenu\\.prgCd", prgCd);
				}
			}
		}
	});
}

function drawPrgOption(value, id, selected) {
	$.ajax({
		url: "/settings/9030/change/" + value,
		type: "GET",
		success: function (data) {
			if (data) {
				$(id + " option").remove();
				$(id).append("<option value='' selected='selected'></option>");
				var len = data.length;
				for (var i = 0; i < len; i++) {
					var name = data[i].formName1;
					if (data[i].formName2) {
						name += ' ' + data[i].formName2;
					}
					if (data[i].prgCd == selected) {
						$(id).append("<option value='" + data[i].prgCd + "' selected>" + data[i].formNo + " " + name + "</option>");
					} else {
						$(id).append("<option value='" + data[i].prgCd + "'>" + data[i].formNo + " " + name + "</option>");
					}
				}
			}
		},
		error: function (err) {
			//$(".block-loading").removeClass('is-loading');
		}
	});
}