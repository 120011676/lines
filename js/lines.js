var Lines = {};
(function() {

    Lines.config = {
        lines: "lines",
        line: "line",
        step: 0.1,
        run_step: 1,
        context: '<div id="line" class="line"><div class="circle"></div></div>',
    }

    var interval;
    var bfb = 0;

    Lines.start = function() {
        if (Lines.isLines()) {
            Lines.stop();
            Lines.set(1);
        } else {
            document.body.innerHTML = '<div id="' + Lines.config.lines + '" class="lines">' + Lines.config.context + '</div>' + document.body.innerHTML;
            Lines.set(1);
        }
        return Lines;
    };


    Lines.run = function(v, step) {
        if (Lines.isLines()) {
            if (v) {
                Lines.stop();
            }
            bfb = parseFloat(document.getElementById(Lines.config.line).style.width);
            interval = setInterval(function() {
                bfb += step ? step : v ? Lines.config.run_step : Lines.config.step;
                Lines.set(bfb);
                if (v && v <= bfb) {
                    Lines.stop();
                }
            }, 1);
        }
        return Lines;
    };

    Lines.stop = function() {
        clearInterval(interval);
        return Lines;
    };

    Lines.set = function(v) {
        if (Lines.isLines()) {
            document.getElementById(Lines.config.line).style.width = (v = v < 0 ? 0 : v > 100 ? 100 : v) + '%';
        }
        return Lines;
    };

    Lines.done = function(v) {
        if (Lines.isLines()) {
            Lines.stop();
            v = v ? v : 100;
            Lines.run(v);
            var s = setInterval(function() {
                var w = parseFloat(document.getElementById(Lines.config.line).style.width);
                if (v <= w) {
                    clearInterval(s);
                    setTimeout(function() {
                        Lines.end();
                    }, 150);
                }
            }, 1);
        }
        return Lines;
    };

    Lines.end = function() {
        if (Lines.isLines()) {
            Lines.stop();
            var e = document.getElementById(Lines.config.lines);
            e && e.parentNode && e.parentNode.removeChild(e);
        }
        return Lines;
    };

    Lines.isLines = function() {
        var e = document.getElementById(Lines.config.lines);
        return e ? true : false;
    }
})();
