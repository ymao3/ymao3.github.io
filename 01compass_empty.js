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
            text_area.textContent = "------------ss-----------------------uuuu---------------------f-ff-f-------------------f--ff--f-----------------e---ee---e---------------r----rr----r-------------------rr-------------------r-------------------ii------------------------nn------------------------gg------------------------ii------------------------nn------------------------gg";
        }

        if(compassHeading >45 && compassHeading < 135){
            text_area.textContent = "to the East, isolating";
        }

        if(compassHeading >135 && compassHeading < 225){
            text_area.textContent = "to the South, calming";
        }

        if(compassHeading >225 && compassHeading < 315){
            text_area.textContent = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
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


