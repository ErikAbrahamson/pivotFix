(function(ns) {
    'use strict';

    ns.pivotFix = function(w) {

        var supportedChartTypes = ['pivot'];
        function widgetIsSupported(type) {
            if (supportedChartTypes.indexOf(type) >= 0) return true;
            else return false;
        }

        w.on('processresult', function(sender, event) {
            var myTable = $('<div>').append($(event.result.table));
            var cells = myTable[0].children[0].children[1].children;
            for (var i = 0; i < cells.length; i++) {
                for (var j = 0; j < cells[i].children.length; j++) {
                    var g = cells[i].children[j].innerHTML;
                    if (g === '') g = 'N/A';
            	}
            }
            event.result.table = myTable.html();
        });
    };
}(window));
