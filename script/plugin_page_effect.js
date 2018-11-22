Switch.prototype.switcherLeftHTML = '<div class="switcher-right" style="position: absolute;"><svg height="30" width="30" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 30,15 0,30" fill="black" /></svg></div>';
Switch.prototype.switcherRightHTML = '<div class="switcher-left" style="position: absolute;"><svg height="30" width="30" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="30,0 0,15 30,30" fill="black" /></svg></div>';

function Switch(className){
    this.className = className;
    this.switcherRight = null;
    this.switcherLeft = null;
    this.activeElementIndex = 0;
    this.elements = null;
    this.built = false;
}

Switch.prototype.build = function () {
	if(!this.built){
	    var positionElement = null,
	        heightElement = 0,
	        widthElement = 0;
	
	    this.elements = $(this.className);
	    activeElement = this.elements.eq(this.activeElementIndex);
	    this.elements.hide();
	
	    activeElement.show();
	    positionElement = activeElement.offset();
	    heightElement = activeElement.height();
	    widthElement = activeElement.width();
	
	    activeElement.before(this.switcherLeftHTML);
	    activeElement.after(this.switcherRightHTML);
	
	    this.switcherLeft = activeElement.parent().find('.switcher-left');
	    this.switcherRight = activeElement.parent().find('.switcher-right');
	
	    this.switcherLeft.hide();
	    this.switcherLeft.css('top', positionElement.top+heightElement/2);
	    this.switcherLeft.css('left', positionElement.left-30-25);
	
	    this.switcherRight.css('top', positionElement.top+heightElement/2);
	    this.switcherRight.css('left', positionElement.left+widthElement+25);
	
	    var object = this;
	    
	    this.switcherLeft.click(function(){switch_left(object)});
	    this.switcherRight.click(function(){switch_right(object)});
	    
	    this.built = true;
	}
}

Switch.prototype.replace = function(){
	if(this.built){
	    var activeElement = null,
	    	positionElement = null,
        	heightElement = 0,
        	widthElement = 0;
	    
		activeElement = this.elements.eq(this.activeElementIndex);
		
	    positionElement = activeElement.offset();
	    heightElement = activeElement.height();
	    widthElement = activeElement.width();
		
	    this.switcherLeft.css('top', positionElement.top+heightElement/2);
	    this.switcherLeft.css('left', positionElement.left-30-25);
	
	    this.switcherRight.css('top', positionElement.top+heightElement/2);
	    this.switcherRight.css('left', positionElement.left+widthElement+25);
	}
}

Switch.prototype.destroy = function (){
	if(this.built){
		this.elements.show();
		this.switcherLeft.remove();
		this.switcherLeft = null;
		this.switcherRight.remove();
		this.switcherRight = null;
		this.built = false;
	}
}

function switch_left(switcher) {
    switcher.elements.eq(switcher.activeElementIndex).hide();
    switcher.activeElementIndex--;
    switcher.elements.eq(switcher.activeElementIndex).show();
    if(switcher.activeElementIndex == 0){
    	switcher.switcherLeft.hide();
    }else{
    	switcher.switcherLeft.show();
    	switcher.switcherRight.show();
    }
}

function switch_right(switcher) {
	switcher.elements.eq(switcher.activeElementIndex).hide();
	switcher.activeElementIndex++;
	switcher.elements.eq(switcher.activeElementIndex).show();
    if(switcher.activeElementIndex == switcher.elements.length-1){
    	switcher.switcherRight.hide();
    }else{
    	switcher.switcherLeft.show();
    	switcher.switcherRight.show();
    }
}