if (self.CavalryLogger) {
    CavalryLogger.start_js(["HAS1R"]);
}

__d("ComposerSourceSurface", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        FEED: "feed",
        TIMELINE: "timeline",
        PAGE: "page",
        GROUP: "group",
        FOR_SALE_GROUP: "for_sale_group",
        EVENT: "event",
        FUNDRAISER: "fundraiser",
        SOCIAL_BALLOT: "social_ballot",
        UNKNOWN: "unknown"
    };
}, null);
__d("ComposerTargetType", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        SELF_USER: "feed",
        OTHER_USER: "wall",
        GROUP: "group",
        PAGE: "page",
        EVENT: "event",
        RECOMMENDATION: "recommendation",
        FUNDRAISER: "fundraiser",
        EXAMPLE: "example",
        MARKETPLACE: "marketplace"
    };
}, null);
__d("ComposerType", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        STATUS: "status",
        RESHARE: "reshare",
        PHOTO: "photo",
        VIDEO: "video",
        INLINE: "inline",
        ADVANCED: "advanced"
    };
}, null);
__d("ComposerVersion", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        MBASIC_LEGACY: "legacy",
        MBASIC_AMBER: "amber",
        MBASIC_LEGACY_SHARE: "legacy_share",
        MBASIC_AMBER_SHARE: "amber_share",
        WWW_LEGACY: "www_legacy",
        WWW_REACT: "www_react",
        WWW_REACT_WORK: "www_react_work",
        WWW_REACT_SHARE: "www_react_share",
        WWW_REACT_SHARER: "www_react_sharer"
    };
}, null);
__d("ComposerWaterfallEvent", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        COMPOSER_CANCEL: "composer_cancel",
        COMPOSER_CANCEL_INTENT: "intent_composer_cancel",
        COMPOSER_ENTRY: "composer_entry",
        COMPOSER_NOT_RENDERED: "composer_not_renderer",
        COMPOSER_POST: "composer_post",
        COMPOSER_POST_CANCEL: "composer_post_cancel",
        COMPOSER_POST_FAILURE: "composer_post_failure",
        COMPOSER_POST_FAILURE_FATAL: "composer_post_fatal_failure",
        COMPOSER_POST_FAILURE_GIVEUP: "composer_post_giveup_failure",
        COMPOSER_POST_SUCCESS: "composer_post_success",
        COMPOSER_POST_COMPLETED: "composer_post_completed",
        COMPOSER_WRITTEN: "composer_written",
        ALBUM_ADD: "add_album",
        ALBUM_CANCEL: "cancel_album",
        ALBUM_INTENT: "intent_album",
        ALBUM_REMOVE: "remove_album",
        FRIEND_TAG_ADD: "add_friend_tag",
        FRIEND_TAG_CANCEL: "cancel_friend_tag",
        FRIEND_TAG_INTENT: "intent_friend_tag",
        FRIEND_TAG_REMOVE: "remove_friend_tag",
        FRIEND_TAG_SEARCH: "search_friend_tag",
        FRIEND_SHOW_MORE: "show_more_friend_tag",
        LOCATION_ADD: "add_location",
        LOCATION_CANCEL: "cancel_location",
        LOCATION_INTENT: "intent_location",
        LOCATION_REMOVE: "remove_location",
        LOCATION_SCROLL: "scroll_location",
        LOCATION_SEARCH: "search_location",
        EMBEDS_ADD: "add_embed",
        EMBEDS_CANCEL: "cancel_embed",
        EMBEDS_INTENT: "intent_embed",
        MINUTIAE_ADD: "add_minutiae",
        MINUTIAE_CANCEL: "cancel_minutiae",
        MINUTIAE_CHANGE_ICON: "change_icon_minutiae",
        MINUTIAE_CHANGE_ICON_CANCEL: "change_icon_cancel_minutiae",
        MINUTIAE_CHANGE_ICON_INTENT: "change_icon_intent_minutiae",
        MINUTIAE_CHANGE_ICON_SEARCH: "change_icon_search_minutiae",
        MINUTIAE_INTENT: "intent_minutiae",
        MINUTIAE_REMOVE: "remove_minutiae",
        MINUTIAE_SCROLL: "scroll_minutiae",
        MINUTIAE_SEARCH: "search_minutiae",
        MINUTIAE_TYPE_CLICK: "type_click_minutiae",
        MINUTIAE_SEE_MORE: "see_more_minutiae",
        MINUTIAE_CHAIN_SKIP: "skip_chain_minutiae",
        MINUTIAE_CHAIN_SUGGEST: "suggest_chain_minutiae",
        MINUTIAE_ICONPICKER_QUERY: "minutiae_iconpicker_query",
        MINUTIAE_ICONPICKER_BOOTSTRAP: "minutiae_iconpicker_bootstrap",
        MINUTIAE_ICONPICKER_SELECT: "minutiae_iconpicker_select",
        MARKDOWN_INTENT: "markdown_intent",
        MEDIA_INTENT: "intent_media",
        MEDIA_CANCEL: "cancel_media",
        PHOTO_ADD: "add_photo",
        PHOTO_ADD_FAILURE: "add_photo_failure",
        PHOTO_ADD_SUCCESS: "add_photo_success",
        PHOTO_REMOVE: "remove_photo",
        PRIVACY_ADD: "add_privacy",
        PRIVACY_CANCEL: "cancel_privacy",
        PRIVACY_INTENT: "intent_privacy",
        PRIVACY_SCROLL: "scroll_privacy",
        PRIVACY_SEE_ALL_LISTS: "see_all_lists_privacy",
        SELECT_FRIEND_TIMELINE_INTENT: "intent_select_friend_timeline",
        SELECT_FRIEND_TIMELINE_ADD: "add_select_friend_timeline",
        SELECT_FRIEND_TIMELINE_CANCEL: "cancel_select_friend_timeline",
        SERVER_POST_BEGIN: "server_composer_post_begin",
        SERVER_POST_FAILURE: "server_composer_post_failure",
        SERVER_POST_SUCCESS: "server_composer_post_succeeded",
        POST_POST_WITH_TAG_BEGIN: "post_post_with_tag_begin",
        POST_POST_WITH_TAG_FAILURE: "post_post_with_tag_failure",
        POST_POST_WITH_TAG_SUCCESS: "post_post_with_tag_success",
        SLIDESHOW_INTENT: "intent_slideshow",
        SLIDESHOW_CANCEL: "cancel_slideshow",
        SLIDESHOW_POST: "post_slideshow",
        SLIDESHOW_PREVIEW_INTENT: "intent_slideshow_preview",
        SLIDESHOW_PREVIEW_CANCEL: "cancel_slideshow_preview",
        TARGET_SELECTOR_INTENT: "intent_target_selector",
        TARGET_SELECTOR_CANCEL: "cancel_target_selector",
        VIDEO_ADD: "add_video",
        VIDEO_ADD_FAILURE: "add_video_failure",
        VIDEO_ADD_SUCCESS: "add_video_success",
        VIDEO_REMOVE: "remove_video"
    };
}, null);
__d("ProfileIntroCardTestID", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        BIO_TEXT: "profile_intro_card_bio_text",
        DELETE_PHOTO_BUTTON: "profile_intro_card_delete_photo_button",
        DIALOG_ROOT: "profile_intro_card_dialog_root",
        EDIT_BIO_BUTTON: "profile_intro_card_edit_bio_button",
        EDIT_BIO_TEXT_AREA: "profile_intro_card_edit_bio_text_area",
        EDIT_PHOTO_CONTAINER: "profile_intro_card_edit_photo_container",
        EDIT_PHOTO_PLACEHOLDER: "profile_intro_card_edit_photo_placeholder",
        EDIT_PHOTOS_BUTTON: "profile_intro_card_edit_photos_button",
        EDIT_PHOTOS_PENCIL_BUTTON: "profile_intro_card_edit_photos_pencil_button",
        PHOTO_COLLAGE: "profile_intro_card_photo_collage",
        PHOTO_NUX: "profile_intro_card_photo_nux",
        PHOTO_NUX_CLOSE_BUTTON: "profile_intro_card_photo_nux_close_button",
        ROOT: "profile_intro_card_root",
        SAVE_BIO_BUTTON: "profile_intro_card_save_bio_button",
        SAVE_PHOTOS_BUTTON: "profile_intro_card_save_photos_button"
    };
}, null);
__d("ShareModeConst", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        SELF_PAGE: "selfpage",
        PAGE: "page",
        SELF_POST: "self",
        FRIEND: "friend",
        GROUP: "group",
        ALBUM: "album",
        MESSAGE: "message",
        ONE_CLICK: "oneclick",
        EVENT: "event",
        UNKNOWN: "unknown",
        OWN_POST: "own"
    };
}, null);
__d("ComposerTargetData", [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i, j, k, l) {
        "use strict";
        this.targetID = i;
        this.targetSupportsMultiplePhotos = j;
        this.viewerIsTarget = k;
        this.targetSupportsMultiMedia = l;
    }
    f.exports = h;
}, null);
__d('ComposerXStore', ['Arbiter', 'ge'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {};

    function i(k, l) {
        return 'ComposerX/' + k + '/' + l;
    }
    var j = {
        set: function(k, l, m) {
            if (!h[k]) h[k] = {};
            h[k][l] = m;
            c('Arbiter').inform(i(k, l), {}, c('Arbiter').BEHAVIOR_STATE);
        },
        get: function(k, l) {
            if (h[k]) return h[k][l];
            return null;
        },
        getAllForComposer: function(k) {
            return h[k] || {};
        },
        waitForComponents: function(k, l, m) {
            c('Arbiter').registerCallback(m, l.map(i.bind(null, k)));
        }
    };
    c('Arbiter').subscribe('page_transition', function() {
        for (var k in h)
            if (!c('ge')(k)) delete h[k];
    });
    f.exports = j;
}, null);
__d('fileSliceName', ['UserAgent_DEPRECATED'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = 'slice',
        i;
    if (i = c('UserAgent_DEPRECATED').chrome()) {
        if (i < 21) h = 'webkitSlice';
    } else if (i = c('UserAgent_DEPRECATED').firefox()) {
        if (i < 13) h = 'mozSlice';
    } else if (!(i = c('UserAgent_DEPRECATED').safari()))
        if (c('UserAgent_DEPRECATED').webkit()) h = 'webkitSlice';
    f.exports = h;
}, null);
__d('fileSlice', ['fileSliceName'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = b.File && b.File.prototype[c('fileSliceName')];
    f.exports = h;
}, null);
__d('VideoUploadFeatureDetector', ['UserAgent_DEPRECATED', 'fileSlice'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        supportsChunking: function() {
            return typeof c('fileSlice') === 'function' && this.supportsXHR();
        },
        supportsFullProgress: function() {
            return !c('UserAgent_DEPRECATED').firefox();
        },
        supportsFileAPI: function() {
            return 'FileList' in window;
        },
        supportsFileReading: function() {
            return 'FileReader' in window && 'DataView' in window;
        },
        supportsXHR: function() {
            return 'FormData' in window;
        }
    };
    f.exports = h;
}, null);
__d('ComposerXDragDropUtils', ['csx', 'cx', 'Arbiter', 'CSS', 'DOMQuery', 'Parent', 'VideoUploadFeatureDetector'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = {
        handleDragEnterAndLeave: function(k) {
            var l = c('DOMQuery').scry(c('Parent').bySelector(k, "._119"), "._2wr");
            c('Arbiter').subscribe('dragenter', function(m, n) {
                if (k == n.element) l.forEach(c('CSS').hide);
            });
            c('Arbiter').subscribe('dragleave', function(m, n) {
                if (k == n.element) l.forEach(c('CSS').show);
            });
        },
        filterImages: function(k) {
            var l = c('VideoUploadFeatureDetector').supportsFileAPI(),
                m = [];
            for (var n = 0; n < k.length; n++)
                if (k[n].type.match('image/*')) {
                    m.push(k[n]);
                } else if (l && k[n].type.match('video/*')) m.push(k[n]);
            return m;
        }
    };
    f.exports = j;
}, null);
__d('ComposerXSessionIDs', ['cx', 'DOM', 'uuid'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = {},
        j = {
            getSessionID: function(k) {
                return i[k];
            },
            resetSessionID: function(k) {
                i[k] = c('uuid')();
            },
            createSessionIDInput: function(k) {
                return c('DOM').create('input', {
                    type: 'hidden',
                    name: 'composer_session_id',
                    className: "_5r_b",
                    value: k
                });
            }
        };
    f.exports = j;
}, null);
__d('ComposerXMarauderLogger', ['Event', 'ComposerTargetType', 'ComposerType', 'ComposerWaterfallEvent', 'ComposerXSessionIDs', 'MarauderLogger', 'ShareModeConst'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {},
        i = c('ComposerType').STATUS,
        j = {
            logEvent: function(k, l, m) {
                if (!m) m = {};
                var n = h[l],
                    o = c('ComposerXSessionIDs').getSessionID(l);
                if (!n || !o) return;
                if (m.logOncePerSession) {
                    if (!n.loggedEventTypes[o]) n.loggedEventTypes[o] = {};
                    if (n.loggedEventTypes[o][k]) return;
                    n.loggedEventTypes[o][k] = true;
                }
                var p = m.composerType ? m.composerType : i,
                    q = babelHelpers['extends']({}, m.extraData, {
                        composer_type: p,
                        composer_version: n.composerVersion,
                        target_type: n.targetType,
                        target_id: n.targetID,
                        ref: n.entryPointRef,
                        composer_source_surface: n.composerSourceSurface
                    });
                if (m.logDetails) {
                    q.has_photo = n.hasPhoto;
                    q.has_video = n.hasVideo;
                    q.xy_tag_count = n.numXYTags;
                    q.with_tag_count = n.numWithTags;
                    q.tags_user = n.numUserTags;
                }
                c('MarauderLogger').log(k, 'composer', q, undefined, undefined, o);
            },
            registerComposer: function(k, l, m, n, o, p) {
                h[k.id] = {
                    targetID: o,
                    targetType: l,
                    entryPointRef: m,
                    composerVersion: n,
                    loggedEventTypes: {},
                    hasPhoto: false,
                    hasVideo: false,
                    numWithTags: 0,
                    numXYTags: 0,
                    numUserTags: 0,
                    composerSourceSurface: p
                };
            },
            getInstance: function(k) {
                return h[k];
            },
            updateHasPhoto: function(k, l) {
                if (!h[k]) return;
                h[k].hasPhoto = l;
            },
            updateHasVideo: function(k, l) {
                if (!h[k]) return;
                h[k].hasVideo = l;
            },
            updateNumWithTags: function(k, l) {
                if (!h[k]) return;
                h[k].numWithTags = l;
            },
            updateNumXYTags: function(k, l) {
                if (!h[k]) return;
                h[k].numXYTags = l;
                h[k].numWithTags = h[k].numWithTags - l;
            },
            updateNumUserTags: function(k, l) {
                if (!h[k]) return;
                h[k].numUserTags = l;
            },
            listenForPostEvents: function(k, l) {
                if (!l) return [];
                return [c('Event').listen(l, 'submit', function() {
                    j.logPost(k);
                }), c('Event').listen(l, 'success', function() {
                    j.logPostSuccess(k);
                }), c('Event').listen(l, 'error', function(event) {
                    j.logPostFailure(k, {
                        error_info: {
                            error_code: event.data.response.error,
                            error_description: event.data.response.errorDescription,
                            error_summary: event.data.response.errorSummary
                        }
                    });
                })];
            },
            setShareMode: function(k, l) {
                var m = h[k];
                if (!m) return;
                switch (l) {
                    case c('ShareModeConst').SELF_POST:
                        m.targetType = c('ComposerTargetType').SELF_USER;
                        break;
                    case c('ShareModeConst').FRIEND:
                        m.targetType = c('ComposerTargetType').OTHER_USER;
                        break;
                    case c('ShareModeConst').PAGE:
                    case c('ShareModeConst').SELF_PAGE:
                        m.targetType = c('ComposerTargetType').PAGE;
                        break;
                    case c('ShareModeConst').GROUP:
                        m.targetType = c('ComposerTargetType').GROUP;
                        break;
                    default:
                        m.targetType = c('ComposerTargetType').OTHER;
                }
            },
            logEntry: function(k, l) {
                if (typeof l === 'string') return;
                j.logEvent(c('ComposerWaterfallEvent').COMPOSER_ENTRY, k, {
                    logOncePerSession: true,
                    extraData: l
                });
            },
            logCompleted: function(k, l) {
                j.logEvent(c('ComposerWaterfallEvent').COMPOSER_POST_COMPLETED, k, {
                    extraData: l
                });
            },
            logPost: function(k, l) {
                j.logEvent(c('ComposerWaterfallEvent').COMPOSER_POST, k, {
                    extraData: l
                });
            },
            logPostSuccess: function(k, l) {
                j.logEvent(c('ComposerWaterfallEvent').COMPOSER_POST_SUCCESS, k, {
                    extraData: l
                });
            },
            logPostFailure: function(k, l) {
                j.logEvent(c('ComposerWaterfallEvent').COMPOSER_POST_FAILURE, k, {
                    extraData: l
                });
            }
        };
    f.exports = j;
}, null);
__d('LineClamp.react', ['cx', 'React', 'Locale', 'getVendorPrefixedName', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('getVendorPrefixedName')('lineClamp'),
        k = c('React').createClass({
            displayName: 'LineClamp',
            propTypes: {
                customEllipsis: i.node,
                disableNative: i.bool,
                lineHeight: i.number,
                lines: i.number.isRequired,
                customEllipsisDisableGradient: i.bool
            },
            _renderEllipsis: function() {
                var l;
                if (this.props.lineHeight && !this.props.customEllipsisDisableGradient) l = {
                    bottom: this.props.lineHeight + 'px'
                };
                var m;
                if (this.props.customEllipsis && this.props.customEllipsisDisableGradient) {
                    m = c('Locale').isRTL() ? "_1osp" : "_1osq";
                } else m = c('Locale').isRTL() ? "_4ik3 _2k5c" : "_4ik3 _2k5d";
                return (c('React').createElement('div', {
                    style: l,
                    className: m,
                    key: 'ellipsis'
                }, this.props.customEllipsis ? this.props.customEllipsis : '\u2026'));
            },
            render: function() {
                var l = !!j && !this.props.disableNative,
                    m = c('joinClasses')(this.props.className, "_4ik4" + (l ? ' ' + "_4ik5" : '')),
                    n = this.props.children,
                    o = {};
                if (this.props.lineHeight) o = {
                    height: this.props.lineHeight * this.props.lines,
                    lineHeight: this.props.lineHeight + 'px'
                };
                if (l) {
                    o[j] = this.props.lines;
                } else {
                    m = c('joinClasses')(m, 'clearfix');
                    if (this.props.customEllipsisDisableGradient) {
                        n = [c('React').createElement('div', {
                            className: "_1osu"
                        }), this._renderEllipsis(), c('React').createElement('div', {
                            className: "_1osv",
                            key: 'inner'
                        }, this.props.children)];
                    } else n = [c('React').createElement('div', {
                        className: "_4ik6",
                        key: 'inner'
                    }, n), this._renderEllipsis()];
                }
                return (c('React').createElement('div', {
                    className: m,
                    style: o
                }, n));
            }
        });
    f.exports = k;
}, null);
__d('TreeMap', ['Map', 'nullthrows'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(v, w, x) {
        this.key = v;
        this.value = w;
        this.time = x;
    }

    function i(v) {
        this.$TreeMap1 = function(w, x) {
            var y = v(w, x);
            return y !== 0 ? y : w.time - x.time;
        };
        this.$TreeMap2 = new(c('Map'))();
        this.$TreeMap3 = null;
        this.$TreeMap4 = 0;
        this.size = this.$TreeMap2.size;
    }
    i.prototype.clear = function() {
        this.$TreeMap2 = new(c('Map'))();
        this.$TreeMap3 = null;
        this.size = this.$TreeMap2.size;
    };
    i.prototype.has = function(v) {
        return this.$TreeMap2.has(v);
    };
    i.prototype.set = function(v, w) {
        if (this.has(v)) this['delete'](v);
        var x = new h(v, w, this.$TreeMap4++);
        this.$TreeMap2.set(v, x);
        this.$TreeMap3 = p(this.$TreeMap3, x, this.$TreeMap1);
        this.size = this.$TreeMap2.size;
        return this;
    };
    i.prototype.get = function(v) {
        return this.has(v) ? this.$TreeMap2.get(v).value : undefined;
    };
    i.prototype['delete'] = function(v) {
        if (!this.has(v)) return false;
        var w = this.$TreeMap2.get(v);
        this.$TreeMap3 = q(this.$TreeMap3, w, this.$TreeMap1);
        this.$TreeMap2['delete'](v);
        this.size = this.$TreeMap2.size;
        return true;
    };
    i.prototype.keys = function() {
        var v = [];
        u(this.$TreeMap3, v, function(w) {
            return w.key;
        });
        return v;
    };
    i.prototype.values = function() {
        var v = [];
        u(this.$TreeMap3, v, function(w) {
            return w.value;
        });
        return v;
    };
    i.prototype.entries = function() {
        var v = [];
        u(this.$TreeMap3, v, function(w) {
            return {
                key: w.key,
                value: w.value
            };
        });
        return v;
    };
    i.prototype.range = function(v, w) {
        var x = [],
            y = null;
        if (v) y = new h(v.key, v.value, -1);
        var z = null;
        if (w) z = new h(w.key, w.value, this.$TreeMap4);
        u(this.$TreeMap3, x, function(aa) {
            return {
                key: aa.key,
                value: aa.value
            };
        }, this.$TreeMap1, y, z);
        return x;
    };
    i.prototype.min = function() {
        if (!this.$TreeMap3) return undefined;
        var v = r(c('nullthrows')(this.$TreeMap3)),
            w = v.key,
            x = v.value;
        return {
            key: w,
            value: x
        };
    };
    i.prototype.max = function() {
        if (!this.$TreeMap3) return undefined;
        var v = s(c('nullthrows')(this.$TreeMap3)),
            w = v.key,
            x = v.value;
        return {
            key: w,
            value: x
        };
    };
    i.prototype.__testRoot = function() {};

    function j(v) {
        if (!v) return v;
        o(v);
        if (v.balanceFactor < -1) {
            if (v.right && v.right.balanceFactor <= 0) {
                return k(v);
            } else return l(v);
        } else if (v.balanceFactor > 1) {
            if (v.left && v.left.balanceFactor >= 0) {
                return m(v);
            } else return n(v);
        } else return v;
    }

    function k(v) {
        var w = v,
            x = c('nullthrows')(w.right),
            y = x.left;
        w.right = y;
        o(w);
        c('nullthrows')(x).left = w;
        o(x);
        return x;
    }

    function l(v) {
        var w = v,
            x = c('nullthrows')(w.right),
            y = c('nullthrows')(x.left),
            z = y.left,
            aa = y.right;
        w.right = z;
        o(w);
        x.left = aa;
        o(x);
        y = c('nullthrows')(y);
        y.left = w;
        y.right = x;
        o(y);
        return y;
    }

    function m(v) {
        var w = v,
            x = c('nullthrows')(w.left),
            y = x.right;
        w.left = y;
        o(w);
        x.right = w;
        o(x);
        return x;
    }

    function n(v) {
        var w = v,
            x = c('nullthrows')(w.left),
            y = c('nullthrows')(x.right),
            z = y.left,
            aa = y.right;
        x.right = z;
        o(x);
        w.left = aa;
        o(w);
        y.left = x;
        y.right = w;
        o(y);
        return y;
    }

    function o(v) {
        var w = v.left ? v.left.height : -1,
            x = v.right ? v.right.height : -1;
        v.height = Math.max(w, x) + 1;
        v.balanceFactor = w - x;
    }

    function p(v, w, x) {
        if (v == null) return j(w);
        var y = x(w, v);
        if (y < 0) {
            v.left = p(v.left, w, x);
            return j(v);
        } else {
            v.right = p(v.right, w, x);
            return j(v);
        }
    }

    function q(v, w, x) {
        if (v == null) return null;
        if (v === w)
            if (v.left && v.right) {
                var y = s(v.left);
                v.left = t(v.left);
                y.left = v.left;
                y.right = v.right;
                return j(y);
            } else if (v.left) {
            return j(v.left);
        } else if (v.right) {
            return j(v.right);
        } else return null;
        var z = x(w, v);
        if (z < 0) {
            v.left = q(v.left, w, x);
            return j(v);
        } else {
            v.right = q(v.right, w, x);
            return j(v);
        }
    }

    function r(v) {
        while (v.left) v = v.left;
        return v;
    }

    function s(v) {
        while (v.right) v = v.right;
        return v;
    }

    function t(v) {
        if (!v) return null;
        if (v.right == null) return j(v.left || null);
        v.right = t(v.right);
        return j(v);
    }

    function u(v, w, x, y, z, aa) {
        if (v == null) return;
        var ba = !y || !z || y(v, z) >= 0,
            ca = !y || !aa || y(v, aa) <= 0;
        if (ba) u(v.left, w, x, y, z, aa);
        if (ba && ca) w.push(x(v));
        if (ca) u(v.right, w, x, y, z, aa);
    }
    f.exports = i;
}, null);
__d('Cache', ['DateConsts', 'Map', 'TreeMap'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h() {
        this.$Cache1 = new(c('Map'))();
    }
    h.prototype.has = function(i) {
        return this.$Cache1.has(i);
    };
    h.prototype.get = function(i, j) {
        var k = this.__getRaw(i);
        if (!k) return j;
        return k.$Cache2;
    };
    h.prototype.getAll = function(i, j) {
        var k = new(c('Map'))();
        i.forEach(function(l) {
            return k.set(l, this.get(l, j));
        }.bind(this));
        return k;
    };
    h.prototype['delete'] = function(i) {
        var j = this.__getRaw(i);
        if (j && j.$Cache3) clearTimeout(j.$Cache3);
        return this.$Cache1['delete'](i);
    };
    h.prototype.clear = function() {
        this.$Cache1.forEach(function(i) {
            if (i && i.$Cache3) clearTimeout(i.$Cache3);
        });
        this.$Cache1.clear();
    };
    h.prototype.set = function(i, j, k, l) {
        if (!this.shouldUpdate(i, k)) return false;
        var m = this.__getRaw(i);
        if (!m) m = this.__getNewRawObject();
        delete m.$Cache2;
        delete m.$Cache4;
        if (m.$Cache3) clearTimeout(m.$Cache3);
        delete m.$Cache3;
        m.$Cache2 = j;
        if (k != null) m.$Cache4 = k;
        if (l != null && l >= 0) m.$Cache3 = setTimeout(this['delete'].bind(this, i), l * c('DateConsts').MS_PER_SEC * c('DateConsts').SEC_PER_MIN);
        this.__setRaw(i, m);
        return true;
    };
    h.prototype.shouldUpdate = function(i, j) {
        var k = this.__getRaw(i);
        return (k == null || k.$Cache4 == null || j == null || j > k.$Cache4);
    };
    h.prototype.size = function() {
        return this.$Cache1.size;
    };
    h.prototype.__getRaw = function(i) {
        return this.$Cache1.get(i);
    };
    h.prototype.__setRaw = function(i, j) {
        this.$Cache1.set(i, j);
    };
    h.prototype.__getNewRawObject = function() {
        return {
            $Cache2: null,
            $Cache3: null,
            $Cache4: null,
            $Cache5: null,
            $Cache6: null
        };
    };
    h.prototype.__keys = function() {
        return this.$Cache1.keys();
    };
    f.exports = h;
}, null);
__d('keyMirrorRecursive', ['invariant'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function i(l, m) {
        return j(l, m);
    }

    function j(l, m) {
        var n = {},
            o;
        !k(l) ? h(0) : void 0;
        for (o in l) {
            if (!l.hasOwnProperty(o)) continue;
            var p = l[o],
                q = m ? m + '.' + o : o;
            if (k(p)) {
                p = j(p, q);
            } else p = q;
            n[o] = p;
        }
        return n;
    }

    function k(l) {
        return l instanceof Object && !Array.isArray(l);
    }
    f.exports = i;
}, null);
__d("ProfileIntroCardStrings", ["fbt"], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = {
        PLACEHOLDER: h._("Enter text here"),
        EDIT: h._("Edit"),
        EDIT_BIO: h._("Edit Bio"),
        CANCEL: h._("Cancel"),
        SAVE: h._("Save"),
        POST_TO_FEED: h._("Post to News Feed"),
        POST_PHOTOS_TO_FEED: h._("Post new photos to News Feed"),
        POST_TO_FEED_BIO_NUX: h._("Share your bio with friends by posting to News Feed."),
        POST_TO_FEED_SINGLE_PHOTO_NUX: h._("Share your new featured photo with friends by posting to News Feed."),
        POST_TO_FEED_MULTIPLE_PHOTO_NUX: h._("Share your new featured photos with friends by posting to News Feed."),
        BIO_SUGGESTION_MESSAGE: h._("Use details from your About section as your bio"),
        getRemainingCharacters: function(j) {
            return h._("{remainingCharacters} characters left", [h.param("remainingCharacters", j)]);
        }
    };
    f.exports = i;
}, null);
__d('QE', ['Banzai', 'Cache'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = 'qe_log_exposure',
        i = 60,
        j = new(c('Cache'))(),
        k = {
            logExposure: function(l, m) {
                var n = m ? l + '|' + m : l;
                if (j.has(n)) return;
                var o = {
                        signal: true
                    },
                    p = {
                        name: l,
                        id: null
                    };
                if (m) p.id = m;
                c('Banzai').post(h, p, o);
                j.set(n, true, 1, i);
            }
        };
    f.exports = k;
}, null);
__d("DragDropFileUpload", [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    g.isSupported = function() {
        return typeof FileList !== "undefined";
    };
}, null);
__d('DocumentDragDrop', ['Arbiter', 'CSS', 'DOMQuery', 'DragDropFileUpload', 'Event', 'emptyFunction', 'getObjectValues', 'getOrCreateDOMID'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {},
        i = 0;

    function j() {
        i = 0;
        c('getObjectValues')(h).forEach(function(o) {
            c('CSS').removeClass(o.element, o.className);
            c('Arbiter').inform('dragleave', {
                element: o.element
            });
        });
    }
    var k = null;

    function l() {
        k && clearTimeout(k);
        k = setTimeout(function() {
            j();
        }, 500);
    }
    var m = function() {
            if (!c('DragDropFileUpload').isSupported()) return;
            c('Event').listen(document, 'dragenter', function(o) {
                if (i === 0) c('getObjectValues')(h).forEach(function(p) {
                    c('CSS').addClass(p.element, p.className);
                    c('Arbiter').inform('dragenter', {
                        element: p.element,
                        event: o
                    });
                });
                i++;
                l();
            });
            c('Event').listen(document, 'dragleave', function(o) {
                i--;
                if (i === 0) j();
                l();
            });
            c('Event').listen(document, 'drop', function(o) {
                j();
                var p = o.getTarget();
                if (c('DOMQuery').isNodeOfType(o.getTarget(), 'input'))
                    if (p.type === 'file') return;
                o.prevent();
            });
            c('Event').listen(document, 'dragover', c('Event').prevent);
            document.addEventListener('dragover', l, true);
            m = c('emptyFunction');
        },
        n = {
            init: function() {
                m();
            },
            registerStatusElement: function(o, p) {
                m();
                h[c('getOrCreateDOMID')(o)] = {
                    element: o,
                    className: p
                };
                if (i > 0) c('CSS').addClass(o, p);
            },
            removeStatusElement: function(o) {
                var p = c('getOrCreateDOMID')(o),
                    q = h[p];
                if (q) {
                    c('CSS').removeClass(q.element, q.className);
                    delete h[p];
                }
            }
        };
    f.exports = n;
}, null);
__d('DragDropTarget', ['Arbiter', 'Event', 'SubscriptionsHandler', 'CSS', 'DataTransfer', 'DocumentDragDrop', 'DragDropFileUpload', 'emptyFunction'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        this._element = i;
        this._listeners = new(c('SubscriptionsHandler'))();
        this._statusElem = i;
        this._dragEnterCount = 0;
        this._enabled = false;
    }
    Object.assign(h.prototype, {
        _onFilesDropCallback: c('emptyFunction'),
        _onURLDropCallback: c('emptyFunction'),
        _onPlainTextDropCallback: c('emptyFunction'),
        _onDropCallback: c('emptyFunction'),
        _fileFilterFn: c('emptyFunction').thatReturnsArgument,
        setOnDocumentDragEnterCallback: function(i) {
            this._onDocumentDragEnterCallback = i;
            return this;
        },
        setOnDocumentDragLeaveCallback: function(i) {
            this._onDocumentDragLeaveCallback = i;
            return this;
        },
        setOnDragEnterCallback: function(i) {
            this._onDragEnterCallback = i;
            return this;
        },
        setOnDragLeaveCallback: function(i) {
            this._onDragLeaveCallback = i;
            return this;
        },
        setOnFilesDropCallback: function(i) {
            this._onFilesDropCallback = i;
            return this;
        },
        setOnURLDropCallback: function(i) {
            this._onURLDropCallback = i;
            return this;
        },
        setOnPlainTextDropCallback: function(i) {
            this._onPlainTextDropCallback = i;
            return this;
        },
        setOnDropCallback: function(i) {
            this._onDropCallback = i;
            return this;
        },
        enable: function() {
            if (!c('DragDropFileUpload').isSupported()) return this;
            this._listeners.engage();
            c('DocumentDragDrop').registerStatusElement(this._statusElem, 'fbWantsDragDrop');
            this._listeners.addSubscriptions(c('Event').listen(this._element, 'dragenter', this._onDragEnter.bind(this)), c('Event').listen(this._element, 'dragleave', this._onDragLeave.bind(this)), c('Event').listen(this._element, 'dragover', this._onDragOver.bind(this)), c('Event').listen(this._element, 'drop', function(i) {
                this._dragEnterCount = 0;
                c('CSS').removeClass(this._statusElem, 'fbDropReady');
                c('CSS').removeClass(this._statusElem, 'fbDropReadyPhoto');
                c('CSS').removeClass(this._statusElem, 'fbDropReadyPhotos');
                c('CSS').removeClass(this._statusElem, 'fbDropReadyLink');
                var j = new(c('DataTransfer'))(i.dataTransfer),
                    k = {},
                    l = false,
                    m = this._fileFilterFn(i.dataTransfer.files);
                if (m.length) {
                    this._onFilesDropCallback(m, i);
                    k.files = m;
                    l = true;
                }
                var n = j.getLink();
                if (n) {
                    this._onURLDropCallback(n, i);
                    k.url = n;
                    l = true;
                }
                var o = j.getText();
                if (o) {
                    this._onPlainTextDropCallback(o, i);
                    k.plainText = o;
                    l = true;
                }
                if (l) this._onDropCallback(k, i);
                i.kill();
            }.bind(this)));
            this._listeners.addSubscriptions(c('Arbiter').subscribe('dragenter', this._onDocumentDragEnter.bind(this)), c('Arbiter').subscribe('dragleave', this._onDocumentDragLeave.bind(this)));
            this._enabled = true;
            return this;
        },
        disable: function() {
            if (!this._enabled) return this;
            c('DocumentDragDrop').removeStatusElement(this._statusElem, 'fbWantsDragDrop');
            c('CSS').removeClass(this._statusElem, 'fbDropReady');
            c('CSS').removeClass(this._statusElem, 'fbDropReadyPhoto');
            c('CSS').removeClass(this._statusElem, 'fbDropReadyPhotos');
            c('CSS').removeClass(this._statusElem, 'fbDropReadyLink');
            this._listeners.release();
            this._enabled = false;
            return this;
        },
        setFileFilter: function(i) {
            this._fileFilterFn = i;
            return this;
        },
        setStatusElement: function(i) {
            this._statusElem = i;
            return this;
        },
        _onDragEnter: function(i) {
            if (this._dragEnterCount === 0) {
                var j = new(c('DataTransfer'))(i.dataTransfer);
                c('CSS').addClass(this._statusElem, 'fbDropReady');
                if (j.isLink() || !j.isImage()) {
                    c('CSS').addClass(this._statusElem, 'fbDropReadyLink');
                } else if (j.getCount() > 1) {
                    c('CSS').addClass(this._statusElem, 'fbDropReadyPhotos');
                } else c('CSS').addClass(this._statusElem, 'fbDropReadyPhoto');
                this._onDragEnterCallback && this._onDragEnterCallback();
            }
            this._dragEnterCount++;
            i.preventDefault();
        },
        _onDragLeave: function(i) {
            this._dragEnterCount = Math.max(this._dragEnterCount - 1, 0);
            if (this._dragEnterCount === 0) {
                c('CSS').removeClass(this._statusElem, 'fbDropReady');
                c('CSS').removeClass(this._statusElem, 'fbDropReadyPhoto');
                c('CSS').removeClass(this._statusElem, 'fbDropReadyPhotos');
                c('CSS').removeClass(this._statusElem, 'fbDropReadyLink');
                this._onDragLeaveCallback && this._onDragLeaveCallback();
            }
        },
        _onDragOver: function(i) {
            if (!i.dataTransfer) {
                c('Event').kill(i);
                return;
            }
            try {
                var k = i.dataTransfer.effectAllowed;
                i.dataTransfer.dropEffect = k == 'move' || k == 'linkMove' ? 'move' : 'copy';
            } catch (j) {}
            c('Event').kill(i);
        },
        _onDocumentDragEnter: function(event, i) {
            if (this._onDocumentDragEnterCallback && i.element == this._element) this._onDocumentDragEnterCallback();
        },
        _onDocumentDragLeave: function(event, i) {
            this._dragEnterCount = 0;
            this._onDragLeave(event);
            if (this._onDocumentDragLeaveCallback && i.element == this._element) this._onDocumentDragLeaveCallback();
        }
    });
    f.exports = h;
}, null);
__d('getTextDirection', ['Locale', 'UnicodeBidi'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        var j = c('UnicodeBidi').isDirectionRTL(i),
            k = c('Locale').isRTL();
        if (j && !k) {
            return 'rtl';
        } else if (!j && k) return 'ltr';
        return '';
    }
    f.exports = h;
}, null);
__d('ProfileIntroCardAddButton.react', ['ix', 'cx', 'React', 'Image.react', 'Link.react', 'fbglyph'], function a(b, c, d, e, f, g, h, i) {
    var j, k;
    if (c.__markCompiled) c.__markCompiled();
    j = babelHelpers.inherits(l, c('React').Component);
    k = j && j.prototype;

    function l(m) {
        'use strict';
        k.constructor.call(this, m);
    }
    l.prototype.render = function() {
        'use strict';
        return (c('React').createElement(c('Link.react'), {
            className: "_zho _2pi3",
            onClick: this.props.onClick
        }, c('React').createElement(c('Image.react'), {
            alt: this.props.altText,
            className: "_zhp _3-90",
            src: h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/plus_16_accent-blue.png")
        }), c('React').createElement('span', null, this.props.promptLabel)));
    };
    f.exports = l;
}, null);
__d("XProfileIntroCardDismissSuggestedBioPromptAsyncController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/profile\/intro\/suggested_bio_prompt\/dismiss\/", {});
}, null);
__d('ProfileIntroCardBioSuggestion.react', ['cx', 'React', 'AsyncRequest', 'Link.react', 'LineClamp.react', 'ProfileIntroCardStrings', 'XProfileIntroCardDismissSuggestedBioPromptAsyncController', 'XUICloseButton.react', 'XUIGrayText.react', 'XUIText.react'], function a(b, c, d, e, f, g, h) {
    var i, j;
    if (c.__markCompiled) c.__markCompiled();
    i = babelHelpers.inherits(k, c('React').Component);
    j = i && i.prototype;

    function k(l) {
        'use strict';
        j.constructor.call(this, l);
    }
    k.prototype.render = function() {
        'use strict';
        return (c('React').createElement('div', {
            className: "_4nk4 _3-8x _3-96"
        }, c('React').createElement(c('Link.react'), {
            className: "_4nk5 _2pi9 _2pi3",
            onClick: this.props.onClick
        }, c('React').createElement(c('XUIText.react'), {
            className: "_4nk6 _3-95 _3-91",
            display: 'block',
            size: 'medium'
        }, c('ProfileIntroCardStrings').BIO_SUGGESTION_MESSAGE), c('React').createElement(c('XUIGrayText.react'), {
            shade: 'dark',
            size: 'medium'
        }, c('React').createElement(c('LineClamp.react'), {
            lines: 2
        }, this.props.bioSuggestionLabel))), c('React').createElement(c('XUICloseButton.react'), {
            className: "_4nk7 _3-8y _3-91",
            onClick: this.$ProfileIntroCardBioSuggestion1.bind(this)
        })));
    };
    k.prototype.$ProfileIntroCardBioSuggestion1 = function() {
        'use strict';
        var l = c('XProfileIntroCardDismissSuggestedBioPromptAsyncController').getURIBuilder().getURI();
        new(c('AsyncRequest'))().setURI(l).send();
        this.props.onDismiss();
    };
    f.exports = k;
}, null);
__d('ProfileIntroCardLogger', ['csx', 'cx', 'BanzaiLogger', 'CSS', 'DataStore', 'Event', 'Parent', 'tidyEvent'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = null,
        k = null;

    function l(o, p, q, r) {
        j = p;
        k = r;
        c('tidyEvent')(c('Event').listen(o, 'click', function(s) {
            var t = s.getTarget(),
                u = c('Parent').byAttribute(t, q);
            if (u) {
                if (c('CSS').matchesSelector(u, "._md0") && t.nodeName !== 'A') return;
                n(JSON.parse(c('DataStore').get(u, 'store')));
            }
        }));
    }

    function m(o) {
        n(o);
    }

    function n(o) {
        c('BanzaiLogger').log(j, babelHelpers['extends']({}, k, o));
    }
    f.exports = {
        init: l,
        logClick: m
    };
}, null);
__d('ProfileIntroCardBio.react', ['cx', 'DOMScroll', 'JSResource', 'ProfileIntroCardLogger', 'React', 'ReactDOM', 'BootloadedComponent.react', 'ProfileIntroCardAddButton.react', 'ProfileIntroCardBioSuggestion.react', 'ProfileIntroCardStrings', 'ProfileIntroCardTestID', 'TextWithEmoticons.react', 'TooltipLink.react', 'XUISpinner.react', 'getTextDirection'], function a(b, c, d, e, f, g, h) {
    var i, j;
    if (c.__markCompiled) c.__markCompiled();
    i = babelHelpers.inherits(k, c('React').Component);
    j = i && i.prototype;

    function k(l) {
        'use strict';
        j.constructor.call(this, l);
        this.state = {
            isBioSuggestionDismissed: false,
            isEditMode: this.props.initialEdit
        };
    }
    k.prototype.componentDidMount = function() {
        'use strict';
        if (this.props.initialEdit) c('DOMScroll').ensureVisible(c('ReactDOM').findDOMNode(this));
    };
    k.prototype.render = function() {
        'use strict';
        if (this.state.isEditMode) {
            var l = c('React').createElement('div', {
                    className: "_2nc9 _2pi5"
                }, c('React').createElement(c('XUISpinner.react'), null)),
                m = null;
            if (this.props.bio) {
                m = this.props.bio;
            } else if (this.props.bioSuggestionText && !this.state.isBioSuggestionDismissed) m = this.props.bioSuggestionText;
            return (c('React').createElement(c('BootloadedComponent.react'), babelHelpers['extends']({
                bootloadLoader: c('JSResource')('ProfileIntroCardBioEditForm.react').__setRef('ProfileIntroCardBio.react'),
                bootloadPlaceholder: l,
                initialText: m,
                onCancel: function() {
                    return this.setState({
                        isEditMode: false
                    });
                }.bind(this)
            }, this.props.editFieldOptions)));
        }
        if (this.props.bio) return (c('React').createElement('div', {
            'data-testid': c('ProfileIntroCardTestID').BIO_TEXT,
            dir: c('getTextDirection')(this.props.bio),
            className: "_4ihn _2pi4 _2pia"
        }, c('React').createElement(c('TextWithEmoticons.react'), {
            renderEmoji: true,
            renderEmoticons: true,
            text: this.props.bio
        }), c('React').createElement(c('TooltipLink.react'), {
            className: "_1-gu _2p2g",
            onClick: this.$ProfileIntroCardBio1.bind(this, 'bio_edit_click'),
            tooltip: c('ProfileIntroCardStrings').EDIT
        }, c('React').createElement('i', {
            className: "_2p2h"
        }))));
        if (!this.props.bioSuggestionText || this.state.isBioSuggestionDismissed) return (c('React').createElement(c('ProfileIntroCardAddButton.react'), {
            altText: c('ProfileIntroCardStrings').EDIT_BIO,
            onClick: this.$ProfileIntroCardBio1.bind(this, 'bio_add_click'),
            promptLabel: this.props.addBioPrompt
        }));
        return (c('React').createElement(c('ProfileIntroCardBioSuggestion.react'), {
            bioSuggestionLabel: this.props.bioSuggestionLabel,
            onClick: this.$ProfileIntroCardBio1.bind(this, 'bio_add_prompt_suggested_click'),
            onDismiss: this.$ProfileIntroCardBio2.bind(this)
        }));
    };
    k.prototype.$ProfileIntroCardBio1 = function(event) {
        'use strict';
        c('ProfileIntroCardLogger').logClick({
            event: event
        });
        this.setState({
            isEditMode: true
        });
    };
    k.prototype.$ProfileIntroCardBio2 = function() {
        'use strict';
        this.setState({
            isBioSuggestionDismissed: true
        });
    };
    f.exports = k;
}, null);
__d('TimelineCapsuleUtilities', ['CSS'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        setFirstUnit: function(i) {
            var j = true;
            for (var k = 0; k < i.childNodes.length; ++k) {
                var l = i.childNodes[k];
                if (l.id.indexOf('tl_unit_') === 0)
                    if (j) {
                        j = false;
                        c('CSS').addClass(l, 'firstUnit');
                    } else {
                        c('CSS').removeClass(l, 'firstUnit');
                        break;
                    }
            }
        }
    };
    f.exports = h;
}, null);
__d('TimelineComposer', ['csx', 'Arbiter', 'Bootloader', 'ComposerXMarauderLogger', 'ComposerXStore', 'CSS', 'DOM', 'DOMQuery', 'Event', 'Parent', 'ReloadPage', 'Run', 'TimelineCapsuleUtilities', '$', 'getObjectValues', 'goURI', 'tidyEvent'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i, j;

    function k() {
        c('ComposerXMarauderLogger').logCompleted(i.id);
    }

    function l(n) {
        if (n.hidePost) {
            k();
            return;
        }
        if (n.redirect) {
            var o = c('ComposerXStore').getAllForComposer(i.id);
            c('getObjectValues')(o).forEach(function(p) {
                if (p.reset) p.reset(p);
            });
            c('goURI')(n.redirect);
            k();
            return;
        }
        if (!n.streamStory) {
            c('ReloadPage').now();
            return;
        }
        if (n.backdatedTime) {
            c('Bootloader').loadModules(["TimelineStoryPublisher"], function(p) {
                p.publish(n);
            }, 'TimelineComposer');
            k();
            return;
        }
        m.renderCapsuleBasedStory(i, n.streamStory);
        c('Arbiter').inform('TimelineComposer/on_after_publish', n.streamStory, c('Arbiter').BEHAVIOR_PERSISTENT);
        k();
    }
    var m = {
        init: function(n) {
            i = c('$')(n);
            j = c('Arbiter').subscribe('composer/publish', function(event, o) {
                if (o.composer_id === i.id) l(o);
            });
            c('Run').onLeave(m.destroy);
        },
        destroy: function() {
            j && j.unsubscribe();
        },
        renderCapsuleBasedStory: function(n, o) {
            var p = c('Parent').byClass(n, 'fbTimelineCapsule');
            if (!p) return;
            var q = c('DOMQuery').scry(p, ".fbTimelineUnit")[0],
                r = q.nextSibling;
            if (r && r.getAttribute('data-spine')) q = q.nextSibling;
            var s = c('DOM').insertAfter(q, o)[0];
            if (c('CSS').hasClass(s, 'fbTimelineUnit')) s = c('DOM').find(s, 'div.timelineUnitContainer');
            c('Bootloader').loadModules(["Animation"], function(t) {
                new t(s).from('backgroundColor', '#fff8dd').to('backgroundColor', '#fff').duration(2000).ease(t.ease.both).go();
            }, 'TimelineComposer');
            c('TimelineCapsuleUtilities').setFirstUnit(p);
        },
        getRoot: function() {
            return i;
        },
        initNUX: function(n, o) {
            c('tidyEvent')(c('Event').listen(n, 'click', function() {
                var p = c('DOM').scry(o, 'textarea')[0];
                p && p.focus();
            }));
        }
    };
    f.exports = b.TimelineComposer || m;
}, null);
__d('ReactComposerAttachmentActionType', ['keyMirrorRecursive'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = c('keyMirrorRecursive')({
        REGISTER_ATTACHMENT: null,
        INITIALIZE_ATTACHMENT: null,
        SELECT_ATTACHMENT: null,
        SET_INITIALIZED: null,
        SET_BOOTLOADED: null,
        SET_BOOTSTRAPPED: null,
        UPLOAD_ATTACHMENT: null
    }, 'ReactComposerAttachmentActionType');
}, null);
__d('ReactComposerAttachmentInitState', ['keyMirrorRecursive'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = c('keyMirrorRecursive')({
        UNINITIALIZED: null,
        INITIALIZING: null,
        INITIALIZED: null
    }, 'ReactComposerAttachmentInitState');
}, null);
__d('ReactComposerLoggingQueue', ['requireWeak'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = false;
    c('requireWeak')('ReactComposerLoggingStore', function(k) {
        h = !!k;
    });
    var i = [],
        j = {
            add: function(k) {
                if (h) return;
                i.push(k);
            },
            pop: function() {
                return i.shift();
            },
            getLength: function() {
                return i.length;
            }
        };
    f.exports = j;
}, null);
__d('ReactComposerActionTypes', ['keyMirrorRecursive'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = c('keyMirrorRecursive')({
        INIT_CONFIG: null,
        POST_ERROR: null,
        POST_STARTED: null,
        POST_INTENDED: null,
        POST_SUCCEEDED: null,
        POST_FINALLY: null,
        PUBLISH_STARTED: null,
        PUBLISH_SUCCEEDED: null,
        COMPOSER_RESET: null,
        EXPAND_SPROUTS: null
    }, 'ReactComposerActionTypes');
}, null);
__d('ReactComposerDispatcher', ['Dispatcher_DEPRECATED'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = new(c('Dispatcher_DEPRECATED'))();
}, null);
__d('ReactComposerStoreBase', ['ReactComposerActionTypes', 'ReactComposerDispatcher', 'ReactComposerEvents', 'EventEmitter', 'Map'], function a(b, c, d, e, f, g) {
    var h, i;
    if (c.__markCompiled) c.__markCompiled();
    h = babelHelpers.inherits(j, c('EventEmitter'));
    i = h && h.prototype;

    function j(k, l) {
        'use strict';
        i.constructor.call(this);
        this.$ReactComposerStoreBase1 = k;
        this.$ReactComposerStoreBase2 = new(c('Map'))();
        this.$ReactComposerStoreBase3 = c('ReactComposerDispatcher').register(function(m) {
            switch (m.type) {
                case c('ReactComposerActionTypes').COMPOSER_RESET:
                    this.__cleanup(m);
                    break;
            }
            l(m);
        }.bind(this));
    }
    j.prototype.getComposerData = function(k) {
        'use strict';
        var l = this.$ReactComposerStoreBase2.get(k);
        if (!l) {
            l = this.$ReactComposerStoreBase1();
            this.$ReactComposerStoreBase2.set(k, l);
        }
        return l;
    };
    j.prototype.clearComposerData = function(k) {
        'use strict';
        this.$ReactComposerStoreBase2.set(k, this.$ReactComposerStoreBase1());
    };
    j.prototype.addChangeListener = function(k) {
        'use strict';
        return this.addListener(c('ReactComposerEvents').CHANGE, k);
    };
    j.prototype.emitChange = function(k) {
        'use strict';
        this.emit(c('ReactComposerEvents').CHANGE, {
            composerID: k
        });
    };
    j.prototype.getDispatchToken = function() {
        'use strict';
        return this.$ReactComposerStoreBase3;
    };
    j.prototype.validateAction = function(k, l) {
        'use strict';
        l = [].concat(l);
        var m = l.map(function(n) {
            if (k[n] === undefined) throw 'Action missing field: ' + n;
            return k[n];
        });
        if (l.length === 1) return m[0];
        return m;
    };
    j.prototype.__cleanup = function(k) {
        'use strict';
        this.clearComposerData(k.composerID);
        this.emitChange(k.composerID);
    };
    f.exports = j;
}, null);
__d('ReactComposerAttachmentStore', ['ReactComposerAttachmentActionType', 'ReactComposerAttachmentInitState', 'ReactComposerAttachmentType', 'ReactComposerLoggingQueue', 'ReactComposerStoreBase', 'ImmutableObject', 'performanceAbsoluteNow'], function a(b, c, d, e, f, g) {
    var h, i;
    if (c.__markCompiled) c.__markCompiled();
    h = babelHelpers.inherits(j, c('ReactComposerStoreBase'));
    i = h && h.prototype;

    function j() {
        'use strict';
        var k;
        i.constructor.call(this, function() {
            return {
                attachments: [],
                selectedAttachment: null,
                isSelectedAttachmentActive: false
            };
        }, function(l) {
            switch (l.type) {
                case c('ReactComposerAttachmentActionType').REGISTER_ATTACHMENT:
                    k && k.$ReactComposerAttachmentStore1(l);
                    break;
                case c('ReactComposerAttachmentActionType').SELECT_ATTACHMENT:
                    k && k.$ReactComposerAttachmentStore2(l);
                    break;
                case c('ReactComposerAttachmentActionType').SET_BOOTLOADED:
                    k && k.$ReactComposerAttachmentStore3(l);
                    break;
                case c('ReactComposerAttachmentActionType').SET_BOOTSTRAPPED:
                    k && k.$ReactComposerAttachmentStore4(l);
                    break;
                case c('ReactComposerAttachmentActionType').SET_INITIALIZED:
                    k && k.$ReactComposerAttachmentStore5(l);
                    break;
            }
        });
        k = this;
    }
    j.prototype.getAttachment = function(k, l) {
        'use strict';
        var m = this.getComposerData(k);
        return m.attachments.find(function(n) {
            return (n.id === l);
        });
    };
    j.prototype.getSelectedAttachmentID = function(k) {
        'use strict';
        var l = this.getComposerData(k);
        if (l.selectedAttachment) return l.selectedAttachment.id;
        return null;
    };
    j.prototype.hasAttachment = function(k, l) {
        'use strict';
        return this.getComposerData(k).attachments.some(function(m) {
            return m.id === l;
        });
    };
    j.prototype.getIsAttachmentSelected = function(k, l) {
        'use strict';
        var m = this.getComposerData(k).selectedAttachment;
        return !!m && m.id === l;
    };
    j.prototype.isSelectedAttachmentActive = function(k) {
        'use strict';
        return this.getComposerData(k).isSelectedAttachmentActive;
    };
    j.prototype.isBootstrapped = function(k, l) {
        'use strict';
        var m = this.getComposerData(k),
            n = this.$ReactComposerAttachmentStore6(m, l);
        return m.attachments[n].bootstrapped;
    };
    j.prototype.getBootloadDuration = function(k, l) {
        'use strict';
        var m = this.getComposerData(k),
            n = this.$ReactComposerAttachmentStore6(m, l);
        return m.attachments[n].bootloadDuration;
    };
    j.prototype.getBootstrapDuration = function(k, l) {
        'use strict';
        var m = this.getComposerData(k),
            n = this.$ReactComposerAttachmentStore6(m, l);
        return m.attachments[n].bootstrapDuration;
    };
    j.prototype.getAttachmentsConfig = function(k, l) {
        'use strict';
        var m = this.getComposerData(k),
            n = this.$ReactComposerAttachmentStore6(m, l);
        return m.attachments[n].config;
    };
    j.prototype.$ReactComposerAttachmentStore1 = function(k) {
        'use strict';
        var l = this.validateAction(k, ['composerID', 'id']),
            m = l[0],
            n = l[1],
            o = this.getComposerData(m),
            p = new(c('ImmutableObject'))({
                id: n,
                initState: c('ReactComposerAttachmentInitState').UNINITIALIZED,
                bootloaded: k.bootloaded,
                bootstrapped: k.bootstrapped,
                module: k.module,
                postButtonModule: k.postButtonModule,
                initTime: null,
                bootloadDuration: null,
                bootstrapDuration: null,
                config: n === c('ReactComposerAttachmentType').MEDIA ? {
                    videoUploadParams: k.config.videoUploadParams
                } : null
            });
        o.attachments.push(p);
        if (k.selected) o.selectedAttachment = p;
        this.emitChange(m);
    };
    j.prototype.$ReactComposerAttachmentStore7 = function(k) {
        'use strict';
        var l = this.validateAction(k, ['id', 'composerID']),
            m = l[0],
            n = l[1],
            o = this.getComposerData(n),
            p = this.$ReactComposerAttachmentStore6(o, m);
        if (o.attachments[p].initState === c('ReactComposerAttachmentInitState').UNINITIALIZED) o.attachments[p] = c('ImmutableObject').set(o.attachments[p], {
            initState: c('ReactComposerAttachmentInitState').INITIALIZING
        });
        this.emitChange(n);
    };
    j.prototype.$ReactComposerAttachmentStore2 = function(k) {
        'use strict';
        var l = this.validateAction(k, ['id', 'composerID', 'activate']),
            m = l[0],
            n = l[1],
            o = l[2],
            p = this.getComposerData(n),
            q = this.$ReactComposerAttachmentStore6(p, m);
        p.selectedAttachment = p.attachments[q];
        if (o) p.isSelectedAttachmentActive = true;
        if (p.attachments[q].initState === c('ReactComposerAttachmentInitState').UNINITIALIZED) p.attachments[q] = c('ImmutableObject').set(p.attachments[q], {
            initState: c('ReactComposerAttachmentInitState').INITIALIZING
        });
        c('ReactComposerLoggingQueue').add(k);
        this.emitChange(n);
    };
    j.prototype.$ReactComposerAttachmentStore3 = function(k) {
        'use strict';
        var l = this.validateAction(k, ['id', 'composerID', 'attachmentModule']),
            m = l[0],
            n = l[1],
            o = l[2],
            p = this.getComposerData(n),
            q = this.$ReactComposerAttachmentStore6(p, m);
        p.attachments[q] = c('ImmutableObject').set(p.attachments[q], {
            bootloaded: true,
            bootloadDuration: c('performanceAbsoluteNow')() - p.attachments[q].initTime,
            module: o,
            postButtonModule: k.postButtonModule
        });
        this.emitChange(n);
    };
    j.prototype.$ReactComposerAttachmentStore4 = function(k) {
        'use strict';
        var l = this.validateAction(k, ['id', 'composerID']),
            m = l[0],
            n = l[1],
            o = this.getComposerData(n),
            p = this.$ReactComposerAttachmentStore6(o, m);
        o.attachments[p] = c('ImmutableObject').set(o.attachments[p], {
            bootstrapped: true,
            bootstrapDuration: c('performanceAbsoluteNow')() - o.attachments[p].initTime
        });
        c('ReactComposerLoggingQueue').add(k);
        this.emitChange(n);
    };
    j.prototype.$ReactComposerAttachmentStore5 = function(k) {
        'use strict';
        var l = this.validateAction(k, ['id', 'composerID']),
            m = l[0],
            n = l[1],
            o = this.getComposerData(n),
            p = this.$ReactComposerAttachmentStore6(o, m);
        o.attachments[p] = c('ImmutableObject').set(o.attachments[p], {
            initState: c('ReactComposerAttachmentInitState').INITIALIZED,
            initTime: c('performanceAbsoluteNow')()
        });
        this.emitChange(n);
    };
    j.prototype.$ReactComposerAttachmentStore6 = function(k, l) {
        'use strict';
        var m = -1;
        for (var n = 0; n < k.attachments.length; n++)
            if (k.attachments[n].id === l) {
                m = n;
                break;
            }
        if (m === -1) throw new Error('Undefined attachment id: ' + l);
        return m;
    };
    f.exports = new j();
}, null);
__d('ReactComposerAttachmentActions', ['ReactComposerAttachmentActionType', 'ReactComposerDispatcher', 'ReactComposerAttachmentStore'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    h.prototype.registerAttachment = function(i, j) {
        'use strict';
        var k = babelHelpers['extends']({
            composerID: i,
            type: c('ReactComposerAttachmentActionType').REGISTER_ATTACHMENT
        }, j);
        c('ReactComposerDispatcher').dispatch(k);
    };
    h.prototype.initializeAttachment = function(i, j) {
        'use strict';
        var k = {
            composerID: i,
            type: c('ReactComposerAttachmentActionType').INITIALIZE_ATTACHMENT,
            id: j
        };
        c('ReactComposerDispatcher').dispatch(k);
    };
    h.prototype.selectAttachment = function(i, j) {
        var k = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
        'use strict';
        var l = c('ReactComposerAttachmentStore').getSelectedAttachmentID(i);
        if (!l) return;
        var m = {
            composerID: i,
            type: c('ReactComposerAttachmentActionType').SELECT_ATTACHMENT,
            id: j,
            activate: k,
            currentAttachmentID: l
        };
        c('ReactComposerDispatcher').dispatch(m);
    };
    h.prototype.setInitialized = function(i, j) {
        'use strict';
        var k = {
            composerID: i,
            type: c('ReactComposerAttachmentActionType').SET_INITIALIZED,
            id: j
        };
        c('ReactComposerDispatcher').dispatch(k);
    };
    h.prototype.setBootloaded = function(i, j, k, l) {
        'use strict';
        var m = {
            composerID: i,
            type: c('ReactComposerAttachmentActionType').SET_BOOTLOADED,
            id: j,
            attachmentModule: k,
            postButtonModule: l
        };
        c('ReactComposerDispatcher').dispatch(m);
    };
    h.prototype.setBootstrapped = function(i, j) {
        'use strict';
        var k = {
            composerID: i,
            type: c('ReactComposerAttachmentActionType').SET_BOOTSTRAPPED,
            id: j
        };
        c('ReactComposerDispatcher').dispatch(k);
    };
    h.prototype.changeUploadStatus = function(i, j) {
        'use strict';
        var k = {
            composerID: i,
            type: c('ReactComposerAttachmentActionType').UPLOAD_ATTACHMENT,
            uploading: j
        };
        c('ReactComposerDispatcher').dispatch(k);
    };

    function h() {
        'use strict';
    }
    f.exports = new h();
}, null);
__d('ReactComposerActionStore', ['errorCode', 'ReactComposerActionTypes', 'ReactComposerEvents', 'ReactComposerStoreBase', 'Arbiter', 'AsyncResponse', 'Set'], function a(b, c, d, e, f, g, h) {
    var i, j;
    if (c.__markCompiled) c.__markCompiled();
    i = babelHelpers.inherits(k, c('ReactComposerStoreBase'));
    j = i && i.prototype;

    function k(l, m) {
        'use strict';
        l = l ? l : function() {
            return null;
        };
        var n;
        j.constructor.call(this, l, function(o) {
            if (!(n && n.__shouldIgnoreAction(o))) switch (o.type) {
                case c('ReactComposerActionTypes').POST_STARTED:
                    n && n.$ReactComposerActionStore2(o);
                    break;
                case c('ReactComposerActionTypes').POST_INTENDED:
                    n && n.$ReactComposerActionStore3(o);
                    break;
                case c('ReactComposerActionTypes').POST_SUCCEEDED:
                    n && n.$ReactComposerActionStore4(o);
                    break;
                case c('ReactComposerActionTypes').POST_ERROR:
                    n && n.$ReactComposerActionStore5(o);
                    break;
                case c('ReactComposerActionTypes').POST_FINALLY:
                    n && n.$ReactComposerActionStore6(o);
                    break;
                default:
            }
            m && m(o);
        });
        n = this;
        this.$ReactComposerActionStore1 = new(c('Set'))();
    }
    k.prototype.registerComposerID = function(l) {
        'use strict';
        this.$ReactComposerActionStore1.add(l);
    };
    k.prototype.$ReactComposerActionStore2 = function(l) {
        'use strict';
        var m = this.validateAction(l, 'composerID');
        this.__onPostStarted && this.__onPostStarted(l);
        c('Arbiter').inform(c('ReactComposerEvents').POST_STARTED + m);
    };
    k.prototype.$ReactComposerActionStore3 = function(l) {
        'use strict';
        this.validateAction(l, ['composerID', 'actorID', 'config', 'targetID']);
        if (!this.__canPost || this.__canPost(l)) this.$ReactComposerActionStore2(l);
    };
    k.prototype.$ReactComposerActionStore4 = function(l) {
        'use strict';
        var m = this.validateAction(l, 'composerID');
        this.__onPostSucceeded && this.__onPostSucceeded(l);
        c('Arbiter').inform(c('ReactComposerEvents').POST_SUCCEEDED + m);
    };
    k.prototype.$ReactComposerActionStore5 = function(l) {
        'use strict';
        if (this.__onPostError) return this.__onPostError(l);
        if (l.response) {
            var m = l.response.getError && l.response.getError() == 1455004;
            if (m) return;
            c('AsyncResponse').defaultErrorHandler(l.response);
        }
    };
    k.prototype.$ReactComposerActionStore6 = function(l) {
        'use strict';
        this.__onPostFinally && this.__onPostFinally(l);
    };
    k.prototype.__shouldIgnoreAction = function(l) {
        'use strict';
        var m = this.validateAction(l, 'composerID');
        return !this.$ReactComposerActionStore1.has(m);
    };
    f.exports = k;
}, null);
__d('ReactComposerInit', ['invariant', 'ReactComposerEvents', 'Arbiter', 'ReactComposerIDGenerator', 'Map', 'React', 'ReactDOM'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = {
        instances: new(c('Map'))(),
        changeProps: function(j, k) {
            var l = i._getCurrentInstance(j);
            l.props = k;
            i.resetComposer(j);
        },
        normalizeComposerID: function(j) {
            if (!j.contextConfig.composerID) j.contextConfig.composerID = c('ReactComposerIDGenerator').getID();
            return j.contextConfig.composerID;
        },
        init: function(j, k, l) {
            var m = i.normalizeComposerID(k);
            c('ReactDOM').render(c('React').createElement(j, k), l);
            i.instances.set(m, {
                ComposerModule: j,
                props: k,
                container: l
            });
        },
        resetComposer: function(j) {
            var k = i._unmountReact(j);
            k.props.contextConfig.composerID = c('ReactComposerIDGenerator').getID();
            k.props.prefillConfig = {};
            i.init(k.ComposerModule, k.props, k.container);
            c('Arbiter').inform(c('ReactComposerEvents').COMPOSER_RESET + j, {
                newComposerID: k.props.contextConfig.composerID
            });
        },
        isInstanceMounted: function(j) {
            return !!i.instances.get(j);
        },
        unmountInstance: function(j) {
            if (i.isInstanceMounted(j)) {
                i._unmountReact(j);
                i.instances['delete'](j);
            }
        },
        _unmountReact: function(j) {
            var k = i._getCurrentInstance(j);
            c('ReactDOM').unmountComponentAtNode(k.container);
            return k;
        },
        _getCurrentInstance: function(j) {
            var k = i.instances.get(j);
            !k ? h(0) : void 0;
            return k;
        }
    };
    f.exports = i;
}, null);
__d('ReactComposerScrapedAttachmentActionType', ['keyMirrorRecursive'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = c('keyMirrorRecursive')({
        ATTACHMENT_SCRAPE_ENABLED: null,
        ATTACHMENT_PERMISSIVE_MATCH_SETTED: null,
        ATTACHMENT_SCRAPE_INTENDED: null,
        ATTACHMENT_SCRAPED: null,
        ATTACHMENT_CAROUSEL_UPLOAD: null,
        ATTACHMENT_SHARE_SELECTED: null
    }, 'ReactComposerScrapedAttachmentActionType');
}, null);
__d('ReactComposerSproutsDisplayState', ['keyMirrorRecursive'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = c('keyMirrorRecursive')({
        INLINE: null,
        EXPANDED: null
    }, 'ReactComposerSproutsDisplayState');
}, null);
__d('ReactComposerStore', ['ReactComposerActionStore', 'ReactComposerActionTypes', 'ReactComposerSproutsDisplayState', 'ReactComposerAttachmentActionType', 'ReactComposerScrapedAttachmentActionType', 'ReactComposerInit', 'Bootloader'], function a(b, c, d, e, f, g) {
    var h, i;
    if (c.__markCompiled) c.__markCompiled();
    h = babelHelpers.inherits(j, c('ReactComposerActionStore'));
    i = h && h.prototype;

    function j() {
        'use strict';
        var k;
        i.constructor.call(this, function() {
            return {
                isActive: false,
                serverErrorResponse: null,
                posting: false,
                postSucceeded: false,
                publishing: false,
                ref: null,
                composerVersion: null,
                targetType: null,
                sproutsDisplayState: c('ReactComposerSproutsDisplayState').INLINE
            };
        }, function(l) {
            switch (l.type) {
                case c('ReactComposerActionTypes').INIT_CONFIG:
                    k && k.$ReactComposerStore1(l);
                    break;
                case c('ReactComposerActionTypes').PUBLISH_STARTED:
                    k && k.$ReactComposerStore2(l);
                    break;
                case c('ReactComposerAttachmentActionType').SELECT_ATTACHMENT:
                    k && k.$ReactComposerStore3(l);
                    break;
                case c('ReactComposerActionTypes').EXPAND_SPROUTS:
                    k && k.$ReactComposerStore4(l);
                    break;
                case c('ReactComposerAttachmentActionType').UPLOAD_ATTACHMENT:
                case c('ReactComposerScrapedAttachmentActionType').ATTACHMENT_SCRAPED:
                    k && k.$ReactComposerStore5(l);
                    break;
            }
        });
        k = this;
    }
    j.prototype.getServerErrorResponse = function(k) {
        'use strict';
        return this.getComposerData(k).serverErrorResponse;
    };
    j.prototype.getRef = function(k) {
        'use strict';
        return this.getComposerData(k).ref;
    };
    j.prototype.getComposerVersion = function(k) {
        'use strict';
        return this.getComposerData(k).composerVersion;
    };
    j.prototype.getTargetType = function(k) {
        'use strict';
        return this.getComposerData(k).targetType;
    };
    j.prototype.isPosting = function(k) {
        'use strict';
        return this.getComposerData(k).posting;
    };
    j.prototype.hasPostSucceeded = function(k) {
        'use strict';
        return this.getComposerData(k).postSucceeded;
    };
    j.prototype.isActive = function(k) {
        'use strict';
        return this.getComposerData(k).isActive;
    };
    j.prototype.isPublishing = function(k) {
        'use strict';
        return this.getComposerData(k).publishing;
    };
    j.prototype.getSproutsDisplayState = function(k) {
        'use strict';
        return this.getComposerData(k).sproutsDisplayState;
    };
    j.prototype.isUploading = function(k) {
        'use strict';
        return this.getComposerData(k).uploading;
    };
    j.prototype.__shouldIgnoreAction = function(k) {
        'use strict';
        return false;
    };
    j.prototype.__onPostStarted = function(k) {
        'use strict';
        var l = this.validateAction(k, 'composerID'),
            m = this.getComposerData(k.composerID);
        m.posting = true;
        this.emitChange(l);
    };
    j.prototype.__onPostSucceeded = function(k) {
        'use strict';
        var l = this.validateAction(k, 'composerID'),
            m = this.getComposerData(k.composerID);
        m.serverErrorResponse = null;
        m.posting = false;
        m.postSucceeded = true;
        m.publishing = false;
        this.emitChange(l);
    };
    j.prototype.__onPostError = function(k) {
        'use strict';
        var l = this.validateAction(k, 'composerID'),
            m = this.getComposerData(k.composerID);
        m.serverErrorResponse = k.response;
        m.posting = false;
        m.postSucceeded = false;
        m.publishing = false;
        this.emitChange(l);
    };
    j.prototype.__onPostFinally = function(k) {
        'use strict';
        var l = this.validateAction(k, 'composerID'),
            m = this.getComposerData(k.composerID);
        m.posting = false;
        m.publishing = false;
        this.emitChange(l);
    };
    j.prototype.$ReactComposerStore1 = function(k) {
        'use strict';
        var l = this.validateAction(k, ['composerID', 'config']),
            m = l[0],
            n = l[1],
            o = this.getComposerData(m);
        o.ref = n.ref;
        o.composerVersion = n.composerVersion;
        o.targetType = n.targetType;
    };
    j.prototype.$ReactComposerStore2 = function(k) {
        'use strict';
        var l = this.validateAction(k, 'composerID'),
            m = this.getComposerData(k.composerID);
        m.publishing = true;
        this.emitChange(l);
    };
    j.prototype.$ReactComposerStore5 = function(k) {
        'use strict';
        var l = this.validateAction(k, 'composerID'),
            m = this.getComposerData(k.composerID);
        m.uploading = k.uploading;
        this.emitChange(l);
    };
    j.prototype.$ReactComposerStore3 = function(k) {
        'use strict';
        var l = this.validateAction(k, 'composerID'),
            m = this.getComposerData(l);
        m.sproutsDisplayState = c('ReactComposerSproutsDisplayState').EXPANDED;
        if (!m.isActive) {
            m.isActive = true;
            c('Bootloader').loadModules(["curry", "Run", "ReactComposerHandleUnsavedChanges", "URI"], function(n, o, p, q) {
                return (o.onBeforeUnload(n(p.handler, l, q.getNextURI())));
            }, 'ReactComposerStore');
        }
        this.emitChange(l);
    };
    j.prototype.$ReactComposerStore4 = function(k) {
        'use strict';
        var l = this.validateAction(k, 'composerID'),
            m = this.getComposerData(l);
        m.sproutsDisplayState = c('ReactComposerSproutsDisplayState').EXPANDED;
        this.emitChange(l);
    };
    j.prototype.__cleanup = function(k) {
        'use strict';
        setTimeout(c('ReactComposerInit').resetComposer.bind(null, k.composerID), 0);
    };
    f.exports = new j();
}, null);
__d('ReactComposerAttachmentLoader', ['ReactComposerAttachmentActions', 'ReactComposerAttachmentInitState', 'ReactComposerAttachmentStore', 'ReactComposerStore', 'XReactComposerLoggingODSController', 'AsyncRequest'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        load: function(i, j, k, l) {
            var m = c('ReactComposerAttachmentStore').getAttachment(i, j);
            if (!m || m.initState === c('ReactComposerAttachmentInitState').INITIALIZED) return;
            c('ReactComposerAttachmentActions').setInitialized(i, j);
            this._logToODS(i, 'bootload_start', j);
            k(function(n, o) {
                this._logToODS(i, 'bootload_done', j);
                c('ReactComposerAttachmentActions').setBootloaded(i, j, n, o);
            }.bind(this));
            this._logToODS(i, 'bootstrap_start', j);
            new(c('AsyncRequest'))(l).setHandler(function() {
                this._logToODS(i, 'bootstrap_done', j);
                setTimeout(function() {
                    return c('ReactComposerAttachmentActions').setBootstrapped(i, j);
                }, 0);
            }.bind(this)).send();
        },
        _logToODS: function(i, event, j) {
            var k = c('XReactComposerLoggingODSController').getURIBuilder().setString('event', event).setString('attachment_type', j).setEnum('composer_type', c('ReactComposerStore').getRef(i)).getURI();
            new(c('AsyncRequest'))(k).send();
        }
    };
    f.exports = h;
}, null);
__d('ReactComposerAttachmentPlaceholder.react', ['cx', 'ReactComponentWithPureRenderMixin', 'React', 'XUISpinner.react', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').createClass({
        displayName: 'ReactComposerAttachmentPlaceholder',
        mixins: [c('ReactComponentWithPureRenderMixin')],
        render: function() {
            var j = c('joinClasses')(this.props.className, "_2nt-");
            return (c('React').createElement('div', {
                className: j
            }, c('React').createElement(c('XUISpinner.react'), {
                className: "_2nt_",
                size: 'large'
            })));
        }
    });
    f.exports = i;
}, null);
__d('ReactComposerAttachmentSelector.react', ['cx', 'Image.react', 'Link.react', 'ReactComponentWithPureRenderMixin', 'React', 'TooltipData', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'ReactComposerAttachmentSelector',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                selected: i.bool,
                label: i.string.isRequired,
                icon: i.object.isRequired,
                onSelected: i.func.isRequired
            },
            getDefaultProps: function() {
                return {
                    selected: false
                };
            },
            render: function() {
                var k = c('joinClasses')("_4-h7" + (this.props.selected ? ' ' + "_5qtn" : ''), 'fbReactComposerAttachmentSelector_' + this.props.attachmentID);
                return (c('React').createElement(c('Link.react'), babelHelpers['extends']({
                    onClick: this.props.onSelected,
                    className: k,
                    role: 'tab',
                    'aria-selected': this.props.selected,
                    'data-tooltip-delay': '500'
                }, c('TooltipData').propsFor(this.props.label), this.props), c('React').createElement('span', {
                    className: "_4-fs"
                }, c('React').createElement(c('Image.react'), {
                    src: this.props.icon,
                    className: "_5qto"
                }), c('React').createElement('span', {
                    className: "_5qtp"
                }, this.props.label), c('React').createElement('span', {
                    className: "_4-h8"
                }))));
            }
        });
    f.exports = j;
}, null);
__d('ReactComposerContextMixin', ['ComposerEntryPointRef', 'React', 'getObjectValues'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes,
        i = {
            contextTypes: {
                actorID: h.string.isRequired,
                composerID: h.string.isRequired,
                composerType: h.oneOf(c('getObjectValues')(c('ComposerEntryPointRef'))).isRequired,
                gks: h.object.isRequired,
                targetID: h.string.isRequired,
                jsModules: h.object
            }
        };
    f.exports = i;
}, null);
__d('ReactComposerPropsAndStoreBasedStateMixin', ['invariant', 'ReactComposerContextMixin', 'ExecutionEnvironment', 'StoreBasedStateMixinHelper', 'setImmediate'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = function() {
        for (var j = arguments.length, k = Array(j), l = 0; l < j; l++) k[l] = arguments[l];
        return {
            mixins: [c('ReactComposerContextMixin')],
            getInitialState: function() {
                var m = void 0;
                if (this.constructor.getAttachmentInitialState) {
                    m = this.constructor.getAttachmentInitialState(this.context.composerID, this.props, this.context);
                } else m = {};
                if (this.constructor.beforeCalculateInitialState) this.constructor.beforeCalculateInitialState(this.context.composerID, this.props, this.context);
                return Object.assign({}, m, this.constructor.calculateState(this.context.composerID, this.props, this.context));
            },
            componentWillMount: function() {
                !this.constructor.calculateState ? h(0) : void 0;
                !this.context.composerID ? h(0) : void 0;
                this._recalculateStateID = null;
                var m = function(n) {
                    if (!c('ExecutionEnvironment').canUseDOM) return;
                    if (this.isMounted() && n.composerID === this.context.composerID) this.setState(this.constructor.calculateState(this.context.composerID, this.props, this.context));
                    this._recalculateStateID = null;
                }.bind(this);
                this._mixin = new(c('StoreBasedStateMixinHelper'))(k);
                this._mixin.subscribeCallback(function(n) {
                    if (this._recalculateStateID === null) this._recalculateStateID = c('setImmediate')(m, n);
                }.bind(this));
            },
            componentWillReceiveProps: function(m) {
                var n = void 0;
                if (this.constructor.getAttachmentWillReceivePropsState) n = this.constructor.getAttachmentWillReceivePropsState(this.context.composerID, m, this.props, this.context);
                this.setState(Object.assign({}, n || {}, this.constructor.calculateState(this.context.composerID, m, this.context)));
            },
            componentWillUnmount: function() {
                this._mixin.release();
                this._mixin = null;
            }
        };
    };
    f.exports = i;
}, null);
__d('ReactComposerAttachmentSelectorContainer.react', ['ReactComposerAttachmentActions', 'ReactComposerAttachmentSelector.react', 'ReactComposerAttachmentStore', 'ReactComposerAttachmentType', 'ComposerEntryPointRef', 'ReactComposerEvents', 'ReactComposerPropsAndStoreBasedStateMixin', 'Arbiter', 'ReactComponentWithPureRenderMixin', 'React', 'QE', 'emptyFunction', 'getObjectValues'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes,
        i = c('React').createClass({
            displayName: 'ComposerAttachmentSelectorContainer',
            mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerAttachmentStore'))],
            propTypes: {
                attachmentID: h.oneOf(c('getObjectValues')(c('ReactComposerAttachmentType'))).isRequired,
                onSelected: h.func
            },
            getDefaultProps: function() {
                return {
                    onSelected: c('emptyFunction')
                };
            },
            statics: {
                calculateState: function(j, k) {
                    return {
                        selected: c('ReactComposerAttachmentStore').getIsAttachmentSelected(j, k.attachmentID)
                    };
                }
            },
            _onSelected: function() {
                c('ReactComposerAttachmentActions').selectAttachment(this.context.composerID, this.props.attachmentID, true);
                if (this.context.composerType === c('ComposerEntryPointRef').TIMELINE && this.context.actorID !== this.context.targetID) {
                    c('QE').logExposure('entdirectedpost_multi_photos_universe');
                    c('QE').logExposure('www_entdirectedphoto_with_multimedia');
                }
                setTimeout(function() {
                    return c('Arbiter').inform(c('ReactComposerEvents').ACTIVATE_ATTACHMENT + this.context.composerID);
                }.bind(this), 0);
            },
            render: function() {
                var j = this.props.onSelected !== c('emptyFunction') ? this.props.onSelected : this._onSelected;
                return (c('React').createElement(c('ReactComposerAttachmentSelector.react'), babelHelpers['extends']({}, this.props, {
                    selected: this.state.selected,
                    showNLUEducation: this.state.showNLUEducation,
                    onSelected: j
                })));
            }
        });
    f.exports = i;
}, null);
__d('ReactComposerDragDropPrompt.react', ['cx', 'fbt', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').createClass({
        displayName: 'ReactComposerDragDropPrompt',
        mixins: [c('ReactComponentWithPureRenderMixin')],
        render: function() {
            return (c('React').createElement('div', {
                className: "_1y-n"
            }, c('React').createElement('div', {
                className: "_1y-o"
            }, c('React').createElement('span', {
                className: "_1y-p"
            }, i._("Drag Link\/Photos\/Video Here")), c('React').createElement('span', {
                className: "_1y-q"
            }, i._("Drop Link")), c('React').createElement('span', {
                className: "_1y-r"
            }, i._("Drop Photo\/Video")), c('React').createElement('span', {
                className: "_1y-s"
            }, i._("Drop Photos")))));
        }
    });
    f.exports = j;
}, null);
__d('ReactComposerDragDropPromptLazy.react', ['ReactComposerDragDropPrompt.react', 'ComposerXDragDropUtils', 'DragDropTarget', 'ReactComponentWithPureRenderMixin', 'React', 'ReactDOM', 'emptyFunction'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes,
        i = c('React').createClass({
            displayName: 'ReactComposerDragDropPromptLazy',
            _dragDropTarget: undefined,
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                root: h.object.isRequired,
                onFilesDrop: h.func,
                onURLDrop: h.func
            },
            getDefaultProps: function() {
                return {
                    onFilesDrop: c('emptyFunction'),
                    onURLDrop: c('emptyFunction')
                };
            },
            componentDidMount: function() {
                var j = c('ReactDOM').findDOMNode(this.props.root);
                this._dragDropTarget = new(c('DragDropTarget'))(j).setOnFilesDropCallback(this.props.onFilesDrop).setOnURLDropCallback(this.props.onURLDrop).setFileFilter(c('ComposerXDragDropUtils').filterImages).enable();
            },
            componentWillUnmount: function() {
                this._dragDropTarget && this._dragDropTarget.disable();
            },
            render: function() {
                return c('React').createElement(c('ReactComposerDragDropPrompt.react'), null);
            }
        });
    f.exports = i;
}, null);
__d('ReactComposerLifeEventActionTypes', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = {
        ADD_LIFE_EVENT_TYPE_DETAILS: 'ADD_LIFE_EVENT_TYPE_DETAILS',
        DESELECT_LIFE_EVENT_TYPE: 'DESELECT_LIFE_EVENT_TYPE',
        SELECT_CATEGORY: 'SELECT_CATEGORY',
        SELECT_LIFE_EVENT_TYPE: 'SELECT_LIFE_EVENT_TYPE',
        SET_CONFIG: 'SET_CONFIG',
        SET_LIFE_EVENT_FIELD_VALUE: 'SET_LIFE_EVENT_FIELD_VALUE',
        SET_LIFE_EVENT_TYPEAHEAD_TEXT: 'SET_LIFE_EVENT_TYPEAHEAD_TEXT',
        SET_SELECTED_LIFE_EVENT_ICON_ID: 'SET_SELECTED_LIFE_EVENT_ICON_ID',
        SET_SELECTED_LIFE_EVENT_STORY: 'SET_SELECTED_LIFE_EVENT_STORY',
        SET_SELECTED_LIFE_EVENT_TITLE: 'SET_SELECTED_LIFE_EVENT_TITLE'
    };
}, null);
__d('ReactComposerLifeEventActions', ['ReactComposerDispatcher', 'ReactComposerLifeEventActionTypes', 'ReactComposerLifeEventStore'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    c('ReactComposerLifeEventStore');
    h.prototype.setConfig = function(i, j) {
        'use strict';
        var k = c('ReactComposerLifeEventActionTypes').SET_CONFIG;
        c('ReactComposerDispatcher').dispatch({
            composerID: i,
            config: j,
            type: k
        });
    };
    h.prototype.selectLifeEventType = function(i, j, k) {
        'use strict';
        var l = c('ReactComposerLifeEventActionTypes').SELECT_LIFE_EVENT_TYPE;
        c('ReactComposerDispatcher').dispatch({
            composerID: i,
            lifeEventType: k,
            profileID: j,
            type: l
        });
    };
    h.prototype.deselectLifeEventType = function(i) {
        'use strict';
        var j = c('ReactComposerLifeEventActionTypes').DESELECT_LIFE_EVENT_TYPE;
        c('ReactComposerDispatcher').dispatch({
            composerID: i,
            type: j
        });
    };
    h.prototype.setSelectedCategoryIndex = function(i, j) {
        'use strict';
        var k = c('ReactComposerLifeEventActionTypes').SELECT_CATEGORY;
        c('ReactComposerDispatcher').dispatch({
            composerID: i,
            index: j,
            type: k
        });
    };
    h.prototype.setLifeEventTypeaheadText = function(i, j) {
        'use strict';
        var k = c('ReactComposerLifeEventActionTypes').SET_LIFE_EVENT_TYPEAHEAD_TEXT;
        c('ReactComposerDispatcher').dispatch({
            composerID: i,
            text: j,
            type: k
        });
    };
    h.prototype.setSelectedLifeEventTitle = function(i, j) {
        'use strict';
        var k = c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_TITLE;
        c('ReactComposerDispatcher').dispatch({
            composerID: i,
            title: j,
            type: k
        });
    };
    h.prototype.setSelectedLifeEventStory = function(i, j) {
        'use strict';
        var k = c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_STORY;
        c('ReactComposerDispatcher').dispatch({
            composerID: i,
            story: j,
            type: k
        });
    };
    h.prototype.setSelectedLifeEventIconID = function(i, j) {
        'use strict';
        var k = c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_ICON_ID;
        c('ReactComposerDispatcher').dispatch({
            composerID: i,
            iconID: j,
            type: k
        });
    };
    h.prototype.setLifeEventFieldValue = function(i, j, k) {
        'use strict';
        var l = c('ReactComposerLifeEventActionTypes').SET_LIFE_EVENT_FIELD_VALUE;
        c('ReactComposerDispatcher').dispatch({
            composerID: i,
            fieldID: j,
            fieldValue: k,
            type: l
        });
    };
    h.prototype.addLifeEventTypeDetails = function(i, j, k) {
        'use strict';
        var l = c('ReactComposerLifeEventActionTypes').ADD_LIFE_EVENT_TYPE_DETAILS;
        c('ReactComposerDispatcher').dispatch({
            composerID: i,
            details: k,
            lifeEventType: j,
            type: l
        });
    };

    function h() {
        'use strict';
    }
    f.exports = new h();
}, null);
__d("XLifeEventAsyncDetailsController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/life_event\/composer\/async_details\/", {
        life_event_type: {
            type: "Enum",
            required: true,
            enumType: 0
        }
    });
}, null);
__d('ReactComposerLifeEventStore', ['invariant', 'ReactComposerStoreBase', 'ReactComposerLifeEventActions', 'ReactComposerLifeEventActionTypes', 'ReactComposerLifeEventConstants', 'AsyncDialog', 'AsyncRequest', 'Bootloader', 'XLifeEventAsyncDetailsController', 'flattenArray'], function a(b, c, d, e, f, g, h) {
    var i, j;
    if (c.__markCompiled) c.__markCompiled();

    function k(n) {
        return n.filter(function(o) {
            return (c('ReactComposerLifeEventConstants').SUGGESTED_LIFE_EVENT_TYPES.indexOf(o.id) >= 0);
        });
    }

    function l(n) {
        var o = [];
        n.forEach(function(p) {
            c('flattenArray')(p.life_events).forEach(function(q) {
                o.push(q);
            });
        });
        return o;
    }
    i = babelHelpers.inherits(m, c('ReactComposerStoreBase'));
    j = i && i.prototype;

    function m() {
        'use strict';
        var n;
        j.constructor.call(this, function() {
            return {
                allLifeEventTypes: [],
                categories: [],
                hasUnsavedData: false,
                iconsMap: {},
                lifeEventTypeaheadText: '',
                lifeEventTypeDetails: {},
                selectedCategoryIndex: undefined,
                selectedLifeEvent: {},
                suggestedLifeEventTypes: []
            };
        }, function(o) {
            switch (o.type) {
                case c('ReactComposerLifeEventActionTypes').SET_CONFIG:
                    n && n.$ReactComposerLifeEventStore1(o);
                    break;
                case c('ReactComposerLifeEventActionTypes').SELECT_LIFE_EVENT_TYPE:
                    n && n.$ReactComposerLifeEventStore2(o);
                    break;
                case c('ReactComposerLifeEventActionTypes').DESELECT_LIFE_EVENT_TYPE:
                    n && n.$ReactComposerLifeEventStore3(o);
                    break;
                case c('ReactComposerLifeEventActionTypes').ADD_LIFE_EVENT_TYPE_DETAILS:
                    n && n.$ReactComposerLifeEventStore4(o);
                    break;
                case c('ReactComposerLifeEventActionTypes').SELECT_CATEGORY:
                    n && n.$ReactComposerLifeEventStore5(o);
                    break;
                case c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_ICON_ID:
                    n && n.$ReactComposerLifeEventStore6(o);
                    break;
                case c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_STORY:
                    n && n.$ReactComposerLifeEventStore7(o);
                    break;
                case c('ReactComposerLifeEventActionTypes').SET_SELECTED_LIFE_EVENT_TITLE:
                    n && n.$ReactComposerLifeEventStore8(o);
                    break;
                case c('ReactComposerLifeEventActionTypes').SET_LIFE_EVENT_TYPEAHEAD_TEXT:
                    n && n.$ReactComposerLifeEventStore9(o);
                    break;
                case c('ReactComposerLifeEventActionTypes').SET_LIFE_EVENT_FIELD_VALUE:
                    n && n.$ReactComposerLifeEventStore10(o);
                    break;
            }
        });
        n = this;
    }
    m.prototype.getCategories = function(n) {
        'use strict';
        return this.getComposerData(n).categories;
    };
    m.prototype.getAllLifeEventTypes = function(n) {
        'use strict';
        return this.getComposerData(n).allLifeEventTypes;
    };
    m.prototype.getSuggestedLifeEventTypes = function(n) {
        'use strict';
        return this.getComposerData(n).suggestedLifeEventTypes;
    };
    m.prototype.getOtherID = function(n) {
        'use strict';
        return this.getComposerData(n).otherID;
    };
    m.prototype.getSelectedLifeEventType = function(n) {
        'use strict';
        return this.getComposerData(n).selectedLifeEvent.type;
    };
    m.prototype.getSelectedLifeEventFields = function(n) {
        'use strict';
        return this.getComposerData(n).selectedLifeEvent.fields;
    };
    m.prototype.getSelectedCategoryIndex = function(n) {
        'use strict';
        return this.getComposerData(n).selectedCategoryIndex;
    };
    m.prototype.getSelectedLifeEventDetails = function(n) {
        'use strict';
        var o = this.getComposerData(n);
        return Object.assign({}, o.selectedLifeEvent);
    };
    m.prototype.getIconsMap = function(n) {
        'use strict';
        var o = this.getComposerData(n);
        return Object.assign({}, o.iconsMap);
    };
    m.prototype.getSelectedLifeEventIconID = function(n) {
        'use strict';
        var o = this.getComposerData(n);
        return o.selectedLifeEvent.iconID;
    };
    m.prototype.getSelectedLifeEventStory = function(n) {
        'use strict';
        return this.getComposerData(n).selectedLifeEvent.story;
    };
    m.prototype.getSelectedLifeEventTitle = function(n) {
        'use strict';
        return this.getComposerData(n).selectedLifeEvent.title;
    };
    m.prototype.getLifeEventTypeaheadText = function(n) {
        'use strict';
        return this.getComposerData(n).lifeEventTypeaheadText;
    };
    m.prototype.isWaitingForLifeEventDetails = function(n) {
        'use strict';
        var o = this.getComposerData(n);
        return (o.selectedLifeEvent.type && !o.lifeEventTypeDetails[o.selectedLifeEvent.type]);
    };
    m.prototype.hasUnsavedData = function(n) {
        'use strict';
        var o = this.getComposerData(n);
        return (o.selectedLifeEvent.title.length > 0 && o.selectedLifeEvent.story.length > 0 && o.hasUnsavedData);
    };
    m.prototype.$ReactComposerLifeEventStore2 = function(n) {
        'use strict';
        var o = this.getComposerData(n.composerID);
        if (!o.isActive) {
            o.isActive = true;
            c('Bootloader').loadModules(["ReactComposerHandleUnsavedChanges"], function(q) {
                return q.addCustomCheck(n.composerID, function() {
                    return this.hasUnsavedData(n.composerID);
                }.bind(this));
            }.bind(this), 'ReactComposerLifeEventStore');
        }
        var p = c('ReactComposerLifeEventConstants').EDIT_WITH_MODAL_SPECIAL_CASES.indexOf(n.lifeEventType) >= 0;
        if (p) {
            this.$ReactComposerLifeEventStore11(n.composerID, n.profileID, n.lifeEventType);
        } else {
            o.selectedLifeEvent = {
                type: n.lifeEventType
            };
            if (o.lifeEventTypeDetails[n.lifeEventType] === undefined) {
                this.$ReactComposerLifeEventStore12(n.composerID, n.lifeEventType);
            } else this.$ReactComposerLifeEventStore13(o);
        }
        this.emitChange(n.composerID);
    };
    m.prototype.$ReactComposerLifeEventStore5 = function(n) {
        'use strict';
        var o = this.getComposerData(n.composerID);
        o.selectedCategoryIndex = n.index;
        this.emitChange(n.composerID);
    };
    m.prototype.$ReactComposerLifeEventStore6 = function(n) {
        'use strict';
        var o = this.getComposerData(n.composerID);
        o.selectedLifeEvent.iconID = n.iconID;
        o.hasUnsavedData = true;
        this.emitChange(n.composerID);
    };
    m.prototype.$ReactComposerLifeEventStore7 = function(n) {
        'use strict';
        var o = this.getComposerData(n.composerID);
        o.selectedLifeEvent.story = n.story;
        o.hasUnsavedData = true;
        this.emitChange(n.composerID);
    };
    m.prototype.$ReactComposerLifeEventStore8 = function(n) {
        'use strict';
        var o = this.getComposerData(n.composerID);
        o.selectedLifeEvent.title = n.title;
        o.hasUnsavedData = true;
        this.emitChange(n.composerID);
    };
    m.prototype.$ReactComposerLifeEventStore3 = function(n) {
        'use strict';
        var o = this.getComposerData(n.composerID);
        o.lifeEventTypeaheadText = '';
        o.selectedLifeEvent = {};
        this.emitChange(n.composerID);
    };
    m.prototype.$ReactComposerLifeEventStore9 = function(n) {
        'use strict';
        var o = this.getComposerData(n.composerID);
        o.lifeEventTypeaheadText = n.text;
        this.emitChange(n.composerID);
    };
    m.prototype.$ReactComposerLifeEventStore10 = function(n) {
        'use strict';
        var o = this.getComposerData(n.composerID);
        o.selectedLifeEvent.fields[n.fieldID] = n.fieldValue;
        o.hasUnsavedData = true;
        this.emitChange(n.composerID);
    };
    m.prototype.$ReactComposerLifeEventStore4 = function(n) {
        'use strict';
        var o = this.getComposerData(n.composerID);
        o.lifeEventTypeDetails[n.lifeEventType] = n.details;
        this.$ReactComposerLifeEventStore13(o);
        this.emitChange(n.composerID);
    };
    m.prototype.$ReactComposerLifeEventStore1 = function(n) {
        'use strict';
        var o = this.getComposerData(n.composerID),
            p = n.config.categories,
            q = c('ReactComposerLifeEventConstants').ICONS_MAP,
            r = n.config.otherID;
        !(p !== null && p !== undefined && q !== null && q !== undefined && r !== null && r !== undefined) ? h(0): void 0;
        var s = l(p);
        s.forEach(function(t) {
            return (t.icon = q[t.iconID]);
        });
        o.iconsMap = q;
        o.categories = p;
        o.allLifeEventTypes = s;
        o.suggestedLifeEventTypes = k(s);
        o.otherID = n.config.otherID;
        this.emitChange(n.composerID);
    };
    m.prototype.$ReactComposerLifeEventStore13 = function(n) {
        'use strict';
        var o = n.selectedLifeEvent.type,
            p = n.lifeEventTypeDetails[o],
            q = n.otherID === o;
        n.selectedLifeEvent.title = q ? n.lifeEventTypeaheadText : p.description;
        n.selectedLifeEvent.story = '';
        n.selectedLifeEvent.iconID = p.iconID;
        n.selectedLifeEvent.requiredFields = p.requiredFields;
        var r = {};
        Object.keys(p.requiredFields).forEach(function(s) {
            var t = p.requiredFields[s];
            t.options = t.options.filter(function(u) {
                return (typeof u.value === 'number');
            });
            if (t.category === c('ReactComposerLifeEventConstants').FIELD_CATEGORIES.DATA_FIELD_BACKED) r[s] = t.options[0].value;
        });
        n.selectedLifeEvent.fields = r;
    };
    m.prototype.$ReactComposerLifeEventStore12 = function(n, o) {
        'use strict';
        var p = c('XLifeEventAsyncDetailsController').getURIBuilder().setEnum('life_event_type', o).getURI();
        new(c('AsyncRequest'))(p).setHandler(function(q) {
            if (q.error) return;
            c('ReactComposerLifeEventActions').addLifeEventTypeDetails(n, o, q.payload);
        }).send();
    };
    m.prototype.$ReactComposerLifeEventStore11 = function(n, o, p) {
        'use strict';
        var q = c('ReactComposerLifeEventConstants').MLE_MODAL_CONTROLLER_URI,
            r = new(c('AsyncRequest'))(q).setData({
                composer_id: n,
                profile_id: o,
                surface: 'composer',
                mle_type: p
            });
        c('AsyncDialog').send(r);
    };
    f.exports = new m();
}, null);
__d('ReactComposerLifeEventStrings', ['fbt'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = {
        ATTACHMENT_SELECTOR_TEXT: h._("Life Event"),
        ICON_PICKER_CLOSE_BUTTON: h._("Close"),
        LIFE_EVENT_TYPE_TYPEAHEAD_PLACEHOLDER: h._("Search or type a title"),
        STORY_INPUT_PLACEHOLDER: h._("Add Story (optional)"),
        TITLE_INPUT_PLACEHOLDER: h._("Add Title")
    };
    f.exports = i;
}, null);
__d('ReactComposerLifeEventAttachmentSelector.react', ['ix', 'ReactComposerAttachmentType', 'ReactComposerAttachmentSelectorContainer.react', 'ReactComposerLifeEventStrings', 'ReactComposerContextMixin', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'ReactComposerLifeEventAttachmentSelector',
            mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerContextMixin')],
            propTypes: {
                label: i.string
            },
            getDefaultProps: function() {
                return {
                    label: c('ReactComposerLifeEventStrings').ATTACHMENT_SELECTOR_TEXT
                };
            },
            render: function() {
                return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'), {
                    attachmentID: c('ReactComposerAttachmentType').LIFE_EVENT,
                    icon: this.context.gks.has_facelift_glyphs ? h('/images/facelift/composer/icons/mle_16.png') : h('/images/litestand/composer/icons/mle.png'),
                    label: this.props.label
                }));
            }
        });
    f.exports = j;
}, null);
__d('ReactComposerAttachmentBodyMixin', ['invariant', 'ReactComposerAttachmentActions', 'ReactComposerAttachmentStore', 'ReactComposerPropsAndStoreBasedStateMixin', 'ReactComponentWithPureRenderMixin'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();

    function i() {
        for (var j = arguments.length, k = Array(j), l = 0; l < j; l++) k[l] = arguments[l];
        k = k.concat(c('ReactComposerAttachmentStore'));
        return {
            mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerPropsAndStoreBasedStateMixin').apply(this, k)],
            statics: {
                beforeCalculateInitialState: function(m, n) {
                    var o = this.getAttachmentConfig ? this.getAttachmentConfig(n) : n.config && n.config.attachmentsConfig && n.config.attachmentsConfig[this.attachmentID];
                    c('ReactComposerAttachmentActions').registerAttachment(m, {
                        id: this.attachmentID,
                        selected: n.selected,
                        config: o
                    });
                },
                calculateState: function(m, n) {
                    return Object.assign({
                        selected: c('ReactComposerAttachmentStore').getIsAttachmentSelected(m, this.attachmentID)
                    }, this.calculateAttachmentState ? this.calculateAttachmentState(m, n) : {});
                }
            },
            componentWillMount: function() {
                !this.constructor.attachmentID ? h(0) : void 0;
                !this.constructor.attachmentID ? h(0) : void 0;
            },
            render: function() {
                if (!this.state.selected) return null;
                return this.renderX();
            }
        };
    }
    f.exports = i;
}, null);
__d('ReactComposerLoadableAttachmentBodyMixin', ['cx', 'invariant', 'ReactComposerAttachmentBodyMixin', 'ReactComposerAttachmentInitState', 'ReactComposerAttachmentLoader', 'ReactComposerAttachmentPlaceholder.react', 'ReactComposerAttachmentStore', 'React'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = {
        mixins: [c('ReactComposerAttachmentBodyMixin')(c('ReactComposerAttachmentStore'))],
        statics: {
            calculateAttachmentState: function(k, l) {
                var m = c('ReactComposerAttachmentStore').getAttachment(k, this.attachmentID);
                return {
                    initState: m && m.initState,
                    attachmentModule: m && m.module,
                    bootstrapped: m && m.bootstrapped,
                    postButtonModule: m && m.postButtonModule
                };
            }
        },
        componentWillMount: function() {
            !this.constructor.attachmentID ? i(0) : void 0;
            if (this.props.selected && this._shouldInitialize()) this._initialize();
        },
        componentDidUpdate: function(k, l) {
            if (this.state.initState === c('ReactComposerAttachmentInitState').INITIALIZING && this._shouldInitialize()) this._initialize();
        },
        renderX: function() {
            if (!this.state.attachmentModule || !this.state.bootstrapped) {
                var k = this.getPlaceholderModule ? this.getPlaceholderModule() : c('ReactComposerAttachmentPlaceholder.react');
                return (c('React').createElement(k, babelHelpers['extends']({
                    className: "_3rlw",
                    init: this.init
                }, this.props)));
            }
            var l = this.state.attachmentModule;
            return (c('React').createElement(l, babelHelpers['extends']({}, this.props, {
                postButtonModule: this.state.postButtonModule
            })));
        },
        _shouldInitialize: function() {
            return this.shouldInitialize ? this.shouldInitialize() : true;
        },
        _initialize: function() {
            c('ReactComposerAttachmentLoader').load(this.context.composerID, this.constructor.attachmentID, this.bootload, this.getBootstrapURI());
        }
    };
    f.exports = j;
}, null);
__d("XReactComposerLifeEventAttachmentBootstrapController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/react_composer\/life_event\/bootstrap\/", {
        composer_id: {
            type: "String",
            required: true
        }
    });
}, null);
__d('ReactComposerLifeEventLazyAttachment.react', ['Bootloader', 'ReactComposerAttachmentType', 'ReactComposerLoadableAttachmentBodyMixin', 'React', 'XReactComposerLifeEventAttachmentBootstrapController'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').createClass({
        displayName: 'ReactComposerLifeEventLazyAttachment',
        mixins: [c('ReactComposerLoadableAttachmentBodyMixin')],
        statics: {
            attachmentID: c('ReactComposerAttachmentType').LIFE_EVENT
        },
        bootload: function(i) {
            c('Bootloader').loadModules(["ReactComposerLifeEventAttachmentContainer.react"], i, 'ReactComposerLifeEventLazyAttachment.react');
        },
        getBootstrapURI: function() {
            return c('XReactComposerLifeEventAttachmentBootstrapController').getURIBuilder().setString('composer_id', this.context.composerID).getURI();
        }
    });
    f.exports = h;
}, null);
__d('ReactComposerLiveVideoAttachmentSelector.react', ['fbt', 'ix', 'ReactComposerAttachmentSelectorContainer.react', 'ReactComposerAttachmentType', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = c('React').createClass({
            displayName: 'ReactComposerLiveVideoAttachmentSelector',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                label: j.string
            },
            getDefaultProps: function() {
                return {
                    label: h._("Live Video")
                };
            },
            render: function() {
                return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'), {
                    attachmentID: c('ReactComposerAttachmentType').LIVE_VIDEO,
                    label: this.props.label,
                    icon: i('/images/video/broadcast/video-live_16.png'),
                    'data-testid': 'live-video-attachment-selector'
                }));
            }
        });
    f.exports = k;
}, null);
__d("XReactComposerLiveVideoAttachmentBootstrapController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/react_composer\/live_video\/bootstrap\/", {
        composer_id: {
            type: "String",
            required: true
        },
        composer_type: {
            type: "Enum",
            required: true,
            enumType: 1
        },
        target_id: {
            type: "Int",
            required: true
        }
    });
}, null);
__d('ReactComposerLiveVideoLazyAttachment.react', ['ReactComposerAttachmentType', 'ReactComposerLoadableAttachmentBodyMixin', 'ActorURI', 'Bootloader', 'React', 'XReactComposerLiveVideoAttachmentBootstrapController'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes,
        i = c('React').createClass({
            displayName: 'ReactComposerLiveVideoLazyAttachment',
            mixins: [c('ReactComposerLoadableAttachmentBodyMixin')],
            propTypes: {
                selected: h.bool
            },
            statics: {
                attachmentID: c('ReactComposerAttachmentType').LIVE_VIDEO
            },
            bootload: function(j) {
                c('Bootloader').loadModules(["ReactComposerLiveVideoAttachmentContainer.react"], j, 'ReactComposerLiveVideoLazyAttachment.react');
            },
            getBootstrapURI: function() {
                return c('ActorURI').create(c('XReactComposerLiveVideoAttachmentBootstrapController').getURIBuilder().setString('composer_id', this.context.composerID).setEnum('composer_type', this.context.composerType).setInt('target_id', this.context.targetID).getURI(), this.context.actorID);
            }
        });
    f.exports = i;
}, null);
__d('ReactComposerMediaAttachmentSelector.react', ['fbt', 'ix', 'ReactComponentWithPureRenderMixin', 'React', 'ReactComposerAttachmentSelectorContainer.react', 'ReactComposerAttachmentType', 'ReactComposerContextMixin'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = c('React').createClass({
            displayName: 'ReactComposerMediaAttachmentSelector',
            mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerContextMixin')],
            propTypes: {
                isInMoreButton: j.bool,
                label: j.string
            },
            getDefaultProps: function() {
                return {
                    label: h._("Photo \/ Video")
                };
            },
            render: function() {
                return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'), {
                    attachmentID: c('ReactComposerAttachmentType').MEDIA,
                    label: this.props.label,
                    icon: this.context.gks.has_facelift_glyphs ? i('/images/facelift/composer/icons/camera_16.png') : i('/images/litestand/composer/icons/photo.png'),
                    'data-testid': 'media-attachment-selector'
                }));
            }
        });
    f.exports = k;
}, null);
__d('ReactComposerBootloaderPropTypes', ['React'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes;
    f.exports = h.shape({
        statusAttachment: h.func.isRequired,
        mediaAttachment: h.func.isRequired,
        qandaAttachment: h.func,
        questionAttachment: h.func,
        extraAttachment: h.func
    });
}, null);
__d("XReactComposerMediaAttachmentBootstrapController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/react_composer\/media\/bootstrap\/", {
        composer_id: {
            type: "String",
            required: true
        },
        composer_type: {
            type: "Enum",
            required: true,
            enumType: 1
        },
        target_id: {
            type: "String",
            required: true
        }
    });
}, null);
__d('ReactComposerMediaInitUtils', ['ActorURI', 'Bootloader', 'XReactComposerMediaAttachmentBootstrapController'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        bootload: function(i) {
            c('Bootloader').loadModules(["ReactComposerMediaAttachmentContainer.react", "ReactComposerMediaAttachmentPostButtonContainer.react"], i, 'ReactComposerMediaInitUtils');
        },
        getBootstrapURI: function(i, j, k, l) {
            return c('ActorURI').create(c('XReactComposerMediaAttachmentBootstrapController').getURIBuilder().setString('composer_id', i).setEnum('composer_type', j).setString('target_id', k).getURI(), l);
        }
    };
    f.exports = h;
}, null);
__d('ReactComposerMediaLazyAttachment.react', ['ReactComposerAttachmentType', 'ReactComposerBootloaderPropTypes', 'ReactComposerLoadableAttachmentBodyMixin', 'ReactComposerMediaInitUtils', 'React'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes,
        i = c('React').createClass({
            displayName: 'ReactComposerMediaLazyAttachment',
            mixins: [c('ReactComposerLoadableAttachmentBodyMixin')],
            propTypes: {
                additionalTaggers: h.arrayOf(h.shape({
                    button: h.element.isRequired,
                    container: h.element.isRequired
                })),
                additionalFooterActions: h.arrayOf(h.element),
                bootloader: c('ReactComposerBootloaderPropTypes')
            },
            statics: {
                attachmentID: c('ReactComposerAttachmentType').MEDIA
            },
            bootload: function(j) {
                if (this.props.bootloader) {
                    this.props.bootloader.mediaAttachment(j);
                } else c('ReactComposerMediaInitUtils').bootload(j);
            },
            getBootstrapURI: function() {
                return c('ReactComposerMediaInitUtils').getBootstrapURI(this.context.composerID, this.context.composerType, this.context.targetID, this.context.actorID);
            }
        });
    f.exports = i;
}, null);
__d('ReactComposerMLEAttachmentSelector.react', ['fbt', 'ix', 'ReactComponentWithPureRenderMixin', 'React', 'ReactComposerAttachmentSelectorContainer.react', 'ReactComposerAttachmentType'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = c('React').createClass({
            displayName: 'ReactComposerMLEAttachmentSelector',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                label: j.string
            },
            getDefaultProps: function() {
                return {
                    label: h._("Life Event")
                };
            },
            render: function() {
                return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'), {
                    'data-testid': 'mle-attachment-selector',
                    attachmentID: c('ReactComposerAttachmentType').MLE,
                    label: this.props.label,
                    icon: i('/images/litestand/composer/icons/mle.png')
                }));
            }
        });
    f.exports = k;
}, null);
__d("XReactComposerMLEAttachmentBootstrapController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/react_composer\/mle\/bootstrap\/", {
        composer_id: {
            type: "String",
            required: true
        }
    });
}, null);
__d('ReactComposerMLELazyAttachment.react', ['cx', 'ReactComposerAttachmentType', 'ReactComposerLoadableAttachmentBodyMixin', 'Bootloader', 'React', 'XReactComposerMLEAttachmentBootstrapController'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').createClass({
        displayName: 'ReactComposerMLELazyAttachment',
        mixins: [c('ReactComposerLoadableAttachmentBodyMixin')],
        statics: {
            attachmentID: c('ReactComposerAttachmentType').MLE
        },
        bootload: function(j) {
            c('Bootloader').loadModules(["ReactComposerMLEAttachmentContainer.react"], j, 'ReactComposerMLELazyAttachment.react');
        },
        getBootstrapURI: function() {
            return c('XReactComposerMLEAttachmentBootstrapController').getURIBuilder().setString('composer_id', this.context.composerID).getURI();
        }
    });
    f.exports = i;
}, null);
__d('ReactComposerQAndAAttachmentSelector.react', ['fbt', 'ix', 'ReactComposerAttachmentSelectorContainer.react', 'ReactComposerAttachmentType', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = c('React').createClass({
            displayName: 'ReactComposerQAndAAttachmentSelector',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                label: j.string
            },
            getDefaultProps: function() {
                return {
                    label: h._("Start a Q&A")
                };
            },
            render: function() {
                return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'), {
                    attachmentID: c('ReactComposerAttachmentType').QANDA,
                    label: this.props.label,
                    icon: i('/images/litestand/composer/icons/qanda.png')
                }));
            }
        });
    f.exports = k;
}, null);
__d("XReactComposerQAndAAttachmentBootstrapController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/react_composer\/qanda\/bootstrap\/", {
        composer_id: {
            type: "String",
            required: true
        },
        composer_type: {
            type: "Enum",
            required: true,
            enumType: 1
        },
        target_id: {
            type: "Int",
            required: true
        }
    });
}, null);
__d('ReactComposerQAndALazyAttachment.react', ['ReactComposerAttachmentType', 'ReactComposerBootloaderPropTypes', 'ReactComposerLoadableAttachmentBodyMixin', 'ActorURI', 'Bootloader', 'React', 'XReactComposerQAndAAttachmentBootstrapController'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').createClass({
        displayName: 'ReactComposerQAndALazyAttachment',
        mixins: [c('ReactComposerLoadableAttachmentBodyMixin')],
        statics: {
            attachmentID: c('ReactComposerAttachmentType').QANDA
        },
        propTypes: {
            bootloader: c('ReactComposerBootloaderPropTypes')
        },
        bootload: function(i) {
            if (this.props.bootloader && this.props.bootloader.qandaAttachment) {
                this.props.bootloader.qandaAttachment(i);
            } else c('Bootloader').loadModules(["ReactComposerQAndAAttachmentContainer.react"], i, 'ReactComposerQAndALazyAttachment.react');
        },
        getBootstrapURI: function() {
            var i = c('XReactComposerQAndAAttachmentBootstrapController').getURIBuilder().setString('composer_id', this.context.composerID).setEnum('composer_type', this.context.composerType).setInt('target_id', this.context.targetID).getURI();
            return c('ActorURI').create(i, this.context.actorID);
        }
    });
    f.exports = h;
}, null);
__d('ReactComposerConfig', ['ComposerEntryPointRef', 'ComposerTargetData', 'ComposerTargetType', 'ComposerSourceSurface', 'ComposerVersion', 'React', 'getObjectValues'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes;
    f.exports = h.shape({
        actorConfig: h.object,
        attachmentsConfig: h.object.isRequired,
        audienceXHP: h.any,
        contextInfo: h.object,
        loggingConfig: h.shape({
            targetType: h.oneOf(c('getObjectValues')(c('ComposerTargetType'))).isRequired,
            ref: h.oneOf(c('getObjectValues')(c('ComposerEntryPointRef'))).isRequired,
            composerSourceSurface: h.oneOf(c('getObjectValues')(c('ComposerSourceSurface'))).isRequired,
            composerVersion: h.oneOf(c('getObjectValues')(c('ComposerVersion'))).isRequired
        }).isRequired,
        mediaAcceptParam: h.shape({
            photos: h.string,
            both: h.string
        }),
        nuxConfig: h.object.isRequired,
        postButtonConfig: h.object,
        showExpandedComposer: h.bool,
        taggersConfig: h.object,
        sproutsConfig: h.object,
        targetData: h.instanceOf(c('ComposerTargetData')).isRequired
    });
}, null);
__d('ReactComposerActions', ['ReactComposerActionTypes', 'ReactComposerDispatcher', 'ReactComposerStore'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    c('ReactComposerStore');
    var h, i = {
        initConfig: function(j, k) {
            c('ReactComposerDispatcher').dispatch({
                composerID: j,
                type: c('ReactComposerActionTypes').INIT_CONFIG,
                config: k
            });
        },
        postError: function(j, k) {
            c('ReactComposerDispatcher').dispatch({
                composerID: j,
                type: c('ReactComposerActionTypes').POST_ERROR,
                response: k
            });
        },
        postIntended: function(j, k) {
            setTimeout(function() {
                if (!h || h(j, k.actorID, k.config, k.targetID)) c('ReactComposerDispatcher').dispatch({
                    composerID: j,
                    type: c('ReactComposerActionTypes').POST_INTENDED,
                    actorID: k.actorID,
                    config: k.config,
                    targetID: k.targetID
                });
            }, 0);
        },
        registerPostIntendedHandler: function(j) {
            h = j;
        },
        postStarted: function(j, k) {
            var l = k.actorID,
                m = k.composerType,
                n = k.config,
                o = k.onPostSuccess,
                p = k.targetID,
                q = babelHelpers.objectWithoutProperties(k, ['actorID', 'composerType', 'config', 'onPostSuccess', 'targetID']);
            setTimeout(function() {
                return c('ReactComposerDispatcher').dispatch({
                    composerID: j,
                    composerType: m,
                    type: c('ReactComposerActionTypes').POST_STARTED,
                    actorID: l,
                    config: n,
                    targetID: p,
                    onPostSuccess: o,
                    otherData: q
                });
            }, 0);
        },
        postSucceeded: function(j) {
            c('ReactComposerDispatcher').dispatch({
                composerID: j,
                type: c('ReactComposerActionTypes').POST_SUCCEEDED
            });
        },
        postFinally: function(j, k) {
            c('ReactComposerDispatcher').dispatch({
                composerID: j,
                type: c('ReactComposerActionTypes').POST_FINALLY,
                response: k
            });
        },
        publishStarted: function(j) {
            c('ReactComposerDispatcher').dispatch({
                composerID: j,
                type: c('ReactComposerActionTypes').PUBLISH_STARTED
            });
        },
        reset: function(j) {
            c('ReactComposerDispatcher').dispatch({
                composerID: j,
                type: c('ReactComposerActionTypes').COMPOSER_RESET
            });
        },
        expandSprouts: function(j) {
            c('ReactComposerDispatcher').dispatch({
                composerID: j,
                type: c('ReactComposerActionTypes').EXPAND_SPROUTS
            });
        }
    };
    f.exports = i;
}, null);
__d('ReactComposerPostUtilsCore', ['invariant', 'ReactComposerActions'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = {
        getCoreData: function(j, k, l) {
            !(!isNaN(l) && l > 0) ? h(0): void 0;
            return Object.assign({
                is_react: true,
                xhpc_composerid: j,
                xhpc_targetid: l
            }, k);
        },
        handlePostSucceeded: function(j) {
            c('ReactComposerActions').postSucceeded(j);
            c('ReactComposerActions').reset(j);
        }
    };
    f.exports = i;
}, null);
__d('ReactComposerProfilePhoto.react', ['cx', 'fbt', 'Image.react', 'Link.react', 'React', 'ReactComponentWithPureRenderMixin'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = 40,
        l = c('React').createClass({
            displayName: 'ReactComposerProfilePhoto',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                src: j.string.isRequired,
                profileName: j.string,
                profileURI: j.string
            },
            render: function() {
                var m = "_3hvt",
                    n = c('React').createElement(c('Image.react'), {
                        className: "_bth",
                        src: this.props.src,
                        height: k,
                        width: k
                    }),
                    o = i._("Profile of {name}", [i.param('name', this.props.profileName)]);
                return this.props.profileURI ? c('React').createElement(c('Link.react'), {
                    'aria-label': o,
                    className: m,
                    href: this.props.profileURI
                }, n) : c('React').createElement('div', {
                    className: m
                }, n);
            }
        });
    f.exports = l;
}, null);
__d('ReactComposerProfilePhotoBlock.react', ['cx', 'ReactComposerProfilePhoto.react', 'Layout.react', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('Layout.react').Column,
        j = c('Layout.react').FillColumn,
        k = c('React').PropTypes,
        l = c('React').createClass({
            displayName: 'ReactComposerProfilePhotoBlock',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                profileName: k.string,
                profilePicSrc: k.string.isRequired,
                profileURI: k.string,
                profilePhotoBadge: k.any,
                currentProfileBadgeURI: k.string,
                profileBadgeNUX: k.string
            },
            render: function() {
                var m = this.props.profilePhotoBadge;
                return (c('React').createElement(c('Layout.react'), null, c('React').createElement(i, {
                    className: "_42k7"
                }, m ? c('React').createElement(m, this.props) : c('React').createElement(c('ReactComposerProfilePhoto.react'), {
                    src: this.props.profilePicSrc,
                    profileName: this.props.profileName,
                    profileURI: this.props.profileURI
                })), c('React').createElement(j, null, this.props.children)));
            }
        });
    f.exports = l;
}, null);
__d('ReactComposerStatusLazyAttachmentTextarea.react', ['cx', 'ReactComposerContextMixin', 'ReactComposerEvents', 'Arbiter', 'ReactComponentWithPureRenderMixin', 'React', 'ReactDOM', 'SubscriptionsHandler', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'ReactComposerStatusLazyAttachmentTextarea',
            _subscriptions: undefined,
            mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerContextMixin')],
            propTypes: {
                expanded: i.bool,
                onFocus: i.func.isRequired,
                placeholder: i.string.isRequired
            },
            getInitialState: function() {
                return {
                    message: null
                };
            },
            componentWillMount: function() {
                this._subscriptions = new(c('SubscriptionsHandler'))();
                this._subscriptions.addSubscriptions(c('Arbiter').subscribe([c('ReactComposerEvents').ACTIVATE_ATTACHMENT + this.context.composerID], function() {
                    return this._focus();
                }.bind(this)));
            },
            componentWillUnmount: function() {
                this._onUnmount();
                this._subscriptions && this._subscriptions.release();
            },
            render: function() {
                return (c('React').createElement('div', {
                    className: c('joinClasses')(this.props.className, "_4h96")
                }, c('React').createElement('textarea', {
                    className: "_4h98",
                    ref: 'textarea',
                    placeholder: this.props.placeholder,
                    onFocus: this.props.onFocus,
                    onChange: this.onChange,
                    name: 'xhpc_message_text'
                }), c('React').createElement('input', {
                    type: 'hidden',
                    name: 'xhpc_message',
                    value: this.state.message
                })));
            },
            onChange: function(k) {
                this.setState({
                    message: k.target.value
                });
            },
            _focus: function() {
                this.refs.textarea.focus();
            },
            _onUnmount: function() {
                var k = c('ReactDOM').findDOMNode(this.refs.textarea);
                e.call(null, ['ReactComposerStatusActions', 'ReactComposerPrefillMentionsInput', 'ReactInputSelection'], function(l, m, n) {
                    var o = {
                            text: k.value
                        },
                        p = n.getSelection(k),
                        q = m.createEditorState(o, p);
                    l.setEditorState(this.context.composerID, q);
                }.bind(this));
            }
        });
    f.exports = j;
}, null);
__d('ReactComposerStatusLazyAttachmentTextareaContainer.react', ['cx', 'ReactComposerAttachmentStore', 'ReactComposerContextMixin', 'ReactComposerPropsAndStoreBasedStateMixin', 'ReactComposerStatusLazyAttachmentTextarea.react', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'ReactComposerStatusLazyAttachmentTextareaContainer',
            mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerContextMixin'), c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerAttachmentStore'))],
            statics: {
                calculateState: function(k, l) {
                    return {
                        focused: c('ReactComposerAttachmentStore').isSelectedAttachmentActive(k)
                    };
                }
            },
            propTypes: {
                expanded: i.bool,
                id: i.string,
                hasProfilePic: i.bool,
                onFocus: i.func.isRequired,
                placeholder: i.string.isRequired
            },
            render: function() {
                return (c('React').createElement(c('ReactComposerStatusLazyAttachmentTextarea.react'), babelHelpers['extends']({
                    className: (this.state.focused ? "_3_1x" : '') + (this.props.expanded ? ' ' + "_4h97" : '') + (this.props.hasProfilePic ? ' ' + "_30z" : '')
                }, this.props)));
            }
        });
    f.exports = j;
}, null);
__d('ReactComposerFooter.react', ['cx', 'ReactComponentWithPureRenderMixin', 'React', 'XUICardSection.react', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'ReactComposerFooter',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                background: i.string
            },
            getDefaultProps: function() {
                return {
                    background: 'white'
                };
            },
            render: function() {
                var k = c('joinClasses')("_2dck", this.props.className);
                return (c('React').createElement(c('XUICardSection.react'), {
                    background: this.props.background,
                    className: k
                }, this.props.children));
            }
        });
    f.exports = j;
}, null);
__d('ReactComposerFooterActions.react', ['cx', 'ReactComponentWithPureRenderMixin', 'React', 'XUICardSection.react', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').createClass({
        displayName: 'ReactComposerFooterActions',
        mixins: [c('ReactComponentWithPureRenderMixin')],
        render: function() {
            var j = c('joinClasses')("_2ph-", this.props.className);
            return (c('React').createElement(c('XUICardSection.react'), {
                className: j
            }, this.props.children));
        }
    });
    f.exports = i;
}, null);
__d('ReactComposerPostButton.react', ['cx', 'fbt', 'ReactComponentWithPureRenderMixin', 'React', 'XUIButton.react'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = c('React').createClass({
            displayName: 'ReactComposerPostButton',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                disabled: j.bool,
                onClick: j.func,
                label: j.string
            },
            statics: {
                getButtonSize: function() {
                    return 'medium';
                }
            },
            getDefaultProps: function() {
                return {
                    disabled: false,
                    label: i._(["Post", "0a1c00b9f90903aa694f9e3e1b1e515e"])
                };
            },
            render: function() {
                return (c('React').createElement(c('XUIButton.react'), {
                    className: "_1mf7",
                    disabled: this.props.disabled,
                    label: this.props.label,
                    onClick: this.props.onClick,
                    use: 'confirm',
                    'data-testid': 'react-composer-post-button'
                }));
            }
        });
    f.exports = k;
}, null);
__d('ReactComposerPostButtonContainerMixin', ['ReactComposerActions', 'ReactComposerConfig', 'ReactComposerContextMixin', 'ReactComposerPostButton.react', 'ReactComposerPropsAndStoreBasedStateMixin', 'ReactComposerStore', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes,
        i = {
            mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerContextMixin'), c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerStore'))],
            propTypes: {
                config: c('ReactComposerConfig').isRequired,
                forceDisabled: h.bool,
                onClickPreprocess: h.func
            },
            getDefaultProps: function() {
                return {
                    forceDisabled: false
                };
            },
            statics: {
                calculateState: function(j, k, l) {
                    return {
                        disabled: c('ReactComposerStore').isPosting(j) || c('ReactComposerStore').isUploading(j)
                    };
                },
                getButtonSize: function() {
                    return 'medium';
                }
            },
            render: function() {
                return (c('React').createElement(c('ReactComposerPostButton.react'), babelHelpers['extends']({}, this.props, {
                    disabled: this.props.forceDisabled || this.state.disabled,
                    className: this.props.className,
                    onClick: this._onClick
                })));
            },
            _onClick: function() {
                if (this.props.onClickPreprocess)
                    if (!this.props.onClickPreprocess()) return;
                c('ReactComposerActions').postStarted(this.context.composerID, {
                    actorID: this.context.actorID,
                    config: this.props.config,
                    targetID: this.context.targetID
                });
            }
        };
    f.exports = i;
}, null);
__d('ReactComposerPostButtonContainer.react', ['ReactComposerPostButtonContainerMixin', 'React'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').createClass({
        displayName: 'ReactComposerPostButtonContainer',
        mixins: [c('ReactComposerPostButtonContainerMixin')]
    });
    f.exports = h;
}, null);
__d('ReactComposerGenericFooter.react', ['ReactComposerConfig', 'ReactComposerFooter.react', 'ReactComposerFooterActions.react', 'ReactComposerPostButtonContainer.react', 'ReactComponentWithPureRenderMixin', 'React', 'LeftRight.react'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes,
        i = c('React').createClass({
            displayName: 'ReactComposerGenericFooter',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                audienceSelector: h.element,
                background: h.string,
                config: c('ReactComposerConfig').isRequired,
                leftChild: h.element,
                postButton: h.element
            },
            getDefaultProps: function() {
                return {
                    background: 'white',
                    leftChild: c('React').createElement('noscript', null)
                };
            },
            render: function() {
                var j = this.props.postButton ? this.props.postButton : c('React').createElement(c('ReactComposerPostButtonContainer.react'), {
                    config: this.props.config
                });
                return (c('React').createElement(c('ReactComposerFooter.react'), {
                    background: this.props.background
                }, c('React').createElement(c('LeftRight.react'), null, this.props.leftChild, c('React').createElement(c('ReactComposerFooterActions.react'), null, this.props.audienceSelector, j))));
            }
        });
    f.exports = i;
}, null);
__d('ReactComposerStatusPlaceholderFooter.react', ['cx', 'fbt', 'ReactComposerAttachmentType', 'ReactComposerConfig', 'ReactComposerGenericFooter.react', 'DOMContainer.react', 'ReactComponentWithPureRenderMixin', 'React', 'XUIButton.react', 'requireWeak'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j;
    c('requireWeak')('ReactComposerAudienceSelectorContainer.react', function(l) {
        j = l;
    });
    var k = c('React').createClass({
        displayName: 'ReactComposerStatusPlaceholderFooter',
        mixins: [c('ReactComponentWithPureRenderMixin')],
        propTypes: {
            config: c('ReactComposerConfig').isRequired
        },
        render: function() {
            var l = this.props.config,
                m = l.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],
                n = m.footerBackground ? m.footerBackground : l.showExpandedComposer ? 'white' : 'light-wash',
                o = c('React').createElement(c('XUIButton.react'), {
                    className: "_1mf7",
                    label: i._(["Post", "0a1c00b9f90903aa694f9e3e1b1e515e"]),
                    use: 'confirm'
                }),
                p = null;
            if (l.audienceXHP) p = j && l.targetData ? c('React').createElement(j, {
                audienceXHP: l.audienceXHP,
                viewerIsTarget: l.targetData.viewerIsTarget
            }) : c('React').createElement(c('DOMContainer.react'), {
                className: "_5dd8"
            }, l.audienceXHP);
            return (c('React').createElement(c('ReactComposerGenericFooter.react'), {
                audienceSelector: p,
                postButton: o,
                background: n,
                config: l
            }));
        }
    });
    f.exports = k;
}, null);
__d('ReactComposerTaggerSummaryPlaceholder.react', ['cx', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').createClass({
        displayName: 'ReactComposerTaggerSummaryPlaceholder',
        mixins: [c('ReactComponentWithPureRenderMixin')],
        render: function() {
            return (c('React').createElement('div', {
                className: "_3o1x"
            }));
        }
    });
    f.exports = i;
}, null);
__d('ReactComposerStatusAttachmentPlaceholder.react', ['ReactComposerAttachmentActions', 'ReactComposerAttachmentStore', 'ReactComposerAttachmentType', 'ReactComposerConfig', 'ReactComposerContextMixin', 'ReactComposerDragDropPromptLazy.react', 'ReactComposerPostUtilsCore', 'ReactComposerProfilePhotoBlock.react', 'ReactComposerPropsAndStoreBasedStateMixin', 'ReactComposerSproutsDisplayState', 'ReactComposerStatusLazyAttachmentTextareaContainer.react', 'ReactComposerStatusPlaceholderFooter.react', 'ReactComposerStore', 'ReactComposerTaggerSummaryPlaceholder.react', 'ActorURI', 'Bootloader', 'Event', 'ReactComponentWithPureRenderMixin', 'React', 'ReactDOM', 'SubscriptionsHandler', 'curry'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes,
        i = c('React').createClass({
            displayName: 'ReactComposerStatusAttachmentPlaceholder',
            _subscriptionsHandler: null,
            mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerContextMixin'), c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerAttachmentStore'), c('ReactComposerStore'))],
            propTypes: {
                config: c('ReactComposerConfig').isRequired,
                expanded: h.bool,
                init: h.func.isRequired,
                placeholder: h.string.isRequired
            },
            statics: {
                calculateState: function(j, k) {
                    return {
                        isActive: c('ReactComposerAttachmentStore').isSelectedAttachmentActive(j),
                        sproutsDisplayState: c('ReactComposerStore').getSproutsDisplayState(j)
                    };
                }
            },
            componentDidMount: function() {
                var j = new(c('SubscriptionsHandler'))();
                j.addSubscriptions(c('Event').listen(c('ReactDOM').findDOMNode(this.refs.form), 'success', c('curry')(c('ReactComposerPostUtilsCore').handlePostSucceeded, this.context.composerID)));
                this._subscriptionsHandler = j;
            },
            componentWillUnmount: function() {
                this._subscriptionsHandler && this._subscriptionsHandler.release();
            },
            render: function() {
                var j = this.context.gks && this.context.gks.isSproutsComposer,
                    k = !j || this.state.sproutsDisplayState === c('ReactComposerSproutsDisplayState').EXPANDED ? this._renderTextArea() : null,
                    l = j ? this._renderSproutsList() : null,
                    m = this.state.isActive || this.props.expanded || j ? c('React').createElement(c('ReactComposerStatusPlaceholderFooter.react'), {
                        config: this.props.config
                    }) : null;
                return (c('React').createElement('div', {
                    onClick: this.props.init,
                    onFocus: this.props.init
                }, c('React').createElement(c('ReactComposerDragDropPromptLazy.react'), {
                    root: this,
                    config: this.props.config,
                    onFilesDrop: this._onFilesDrop,
                    onURLDrop: this._onURLDrop
                }), c('React').createElement('form', {
                    action: c('ActorURI').create('/ajax/updatestatus.php', this.context.actorID),
                    method: 'post',
                    rel: 'async',
                    ref: 'form'
                }, k, c('React').createElement(c('ReactComposerTaggerSummaryPlaceholder.react'), null), l, m, this._getHiddenInputs())));
            },
            _renderTextArea: function() {
                var j = this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],
                    k = c('React').createElement(c('ReactComposerStatusLazyAttachmentTextareaContainer.react'), {
                        expanded: this.props.expanded,
                        hasProfilePic: j.showProfilePic,
                        onFocus: this._onFocus,
                        placeholder: this.props.placeholder
                    });
                return j.showProfilePic ? c('React').createElement(c('ReactComposerProfilePhotoBlock.react'), {
                    profilePicSrc: j.profilePicSrc,
                    profileURI: j.profileURI,
                    profilePhotoBadge: j.customProfilePhoto,
                    currentProfileBadgeURI: j.currentProfileBadgeURI
                }, k) : k;
            },
            _renderSproutsList: function() {
                var j = this.context.jsModules && this.context.jsModules.ComposerSproutsListContainer;
                return (c('React').createElement(j, {
                    config: this.props.config
                }));
            },
            _onFocus: function() {
                c('ReactComposerAttachmentActions').selectAttachment(this.context.composerID, c('ReactComposerAttachmentType').STATUS, true);
            },
            _onFilesDrop: function(j) {
                this.props.init();
                var k = this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').MEDIA];
                c('Bootloader').loadModules(["ReactComposerStatusUtils", "ReactComposerPhotoUploader"], function(l, m) {
                    var n = this.context.composerID;
                    l.uploadDroppedFiles(n, j, new m(this.context, k.photoLimit, {
                        disableFaceRecognition: k.disableFaceboxTagger
                    }), this.props.config.targetData.targetSupportsMultiMedia);
                }.bind(this), 'ReactComposerStatusAttachmentPlaceholder.react');
            },
            _onURLDrop: function(j) {
                this.props.init();
                c('Bootloader').loadModules(["ReactComposerScrapedAttachmentActions", "ReactComposerStatusUtils"], function(k, l) {
                    var m = this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS];
                    c('ReactComposerAttachmentActions').selectAttachment(this.context.composerID, c('ReactComposerAttachmentType').STATUS, true);
                    k.enabled(this.context.composerID, m.canScrapeShare);
                    l.scrapeLink(this.context.composerID, this.context.targetID, j, this.context.composerType, this.context.actorID);
                }.bind(this), 'ReactComposerStatusAttachmentPlaceholder.react');
            },
            _getHiddenInputs: function() {
                var j = c('ReactComposerPostUtilsCore').getCoreData(this.context.composerID, this.props.config.contextInfo, this.context.targetID),
                    k = [];
                for (var l in j) k.push(c('React').createElement('input', {
                    type: 'hidden',
                    name: l,
                    value: j[l],
                    key: l
                }));
                return k;
            }
        });
    f.exports = i;
}, null);
__d('ReactComposerStatusAttachmentSelector.react', ['fbt', 'ix', 'ReactComponentWithPureRenderMixin', 'React', 'ReactComposerAttachmentSelectorContainer.react', 'ReactComposerAttachmentType', 'ReactComposerContextMixin'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = c('React').createClass({
            displayName: 'ReactComposerStatusAttachmentSelector',
            mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerContextMixin')],
            propTypes: {
                isInMoreButton: j.bool,
                label: j.string
            },
            getDefaultProps: function() {
                return {
                    label: h._("Status")
                };
            },
            render: function() {
                return (c('React').createElement(c('ReactComposerAttachmentSelectorContainer.react'), {
                    attachmentID: c('ReactComposerAttachmentType').STATUS,
                    label: this.props.label,
                    icon: this.context.gks.has_facelift_glyphs ? i('/images/facelift/composer/icons/write-post_16.png') : i('/images/litestand/composer/icons/post.png'),
                    'data-testid': 'status-attachment-selector'
                }));
            }
        });
    f.exports = k;
}, null);
__d("XReactComposerStatusAttachmentBootstrapController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/react_composer\/status\/bootstrap\/", {
        composer_id: {
            type: "String",
            required: true
        },
        composer_type: {
            type: "Enum",
            required: true,
            enumType: 1
        },
        target_id: {
            type: "String",
            required: true
        }
    });
}, null);
__d('ReactComposerStatusLazyAttachment.react', ['fbt', 'ReactComposerAttachmentType', 'ReactComposerBootloaderPropTypes', 'ReactComposerLoadableAttachmentBodyMixin', 'ReactComposerStatusAttachmentPlaceholder.react', 'XReactComposerStatusAttachmentBootstrapController', 'ActorURI', 'Arbiter', 'Bootloader', 'React'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'ReactComposerStatusLazyAttachment',
            mixins: [c('ReactComposerLoadableAttachmentBodyMixin')],
            propTypes: {
                additionalTaggers: i.arrayOf(i.shape({
                    button: i.element.isRequired,
                    container: i.element.isRequired
                })),
                additionalFooterActions: i.arrayOf(i.element),
                bootloader: c('ReactComposerBootloaderPropTypes'),
                config: i.object.isRequired,
                expanded: i.bool,
                onPostIntent: i.func,
                placeholder: i.string.isRequired
            },
            getDefaultProps: function() {
                return {
                    placeholder: h._(["What's on your mind?", "2340e43c54f5a3de9ca7fc0a7efc2cae"])
                };
            },
            statics: {
                attachmentID: c('ReactComposerAttachmentType').STATUS
            },
            getInitialState: function() {
                return {
                    shouldInitialize: false,
                    expanded: false
                };
            },
            componentDidMount: function() {
                c('Arbiter').inform('ReactComposerStatusLazyAttachment/mounted', this.context.composerID, c('Arbiter').BEHAVIOR_STATE);
            },
            getPlaceholderModule: function() {
                if (this._placeholder) return this._placeholder;
                this._placeholder = c('ReactComposerStatusAttachmentPlaceholder.react');
                return this._placeholder;
            },
            shouldInitialize: function() {
                return this.state.shouldInitialize;
            },
            bootload: function(k) {
                if (this.props.bootloader) {
                    this.props.bootloader.statusAttachment(k);
                } else c('Bootloader').loadModules(["ReactComposerStatusAttachmentContainer.react"], k, 'ReactComposerStatusLazyAttachment.react');
            },
            getBootstrapURI: function() {
                return c('ActorURI').create(c('XReactComposerStatusAttachmentBootstrapController').getURIBuilder().setString('composer_id', this.context.composerID).setEnum('composer_type', this.context.composerType).setString('target_id', this.context.targetID).getURI(), this.context.actorID);
            },
            init: function() {
                this.setState({
                    shouldInitialize: true
                });
            }
        });
    f.exports = j;
}, null);
__d('ReactComposerSessionMetricsActionTypes', ['keyMirrorRecursive'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    f.exports = c('keyMirrorRecursive')({
        KEYSTROKE: null,
        PASTE: null
    }, 'ReactComposerSessionMetricsActionTypes');
}, null);
__d('ReactComposerSessionMetricsStore', ['ReactComposerStoreBase', 'ReactComposerAttachmentActionType', 'ReactComposerSessionMetricsActionTypes'], function a(b, c, d, e, f, g) {
    var h, i;
    if (c.__markCompiled) c.__markCompiled();
    h = babelHelpers.inherits(j, c('ReactComposerStoreBase'));
    i = h && h.prototype;

    function j() {
        'use strict';
        var k = void 0;
        i.constructor.call(this, function() {
            return {
                composerStartTime: null,
                keystrokeCount: 0,
                pasteCount: 0
            };
        }, function(l) {
            switch (l.type) {
                case c('ReactComposerAttachmentActionType').SELECT_ATTACHMENT:
                    k && k.$ReactComposerSessionMetricsStore1(l);
                    break;
                case c('ReactComposerSessionMetricsActionTypes').KEYSTROKE:
                    k && k.$ReactComposerSessionMetricsStore2(l);
                    break;
                case c('ReactComposerSessionMetricsActionTypes').PASTE:
                    k && k.$ReactComposerSessionMetricsStore3(l);
                    break;
            }
        });
        k = this;
    }
    j.prototype.getComposerStartTime = function(k) {
        'use strict';
        return this.getComposerData(k).composerStartTime;
    };
    j.prototype.getKeystrokeCount = function(k) {
        'use strict';
        return this.getComposerData(k).keystrokeCount;
    };
    j.prototype.getPasteCount = function(k) {
        'use strict';
        return this.getComposerData(k).pasteCount;
    };
    j.prototype.$ReactComposerSessionMetricsStore1 = function(k) {
        'use strict';
        var l = this.validateAction(k, 'composerID'),
            m = this.getComposerData(l);
        if (!m.composerStartTime) m.composerStartTime = Date.now();
    };
    j.prototype.$ReactComposerSessionMetricsStore2 = function(k) {
        'use strict';
        var l = this.validateAction(k, 'composerID'),
            m = this.getComposerData(l);
        m.keystrokeCount++;
    };
    j.prototype.$ReactComposerSessionMetricsStore3 = function(k) {
        'use strict';
        var l = this.validateAction(k, 'composerID'),
            m = this.getComposerData(l);
        m.pasteCount++;
    };
    f.exports = new j();
}, null);
__d('ReactComposerContextProviderMixin', ['invariant', 'ReactComposerContextMixin'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = c('ReactComposerContextMixin').contextTypes,
        j = {
            childContextTypes: i,
            getChildContext: function() {
                return {
                    actorID: this.props.contextConfig.actorID,
                    composerID: this.props.contextConfig.composerID,
                    composerType: this.props.contextConfig.composerType,
                    gks: this.props.contextConfig.gks || {},
                    targetID: this.props.contextConfig.targetID,
                    jsModules: this.props.contextConfig.jsModules
                };
            },
            componentWillMount: function() {
                !this.props.contextConfig.actorID ? h(0) : void 0;
                !this.props.contextConfig.composerID ? h(0) : void 0;
                !this.props.contextConfig.composerType ? h(0) : void 0;
                !this.props.contextConfig.targetID ? h(0) : void 0;
            }
        };
    f.exports = j;
}, null);
__d('ReactComposerTimelineBootloader', ['Bootloader'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        statusAttachment: function(i) {
            c('Bootloader').loadModules(["ReactComposerStatusAttachmentContainer.react", "ReactComposerTimelinePostButtonContainer.react"], i, 'ReactComposerTimelineBootloader');
        },
        mediaAttachment: function(i) {
            c('Bootloader').loadModules(["ReactComposerMediaAttachmentContainer.react", "ReactComposerTimelineMediaPostButtonContainer.react"], i, 'ReactComposerTimelineBootloader');
        },
        qandaAttachment: function(i) {
            c('Bootloader').loadModules(["ReactComposerQAndAAttachmentContainer.react", "ReactComposerTimelineMediaPostButtonContainer.react"], i, 'ReactComposerTimelineBootloader');
        },
        redEnvelopeAttachment: function(i) {
            c('Bootloader').loadModules(["ReactComposerRedEnvelopeAttachmentContainer.react", "ReactComposerTimelineMediaPostButtonContainer.react"], i, 'ReactComposerTimelineBootloader');
        }
    };
    f.exports = h;
}, null);
__d('ReactComposerHeaderProps', ['React'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes,
        i = {
            propTypes: {
                attachmentSelectors: h.arrayOf(h.node),
                background: h.string,
                forceThrobber: h.bool,
                noHorizontalMargin: h.bool,
                rightChild: h.element,
                showDelimiter: h.bool,
                truncateSelectorText: h.bool
            },
            getDefaultProps: function() {
                return {
                    background: 'white',
                    forceThrobber: false,
                    noHorizontalMargin: false,
                    showDelimiter: true,
                    truncateSelectorText: false
                };
            }
        };
    f.exports = i;
}, null);
__d('ReactComposerHeaderCore.react', ['cx', 'ReactComposerHeaderProps', 'LeftRight.react', 'ReactComponentWithPureRenderMixin', 'React', 'XUICardSection.react', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').createClass({
        displayName: 'ReactComposerHeaderCore',
        mixins: [c('ReactComponentWithPureRenderMixin')],
        propTypes: c('ReactComposerHeaderProps').propTypes,
        getDefaultProps: c('ReactComposerHeaderProps').getDefaultProps,
        render: function() {
            var j;
            if (this.props.showDelimiter) {
                j = c('React').createElement('ul', {
                    className: "_-h"
                }, c('React').Children.map(this.props.attachmentSelectors, function(k, l) {
                    return (c('React').createElement('li', {
                        className: "_1tm3",
                        key: l
                    }, k));
                }));
            } else j = this.props.attachmentSelectors;
            return (c('React').createElement(c('XUICardSection.react'), {
                background: this.props.background,
                className: c('joinClasses')(this.props.className, "_4d6h" + (this.props.noHorizontalMargin ? ' ' + "_4p1p" : '') + (this.props.truncateSelectorText ? ' ' + "_1kvc" : ''))
            }, c('React').createElement(c('LeftRight.react'), null, c('React').createElement('div', null, j), c('React').createElement('div', null, this.props.children))));
        }
    });
    f.exports = i;
}, null);
__d('ReactComposerLazyHeader.react', ['ReactComposerHeaderCore.react', 'ReactComposerHeaderProps', 'ReactComposerPropsAndStoreBasedStateMixin', 'ReactComposerStore', 'Bootloader', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').createClass({
        displayName: 'ReactComposerLazyHeader',
        mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerStore'))],
        propTypes: c('ReactComposerHeaderProps').propTypes,
        getDefaultProps: c('ReactComposerHeaderProps').getDefaultProps,
        getInitialState: function() {
            return {
                shouldInitialize: true,
                header: null
            };
        },
        statics: {
            calculateState: function(i, j) {
                return {
                    isActive: c('ReactComposerStore').isActive(i)
                };
            }
        },
        componentDidUpdate: function(i, j) {
            if (this.state.isActive && this.state.shouldInitialize) {
                this.setState({
                    shouldInitialize: !this.state.shouldInitialize
                });
                c('Bootloader').loadModules(["ReactComposerHeader.react"], function(k) {
                    return this.setState({
                        header: k
                    });
                }.bind(this), 'ReactComposerLazyHeader.react');
            }
        },
        render: function() {
            var i = this.props,
                j = i.children,
                k = babelHelpers.objectWithoutProperties(i, ['children']),
                l = this.state.header;
            if (!!l) return (c('React').createElement(l, babelHelpers['extends']({}, k, {
                attachmentSelectors: j
            })));
            return (c('React').createElement(c('ReactComposerHeaderCore.react'), babelHelpers['extends']({}, k, {
                attachmentSelectors: j
            }), this.props.rightChild));
        }
    });
    f.exports = h;
}, null);
__d('ReactComposerTimelineHeader.react', ['ReactComponentWithPureRenderMixin', 'React', 'ReactComposerHeaderProps', 'ReactComposerLifeEventStore', 'ReactComposerPropsAndStoreBasedStateMixin', 'ReactComposerLazyHeader.react'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').createClass({
        displayName: 'ReactComposerTimelineHeader',
        mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerLifeEventStore'))],
        propTypes: c('ReactComposerHeaderProps').propTypes,
        getDefaultProps: c('ReactComposerHeaderProps').getDefaultProps,
        statics: {
            calculateState: function(i, j) {
                var k = c('ReactComposerLifeEventStore').isWaitingForLifeEventDetails(i);
                return {
                    forceThrobber: k
                };
            }
        },
        render: function() {
            return (c('React').createElement(c('ReactComposerLazyHeader.react'), babelHelpers['extends']({}, this.props, this.state)));
        }
    });
    f.exports = h;
}, null);
__d('ReactComposer.react', ['cx', 'ReactComposerActions', 'ReactComposerContextMixin', 'ReactComposerInit', 'ReactComposerPropsAndStoreBasedStateMixin', 'ReactComposerSessionMetricsStore', 'ReactComposerStore', 'Bootloader', 'ReactComponentWithPureRenderMixin', 'React', 'ReactDOM', 'XUICard.react', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'ReactComposer',
            mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerContextMixin'), c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerStore'), c('ReactComposerSessionMetricsStore'))],
            propTypes: {
                hideBorders: i.bool,
                loggingConfig: i.shape({
                    targetType: i.string,
                    ref: i.string,
                    composerVersion: i.string.isRequired,
                    composerSourceSurface: i.string.isRequired
                }).isRequired
            },
            getDefaultProps: function() {
                return {
                    hideBorders: false
                };
            },
            getInitialState: function() {
                return {
                    hasBeenActive: false
                };
            },
            statics: {
                calculateState: function(k, l) {
                    return {
                        isActive: c('ReactComposerStore').isActive(k)
                    };
                }
            },
            componentWillMount: function() {
                c('ReactComposerActions').initConfig(this.context.composerID, this.props.loggingConfig);
            },
            componentDidUpdate: function(k, l) {
                if (this.state.isActive && !this.state.hasBeenActive) {
                    this.setState({
                        hasBeenActive: !this.state.hasBeenActive
                    });
                    c('Bootloader').loadModules(["ComposerXSessionIDs", "ComposerXMarauderLogger", "ReactComposerPerfLogger"], function(m, n, o) {
                        var p = c('ReactDOM').findDOMNode(this);
                        m.resetSessionID(this.context.composerID);
                        n.registerComposer(p, this.props.loggingConfig.targetType, this.props.loggingConfig.ref, this.props.loggingConfig.composerVersion, this.context.targetID, this.props.loggingConfig.composerSourceSurface);
                        o.registerComposer(p, this.props.loggingConfig.targetType, this.props.loggingConfig.ref, this.props.loggingConfig.composerVersion, this.context.targetID);
                    }.bind(this), 'ReactComposer.react');
                }
            },
            componentWillUnmount: function() {
                c('ReactComposerInit').unmountInstance(this.context.composerID);
            },
            render: function() {
                var k = "_36bx" + (this.props.hideBorders ? ' ' + "_143o" : '');
                return (c('React').createElement(c('XUICard.react'), {
                    className: c('joinClasses')(this.props.className, k),
                    'data-testid': 'react-composer-root',
                    id: this.context.composerID
                }, this.props.children));
            }
        });
    f.exports = j;
}, null);
__d('ReactComposerBody.react', ['cx', 'ReactComponentWithPureRenderMixin', 'React', 'XUICardSection.react', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').createClass({
        displayName: 'ReactComposerBody',
        mixins: [c('ReactComponentWithPureRenderMixin')],
        render: function() {
            var j = c('joinClasses')("_4zoz", this.props.className);
            return (c('React').createElement(c('XUICardSection.react'), {
                className: j
            }, this.props.children));
        }
    });
    f.exports = i;
}, null);
__d('ReactComposerBodyContainer.react', ['cx', 'ReactComposerAttachmentStore', 'ReactComposerBody.react', 'ReactComposerPropsAndStoreBasedStateMixin', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'ReactComposerBodyContainer',
            mixins: [c('ReactComponentWithPureRenderMixin'), c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerAttachmentStore'))],
            propTypes: {
                expanded: i.bool,
                hasMinHeight: i.bool
            },
            getDefaultProps: function() {
                return {
                    expanded: false,
                    hasMinHeight: true
                };
            },
            statics: {
                calculateState: function(k, l, m) {
                    var n = c('ReactComposerAttachmentStore').isSelectedAttachmentActive(k);
                    return {
                        active: n
                    };
                }
            },
            render: function() {
                var k = (this.state.active && this.props.hasMinHeight ? "_5xv3" : '') + (this.props.expanded ? ' ' + "_4cw" : '');
                return (c('React').createElement(c('ReactComposerBody.react'), {
                    className: k
                }, this.props.children));
            }
        });
    f.exports = j;
}, null);
__d('ReactComposerContextConfig', ['ReactComposerContextMixin', 'React'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = c('ReactComposerContextMixin').contextTypes,
        i = c('React').PropTypes;
    f.exports = i.shape(h);
}, null);
__d('ReactTimelineComposer.react', ['cx', 'fbt', 'ReactComposer.react', 'ReactComposerAttachmentType', 'ReactComposerBodyContainer.react', 'ReactComposerConfig', 'ReactComposerContextConfig', 'ReactComposerContextProviderMixin', 'ReactComposerFocusInit', 'ReactComposerTimelineBootloader', 'ReactComposerTimelineHeader.react', 'ReactComposerLifeEventAttachmentSelector.react', 'ReactComposerLifeEventLazyAttachment.react', 'ReactComposerLiveVideoAttachmentSelector.react', 'ReactComposerLiveVideoLazyAttachment.react', 'ReactComposerMediaAttachmentSelector.react', 'ReactComposerMediaLazyAttachment.react', 'ReactComposerMLEAttachmentSelector.react', 'ReactComposerMLELazyAttachment.react', 'ReactComposerQAndAAttachmentSelector.react', 'ReactComposerQAndALazyAttachment.react', 'ReactComposerStatusAttachmentSelector.react', 'ReactComposerStatusLazyAttachment.react', 'Bootloader', 'React', 'ReactDOM', 'TimelineComposer', 'coalesce'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').createClass({
        displayName: 'ReactTimelineComposer',
        mixins: [c('ReactComposerContextProviderMixin')],
        propTypes: {
            contextConfig: c('ReactComposerContextConfig').isRequired,
            config: c('ReactComposerConfig').isRequired
        },
        componentDidMount: function() {
            c('TimelineComposer').init(this.props.contextConfig.composerID);
            if (this.props.contextConfig.gks.shouldBlurOnFocus) c('ReactComposerFocusInit').handler(c('ReactDOM').findDOMNode(this.refs.root), this.props.contextConfig.composerID, this.props.contextConfig.jsModules.composerFocus);
        },
        render: function() {
            var k = this._getAdditionalAttachmentComponents(),
                l = k[0],
                m = k[1];
            return (c('React').createElement(c('ReactComposer.react'), {
                className: "_s7h",
                hideBorders: true,
                loggingConfig: this.props.config.loggingConfig,
                ref: 'root'
            }, c('React').createElement(c('ReactComposerTimelineHeader.react'), {
                background: 'light-wash',
                noHorizontalMargin: true,
                showDelimiter: false
            }, c('React').createElement(c('ReactComposerStatusAttachmentSelector.react'), {
                label: this.props.config.targetData.viewerIsTarget ? i._("Status") : i._("Post")
            }), c('React').createElement(c('ReactComposerMediaAttachmentSelector.react'), null), l), c('React').createElement(c('ReactComposerBodyContainer.react'), {
                expanded: this.props.config.showExpandedComposer
            }, c('React').createElement(c('ReactComposerStatusLazyAttachment.react'), {
                config: this.props.config,
                selected: true,
                expanded: this.props.config.showExpandedComposer,
                placeholder: this.props.config.targetData.viewerIsTarget ? i._(["What's on your mind?", "2340e43c54f5a3de9ca7fc0a7efc2cae"]) : c('coalesce')(this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS].placeholderText, i._("Write something...")),
                bootloader: c('ReactComposerTimelineBootloader')
            }), c('React').createElement(c('ReactComposerMediaLazyAttachment.react'), {
                config: this.props.config,
                bootloader: c('ReactComposerTimelineBootloader')
            }), m)));
        },
        _getAdditionalAttachmentComponents: function() {
            var k = this.props.config.attachmentsConfig,
                l = [],
                m = [],
                n = k[c('ReactComposerAttachmentType').MLE].enabled,
                o = k[c('ReactComposerAttachmentType').QANDA].enabled,
                p = this.props.contextConfig.gks.www_react_mle_composer_attachment,
                q = k[c('ReactComposerAttachmentType').RED_ENVELOPE],
                r = k[c('ReactComposerAttachmentType').LIVE_VIDEO].enabled;
            if (r) {
                l.push(c('React').createElement(c('ReactComposerLiveVideoAttachmentSelector.react'), {
                    key: 'live_video'
                }));
                m.push(c('React').createElement(c('ReactComposerLiveVideoLazyAttachment.react'), {
                    config: this.props.config,
                    key: 'live_video'
                }));
            }
            if (n)
                if (p) {
                    l.push(c('React').createElement(c('ReactComposerLifeEventAttachmentSelector.react'), {
                        key: 'life_event'
                    }));
                    m.push(c('React').createElement(c('ReactComposerLifeEventLazyAttachment.react'), {
                        config: this.props.config,
                        key: 'life_event'
                    }));
                } else {
                    l.push(c('React').createElement(c('ReactComposerMLEAttachmentSelector.react'), {
                        key: 'mle'
                    }));
                    m.push(c('React').createElement(c('ReactComposerMLELazyAttachment.react'), {
                        key: 'mle',
                        config: this.props.config
                    }));
                }
            if (q.enabled) {
                var s = q.attachmentSelector,
                    t = q.lazyAttachment,
                    u = i._("Red Envelope");
                l.push(c('React').createElement(s, {
                    key: c('ReactComposerAttachmentType').RED_ENVELOPE,
                    label: u
                }));
                m.push(c('React').createElement(t, {
                    config: this.props.config,
                    key: c('ReactComposerAttachmentType').RED_ENVELOPE,
                    bootloader: c('ReactComposerTimelineBootloader')
                }));
            }
            if (o) {
                l.push(c('React').createElement(c('ReactComposerQAndAAttachmentSelector.react'), {
                    key: 'qanda',
                    label: i._("Q&A")
                }));
                m.push(c('React').createElement(c('ReactComposerQAndALazyAttachment.react'), {
                    key: 'qanda',
                    config: this.props.config,
                    bootloader: c('ReactComposerTimelineBootloader')
                }));
            }
            return [l, m];
        }
    });
    f.exports = j;
}, null);
