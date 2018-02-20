//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }
        
        if(compassHeading >330 || compassHeading < 45){
            text_area.textContent = "-----------NORTH----------------------ss-----------------------uuuu---------------------f-ff-f-------------------f--ff--f-----------------e---ee---e---------------r----rr----r-------------------ii------------------------nn------------------------gg------------------------ii------------------------nn------------------------gg------------------------";
        }
        
        if(compassHeading >45 && compassHeading < 90){
            text_area.textContent = "娓尯灏忓鏍";
        }

        if(compassHeading >65 && compassHeading < 110){
            text_area.textContent = "-----------EAST-----------------------ii-----------------------ssss---------------------o-oo-o-------------------l--ll--l-----------------a---aa---a---------------t----tt----t-------------e-----ee-----e------------------ii------------------------nn------------------------gg------------------------ii------------------------nn------------------------gg------------------------";
        }
        if(compassHeading >110 && compassHeading < 150){
            text_area.textContent = "SUNSET"
        if(compassHeading >150 && compassHeading < 200){
            text_area.textContent = "-----------SOUTH----------------------cc-----------------------aaaa---------------------l-ll-l-------------------m--mm--m---------------------mm------------------------ii------------------------nn------------------------gg------------------------ii------------------------nn------------------------gg------------------------";
        }
        if(compassHeading >200 && compassHeading < 250){
            text_area.textContent = "銇婂彴鍫存捣娴滃叕鍦�";
        }

        if(compassHeading >250 && compassHeading < 315){
            text_area.textContent = "-----------WEST-----------------------tt-----------------------hhhh---------------------i-ii-i-------------------n--nn--n-----------------k---kk---k--------------------ii------------------------nn------------------------gg------------------------ii------------------------nn------------------------gg------------------------";
        }
        if(compassHeading >315 && compassHeading < 330){
            text_area.textContent = "TOYKO TOWER";
        }

         
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}

    /* aaaaa     aaaaaaa  
    aaaa    aaaa
    aa     aaa */


