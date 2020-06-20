let introView;
let processView;

let introPageCallback = function(image){
    hideIntroAndDisplayProcessFor(
        image
    );
}

function initIntroPage() {
    introPage = new Intro(introPageCallback);
    $("body").html(introPage.getView());
    introPage.initEventCallback();
    introView = "#" + introPage.ID;
}

function hideIntroAndDisplayProcessFor(image) {
    $(introView).fadeOut(
        2000,
        function() {
            $(introView).remove();
            initProcessPage(image);
        }
    );
}

function initProcessPage(image) {
    processPage = new Process(image)
    $("body").html(processPage.getView());
    processView = "#" + processPage.ID;
}

$(document).ready(function () {
    initIntroPage();
});
