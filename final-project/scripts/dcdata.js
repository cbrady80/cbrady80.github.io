var article = document.querySelector('#templeClosures');
var requestURL = 'https://cbrady80.github.io/json-temple-info.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var dcData = request.response;
        showData(dcData);
    }

    function showData(jsonObj) {
        var data = jsonObj['temples'];
            
        for (var i = 0; i < data.length; i++) {
            if (data[i].name != "Washington D.C.") {
                continue;
            }
            var myArticle = document.createElement('div');
            
            var myPara1 = document.createElement('p');
            
            
            myPara1.textContent = data[i].closures;


            myArticle.appendChild(myPara1);

            
            article.appendChild(myArticle);
        }
    }