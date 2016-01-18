(function() {
    $.ajaxSetup({
        beforeSend: function(xhr) {
            Lines.start();
        },
        complete: function(xhr, status) {
            Lines.end();
        }
    });
})();
