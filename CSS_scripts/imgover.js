/* Corrects Browser Differences */
if (document.layers){
	var Menu = document.Menu;
	var Music = document.Music;
	var Members = document.Members;
	var News = document.News;
	
	var NewsSubMenu = document.NewsSubMenu;
	var MembersSubMenu = document.MembersSubMenu;
	var MusicSubMenu = document.MusicSubMenu;
	
	var HIDDEN = 'hide';
	var VISIBLE = 'show';
} else if (document.all){
	var Menu = document.all.Menu.style;
	var Music = document.all.Music.style;
	var Members = document.all.Members.style;
	var News = document.all.News.style;

	var NewsSubMenu = document.all.NewsSubMenu.style;
	var MembersSubMenu = document.all.MembersSubMenu.style;
	var MusicSubMenu = document.all.MusicSubMenu.style;
	
	var HIDDEN = 'hidden';
	var VISIBLE = 'visible';
}

/* Shows an object  */
function showIt(object) {
        object.visibility = VISIBLE;
}

/* Hides an object */
function hideIt(object) {
        object.visibility = HIDDEN;
}
