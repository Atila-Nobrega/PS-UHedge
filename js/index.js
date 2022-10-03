async function getBeerList() {
    try {
        await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=20')
        .then(response => {
            response.json().then((data) => {
                data.forEach(function selectplaylists(beer) {
                        setBeerList(beer.name, beer.description, beer.image_url)
                })
            })
        })
    } catch (error) {
        console.log(error)
    }
}

var textoBusca = ""

getBeerList()

function setBeerList(name, description, image_url) {
    var block = document.createElement('div');
    block.classList.add('col-md-4');

    block.innerHTML = "<div class=\"card mb-4 shadow-sm\">"
        + "<img class=\"card-img-top\" src=" + image_url + " alt=\"Card image cap\">"
        + "<div class=\"card-body\">"
            + "<h2>"+ name + "</h2>"
            + "<p class=\"card-text\">" + description + "</p>"
            + "<div class=\"d-flex justify-content-between align-items-center\">"
            + "<div class=\"d-flex justify-content-between align-items-center\">"
                + "<div class=\"btn-group\">"
                    "<button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">View</button>"
                + "</div>"
            + "</div>"
        + "</div>"
    + "</div>"

    block.onclick = () => {
        console.log(name);
    };

    document.getElementById("beer_list").insertBefore(block, document.getElementById("beer_list").firstChild);

}