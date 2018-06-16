Template.bsIconpicker.onRendered(function() {
    // set default data:
    let onChangeFn;
    let elementId = 'bs-iconpicker';
    let options = {}
    // get data from template data if present:
    if (this.data) {
        if (this.data.elementId) elementId = this.data.elementId;
        if (this.data.options) options = this.data.options;
        if (this.data.onChange) onChangeFn = this.data.onChange;
    }
    // create iconPicker instance on element and set onChange callback:
    $('#' + elementId).iconpicker(options).on('change', function (e) { if (onChangeFn) onChangeFn(e); });
});

Template.bsIconpicker.helpers({
    'elementId': function() {
        return this.elementId || 'bs-iconpicker';
    }
});