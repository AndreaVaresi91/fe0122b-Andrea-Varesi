fetch("audio.json")
    .then(data => {
        return data.json();
    })
    .then(musica => {
        //console.log(musica)
        musica.forEach(e => {
            let mozart = document.querySelector("#container1");
            //console.log(mozart)
            //let muse = e
            let crea = document.createElement("a");
            crea.setAttribute("href", "#");
            crea.style.display = "block";
            crea.innerText = e.titolo;
            //console.log(crea)
            mozart.append(crea);
            console.log(mozart)



            crea.addEventListener("click", function () {
                let beetowen = document.querySelector("#audiocontrol")
                beetowen.setAttribute("src", e.url);
                beetowen.play()
            })

        });
    });

    fetch("video.json")
    .then(data => {
        return data.json();
    })
    .then(video => {
        //console.log(video)
        video.forEach(e => {
            let tarantino = document.querySelector("#container2");
            //console.log(mozart)
            //let muse = e
            let spielberg = document.createElement("a");
            spielberg.setAttribute("href", "#");
            spielberg.style.display = "block";
            spielberg.innerText = e.titolo;
            //console.log(spielberg)
            tarantino.append(spielberg);
            console.log(tarantino)
                


            spielberg.addEventListener("click", function () {
                let argento = document.querySelector("#videocontrol")
                argento.setAttribute("src", e.url);
                argento.play()
            })

        });
    });