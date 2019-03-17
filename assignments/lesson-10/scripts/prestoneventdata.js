var article = document.querySelector('article');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var eventsData = request.response;
        showData(eventsData);
    }

function showData(jsonObj) {
        var data = jsonObj['towns'];
            
        for (var i = 0; i < data.length; i++) {
            if (data[i].name != "Preston") {
                continue;
            }
            var myArticle = document.createElement('div');
            
            var myPara1 = document.createElement('h4');
            var myPara2 = document.createElement('h4');
            var myPara3 = document.createElement('h4');
            
            
            myPara1.textContent = data[i].events[0];
            myPara2.textContent = data[i].events[1];
            myPara3.textContent = data[i].events[2];


            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            
            article.appendChild(myArticle);
        }

    }
