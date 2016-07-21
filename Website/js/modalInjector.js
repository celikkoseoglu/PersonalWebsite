/**
 * Created by celikkoseoglu on 21/07/16.
 */
var modalId = '#modal-id';
var modaltitle = '#modal-title';
var imageFilename = '#image-filename';
var description = '#description';
var appName = '#appName';
var header = '#header';


var modalTemplate = '<div class="modal fade" id="#modal-id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button> <h4 class="modal-title">#modal-title</h4> </div> <div class="modal-body row"> <img style="margin-top: 70px;" src="images/#image-filename" name="aboutme"class="img-responsive col-md-4"/> <h3 class="media-heading">#app-name</h3> <h4 class="text-muted">#header</h4> <p>#description</p><hr><span><strong>Technologies Used: </strong></span><span class="label label-warning">Microsoft Visual Studio</span><span class="label label-info">C# .NET</span><span class="label label-info">WPF</span><br><span><strong>Download for: </strong></span><span class="label label-warning">Windows Phone</span><span class="label label-info">Windows</span><hr><span><strong>Screenshots: </strong></span><br><img src="https://store-images.s-microsoft.com/image/apps.33276.13510798883027555.c7c88434-62d2-4a0d-96bc-8df0c3cce760.30addeb0-5df9-4d6c-bc54-aa89bb3283d2?w=580&h=326&q=60&mode=letterbox&background=black"height="120"/><img src="https://store-images.s-microsoft.com/image/apps.51470.13510798883027555.a9832685-2e0b-4c53-bc5e-6d37871fd3d2.0db025c6-d0d2-4dd7-8b62-2301bc4b4719?w=580&h=326&q=60&mode=letterbox&background=black"height="120"/><img src="https://store-images.s-microsoft.com/image/apps.30907.13510798883027555.06c1a6aa-6927-460a-a35f-a226d4a8e379.27fcefcc-9e6d-46d5-a16c-61c62ab110e0?w=580&h=326&q=60&mode=letterbox&background=black"height="120"/></div><div class="modal-footer"><center><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></center></div></div></div></div>';