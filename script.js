let r = document.getElementById("rock");

let p = document.getElementById("paper");

let s = document.getElementById("scissor");

let sub = document.getElementById("fight");

let cho = null;

r.onclick = () => {
    cho = 0;
};

s.onclick = () => {
    cho = 1;
};

p.onclick = () => {
    cho = 2;
};

sub.onclick = () => {
    console.log("called");
    if (cho == null) {
        alert("select your choice");

    }
    else {
        let comp = Math.floor(Math.random() * 3);

        if ((cho + 1) % 3 == comp) alert("you win !!")

        else if ((comp + 1) % 3 == cho) alert("you loose")

        else alert("tie !!")




    }

}


