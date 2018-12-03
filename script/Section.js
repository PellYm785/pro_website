function Section (name){
    this.name = name;
    this.type = 'Section';
    this.categories = null;
}

Section.prototype.add = function(category){
    if(category.type === 'Category') {
        if (this.categories) {
            this.categories.push(category);
        } else {
            this.categories = [category];
        }
    }else {
        throw 'It isn\'t Category object';
    }
};

Section.prototype.delete = function(category){
    if(!this.categories){
        throw 'No categories is set';
    }

    switch(typeof category){
        case 'number':
            this.categories.splice(category,1);
            break;
        case 'object':
            if(category.type === 'Category') {
                var index = this.categories.indexOf(category);
                this.categories.splice(category,index);
            }else{
                throw 'It isn\'t Category object';
            }
            break;
        case 'string':
            var i = 0;
            var found = false;

            while(i < this.categories.length && !found){
                if(this.categories[i] === category){
                    found = true;
                }
                i++;
            }
            if(found) {
                this.categories.splice(category, i);
            }else {
                throw 'category doesn\'t exist';
            }
            break;
    }
};