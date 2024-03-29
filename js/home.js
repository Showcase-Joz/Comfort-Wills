$(window).load(function() { $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
    new WOW({ mobile: false, live: true }).init(); });
function initMap() {
    var styledMapType = new google.maps.StyledMapType([{ elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] }, { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] }, { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] }, { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#c9b2a6' }] }, { featureType: 'administrative.land_parcel', elementType: 'geometry.stroke', stylers: [{ color: '#dcd2be' }] }, { featureType: 'administrative.land_parcel', elementType: 'labels.text.fill', stylers: [{ color: '#ae9e90' }] }, { featureType: 'landscape.natural', elementType: 'geometry', stylers: [{ color: '#dfd2ae' }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#CA9EC2' }] }, { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#93817c' }] }, { featureType: 'poi.park', elementType: 'geometry.fill', stylers: [{ color: '#a5b076' }] }, { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#447530' }] }, { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#f5f1e6' }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fdfcf8' }] }, { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#CA8C1F' }] }, { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#e9bc62' }] }, { featureType: 'road.highway.controlled_access', elementType: 'geometry', stylers: [{ color: '#e98d58' }] }, { featureType: 'road.highway.controlled_access', elementType: 'geometry.stroke', stylers: [{ color: '#B37DA9' }] }, { featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{ color: '#806b63' }] }, { featureType: 'transit.line', elementType: 'geometry', stylers: [{ color: '#CA9EC2' }] }, { featureType: 'transit.line', elementType: 'labels.text.fill', stylers: [{ color: '#8f7d77' }] }, { featureType: 'transit.line', elementType: 'labels.text.stroke', stylers: [{ color: '#ebe3cd' }] }, { featureType: 'transit.station', elementType: 'geometry', stylers: [{ color: '#CA9EC2' }] }, { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#b9d3c2' }] }, { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#92998d' }] }], { name: 'Comfort Map' });
    var uluru = { lat: 53.408502, lng: -2.1687369999999648 };
    var map = new google.maps.Map(document.getElementById('map'), { center: uluru, zoom: 10, mapTypeControlOptions: { mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map'] } });
    var contentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h1 id="firstHeading" class="firstHeading">Estate Planning</h1>' + '<div id="bodyContent">' + '<p><b>Comfort Estate Planning</b>, works with you ensuring your <b>will</b> ' + 'and <b>estate</b> are in good order. Our specialists are able to help you ' + 'alter or confirm your estate arrangements. </p>' + '<h5>Get your estate planned by Comfort today!</h5>' + '<a href="#home" class="btn btn-purple">Get started right now</a></p>' + '</div>' + '</div>';
    var infowindow = new google.maps.InfoWindow({ content: contentString });
    var image = './img/touch/website-marker-google-maps-marker.png';
    var marker = new google.maps.Marker({ position: uluru, map: map, title: 'We are here!', icon: image, optimized: false });
    marker.addListener('click', function() { infowindow.open(map, marker); });
    var myoverlay = new google.maps.OverlayView();
    myoverlay.draw = function() { this.getPanes().markerLayer.id = 'markerLayer'; };
    myoverlay.setMap(map);
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map'); }
! function(t, i, e, s) {
    function o(i, e) {
        var h = this; "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this, e)), this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
        var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
        if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), ("top" == r[0] || "bottom" == r[0] || "left" == r[1] || "right" == r[1]) && (r = [r[1], r[0]]), this.positionX != s && (r[0] = this.positionX.toLowerCase()), this.positionY != s && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this;
        if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this;
        this.$mirror = t("<div />").prependTo("body");
        var a = this.$element.find(">.parallax-slider"),
            n = !1;
        0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), n = !0), this.$mirror.addClass("parallax-mirror").css({ visibility: "hidden", zIndex: this.zIndex, position: "fixed", top: 0, left: 0, overflow: "hidden" }), this.$slider.addClass("parallax-slider").one("load", function() { h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender() }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load") }

    function h(s) {
        return this.each(function() {
            var h = t(this),
                r = "object" == typeof s && s;
            this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") ? "object" == typeof s && t.extend(h.data("px.parallax"), r) : (r = t.extend({}, h.data(), r), h.data("px.parallax", new o(this, r))), "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]()) }) }! function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s) i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"];
        i.requestAnimationFrame || (i.requestAnimationFrame = function(e) {
            var s = (new Date).getTime(),
                o = Math.max(0, 16 - (s - t)),
                h = i.setTimeout(function() { e(s + o) }, o);
            return t = s + o, h }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function(t) { clearTimeout(t) }) }(), t.extend(o.prototype, { speed: .2, bleed: 0, zIndex: -100, iosFix: !0, androidFix: !0, position: "center", overScrollFix: !1, refresh: function() { this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var t = o.winHeight,
                i = o.docHeight,
                e = Math.min(this.boxOffsetTop, i - t),
                s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
                h = this.boxHeight + (e - s) * (1 - this.speed) | 0,
                r = (this.boxOffsetTop - e) * (1 - this.speed) | 0;
            if (h * this.aspectRatio >= this.boxWidth) { this.imageWidth = h * this.aspectRatio | 0, this.imageHeight = h, this.offsetBaseTop = r;
                var a = this.imageWidth - this.boxWidth;
                this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -a : isNaN(this.positionX) ? -a / 2 | 0 : Math.max(this.positionX, -a) } else { this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
                var a = this.imageHeight - h;
                this.offsetBaseTop = "top" == this.positionY ? r : "bottom" == this.positionY ? r - a : isNaN(this.positionY) ? r - a / 2 | 0 : r + Math.max(this.positionY, -a) } }, render: function() {
            var t = o.scrollTop,
                i = o.scrollLeft,
                e = this.overScrollFix ? o.overScroll : 0,
                s = t + o.winHeight;
            this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({ transform: "translate3d(0px, 0px, 0px)", visibility: this.visibility, top: this.mirrorTop - e, left: this.mirrorLeft, height: this.boxHeight, width: this.boxWidth }), this.$slider.css({ transform: "translate3d(0px, 0px, 0px)", position: "absolute", top: this.offsetTop, left: this.offsetLeft, height: this.imageHeight, width: this.imageWidth, maxWidth: "none" }) } }), t.extend(o, { scrollTop: 0, scrollLeft: 0, winHeight: 0, winWidth: 0, docHeight: 1 << 30, docWidth: 1 << 30, sliders: [], isReady: !1, isFresh: !1, isBusy: !1, setup: function() {
            if (!this.isReady) {
                var s = t(e),
                    h = t(i),
                    r = function() { o.winHeight = h.height(), o.winWidth = h.width(), o.docHeight = s.height(), o.docWidth = s.width() },
                    a = function() {
                        var t = h.scrollTop(),
                            i = o.docHeight - o.winHeight,
                            e = o.docWidth - o.winWidth;
                        o.scrollTop = Math.max(0, Math.min(i, t)), o.scrollLeft = Math.max(0, Math.min(e, h.scrollLeft())), o.overScroll = Math.max(t - i, Math.min(t, 0)) };
                h.on("resize.px.parallax load.px.parallax", function() { r(), o.isFresh = !1, o.requestRender() }).on("scroll.px.parallax load.px.parallax", function() { a(), o.requestRender() }), r(), a(), this.isReady = !0 } }, configure: function(i) { "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this.prototype, i)) }, refresh: function() { t.each(this.sliders, function() { this.refresh() }), this.isFresh = !0 }, render: function() { this.isFresh || this.refresh(), t.each(this.sliders, function() { this.render() }) }, requestRender: function() {
            var t = this;
            this.isBusy || (this.isBusy = !0, i.requestAnimationFrame(function() { t.render(), t.isBusy = !1 })) }, destroy: function(e) {
            var s, h = t(e).data("px.parallax");
            for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1) this.sliders[s] == h && this.sliders.splice(s, 1);
            t(e).data("px.parallax", !1), 0 === this.sliders.length && (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1) } });
    var r = t.fn.parallax;
    t.fn.parallax = h, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function() {
        return t.fn.parallax = r, this }, t(e).on("ready.px.parallax.data-api", function() { t('[data-parallax="scroll"]').parallax() })
}(jQuery, window, document);
(function($) { "use strict";
    $('body').scrollspy({ target: '.navbar-fixed-top', offset: 60 });
    $('#topNav').affix({ offset: { top: 250 } });
    $('a[href^="#"]').on('click', function(e) {
        var url = document.URL.split("#");
        var ancher = url[1];
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({ 'scrollTop': $target.offset().top - 50 }, 900, 'swing', function() { window.location.hash = target; }); });
    $('.navbar-collapse ul li a').click(function() { $('.navbar-toggle:visible').click(); });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { $('.scrollBtn').fadeIn(); } else { $('.scrollBtn').fadeOut(); } });
    $('.scrollBtn').click(function() { $("html, body").animate({ scrollTop: 0 }, 1000);
        return false; });
    var currentYear = new Date().getFullYear();
    $(".year").text(currentYear); })(jQuery);


if ("undefined" == typeof jQuery) throw new Error("BootstrapValidator requires jQuery");
! function(t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (+e[0] < 2 && +e[1] < 9 || 1 == +e[0] && 9 == +e[1] && +e[2] < 1) throw new Error("BootstrapValidator requires jQuery version 1.9.1 or higher") }(window.jQuery),
function(t) {
    var e = function(e, a) { this.$form = t(e), this.options = t.extend({}, t.fn.bootstrapValidator.DEFAULT_OPTIONS, a), this.$invalidFields = t([]), this.$submitButton = null, this.$hiddenButton = null, this.STATUS_NOT_VALIDATED = "NOT_VALIDATED", this.STATUS_VALIDATING = "VALIDATING", this.STATUS_INVALID = "INVALID", this.STATUS_VALID = "VALID";
        var r = function() {
                for (var t = 3, e = document.createElement("div"), a = e.all || []; e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><br><![endif]--\x3e", a[0];);
                return t > 4 ? t : !t }(),
            s = document.createElement("div");
        this._changeEvent = 9 !== r && "oninput" in s ? "input" : "keyup", this._submitIfValid = null, this._cacheFields = {}, this._init() };
    e.prototype = {
        constructor: e,
        _init: function() {
            var e = this,
                a = { autoFocus: this.$form.attr("data-bv-autofocus"), container: this.$form.attr("data-bv-container"), events: { formInit: this.$form.attr("data-bv-events-form-init"), formError: this.$form.attr("data-bv-events-form-error"), formSuccess: this.$form.attr("data-bv-events-form-success"), fieldAdded: this.$form.attr("data-bv-events-field-added"), fieldRemoved: this.$form.attr("data-bv-events-field-removed"), fieldInit: this.$form.attr("data-bv-events-field-init"), fieldError: this.$form.attr("data-bv-events-field-error"), fieldSuccess: this.$form.attr("data-bv-events-field-success"), fieldStatus: this.$form.attr("data-bv-events-field-status"), validatorError: this.$form.attr("data-bv-events-validator-error"), validatorSuccess: this.$form.attr("data-bv-events-validator-success") }, excluded: this.$form.attr("data-bv-excluded"), feedbackIcons: { valid: this.$form.attr("data-bv-feedbackicons-valid"), invalid: this.$form.attr("data-bv-feedbackicons-invalid"), validating: this.$form.attr("data-bv-feedbackicons-validating") }, group: this.$form.attr("data-bv-group"), live: this.$form.attr("data-bv-live"), message: this.$form.attr("data-bv-message"), onError: this.$form.attr("data-bv-onerror"), onSuccess: this.$form.attr("data-bv-onsuccess"), submitButtons: this.$form.attr("data-bv-submitbuttons"), threshold: this.$form.attr("data-bv-threshold"), trigger: this.$form.attr("data-bv-trigger"), verbose: this.$form.attr("data-bv-verbose"), fields: {} };
            this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit.bv", function(t) { t.preventDefault(), e.validate() }).on("click.bv", this.options.submitButtons, function() { e.$submitButton = t(this), e._submitIfValid = !0 }).find("[name], [data-bv-field]").each(function() {
                var r = t(this),
                    s = r.attr("name") || r.attr("data-bv-field"),
                    i = e._parseOptions(r);
                i && (r.attr("data-bv-field", s), a.fields[s] = t.extend({}, i, a.fields[s])) }), this.options = t.extend(!0, this.options, a), this.$hiddenButton = t("<button/>").attr("type", "submit").prependTo(this.$form).addClass("bv-hidden-submit").css({ display: "none", width: 0, height: 0 }), this.$form.on("click.bv", '[type="submit"]', function(a) {
                if (!a.isDefaultPrevented()) {
                    var r = t(a.target),
                        s = r.is('[type="submit"]') ? r.eq(0) : r.parent('[type="submit"]').eq(0);!e.options.submitButtons || s.is(e.options.submitButtons) || s.is(e.$hiddenButton) || e.$form.off("submit.bv").submit() } });
            for (var r in this.options.fields) this._initField(r);
            this.$form.trigger(t.Event(this.options.events.formInit), { bv: this, options: this.options }), this.options.onSuccess && this.$form.on(this.options.events.formSuccess, function(a) { t.fn.bootstrapValidator.helpers.call(e.options.onSuccess, [a]) }), this.options.onError && this.$form.on(this.options.events.formError, function(a) { t.fn.bootstrapValidator.helpers.call(e.options.onError, [a]) }) },
        _parseOptions: function(e) {
            var a, r, s, i, n, o, l, d, u, f = e.attr("name") || e.attr("data-bv-field"),
                p = {};
            for (r in t.fn.bootstrapValidator.validators)
                if (a = t.fn.bootstrapValidator.validators[r], s = "data-bv-" + r.toLowerCase(), i = e.attr(s) + "", (u = "function" == typeof a.enableByHtml5 ? a.enableByHtml5(e) : null) && "false" !== i || !0 !== u && ("" === i || "true" === i || s === i.toLowerCase())) { a.html5Attributes = t.extend({}, { message: "message", onerror: "onError", onsuccess: "onSuccess" }, a.html5Attributes), p[r] = t.extend({}, !0 === u ? {} : u, p[r]);
                    for (d in a.html5Attributes) n = a.html5Attributes[d], o = "data-bv-" + r.toLowerCase() + "-" + d, (l = e.attr(o)) && ("true" === l || o === l.toLowerCase() ? l = !0 : "false" === l && (l = !1), p[r][n] = l) }
            var c = { autoFocus: e.attr("data-bv-autofocus"), container: e.attr("data-bv-container"), excluded: e.attr("data-bv-excluded"), feedbackIcons: e.attr("data-bv-feedbackicons"), group: e.attr("data-bv-group"), message: e.attr("data-bv-message"), onError: e.attr("data-bv-onerror"), onStatus: e.attr("data-bv-onstatus"), onSuccess: e.attr("data-bv-onsuccess"), selector: e.attr("data-bv-selector"), threshold: e.attr("data-bv-threshold"), trigger: e.attr("data-bv-trigger"), verbose: e.attr("data-bv-verbose"), validators: p },
                h = t.isEmptyObject(c);
            return !t.isEmptyObject(p) || !h && this.options.fields && this.options.fields[f] ? (c.validators = p, c) : null
        },
        _initField: function(e) {
            var a = t([]);
            switch (typeof e) {
                case "object":
                    a = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    (a = this.getFieldElements(e)).attr("data-bv-field", e) }
            if (0 !== a.length && null !== this.options.fields[e] && null !== this.options.fields[e].validators) {
                var r;
                for (r in this.options.fields[e].validators) t.fn.bootstrapValidator.validators[r] || delete this.options.fields[e].validators[r];
                null === this.options.fields[e].enabled && (this.options.fields[e].enabled = !0);
                for (var s = this, i = a.length, n = a.attr("type"), o = 1 === i || "radio" === n || "checkbox" === n, l = "radio" === n || "checkbox" === n || "file" === n || "SELECT" === a.eq(0).get(0).tagName ? "change" : this._changeEvent, d = (this.options.fields[e].trigger || this.options.trigger || l).split(" "), u = t.map(d, function(t) {
                        return t + ".update.bv" }).join(" "), f = 0; i > f; f++) {
                    var p = a.eq(f),
                        c = this.options.fields[e].group || this.options.group,
                        h = p.parents(c),
                        v = "function" == typeof(this.options.fields[e].container || this.options.container) ? (this.options.fields[e].container || this.options.container).call(this, p, this) : this.options.fields[e].container || this.options.container,
                        b = v && "tooltip" !== v && "popover" !== v ? t(v) : this._getMessageContainer(p, c);
                    v && "tooltip" !== v && "popover" !== v && b.addClass("has-error"), b.find('.help-block[data-bv-validator][data-bv-for="' + e + '"]').remove(), h.find('i[data-bv-icon-for="' + e + '"]').remove(), p.off(u).on(u, function() { s.updateStatus(t(this), s.STATUS_NOT_VALIDATED) }), p.data("bv.messages", b);
                    for (r in this.options.fields[e].validators) p.data("bv.result." + r, this.STATUS_NOT_VALIDATED), o && f !== i - 1 || t("<small/>").css("display", "none").addClass("help-block").attr("data-bv-validator", r).attr("data-bv-for", e).attr("data-bv-result", this.STATUS_NOT_VALIDATED).html(this._getMessage(e, r)).appendTo(b), "function" == typeof t.fn.bootstrapValidator.validators[r].init && t.fn.bootstrapValidator.validators[r].init(this, p, this.options.fields[e].validators[r]);
                    if (!1 !== this.options.fields[e].feedbackIcons && "false" !== this.options.fields[e].feedbackIcons && this.options.feedbackIcons && this.options.feedbackIcons.validating && this.options.feedbackIcons.invalid && this.options.feedbackIcons.valid && (!o || f === i - 1)) {
                        h.addClass("has-feedback");
                        var m = t("<i/>").css("display", "none").addClass("form-control-feedback").attr("data-bv-icon-for", e).insertAfter(p);
                        if ("checkbox" === n || "radio" === n) {
                            var g = p.parent();
                            g.hasClass(n) ? m.insertAfter(g) : g.parent().hasClass(n) && m.insertAfter(g.parent()) }
                        0 === h.find("label").length && m.addClass("bv-no-label"), 0 !== h.find(".input-group").length && m.addClass("bv-icon-input-group").insertAfter(h.find(".input-group").eq(0)), o ? f === i - 1 && a.data("bv.icon", m) : p.data("bv.icon", m), v && p.off("focus.container.bv").on("focus.container.bv", function() {
                            switch (v) {
                                case "tooltip":
                                    t(this).data("bv.icon").tooltip("show");
                                    break;
                                case "popover":
                                    t(this).data("bv.icon").popover("show") } }).off("blur.container.bv").on("blur.container.bv", function() {
                            switch (v) {
                                case "tooltip":
                                    t(this).data("bv.icon").tooltip("hide");
                                    break;
                                case "popover":
                                    t(this).data("bv.icon").popover("hide") } })
                    }
                }
                switch (a.on(this.options.events.fieldSuccess, function(e, a) {
                    var r = s.getOptions(a.field, null, "onSuccess");
                    r && t.fn.bootstrapValidator.helpers.call(r, [e, a]) }).on(this.options.events.fieldError, function(e, a) {
                    var r = s.getOptions(a.field, null, "onError");
                    r && t.fn.bootstrapValidator.helpers.call(r, [e, a]) }).on(this.options.events.fieldStatus, function(e, a) {
                    var r = s.getOptions(a.field, null, "onStatus");
                    r && t.fn.bootstrapValidator.helpers.call(r, [e, a]) }).on(this.options.events.validatorError, function(e, a) {
                    var r = s.getOptions(a.field, a.validator, "onError");
                    r && t.fn.bootstrapValidator.helpers.call(r, [e, a]) }).on(this.options.events.validatorSuccess, function(e, a) {
                    var r = s.getOptions(a.field, a.validator, "onSuccess");
                    r && t.fn.bootstrapValidator.helpers.call(r, [e, a]) }), u = t.map(d, function(t) {
                    return t + ".live.bv" }).join(" "), this.options.live) {
                    case "submitted":
                        break;
                    case "disabled":
                        a.off(u);
                        break;
                    case "enabled":
                    default:
                        a.off(u).on(u, function() { s._exceedThreshold(t(this)) && s.validateField(t(this)) }) }
                a.trigger(t.Event(this.options.events.fieldInit), { bv: this, field: e, element: a })
            }
        },
        _getMessage: function(e, a) {
            if (!(this.options.fields[e] && t.fn.bootstrapValidator.validators[a] && this.options.fields[e].validators && this.options.fields[e].validators[a])) return "";
            var r = this.options.fields[e].validators[a];
            switch (!0) {
                case !!r.message:
                    return r.message;
                case !!this.options.fields[e].message:
                    return this.options.fields[e].message;
                case !!t.fn.bootstrapValidator.i18n[a]:
                    return t.fn.bootstrapValidator.i18n[a].default;
                default:
                    return this.options.message } },
        _getMessageContainer: function(t, e) {
            var a = t.parent();
            if (a.is(e)) return a;
            var r = a.attr("class");
            if (!r) return this._getMessageContainer(a, e);
            for (var s = (r = r.split(" ")).length, i = 0; s > i; i++)
                if (/^col-(xs|sm|md|lg)-\d+$/.test(r[i]) || /^col-(xs|sm|md|lg)-offset-\d+$/.test(r[i])) return a;
            return this._getMessageContainer(a, e)
        },
        _submit: function() {
            var e = this.isValid(),
                a = e ? this.options.events.formSuccess : this.options.events.formError,
                r = t.Event(a);
            this.$form.trigger(r), this.$submitButton && (e ? this._onSuccess(r) : this._onError(r)) },
        _isExcluded: function(e) {
            var a = e.attr("data-bv-excluded"),
                r = e.attr("data-bv-field") || e.attr("name");
            switch (!0) {
                case !!r && this.options.fields && this.options.fields[r] && ("true" === this.options.fields[r].excluded || !0 === this.options.fields[r].excluded):
                case "true" === a:
                case "" === a:
                    return !0;
                case !!r && this.options.fields && this.options.fields[r] && ("false" === this.options.fields[r].excluded || !1 === this.options.fields[r].excluded):
                case "false" === a:
                    return !1;
                default:
                    if (this.options.excluded) {
                        "string" == typeof this.options.excluded && (this.options.excluded = t.map(this.options.excluded.split(","), function(e) {
                            return t.trim(e) }));
                        for (var s = this.options.excluded.length, i = 0; s > i; i++)
                            if ("string" == typeof this.options.excluded[i] && e.is(this.options.excluded[i]) || "function" == typeof this.options.excluded[i] && !0 === this.options.excluded[i].call(this, e, this)) return !0
                    }
                    return !1
            }
        },
        _exceedThreshold: function(e) {
            var a = e.attr("data-bv-field"),
                r = this.options.fields[a].threshold || this.options.threshold;
            return !r || (-1 !== t.inArray(e.attr("type"), ["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"]) || e.val().length >= r) },
        _onError: function(e) {
            if (!e.isDefaultPrevented()) {
                if ("submitted" === this.options.live) { this.options.live = "enabled";
                    var a = this;
                    for (var r in this.options.fields) ! function(e) {
                        var s = a.getFieldElements(e);
                        if (s.length) {
                            var i = t(s[0]).attr("type"),
                                n = "radio" === i || "checkbox" === i || "file" === i || "SELECT" === t(s[0]).get(0).tagName ? "change" : a._changeEvent,
                                o = a.options.fields[r].trigger || a.options.trigger || n,
                                l = t.map(o.split(" "), function(t) {
                                    return t + ".live.bv" }).join(" ");
                            s.off(l).on(l, function() { a._exceedThreshold(t(this)) && a.validateField(t(this)) }) } }(r) }
                for (var s = 0; s < this.$invalidFields.length; s++) {
                    var i = this.$invalidFields.eq(s);
                    if (this._isOptionEnabled(i.attr("data-bv-field"), "autoFocus")) {
                        var n, o = i.parents(".tab-pane");
                        o && (n = o.attr("id")) && t('a[href="#' + n + '"][data-toggle="tab"]').tab("show"), i.focus();
                        break } }
            }
        },
        _onSuccess: function(t) { t.isDefaultPrevented() || this.disableSubmitButtons(!0).defaultSubmit() },
        _onFieldValidated: function(e, a) {
            var r = e.attr("data-bv-field"),
                s = this.options.fields[r].validators,
                i = {},
                n = 0,
                o = { bv: this, field: r, element: e, validator: a, result: e.data("bv.response." + a) };
            if (a) switch (e.data("bv.result." + a)) {
                case this.STATUS_INVALID:
                    e.trigger(t.Event(this.options.events.validatorError), o);
                    break;
                case this.STATUS_VALID:
                    e.trigger(t.Event(this.options.events.validatorSuccess), o) }
            i[this.STATUS_NOT_VALIDATED] = 0, i[this.STATUS_VALIDATING] = 0, i[this.STATUS_INVALID] = 0, i[this.STATUS_VALID] = 0;
            for (var l in s)
                if (!1 !== s[l].enabled) { n++;
                    var d = e.data("bv.result." + l);
                    d && i[d]++ }
            i[this.STATUS_VALID] === n ? (this.$invalidFields = this.$invalidFields.not(e), e.trigger(t.Event(this.options.events.fieldSuccess), o)) : (0 === i[this.STATUS_NOT_VALIDATED] || !this._isOptionEnabled(r, "verbose")) && 0 === i[this.STATUS_VALIDATING] && i[this.STATUS_INVALID] > 0 && (this.$invalidFields = this.$invalidFields.add(e), e.trigger(t.Event(this.options.events.fieldError), o))
        },
        _isOptionEnabled: function(t, e) {
            return !(!this.options.fields[t] || "true" !== this.options.fields[t][e] && !0 !== this.options.fields[t][e]) || (!this.options.fields[t] || "false" !== this.options.fields[t][e] && !1 !== this.options.fields[t][e]) && ("true" === this.options[e] || !0 === this.options[e]) },
        getFieldElements: function(e) {
            return this._cacheFields[e] || (this._cacheFields[e] = this.options.fields[e] && this.options.fields[e].selector ? t(this.options.fields[e].selector) : this.$form.find('[name="' + e + '"]')), this._cacheFields[e] },
        getOptions: function(t, e, a) {
            if (!t) return a ? this.options[a] : this.options;
            if ("object" == typeof t && (t = t.attr("data-bv-field")), !this.options.fields[t]) return null;
            var r = this.options.fields[t];
            return e ? r.validators && r.validators[e] ? a ? r.validators[e][a] : r.validators[e] : null : a ? r[a] : r },
        disableSubmitButtons: function(t) {
            return t ? "disabled" !== this.options.live && this.$form.find(this.options.submitButtons).attr("disabled", "disabled") : this.$form.find(this.options.submitButtons).removeAttr("disabled"), this },
        validate: function() {
            if (!this.options.fields) return this;
            this.disableSubmitButtons(!0), this._submitIfValid = !1;
            for (var t in this.options.fields) this.validateField(t);
            return this._submit(), this._submitIfValid = !0, this },
        validateField: function(e) {
            var a = t([]);
            switch (typeof e) {
                case "object":
                    a = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    a = this.getFieldElements(e) }
            if (0 === a.length || !this.options.fields[e] || !1 === this.options.fields[e].enabled) return this;
            for (var r, s, i = this, n = a.attr("type"), o = "radio" === n || "checkbox" === n ? 1 : a.length, l = "radio" === n || "checkbox" === n, d = this.options.fields[e].validators, u = this._isOptionEnabled(e, "verbose"), f = 0; o > f; f++) {
                var p = a.eq(f);
                if (!this._isExcluded(p)) {
                    var c = !1;
                    for (r in d) {
                        if (p.data("bv.dfs." + r) && p.data("bv.dfs." + r).reject(), c) break;
                        var h = p.data("bv.result." + r);
                        if (h !== this.STATUS_VALID && h !== this.STATUS_INVALID)
                            if (!1 !== d[r].enabled) {
                                if (p.data("bv.result." + r, this.STATUS_VALIDATING), "object" == typeof(s = t.fn.bootstrapValidator.validators[r].validate(this, p, d[r])) && s.resolve) this.updateStatus(l ? e : p, this.STATUS_VALIDATING, r), p.data("bv.dfs." + r, s), s.done(function(t, e, a) { t.removeData("bv.dfs." + e).data("bv.response." + e, a), a.message && i.updateMessage(t, e, a.message), i.updateStatus(l ? t.attr("data-bv-field") : t, a.valid ? i.STATUS_VALID : i.STATUS_INVALID, e), a.valid && !0 === i._submitIfValid ? i._submit() : a.valid || u || (c = !0) });
                                else if ("object" == typeof s && void 0 !== s.valid && void 0 !== s.message) {
                                    if (p.data("bv.response." + r, s), this.updateMessage(l ? e : p, r, s.message), this.updateStatus(l ? e : p, s.valid ? this.STATUS_VALID : this.STATUS_INVALID, r), !s.valid && !u) break } else if ("boolean" == typeof s && (p.data("bv.response." + r, s), this.updateStatus(l ? e : p, s ? this.STATUS_VALID : this.STATUS_INVALID, r), !s && !u)) break } else this.updateStatus(l ? e : p, this.STATUS_VALID, r);
                        else this._onFieldValidated(p, r)
                    }
                }
            }
            return this
        },
        updateMessage: function(e, a, r) {
            var s = t([]);
            switch (typeof e) {
                case "object":
                    s = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    s = this.getFieldElements(e) }
            s.each(function() { t(this).data("bv.messages").find('.help-block[data-bv-validator="' + a + '"][data-bv-for="' + e + '"]').html(r) })
        },
        updateStatus: function(e, a, r) {
            var s = t([]);
            switch (typeof e) {
                case "object":
                    s = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    s = this.getFieldElements(e) }
            a === this.STATUS_NOT_VALIDATED && (this._submitIfValid = !1);
            for (var i = this, n = s.attr("type"), o = this.options.fields[e].group || this.options.group, l = "radio" === n || "checkbox" === n ? 1 : s.length, d = 0; l > d; d++) {
                var u = s.eq(d);
                if (!this._isExcluded(u)) {
                    var f = u.parents(o),
                        p = u.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + e + '"]'),
                        c = r ? p.filter('[data-bv-validator="' + r + '"]') : p,
                        h = u.data("bv.icon"),
                        v = "function" == typeof(this.options.fields[e].container || this.options.container) ? (this.options.fields[e].container || this.options.container).call(this, u, this) : this.options.fields[e].container || this.options.container,
                        b = null;
                    if (r) u.data("bv.result." + r, a);
                    else
                        for (var m in this.options.fields[e].validators) u.data("bv.result." + m, a);
                    c.attr("data-bv-result", a);
                    var g, A, I = u.parents(".tab-pane");
                    switch (I && (g = I.attr("id")) && (A = t('a[href="#' + g + '"][data-toggle="tab"]').parent()), a) {
                        case this.STATUS_VALIDATING:
                            b = null, this.disableSubmitButtons(!0), f.removeClass("has-success").removeClass("has-error"), h && h.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show(), A && A.removeClass("bv-tab-success").removeClass("bv-tab-error");
                            break;
                        case this.STATUS_INVALID:
                            b = !1, this.disableSubmitButtons(!0), f.removeClass("has-success").addClass("has-error"), h && h.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show(), A && A.removeClass("bv-tab-success").addClass("bv-tab-error");
                            break;
                        case this.STATUS_VALID:
                            null !== (b = 0 === p.filter('[data-bv-result="' + this.STATUS_NOT_VALIDATED + '"]').length ? p.filter('[data-bv-result="' + this.STATUS_VALID + '"]').length === p.length : null) && (this.disableSubmitButtons(this.$submitButton ? !this.isValid() : !b), h && h.removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid).addClass(b ? this.options.feedbackIcons.valid : this.options.feedbackIcons.invalid).show()), f.removeClass("has-error has-success").addClass(this.isValidContainer(f) ? "has-success" : "has-error"), A && A.removeClass("bv-tab-success").removeClass("bv-tab-error").addClass(this.isValidContainer(I) ? "bv-tab-success" : "bv-tab-error");
                            break;
                        case this.STATUS_NOT_VALIDATED:
                        default:
                            b = null, this.disableSubmitButtons(!1), f.removeClass("has-success").removeClass("has-error"), h && h.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide(), A && A.removeClass("bv-tab-success").removeClass("bv-tab-error") }
                    switch (!0) {
                        case h && "tooltip" === v:
                            !1 === b ? h.css("cursor", "pointer").tooltip("destroy").tooltip({ container: "body", html: !0, placement: "auto top", title: p.filter('[data-bv-result="' + i.STATUS_INVALID + '"]').eq(0).html() }) : h.css("cursor", "").tooltip("destroy");
                            break;
                        case h && "popover" === v:
                            !1 === b ? h.css("cursor", "pointer").popover("destroy").popover({ container: "body", content: p.filter('[data-bv-result="' + i.STATUS_INVALID + '"]').eq(0).html(), html: !0, placement: "auto top", trigger: "hover click" }) : h.css("cursor", "").popover("destroy");
                            break;
                        default:
                            a === this.STATUS_INVALID ? c.show() : c.hide() }
                    u.trigger(t.Event(this.options.events.fieldStatus), { bv: this, field: e, element: u, status: a }), this._onFieldValidated(u, r)
                }
            }
            return this
        },
        isValid: function() {
            for (var t in this.options.fields)
                if (!this.isValidField(t)) return !1;
            return !0
        },
        isValidField: function(e) {
            var a = t([]);
            switch (typeof e) {
                case "object":
                    a = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    a = this.getFieldElements(e) }
            if (0 === a.length || !this.options.fields[e] || !1 === this.options.fields[e].enabled) return !0;
            for (var r, s, i = a.attr("type"), n = "radio" === i || "checkbox" === i ? 1 : a.length, o = 0; n > o; o++)
                if (r = a.eq(o), !this._isExcluded(r))
                    for (s in this.options.fields[e].validators)
                        if (!1 !== this.options.fields[e].validators[s].enabled && r.data("bv.result." + s) !== this.STATUS_VALID) return !1;
            return !0
        },
        isValidContainer: function(e) {
            var a = this,
                r = {},
                s = "string" == typeof e ? t(e) : e;
            if (0 === s.length) return !0;
            s.find("[data-bv-field]").each(function() {
                var e = t(this),
                    s = e.attr("data-bv-field");
                a._isExcluded(e) || r[s] || (r[s] = e) });
            for (var i in r)
                if (r[i].data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + i + '"]').filter('[data-bv-result="' + this.STATUS_INVALID + '"]').length > 0) return !1;
            return !0
        },
        defaultSubmit: function() { this.$submitButton && t("<input/>").attr("type", "hidden").attr("data-bv-submit-hidden", "").attr("name", this.$submitButton.attr("name")).val(this.$submitButton.val()).appendTo(this.$form), this.$form.off("submit.bv").submit() },
        getInvalidFields: function() {
            return this.$invalidFields },
        getSubmitButton: function() {
            return this.$submitButton },
        getMessages: function(e, a) {
            var r = this,
                s = [],
                i = t([]);
            switch (!0) {
                case e && "object" == typeof e:
                    i = e;
                    break;
                case e && "string" == typeof e:
                    var n = this.getFieldElements(e);
                    if (n.length > 0) {
                        var o = n.attr("type");
                        i = "radio" === o || "checkbox" === o ? n.eq(0) : n }
                    break;
                default:
                    i = this.$invalidFields
            }
            var l = a ? '[data-bv-validator="' + a + '"]' : "";
            return i.each(function() { s = s.concat(t(this).data("bv.messages").find('.help-block[data-bv-for="' + t(this).attr("data-bv-field") + '"][data-bv-result="' + r.STATUS_INVALID + '"]' + l).map(function() {
                    var e = t(this).attr("data-bv-validator"),
                        a = t(this).attr("data-bv-for");
                    return !1 === r.options.fields[a].validators[e].enabled ? "" : t(this).html() }).get()) }), s
        },
        updateOption: function(t, e, a, r) {
            return "object" == typeof t && (t = t.attr("data-bv-field")), this.options.fields[t] && this.options.fields[t].validators[e] && (this.options.fields[t].validators[e][a] = r, this.updateStatus(t, this.STATUS_NOT_VALIDATED, e)), this },
        addField: function(e, a) {
            var r = t([]);
            switch (typeof e) {
                case "object":
                    r = e, e = e.attr("data-bv-field") || e.attr("name");
                    break;
                case "string":
                    delete this._cacheFields[e], r = this.getFieldElements(e) }
            r.attr("data-bv-field", e);
            for (var s = r.attr("type"), i = "radio" === s || "checkbox" === s ? 1 : r.length, n = 0; i > n; n++) {
                var o = r.eq(n),
                    l = this._parseOptions(o);
                l = null === l ? a : t.extend(!0, a, l), this.options.fields[e] = t.extend(!0, this.options.fields[e], l), this._cacheFields[e] = this._cacheFields[e] ? this._cacheFields[e].add(o) : o, this._initField("checkbox" === s || "radio" === s ? e : o) }
            return this.disableSubmitButtons(!1), this.$form.trigger(t.Event(this.options.events.fieldAdded), { field: e, element: r, options: this.options.fields[e] }), this
        },
        removeField: function(e) {
            var a = t([]);
            switch (typeof e) {
                case "object":
                    a = e, e = e.attr("data-bv-field") || e.attr("name"), a.attr("data-bv-field", e);
                    break;
                case "string":
                    a = this.getFieldElements(e) }
            if (0 === a.length) return this;
            for (var r = a.attr("type"), s = "radio" === r || "checkbox" === r ? 1 : a.length, i = 0; s > i; i++) {
                var n = a.eq(i);
                this.$invalidFields = this.$invalidFields.not(n), this._cacheFields[e] = this._cacheFields[e].not(n) }
            return this._cacheFields[e] && 0 !== this._cacheFields[e].length || delete this.options.fields[e], ("checkbox" === r || "radio" === r) && this._initField(e), this.disableSubmitButtons(!1), this.$form.trigger(t.Event(this.options.events.fieldRemoved), { field: e, element: a }), this
        },
        resetField: function(e, a) {
            var r = t([]);
            switch (typeof e) {
                case "object":
                    r = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    r = this.getFieldElements(e) }
            var s = r.length;
            if (this.options.fields[e])
                for (var i = 0; s > i; i++)
                    for (var n in this.options.fields[e].validators) r.eq(i).removeData("bv.dfs." + n);
            if (this.updateStatus(e, this.STATUS_NOT_VALIDATED), a) {
                var o = r.attr("type"); "radio" === o || "checkbox" === o ? r.removeAttr("checked").removeAttr("selected") : r.val("") }
            return this
        },
        resetForm: function(e) {
            for (var a in this.options.fields) this.resetField(a, e);
            return this.$invalidFields = t([]), this.$submitButton = null, this.disableSubmitButtons(!1), this },
        revalidateField: function(t) {
            return this.updateStatus(t, this.STATUS_NOT_VALIDATED).validateField(t), this },
        enableFieldValidators: function(t, e, a) {
            var r = this.options.fields[t].validators;
            if (a && r && r[a] && r[a].enabled !== e) this.options.fields[t].validators[a].enabled = e, this.updateStatus(t, this.STATUS_NOT_VALIDATED, a);
            else if (!a && this.options.fields[t].enabled !== e) { this.options.fields[t].enabled = e;
                for (var s in r) this.enableFieldValidators(t, e, s) }
            return this
        },
        getDynamicOption: function(e, a) {
            var r = "string" == typeof e ? this.getFieldElements(e) : e,
                s = r.val();
            if ("function" == typeof a) return t.fn.bootstrapValidator.helpers.call(a, [s, this, r]);
            if ("string" == typeof a) {
                var i = this.getFieldElements(a);
                return i.length ? i.val() : t.fn.bootstrapValidator.helpers.call(a, [s, this, r]) || a }
            return null
        },
        destroy: function() {
            var e, a, r, s, i, n;
            for (e in this.options.fields) {
                a = this.getFieldElements(e), n = this.options.fields[e].group || this.options.group;
                for (var o = 0; o < a.length; o++) {
                    if ((r = a.eq(o)).data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + e + '"]').remove().end().end().removeData("bv.messages").parents(n).removeClass("has-feedback has-error has-success").end().off(".bv").removeAttr("data-bv-field"), i = r.data("bv.icon")) switch ("function" == typeof(this.options.fields[e].container || this.options.container) ? (this.options.fields[e].container || this.options.container).call(this, r, this) : this.options.fields[e].container || this.options.container) {
                        case "tooltip":
                            i.tooltip("destroy").remove();
                            break;
                        case "popover":
                            i.popover("destroy").remove();
                            break;
                        default:
                            i.remove() }
                    r.removeData("bv.icon");
                    for (s in this.options.fields[e].validators) r.data("bv.dfs." + s) && r.data("bv.dfs." + s).reject(), r.removeData("bv.result." + s).removeData("bv.response." + s).removeData("bv.dfs." + s), "function" == typeof t.fn.bootstrapValidator.validators[s].destroy && t.fn.bootstrapValidator.validators[s].destroy(this, r, this.options.fields[e].validators[s])
                }
            }
            this.disableSubmitButtons(!1), this.$hiddenButton.remove(), this.$form.removeClass(this.options.elementClass).off(".bv").removeData("bootstrapValidator").find("[data-bv-submit-hidden]").remove().end().find('[type="submit"]').off("click.bv")
        }
    }, t.fn.bootstrapValidator = function(a) {
        var r = arguments;
        return this.each(function() {
            var s = t(this),
                i = s.data("bootstrapValidator"),
                n = "object" == typeof a && a;
            i || (i = new e(this, n), s.data("bootstrapValidator", i)), "string" == typeof a && i[a].apply(i, Array.prototype.slice.call(r, 1)) }) }, t.fn.bootstrapValidator.DEFAULT_OPTIONS = { autoFocus: !0, container: null, elementClass: "bv-form", events: { formInit: "init.form.bv", formError: "error.form.bv", formSuccess: "success.form.bv", fieldAdded: "added.field.bv", fieldRemoved: "removed.field.bv", fieldInit: "init.field.bv", fieldError: "error.field.bv", fieldSuccess: "success.field.bv", fieldStatus: "status.field.bv", validatorError: "error.validator.bv", validatorSuccess: "success.validator.bv" }, excluded: [":disabled", ":hidden", ":not(:visible)"], feedbackIcons: { valid: null, invalid: null, validating: null }, fields: null, group: ".form-group", live: "enabled", message: "This value is not valid", submitButtons: '[type="submit"]', threshold: null, verbose: !0 }, t.fn.bootstrapValidator.validators = {}, t.fn.bootstrapValidator.i18n = {}, t.fn.bootstrapValidator.Constructor = e, t.fn.bootstrapValidator.helpers = {
        call: function(t, e) {
            if ("function" == typeof t) return t.apply(this, e);
            if ("string" == typeof t) { "()" === t.substring(t.length - 2) && (t = t.substring(0, t.length - 2));
                for (var a = t.split("."), r = a.pop(), s = window, i = 0; i < a.length; i++) s = s[a[i]];
                return void 0 === s[r] ? null : s[r].apply(this, e) } },
        format: function(e, a) { t.isArray(a) || (a = [a]);
            for (var r in a) e = e.replace("%s", a[r]);
            return e },
        date: function(t, e, a, r) {
            if (isNaN(t) || isNaN(e) || isNaN(a)) return !1;
            if (a.length > 2 || e.length > 2 || t.length > 4) return !1;
            if (a = parseInt(a, 10), e = parseInt(e, 10), 1e3 > (t = parseInt(t, 10)) || t > 9999 || 0 >= e || e > 12) return !1;
            var s = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if ((t % 400 == 0 || t % 100 != 0 && t % 4 == 0) && (s[1] = 29), 0 >= a || a > s[e - 1]) return !1;
            if (!0 === r) {
                var i = new Date,
                    n = i.getFullYear(),
                    o = i.getMonth(),
                    l = i.getDate();
                return n > t || t === n && o > e - 1 || t === n && e - 1 === o && l > a }
            return !0
        },
        luhn: function(t) {
            for (var e = t.length, a = 0, r = [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                ], s = 0; e--;) s += r[a][parseInt(t.charAt(e), 10)], a ^= 1;
            return s % 10 == 0 && s > 0 },
        mod11And10: function(t) {
            for (var e = 5, a = t.length, r = 0; a > r; r++) e = (2 * (e || 10) % 11 + parseInt(t.charAt(r), 10)) % 10;
            return 1 === e },
        mod37And36: function(t, e) {
            for (var a = (e = e || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ").length, r = t.length, s = Math.floor(a / 2), i = 0; r > i; i++) s = (2 * (s || a) % (a + 1) + e.indexOf(t.charAt(i))) % a;
            return 1 === s }
    }
}(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.base64 = t.extend(t.fn.bootstrapValidator.i18n.base64 || {}, { default: "Please enter a valid base 64 encoded" }), t.fn.bootstrapValidator.validators.base64 = { validate: function(t, e) {
            var a = e.val();
            return "" === a || /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(a) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.between = t.extend(t.fn.bootstrapValidator.i18n.between || {}, { default: "Please enter a value between %s and %s", notInclusive: "Please enter a value between %s and %s strictly" }), t.fn.bootstrapValidator.validators.between = { html5Attributes: { message: "message", min: "min", max: "max", inclusive: "inclusive" }, enableByHtml5: function(t) {
            return "range" === t.attr("type") && { min: t.attr("min"), max: t.attr("max") } }, validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            if (s = this._format(s), !t.isNumeric(s)) return !1;
            var i = t.isNumeric(r.min) ? r.min : e.getDynamicOption(a, r.min),
                n = t.isNumeric(r.max) ? r.max : e.getDynamicOption(a, r.max),
                o = this._format(i),
                l = this._format(n);
            return s = parseFloat(s), !0 === r.inclusive || void 0 === r.inclusive ? { valid: s >= o && l >= s, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.between.default, [i, n]) } : { valid: s > o && l > s, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.between.notInclusive, [i, n]) } }, _format: function(t) {
            return (t + "").replace(",", ".") } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.validators.blank = { validate: function() {
            return !0 } } }(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.callback = t.extend(t.fn.bootstrapValidator.i18n.callback || {}, { default: "Please enter a valid value" }), t.fn.bootstrapValidator.validators.callback = {
        html5Attributes: { message: "message", callback: "callback" },
        validate: function(e, a, r) {
            var s = a.val(),
                i = new t.Deferred,
                n = { valid: !0 };
            if (r.callback) {
                var o = t.fn.bootstrapValidator.helpers.call(r.callback, [s, e, a]);
                n = "boolean" == typeof o ? { valid: o } : o }
            return i.resolve(a, "callback", n), i
        }
    }
}(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.choice = t.extend(t.fn.bootstrapValidator.i18n.choice || {}, { default: "Please enter a valid value", less: "Please choose %s options at minimum", more: "Please choose %s options at maximum", between: "Please choose %s - %s options" }), t.fn.bootstrapValidator.validators.choice = {
        html5Attributes: { message: "message", min: "min", max: "max" },
        validate: function(e, a, r) {
            var s = a.is("select") ? e.getFieldElements(a.attr("data-bv-field")).find("option").filter(":selected").length : e.getFieldElements(a.attr("data-bv-field")).filter(":checked").length,
                i = r.min ? t.isNumeric(r.min) ? r.min : e.getDynamicOption(a, r.min) : null,
                n = r.max ? t.isNumeric(r.max) ? r.max : e.getDynamicOption(a, r.max) : null,
                o = !0,
                l = r.message || t.fn.bootstrapValidator.i18n.choice.default;
            switch ((i && s < parseInt(i, 10) || n && s > parseInt(n, 10)) && (o = !1), !0) {
                case !!i && !!n:
                    l = t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.choice.between, [parseInt(i, 10), parseInt(n, 10)]);
                    break;
                case !!i:
                    l = t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.choice.less, parseInt(i, 10));
                    break;
                case !!n:
                    l = t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.choice.more, parseInt(n, 10)) }
            return { valid: o, message: l }
        }
    }
}(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.color = t.extend(t.fn.bootstrapValidator.i18n.color || {}, { default: "Please enter a valid color" }), t.fn.bootstrapValidator.validators.color = {
        SUPPORTED_TYPES: ["hex", "rgb", "rgba", "hsl", "hsla", "keyword"],
        KEYWORD_COLORS: ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
        validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            var i = r.type || this.SUPPORTED_TYPES;
            t.isArray(i) || (i = i.replace(/s/g, "").split(","));
            for (var n, o, l = !1, d = 0; d < i.length; d++)
                if (o = i[d], n = "_" + o.toLowerCase(), l = l || this[n](s)) return !0;
            return !1
        },
        _hex: function(t) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t) },
        _hsl: function(t) {
            return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(t) },
        _hsla: function(t) {
            return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t) },
        _keyword: function(e) {
            return t.inArray(e, this.KEYWORD_COLORS) >= 0 },
        _rgb: function(t) {
            var e = /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/;
            return /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(t) || e.test(t) },
        _rgba: function(t) {
            var e = /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/;
            return /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t) || e.test(t) }
    }
}(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.creditCard = t.extend(t.fn.bootstrapValidator.i18n.creditCard || {}, { default: "Please enter a valid credit card number" }), t.fn.bootstrapValidator.validators.creditCard = {
        validate: function(e, a) {
            var r = a.val();
            if ("" === r) return !0;
            if (/[^0-9-\s]+/.test(r)) return !1;
            if (r = r.replace(/\D/g, ""), !t.fn.bootstrapValidator.helpers.luhn(r)) return !1;
            var s, i, n = { AMERICAN_EXPRESS: { length: [15], prefix: ["34", "37"] }, DINERS_CLUB: { length: [14], prefix: ["300", "301", "302", "303", "304", "305", "36"] }, DINERS_CLUB_US: { length: [16], prefix: ["54", "55"] }, DISCOVER: { length: [16], prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"] }, JCB: { length: [16], prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"] }, LASER: { length: [16, 17, 18, 19], prefix: ["6304", "6706", "6771", "6709"] }, MAESTRO: { length: [12, 13, 14, 15, 16, 17, 18, 19], prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"] }, MASTERCARD: { length: [16], prefix: ["51", "52", "53", "54", "55"] }, SOLO: { length: [16, 18, 19], prefix: ["6334", "6767"] }, UNIONPAY: { length: [16, 17, 18, 19], prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"] }, VISA: { length: [16], prefix: ["4"] } };
            for (s in n)
                for (i in n[s].prefix)
                    if (r.substr(0, n[s].prefix[i].length) === n[s].prefix[i] && -1 !== t.inArray(r.length, n[s].length)) return !0;
            return !1
        }
    }
}(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.cusip = t.extend(t.fn.bootstrapValidator.i18n.cusip || {}, { default: "Please enter a valid CUSIP number" }), t.fn.bootstrapValidator.validators.cusip = {
        validate: function(e, a) {
            var r = a.val();
            if ("" === r) return !0;
            if (r = r.toUpperCase(), !/^[0-9A-Z]{9}$/.test(r)) return !1;
            for (var s = t.map(r.split(""), function(t) {
                    var e = t.charCodeAt(0);
                    return e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0) ? e - "A".charCodeAt(0) + 10 : t }), i = s.length, n = 0, o = 0; i - 1 > o; o++) {
                var l = parseInt(s[o], 10);
                o % 2 != 0 && (l *= 2), l > 9 && (l -= 9), n += l }
            return (n = (10 - n % 10) % 10) === s[i - 1]
        }
    }
}(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.cvv = t.extend(t.fn.bootstrapValidator.i18n.cvv || {}, { default: "Please enter a valid CVV number" }), t.fn.bootstrapValidator.validators.cvv = {
        html5Attributes: { message: "message", ccfield: "creditCardField" },
        validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            if (!/^[0-9]{3,4}$/.test(s)) return !1;
            if (!r.creditCardField) return !0;
            var i = e.getFieldElements(r.creditCardField).val();
            if ("" === i) return !0;
            i = i.replace(/\D/g, "");
            var n, o, l = { AMERICAN_EXPRESS: { length: [15], prefix: ["34", "37"] }, DINERS_CLUB: { length: [14], prefix: ["300", "301", "302", "303", "304", "305", "36"] }, DINERS_CLUB_US: { length: [16], prefix: ["54", "55"] }, DISCOVER: { length: [16], prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"] }, JCB: { length: [16], prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"] }, LASER: { length: [16, 17, 18, 19], prefix: ["6304", "6706", "6771", "6709"] }, MAESTRO: { length: [12, 13, 14, 15, 16, 17, 18, 19], prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"] }, MASTERCARD: { length: [16], prefix: ["51", "52", "53", "54", "55"] }, SOLO: { length: [16, 18, 19], prefix: ["6334", "6767"] }, UNIONPAY: { length: [16, 17, 18, 19], prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"] }, VISA: { length: [16], prefix: ["4"] } },
                d = null;
            for (n in l)
                for (o in l[n].prefix)
                    if (i.substr(0, l[n].prefix[o].length) === l[n].prefix[o] && -1 !== t.inArray(i.length, l[n].length)) { d = n;
                        break }
            return null !== d && ("AMERICAN_EXPRESS" === d ? 4 === s.length : 3 === s.length)
        }
    }
}(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.date = t.extend(t.fn.bootstrapValidator.i18n.date || {}, { default: "Please enter a valid date", min: "Please enter a date after %s", max: "Please enter a date before %s", range: "Please enter a date in the range %s - %s" }), t.fn.bootstrapValidator.validators.date = {
        html5Attributes: { message: "message", format: "format", min: "min", max: "max", separator: "separator" },
        validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            r.format = r.format || "MM/DD/YYYY", "date" === a.attr("type") && (r.format = "YYYY-MM-DD");
            var i = r.format.split(" "),
                n = i[0],
                o = i.length > 1 ? i[1] : null,
                l = i.length > 2 ? i[2] : null,
                d = s.split(" "),
                u = d[0],
                f = d.length > 1 ? d[1] : null;
            if (i.length !== d.length) return { valid: !1, message: r.message || t.fn.bootstrapValidator.i18n.date.default };
            var p = r.separator;
            if (p || (p = -1 !== u.indexOf("/") ? "/" : -1 !== u.indexOf("-") ? "-" : null), null === p || -1 === u.indexOf(p)) return { valid: !1, message: r.message || t.fn.bootstrapValidator.i18n.date.default };
            if (u = u.split(p), n = n.split(p), u.length !== n.length) return { valid: !1, message: r.message || t.fn.bootstrapValidator.i18n.date.default };
            var c = u[t.inArray("YYYY", n)],
                h = u[t.inArray("MM", n)],
                v = u[t.inArray("DD", n)];
            if (!c || !h || !v || 4 !== c.length) return { valid: !1, message: r.message || t.fn.bootstrapValidator.i18n.date.default };
            var b = null,
                m = null,
                g = null;
            if (o) {
                if (o = o.split(":"), f = f.split(":"), o.length !== f.length) return { valid: !1, message: r.message || t.fn.bootstrapValidator.i18n.date.default };
                if (m = f.length > 0 ? f[0] : null, b = f.length > 1 ? f[1] : null, g = f.length > 2 ? f[2] : null) {
                    if (isNaN(g) || g.length > 2) return { valid: !1, message: r.message || t.fn.bootstrapValidator.i18n.date.default };
                    if (0 > (g = parseInt(g, 10)) || g > 60) return { valid: !1, message: r.message || t.fn.bootstrapValidator.i18n.date.default } }
                if (m) {
                    if (isNaN(m) || m.length > 2) return { valid: !1, message: r.message || t.fn.bootstrapValidator.i18n.date.default };
                    if (0 > (m = parseInt(m, 10)) || m >= 24 || l && m > 12) return { valid: !1, message: r.message || t.fn.bootstrapValidator.i18n.date.default } }
                if (b) {
                    if (isNaN(b) || b.length > 2) return { valid: !1, message: r.message || t.fn.bootstrapValidator.i18n.date.default };
                    if (0 > (b = parseInt(b, 10)) || b > 59) return { valid: !1, message: r.message || t.fn.bootstrapValidator.i18n.date.default } }
            }
            var A = t.fn.bootstrapValidator.helpers.date(c, h, v),
                I = r.message || t.fn.bootstrapValidator.i18n.date.default,
                V = null,
                S = null,
                y = r.min,
                T = r.max;
            switch (y && (isNaN(Date.parse(y)) && (y = e.getDynamicOption(a, y)), V = this._parseDate(y, n, p)), T && (isNaN(Date.parse(T)) && (T = e.getDynamicOption(a, T)), S = this._parseDate(T, n, p)), u = new Date(c, h, v, m, b, g), !0) {
                case y && !T && A:
                    A = u.getTime() >= V.getTime(), I = r.message || t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.date.min, y);
                    break;
                case T && !y && A:
                    A = u.getTime() <= S.getTime(), I = r.message || t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.date.max, T);
                    break;
                case T && y && A:
                    A = u.getTime() <= S.getTime() && u.getTime() >= V.getTime(), I = r.message || t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.date.range, [y, T]) }
            return { valid: A, message: I }
        },
        _parseDate: function(e, a, r) {
            var s = 0,
                i = 0,
                n = 0,
                o = e.split(" "),
                l = o[0],
                d = o.length > 1 ? o[1] : null,
                u = (l = l.split(r))[t.inArray("YYYY", a)],
                f = l[t.inArray("MM", a)],
                p = l[t.inArray("DD", a)];
            return d && (d = d.split(":"), i = d.length > 0 ? d[0] : null, s = d.length > 1 ? d[1] : null, n = d.length > 2 ? d[2] : null), new Date(u, f, p, i, s, n) }
    }
}(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.different = t.extend(t.fn.bootstrapValidator.i18n.different || {}, { default: "Please enter a different value" }), t.fn.bootstrapValidator.validators.different = {
        html5Attributes: { message: "message", field: "field" },
        validate: function(t, e, a) {
            var r = e.val();
            if ("" === r) return !0;
            for (var s = a.field.split(","), i = !0, n = 0; n < s.length; n++) {
                var o = t.getFieldElements(s[n]);
                if (null != o && 0 !== o.length) {
                    var l = o.val();
                    r === l ? i = !1 : "" !== l && t.updateStatus(o, t.STATUS_VALID, "different") } }
            return i
        }
    }
}(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.digits = t.extend(t.fn.bootstrapValidator.i18n.digits || {}, { default: "Please enter only digits" }), t.fn.bootstrapValidator.validators.digits = { validate: function(t, e) {
            var a = e.val();
            return "" === a || /^\d+$/.test(a) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.ean = t.extend(t.fn.bootstrapValidator.i18n.ean || {}, { default: "Please enter a valid EAN number" }), t.fn.bootstrapValidator.validators.ean = { validate: function(t, e) {
            var a = e.val();
            if ("" === a) return !0;
            if (!/^(\d{8}|\d{12}|\d{13})$/.test(a)) return !1;
            for (var r = a.length, s = 0, i = 8 === r ? [3, 1] : [1, 3], n = 0; r - 1 > n; n++) s += parseInt(a.charAt(n), 10) * i[n % 2];
            return (s = (10 - s % 10) % 10) + "" === a.charAt(r - 1) } } }(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.emailAddress = t.extend(t.fn.bootstrapValidator.i18n.emailAddress || {}, { default: "Please enter a valid email address" }), t.fn.bootstrapValidator.validators.emailAddress = {
        html5Attributes: { message: "message", multiple: "multiple", separator: "separator" },
        enableByHtml5: function(t) {
            return "email" === t.attr("type") },
        validate: function(t, e, a) {
            var r = e.val();
            if ("" === r) return !0;
            var s = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if (!0 === a.multiple || "true" === a.multiple) {
                for (var i = a.separator || /[,;]/, n = this._splitEmailAddresses(r, i), o = 0; o < n.length; o++)
                    if (!s.test(n[o])) return !1;
                return !0
            }
            return s.test(r)
        },
        _splitEmailAddresses: function(t, e) {
            for (var a = t.split(/"/), r = a.length, s = [], i = "", n = 0; r > n; n++)
                if (n % 2 == 0) {
                    var o = a[n].split(e),
                        l = o.length;
                    if (1 === l) i += o[0];
                    else { s.push(i + o[0]);
                        for (var d = 1; l - 1 > d; d++) s.push(o[d]);
                        i = o[l - 1] } } else i += '"' + a[n], r - 1 > n && (i += '"');
            return s.push(i), s
        }
    }
}(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.file = t.extend(t.fn.bootstrapValidator.i18n.file || {}, { default: "Please choose a valid file" }), t.fn.bootstrapValidator.validators.file = {
        html5Attributes: { extension: "extension", maxfiles: "maxFiles", minfiles: "minFiles", maxsize: "maxSize", minsize: "minSize", maxtotalsize: "maxTotalSize", mintotalsize: "minTotalSize", message: "message", type: "type" },
        validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            var i, n = r.extension ? r.extension.toLowerCase().split(",") : null,
                o = r.type ? r.type.toLowerCase().split(",") : null;
            if (window.File && window.FileList && window.FileReader) {
                var l = a.get(0).files,
                    d = l.length,
                    u = 0;
                if (r.maxFiles && d > parseInt(r.maxFiles, 10) || r.minFiles && d < parseInt(r.minFiles, 10)) return !1;
                for (var f = 0; d > f; f++)
                    if (u += l[f].size, i = l[f].name.substr(l[f].name.lastIndexOf(".") + 1), r.minSize && l[f].size < parseInt(r.minSize, 10) || r.maxSize && l[f].size > parseInt(r.maxSize, 10) || n && -1 === t.inArray(i.toLowerCase(), n) || l[f].type && o && -1 === t.inArray(l[f].type.toLowerCase(), o)) return !1;
                if (r.maxTotalSize && u > parseInt(r.maxTotalSize, 10) || r.minTotalSize && u < parseInt(r.minTotalSize, 10)) return !1
            } else if (i = s.substr(s.lastIndexOf(".") + 1), n && -1 === t.inArray(i.toLowerCase(), n)) return !1;
            return !0
        }
    }
}(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.greaterThan = t.extend(t.fn.bootstrapValidator.i18n.greaterThan || {}, { default: "Please enter a value greater than or equal to %s", notInclusive: "Please enter a value greater than %s" }), t.fn.bootstrapValidator.validators.greaterThan = { html5Attributes: { message: "message", value: "value", inclusive: "inclusive" }, enableByHtml5: function(t) {
            var e = t.attr("type"),
                a = t.attr("min");
            return !(!a || "date" === e) && { value: a } }, validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            if (s = this._format(s), !t.isNumeric(s)) return !1;
            var i = t.isNumeric(r.value) ? r.value : e.getDynamicOption(a, r.value),
                n = this._format(i);
            return s = parseFloat(s), !0 === r.inclusive || void 0 === r.inclusive ? { valid: s >= n, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.greaterThan.default, i) } : { valid: s > n, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.greaterThan.notInclusive, i) } }, _format: function(t) {
            return (t + "").replace(",", ".") } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.grid = t.extend(t.fn.bootstrapValidator.i18n.grid || {}, { default: "Please enter a valid GRId number" }), t.fn.bootstrapValidator.validators.grid = { validate: function(e, a) {
            var r = a.val();
            return "" === r || (r = r.toUpperCase(), !!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(r) && ("GRID:" === (r = r.replace(/\s/g, "").replace(/-/g, "")).substr(0, 5) && (r = r.substr(5)), t.fn.bootstrapValidator.helpers.mod37And36(r))) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.hex = t.extend(t.fn.bootstrapValidator.i18n.hex || {}, { default: "Please enter a valid hexadecimal number" }), t.fn.bootstrapValidator.validators.hex = { validate: function(t, e) {
            var a = e.val();
            return "" === a || /^[0-9a-fA-F]+$/.test(a) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.hexColor = t.extend(t.fn.bootstrapValidator.i18n.hexColor || {}, { default: "Please enter a valid hex color" }), t.fn.bootstrapValidator.validators.hexColor = { enableByHtml5: function(t) {
            return "color" === t.attr("type") }, validate: function(t, e) {
            var a = e.val();
            return "" === a || ("color" === e.attr("type") ? /^#[0-9A-F]{6}$/i.test(a) : /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.iban = t.extend(t.fn.bootstrapValidator.i18n.iban || {}, { default: "Please enter a valid IBAN number", countryNotSupported: "The country code %s is not supported", country: "Please enter a valid IBAN number in %s", countries: { AD: "Andorra", AE: "United Arab Emirates", AL: "Albania", AO: "Angola", AT: "Austria", AZ: "Azerbaijan", BA: "Bosnia and Herzegovina", BE: "Belgium", BF: "Burkina Faso", BG: "Bulgaria", BH: "Bahrain", BI: "Burundi", BJ: "Benin", BR: "Brazil", CH: "Switzerland", CI: "Ivory Coast", CM: "Cameroon", CR: "Costa Rica", CV: "Cape Verde", CY: "Cyprus", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", DO: "Dominican Republic", DZ: "Algeria", EE: "Estonia", ES: "Spain", FI: "Finland", FO: "Faroe Islands", FR: "France", GB: "United Kingdom", GE: "Georgia", GI: "Gibraltar", GL: "Greenland", GR: "Greece", GT: "Guatemala", HR: "Croatia", HU: "Hungary", IE: "Ireland", IL: "Israel", IR: "Iran", IS: "Iceland", IT: "Italy", JO: "Jordan", KW: "Kuwait", KZ: "Kazakhstan", LB: "Lebanon", LI: "Liechtenstein", LT: "Lithuania", LU: "Luxembourg", LV: "Latvia", MC: "Monaco", MD: "Moldova", ME: "Montenegro", MG: "Madagascar", MK: "Macedonia", ML: "Mali", MR: "Mauritania", MT: "Malta", MU: "Mauritius", MZ: "Mozambique", NL: "Netherlands", NO: "Norway", PK: "Pakistan", PL: "Poland", PS: "Palestine", PT: "Portugal", QA: "Qatar", RO: "Romania", RS: "Serbia", SA: "Saudi Arabia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", SM: "San Marino", SN: "Senegal", TN: "Tunisia", TR: "Turkey", VG: "Virgin Islands, British" } }), t.fn.bootstrapValidator.validators.iban = { html5Attributes: { message: "message", country: "country" }, REGEX: { AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}", AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}", AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}", AO: "AO[0-9]{2}[0-9]{21}", AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}", AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}", BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}", BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}", BF: "BF[0-9]{2}[0-9]{23}", BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}", BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}", BI: "BI[0-9]{2}[0-9]{12}", BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}", BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]", CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}", CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}", CM: "CM[0-9]{2}[0-9]{23}", CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}", CV: "CV[0-9]{2}[0-9]{21}", CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}", CZ: "CZ[0-9]{2}[0-9]{20}", DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}", DK: "DK[0-9]{2}[0-9]{14}", DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}", DZ: "DZ[0-9]{2}[0-9]{20}", EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}", ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}", FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}", FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}", FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}", GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}", GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}", GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}", GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}", GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}", GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}", HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}", HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}", IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}", IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}", IR: "IR[0-9]{2}[0-9]{22}", IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}", IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}", JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}", KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}", KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}", LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}", LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}", LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}", LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}", LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}", MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}", MD: "MD[0-9]{2}[A-Z0-9]{20}", ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}", MG: "MG[0-9]{2}[0-9]{23}", MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}", ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}", MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}", MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}", MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}", MZ: "MZ[0-9]{2}[0-9]{21}", NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}", NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}", PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}", PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}", PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}", PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}", QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}", RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}", RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}", SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}", SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}", SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}", SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}", SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}", SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}", TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}", TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}", VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}" }, validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            s = s.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
            var i = r.country;
            if (i ? "string" == typeof i && this.REGEX[i] || (i = e.getDynamicOption(a, i)) : i = s.substr(0, 2), !this.REGEX[i]) return { valid: !1, message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.iban.countryNotSupported, i) };
            if (!new RegExp("^" + this.REGEX[i] + "$").test(s)) return { valid: !1, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.iban.country, t.fn.bootstrapValidator.i18n.iban.countries[i]) };
            s = s.substr(4) + s.substr(0, 4), s = (s = t.map(s.split(""), function(t) {
                var e = t.charCodeAt(0);
                return e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0) ? e - "A".charCodeAt(0) + 10 : t })).join("");
            for (var n = parseInt(s.substr(0, 1), 10), o = s.length, l = 1; o > l; ++l) n = (10 * n + parseInt(s.substr(l, 1), 10)) % 97;
            return { valid: 1 === n, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.iban.country, t.fn.bootstrapValidator.i18n.iban.countries[i]) } } } }(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.id = t.extend(t.fn.bootstrapValidator.i18n.id || {}, { default: "Please enter a valid identification number", countryNotSupported: "The country code %s is not supported", country: "Please enter a valid identification number in %s", countries: { BA: "Bosnia and Herzegovina", BG: "Bulgaria", BR: "Brazil", CH: "Switzerland", CL: "Chile", CN: "China", CZ: "Czech Republic", DK: "Denmark", EE: "Estonia", ES: "Spain", FI: "Finland", HR: "Croatia", IE: "Ireland", IS: "Iceland", LT: "Lithuania", LV: "Latvia", ME: "Montenegro", MK: "Macedonia", NL: "Netherlands", RO: "Romania", RS: "Serbia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", SM: "San Marino", TH: "Thailand", ZA: "South Africa" } }), t.fn.bootstrapValidator.validators.id = {
        html5Attributes: { message: "message", country: "country" },
        COUNTRY_CODES: ["BA", "BG", "BR", "CH", "CL", "CN", "CZ", "DK", "EE", "ES", "FI", "HR", "IE", "IS", "LT", "LV", "ME", "MK", "NL", "RO", "RS", "SE", "SI", "SK", "SM", "TH", "ZA"],
        validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            var i = r.country;
            return i ? ("string" != typeof i || -1 === t.inArray(i.toUpperCase(), this.COUNTRY_CODES)) && (i = e.getDynamicOption(a, i)) : i = s.substr(0, 2), -1 === t.inArray(i, this.COUNTRY_CODES) ? { valid: !1, message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.id.countryNotSupported, i) } : !!this[["_", i.toLowerCase()].join("")](s) || { valid: !1, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.id.country, t.fn.bootstrapValidator.i18n.id.countries[i.toUpperCase()]) } },
        _validateJMBG: function(t, e) {
            if (!/^\d{13}$/.test(t)) return !1;
            var a = parseInt(t.substr(0, 2), 10),
                r = parseInt(t.substr(2, 2), 10),
                s = (parseInt(t.substr(4, 3), 10), parseInt(t.substr(7, 2), 10)),
                i = parseInt(t.substr(12, 1), 10);
            if (a > 31 || r > 12) return !1;
            for (var n = 0, o = 0; 6 > o; o++) n += (7 - o) * (parseInt(t.charAt(o), 10) + parseInt(t.charAt(o + 6), 10));
            if ((10 === (n = 11 - n % 11) || 11 === n) && (n = 0), n !== i) return !1;
            switch (e.toUpperCase()) {
                case "BA":
                    return s >= 10 && 19 >= s;
                case "MK":
                    return s >= 41 && 49 >= s;
                case "ME":
                    return s >= 20 && 29 >= s;
                case "RS":
                    return s >= 70 && 99 >= s;
                case "SI":
                    return s >= 50 && 59 >= s;
                default:
                    return !0 } },
        _ba: function(t) {
            return this._validateJMBG(t, "BA") },
        _mk: function(t) {
            return this._validateJMBG(t, "MK") },
        _me: function(t) {
            return this._validateJMBG(t, "ME") },
        _rs: function(t) {
            return this._validateJMBG(t, "RS") },
        _si: function(t) {
            return this._validateJMBG(t, "SI") },
        _bg: function(e) {
            if (!/^\d{10}$/.test(e) && !/^\d{6}\s\d{3}\s\d{1}$/.test(e)) return !1;
            e = e.replace(/\s/g, "");
            var a = parseInt(e.substr(0, 2), 10) + 1900,
                r = parseInt(e.substr(2, 2), 10),
                s = parseInt(e.substr(4, 2), 10);
            if (r > 40 ? (a += 100, r -= 40) : r > 20 && (a -= 100, r -= 20), !t.fn.bootstrapValidator.helpers.date(a, r, s)) return !1;
            for (var i = 0, n = [2, 4, 8, 5, 10, 9, 7, 3, 6], o = 0; 9 > o; o++) i += parseInt(e.charAt(o), 10) * n[o];
            return (i = i % 11 % 10) + "" === e.substr(9, 1) },
        _br: function(t) {
            if (/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(t)) return !1;
            if (!/^\d{11}$/.test(t) && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(t)) return !1;
            t = t.replace(/\./g, "").replace(/-/g, "");
            for (var e = 0, a = 0; 9 > a; a++) e += (10 - a) * parseInt(t.charAt(a), 10);
            if ((10 === (e = 11 - e % 11) || 11 === e) && (e = 0), e + "" !== t.charAt(9)) return !1;
            var r = 0;
            for (a = 0; 10 > a; a++) r += (11 - a) * parseInt(t.charAt(a), 10);
            return (10 === (r = 11 - r % 11) || 11 === r) && (r = 0), r + "" === t.charAt(10) },
        _ch: function(t) {
            if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(t)) return !1;
            for (var e = (t = t.replace(/\D/g, "").substr(3)).length, a = 0, r = 8 === e ? [3, 1] : [1, 3], s = 0; e - 1 > s; s++) a += parseInt(t.charAt(s), 10) * r[s % 2];
            return (a = 10 - a % 10) + "" === t.charAt(e - 1) },
        _cl: function(t) {
            if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(t)) return !1;
            for (t = t.replace(/\-/g, ""); t.length < 9;) t = "0" + t;
            for (var e = 0, a = [3, 2, 7, 6, 5, 4, 3, 2], r = 0; 8 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return e = 11 - e % 11, 11 === e ? e = 0 : 10 === e && (e = "K"), e + "" === t.charAt(8).toUpperCase() },
        _cn: function(e) {
            if (e = e.trim(), !/^\d{15}$/.test(e) && !/^\d{17}[\dXx]{1}$/.test(e)) return !1;
            var a = { 11: { 0: [0], 1: [
                            [0, 9],
                            [11, 17]
                        ], 2: [0, 28, 29] }, 12: { 0: [0], 1: [
                            [0, 16]
                        ], 2: [0, 21, 23, 25] }, 13: { 0: [0], 1: [
                            [0, 5], 7, 8, 21, [23, 33],
                            [81, 85]
                        ], 2: [
                            [0, 5],
                            [7, 9],
                            [23, 25], 27, 29, 30, 81, 83
                        ], 3: [
                            [0, 4],
                            [21, 24]
                        ], 4: [
                            [0, 4], 6, 21, [23, 35], 81
                        ], 5: [
                            [0, 3],
                            [21, 35], 81, 82
                        ], 6: [
                            [0, 4],
                            [21, 38],
                            [81, 84]
                        ], 7: [
                            [0, 3], 5, 6, [21, 33]
                        ], 8: [
                            [0, 4],
                            [21, 28]
                        ], 9: [
                            [0, 3],
                            [21, 30],
                            [81, 84]
                        ], 10: [
                            [0, 3],
                            [22, 26], 28, 81, 82
                        ], 11: [
                            [0, 2],
                            [21, 28], 81, 82
                        ] }, 14: { 0: [0], 1: [0, 1, [5, 10],
                            [21, 23], 81
                        ], 2: [
                            [0, 3], 11, 12, [21, 27]
                        ], 3: [
                            [0, 3], 11, 21, 22
                        ], 4: [
                            [0, 2], 11, 21, [23, 31], 81
                        ], 5: [
                            [0, 2], 21, 22, 24, 25, 81
                        ], 6: [
                            [0, 3],
                            [21, 24]
                        ], 7: [
                            [0, 2],
                            [21, 29], 81
                        ], 8: [
                            [0, 2],
                            [21, 30], 81, 82
                        ], 9: [
                            [0, 2],
                            [21, 32], 81
                        ], 10: [
                            [0, 2],
                            [21, 34], 81, 82
                        ], 11: [
                            [0, 2],
                            [21, 30], 81, 82
                        ], 23: [
                            [0, 3], 22, 23, [25, 30], 32, 33
                        ] }, 15: { 0: [0], 1: [
                            [0, 5],
                            [21, 25]
                        ], 2: [
                            [0, 7],
                            [21, 23]
                        ], 3: [
                            [0, 4]
                        ], 4: [
                            [0, 4],
                            [21, 26],
                            [28, 30]
                        ], 5: [
                            [0, 2],
                            [21, 26], 81
                        ], 6: [
                            [0, 2],
                            [21, 27]
                        ], 7: [
                            [0, 3],
                            [21, 27],
                            [81, 85]
                        ], 8: [
                            [0, 2],
                            [21, 26]
                        ], 9: [
                            [0, 2],
                            [21, 29], 81
                        ], 22: [
                            [0, 2],
                            [21, 24]
                        ], 25: [
                            [0, 2],
                            [22, 31]
                        ], 26: [
                            [0, 2],
                            [24, 27],
                            [29, 32], 34
                        ], 28: [0, 1, [22, 27]], 29: [0, [21, 23]] }, 21: { 0: [0], 1: [
                            [0, 6],
                            [11, 14],
                            [22, 24], 81
                        ], 2: [
                            [0, 4],
                            [11, 13], 24, [81, 83]
                        ], 3: [
                            [0, 4], 11, 21, 23, 81
                        ], 4: [
                            [0, 4], 11, [21, 23]
                        ], 5: [
                            [0, 5], 21, 22
                        ], 6: [
                            [0, 4], 24, 81, 82
                        ], 7: [
                            [0, 3], 11, 26, 27, 81, 82
                        ], 8: [
                            [0, 4], 11, 81, 82
                        ], 9: [
                            [0, 5], 11, 21, 22
                        ], 10: [
                            [0, 5], 11, 21, 81
                        ], 11: [
                            [0, 3], 21, 22
                        ], 12: [
                            [0, 2], 4, 21, 23, 24, 81, 82
                        ], 13: [
                            [0, 3], 21, 22, 24, 81, 82
                        ], 14: [
                            [0, 4], 21, 22, 81
                        ] }, 22: { 0: [0], 1: [
                            [0, 6], 12, 22, [81, 83]
                        ], 2: [
                            [0, 4], 11, 21, [81, 84]
                        ], 3: [
                            [0, 3], 22, 23, 81, 82
                        ], 4: [
                            [0, 3], 21, 22
                        ], 5: [
                            [0, 3], 21, 23, 24, 81, 82
                        ], 6: [
                            [0, 2], 4, 5, [21, 23], 25, 81
                        ], 7: [
                            [0, 2],
                            [21, 24], 81
                        ], 8: [
                            [0, 2], 21, 22, 81, 82
                        ], 24: [
                            [0, 6], 24, 26
                        ] }, 23: { 0: [0], 1: [
                            [0, 12], 21, [23, 29],
                            [81, 84]
                        ], 2: [
                            [0, 8], 21, [23, 25], 27, [29, 31], 81
                        ], 3: [
                            [0, 7], 21, 81, 82
                        ], 4: [
                            [0, 7], 21, 22
                        ], 5: [
                            [0, 3], 5, 6, [21, 24]
                        ], 6: [
                            [0, 6],
                            [21, 24]
                        ], 7: [
                            [0, 16], 22, 81
                        ], 8: [
                            [0, 5], 11, 22, 26, 28, 33, 81, 82
                        ], 9: [
                            [0, 4], 21
                        ], 10: [
                            [0, 5], 24, 25, 81, [83, 85]
                        ], 11: [
                            [0, 2], 21, 23, 24, 81, 82
                        ], 12: [
                            [0, 2],
                            [21, 26],
                            [81, 83]
                        ], 27: [
                            [0, 4],
                            [21, 23]
                        ] }, 31: { 0: [0], 1: [0, 1, [3, 10],
                            [12, 20]
                        ], 2: [0, 30] }, 32: { 0: [0], 1: [
                            [0, 7], 11, [13, 18], 24, 25
                        ], 2: [
                            [0, 6], 11, 81, 82
                        ], 3: [
                            [0, 5], 11, 12, [21, 24], 81, 82
                        ], 4: [
                            [0, 2], 4, 5, 11, 12, 81, 82
                        ], 5: [
                            [0, 9],
                            [81, 85]
                        ], 6: [
                            [0, 2], 11, 12, 21, 23, [81, 84]
                        ], 7: [0, 1, 3, 5, 6, [21, 24]], 8: [
                            [0, 4], 11, 26, [29, 31]
                        ], 9: [
                            [0, 3],
                            [21, 25], 28, 81, 82
                        ], 10: [
                            [0, 3], 11, 12, 23, 81, 84, 88
                        ], 11: [
                            [0, 2], 11, 12, [81, 83]
                        ], 12: [
                            [0, 4],
                            [81, 84]
                        ], 13: [
                            [0, 2], 11, [21, 24]
                        ] }, 33: { 0: [0], 1: [
                            [0, 6],
                            [8, 10], 22, 27, 82, 83, 85
                        ], 2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]], 3: [
                            [0, 4], 22, 24, [26, 29], 81, 82
                        ], 4: [
                            [0, 2], 11, 21, 24, [81, 83]
                        ], 5: [
                            [0, 3],
                            [21, 23]
                        ], 6: [
                            [0, 2], 21, 24, [81, 83]
                        ], 7: [
                            [0, 3], 23, 26, 27, [81, 84]
                        ], 8: [
                            [0, 3], 22, 24, 25, 81
                        ], 9: [
                            [0, 3], 21, 22
                        ], 10: [
                            [0, 4],
                            [21, 24], 81, 82
                        ], 11: [
                            [0, 2],
                            [21, 27], 81
                        ] }, 34: { 0: [0], 1: [
                            [0, 4], 11, [21, 24], 81
                        ], 2: [
                            [0, 4], 7, 8, [21, 23], 25
                        ], 3: [
                            [0, 4], 11, [21, 23]
                        ], 4: [
                            [0, 6], 21
                        ], 5: [
                            [0, 4], 6, [21, 23]
                        ], 6: [
                            [0, 4], 21
                        ], 7: [
                            [0, 3], 11, 21
                        ], 8: [
                            [0, 3], 11, [22, 28], 81
                        ], 10: [
                            [0, 4],
                            [21, 24]
                        ], 11: [
                            [0, 3], 22, [24, 26], 81, 82
                        ], 12: [
                            [0, 4], 21, 22, 25, 26, 82
                        ], 13: [
                            [0, 2],
                            [21, 24]
                        ], 14: [
                            [0, 2],
                            [21, 24]
                        ], 15: [
                            [0, 3],
                            [21, 25]
                        ], 16: [
                            [0, 2],
                            [21, 23]
                        ], 17: [
                            [0, 2],
                            [21, 23]
                        ], 18: [
                            [0, 2],
                            [21, 25], 81
                        ] }, 35: { 0: [0], 1: [
                            [0, 5], 11, [21, 25], 28, 81, 82
                        ], 2: [
                            [0, 6],
                            [11, 13]
                        ], 3: [
                            [0, 5], 22
                        ], 4: [
                            [0, 3], 21, [23, 30], 81
                        ], 5: [
                            [0, 5], 21, [24, 27],
                            [81, 83]
                        ], 6: [
                            [0, 3],
                            [22, 29], 81
                        ], 7: [
                            [0, 2],
                            [21, 25],
                            [81, 84]
                        ], 8: [
                            [0, 2],
                            [21, 25], 81
                        ], 9: [
                            [0, 2],
                            [21, 26], 81, 82
                        ] }, 36: { 0: [0], 1: [
                            [0, 5], 11, [21, 24]
                        ], 2: [
                            [0, 3], 22, 81
                        ], 3: [
                            [0, 2], 13, [21, 23]
                        ], 4: [
                            [0, 3], 21, [23, 30], 81, 82
                        ], 5: [
                            [0, 2], 21
                        ], 6: [
                            [0, 2], 22, 81
                        ], 7: [
                            [0, 2],
                            [21, 35], 81, 82
                        ], 8: [
                            [0, 3],
                            [21, 30], 81
                        ], 9: [
                            [0, 2],
                            [21, 26],
                            [81, 83]
                        ], 10: [
                            [0, 2],
                            [21, 30]
                        ], 11: [
                            [0, 2],
                            [21, 30], 81
                        ] }, 37: { 0: [0], 1: [
                            [0, 5], 12, 13, [24, 26], 81
                        ], 2: [
                            [0, 3], 5, [11, 14],
                            [81, 85]
                        ], 3: [
                            [0, 6],
                            [21, 23]
                        ], 4: [
                            [0, 6], 81
                        ], 5: [
                            [0, 3],
                            [21, 23]
                        ], 6: [
                            [0, 2],
                            [11, 13], 34, [81, 87]
                        ], 7: [
                            [0, 5], 24, 25, [81, 86]
                        ], 8: [
                            [0, 2], 11, [26, 32],
                            [81, 83]
                        ], 9: [
                            [0, 3], 11, 21, 23, 82, 83
                        ], 10: [
                            [0, 2],
                            [81, 83]
                        ], 11: [
                            [0, 3], 21, 22
                        ], 12: [
                            [0, 3]
                        ], 13: [
                            [0, 2], 11, 12, [21, 29]
                        ], 14: [
                            [0, 2],
                            [21, 28], 81, 82
                        ], 15: [
                            [0, 2],
                            [21, 26], 81
                        ], 16: [
                            [0, 2],
                            [21, 26]
                        ], 17: [
                            [0, 2],
                            [21, 28]
                        ] }, 41: { 0: [0], 1: [
                            [0, 6], 8, 22, [81, 85]
                        ], 2: [
                            [0, 5], 11, [21, 25]
                        ], 3: [
                            [0, 7], 11, [22, 29], 81
                        ], 4: [
                            [0, 4], 11, [21, 23], 25, 81, 82
                        ], 5: [
                            [0, 3], 5, 6, 22, 23, 26, 27, 81
                        ], 6: [
                            [0, 3], 11, 21, 22
                        ], 7: [
                            [0, 4], 11, 21, [24, 28], 81, 82
                        ], 8: [
                            [0, 4], 11, [21, 23], 25, [81, 83]
                        ], 9: [
                            [0, 2], 22, 23, [26, 28]
                        ], 10: [
                            [0, 2],
                            [23, 25], 81, 82
                        ], 11: [
                            [0, 4],
                            [21, 23]
                        ], 12: [
                            [0, 2], 21, 22, 24, 81, 82
                        ], 13: [
                            [0, 3],
                            [21, 30], 81
                        ], 14: [
                            [0, 3],
                            [21, 26], 81
                        ], 15: [
                            [0, 3],
                            [21, 28]
                        ], 16: [
                            [0, 2],
                            [21, 28], 81
                        ], 17: [
                            [0, 2],
                            [21, 29]
                        ], 90: [0, 1] }, 42: { 0: [0], 1: [
                            [0, 7],
                            [11, 17]
                        ], 2: [
                            [0, 5], 22, 81
                        ], 3: [
                            [0, 3],
                            [21, 25], 81
                        ], 5: [
                            [0, 6],
                            [25, 29],
                            [81, 83]
                        ], 6: [
                            [0, 2], 6, 7, [24, 26],
                            [82, 84]
                        ], 7: [
                            [0, 4]
                        ], 8: [
                            [0, 2], 4, 21, 22, 81
                        ], 9: [
                            [0, 2],
                            [21, 23], 81, 82, 84
                        ], 10: [
                            [0, 3],
                            [22, 24], 81, 83, 87
                        ], 11: [
                            [0, 2],
                            [21, 27], 81, 82
                        ], 12: [
                            [0, 2],
                            [21, 24], 81
                        ], 13: [
                            [0, 3], 21, 81
                        ], 28: [
                            [0, 2], 22, 23, [25, 28]
                        ], 90: [0, [4, 6], 21] }, 43: { 0: [0], 1: [
                            [0, 5], 11, 12, 21, 22, 24, 81
                        ], 2: [
                            [0, 4], 11, 21, [23, 25], 81
                        ], 3: [
                            [0, 2], 4, 21, 81, 82
                        ], 4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82], 5: [
                            [0, 3], 11, [21, 25],
                            [27, 29], 81
                        ], 6: [
                            [0, 3], 11, 21, 23, 24, 26, 81, 82
                        ], 7: [
                            [0, 3],
                            [21, 26], 81
                        ], 8: [
                            [0, 2], 11, 21, 22
                        ], 9: [
                            [0, 3],
                            [21, 23], 81
                        ], 10: [
                            [0, 3],
                            [21, 28], 81
                        ], 11: [
                            [0, 3],
                            [21, 29]
                        ], 12: [
                            [0, 2],
                            [21, 30], 81
                        ], 13: [
                            [0, 2], 21, 22, 81, 82
                        ], 31: [0, 1, [22, 27], 30] }, 44: { 0: [0], 1: [
                            [0, 7],
                            [11, 16], 83, 84
                        ], 2: [
                            [0, 5], 21, 22, 24, 29, 32, 33, 81, 82
                        ], 3: [0, 1, [3, 8]], 4: [
                            [0, 4]
                        ], 5: [0, 1, [6, 15], 23, 82, 83], 6: [0, 1, [4, 8]], 7: [0, 1, [3, 5], 81, [83, 85]], 8: [
                            [0, 4], 11, 23, 25, [81, 83]
                        ], 9: [
                            [0, 3], 23, [81, 83]
                        ], 12: [
                            [0, 3],
                            [23, 26], 83, 84
                        ], 13: [
                            [0, 3],
                            [22, 24], 81
                        ], 14: [
                            [0, 2],
                            [21, 24], 26, 27, 81
                        ], 15: [
                            [0, 2], 21, 23, 81
                        ], 16: [
                            [0, 2],
                            [21, 25]
                        ], 17: [
                            [0, 2], 21, 23, 81
                        ], 18: [
                            [0, 3], 21, 23, [25, 27], 81, 82
                        ], 19: [0], 20: [0], 51: [
                            [0, 3], 21, 22
                        ], 52: [
                            [0, 3], 21, 22, 24, 81
                        ], 53: [
                            [0, 2],
                            [21, 23], 81
                        ] }, 45: { 0: [0], 1: [
                            [0, 9],
                            [21, 27]
                        ], 2: [
                            [0, 5],
                            [21, 26]
                        ], 3: [
                            [0, 5], 11, 12, [21, 32]
                        ], 4: [0, 1, [3, 6], 11, [21, 23], 81], 5: [
                            [0, 3], 12, 21
                        ], 6: [
                            [0, 3], 21, 81
                        ], 7: [
                            [0, 3], 21, 22
                        ], 8: [
                            [0, 4], 21, 81
                        ], 9: [
                            [0, 3],
                            [21, 24], 81
                        ], 10: [
                            [0, 2],
                            [21, 31]
                        ], 11: [
                            [0, 2],
                            [21, 23]
                        ], 12: [
                            [0, 2],
                            [21, 29], 81
                        ], 13: [
                            [0, 2],
                            [21, 24], 81
                        ], 14: [
                            [0, 2],
                            [21, 25], 81
                        ] }, 46: { 0: [0], 1: [0, 1, [5, 8]], 2: [0, 1], 3: [0, [21, 23]], 90: [
                            [0, 3],
                            [5, 7],
                            [21, 39]
                        ] }, 50: { 0: [0], 1: [
                            [0, 19]
                        ], 2: [0, [22, 38],
                            [40, 43]
                        ], 3: [0, [81, 84]] }, 51: { 0: [0], 1: [0, 1, [4, 8],
                            [12, 15],
                            [21, 24], 29, 31, 32, [81, 84]
                        ], 3: [
                            [0, 4], 11, 21, 22
                        ], 4: [
                            [0, 3], 11, 21, 22
                        ], 5: [
                            [0, 4], 21, 22, 24, 25
                        ], 6: [0, 1, 3, 23, 26, [81, 83]], 7: [0, 1, 3, 4, [22, 27], 81], 8: [
                            [0, 2], 11, 12, [21, 24]
                        ], 9: [
                            [0, 4],
                            [21, 23]
                        ], 10: [
                            [0, 2], 11, 24, 25, 28
                        ], 11: [
                            [0, 2],
                            [11, 13], 23, 24, 26, 29, 32, 33, 81
                        ], 13: [
                            [0, 4],
                            [21, 25], 81
                        ], 14: [
                            [0, 2],
                            [21, 25]
                        ], 15: [
                            [0, 3],
                            [21, 29]
                        ], 16: [
                            [0, 3],
                            [21, 23], 81
                        ], 17: [
                            [0, 3],
                            [21, 25], 81
                        ], 18: [
                            [0, 3],
                            [21, 27]
                        ], 19: [
                            [0, 3],
                            [21, 23]
                        ], 20: [
                            [0, 2], 21, 22, 81
                        ], 32: [0, [21, 33]], 33: [0, [21, 38]], 34: [0, 1, [22, 37]] }, 52: { 0: [0], 1: [
                            [0, 3],
                            [11, 15],
                            [21, 23], 81
                        ], 2: [0, 1, 3, 21, 22], 3: [
                            [0, 3],
                            [21, 30], 81, 82
                        ], 4: [
                            [0, 2],
                            [21, 25]
                        ], 5: [
                            [0, 2],
                            [21, 27]
                        ], 6: [
                            [0, 3],
                            [21, 28]
                        ], 22: [0, 1, [22, 30]], 23: [0, 1, [22, 28]], 24: [0, 1, [22, 28]], 26: [0, 1, [22, 36]], 27: [
                            [0, 2], 22, 23, [25, 32]
                        ] }, 53: { 0: [0], 1: [
                            [0, 3],
                            [11, 14], 21, 22, [24, 29], 81
                        ], 3: [
                            [0, 2],
                            [21, 26], 28, 81
                        ], 4: [
                            [0, 2],
                            [21, 28]
                        ], 5: [
                            [0, 2],
                            [21, 24]
                        ], 6: [
                            [0, 2],
                            [21, 30]
                        ], 7: [
                            [0, 2],
                            [21, 24]
                        ], 8: [
                            [0, 2],
                            [21, 29]
                        ], 9: [
                            [0, 2],
                            [21, 27]
                        ], 23: [0, 1, [22, 29], 31], 25: [
                            [0, 4],
                            [22, 32]
                        ], 26: [0, 1, [21, 28]], 27: [0, 1, [22, 30]], 28: [0, 1, 22, 23], 29: [0, 1, [22, 32]], 31: [0, 2, 3, [22, 24]], 34: [0, [21, 23]], 33: [0, 21, [23, 25]], 35: [0, [21, 28]] }, 54: { 0: [0], 1: [
                            [0, 2],
                            [21, 27]
                        ], 21: [0, [21, 29], 32, 33], 22: [0, [21, 29],
                            [31, 33]
                        ], 23: [0, 1, [22, 38]], 24: [0, [21, 31]], 25: [0, [21, 27]], 26: [0, [21, 27]] }, 61: { 0: [0], 1: [
                            [0, 4],
                            [11, 16], 22, [24, 26]
                        ], 2: [
                            [0, 4], 22
                        ], 3: [
                            [0, 4],
                            [21, 24],
                            [26, 31]
                        ], 4: [
                            [0, 4],
                            [22, 31], 81
                        ], 5: [
                            [0, 2],
                            [21, 28], 81, 82
                        ], 6: [
                            [0, 2],
                            [21, 32]
                        ], 7: [
                            [0, 2],
                            [21, 30]
                        ], 8: [
                            [0, 2],
                            [21, 31]
                        ], 9: [
                            [0, 2],
                            [21, 29]
                        ], 10: [
                            [0, 2],
                            [21, 26]
                        ] }, 62: { 0: [0], 1: [
                            [0, 5], 11, [21, 23]
                        ], 2: [0, 1], 3: [
                            [0, 2], 21
                        ], 4: [
                            [0, 3],
                            [21, 23]
                        ], 5: [
                            [0, 3],
                            [21, 25]
                        ], 6: [
                            [0, 2],
                            [21, 23]
                        ], 7: [
                            [0, 2],
                            [21, 25]
                        ], 8: [
                            [0, 2],
                            [21, 26]
                        ], 9: [
                            [0, 2],
                            [21, 24], 81, 82
                        ], 10: [
                            [0, 2],
                            [21, 27]
                        ], 11: [
                            [0, 2],
                            [21, 26]
                        ], 12: [
                            [0, 2],
                            [21, 28]
                        ], 24: [0, 21, [24, 29]], 26: [0, 21, [23, 30]], 29: [0, 1, [21, 27]], 30: [0, 1, [21, 27]] }, 63: { 0: [0], 1: [
                            [0, 5],
                            [21, 23]
                        ], 2: [0, 2, [21, 25]], 21: [0, [21, 23],
                            [26, 28]
                        ], 22: [0, [21, 24]], 23: [0, [21, 24]], 25: [0, [21, 25]], 26: [0, [21, 26]], 27: [0, 1, [21, 26]], 28: [
                            [0, 2],
                            [21, 23]
                        ] }, 64: { 0: [0], 1: [0, 1, [4, 6], 21, 22, 81], 2: [
                            [0, 3], 5, [21, 23]
                        ], 3: [
                            [0, 3],
                            [21, 24], 81
                        ], 4: [
                            [0, 2],
                            [21, 25]
                        ], 5: [
                            [0, 2], 21, 22
                        ] }, 65: { 0: [0], 1: [
                            [0, 9], 21
                        ], 2: [
                            [0, 5]
                        ], 21: [0, 1, 22, 23], 22: [0, 1, 22, 23], 23: [
                            [0, 3],
                            [23, 25], 27, 28
                        ], 28: [0, 1, [22, 29]], 29: [0, 1, [22, 29]], 30: [0, 1, [22, 24]], 31: [0, 1, [21, 31]], 32: [0, 1, [21, 27]], 40: [0, 2, 3, [21, 28]], 42: [
                            [0, 2], 21, [23, 26]
                        ], 43: [0, 1, [21, 26]], 90: [
                            [0, 4]
                        ], 27: [
                            [0, 2], 22, 23
                        ] }, 71: { 0: [0] }, 81: { 0: [0] }, 82: { 0: [0] } },
                r = parseInt(e.substr(0, 2), 10),
                s = parseInt(e.substr(2, 2), 10),
                i = parseInt(e.substr(4, 2), 10);
            if (!a[r] || !a[r][s]) return !1;
            for (var n = !1, o = a[r][s], l = 0; l < o.length; l++)
                if (t.isArray(o[l]) && o[l][0] <= i && i <= o[l][1] || !t.isArray(o[l]) && i === o[l]) { n = !0;
                    break }
            if (!n) return !1;
            var d;
            d = 18 === e.length ? e.substr(6, 8) : "19" + e.substr(6, 6);
            var u = parseInt(d.substr(0, 4), 10),
                f = parseInt(d.substr(4, 2), 10),
                p = parseInt(d.substr(6, 2), 10);
            if (!t.fn.bootstrapValidator.helpers.date(u, f, p)) return !1;
            if (18 === e.length) {
                var c = 0,
                    h = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                for (l = 0; 17 > l; l++) c += parseInt(e.charAt(l), 10) * h[l];
                return c = (12 - c % 11) % 11, ("X" !== e.charAt(17).toUpperCase() ? parseInt(e.charAt(17), 10) : 10) === c }
            return !0
        },
        _cz: function(e) {
            if (!/^\d{9,10}$/.test(e)) return !1;
            var a = 1900 + parseInt(e.substr(0, 2), 10),
                r = parseInt(e.substr(2, 2), 10) % 50 % 20,
                s = parseInt(e.substr(4, 2), 10);
            if (9 === e.length) {
                if (a >= 1980 && (a -= 100), a > 1953) return !1 } else 1954 > a && (a += 100);
            if (!t.fn.bootstrapValidator.helpers.date(a, r, s)) return !1;
            if (10 === e.length) {
                var i = parseInt(e.substr(0, 9), 10) % 11;
                return 1985 > a && (i %= 10), i + "" === e.substr(9, 1) }
            return !0
        },
        _dk: function(e) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e)) return !1;
            e = e.replace(/-/g, "");
            var a = parseInt(e.substr(0, 2), 10),
                r = parseInt(e.substr(2, 2), 10),
                s = parseInt(e.substr(4, 2), 10);
            switch (!0) {
                case -1 !== "5678".indexOf(e.charAt(6)) && s >= 58:
                    s += 1800;
                    break;
                case -1 !== "0123".indexOf(e.charAt(6)):
                case -1 !== "49".indexOf(e.charAt(6)) && s >= 37:
                    s += 1900;
                    break;
                default:
                    s += 2e3 }
            return t.fn.bootstrapValidator.helpers.date(s, r, a)
        },
        _ee: function(t) {
            return this._lt(t) },
        _es: function(t) {
            if (!/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(t) && !/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(t)) return !1;
            t = t.replace(/-/g, "");
            var e = "XYZ".indexOf(t.charAt(0)); - 1 !== e && (t = e + t.substr(1) + "");
            var a = parseInt(t.substr(0, 8), 10);
            return (a = "TRWAGMYFPDXBNJZSQVHLCKE" [a % 23]) === t.substr(8, 1) },
        _fi: function(e) {
            if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(e)) return !1;
            var a = parseInt(e.substr(0, 2), 10),
                r = parseInt(e.substr(2, 2), 10),
                s = parseInt(e.substr(4, 2), 10);
            if (s = { "+": 1800, "-": 1900, A: 2e3 }[e.charAt(6)] + s, !t.fn.bootstrapValidator.helpers.date(s, r, a)) return !1;
            if (2 > parseInt(e.substr(7, 3), 10)) return !1;
            var i = e.substr(0, 6) + e.substr(7, 3) + "";
            return i = parseInt(i, 10), "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(i % 31) === e.charAt(10) },
        _hr: function(e) {
            return !!/^[0-9]{11}$/.test(e) && t.fn.bootstrapValidator.helpers.mod11And10(e) },
        _ie: function(t) {
            if (!/^\d{7}[A-W][AHWTX]?$/.test(t)) return !1;
            var e = function(t) {
                for (; t.length < 7;) t = "0" + t;
                for (var e = "WABCDEFGHIJKLMNOPQRSTUV", a = 0, r = 0; 7 > r; r++) a += parseInt(t.charAt(r), 10) * (8 - r);
                return a += 9 * e.indexOf(t.substr(7)), e[a % 23] };
            return 9 !== t.length || "A" !== t.charAt(8) && "H" !== t.charAt(8) ? t.charAt(7) === e(t.substr(0, 7)) : t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "") },
        _is: function(e) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e)) return !1;
            e = e.replace(/-/g, "");
            var a = parseInt(e.substr(0, 2), 10),
                r = parseInt(e.substr(2, 2), 10),
                s = parseInt(e.substr(4, 2), 10),
                i = parseInt(e.charAt(9), 10);
            if (s = 9 === i ? 1900 + s : 100 * (20 + i) + s, !t.fn.bootstrapValidator.helpers.date(s, r, a, !0)) return !1;
            for (var n = 0, o = [3, 2, 7, 6, 5, 4, 3, 2], l = 0; 8 > l; l++) n += parseInt(e.charAt(l), 10) * o[l];
            return (n = 11 - n % 11) + "" === e.charAt(8) },
        _lt: function(e) {
            if (!/^[0-9]{11}$/.test(e)) return !1;
            var a = parseInt(e.charAt(0), 10),
                r = parseInt(e.substr(1, 2), 10),
                s = parseInt(e.substr(3, 2), 10),
                i = parseInt(e.substr(5, 2), 10);
            if (r = 100 * (a % 2 == 0 ? 17 + a / 2 : 17 + (a + 1) / 2) + r, !t.fn.bootstrapValidator.helpers.date(r, s, i, !0)) return !1;
            for (var n = 0, o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1], l = 0; 10 > l; l++) n += parseInt(e.charAt(l), 10) * o[l];
            if (10 !== (n %= 11)) return n + "" === e.charAt(10);
            for (n = 0, o = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3], l = 0; 10 > l; l++) n += parseInt(e.charAt(l), 10) * o[l];
            return 10 === (n %= 11) && (n = 0), n + "" === e.charAt(10) },
        _lv: function(e) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(e)) return !1;
            e = e.replace(/\D/g, "");
            var a = parseInt(e.substr(0, 2), 10),
                r = parseInt(e.substr(2, 2), 10),
                s = parseInt(e.substr(4, 2), 10);
            if (s = s + 1800 + 100 * parseInt(e.charAt(6), 10), !t.fn.bootstrapValidator.helpers.date(s, r, a, !0)) return !1;
            for (var i = 0, n = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], o = 0; 10 > o; o++) i += parseInt(e.charAt(o), 10) * n[o];
            return (i = (i + 1) % 11 % 10) + "" === e.charAt(10) },
        _nl: function(t) {
            for (; t.length < 9;) t = "0" + t;
            if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t)) return !1;
            if (t = t.replace(/\./g, ""), 0 === parseInt(t, 10)) return !1;
            for (var e = 0, a = t.length, r = 0; a - 1 > r; r++) e += (9 - r) * parseInt(t.charAt(r), 10);
            return 10 === (e %= 11) && (e = 0), e + "" === t.charAt(a - 1) },
        _ro: function(e) {
            if (!/^[0-9]{13}$/.test(e)) return !1;
            var a = parseInt(e.charAt(0), 10);
            if (0 === a || 7 === a || 8 === a) return !1;
            var r = parseInt(e.substr(1, 2), 10),
                s = parseInt(e.substr(3, 2), 10),
                i = parseInt(e.substr(5, 2), 10),
                n = { 1: 1900, 2: 1900, 3: 1800, 4: 1800, 5: 2e3, 6: 2e3 };
            if (i > 31 && s > 12) return !1;
            if (9 !== a && (r = n[a + ""] + r, !t.fn.bootstrapValidator.helpers.date(r, s, i))) return !1;
            for (var o = 0, l = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], d = e.length, u = 0; d - 1 > u; u++) o += parseInt(e.charAt(u), 10) * l[u];
            return 10 === (o %= 11) && (o = 1), o + "" === e.charAt(d - 1) },
        _se: function(e) {
            if (!/^[0-9]{10}$/.test(e) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(e)) return !1;
            e = e.replace(/[^0-9]/g, "");
            var a = parseInt(e.substr(0, 2), 10) + 1900,
                r = parseInt(e.substr(2, 2), 10),
                s = parseInt(e.substr(4, 2), 10);
            return !!t.fn.bootstrapValidator.helpers.date(a, r, s) && t.fn.bootstrapValidator.helpers.luhn(e) },
        _sk: function(t) {
            return this._cz(t) },
        _sm: function(t) {
            return /^\d{5}$/.test(t) },
        _th: function(t) {
            if (13 !== t.length) return !1;
            for (var e = 0, a = 0; 12 > a; a++) e += parseInt(t.charAt(a), 10) * (13 - a);
            return (11 - e % 11) % 10 === parseInt(t.charAt(12), 10) },
        _za: function(e) {
            if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(e)) return !1;
            var a = parseInt(e.substr(0, 2), 10),
                r = (new Date).getFullYear() % 100,
                s = parseInt(e.substr(2, 2), 10),
                i = parseInt(e.substr(4, 2), 10);
            return a = a >= r ? a + 1900 : a + 2e3, !!t.fn.bootstrapValidator.helpers.date(a, s, i) && t.fn.bootstrapValidator.helpers.luhn(e) }
    }
}(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.identical = t.extend(t.fn.bootstrapValidator.i18n.identical || {}, { default: "Please enter the same value" }), t.fn.bootstrapValidator.validators.identical = { html5Attributes: { message: "message", field: "field" }, validate: function(t, e, a) {
            var r = e.val();
            if ("" === r) return !0;
            var s = t.getFieldElements(a.field);
            return null === s || 0 === s.length || r === s.val() && (t.updateStatus(a.field, t.STATUS_VALID, "identical"), !0) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.imei = t.extend(t.fn.bootstrapValidator.i18n.imei || {}, { default: "Please enter a valid IMEI number" }), t.fn.bootstrapValidator.validators.imei = { validate: function(e, a) {
            var r = a.val();
            if ("" === r) return !0;
            switch (!0) {
                case /^\d{15}$/.test(r):
                case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(r):
                case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(r):
                    return r = r.replace(/[^0-9]/g, ""), t.fn.bootstrapValidator.helpers.luhn(r);
                case /^\d{14}$/.test(r):
                case /^\d{16}$/.test(r):
                case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(r):
                case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(r):
                    return !0;
                default:
                    return !1 } } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.imo = t.extend(t.fn.bootstrapValidator.i18n.imo || {}, { default: "Please enter a valid IMO number" }), t.fn.bootstrapValidator.validators.imo = { validate: function(t, e) {
            var a = e.val();
            if ("" === a) return !0;
            if (!/^IMO \d{7}$/i.test(a)) return !1;
            for (var r = 0, s = a.replace(/^.*(\d{7})$/, "$1"), i = 6; i >= 1; i--) r += s.slice(6 - i, -i) * (i + 1);
            return r % 10 === parseInt(s.charAt(6), 10) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.integer = t.extend(t.fn.bootstrapValidator.i18n.integer || {}, { default: "Please enter a valid number" }), t.fn.bootstrapValidator.validators.integer = { enableByHtml5: function(t) {
            return "number" === t.attr("type") && (void 0 === t.attr("step") || t.attr("step") % 1 == 0) }, validate: function(t, e) {
            if (this.enableByHtml5(e) && e.get(0).validity && !0 === e.get(0).validity.badInput) return !1;
            var a = e.val();
            return "" === a || /^(?:-?(?:0|[1-9][0-9]*))$/.test(a) } } }(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.ip = t.extend(t.fn.bootstrapValidator.i18n.ip || {}, { default: "Please enter a valid IP address", ipv4: "Please enter a valid IPv4 address", ipv6: "Please enter a valid IPv6 address" }), t.fn.bootstrapValidator.validators.ip = {
        html5Attributes: { message: "message", ipv4: "ipv4", ipv6: "ipv6" },
        validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            var i, n = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                o = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                l = !1;
            switch (!0) {
                case (r = t.extend({}, { ipv4: !0, ipv6: !0 }, r)).ipv4 && !r.ipv6:
                    l = n.test(s), i = r.message || t.fn.bootstrapValidator.i18n.ip.ipv4;
                    break;
                case !r.ipv4 && r.ipv6:
                    l = o.test(s), i = r.message || t.fn.bootstrapValidator.i18n.ip.ipv6;
                    break;
                case r.ipv4 && r.ipv6:
                default:
                    l = n.test(s) || o.test(s), i = r.message || t.fn.bootstrapValidator.i18n.ip.default }
            return { valid: l, message: i }
        }
    }
}(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.isbn = t.extend(t.fn.bootstrapValidator.i18n.isbn || {}, { default: "Please enter a valid ISBN number" }), t.fn.bootstrapValidator.validators.isbn = {
        validate: function(t, e) {
            var a = e.val();
            if ("" === a) return !0;
            var r;
            switch (!0) {
                case /^\d{9}[\dX]$/.test(a):
                case 13 === a.length && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(a):
                case 13 === a.length && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(a):
                    r = "ISBN10";
                    break;
                case /^(978|979)\d{9}[\dX]$/.test(a):
                case 17 === a.length && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(a):
                case 17 === a.length && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(a):
                    r = "ISBN13";
                    break;
                default:
                    return !1 }
            var s, i, n = (a = a.replace(/[^0-9X]/gi, "")).split(""),
                o = n.length,
                l = 0;
            switch (r) {
                case "ISBN10":
                    for (l = 0, s = 0; o - 1 > s; s++) l += parseInt(n[s], 10) * (10 - s);
                    return i = 11 - l % 11, 11 === i ? i = 0 : 10 === i && (i = "X"), i + "" === n[o - 1];
                case "ISBN13":
                    for (l = 0, s = 0; o - 1 > s; s++) l += s % 2 == 0 ? parseInt(n[s], 10) : 3 * parseInt(n[s], 10);
                    return 10 === (i = 10 - l % 10) && (i = "0"), i + "" === n[o - 1];
                default:
                    return !1 }
        }
    }
}(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.isin = t.extend(t.fn.bootstrapValidator.i18n.isin || {}, { default: "Please enter a valid ISIN number" }), t.fn.bootstrapValidator.validators.isin = {
        COUNTRY_CODES: "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",
        validate: function(t, e) {
            var a = e.val();
            if ("" === a) return !0;
            if (a = a.toUpperCase(), !new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$").test(a)) return !1;
            for (var r = "", s = a.length, i = 0; s - 1 > i; i++) {
                var n = a.charCodeAt(i);
                r += n > 57 ? (n - 55).toString() : a.charAt(i) }
            var o = "",
                l = r.length,
                d = l % 2 != 0 ? 0 : 1;
            for (i = 0; l > i; i++) o += parseInt(r[i], 10) * (i % 2 === d ? 2 : 1) + "";
            var u = 0;
            for (i = 0; i < o.length; i++) u += parseInt(o.charAt(i), 10);
            return (u = (10 - u % 10) % 10) + "" === a.charAt(s - 1)
        }
    }
}(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.ismn = t.extend(t.fn.bootstrapValidator.i18n.ismn || {}, { default: "Please enter a valid ISMN number" }), t.fn.bootstrapValidator.validators.ismn = { validate: function(t, e) {
            var a = e.val();
            if ("" === a) return !0;
            var r;
            switch (!0) {
                case /^M\d{9}$/.test(a):
                case /^M-\d{4}-\d{4}-\d{1}$/.test(a):
                case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(a):
                    r = "ISMN10";
                    break;
                case /^9790\d{9}$/.test(a):
                case /^979-0-\d{4}-\d{4}-\d{1}$/.test(a):
                case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(a):
                    r = "ISMN13";
                    break;
                default:
                    return !1 } "ISMN10" === r && (a = "9790" + a.substr(1));
            for (var s = (a = a.replace(/[^0-9]/gi, "")).length, i = 0, n = [1, 3], o = 0; s - 1 > o; o++) i += parseInt(a.charAt(o), 10) * n[o % 2];
            return (i = 10 - i % 10) + "" === a.charAt(s - 1) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.issn = t.extend(t.fn.bootstrapValidator.i18n.issn || {}, { default: "Please enter a valid ISSN number" }), t.fn.bootstrapValidator.validators.issn = { validate: function(t, e) {
            var a = e.val();
            if ("" === a) return !0;
            if (!/^\d{4}\-\d{3}[\dX]$/.test(a)) return !1;
            var r = (a = a.replace(/[^0-9X]/gi, "")).split(""),
                s = r.length,
                i = 0; "X" === r[7] && (r[7] = 10);
            for (var n = 0; s > n; n++) i += parseInt(r[n], 10) * (8 - n);
            return i % 11 == 0 } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.lessThan = t.extend(t.fn.bootstrapValidator.i18n.lessThan || {}, { default: "Please enter a value less than or equal to %s", notInclusive: "Please enter a value less than %s" }), t.fn.bootstrapValidator.validators.lessThan = { html5Attributes: { message: "message", value: "value", inclusive: "inclusive" }, enableByHtml5: function(t) {
            var e = t.attr("type"),
                a = t.attr("max");
            return !(!a || "date" === e) && { value: a } }, validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            if (s = this._format(s), !t.isNumeric(s)) return !1;
            var i = t.isNumeric(r.value) ? r.value : e.getDynamicOption(a, r.value),
                n = this._format(i);
            return s = parseFloat(s), !0 === r.inclusive || void 0 === r.inclusive ? { valid: n >= s, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.lessThan.default, i) } : { valid: n > s, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.lessThan.notInclusive, i) } }, _format: function(t) {
            return (t + "").replace(",", ".") } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.mac = t.extend(t.fn.bootstrapValidator.i18n.mac || {}, { default: "Please enter a valid MAC address" }), t.fn.bootstrapValidator.validators.mac = { validate: function(t, e) {
            var a = e.val();
            return "" === a || /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(a) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.meid = t.extend(t.fn.bootstrapValidator.i18n.meid || {}, { default: "Please enter a valid MEID number" }), t.fn.bootstrapValidator.validators.meid = { validate: function(e, a) {
            var r = a.val();
            if ("" === r) return !0;
            switch (!0) {
                case /^[0-9A-F]{15}$/i.test(r):
                case /^[0-9A-F]{2}[-][0-9A-F]{6}[-][0-9A-F]{6}[-][0-9A-F]$/i.test(r):
                case /^\d{19}$/.test(r):
                case /^\d{5}[-]\d{5}[-]\d{4}[-]\d{4}[-]\d$/.test(r):
                    var s = r.charAt(r.length - 1);
                    if ((r = r.replace(/[- ]/g, "")).match(/^\d*$/i)) return t.fn.bootstrapValidator.helpers.luhn(r);
                    r = r.slice(0, -1);
                    for (var i = "", n = 1; 13 >= n; n += 2) i += (2 * parseInt(r.charAt(n), 16)).toString(16);
                    var o = 0;
                    for (n = 0; n < i.length; n++) o += parseInt(i.charAt(n), 16);
                    return o % 10 == 0 ? "0" === s : s === (2 * (10 * Math.floor((o + 10) / 10) - o)).toString(16);
                case /^[0-9A-F]{14}$/i.test(r):
                case /^[0-9A-F]{2}[-][0-9A-F]{6}[-][0-9A-F]{6}$/i.test(r):
                case /^\d{18}$/.test(r):
                case /^\d{5}[-]\d{5}[-]\d{4}[-]\d{4}$/.test(r):
                    return !0;
                default:
                    return !1 } } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.notEmpty = t.extend(t.fn.bootstrapValidator.i18n.notEmpty || {}, { default: "Please enter a value" }), t.fn.bootstrapValidator.validators.notEmpty = { enableByHtml5: function(t) {
            var e = t.attr("required") + "";
            return "required" === e || "true" === e }, validate: function(e, a) {
            var r = a.attr("type");
            return "radio" === r || "checkbox" === r ? e.getFieldElements(a.attr("data-bv-field")).filter(":checked").length > 0 : !("number" !== r || !a.get(0).validity || !0 !== a.get(0).validity.badInput) || "" !== t.trim(a.val()) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.numeric = t.extend(t.fn.bootstrapValidator.i18n.numeric || {}, { default: "Please enter a valid float number" }), t.fn.bootstrapValidator.validators.numeric = { html5Attributes: { message: "message", separator: "separator" }, enableByHtml5: function(t) {
            return "number" === t.attr("type") && void 0 !== t.attr("step") && t.attr("step") % 1 != 0 }, validate: function(t, e, a) {
            if (this.enableByHtml5(e) && e.get(0).validity && !0 === e.get(0).validity.badInput) return !1;
            var r = e.val();
            if ("" === r) return !0;
            var s = a.separator || ".";
            return "." !== s && (r = r.replace(s, ".")), !isNaN(parseFloat(r)) && isFinite(r) } } }(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.phone = t.extend(t.fn.bootstrapValidator.i18n.phone || {}, { default: "Please enter a valid phone number", countryNotSupported: "The country code %s is not supported", country: "Please enter a valid phone number in %s", countries: { GB: "United Kingdom", US: "USA" } }), t.fn.bootstrapValidator.validators.phone = {
        html5Attributes: { message: "message", country: "country" },
        COUNTRY_CODES: ["GB", "US"],
        validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            var i = r.country;
            if (("string" != typeof i || -1 === t.inArray(i, this.COUNTRY_CODES)) && (i = e.getDynamicOption(a, i)), !i || -1 === t.inArray(i.toUpperCase(), this.COUNTRY_CODES)) return { valid: !1, message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.phone.countryNotSupported, i) };
            var n = !0;
            switch (i.toUpperCase()) {
                case "GB":
                    s = t.trim(s), n = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(s);
                    break;
                case "US":
                default:
                    s = s.replace(/\D/g, ""), n = /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(s) && 10 === s.length }
            return { valid: n, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.phone.country, t.fn.bootstrapValidator.i18n.phone.countries[i]) }
        }
    }
}(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.regexp = t.extend(t.fn.bootstrapValidator.i18n.regexp || {}, { default: "Please enter a value matching the pattern" }), t.fn.bootstrapValidator.validators.regexp = { html5Attributes: { message: "message", regexp: "regexp" }, enableByHtml5: function(t) {
            var e = t.attr("pattern");
            return !!e && { regexp: e } }, validate: function(t, e, a) {
            var r = e.val();
            return "" === r || ("string" == typeof a.regexp ? new RegExp(a.regexp) : a.regexp).test(r) } } }(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.remote = t.extend(t.fn.bootstrapValidator.i18n.remote || {}, { default: "Please enter a valid value" }), t.fn.bootstrapValidator.validators.remote = {
        html5Attributes: { message: "message", name: "name", type: "type", url: "url", data: "data", delay: "delay" },
        destroy: function(t, e) { e.data("bv.remote.timer") && (clearTimeout(e.data("bv.remote.timer")), e.removeData("bv.remote.timer")) },
        validate: function(e, a, r) {
            function s() {
                var e = t.ajax({ type: u, headers: f, url: d, dataType: "json", data: l });
                return e.then(function(t) { t.valid = !0 === t.valid || "true" === t.valid, n.resolve(a, "remote", t) }), n.fail(function() { e.abort() }), n }
            var i = a.val(),
                n = new t.Deferred;
            if ("" === i) return n.resolve(a, "remote", { valid: !0 }), n;
            var o = a.attr("data-bv-field"),
                l = r.data || {},
                d = r.url,
                u = r.type || "GET",
                f = r.headers || {};
            return "function" == typeof l && (l = l.call(this, e)), "string" == typeof l && (l = JSON.parse(l)), "function" == typeof d && (d = d.call(this, e)), l[r.name || o] = i, r.delay ? (a.data("bv.remote.timer") && clearTimeout(a.data("bv.remote.timer")), a.data("bv.remote.timer", setTimeout(s, r.delay)), n) : s()
        }
    }
}(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.rtn = t.extend(t.fn.bootstrapValidator.i18n.rtn || {}, { default: "Please enter a valid RTN number" }), t.fn.bootstrapValidator.validators.rtn = { validate: function(t, e) {
            var a = e.val();
            if ("" === a) return !0;
            if (!/^\d{9}$/.test(a)) return !1;
            for (var r = 0, s = 0; s < a.length; s += 3) r += 3 * parseInt(a.charAt(s), 10) + 7 * parseInt(a.charAt(s + 1), 10) + parseInt(a.charAt(s + 2), 10);
            return 0 !== r && r % 10 == 0 } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.sedol = t.extend(t.fn.bootstrapValidator.i18n.sedol || {}, { default: "Please enter a valid SEDOL number" }), t.fn.bootstrapValidator.validators.sedol = { validate: function(t, e) {
            var a = e.val();
            if ("" === a) return !0;
            if (a = a.toUpperCase(), !/^[0-9A-Z]{7}$/.test(a)) return !1;
            for (var r = 0, s = [1, 3, 1, 7, 3, 9, 1], i = a.length, n = 0; i - 1 > n; n++) r += s[n] * parseInt(a.charAt(n), 36);
            return (r = (10 - r % 10) % 10) + "" === a.charAt(i - 1) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.siren = t.extend(t.fn.bootstrapValidator.i18n.siren || {}, { default: "Please enter a valid SIREN number" }), t.fn.bootstrapValidator.validators.siren = { validate: function(e, a) {
            var r = a.val();
            return "" === r || !!/^\d{9}$/.test(r) && t.fn.bootstrapValidator.helpers.luhn(r) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.siret = t.extend(t.fn.bootstrapValidator.i18n.siret || {}, { default: "Please enter a valid SIRET number" }), t.fn.bootstrapValidator.validators.siret = { validate: function(t, e) {
            var a = e.val();
            if ("" === a) return !0;
            for (var r, s = 0, i = a.length, n = 0; i > n; n++) r = parseInt(a.charAt(n), 10), n % 2 == 0 && (r *= 2) > 9 && (r -= 9), s += r;
            return s % 10 == 0 } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.step = t.extend(t.fn.bootstrapValidator.i18n.step || {}, { default: "Please enter a valid step of %s" }), t.fn.bootstrapValidator.validators.step = { html5Attributes: { message: "message", base: "baseValue", step: "step" }, validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            if (r = t.extend({}, { baseValue: 0, step: 1 }, r), s = parseFloat(s), !t.isNumeric(s)) return !1;
            var i = function(t, e) {
                    var a = Math.pow(10, e),
                        r = (t *= a) > 0 | -(0 > t);
                    return t % 1 == .5 * r ? (Math.floor(t) + (r > 0)) / a : Math.round(t) / a },
                n = function(t, e) {
                    if (0 === e) return 1;
                    var a = (t + "").split("."),
                        r = (e + "").split("."),
                        s = (1 === a.length ? 0 : a[1].length) + (1 === r.length ? 0 : r[1].length);
                    return i(t - e * Math.floor(t / e), s) }(s - r.baseValue, r.step);
            return { valid: 0 === n || n === r.step, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.step.default, [r.step]) } } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.stringCase = t.extend(t.fn.bootstrapValidator.i18n.stringCase || {}, { default: "Please enter only lowercase characters", upper: "Please enter only uppercase characters" }), t.fn.bootstrapValidator.validators.stringCase = { html5Attributes: { message: "message", case: "case" }, validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            var i = (r.case || "lower").toLowerCase();
            return { valid: "upper" === i ? s === s.toUpperCase() : s === s.toLowerCase(), message: r.message || ("upper" === i ? t.fn.bootstrapValidator.i18n.stringCase.upper : t.fn.bootstrapValidator.i18n.stringCase.default) } } } }(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.stringLength = t.extend(t.fn.bootstrapValidator.i18n.stringLength || {}, { default: "Please enter a value with valid length", less: "Please enter less than %s characters", more: "Please enter more than %s characters", between: "Please enter value between %s and %s characters long" }), t.fn.bootstrapValidator.validators.stringLength = {
        html5Attributes: { message: "message", min: "min", max: "max", trim: "trim", utf8bytes: "utf8Bytes" },
        enableByHtml5: function(e) {
            var a = {},
                r = e.attr("maxlength"),
                s = e.attr("minlength");
            return r && (a.max = parseInt(r, 10)), s && (a.min = parseInt(s, 10)), !t.isEmptyObject(a) && a },
        validate: function(e, a, r) {
            var s = a.val();
            if ((!0 === r.trim || "true" === r.trim) && (s = t.trim(s)), "" === s) return !0;
            var i = t.isNumeric(r.min) ? r.min : e.getDynamicOption(a, r.min),
                n = t.isNumeric(r.max) ? r.max : e.getDynamicOption(a, r.max),
                o = r.utf8Bytes ? function(t) {
                    for (var e = t.length, a = t.length - 1; a >= 0; a--) {
                        var r = t.charCodeAt(a);
                        r > 127 && 2047 >= r ? e++ : r > 2047 && 65535 >= r && (e += 2), r >= 56320 && 57343 >= r && a-- }
                    return e
                }(s) : s.length,
                l = !0,
                d = r.message || t.fn.bootstrapValidator.i18n.stringLength.default;
            switch ((i && o < parseInt(i, 10) || n && o > parseInt(n, 10)) && (l = !1), !0) {
                case !!i && !!n:
                    d = t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.stringLength.between, [parseInt(i, 10), parseInt(n, 10)]);
                    break;
                case !!i:
                    d = t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.stringLength.more, parseInt(i, 10));
                    break;
                case !!n:
                    d = t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.stringLength.less, parseInt(n, 10)) }
            return { valid: l, message: d }
        }
    }
}(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.uri = t.extend(t.fn.bootstrapValidator.i18n.uri || {}, { default: "Please enter a valid URI" }), t.fn.bootstrapValidator.validators.uri = { html5Attributes: { message: "message", allowlocal: "allowLocal", protocol: "protocol" }, enableByHtml5: function(t) {
            return "url" === t.attr("type") }, validate: function(t, e, a) {
            var r = e.val();
            if ("" === r) return !0;
            var s = !0 === a.allowLocal || "true" === a.allowLocal,
                i = (a.protocol || "http, https, ftp").split(",").join("|").replace(/\s/g, "");
            return new RegExp("^(?:(?:" + i + ")://)(?:\\S+(?::\\S*)?@)?(?:" + (s ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (s ? "?" : "") + ")(?::\\d{2,5})?(?:/[^\\s]*)?$", "i").test(r) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.uuid = t.extend(t.fn.bootstrapValidator.i18n.uuid || {}, { default: "Please enter a valid UUID number", version: "Please enter a valid UUID version %s number" }), t.fn.bootstrapValidator.validators.uuid = { html5Attributes: { message: "message", version: "version" }, validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            var i = { 3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i, 4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, 5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i },
                n = r.version ? r.version + "" : "all";
            return { valid: null === i[n] || i[n].test(s), message: r.version ? t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.uuid.version, r.version) : r.message || t.fn.bootstrapValidator.i18n.uuid.default } } } }(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.vat = t.extend(t.fn.bootstrapValidator.i18n.vat || {}, { default: "Please enter a valid VAT number", countryNotSupported: "The country code %s is not supported", country: "Please enter a valid VAT number in %s", countries: { AT: "Austria", BE: "Belgium", BG: "Bulgaria", BR: "Brazil", CH: "Switzerland", CY: "Cyprus", CZ: "Czech Republic", DE: "Germany", DK: "Denmark", EE: "Estonia", ES: "Spain", FI: "Finland", FR: "France", GB: "United Kingdom", GR: "Greek", EL: "Greek", HU: "Hungary", HR: "Croatia", IE: "Ireland", IS: "Iceland", IT: "Italy", LT: "Lithuania", LU: "Luxembourg", LV: "Latvia", MT: "Malta", NL: "Netherlands", NO: "Norway", PL: "Poland", PT: "Portugal", RO: "Romania", RU: "Russia", RS: "Serbia", SE: "Sweden", SI: "Slovenia", SK: "Slovakia", VE: "Venezuela", ZA: "South Africa" } }), t.fn.bootstrapValidator.validators.vat = {
        html5Attributes: { message: "message", country: "country" },
        COUNTRY_CODES: ["AT", "BE", "BG", "BR", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "RS", "SE", "SK", "SI", "VE", "ZA"],
        validate: function(e, a, r) {
            var s = a.val();
            if ("" === s) return !0;
            var i = r.country;
            return i ? ("string" != typeof i || -1 === t.inArray(i.toUpperCase(), this.COUNTRY_CODES)) && (i = e.getDynamicOption(a, i)) : i = s.substr(0, 2), -1 === t.inArray(i, this.COUNTRY_CODES) ? { valid: !1, message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.vat.countryNotSupported, i) } : !!this[["_", i.toLowerCase()].join("")](s) || { valid: !1, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.vat.country, t.fn.bootstrapValidator.i18n.vat.countries[i.toUpperCase()]) } },
        _at: function(t) {
            if (/^ATU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^U[0-9]{8}$/.test(t)) return !1;
            t = t.substr(1);
            for (var e = 0, a = [1, 2, 1, 2, 1, 2, 1], r = 0, s = 0; 7 > s; s++)(r = parseInt(t.charAt(s), 10) * a[s]) > 9 && (r = Math.floor(r / 10) + r % 10), e += r;
            return 10 === (e = 10 - (e + 4) % 10) && (e = 0), e + "" === t.substr(7, 1) },
        _be: function(t) {
            return /^BE[0]{0,1}[0-9]{9}$/.test(t) && (t = t.substr(2)), !!/^[0]{0,1}[0-9]{9}$/.test(t) && (9 === t.length && (t = "0" + t), "0" !== t.substr(1, 1) && (parseInt(t.substr(0, 8), 10) + parseInt(t.substr(8, 2), 10)) % 97 == 0) },
        _bg: function(e) {
            if (/^BG[0-9]{9,10}$/.test(e) && (e = e.substr(2)), !/^[0-9]{9,10}$/.test(e)) return !1;
            var a = 0,
                r = 0;
            if (9 === e.length) {
                for (r = 0; 8 > r; r++) a += parseInt(e.charAt(r), 10) * (r + 1);
                if (10 === (a %= 11))
                    for (a = 0, r = 0; 8 > r; r++) a += parseInt(e.charAt(r), 10) * (r + 3);
                return (a %= 10) + "" === e.substr(8)
            }
            if (10 === e.length) {
                return function(e) {
                    var a = parseInt(e.substr(0, 2), 10) + 1900,
                        r = parseInt(e.substr(2, 2), 10),
                        s = parseInt(e.substr(4, 2), 10);
                    if (r > 40 ? (a += 100, r -= 40) : r > 20 && (a -= 100, r -= 20), !t.fn.bootstrapValidator.helpers.date(a, r, s)) return !1;
                    for (var i = 0, n = [2, 4, 8, 5, 10, 9, 7, 3, 6], o = 0; 9 > o; o++) i += parseInt(e.charAt(o), 10) * n[o];
                    return (i = i % 11 % 10) + "" === e.substr(9, 1) }(e) || function(t) {
                    for (var e = 0, a = [21, 19, 17, 13, 11, 9, 7, 3, 1], r = 0; 9 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
                    return (e %= 10) + "" === t.substr(9, 1) }(e) || function(t) {
                    for (var e = 0, a = [4, 3, 2, 7, 6, 5, 4, 3, 2], r = 0; 9 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
                    return 10 !== (e = 11 - e % 11) && (11 === e && (e = 0), e + "" === t.substr(9, 1)) }(e) }
            return !1
        },
        _br: function(t) {
            if ("" === t) return !0;
            var e = t.replace(/[^\d]+/g, "");
            if ("" === e || 14 !== e.length) return !1;
            if ("00000000000000" === e || "11111111111111" === e || "22222222222222" === e || "33333333333333" === e || "44444444444444" === e || "55555555555555" === e || "66666666666666" === e || "77777777777777" === e || "88888888888888" === e || "99999999999999" === e) return !1;
            for (var a = e.length - 2, r = e.substring(0, a), s = e.substring(a), i = 0, n = a - 7, o = a; o >= 1; o--) i += parseInt(r.charAt(a - o), 10) * n--, 2 > n && (n = 9);
            var l = 2 > i % 11 ? 0 : 11 - i % 11;
            if (l !== parseInt(s.charAt(0), 10)) return !1;
            for (a += 1, r = e.substring(0, a), i = 0, n = a - 7, o = a; o >= 1; o--) i += parseInt(r.charAt(a - o), 10) * n--, 2 > n && (n = 9);
            return (l = 2 > i % 11 ? 0 : 11 - i % 11) === parseInt(s.charAt(1), 10) },
        _ch: function(t) {
            if (/^CHE[0-9]{9}(MWST)?$/.test(t) && (t = t.substr(2)), !/^E[0-9]{9}(MWST)?$/.test(t)) return !1;
            t = t.substr(1);
            for (var e = 0, a = [5, 4, 3, 2, 7, 6, 5, 4], r = 0; 8 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return 10 !== (e = 11 - e % 11) && (11 === e && (e = 0), e + "" === t.substr(8, 1)) },
        _cy: function(t) {
            if (/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t) && (t = t.substr(2)), !/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t)) return !1;
            if ("12" === t.substr(0, 2)) return !1;
            for (var e = 0, a = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21 }, r = 0; 8 > r; r++) {
                var s = parseInt(t.charAt(r), 10);
                r % 2 == 0 && (s = a[s + ""]), e += s }
            return (e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" [e % 26]) + "" === t.substr(8, 1)
        },
        _cz: function(e) {
            if (/^CZ[0-9]{8,10}$/.test(e) && (e = e.substr(2)), !/^[0-9]{8,10}$/.test(e)) return !1;
            var a = 0,
                r = 0;
            if (8 === e.length) {
                if (e.charAt(0) + "" == "9") return !1;
                for (a = 0, r = 0; 7 > r; r++) a += parseInt(e.charAt(r), 10) * (8 - r);
                return 10 === (a = 11 - a % 11) && (a = 0), 11 === a && (a = 1), a + "" === e.substr(7, 1) }
            if (9 === e.length && e.charAt(0) + "" == "6") {
                for (a = 0, r = 0; 7 > r; r++) a += parseInt(e.charAt(r + 1), 10) * (8 - r);
                return 10 === (a = 11 - a % 11) && (a = 0), 11 === a && (a = 1), (a = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][a - 1]) + "" === e.substr(8, 1) }
            if (9 === e.length || 10 === e.length) {
                var s = 1900 + parseInt(e.substr(0, 2), 10),
                    i = parseInt(e.substr(2, 2), 10) % 50 % 20,
                    n = parseInt(e.substr(4, 2), 10);
                if (9 === e.length) {
                    if (s >= 1980 && (s -= 100), s > 1953) return !1 } else 1954 > s && (s += 100);
                if (!t.fn.bootstrapValidator.helpers.date(s, i, n)) return !1;
                if (10 === e.length) {
                    var o = parseInt(e.substr(0, 9), 10) % 11;
                    return 1985 > s && (o %= 10), o + "" === e.substr(9, 1) }
                return !0
            }
            return !1
        },
        _de: function(e) {
            return /^DE[0-9]{9}$/.test(e) && (e = e.substr(2)), !!/^[0-9]{9}$/.test(e) && t.fn.bootstrapValidator.helpers.mod11And10(e) },
        _dk: function(t) {
            if (/^DK[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1;
            for (var e = 0, a = [2, 7, 6, 5, 4, 3, 2, 1], r = 0; 8 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return e % 11 == 0 },
        _ee: function(t) {
            if (/^EE[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1;
            for (var e = 0, a = [3, 7, 1, 3, 7, 1, 3, 7, 1], r = 0; 9 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return e % 10 == 0 },
        _es: function(t) {
            if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t) && (t = t.substr(2)), !/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t)) return !1;
            var e = t.charAt(0);
            return /^[0-9]$/.test(e) ? function(t) {
                var e = parseInt(t.substr(0, 8), 10);
                return (e = "TRWAGMYFPDXBNJZSQVHLCKE" [e % 23]) + "" === t.substr(8, 1) }(t) : /^[XYZ]$/.test(e) ? function(t) {
                var e = ["XYZ".indexOf(t.charAt(0)), t.substr(1)].join("");
                return e = parseInt(e, 10), (e = "TRWAGMYFPDXBNJZSQVHLCKE" [e % 23]) + "" === t.substr(8, 1) }(t) : function(t) {
                var e, a = t.charAt(0);
                if (-1 !== "KLM".indexOf(a)) return e = parseInt(t.substr(1, 8), 10), (e = "TRWAGMYFPDXBNJZSQVHLCKE" [e % 23]) + "" === t.substr(8, 1);
                if (-1 !== "ABCDEFGHJNPQRSUVW".indexOf(a)) {
                    for (var r = 0, s = [2, 1, 2, 1, 2, 1, 2], i = 0, n = 0; 7 > n; n++)(i = parseInt(t.charAt(n + 1), 10) * s[n]) > 9 && (i = Math.floor(i / 10) + i % 10), r += i;
                    return (r = 10 - r % 10) + "" === t.substr(8, 1) || "JABCDEFGHI" [r] === t.substr(8, 1) }
                return !1
            }(t)
        },
        _fi: function(t) {
            if (/^FI[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1;
            for (var e = 0, a = [7, 9, 10, 5, 8, 4, 2, 1], r = 0; 8 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return e % 11 == 0 },
        _fr: function(e) {
            if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(e) && (e = e.substr(2)), !/^[0-9A-Z]{2}[0-9]{9}$/.test(e)) return !1;
            if (!t.fn.bootstrapValidator.helpers.luhn(e.substr(2))) return !1;
            if (/^[0-9]{2}$/.test(e.substr(0, 2))) return e.substr(0, 2) === parseInt(e.substr(2) + "12", 10) % 97 + "";
            var a, r = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";
            return a = /^[0-9]{1}$/.test(e.charAt(0)) ? 24 * r.indexOf(e.charAt(0)) + r.indexOf(e.charAt(1)) - 10 : 34 * r.indexOf(e.charAt(0)) + r.indexOf(e.charAt(1)) - 100, (parseInt(e.substr(2), 10) + 1 + Math.floor(a / 11)) % 11 == a % 11 },
        _gb: function(t) {
            if ((/^GB[0-9]{9}$/.test(t) || /^GB[0-9]{12}$/.test(t) || /^GBGD[0-9]{3}$/.test(t) || /^GBHA[0-9]{3}$/.test(t) || /^GB(GD|HA)8888[0-9]{5}$/.test(t)) && (t = t.substr(2)), !(/^[0-9]{9}$/.test(t) || /^[0-9]{12}$/.test(t) || /^GD[0-9]{3}$/.test(t) || /^HA[0-9]{3}$/.test(t) || /^(GD|HA)8888[0-9]{5}$/.test(t))) return !1;
            var e = t.length;
            if (5 === e) {
                var a = t.substr(0, 2),
                    r = parseInt(t.substr(2), 10);
                return "GD" === a && 500 > r || "HA" === a && r >= 500 }
            if (11 === e && ("GD8888" === t.substr(0, 6) || "HA8888" === t.substr(0, 6))) return !("GD" === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) >= 500 || "HA" === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) < 500) && parseInt(t.substr(6, 3), 10) % 97 === parseInt(t.substr(9, 2), 10);
            if (9 === e || 12 === e) {
                for (var s = 0, i = [8, 7, 6, 5, 4, 3, 2, 10, 1], n = 0; 9 > n; n++) s += parseInt(t.charAt(n), 10) * i[n];
                return s %= 97, parseInt(t.substr(0, 3), 10) >= 100 ? 0 === s || 42 === s || 55 === s : 0 === s }
            return !0
        },
        _gr: function(t) {
            if (/^(GR|EL)[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1;
            8 === t.length && (t = "0" + t);
            for (var e = 0, a = [256, 128, 64, 32, 16, 8, 4, 2], r = 0; 8 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return (e = e % 11 % 10) + "" === t.substr(8, 1) },
        _el: function(t) {
            return this._gr(t) },
        _hu: function(t) {
            if (/^HU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1;
            for (var e = 0, a = [9, 7, 3, 1, 9, 7, 3, 1], r = 0; 8 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return e % 10 == 0 },
        _hr: function(e) {
            return /^HR[0-9]{11}$/.test(e) && (e = e.substr(2)), !!/^[0-9]{11}$/.test(e) && t.fn.bootstrapValidator.helpers.mod11And10(e) },
        _ie: function(t) {
            if (/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t) && (t = t.substr(2)), !/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t)) return !1;
            var e = function(t) {
                for (; t.length < 7;) t = "0" + t;
                for (var e = "WABCDEFGHIJKLMNOPQRSTUV", a = 0, r = 0; 7 > r; r++) a += parseInt(t.charAt(r), 10) * (8 - r);
                return a += 9 * e.indexOf(t.substr(7)), e[a % 23] };
            return /^[0-9]+$/.test(t.substr(0, 7)) ? t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "") : -1 === "ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(t.charAt(1)) || t.charAt(7) === e(t.substr(2, 5) + t.substr(0, 1) + "") },
        _is: function(t) {
            return /^IS[0-9]{5,6}$/.test(t) && (t = t.substr(2)), /^[0-9]{5,6}$/.test(t) },
        _it: function(e) {
            if (/^IT[0-9]{11}$/.test(e) && (e = e.substr(2)), !/^[0-9]{11}$/.test(e)) return !1;
            if (0 === parseInt(e.substr(0, 7), 10)) return !1;
            var a = parseInt(e.substr(7, 3), 10);
            return !(1 > a || a > 201 && 999 !== a && 888 !== a) && t.fn.bootstrapValidator.helpers.luhn(e) },
        _lt: function(t) {
            if (/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t) && (t = t.substr(2)), !/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t)) return !1;
            var e, a = t.length,
                r = 0;
            for (e = 0; a - 1 > e; e++) r += parseInt(t.charAt(e), 10) * (1 + e % 9);
            var s = r % 11;
            if (10 === s)
                for (r = 0, e = 0; a - 1 > e; e++) r += parseInt(t.charAt(e), 10) * (1 + (e + 2) % 9);
            return (s = s % 11 % 10) + "" === t.charAt(a - 1)
        },
        _lu: function(t) {
            return /^LU[0-9]{8}$/.test(t) && (t = t.substr(2)), !!/^[0-9]{8}$/.test(t) && parseInt(t.substr(0, 6), 10) % 89 + "" === t.substr(6, 2) },
        _lv: function(e) {
            if (/^LV[0-9]{11}$/.test(e) && (e = e.substr(2)), !/^[0-9]{11}$/.test(e)) return !1;
            var a, r = parseInt(e.charAt(0), 10),
                s = 0,
                i = [],
                n = e.length;
            if (r > 3) {
                for (s = 0, i = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1], a = 0; n > a; a++) s += parseInt(e.charAt(a), 10) * i[a];
                return 3 === (s %= 11) }
            var o = parseInt(e.substr(0, 2), 10),
                l = parseInt(e.substr(2, 2), 10),
                d = parseInt(e.substr(4, 2), 10);
            if (d = d + 1800 + 100 * parseInt(e.charAt(6), 10), !t.fn.bootstrapValidator.helpers.date(d, l, o)) return !1;
            for (s = 0, i = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], a = 0; n - 1 > a; a++) s += parseInt(e.charAt(a), 10) * i[a];
            return (s = (s + 1) % 11 % 10) + "" === e.charAt(n - 1)
        },
        _mt: function(t) {
            if (/^MT[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1;
            for (var e = 0, a = [3, 4, 6, 7, 8, 9, 10, 1], r = 0; 8 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return e % 37 == 0 },
        _nl: function(t) {
            if (/^NL[0-9]{9}B[0-9]{2}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}B[0-9]{2}$/.test(t)) return !1;
            for (var e = 0, a = [9, 8, 7, 6, 5, 4, 3, 2], r = 0; 8 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return (e %= 11) > 9 && (e = 0), e + "" === t.substr(8, 1) },
        _no: function(t) {
            if (/^NO[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1;
            for (var e = 0, a = [3, 2, 7, 6, 5, 4, 3, 2], r = 0; 8 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return 11 === (e = 11 - e % 11) && (e = 0), e + "" === t.substr(8, 1) },
        _pl: function(t) {
            if (/^PL[0-9]{10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{10}$/.test(t)) return !1;
            for (var e = 0, a = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], r = 0; 10 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return e % 11 == 0 },
        _pt: function(t) {
            if (/^PT[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1;
            for (var e = 0, a = [9, 8, 7, 6, 5, 4, 3, 2], r = 0; 8 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return (e = 11 - e % 11) > 9 && (e = 0), e + "" === t.substr(8, 1) },
        _ro: function(t) {
            if (/^RO[1-9][0-9]{1,9}$/.test(t) && (t = t.substr(2)), !/^[1-9][0-9]{1,9}$/.test(t)) return !1;
            for (var e = t.length, a = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - e), r = 0, s = 0; e - 1 > s; s++) r += parseInt(t.charAt(s), 10) * a[s];
            return (r = 10 * r % 11 % 10) + "" === t.substr(e - 1, 1) },
        _ru: function(t) {
            if (/^RU([0-9]{10}|[0-9]{12})$/.test(t) && (t = t.substr(2)), !/^([0-9]{10}|[0-9]{12})$/.test(t)) return !1;
            var e = 0;
            if (10 === t.length) {
                var a = 0,
                    r = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                for (e = 0; 10 > e; e++) a += parseInt(t.charAt(e), 10) * r[e];
                return (a %= 11) > 9 && (a %= 10), a + "" === t.substr(9, 1) }
            if (12 === t.length) {
                var s = 0,
                    i = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
                    n = 0,
                    o = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                for (e = 0; 11 > e; e++) s += parseInt(t.charAt(e), 10) * i[e], n += parseInt(t.charAt(e), 10) * o[e];
                return (s %= 11) > 9 && (s %= 10), (n %= 11) > 9 && (n %= 10), s + "" === t.substr(10, 1) && n + "" === t.substr(11, 1) }
            return !1
        },
        _rs: function(t) {
            if (/^RS[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1;
            for (var e = 10, a = 0, r = 0; 8 > r; r++) 0 === (a = (parseInt(t.charAt(r), 10) + e) % 10) && (a = 10), e = 2 * a % 11;
            return (e + parseInt(t.substr(8, 1), 10)) % 10 == 1 },
        _se: function(e) {
            return /^SE[0-9]{10}01$/.test(e) && (e = e.substr(2)), !!/^[0-9]{10}01$/.test(e) && (e = e.substr(0, 10), t.fn.bootstrapValidator.helpers.luhn(e)) },
        _si: function(t) {
            if (/^SI[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1;
            for (var e = 0, a = [8, 7, 6, 5, 4, 3, 2], r = 0; 7 > r; r++) e += parseInt(t.charAt(r), 10) * a[r];
            return 10 === (e = 11 - e % 11) && (e = 0), e + "" === t.substr(7, 1) },
        _sk: function(t) {
            return /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && (t = t.substr(2)), !!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && parseInt(t, 10) % 11 == 0 },
        _ve: function(t) {
            if (/^VE[VEJPG][0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[VEJPG][0-9]{9}$/.test(t)) return !1;
            for (var e = { V: 4, E: 8, J: 12, P: 16, G: 20 }[t.charAt(0)], a = [3, 2, 7, 6, 5, 4, 3, 2], r = 0; 8 > r; r++) e += parseInt(t.charAt(r + 1), 10) * a[r];
            return (11 === (e = 11 - e % 11) || 10 === e) && (e = 0), e + "" === t.substr(9, 1) },
        _za: function(t) {
            return /^ZA4[0-9]{9}$/.test(t) && (t = t.substr(2)), /^4[0-9]{9}$/.test(t) }
    }
}(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.vin = t.extend(t.fn.bootstrapValidator.i18n.vin || {}, { default: "Please enter a valid VIN number" }), t.fn.bootstrapValidator.validators.vin = { validate: function(t, e) {
            var a = e.val();
            if ("" === a) return !0;
            if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(a)) return !1;
            for (var r = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, J: 1, K: 2, L: 3, M: 4, N: 5, P: 7, R: 9, S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0 }, s = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], i = 0, n = (a = a.toUpperCase()).length, o = 0; n > o; o++) i += r[a.charAt(o) + ""] * s[o];
            var l = i % 11;
            return 10 === l && (l = "X"), l + "" === a.charAt(8) } } }(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.zipCode = t.extend(t.fn.bootstrapValidator.i18n.zipCode || {}, { default: "Please enter a valid postal code", countryNotSupported: "The country code %s is not supported", country: "Please enter a valid postal code in %s", countries: { CA: "Canada", GB: "United Kingdom", IE: "Ireland", US: "USA" } }), t.fn.bootstrapValidator.validators.zipCode = {
        html5Attributes: { message: "message", country: "country" },
        COUNTRY_CODES: ["CA", "GB", "IE", "US"],
        validate: function(e, a, r) {
            var s = a.val();
            if ("" === s || !r.country) return !0;
            var i = r.country;
            if (("string" != typeof i || -1 === t.inArray(i, this.COUNTRY_CODES)) && (i = e.getDynamicOption(a, i)), !i || -1 === t.inArray(i.toUpperCase(), this.COUNTRY_CODES)) return { valid: !1, message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.zipCode.countryNotSupported, i) };
            var n = !1;
            switch (i = i.toUpperCase()) {
                case "CA":
                    n = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(s);
                    break;
                case "GB":
                    n = this._gb(s);
                    break;
                case "IE":
                    n = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(s);
                    break;
                case "US":
                default:
                    n = /^\d{4,5}([\-]?\d{4})?$/.test(s) }
            return { valid: n, message: t.fn.bootstrapValidator.helpers.format(r.message || t.fn.bootstrapValidator.i18n.zipCode.country, t.fn.bootstrapValidator.i18n.zipCode.countries[i]) }
        },
        _gb: function(t) {
            for (var e = "[ABCDEFGHIJKLMNOPRSTUWYZ]", a = "[ABCDEFGHKLMNOPQRSTUVWXY]", r = "[ABDEFGHJLNPQRSTUWXYZ]", s = [new RegExp("^(" + e + "{1}" + a + "?[0-9]{1,2})(\\s*)([0-9]{1}" + r + "{2})$", "i"), new RegExp("^(" + e + "{1}[0-9]{1}[ABCDEFGHJKPMNRSTUVWXY]{1})(\\s*)([0-9]{1}" + r + "{2})$", "i"), new RegExp("^(" + e + "{1}" + a + "{1}?[0-9]{1}[ABEHMNPRVWXY]{1})(\\s*)([0-9]{1}" + r + "{2})$", "i"), new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$", "i"), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i], i = 0; i < s.length; i++)
                if (s[i].test(t)) return !0;
            return !1
        }
    }
}(window.jQuery);
$(document).ready(function() { $('#contact_form').bootstrapValidator({ feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-refresh' }, fields: { first_name: { validators: { stringLength: { min: 2, }, notEmpty: { message: 'Please supply your first name' } } }, last_name: { validators: { stringLength: { min: 2, }, notEmpty: { message: 'Please supply your last name' } } }, email: { validators: { notEmpty: { message: 'Please supply your email address' }, emailAddress: { message: 'Please supply a valid email address' } } }, phone: { validators: { notEmpty: { message: 'Please supply your phone number' }, phone: { country: 'GB', message: 'Please supply a vaild phone number with area code' } } }, comment: { validators: { stringLength: { min: 10, max: 1000, message: 'Please enter at least 10 characters and no more than 1000' }, notEmpty: { message: 'Please enter your message in the message box' } } } } }).on('success.form.bv', function(e) { $('#success_message').slideDown('fast').delay(1000).fadeOut('slow').delay(7000).$('#contact_form').data('bootstrapValidator').resetForm();
        e.preventDefault();
        var $form = $(e.target);
        var bv = $form.data('bootstrapValidator');
        $.post($form.attr('action'), $form.serialize(), function(result) { console.log(result); }, 'json'); });
$('[data-toggle="tooltip"]').tooltip();

noevent = function(e) {
        e.preventDefault();
    }
      
});
