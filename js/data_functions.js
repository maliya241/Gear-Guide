const items_array = []; //each element contains an array for an item

/**************
populate_items_list function creates html list item in its corresponding unordered list for all items in data js files.
Executes in main.js as a part of page set-up.
**************/
function populate_items_list() {
	var id_of_ul_on_page = document.getElementById("all_items").getElementsByTagName("ul");
	for (k = 0; k < id_of_ul_on_page.length; k++) { // iterates through unordered lists 
		for (i = 0; i < items_array.length; i++) { // iterates through items
			if (id_of_ul_on_page[k].id.indexOf(items_array[i].item_category) > -1) { //searches for item cetegory in ul ids
				// Add a new html li to its corresponding ul 
				document.getElementById(id_of_ul_on_page[k].id).innerHTML += `<li><figure>
					<picture>
						<img src="`+items_array[i].picture_href+`" alt="`+items_array[i].item_title+`">
					</picture>
					<figcaption><a href="`+items_array[i].href+`">`+items_array[i].item_title+`
						<p class="tags"> all `+items_array[i].tags+`</p>
					</a><figcaption>
				</figure></li>`;
			} else {
				document.getElementById(id_of_ul_on_page[k].id).previousElementSibling.style.display = "none";	//changes display value for the corresponding ul label
			}
		}
	}

}

/**************
sort_items_in_list function sorts items in each list alphabetically by item title.
Executes in main.js as a part of page set-up.
**************/
function sort_items_in_list() {
	var list, i, k, switching, ul, li, shouldSwitch;
	list = document.getElementById("all_items");
	switching = true;
	
	ul = list.getElementsByTagName("ul");
	// Loop through all unordered lists:
	for (i = 0; i < (ul.length); i++) {
		li = ul[i].getElementsByTagName("li");
		/* Make a loop that will continue until no switching has been done: */
		while (switching) {
			// start by saying: no switching is done:
			switching = false;
			
			// Loop through all li in each unordered list
			for (k = 0; k < (li.length - 1); k++) {
				// start by saying there should be no switching:
				shouldSwitch = false;
				/* check if the next item should switch place with the current item: */
				if (li[k].innerText.toLowerCase() > li[k + 1].innerText.toLowerCase() || li[k].textContent.toLowerCase() > li[k + 1].textContent.toLowerCase()) {
					/* if next item is alphabetically lower than current item, mark as a switch and break the loop: */
					shouldSwitch = true;
				break;
				}
			}
			if (shouldSwitch) {
				/* If a switch has been marked, make the switch and mark the switch as done: */
				li[k].parentNode.insertBefore(li[k + 1], li[k]);
				switching = true;
			}
		}
	}
}

/**************
search_items function searchs all items on page and hides all items that do not have the search term in its <a> tag contents. It does not account for misspellings or variations of keyword order.
Executes on key up in search bar.
**************/
function search_items() {
	// Declare variables
	var input, filter, div, li, a, i, txtValue, tag, ul_title_display;
	input = document.getElementById('search_input');
	filter = input.value.toUpperCase();
	div = document.getElementById("all_items");
	li = div.getElementsByTagName("li");
	ul_title_display = false; //start with hiding ul title
	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
			ul_title_display = true;
			li[i].parentNode.previousElementSibling.style.display = ""; //changes display value for the corresponding ul label
		} else {
			li[i].style.display = "none";
			if (!ul_title_display) { //only hide title if there are no items in ul
				li[i].parentNode.previousElementSibling.style.display = "none"; //changes display value for the corresponding ul label
			}
		}
	}
}

/**************
filter_selection function filters items that have the given keyword in its <a> tag when a filter button is selected.
filter_keyword parameter: takes a string argument, needs to be a word or phrase found in the contents of the <a> tag.
Executes when a filter button is clicked
**************/
function filter_selection(filter_keyword) {
	var input, div, li, i;
	input = document.getElementById('search_input');
	input.value = ""; //clears search bar
	div = document.getElementById("all_items");
	li = div.getElementsByTagName('li');
		
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.indexOf(filter_keyword) > -1) {
			li[i].style.display = "";
			li[i].parentNode.previousElementSibling.style.display = ""; //changes display value for the corresponding ul label
		} else {
			li[i].style.display = "none";
			li[i].parentNode.previousElementSibling.style.display = "none";	//changes display value for the corresponding ul label
		}
	}
}