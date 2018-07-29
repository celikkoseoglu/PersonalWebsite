$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var modalTemplate = '<div class=\"modal fade\" id=\"#modal-id\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"></button> <h4 class=\"modal-title\">#modal-title</h4></div><div class=\"modal-body row\"><img style=\"margin-top: 70px;\" src=\"images/#image-filename\" name=\"aboutme\" class=\"img-responsive col-md-4\"/><h3 class=\"media-heading\">#app-name</h3><h4 class=\"text-muted\">#header</h4><p>#description</p><hr><span><strong>#list-1-text</strong></span>#technologies-used<br><span><strong>#list-2-text</strong></span>#download-for<hr><span><strong>#list-3-text</strong></span><br>#image-links</div><div class=\"modal-footer\"><center><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button></center></div></div></div></div>';

var imageTemplate = '<img src=\"#link\"height=\"120\"/>';
var labelTemplate = '<span class=\"label label-#type\">#inner-text</span>';

console.log('Injection Started');

init();

function injectModal(newModal) {
    document.body.innerHTML += newModal;
}

function createModal(modalId, appName, category, description, logoLocation, slogan, screenshots, list1Content, list2Content, list1Text, list2Text, list3Text) {
    var newModal = modalTemplate;
    newModal = newModal.replace('#modal-id', modalId);
    newModal = newModal.replace('#modal-title', category);
    newModal = newModal.replace('#modal-title', category);
    newModal = newModal.replace('#image-filename', logoLocation);
    newModal = newModal.replace('#description', description);
    newModal = newModal.replace('#app-name', appName);
    newModal = newModal.replace('#header', slogan);

    var imageLinks = '';

    for (var i in screenshots) {
        imageLinks += (imageLinks, this.imageTemplate.replace('#link', screenshots[i]));
    }

    newModal = newModal.replace('#image-links', imageLinks);

    var techUsed = '';
    var downFor = '';

    for (var i = 0; i < list1Content.length; i++) {
        techUsed += (techUsed, this.labelTemplate.replace('#inner-text', list1Content[i][0]).replace('#type', list1Content[i][1]))
    }

    for (var i = 0; i < list2Content.length; i++) {
        downFor += (downFor, this.labelTemplate.replace('#inner-text', list2Content[i][0]).replace('#type', list2Content[i][1]))
    }

    newModal = newModal.replace('#technologies-used', techUsed);
    newModal = newModal.replace("#download-for", downFor);

    newModal = newModal.replace('#list-1-text', list1Text);
    newModal = newModal.replace('#list-2-text', list2Text);
    newModal = newModal.replace('#list-3-text', list3Text);

    injectModal(newModal);
}

//requests the .json object from the server
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', 'js/modals.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == '200') {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function (response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);

        for (var i = 0; i < actual_JSON.length; i++) {
            var current = actual_JSON[i];
            createModal(current.modalId, current.title, current.category, current.description, current.logoLocation, current.slogan, current.screenshots, current.list_1_content, current.list_2_content, current.list_1_text, current.list_2_text, current.list_3_text);
        }
    });
}