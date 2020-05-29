setTimeout(function(){
    document.body.classList.add('body_visible');
}, 100);

one.onclick = function() {
    var x = document.getElementById("myTopnav");

    if(x.className === "topnav"){
        x.className += " responsive";
        document.getElementById('mainly').style.marginTop = '200px';
    } else{
        x.className = "topnav";
        document.getElementById('mainly').style.marginTop = '0px';
    };


};
butreg.onclick = function(){
    document.getElementById('appear2').style.display = 'block';
    document.getElementById('appear3').style.display = 'block';
};
appear3.onclick = function(){
    document.getElementById('appear2').style.display = 'none';
    document.getElementById('appear3').style.display = 'none';
};
butsign.onclick = function(){
    document.getElementById('appear').style.display = 'block';
    document.getElementById('appear1').style.display = 'block';
};
appear1.onclick = function(){
    document.getElementById('appear').style.display = 'none';
    document.getElementById('appear1').style.display = 'none';
};
butsign4.onclick = function(){
    document.getElementById('appear').style.display = 'block';
    document.getElementById('appear4').style.display = 'block';
};




