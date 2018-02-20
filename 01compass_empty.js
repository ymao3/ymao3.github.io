//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }
        
        if(compassHeading >315 || compassHeading < 45){
            text_area.textContent = "-----------NORTH----------------------ss-----------------------uuuu---------------------f-ff-f-------------------f--ff--f-----------------e---ee---e---------------r----rr----r-------------------ii------------------------nn------------------------gg------------------------ii------------------------nn------------------------gg------------------------";
        }

        if(compassHeading >45 && compassHeading < 135){
            text_area.textContent = "-----------EAST-----------------------ii-----------------------ssss---------------------o-oo-o-------------------l--ll--l-----------------a---aa---a---------------t----tt----t-------------e-----ee-----e------------------ii------------------------nn------------------------gg------------------------ii------------------------nn------------------------gg------------------------";
        }

        if(compassHeading >135 && compassHeading < 225){
            text_area.textContent = "-----------SOUTH----------------------cc-----------------------aaaa---------------------l-ll-l-------------------m--mm--m---------------------mm------------------------ii------------------------nn------------------------gg------------------------ii------------------------nn------------------------gg------------------------";
        }

        if(compassHeading >225 && compassHeading < 315){
            text_area.textContent = "-----------WEST-----------------------tt-----------------------hhhh---------------------i-ii-i-------------------n--nn--n-----------------k---kk---k--------------------ii------------------------nn------------------------gg------------------------ii------------------------nn------------------------gg------------------------";
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


