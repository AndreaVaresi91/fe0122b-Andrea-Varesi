$(() => {

    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"];





    for (var i = 0; i < 16; i++) {

        let random = Math.floor(Math.random() * mieImg.length);
        console.log(random)
        let imgEliminata = mieImg.splice(random, 1)

        $("#memory").append('<div class="images" id="emoji"' + i + '"><img id="' + i + '" src="img/' + imgEliminata + '.png"  width="130" height="130" /> </div>');

        /* $('#memory').append('<div class="images" id="emoji"' + i + '"><img id="' + i + '" src="img/' + imgEliminata + '.png"  width="130" height="130"></div>'); */ //GIULIO STYLE //

    }

    let immaginCliccata = []

    $(".images").click(function () {
        let counter = $("#clicks").text()
        counter++

        $("#clicks").text(counter)

        if (immaginCliccata.length < 2) {
            
            $(this).children().show("slow")

            let imgId = $(this).children().attr("id")
            let imgSrc = $(this).children().attr("src")

            let infoImg = { id: imgId, src: imgSrc }

            immaginCliccata.push(infoImg)

            if (immaginCliccata.length == 2) {
                if (immaginCliccata[0].src == immaginCliccata[1].src) {

                    immaginCliccata = [];
                } else {
                    setTimeout(function () {
                        $("#" + immaginCliccata[0].id).hide()
                        $("#" + immaginCliccata[1].id).hide()

                        immaginCliccata = [];
                    }, 1000);
                }
            }
        }


    });









});










