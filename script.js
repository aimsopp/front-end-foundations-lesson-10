$(document).ready(function () {
    $(".icon").hover(function () {
        $(this).css("width", "63px");
    }, function () {
        $(this).css("width", "60px");
    });
});

function repoLoad() {
    let repoGet = new XMLHttpRequest();

    repoGet.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let repoObj = JSON.parse(this.responseText);
            let i;
            for (i = 0; i < repoObj.length; i++) {

                document.getElementById("repo").innerHTML += "<div class=\"repoLinks\"><div>" + "<div>" + repoObj[i].name + ": " +"</div><div>" + "<a href=\"" + repoObj[i].html_url + "\" target=\"_blank\"/>" + repoObj[i].html_url + "</a>" + "</div></div></div>" +"<br>";
                console.log(repoObj[i].html_url);
            }
        }
    };
    repoGet.open("GET", "https://api.github.com/users/aimsopp/repos", true);
    repoGet.send();
};
repoLoad();
