function Category(name, icon) {
    this.name = name;
    this.icon = icon;
    this.items = null;
}

Category.prototype.add = function(item){
    if(item instanceof Item) {
        if (this.items) {
            this.items.push(item);
        } else {
            this.items = [item];
        }
    }else {
        throw 'It isn\'t Item object';
    }
};

Category.prototype.delete = function(item){
    if(!this.items){
        throw 'No items is set';
    }

    switch(typeof item){
        case 'number':
            this.items.splice(item,1);
            break;
        case 'object':
            if(item instanceof Item) {
                var index = this.items.indexOf(item);
                this.items.splice(item,index);
            }else{
                throw 'It isn\'t Item object';
            }
            break;
        case 'string':
            var i = 0;
            var found = false;

            while(i < this.items.length && !found){
                if(this.items[i] === item){
                    found = true;
                }
                i++;
            }
            if(found) {
                this.items.splice(item, i);
            }else {
                throw 'item doesn\'t exist';
            }
            break;
        default:
        	throw 'Pass a number, string or Item';
    }
};

Category.prototype.build = function(){
	if(!this.items){
        throw 'No items is set';
    }
	
	var category = document.createElement('div');
	category.className = "category";
	
	this.items.forEach(function(item){
		category.appendChild(item.build());
	});
	
	return category;
}

