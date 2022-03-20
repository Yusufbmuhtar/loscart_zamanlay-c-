let endDate = new Date("Nov 22, 2022 23:59:00").getTime();
let saatler = setInterval(function(){
    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
        let gun = Math.floor(t / (1000 * 60 * 60 *24));
        let saat = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let dakika = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let saniye = Math.floor((t % (1000 * 60)) / 1000);

        let g = document.getElementById("gunler");
        g.textContent = gun + " " + 'Gün';

        let s = document.getElementById("saatler");
        s.textContent = saat + " " + 'Saat';

        let dk = document.getElementById("dakikalar");
        dk.textContent = dakika + " " + 'Dakika';

        let sn = document.getElementById("saniyeler");
        sn.textContent = saniye + " " + 'Saniye';
    }
    else {
       let time = document.getElementById("timer");
       time.textContent = "Projemiz Hazır";
    }
}, 1000);