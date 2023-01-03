
const API_URL = "https://63aa9cf17d7edb3ae62c2510.mockapi.io/education";
function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    })
        .catch((err) => {
            console.log(err);
        });
}

fetch("mock.json")
    .then(response => response.json())
    .then(JSON => show(JSON));
    function show(JSON){
        console.log(JSON);
        let a="";
        for (i in JSON){
            a+= JSON[i].Title_URL;
        }
        document.getElementById("a").innerHTML +=a
    }
    function save() {
        // document.getElementById("huy").style.display = "none";
        // document.getElementById("themmoi").style.display = "block";
        // document.getElementById("divAddHotel").style.display = "none";
        let hotel = [];
        callAPI("hotels", "GET", null).then((res) => {
            hotel = res.data;})
        for ( let i = 0; i < hotel.length; i++){
            id = i;
        }
        var name = document.getElementById("nameproduct").value;
        var price = document.getElementById("priceproduct").value;
        var note = document.getElementById("noteproduct").value;
        var detail = document.getElementById("detailproduct").value;
        var img = document.getElementById("imgproduct").value;
        let image = img.split("\\")[2];
        if (name | detail | note | (price != "")) {
            var oneProduct = {
                id: id,
                name: name,
                price: price,
                note: note,
                detail: detail,
                img: "images/" + image,
            };
            callAPI("hotels","POST", oneProduct).then((response) => {
                show();
                alert("Thêm thành công");
            });
        } else {
            reset();
        }
    }
    