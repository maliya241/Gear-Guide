const items_array = [];

function populate_items_list() {
	var id_of_ul_on_page = document.getElementById("all_items").getElementsByTagName("ul");
	for (i = 0; i < items_array.length; i++) { // iterates through items
		for (k = 0; k < id_of_ul_on_page.length; k++) { // iterates through ul 
			if (id_of_ul_on_page[k].id.indexOf(items_array[i].item_category) > -1) { //searches for item cetegory in ul ids
				// Add a new html li to its corresponding ul 
				document.getElementById(id_of_ul_on_page[k].id).innerHTML += '<li><picture><img src="'+items_array[i].picture_href+'" alt="'+items_array[i].item_title+'"></picture><a href="'+items_array[i].href+'">'+items_array[i].item_title+'<p class="tags">all '+items_array[i].tags+'</p></a></li>';
			}
		}
	}
}

function sort_items_in_list() {
	var list, i, k, switching, ul, li, shouldSwitch;
	list = document.getElementById("all_items");
	switching = true;
	
	ul = list.getElementsByTagName("ul");
	// Loop through all unordered lists:
	for (i = 0; i < (ul.length - 1); i++) {
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

function search_items() {
	// Declare variables
	var input, filter, div, li, a, i, txtValue, tag;
	input = document.getElementById('search_input');
	filter = input.value.toUpperCase();
	div = document.getElementById("all_items");
	li = div.getElementsByTagName("li");

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

function filter_selection(filter_a) {
	var input, div, li, i;
	input = document.getElementById('search_input');
	input.value = "";
	div = document.getElementById("all_items");
	li = div.getElementsByTagName('li');
	
	if (filter_a == "all") {
		c = "";
	}
		
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.indexOf(filter_a) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}