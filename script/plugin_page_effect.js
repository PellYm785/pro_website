Switch.prototype.switcherLeftHTML = '<div class="switcher-right" style="position: absolute;"><svg height="30" width="30" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 30,15 0,30" fill="black" /></svg></div>';
Switch.prototype.switcherRightHTML = '<div class="switcher-left" style="position: absolute;"><svg height="30" width="30" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="30,0 0,15 30,30" fill="black" /></svg></div>';

function Switch(className){
    this.className = className;
    this.switcherRight = null;
    this.switcherLeft = null;
    this.activeElementIndex = 0;
    this.elements = null
}

Switch.prototype.build = function () {
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

    this.switcherLeft.click(function () {
        console.log('ok');
        this.elements.eq(this.activeElementIndex).hide();
        this.activeElementIndex--;
        elements.eq(this.activeElementIndex).show();
        if(this.activeElementIndex == 0){
            this.switcherLeft.hide();
        }
    });

    this.switcherRight.click(function () {
        console.log(this);
        this.elements.eq(this.activeElementIndex).hide();
        this.activeElementIndex++;
        this.elements.eq(this.activeElementIndex).show();
        if(this.activeElementIndex == elements.length-1){
            this.switcherRight.hide();
        }
    });
};