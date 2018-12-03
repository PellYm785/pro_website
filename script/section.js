function Section (name){
    this.name = name;
    this.categories = null;
    this.type = 'Section';
}

Section.prototype.add = function(category){
    if(category.type === 'category') {
        if (this.categories) {
            this.categories.push(category);
        } else {
            this.categories = [category];
        }
    }else {
        throw 'It isn\'t category object';
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
            if(category.type === 'category') {
                var index = this.categories.indexOf(category);
                this.categories.splice(category,index);
            }else{
                throw 'It isn\'t category object';
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
                throw 'category doesn't exist';
            }
            break;
    }
};