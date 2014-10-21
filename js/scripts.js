// Make Foundation Go!
$(document).foundation();

$(document).ready(function(){

	new Maplace({
		show_markers: true,
		locations: [{
			lat: 47.659381, 
			lon: -117.4236639,
			zoom: 15
		}]
	}).Load(); 

	$(".page_container").jumpto({
	  firstLevel: "> h2", // You can define which tag will represent your first level header. The default value is the <h2> tag. Any <h2> tag will automatically be used as a first level link in the menu.
	  secondLevel: false, // We also support submenu. Like above, you can define the selector for the second level header to be used in the submenu. Default is false.
	  innerWrapper: ".jumpto-block", // In case you want to switch the section wrapper class name to something else
	  animate: 1000, // You can define how fast/slow the page will scroll when the jump to menu is clicked. Set to false to turn off animation.
	  navContainer: false, // If you want to place your jump to menu somewhere else, simply add a selector to your predefined jump to menu container here. The default is false and it will automatically be generated.
	});

}); 
