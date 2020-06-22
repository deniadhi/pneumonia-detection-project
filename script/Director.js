let introView;
let processView;
let resultView;

let introPageCallback = function(image){
	fadeAndRemove(
        introView,
		function(image) {
			processView = initPage(new Process(image, processPageCallback));
		}
    );
}

let processPageCallback = function(image, result) {
	fadeAndRemove(
        processView,
		function(image, result) {
			resultView = initPage(new Result(image, result));
		}
    );
}

function fadeAndRemove(viewId, callback) {
	$(viewId).fadeOut(
        2000,
        function() {
            $(viewId).remove();
			callback();
        }
    );
}

function initPage(page, eventExist=false) {
	$("body").html(page.getView());
	if(eventExist) {
		page.initEventCallback();
	}
	return "#" + page.ID;
}

$(document).ready(function () {
    introView = initPage(
		new Intro(introPageCallback),
		eventExist=true
	)
});
