let wrapper = document.getElementById('wrapper')

fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')
    .then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem');
                console.log(`Status Code: ${response.status}`);
                return;
            }
            return response.json();
        }
    )

    .then((data) => {
        for (let element of data) {
            let mainDiv = document.createElement('div');
            mainDiv.className = 'mainDiv';
            wrapper.appendChild(mainDiv)
            let img = document.createElement('img');
            img.className = 'img';
            mainDiv.appendChild(img);
            img.onclick = function (e) {
                localStorage.setItem('id', element.id);
                alert('id = '+ localStorage.id);
            }
            img.src = element.image_url;
            let description = document.createElement('p');
            description.className = 'description';
            mainDiv.appendChild(description);
            description.innerText = element.description
        }
    })

    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
