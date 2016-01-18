var Lines = {};
(function() {

    Lines.config = {
        lines: "lines",
        line: "line",
        step: 0.1,
        context: '<div id="line" class="line"><div class="circle"></div></div>',
    }

    var interval;
    var bfb = 0;

    Lines.start = function() {
        if (Lines.isLines()) {
            Lines.set(0);
            bfb = 0;
        } else {
            document.body.innerHTML = '<div id="' + Lines.config.lines + '" class="lines">' + Lines.config.context + '</div>' + document.body.innerHTML;
            Lines.set(0);
            interval = setInterval(function() {
                Lines.set(bfb);
                bfb += Lines.config.step;
            }, 1);
        }
        return Lines;
    };

    Lines.set = function(v) {
        if (Lines.isLines()) {
            bfb = v;
            if (v < 0) {
                v = 0;
            }
            if (v > 100) {
                v = 100;

            }
            var l = document.getElementById(Lines.config.line);
            l.style.width = v + '%';
        }
        return Lines;
    };

    Lines.end = function() {
        if (Lines.isLines()) {
            clearInterval(interval);
            var w = document.getElementById(Lines.config.line).style.width;
            Lines.set(100);
            setTimeout(function() {
                var e = document.getElementById(Lines.config.lines);
                e && e.parentNode && e.parentNode.removeChild(e);
            }, (100 - parseFloat(w)) * 6);
        }
        return Lines;
    };

    Lines.isLines = function() {
        var e = document.getElementById(Lines.config.lines);
        return e ? true : false;
    }
})();
