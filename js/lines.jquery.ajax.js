(function() {
    $.ajaxSetup({
        beforeSend: function(xhr) {
            Lines.start().run();
        },
        complete: function(xhr, status) {
            Lines.done();
        }
    });
})();
