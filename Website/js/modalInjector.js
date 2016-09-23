var modalId = '#modal-id';
var modalTitle = '#modal-title';
var imageFilename = '#image-filename';
var description = '#description';
var appName = '#app-name';
var header = '#header';
var imageLinks = '#image-links';
var link = '#link';
var type = '#type';
var innerText = '#inner-text';
var technologiesUsed = "#technologies-used";

var modalTemplate = '<div class=\"modal fade\" id=\"#modal-id\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"></button> <h4 class=\"modal-title\">#modal-title</h4></div><div class=\"modal-body row\"><img style=\"margin-top: 70px;\" src=\"images/#image-filename\" name=\"aboutme\" class=\"img-responsive col-md-4\"/><h3 class=\"media-heading\">#app-name</h3><h4 class=\"text-muted\">#header</h4><p>#description</p><hr><span><strong>Technologies Used: </strong></span>#technologies-used<br><span><strong>Download for: </strong></span>#download-for<hr><span><strong>Screenshots: </strong></span><br>#image-links</div><div class=\"modal-footer\"><center><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button></center></div></div></div></div>';

var imageTemplate = '<img src=\"#link\"height=\"120\"/>';
var labelTemplate = '<span class=\"label label-#type\">#inner-text</span>';

console.log('Injection Started');

init();

function injectModal(newModal) {
    document.body.innerHTML += newModal;
}

function createModal(modalId, appName, category, description, logoLocation, slogan, screenshots, technoUsed, downloadFor) {
    var newModal = modalTemplate;
    newModal = newModal.replace(this.modalId, modalId);
    newModal = newModal.replace(this.modalTitle, category);
    newModal = newModal.replace(this.imageFilename, logoLocation);
    newModal = newModal.replace(this.description, description);
    newModal = newModal.replace(this.appName, appName);
    newModal = newModal.replace(this.header, slogan);

    var imageLinks = '';

    for (var i in screenshots) {
        imageLinks += (imageLinks, this.imageTemplate.replace(this.link, screenshots[i]));
    }

    newModal = newModal.replace(this.imageLinks, imageLinks);

    var techUsed = '';
    var downFor = '';

    console.log(technoUsed.length);

    for (var i = 0; i < technoUsed.length; i++) {
        techUsed += (techUsed, this.labelTemplate.replace(this.innerText, technoUsed[i][0]).replace(this.type, technoUsed[i][1]))
    }

    for (var i = 0; i < downloadFor.length; i++) {
        downFor += (downFor, this.labelTemplate.replace(this.innerText, downloadFor[i][0]).replace(this.type, downloadFor[i][1]))
    }


    newModal = newModal.replace(this.technologiesUsed, techUsed);
    newModal = newModal.replace("#download-for", downFor);

    injectModal(newModal);
}

//requests the .json object from the server
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', 'js/lunch.json', true); // Replace 'my_data' with the path to your file
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
            createModal(current.modalId, current.title, current.category, current.description, current.logoLocation, current.slogan, current.screenshots, current.technologies_used, current.download_for);
        }
    });
}