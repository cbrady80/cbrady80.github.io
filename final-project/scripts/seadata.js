var article = document.querySelector('#templeClosures');
var requestURL = 'https://cbrady80.github.io/json-temple-info.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var seaData = request.response;
        showData(seaData);
    }

    function showData(jsonObj) {
        var data = jsonObj['temples'];
            
        for (var i = 0; i < data.length; i++) {
            if (data[i].name != "Seattle") {
                continue;
            }
            var myArticle = document.createElement('div');
            
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
            
            
            myPara1.textContent = data[i].closures[0];
            myPara2.textContent = data[i].closures[1];
            myPara3.textContent = data[i].closures[2];
            myPara4.textContent = data[i].closures[3];
            myPara5.textContent = data[i].closures[4];


            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            
            
            article.appendChild(myArticle);
        }
    }