function getVideos() {
    $.getJSON('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&type=video&channelId=UC-lHJZR3Gqxm24_Vd_AJ5Yw&maxResults=20&key=AIzaSyAfK23yKsbz8VdteM5R2GE6kf98dThidTY', function(data) {
        var items = data.items;
        var ids = [];
        items.forEach(element => {
            ids.push(element.id.videoId);
        });
        placeVideos(ids);
    })
}

function placeVideos(ids) {
    ids.forEach(element => {
        $( "#youtube" ).append( '<iframe class="col-sm-3" width="820" height="615"src="https://www.youtube.com/embed/' + element + '"></iframe>' );
    });
}