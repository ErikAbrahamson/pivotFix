(function(ns) {
    'use strict';

    ns.pivotFix = function(w) {
        var supportedChartTypes = ['pivot'];
        function widgetIsSupported(type) {
            if (supportedChartTypes.indexOf(type) >= 0) return true;
            else return false;
        }

        w.on('processresult', function(sender, event) {
            var myTable = $('<div>').append($(event.result.table)),
                cells = myTable[0].children[0].children[1].children;

            _.each(cells, function(c) {
                _.each(c.children, function(el) {
                    if (el.innerHTML === '' || null) el.innerHTML = 'N/A';
                });
            });
            event.result.table = myTable.html();
        });
    };
}(window));
