Template.dropdownBootstrap.helpers({
    classes: function() {
        var direction = 'button';
        if (this.direction == 'n') direction = 'top';
        else if (this.direction == 'e') direction = 'right';
        else if (this.direction == 's') direction = 'bottom';
        else if (this.direction == 'w') direction = 'left';
        return 'popover '+direction;
    }, arrowStyle: function() {
        if (this.align == 'left') return 'left: 10%;';
        else if (this.align == 'right') return 'left: 90%;';
    }
});