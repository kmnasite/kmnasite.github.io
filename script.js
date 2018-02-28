function doSearch(text) {
    var sel;
    if (window.find && window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount > 0) {
            sel.collapseToEnd();
        }
        window.find(text);
    } else if (document.selection && document.body.createTextRange) {
        sel = document.selection;
        var textRange;
        if (sel.type == "Text") {
            textRange = sel.createRange();
            textRange.collapse(false);
        } else {
            textRange = document.body.createTextRange();
            textRange.collapse(true);
        }
        if (textRange.findText(text)) {
            textRange.select();
        }
    }
}

function searchpage() {
    doSearch( document.getElementById("t1").value );    
}

function runScript(e) {
    if (e.keyCode == 13) {
doSearch( document.getElementById("t1").value );
        return false;
    }
}
