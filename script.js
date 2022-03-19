/**Show Condensed List*/
/*** 
let clist = document.getElementById("clist")
let clistbutton = document.getElementById("clistbutton");

clistbutton.addEventListener("click", function(){
  if (clist.style.display=="block"){
    clist.style.display = "none";
  }
  else {
    clist.style.display = "block"
  }
})
***/


/**Show Icons */

let icon = document.getElementById("icons")
let iconbutton = document.getElementById("icon-button");

iconbutton.addEventListener("click", function(){
  if (icon.style.display=="block"){
    icon.style.display = "none";
  }
  else {
    icon.style.display = "block"
  }
})
/**Sort Data filters by data attribute */
let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        /***for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');***/
        

        let targetData = this.getAttribute('data-attribute');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-attribute') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}


const targetDiv1 = document.getElementsByClassName("here");
const btn1 = document.getElementById("expand")
/***const btn = document.getElementById("toggle");***/
btn1.addEventListener('click',function() {
  /** 
  for (divs of targetDiv1){
  console.log(divs)
  if (divs.style.display == "block") {
    divs.style.display = "none";
  } else {
    divs.style.display = "block";
  
  }
  ***/
  for (divs of targetDiv1){
    divs.style.display = "block";

}});


const btn2 = document.getElementById("collapse")
/***const btn = document.getElementById("toggle");***/
btn2.addEventListener('click',function() {
  for (divs of targetDiv1){
      divs.style.display = "none";
 
}});


const btn3 = document.getElementById("expandv2")
/***const btn = document.getElementById("toggle");***/
btn3.addEventListener('click',function() {
  /** 
  for (divs of targetDiv1){
  console.log(divs)
  if (divs.style.display == "block") {
    divs.style.display = "none";
  } else {
    divs.style.display = "block";
  
  }
  ***/
  for (divs of targetDiv1){
    divs.style.display = "block";

}});


const btn4 = document.getElementById("collapsev2")
/***const btn = document.getElementById("toggle");***/
btn4.addEventListener('click',function() {
  for (divs of targetDiv1){
      divs.style.display = "none";
 
}});




const targetDiv101 = document.getElementById("andypages");
const btn101 = document.getElementById("101btn")

btn101.addEventListener('click',function() {
  if (targetDiv101.style.display == "block") {
    targetDiv101.style.display = "none";
  } else {
    targetDiv101.style.display = "block";
  
  }
});

const targetDiv102 = document.getElementById("joeywiemer");
const btn102 = document.getElementById("102btn")

btn102.addEventListener('click',function() {
  
  if (targetDiv102.style.display == "block") {
    targetDiv102.style.display = "none";
  } else {
    targetDiv102.style.display = "block";
  
  }
});


const targetDiv103 = document.getElementById("hestonkjerstad");
const btn103 = document.getElementById("103btn")

btn103.addEventListener('click',function() {
  
  if (targetDiv103.style.display == "block") {
    targetDiv103.style.display = "none";
  } else {
    targetDiv103.style.display = "block";
  
  }
});

const targetDiv104 = document.getElementById("owencaissie");
const btn104 = document.getElementById("104btn")

btn104.addEventListener('click',function() {
  
  if (targetDiv104.style.display == "block") {
    targetDiv104.style.display = "none";
  } else {
    targetDiv104.style.display = "block";
  
  }
});

const targetDiv105 = document.getElementById("kevinalcantara");
const btn105 = document.getElementById("105btn")

btn105.addEventListener('click',function() {
  
  if (targetDiv105.style.display == "block") {
    targetDiv105.style.display = "none";
  } else {
    targetDiv105.style.display = "block";
  
  }
});

const targetDiv106 = document.getElementById("dustinharris");
const btn106 = document.getElementById("106btn")

btn106.addEventListener('click',function() {
  
  if (targetDiv106.style.display == "block") {
    targetDiv106.style.display = "none";
  } else {
    targetDiv106.style.display = "block";
  
  }
});

const targetDiv107 = document.getElementById("cobymayo");
const btn107 = document.getElementById("107btn")
/***const btn = document.getElementById("toggle");***/
btn107.addEventListener('click',function() {
  
  if (targetDiv107.style.display == "block") {
    targetDiv107.style.display = "none";
  } else {
    targetDiv107.style.display = "block";
  
  }
});

const targetDiv108 = document.getElementById("jamestriantos");
const btn108 = document.getElementById("108btn")
/***const btn = document.getElementById("toggle");***/
btn108.addEventListener('click',function() {
  
  if (targetDiv108.style.display == "block") {
    targetDiv108.style.display = "none";
  } else {
    targetDiv108.style.display = "block";
  
  }
});


const targetDiv109 = document.getElementById("vinniepasquantino");
const btn109 = document.getElementById("109btn")
/***const btn = document.getElementById("toggle");***/
btn109.addEventListener('click',function() {
  if (targetDiv109.style.display == "block") {
    targetDiv109.style.display = "none";
  } else {
    targetDiv109.style.display = "block";
  
  }
});



const targetDiv110 = document.getElementById("juanyepez");
const btn110 = document.getElementById("110btn")

btn110.addEventListener('click',function() {
  if (targetDiv110.style.display == "block") {
    targetDiv110.style.display = "none";
  } else {
    targetDiv110.style.display = "block";
  
  }
});


const targetDiv111 = document.getElementById("eversonpereira");
const btn111 = document.getElementById("111btn")

btn111.addEventListener('click',function() {
  if (targetDiv111.style.display == "block") {
    targetDiv111.style.display = "none";
  } else {
    targetDiv111.style.display = "block";
  
  }
});

const targetDiv112 = document.getElementById("eddysleonard");
const btn112 = document.getElementById("112btn")

btn112.addEventListener('click',function() {
  if (targetDiv112.style.display == "block") {
    targetDiv112.style.display = "none";
  } else {
    targetDiv112.style.display = "block";
  
  }
});

const targetDiv113 = document.getElementById("jordangroshans");
const btn113 = document.getElementById("113btn")

btn113.addEventListener('click',function() {
  if (targetDiv113.style.display == "block") {
    targetDiv113.style.display = "none";
  } else {
    targetDiv113.style.display = "block";
  
  }
});

const targetDiv114 = document.getElementById("salfrelick");
const btn114 = document.getElementById("114btn")

btn114.addEventListener('click',function() {
  if (targetDiv114.style.display == "block") {
    targetDiv114.style.display = "none";
  } else {
    targetDiv114.style.display = "block";
  
  }
});

const targetDiv115 = document.getElementById("landonknack");
const btn115 = document.getElementById("115btn")

btn115.addEventListener('click',function() {
  if (targetDiv115.style.display == "block") {
    targetDiv115.style.display = "none";
  } else {
    targetDiv115.style.display = "block";
  
  }
});

const targetDiv116 = document.getElementById("dreyjameson");
const btn116 = document.getElementById("116btn")

btn116.addEventListener('click',function() {
  if (targetDiv116.style.display == "block") {
    targetDiv116.style.display = "none";
  } else {
    targetDiv116.style.display = "block";
  
  }
});

const targetDiv117 = document.getElementById("harryford");
const btn117 = document.getElementById("117btn")

btn117.addEventListener('click',function() {
  if (targetDiv117.style.display == "block") {
    targetDiv117.style.display = "none";
  } else {
    targetDiv117.style.display = "block";
  
  }
});

const targetDiv118 = document.getElementById("mattmclain");
const btn118 = document.getElementById("118btn")

btn118.addEventListener('click',function() {
  if (targetDiv118.style.display == "block") {
    targetDiv118.style.display = "none";
  } else {
    targetDiv118.style.display = "block";
  
  }
});

const targetDiv119 = document.getElementById("treysweeney");
const btn119 = document.getElementById("119btn")

btn119.addEventListener('click',function() {
  if (targetDiv119.style.display == "block") {
    targetDiv119.style.display = "none";
  } else {
    targetDiv119.style.display = "block";
  
  }
});

const targetDiv120 = document.getElementById("deyvisondelossantos");
const btn120 = document.getElementById("120btn")

btn120.addEventListener('click',function() {
  if (targetDiv120.style.display == "block") {
    targetDiv120.style.display = "none";
  } else {
    targetDiv120.style.display = "block";
  
  }
});

const targetDiv121 = document.getElementById("kylemuller");
const btn121 = document.getElementById("121btn")

btn121.addEventListener('click',function() {
  if (targetDiv121.style.display == "block") {
    targetDiv121.style.display = "none";
  } else {
    targetDiv121.style.display = "block";
  
  }
});

const targetDiv122 = document.getElementById("sambachman");
const btn122 = document.getElementById("122btn")

btn122.addEventListener('click',function() {
  if (targetDiv122.style.display == "block") {
    targetDiv122.style.display = "none";
  } else {
    targetDiv122.style.display = "block";
  
  }
});

const targetDiv123 = document.getElementById("kylestowers");
const btn123 = document.getElementById("123btn")

btn123.addEventListener('click',function() {
  if (targetDiv123.style.display == "block") {
    targetDiv123.style.display = "none";
  } else {
    targetDiv123.style.display = "block";
  
  }
});

const targetDiv124 = document.getElementById("jayallen");
const btn124 = document.getElementById("124btn")

btn124.addEventListener('click',function() {
  if (targetDiv124.style.display == "block") {
    targetDiv124.style.display = "none";
  } else {
    targetDiv124.style.display = "block";
  
  }
});

const targetDiv125 = document.getElementById("austinwells");
const btn125 = document.getElementById("125btn")

btn125.addEventListener('click',function() {
  if (targetDiv125.style.display == "block") {
    targetDiv125.style.display = "none";
  } else {
    targetDiv125.style.display = "block";
  
  }
});

const targetDiv126 = document.getElementById("gregjones");
const btn126 = document.getElementById("126btn")

btn126.addEventListener('click',function() {
  if (targetDiv126.style.display == "block") {
    targetDiv126.style.display = "none";
  } else {
    targetDiv126.style.display = "block";
  
  }
});

const targetDiv127 = document.getElementById("bennymontgomery");
const btn127 = document.getElementById("127btn")

btn127.addEventListener('click',function() {
  if (targetDiv127.style.display == "block") {
    targetDiv127.style.display = "none";
  } else {
    targetDiv127.style.display = "block";
  
  }
});

const targetDiv128 = document.getElementById("gavinwilliams");
const btn128 = document.getElementById("128btn")

btn128.addEventListener('click',function() {
  if (targetDiv128.style.display == "block") {
    targetDiv128.style.display = "none";
  } else {
    targetDiv128.style.display = "block";
  
  }
});

const targetDiv129 = document.getElementById("willbednar");
const btn129 = document.getElementById("129btn")

btn129.addEventListener('click',function() {
  if (targetDiv129.style.display == "block") {
    targetDiv129.style.display = "none";
  } else {
    targetDiv129.style.display = "block";
  
  }
});

const targetDiv130 = document.getElementById("evancarter");
const btn130 = document.getElementById("130btn")

btn130.addEventListener('click',function() {
  if (targetDiv130.style.display == "block") {
    targetDiv130.style.display = "none";
  } else {
    targetDiv130.style.display = "block";
  
  }
});

const targetDiv131 = document.getElementById("markvientos");
const btn131 = document.getElementById("131btn")

btn131.addEventListener('click',function() {
  if (targetDiv131.style.display == "block") {
    targetDiv131.style.display = "none";
  } else {
    targetDiv131.style.display = "block";
  
  }
});

const targetDiv132 = document.getElementById("garrettmitchell");
const btn132 = document.getElementById("132btn")

btn132.addEventListener('click',function() {
  if (targetDiv132.style.display == "block") {
    targetDiv132.style.display = "none";
  } else {
    targetDiv132.style.display = "block";
  
  }
});

const targetDiv133 = document.getElementById("jacksonkowar");
const btn133 = document.getElementById("133btn")

btn133.addEventListener('click',function() {
  if (targetDiv133.style.display == "block") {
    targetDiv133.style.display = "none";
  } else {
    targetDiv133.style.display = "block";
  
  }
});

const targetDiv134 = document.getElementById("stevenkwan");
const btn134 = document.getElementById("134btn")

btn134.addEventListener('click',function() {
  if (targetDiv134.style.display == "block") {
    targetDiv134.style.display = "none";
  } else {
    targetDiv134.style.display = "block";
  
  }
});

const targetDiv135 = document.getElementById("asalacy");
const btn135 = document.getElementById("135btn")

btn135.addEventListener('click',function() {
  if (targetDiv135.style.display == "block") {
    targetDiv135.style.display = "none";
  } else {
    targetDiv135.style.display = "block";
  
  }
});

const targetDiv136 = document.getElementById("jairopomares");
const btn136 = document.getElementById("136btn")

btn136.addEventListener('click',function() {
  if (targetDiv136.style.display == "block") {
    targetDiv136.style.display = "none";
  } else {
    targetDiv136.style.display = "block";
  
  }
});

const targetDiv137 = document.getElementById("loganallen");
const btn137 = document.getElementById("137btn")

btn137.addEventListener('click',function() {
  if (targetDiv137.style.display == "block") {
    targetDiv137.style.display = "none";
  } else {
    targetDiv137.style.display = "block";
  
  }
});

const targetDiv138 = document.getElementById("jhonkensynoel");
const btn138 = document.getElementById("138btn")

btn138.addEventListener('click',function() {
  if (targetDiv138.style.display == "block") {
    targetDiv138.style.display = "none";
  } else {
    targetDiv138.style.display = "block";
  
  }
});

const targetDiv139 = document.getElementById("blazejordan");
const btn139 = document.getElementById("139btn")

btn139.addEventListener('click',function() {
  if (targetDiv139.style.display == "block") {
    targetDiv139.style.display = "none";
  } else {
    targetDiv139.style.display = "block";
  
  }
});

const targetDiv140 = document.getElementById("jameswood");
const btn140 = document.getElementById("140btn")

btn140.addEventListener('click',function() {
  if (targetDiv140.style.display == "block") {
    targetDiv140.style.display = "none";
  } else {
    targetDiv140.style.display = "block";
  
  }
});

const targetDiv141 = document.getElementById("cristhianvaquero");
const btn141 = document.getElementById("141btn")

btn141.addEventListener('click',function() {
  if (targetDiv141.style.display == "block") {
    targetDiv141.style.display = "none";
  } else {
    targetDiv141.style.display = "block";
  
  }
});

const targetDiv142 = document.getElementById("roderickarias");
const btn142 = document.getElementById("142btn")

btn142.addEventListener('click',function() {
  if (targetDiv142.style.display == "block") {
    targetDiv142.style.display = "none";
  } else {
    targetDiv142.style.display = "block";
  
  }
});

const targetDiv143 = document.getElementById("jonathanaranda");
const btn143 = document.getElementById("143btn")

btn143.addEventListener('click',function() {
  if (targetDiv143.style.display == "block") {
    targetDiv143.style.display = "none";
  } else {
    targetDiv143.style.display = "block";
  
  }
});

const targetDiv144 = document.getElementById("colsonmontgomery");
const btn144 = document.getElementById("144btn")

btn144.addEventListener('click',function() {
  if (targetDiv144.style.display == "block") {
    targetDiv144.style.display = "none";
  } else {
    targetDiv144.style.display = "block";
  
  }
});


const targetDiv145 = document.getElementById("peytonburdick");
const btn145 = document.getElementById("145btn")

btn145.addEventListener('click',function() {
  if (targetDiv145.style.display == "block") {
    targetDiv145.style.display = "none";
  } else {
    targetDiv145.style.display = "block";
  
  }
});



const targetDiv146 = document.getElementById("nolanjones");
const btn146 = document.getElementById("146btn")

btn146.addEventListener('click',function() {
  if (targetDiv146.style.display == "block") {
    targetDiv146.style.display = "none";
  } else {
    targetDiv146.style.display = "block";
  
  }
});


const targetDiv147 = document.getElementById("spencerstrider");
const btn147 = document.getElementById("147btn")

btn147.addEventListener('click',function() {
  if (targetDiv147.style.display == "block") {
    targetDiv147.style.display = "none";
  } else {
    targetDiv147.style.display = "block";
  
  }
});


const targetDiv148 = document.getElementById("mattcanterino");
const btn148 = document.getElementById("148btn")

btn148.addEventListener('click',function() {
  if (targetDiv148.style.display == "block") {
    targetDiv148.style.display = "none";
  } else {
    targetDiv148.style.display = "block";
  
  }
});

const targetDiv149 = document.getElementById("colewilcox");
const btn149 = document.getElementById("149btn")

btn149.addEventListener('click',function() {
  if (targetDiv149.style.display == "block") {
    targetDiv149.style.display = "none";
  } else {
    targetDiv149.style.display = "block";
  
  }
});

const targetDiv150 = document.getElementById("drewwaters");
const btn150 = document.getElementById("150btn")

btn150.addEventListener('click',function() {
  if (targetDiv150.style.display == "block") {
    targetDiv150.style.display = "none";
  } else {
    targetDiv150.style.display = "block";
  
  }
});

const targetDiv151 = document.getElementById("rickyvanasco");
const btn151 = document.getElementById("151btn")

btn151.addEventListener('click',function() {
  if (targetDiv151.style.display == "block") {
    targetDiv151.style.display = "none";
  } else {
    targetDiv151.style.display = "block";
  
  }
});

const targetDiv152 = document.getElementById("luisgil");
const btn152 = document.getElementById("152btn")

btn152.addEventListener('click',function() {
  if (targetDiv152.style.display == "block") {
    targetDiv152.style.display = "none";
  } else {
    targetDiv152.style.display = "block";
  
  }
});


const targetDiv153 = document.getElementById("jakeeder");
const btn153 = document.getElementById("153btn")

btn153.addEventListener('click',function() {
  if (targetDiv153.style.display == "block") {
    targetDiv153.style.display = "none";
  } else {
    targetDiv153.style.display = "block";
  
  }
});

const targetDiv154 = document.getElementById("matthewallan");
const btn154 = document.getElementById("154btn")

btn154.addEventListener('click',function() {
  if (targetDiv154.style.display == "block") {
    targetDiv154.style.display = "none";
  } else {
    targetDiv154.style.display = "block";
  
  }
});

const targetDiv155 = document.getElementById("colehenry");
const btn155 = document.getElementById("155btn")

btn155.addEventListener('click',function() {
  if (targetDiv155.style.display == "block") {
    targetDiv155.style.display = "none";
  } else {
    targetDiv155.style.display = "block";
  
  }
});

const targetDiv156 = document.getElementById("owenwhite");
const btn156 = document.getElementById("156btn")

btn156.addEventListener('click',function() {
  if (targetDiv156.style.display == "block") {
    targetDiv156.style.display = "none";
  } else {
    targetDiv156.style.display = "block";
  
  }
});

const targetDiv157 = document.getElementById("emersonhancock");
const btn157 = document.getElementById("157btn")

btn157.addEventListener('click',function() {
  if (targetDiv157.style.display == "block") {
    targetDiv157.style.display = "none";
  } else {
    targetDiv157.style.display = "block";
  
  }
});

const targetDiv158 = document.getElementById("luismedina");
const btn158 = document.getElementById("158btn")

btn158.addEventListener('click',function() {
  if (targetDiv158.style.display == "block") {
    targetDiv158.style.display = "none";
  } else {
    targetDiv158.style.display = "block";
  
  }
});

const targetDiv159 = document.getElementById("josetena");
const btn159 = document.getElementById("159btn")

btn159.addEventListener('click',function() {
  if (targetDiv159.style.display == "block") {
    targetDiv159.style.display = "none";
  } else {
    targetDiv159.style.display = "block";
  
  }
});

const targetDiv160 = document.getElementById("tylerblack");
const btn160 = document.getElementById("160btn")

btn160.addEventListener('click',function() {
  if (targetDiv160.style.display == "block") {
    targetDiv160.style.display = "none";
  } else {
    targetDiv160.style.display = "block";
  
  }
});

const targetDiv161 = document.getElementById("ezequielduran");
const btn161 = document.getElementById("161btn")

btn161.addEventListener('click',function() {
  if (targetDiv161.style.display == "block") {
    targetDiv161.style.display = "none";
  } else {
    targetDiv161.style.display = "block";
  
  }
});

const targetDiv162 = document.getElementById("jordanwestburg");
const btn162 = document.getElementById("162btn")

btn162.addEventListener('click',function() {
  if (targetDiv162.style.display == "block") {
    targetDiv162.style.display = "none";
  } else {
    targetDiv162.style.display = "block";
  
  }
});

const targetDiv163 = document.getElementById("loganhoppe");
const btn163 = document.getElementById("163btn")

btn163.addEventListener('click',function() {
  if (targetDiv163.style.display == "block") {
    targetDiv163.style.display = "none";
  } else {
    targetDiv163.style.display = "block";
  
  }
});

const targetDiv164 = document.getElementById("michaelmcgreevy");
const btn164 = document.getElementById("164btn")

btn164.addEventListener('click',function() {
  if (targetDiv164.style.display == "block") {
    targetDiv164.style.display = "none";
  } else {
    targetDiv164.style.display = "block";
  
  }
});

const targetDiv165 = document.getElementById("peytonbattenfield");
const btn165 = document.getElementById("165btn")

btn165.addEventListener('click',function() {
  if (targetDiv165.style.display == "block") {
    targetDiv165.style.display = "none";
  } else {
    targetDiv165.style.display = "block";
  
  }
});

const targetDiv166 = document.getElementById("xavieredwards");
const btn166 = document.getElementById("166btn")

btn166.addEventListener('click',function() {
  if (targetDiv166.style.display == "block") {
    targetDiv166.style.display = "none";
  } else {
    targetDiv166.style.display = "block";
  
  }
});

const targetDiv167 = document.getElementById("khristianrobinson");
const btn167 = document.getElementById("167btn")

btn167.addEventListener('click',function() {
  if (targetDiv167.style.display == "block") {
    targetDiv167.style.display = "none";
  } else {
    targetDiv167.style.display = "block";
  
  }
});

const targetDiv168 = document.getElementById("austinhendrick");
const btn168 = document.getElementById("168btn")

btn168.addEventListener('click',function() {
  if (targetDiv168.style.display == "block") {
    targetDiv168.style.display = "none";
  } else {
    targetDiv168.style.display = "block";
  
  }
});

const targetDiv169 = document.getElementById("justinfoscue");
const btn169 = document.getElementById("169btn")

btn169.addEventListener('click',function() {
  if (targetDiv169.style.display == "block") {
    targetDiv169.style.display = "none";
  } else {
    targetDiv169.style.display = "block";
  
  }
});

const targetDiv170 = document.getElementById("kyrenparis");
const btn170 = document.getElementById("170btn")

btn170.addEventListener('click',function() {
  if (targetDiv170.style.display == "block") {
    targetDiv170.style.display = "none";
  } else {
    targetDiv170.style.display = "block";
  
  }
});

const targetDiv171 = document.getElementById("zackgelof");
const btn171 = document.getElementById("171btn")

btn171.addEventListener('click',function() {
  if (targetDiv171.style.display == "block") {
    targetDiv171.style.display = "none";
  } else {
    targetDiv171.style.display = "block";
  
  }
});

const targetDiv172 = document.getElementById("gunnarhoglund");
const btn172 = document.getElementById("172btn")

btn172.addEventListener('click',function() {
  if (targetDiv172.style.display == "block") {
    targetDiv172.style.display = "none";
  } else {
    targetDiv172.style.display = "block";
  
  }
});


const targetDiv173 = document.getElementById("ethanhankins");
const btn173 = document.getElementById("173btn")

btn173.addEventListener('click',function() {
  if (targetDiv173.style.display == "block") {
    targetDiv173.style.display = "none";
  } else {
    targetDiv173.style.display = "block";
  
  }
});

const targetDiv174 = document.getElementById("bryanmata");
const btn174 = document.getElementById("174btn")

btn174.addEventListener('click',function() {
  if (targetDiv174.style.display == "block") {
    targetDiv174.style.display = "none";
  } else {
    targetDiv174.style.display = "block";
  
  }
});


const targetDiv175 = document.getElementById("andrewpainter");
const btn175 = document.getElementById("175btn")

btn175.addEventListener('click',function() {
  if (targetDiv175.style.display == "block") {
    targetDiv175.style.display = "none";
  } else {
    targetDiv175.style.display = "block";
  
  }
});


const targetDiv176 = document.getElementById("vaughngrissom");
const btn176 = document.getElementById("176btn")

btn176.addEventListener('click',function() {
  if (targetDiv176.style.display == "block") {
    targetDiv176.style.display = "none";
  } else {
    targetDiv176.style.display = "block";
  
  }
});

const targetDiv177 = document.getElementById("josesalas");
const btn177 = document.getElementById("177btn")

btn177.addEventListener('click',function() {
  if (targetDiv177.style.display == "block") {
    targetDiv177.style.display = "none";
  } else {
    targetDiv177.style.display = "block";
  
  }
});

const targetDiv178= document.getElementById("oswaldocabrera");
const btn178 = document.getElementById("178btn")

btn178.addEventListener('click',function() {
  if (targetDiv178.style.display == "block") {
    targetDiv178.style.display = "none";
  } else {
    targetDiv178.style.display = "block";
  
  }
});

const targetDiv179= document.getElementById("jefersonquero");
const btn179 = document.getElementById("179btn")

btn179.addEventListener('click',function() {
  if (targetDiv179.style.display == "block") {
    targetDiv179.style.display = "none";
  } else {
    targetDiv179.style.display = "block";
  
  }
});

const targetDiv180= document.getElementById("reginaldpreciado");
const btn180 = document.getElementById("180btn")

btn180.addEventListener('click',function() {
  if (targetDiv180.style.display == "block") {
    targetDiv180.style.display = "none";
  } else {
    targetDiv180.style.display = "block";
  
  }
});

const targetDiv181= document.getElementById("hedbertperez");
const btn181 = document.getElementById("181btn")

btn181.addEventListener('click',function() {
  if (targetDiv181.style.display == "block") {
    targetDiv181.style.display = "none";
  } else {
    targetDiv181.style.display = "block";
  
  }
});

const targetDiv182= document.getElementById("ianlewis");
const btn182 = document.getElementById("182btn")

btn182.addEventListener('click',function() {
  if (targetDiv182.style.display == "block") {
    targetDiv182.style.display = "none";
  } else {
    targetDiv182.style.display = "block";
  
  }
});

const targetDiv183= document.getElementById("jacksonchourio");
const btn183 = document.getElementById("183btn")

btn183.addEventListener('click',function() {
  if (targetDiv183.style.display == "block") {
    targetDiv183.style.display = "none";
  } else {
    targetDiv183.style.display = "block";
  
  }
});

const targetDiv184= document.getElementById("lonniewhite");
const btn184 = document.getElementById("184btn")

btn184.addEventListener('click',function() {
  if (targetDiv184.style.display == "block") {
    targetDiv184.style.display = "none";
  } else {
    targetDiv184.style.display = "block";
  
  }
});

const targetDiv185= document.getElementById("cristiansantana");
const btn185 = document.getElementById("185btn")

btn185.addEventListener('click',function() {
  if (targetDiv185.style.display == "block") {
    targetDiv185.style.display = "none";
  } else {
    targetDiv185.style.display = "block";
  
  }
});

const targetDiv186= document.getElementById("gabrielgonzalez");
const btn186 = document.getElementById("186btn")

btn186.addEventListener('click',function() {
  if (targetDiv186.style.display == "block") {
    targetDiv186.style.display = "none";
  } else {
    targetDiv186.style.display = "block";
  
  }
});

const targetDiv187= document.getElementById("cooperkinney");
const btn187 = document.getElementById("187btn")

btn187.addEventListener('click',function() {
  if (targetDiv187.style.display == "block") {
    targetDiv187.style.display = "none";
  } else {
    targetDiv187.style.display = "block";
  
  }
});

const targetDiv188= document.getElementById("brandonpfaadt");
const btn188 = document.getElementById("188btn")

btn188.addEventListener('click',function() {
  if (targetDiv188.style.display == "block") {
    targetDiv188.style.display = "none";
  } else {
    targetDiv188.style.display = "block";
  
  }
});

const targetDiv189= document.getElementById("luisangelacuna");
const btn189 = document.getElementById("189btn")

btn189.addEventListener('click',function() {
  if (targetDiv189.style.display == "block") {
    targetDiv189.style.display = "none";
  } else {
    targetDiv189.style.display = "block";
  
  }
});

const targetDiv190= document.getElementById("pedropineda");
const btn190 = document.getElementById("190btn")

btn190.addEventListener('click',function() {
  if (targetDiv190.style.display == "block") {
    targetDiv190.style.display = "none";
  } else {
    targetDiv190.style.display = "block";
  
  }
});

const targetDiv191= document.getElementById("willyvasquez");
const btn191 = document.getElementById("191btn")

btn191.addEventListener('click',function() {
  if (targetDiv191.style.display == "block") {
    targetDiv191.style.display = "none";
  } else {
    targetDiv191.style.display = "block";
  
  }
});

const targetDiv192= document.getElementById("dillondingler");
const btn192 = document.getElementById("192btn")

btn192.addEventListener('click',function() {
  if (targetDiv192.style.display == "block") {
    targetDiv192.style.display = "none";
  } else {
    targetDiv192.style.display = "block";
  
  }
});

const targetDiv193= document.getElementById("connornorby");
const btn193 = document.getElementById("193btn")

btn193.addEventListener('click',function() {
  if (targetDiv193.style.display == "block") {
    targetDiv193.style.display = "none";
  } else {
    targetDiv193.style.display = "block";
  
  }
});

const targetDiv194= document.getElementById("samuelzavala");
const btn194 = document.getElementById("194btn")

btn194.addEventListener('click',function() {
  if (targetDiv194.style.display == "block") {
    targetDiv194.style.display = "none";
  } else {
    targetDiv194.style.display = "block";
  
  }
});

const targetDiv195= document.getElementById("victoracosta");
const btn195 = document.getElementById("195btn")

btn195.addEventListener('click',function() {
  if (targetDiv195.style.display == "block") {
    targetDiv195.style.display = "none";
  } else {
    targetDiv195.style.display = "block";
  
  }
});

const targetDiv196= document.getElementById("wilmandiaz");
const btn196 = document.getElementById("196btn")

btn196.addEventListener('click',function() {
  if (targetDiv196.style.display == "block") {
    targetDiv196.style.display = "none";
  } else {
    targetDiv196.style.display = "block";
  
  }
});

const targetDiv197= document.getElementById("joseramos");
const btn197 = document.getElementById("197btn")

btn197.addEventListener('click',function() {
  if (targetDiv197.style.display == "block") {
    targetDiv197.style.display = "none";
  } else {
    targetDiv197.style.display = "block";
  
  }
});

const targetDiv198= document.getElementById("lazaromontes");
const btn198 = document.getElementById("198btn")

btn198.addEventListener('click',function() {
  if (targetDiv198.style.display == "block") {
    targetDiv198.style.display = "none";
  } else {
    targetDiv198.style.display = "block";
  
  }
});

const targetDiv199= document.getElementById("PCA");
const btn199 = document.getElementById("199btn")

btn199.addEventListener('click',function() {
  if (targetDiv199.style.display == "block") {
    targetDiv199.style.display = "none";
  } else {
    targetDiv199.style.display = "block";
  
  }
});


const targetDiv200= document.getElementById("tymadden");
const btn200 = document.getElementById("200btn")

btn200.addEventListener('click',function() {
  if (targetDiv200.style.display == "block") {
    targetDiv200.style.display = "none";
  } else {
    targetDiv200.style.display = "block";
  
  }
});













