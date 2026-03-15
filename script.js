tsParticles.load("particles-js",{

particles:{

number:{value:80},

color:{value:"#00ffff"},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:3},

move:{
enable:true,
speed:2
}

},

interactivity:{

events:{
onhover:{enable:true,mode:"repulse"}
}

}

});

var typed = new Typed("#typing",{

strings:[
"Data Analyst",
"Python Developer",
"Power BI Developer"
],

typeSpeed:60,
backSpeed:40,
loop:true

});