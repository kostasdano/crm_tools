export function multiselectField(custom_id, select_options, label, edit) { 
    var custom_element = $("#"+custom_id);
    custom_element.hide();
    document.getElementById(custom_id+"_label").innerText = label;
    var multiSelect = $('<select multiple="multiple" id="my-select" class="selectpicker form-control" name="my-select[]">'+select_options+'</select>');
    if (edit) {
        multiSelect.val(custom_element.val().split(','));
    }
    multiSelect.insertAfter(custom_element);
    multiSelect.change(function() {
        if($(this).val()!=null) {
        custom_element.val($(this).val());
        } else {
        custom_element.val("");
        }
    })
}