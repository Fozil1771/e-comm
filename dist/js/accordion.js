//this is the button
let acc = document.getElementsByClassName("course-accordion");
let i;

for (i = 0; i < acc.length; i++) {
    //when one of the buttons are clicked run this function
    acc[i].onclick = function () {
        //variables
        let panel = this.nextElementSibling;
        let coursePanel = document.getElementsByClassName("course-panel");
        let courseAccordion = document.getElementsByClassName("course-accordion");
        let courseAccordionActive = document.getElementsByClassName("course-accordion active");

        /*if pannel is already open - minimize*/
        if (panel.style.maxHeight) {
            //minifies current pannel if already open
            panel.style.maxHeight = null;
            //removes the 'active' class as toggle didnt work on browsers minus chrome
            this.classList.remove("active");
        } else { //pannel isnt open...
            //goes through the buttons and removes the 'active' css (+ and -)
            for (var k = 0; k < courseAccordionActive.length; k++) {
                courseAccordionActive[k].classList.remove("active");
            }
            //Goes through and removes 'active' from the css, also minifies any 'panels' that might be open
            for (var j = 0; j < coursePanel.length; j++) {
                this.classList.remove("active");
                coursePanel[j].style.maxHeight = null;
            }
            //opens the specified pannel
            panel.style.maxHeight = panel.scrollHeight + "px";
            //adds the 'active' addition to the css.
            this.classList.add("active");
        }
    }//closing to the acc onclick function
}//closing to the for loop.
