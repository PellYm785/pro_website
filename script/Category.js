function Category(name, icon) {
    this.name = name;
    this.type = 'Category';
    this.icon = icon;
    this.items = null;
}

Category.prototype.add = function(item){
    if(item.type === 'Item') {
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
            if(item.type === 'Item') {
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
    }
};