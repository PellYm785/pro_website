function Item(name, icon) {
    this.name = name;
    this.details = '';
}

Item.prototype.add = function(details){
    this.details += details;
};

Item.prototype.delete = function(item){
	this.details = null;
};

Item.prototype.isHTML = function(item){
	this.HTMLDetails = true;
};

Item.prototype.build = function(details){
	var item = document.createElement('div');
	var details = document.createElement('div');
	
	item.className = 'item';
	details.className = 'details';
	
	details.innerHTML = this.details;
	item.appendChild(details);
		
	return item;
};