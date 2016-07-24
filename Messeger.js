if (self.CavalryLogger) {
    CavalryLogger.start_js(["j9hm6"]);
}

__d("MessageBorderType", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        FLOWERS: "flowers"
    };
}, null);
__d("MessageCustomizationType", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        BORDER: "border"
    };
}, null);
__d("MNBotsLoggerEvents", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        BOT_COMPOSER_MENU_ICON_DISPLAYED: "bot_composer_menu_icon_displayed",
        BOT_COMPOSER_MENU_ICON_TAPPED: "bot_composer_menu_icon_tapped",
        BOT_COMPOSER_MENU_ITEM_DID_SELECT: "bot_composer_menu_item_did_select",
        BOT_COMPOSER_QUICK_REPLY_DISPLAYED: "bot_composer_quick_reply_displayed",
        BOT_COMPOSER_QUICK_REPLY_TAPPED: "bot_composer_quick_reply_tapped"
    };
}, null);
__d("TextWithEntitiesMetadataType", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        NONE: 0,
        CONCEPT: 1,
        INTENT: 2
    };
}, null);
__d('MessengerTextWithEntities.react', ['Link.react', 'React', 'BaseTextWithEntities.react', 'MessengerTextWithEmoticons.react'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(j) {
        return j.replace(/<3\b|&hearts;/g, '\u2665');
    }
    var i = c('React').createClass({
        displayName: 'MessengerTextWithEntities',
        _renderText: function(j) {
            if (this.props.renderEmoticons || this.props.renderEmoji) {
                return (c('React').createElement(c('MessengerTextWithEmoticons.react'), {
                    text: j,
                    renderEmoticons: this.props.renderEmoticons,
                    renderEmoji: this.props.renderEmoji
                }));
            } else return h(j);
        },
        _renderRange: function(j, k) {
            if (this.props.interpolator) {
                return this.props.interpolator(j, k);
            } else return (c('React').createElement(c('Link.react'), {
                href: k.entity
            }, j));
        },
        render: function() {
            return (c('React').createElement(c('BaseTextWithEntities.react'), babelHelpers['extends']({}, this.props, {
                textRenderer: this._renderText,
                rangeRenderer: this._renderRange,
                ranges: this.props.ranges,
                imageRanges: this.props.imageRanges,
                aggregatedRanges: this.props.aggregatedRanges,
                metaRanges: this.props.metaRanges,
                text: this.props.text
            })));
        }
    });
    f.exports = i;
}, null);
__d('P2PTriggersUtils', ['P2PGKValues'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = /\$((\d{1,3}(,\d{3})*)|\d+)(\.\d{1,2})?(?=\s|\.\s|\,\s|$|\.$|\,$|\?|\!|\")/,
        i = {
            canSeeTriggers: function(j) {
                if (!c('P2PGKValues').P2PEnabled) return false;
                return true;
            },
            getMatches: function(j) {
                return j.match(h);
            }
        };
    f.exports = i;
}, null);
__d('MercuryMessageBody.react', ['cx', 'fbt', 'BootloadedComponent.react', 'EmoticonsList', 'EmoticonEmojiList', 'EmployeeLinkMatcher', 'EmployeeLinkRanges', 'JSResource', 'Link.react', 'MercuryConfig', 'MessengerSupportedEmoji', 'MessengerTextWithEntities.react', 'P2PTriggersUtils', 'ReactComponentWithPureRenderMixin', 'React', 'SupportedEmoji', 'TextWithEntities.react', 'TextWithEntitiesMetadataType', 'URI', 'URLMatcher', 'cancelAnimationFrame', 'emptyFunction', 'getURLRanges', 'ifRequired', 'requestAnimationFrame', 'shouldAddMRefParam'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = function() {
            k = c('emptyFunction');
            c('ifRequired')('ChatAppActions', function(m) {
                m.setInitialDisplayDone();
            });
        },
        l = c('React').createClass({
            displayName: 'MercuryMessageBody',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                body: j.string,
                customLike: j.object,
                metaRanges: j.array,
                ranges: j.array,
                threadID: j.string
            },
            getInitialState: function() {
                return {
                    richText: false
                };
            },
            _shouldRenderP2PTriggers: false,
            componentDidMount: function() {
                this._raf = c('requestAnimationFrame')(this.setIsRichText);
            },
            componentWillReceiveProps: function(m) {
                if (m.ranges !== this.props.ranges) {
                    this._raf && c('cancelAnimationFrame')(this._raf);
                    this._raf = c('requestAnimationFrame')(this.setIsRichText);
                }
            },
            targetBlankLinkInterpolator: function(m, n) {
                if (n.className) return c('React').createElement('span', {
                    className: n.className
                }, m);
                if (n.entity && n.entity.url) {
                    var o = new(c('URI'))(n.entity.url.replace(/#+$/, ''));
                    if (c('shouldAddMRefParam')(o)) o.addQueryData({
                        __mref: 'message_bubble'
                    });
                    return (c('React').createElement(c('Link.react'), {
                        href: {
                            url: o.toString(),
                            shimhash: n.entity.shimhash
                        },
                        s: n.entity.s,
                        target: '_blank'
                    }, m));
                } else if (!n.entity) switch (n.type) {
                    case c('TextWithEntitiesMetadataType').NONE:
                        return (c('React').createElement('span', {
                            className: "_2y9",
                            title: JSON.stringify(n.data)
                        }, m));
                    default:
                        return m;
                }
            },
            setIsRichText: function() {
                delete this._raf;
                var m = this.props,
                    n = m.body,
                    o = m.ranges,
                    p = m.metaRanges;
                n = n || '';
                this._shouldRenderP2PTriggers = !!(this.props.threadID && c('P2PTriggersUtils').canSeeTriggers(this.props.threadID) && c('P2PTriggersUtils').getMatches(n));
                if (o && o.length || p && p.length || c('EmoticonsList').noncapturingRegexp.test(n) || c('SupportedEmoji').findEmoji(n) || c('URLMatcher').match(n) || c('EmployeeLinkMatcher').isMatch(n) || this._shouldRenderP2PTriggers || c('MercuryConfig').MessengerNewEmojiGK && (c('MessengerSupportedEmoji').findEmoji(n) || c('EmoticonEmojiList').noncapturingRegexp.test(n))) {
                    this.setState({
                        richText: true
                    }, k);
                } else k();
            },
            componentWillUnmount: function() {
                this._raf && c('cancelAnimationFrame')(this._raf);
            },
            render: function() {
                var m = this.props.body || '';
                if (m.startsWith('?OTR')) return (c('React').createElement('span', {
                    className: "_89h"
                }, i._("[encrypted message]")));
                m = m.replace(/\s+$/, '');
                if (m.length === 0) return null;
                if (!this.state.richText) return c('React').createElement('span', {
                    className: this.props.className
                }, m);
                var n = this.props.ranges;
                if (n == undefined) n = c('getURLRanges')(m);
                if (n == undefined) {
                    n = c('EmployeeLinkRanges').get(m);
                } else {
                    n = n.concat(c('EmployeeLinkRanges').get(m));
                    n = n.filter(function(q) {
                        return q != undefined;
                    });
                }
                var o = {
                        className: this.props.className,
                        interpolator: this.targetBlankLinkInterpolator,
                        metaRanges: this.props.metaRanges,
                        ranges: n,
                        renderEmoji: true,
                        renderEmoticons: true,
                        text: m
                    },
                    p = c('React').createElement(c('TextWithEntities.react'), o);
                if (this._shouldRenderP2PTriggers) {
                    return (c('React').createElement(c('BootloadedComponent.react'), babelHelpers['extends']({
                        bootloadPlaceholder: p,
                        bootloadLoader: c('JSResource')('TextWithEntitiesAndP2P.react').__setRef('MercuryMessageBody.react')
                    }, o, {
                        threadID: this.props.threadID
                    })));
                } else if (c('MercuryConfig').MessengerNewEmojiGK) {
                    return (c('React').createElement(c('MessengerTextWithEntities.react'), o));
                } else return p;
            }
        });
    f.exports = l;
}, null);
__d('getTextAfterNearestEntity', [], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(i, j) {
        var k = j;
        while (k > 0 && i.getEntityAt(k - 1) === null) k--;
        return i.getText().slice(k, j);
    }
    f.exports = h;
}, null);
__d('applyEmoticonToContentState', ['EmoticonsList', 'applyEmoticonToContentBlock', 'getTextAfterNearestEntity'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = new RegExp(c('EmoticonsList').regexp.source, 'g');

    function i(j, k) {
        var l = k.getAnchorKey(),
            m = k.getAnchorOffset(),
            n = j.getBlockForKey(l),
            o = c('getTextAfterNearestEntity')(n, m),
            p, q;
        while (q !== null) {
            q = h.exec(o);
            if (q !== null) p = q;
        }
        if (!p) return j;
        var r = p[1];
        if (!r && m !== o.length) return j;
        var s = p[2],
            t = m - o.length,
            u = t + p.index + p[1].length,
            v = j.getBlockMap().set(l, c('applyEmoticonToContentBlock')(n, s, u));
        m -= s.length - 1;
        return j.merge({
            blockMap: v,
            selectionBefore: k,
            selectionAfter: k.merge({
                anchorOffset: m,
                focusOffset: m
            })
        });
    }
    f.exports = i;
}, null);
__d('handleBeforeInputForEmoticon', ['DraftModifier', 'EditorState', 'applyEmoticonToContentState'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = new RegExp(/[\s'".,!?]/);

    function i(j, k) {
        var l = j.getSelection();
        if (!l.isCollapsed() || !k || !h.test(k)) return j;
        var m = j.getCurrentContent(),
            n = c('applyEmoticonToContentState')(m, l);
        if (n === m) return j;
        var o = c('DraftModifier').insertText(n, n.getSelectionAfter(), k);
        return c('EditorState').push(j, o, 'insert-characters');
    }
    f.exports = i;
}, null);
__d('handleSoftNewlineForEmoticon', ['DraftModifier', 'EditorState', 'applyEmoticonToContentState'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        var j = i.getCurrentContent(),
            k = i.getSelection(),
            l = c('applyEmoticonToContentState')(j, k);
        if (l === j) return i;
        var m = c('DraftModifier').splitBlock(l, l.getSelectionAfter());
        return c('EditorState').push(i, m, 'split-block');
    }
    f.exports = h;
}, null);
__d('isSoftNewlineEvent', ['Keys'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        return i.which === c('Keys').RETURN && (i.getModifierState('Shift') || i.getModifierState('Alt') || i.getModifierState('Control'));
    }
    f.exports = h;
}, null);
__d('EmojiDispatcher', ['ExplicitRegistrationDispatcher'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    f.exports = new(c('ExplicitRegistrationDispatcher'))({
        strict: false
    });
}, null);
__d('EmojiActions', ['EmojiDispatcher', 'keyMirror'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('keyMirror')({
            CHANGE_CURRENT_CATEGORY: null,
            CHANGE_EMOJI_COLOR: null,
            EMOJI_COLOR_READY: null,
            GET_EMOJI_COLOR: null,
            TRAY_DATA_READY: null,
            UPDATE_TRAY_DATA: null
        }),
        i = {
            Types: h,
            loadedTrayData: function() {
                c('EmojiDispatcher').dispatch({
                    type: i.Types.TRAY_DATA_READY
                });
            },
            updateTrayData: function() {
                c('EmojiDispatcher').dispatch({
                    type: i.Types.UPDATE_TRAY_DATA
                });
            },
            changeEmojiColor: function(j) {
                c('EmojiDispatcher').dispatch({
                    type: i.Types.CHANGE_EMOJI_COLOR,
                    color: j
                });
            },
            changeCurrentCategory: function(j) {
                c('EmojiDispatcher').dispatch({
                    type: i.Types.CHANGE_CURRENT_CATEGORY,
                    currentCategory: j
                });
            },
            getEmojiColor: function() {
                c('EmojiDispatcher').dispatch({
                    type: i.Types.GET_EMOJI_COLOR
                });
            },
            emojiColorReady: function(j) {
                c('EmojiDispatcher').dispatch({
                    type: i.Types.EMOJI_COLOR_READY,
                    color: j
                });
            }
        };
    f.exports = i;
}, null);
__d("XMessagingGetEmojiRecentUsageController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/messaging\/emoji_recent_usage\/", {});
}, null);
__d('EmojiServerRequests', ['Promise', 'AsyncRequest', 'XMessagingGetEmojiRecentUsageController'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        fetchTrayData: function(j) {
            return i(c('XMessagingGetEmojiRecentUsageController').getURIBuilder().getURI(), j, true);
        }
    };

    function i(j, k, l) {
        return new(c('Promise'))(function(m, n) {
            return (new(c('AsyncRequest'))(j).setHandler(function(o) {
                return m(o.getPayload());
            }).setAllowCrossPageTransition(l).send());
        }).then(k);
    }
    f.exports = h;
}, null);
__d("XMessagingGetEmojiColorPrefController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/messaging\/get_emoji_color\/", {});
}, null);
__d("XMessagingSetEmojiColorPrefController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/messaging\/set_emoji_color\/", {});
}, null);
__d('EmojiState', ['fbt', 'AsyncRequest', 'EmojiActions', 'EmojiServerRequests', 'MessengerSupportedEmoji', 'XMessagingGetEmojiColorPrefController', 'XMessagingSetEmojiColorPrefController'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = null,
        j = null,
        k = void 0,
        l = {
            onTrayDataReady: function(m) {
                if (!k) k = c('EmojiServerRequests').fetchTrayData(function(n) {
                    j = n;
                });
                k.then(function() {
                    m();
                    c('EmojiActions').loadedTrayData();
                });
                k.done();
            },
            getEmojiColor: function() {
                var m = c('XMessagingGetEmojiColorPrefController').getURIBuilder().getURI();
                new(c('AsyncRequest'))(m).setMethod('POST').setHandler(function(n) {
                    c('EmojiActions').emojiColorReady(n.payload);
                }).send();
            },
            changeEmojiColor: function(m) {
                var n = c('XMessagingSetEmojiColorPrefController').getURIBuilder().getURI();
                new(c('AsyncRequest'))(n).setMethod('POST').setData({
                    color: m
                }).send();
            },
            addMRUCategory: function() {
                if (j) {
                    var m = j.map(function(n) {
                        var o = c('MessengerSupportedEmoji').findEmoji(n);
                        if (!o) return null;
                        return o.emoji.split('_').map(function(p) {
                            return parseInt(p, 16);
                        });
                    }).filter(function(n) {
                        return !!n;
                    });
                    i = {
                        name: h._("Recently Sent"),
                        emojis: m,
                        icon: [128340]
                    };
                    c('EmojiActions').updateTrayData();
                    j = null;
                }
            },
            _addRecentlyUsedEmoji: function(m) {
                var n, o = i && i.emojis;
                if (!o) return;
                var p = function(r) {
                    var s = m[r];
                    for (var t = 0; t < o.length; ++t)
                        if (o[t].length == s.length && o[t].every(function(u, v) {
                                return u === s[v];
                            })) {
                            o.splice(t, 1);
                            break;
                        }
                    o.unshift(s);
                };
                for (var q = 0; q < m.length; ++q) p(q);
                c('EmojiActions').updateTrayData();
            },
            getMRUCategory: function() {
                if (!i) this.addMRUCategory();
                return i;
            },
            updateRecentlyUsed: function(m) {
                if (!i) {
                    this.addMRUCategory();
                    return;
                }
                this._addRecentlyUsedEmoji(m);
            }
        };
    f.exports = l;
}, null);
__d('MessengerBotsWebTypedLogger', ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h() {
        this.clear();
    }
    h.prototype.log = function() {
        c('GeneratedLoggerUtils').log('logger:MessengerBotsWebLoggerConfig', this.$MessengerBotsWebTypedLogger1, c('Banzai').BASIC);
    };
    h.prototype.logVital = function() {
        c('GeneratedLoggerUtils').log('logger:MessengerBotsWebLoggerConfig', this.$MessengerBotsWebTypedLogger1, c('Banzai').VITAL);
    };
    h.prototype.clear = function() {
        this.$MessengerBotsWebTypedLogger1 = {};
        return this;
    };
    h.prototype.updateData = function(j) {
        this.$MessengerBotsWebTypedLogger1 = babelHelpers['extends']({}, this.$MessengerBotsWebTypedLogger1, j);
        return this;
    };
    h.prototype.setCount = function(j) {
        this.$MessengerBotsWebTypedLogger1.count = j;
        return this;
    };
    h.prototype.setEvent = function(j) {
        this.$MessengerBotsWebTypedLogger1.event = j;
        return this;
    };
    h.prototype.setIndex = function(j) {
        this.$MessengerBotsWebTypedLogger1.index = j;
        return this;
    };
    h.prototype.setPageID = function(j) {
        this.$MessengerBotsWebTypedLogger1.page_id = j;
        return this;
    };
    h.prototype.setPayload = function(j) {
        this.$MessengerBotsWebTypedLogger1.payload = j;
        return this;
    };
    h.prototype.setTitle = function(j) {
        this.$MessengerBotsWebTypedLogger1.title = j;
        return this;
    };
    h.prototype.setTitles = function(j) {
        this.$MessengerBotsWebTypedLogger1.titles = c('GeneratedLoggerUtils').serializeVector(j);
        return this;
    };
    h.prototype.setType = function(j) {
        this.$MessengerBotsWebTypedLogger1.type = j;
        return this;
    };
    h.prototype.setURL = function(j) {
        this.$MessengerBotsWebTypedLogger1.url = j;
        return this;
    };
    h.prototype.setVC = function(j) {
        this.$MessengerBotsWebTypedLogger1.vc = j;
        return this;
    };
    var i = {
        count: true,
        event: true,
        index: true,
        page_id: true,
        payload: true,
        title: true,
        titles: true,
        type: true,
        url: true,
        vc: true
    };
    f.exports = h;
}, null);
__d('ChatAnimatedGifs', ['URI'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        shouldHideBody: function(i) {
            if (!i.has_attachment) return false;
            for (var j = 0; j < i.attachments.length; j++) {
                var k = i.attachments[j];
                if (k.preview_url) {
                    var l = h.getRawUrlFromSafeUrl(k.preview_url);
                    if (i.body == l) return true;
                }
            }
            return false;
        },
        getRawUrlFromSafeUrl: function(i) {
            return new(c('URI'))(i).getQueryData().url;
        }
    };
    f.exports = h;
}, null);
__d('ChatPrivacyActionController', ['ChatVisibility', 'JSLogger', 'PresencePrivacy'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = function(i, j) {
        this._userID = i;
        this._logger = c('JSLogger').create('blackbird');
        this._getState = function() {
            if (c('ChatVisibility').isOnline()) return c('PresencePrivacy').allows(this._userID) ? h.NORMAL : h.BLOCKED;
            return h.OFFLINE;
        };
        this._togglePrivacy = function() {
            var l = this._getState();
            switch (this._getState()) {
                case h.OFFLINE:
                    if (c('ChatVisibility').isOnline()) {
                        this._logger.error('tabs_already_online');
                        break;
                    }
                    this._logger.log('tabs_go_online', {
                        tab_id: this._userID
                    });
                    c('ChatVisibility').goOnline(function() {
                        if (!c('PresencePrivacy').allows(this._userID)) {
                            if (this._getState() !== h.BLOCKED) this._logger.error('privacy_action_controller_blocked_inconsistency');
                            this._togglePrivacy();
                        }
                    }.bind(this));
                    break;
                case h.BLOCKED:
                    c('PresencePrivacy').allow(this._userID);
                    this._logger.log('tabs_unblock', {
                        tab_id: this._userID
                    });
                    break;
                case h.NORMAL:
                    c('PresencePrivacy').disallow(this._userID);
                    this._logger.log('tabs_block', {
                        tab_id: this._userID
                    });
                    break;
            }
        };
        var k = function() {
            j && j(this._getState());
        }.bind(this);
        k();
        this._subscribeToken = c('PresencePrivacy').subscribe('privacy-changed', k);
    };
    h.OFFLINE = 'offline';
    h.BLOCKED = 'blocked';
    h.NORMAL = 'normal';
    Object.assign(h.prototype, {
        togglePrivacy: function() {
            this._logger.log('gear_menu_toggle_privacy', {
                tab_id: this._userID
            });
            this._togglePrivacy();
        },
        destroy: function() {
            this._subscribeToken && c('PresencePrivacy').unsubscribe(this._subscribeToken);
        }
    });
    f.exports = h;
}, null);
__d('ChatTabBlinking', ['cx', 'CSS', 'setIntervalAcrossTransitions'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = 600,
        j = "highlightTitle",
        k = {
            _blinkMap: {},
            _interval: null,
            _isHighlighting: false,
            blinkTab: function(l, m) {
                if (!this._blinkMap[l]) this._blinkMap[l] = {
                    view: m,
                    elem: m.getTabElem()
                };
                this.checkInterval();
            },
            unblinkTab: function(l) {
                if (this._blinkMap[l]) {
                    var m = this._blinkMap[l].elem;
                    if (m) c('CSS').removeClass(m, j);
                    delete this._blinkMap[l];
                }
                this.checkInterval();
            },
            checkInterval: function() {
                var l = Object.keys(this._blinkMap).length;
                if (l > 0) {
                    if (!this._interval) this._interval = c('setIntervalAcrossTransitions')(this._toggleBlinkHighlight.bind(this), i);
                } else if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null;
                }
            },
            _toggleBlinkHighlight: function() {
                this._isHighlighting = !this._isHighlighting;
                for (var l in this._blinkMap)
                    if (this._blinkMap.hasOwnProperty(l)) {
                        var m = this._blinkMap[l],
                            n = m.elem,
                            o = m.view;
                        if (n && n.parentNode && !o.isFocused() && !o.isHovered()) {
                            c('CSS').conditionClass(n, j, this._isHighlighting);
                        } else this.unblinkTab(l);
                    }
            }
        };
    f.exports = k;
}, null);
__d('ChatDateBreak.react', ['cx', 'React', 'formatDate', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'ChatDateBreak',
            propTypes: {
                date: i.instanceOf(Date).isRequired
            },
            shouldComponentUpdate: function(k) {
                return this.props.date.getTime() !== k.date.getTime();
            },
            render: function() {
                var k = c('formatDate')(this.props.date, {
                    today: 'g:ia',
                    withinWeek: 'D g:ia',
                    thisYear: 'M jS, g:ia',
                    older: 'm/d/Y g:ia'
                });
                return (c('React').createElement('time', {
                    className: c('joinClasses')(this.props.className, "_5w-5")
                }, c('React').createElement('span', {
                    className: "_5w-6"
                }, k)));
            }
        });
    f.exports = j;
}, null);
__d('ChatAttachmentProgressBar.react', ['cx', 'Animation', 'React'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = 34,
        k = c('React').createClass({
            displayName: 'ChatAttachmentProgressBar',
            propTypes: {
                ephemeralTTLMode: i.number.isRequired,
                timestamp: i.number.isRequired,
                isMessageAuthor: i.bool
            },
            componentDidMount: function() {
                if (!this.refs.progressBar) return;
                var l = j,
                    m = this.props.ephemeralTTLMode,
                    n = l / m * (Date.now() - this.props.timestamp),
                    o = this._getRemainingTime();
                if (o > 0 && n < l) {
                    var p = this.props.isMessageAuthor ? 'left' : 'right';
                    new(c('Animation'))(this.refs.progressBar).from(p, n).to(p, l).duration(o).go();
                }
            },
            _getRemainingTime: function() {
                return this.props.ephemeralTTLMode - (Date.now() - this.props.timestamp);
            },
            render: function() {
                return (c('React').createElement('a', {
                    className: "_4yo"
                }, c('React').createElement('span', {
                    className: "_1gxq"
                }), c('React').createElement('span', {
                    className: "_1gxr",
                    ref: 'progressBar'
                }, c('React').createElement('span', {
                    className: "_4yu"
                }))));
            }
        });
    f.exports = k;
}, null);
__d('ChatProgressBar.react', ['cx', 'React'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = 2000,
        k = 250,
        l = c('React').createClass({
            displayName: 'ChatProgressBar',
            _timer: null,
            propTypes: {
                isMessageAuthor: i.bool,
                onDone: i.func,
                setExpiredAnimation: i.func,
                timestamp: i.number.isRequired,
                ttl: i.number.isRequired
            },
            getInitialState: function() {
                return {
                    percentage: this._getRemainingPercentage()
                };
            },
            componentDidMount: function() {
                if (this._getRemainingTime() > 0) {
                    this._animateProgressBar();
                } else this.props.setExpiredAnimation && this.props.setExpiredAnimation();
            },
            componentWillUnmount: function() {
                this._timer && clearTimeout(this._timer);
            },
            render: function() {
                return (c('React').createElement('div', {
                    className: "_3pcc" + (this._getRemainingTime() < 0 ? ' ' + "_3pcd" : ''),
                    ref: 'item',
                    style: {
                        width: this.state.percentage.toString() + '%'
                    }
                }));
            },
            _getRemainingTime: function() {
                return this.props.ttl - (Date.now() - this.props.timestamp) - j;
            },
            _getRemainingPercentage: function() {
                return 100 - (Date.now() - this.props.timestamp) / (this.props.ttl - j) * 100;
            },
            _animateProgressBar: function() {
                this._timer = setInterval(function() {
                    if (this.isMounted()) this.setState({
                        percentage: this._getRemainingPercentage()
                    });
                    if (this._getRemainingTime() < 0) {
                        clearTimeout(this._timer);
                        this.props.onDone && this.props.onDone();
                    }
                }.bind(this), k);
            }
        });
    f.exports = l;
}, null);
__d('EmojiOnlyMessage.react', ['cx', 'React'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'EmojiOnlyMessage',
            propTypes: {
                sourceURIs: i.arrayOf(i.shape({
                    emoji: i.any,
                    text: i.string,
                    title: i.string,
                    type: i.string.isRequired,
                    url: i.string.isRequired
                })).isRequired
            },
            render: function() {
                var k = this.props.sourceURIs,
                    l = 0,
                    m = k.map(function(n) {
                        l++;
                        if (n.emoji) {
                            return c('React').createElement('span', {
                                key: l,
                                title: n.title
                            }, n.emoji);
                        } else if (n.title) {
                            return c('React').createElement('span', {
                                className: "_5qi2",
                                key: l,
                                style: {
                                    backgroundImage: 'url(' + n.url + ')'
                                },
                                title: n.title
                            });
                        } else return c('React').createElement('span', {
                            key: l
                        }, n.text);
                    });
                return (c('React').createElement('div', {
                    className: this.props.className,
                    tabIndex: '0'
                }, m));
            }
        });
    f.exports = j;
}, null);
__d('MessageBubbleMixin', ['DOMDimensions', 'ReactDOM'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = 2,
        i = {
            getInitialState: function() {
                return {
                    bubbleWidth: null
                };
            },
            componentDidMount: function() {
                this._restyleBubble(this.props);
            },
            componentDidUpdate: function(j) {
                if (j.maxWidth !== this.props.maxWidth || j.body !== this.props.body || !j.attachments && this.props.attachments) this._restyleBubble(j);
            },
            _restyleBubble: function(j) {
                if (this.props.attachments) {
                    this.setState({
                        bubbleWidth: null
                    });
                    return;
                }
                var k = c('ReactDOM').findDOMNode(this.refs.bubble);
                if (j.maxWidth !== this.props.maxWidth || c('DOMDimensions').getElementDimensions(k).width > this.props.maxWidth) {
                    var l = this.props.maxWidth;
                    this.setState({
                        bubbleWidth: l
                    }, this._shrinkBubble);
                    return;
                }
                this._shrinkBubble();
            },
            _shrinkBubble: function() {
                var j = c('ReactDOM').findDOMNode(this.refs.bubble),
                    k = c('DOMDimensions').getElementDimensions(j).width,
                    l = c('ReactDOM').findDOMNode(this.refs.content),
                    m = l ? c('DOMDimensions').getElementDimensions(l).width + c('DOMDimensions').measureElementBox(c('ReactDOM').findDOMNode(this.refs.contentWrapper), 'width', true, false, false) : 0,
                    n = m + h;
                if (m > 0 && n < this.props.maxWidth && k - n - this.getBoxWidth() > 0) this.setState({
                    bubbleWidth: n
                });
            }
        };
    f.exports = i;
}, null);
__d('ChatBubble.react', ['cx', 'Animation', 'ChatProgressBar.react', 'DOMDimensions', 'EmojiLikeUtils', 'EmojiOnlyMessage.react', 'MercuryAttachment', 'MercuryMessageBody.react', 'MessageBubbleMixin', 'MessagingGiftWrap.react', 'React', 'ReactDOM', 'joinClasses', 'messengerCustomColorUtils'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = 1000,
        k = c('React').createClass({
            displayName: 'ChatBubble',
            _boxWidth: 0,
            mixins: [c('MessageBubbleMixin')],
            propTypes: {
                attachments: i.node,
                body: i.string,
                customColor: i.string,
                customLike: i.object,
                isEmojiLike: i.bool,
                isGiftWrapped: i.bool,
                isMessageAuthor: i.bool,
                maxWidth: i.number.isRequired,
                metaRanges: i.array,
                onUnwrap: i.func,
                ranges: i.array,
                threadID: i.string,
                timestamp: i.number,
                ttl: i.number
            },
            getInitialState: function() {
                return {
                    emojis: undefined,
                    ephemeralExpiring: false,
                    ephemeralExpired: false
                };
            },
            componentDidMount: function() {
                if (this.props.attachments && !this.props.isEmojiLike) return;
                if (!this.props.emojis) {
                    var l = this.props.body || '',
                        m = c('EmojiLikeUtils').richContent(l);
                    if (m) this.setState({
                        emojis: m
                    });
                }
            },
            render: function() {
                var l = this.props.body || '';
                return (c('React').createElement('div', babelHelpers['extends']({}, this.props, {
                    className: c('joinClasses')("_5w1r" + (this._isEpehmeralStylePreferred() ? ' ' + "_4gx-" : '') + (this.state.ephemeralExpiring ? ' ' + "_1xti" : '') + (this.state.ephemeralExpired ? ' ' + "_1xtj" : '') + (!this.state.emojis ? ' ' + "_3_om" : '') + (!!this.state.emojis ? ' ' + "_31xx" : ''), this.props.className),
                    ref: 'bubble',
                    style: {
                        maxWidth: this.props.maxWidth,
                        width: this.state.emojis ? null : this.state.bubbleWidth,
                        wordWrap: l.length >= 15 ? 'break-word' : 'inherit'
                    }
                }), this._renderProgressBar(), c('React').createElement('div', {
                    className: "_4gx_",
                    ref: 'inner'
                }, this._renderContent(), this.props.attachments), this.props.isGiftWrapped ? c('React').createElement(c('MessagingGiftWrap.react'), {
                    onUnwrap: this.props.onUnwrap
                }) : null));
            },
            _renderContent: function() {
                if (!this.props.body || this.props.isEmojiLike) return null;
                var l = {};
                if (this.state.emojis) {
                    var m = c('EmojiLikeUtils').getSourceURIs(this.state.emojis),
                        n = c('React').createElement(c('EmojiOnlyMessage.react'), {
                            sourceURIs: m
                        });
                } else {
                    n = c('React').createElement(c('MercuryMessageBody.react'), {
                        body: this.props.body,
                        ranges: this.props.ranges,
                        metaRanges: this.props.metaRanges,
                        threadID: this.props.threadID,
                        customLike: this.props.customLike
                    });
                    if (this.props.customColor) l = c('messengerCustomColorUtils').customBubbleStyle(this.props.customColor, l);
                }
                return (c('React').createElement('div', {
                    className: "_d97" + (!!this.state.emojis ? ' ' + "_31xy" : ''),
                    ref: 'contentWrapper',
                    style: l
                }, c('React').createElement('span', {
                    className: "_5yl5",
                    ref: 'content'
                }, n)));
            },
            _isEpehmeralStylePreferred: function() {
                if (!this.props.ttl) return false;
                if (!this.props.attachments) return true;
                return this.props.attachments.props.attachments.every(function(l) {
                    return c('MercuryAttachment').isEphemeralTextStyle(l);
                });
            },
            _onProgressBarAnimationDone: function() {
                if (this.isMounted()) {
                    this.setState({
                        ephemeralExpiring: true
                    });
                    new(c('Animation'))(this.refs.inner).to('opacity', 0).duration(j).go();
                }
            },
            _setExpiredAnimation: function() {
                if (this.isMounted()) {
                    this.setState({
                        ephemeralExpiring: true
                    });
                    this.setState({
                        ephemeralExpired: true
                    });
                }
            },
            _renderProgressBar: function() {
                if (!this.props.timestamp || !this.props.ttl || !this._isEpehmeralStylePreferred() || this.state.emojis && this.state.emojis.length > 0) return null;
                return (c('React').createElement(c('ChatProgressBar.react'), {
                    ttl: this.props.ttl,
                    timestamp: this.props.timestamp,
                    isMessageAuthor: this.props.isMessageAuthor,
                    onDone: this._onProgressBarAnimationDone,
                    setExpiredAnimation: this._setExpiredAnimation
                }));
            },
            contentWraps: function() {
                var l = c('ReactDOM').findDOMNode(this.refs.content);
                if (!l) return false;
                var m = l.getClientRects(),
                    n = c('DOMDimensions').getElementDimensions(l).height;
                return m && m.length > 1 && m[0].height < n;
            },
            getBoxWidth: function() {
                if (!this._boxWidth) this._boxWidth = c('DOMDimensions').measureElementBox(c('ReactDOM').findDOMNode(this.refs.bubble), 'width', true, true, false);
                return this._boxWidth;
            }
        });
    f.exports = k;
}, null);
__d('convertMIGColorToFIGColor', ['cssVar'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = {
        '#0077e5': "#4080ff",
        '#44bec7': "#54C7EC",
        '#ffc300': '#f5c33b',
        '#fa3c4c': "#F35369",
        '#d696bb': '#d696bb',
        '#6699cc': "#A3CEDF",
        '#13cf13': "#42b72a",
        '#ff7e29': "#F7923B",
        '#e68585': '#e68585',
        '#7646ff': "#8C72CB",
        '#20cef5': "#54C7EC",
        '#67b868': "#A3CE71",
        '#d4a88c': '#cfa588',
        '#ff5ca1': "#EC7EBD",
        '#a695c7': "#AF9CDA"
    };

    function j(k) {
        return k && i[k] || k;
    }
    f.exports = j;
}, null);
__d('ChatMessage.react', ['cssVar', 'cx', 'fbt', 'BootloadedComponent.react', 'ChatAnimatedGifs', 'ChatAttachmentProgressBar.react', 'ChatBubble.react', 'EmojiLikeUtils', 'MercuryTimestamp', 'CSS', 'immutable', 'ImmutableObject', 'JSResource', 'MercuryAttachment', 'MercuryConfig', 'MercuryErrorInfo', 'MercuryIDs', 'MercuryMessageActions', 'MercuryMessageCustomizations', 'MercuryMessageError.react', 'MercuryMessageInfo', 'MessageBorderType', 'MessageCustomizationType', 'MessagingFlowerBorder.react', 'MessagingGiftWrapChecker', 'MNCommerceMessageType', 'MercuryDisplayTimeFilterMessageRenderer', 'React', 'ReactDOM', 'TooltipData', 'XUISpinner.react', 'convertMIGColorToFIGColor', 'isRTL', 'joinClasses'], function a(b, c, d, e, f, g, h, i, j) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var k = c('React').PropTypes,
        l = c('React').createClass({
            displayName: 'ChatMessage',
            propTypes: {
                message: k.instanceOf(c('ImmutableObject')).isRequired,
                maxBubbleWidth: k.number.isRequired,
                onAttachmentLoad: k.func,
                onStickerClick: k.func,
                thread: k.instanceOf(c('ImmutableObject'))
            },
            componentDidMount: function() {
                c('CSS').conditionClass(c('ReactDOM').findDOMNode(this), "_2cnu", this.isOneLine());
            },
            isOneLine: function() {
                var m = this.props.message;
                return (c('MercuryMessageInfo').isInbound(m) && !this.refs.attachmentsInside && this.refs.bubble && !this.refs.bubble.contentWraps());
            },
            shouldComponentUpdate: function(m, n) {
                var o = m.message !== this.props.message,
                    p = false,
                    q = false,
                    r = this.props.thread;
                if (r) {
                    p = r.custom_like_icon !== m.thread.custom_like_icon;
                    q = r.custom_color !== m.thread.custom_color;
                } else if (m.thread) return true;
                return (o || p || q);
            },
            render: function() {
                var m = this.props.message,
                    n = c('MercuryAttachment').get(m).length > 0,
                    o = c('MercuryMessageInfo').isInbound(m),
                    p = c('MercuryIDs').isGroupChat(m.thread_id),
                    q = c('isRTL')(m.body),
                    r = c('MercuryErrorInfo').hasErrorStatus(m),
                    s = "_5wd4" + (o ? ' ' + "_1nc7" : '') + (!o ? ' ' + "_1nc6" : '') + (n ? ' ' + "_2_-t" : '') + (o && p ? ' ' + "_5ysy" : '') + (r ? ' ' + "_1zcs" : '') + (q ? ' ' + "direction_rtl" : '') + (!q ? ' ' + "direction_ltr" : '');
                return (c('React').createElement('div', {
                    className: c('joinClasses')(this.props.className, s)
                }, this._renderInner(), this._renderUndertext()));
            },
            _renderInner: function() {
                var m = this.props.message,
                    n = {};
                if (c('MercuryMessageInfo').isOutbound(m)) {
                    var o = j._("{time}", [j.param('time', c('MercuryTimestamp').getPreciseTimestamp(m.timestamp))]);
                    Object.assign(n, c('TooltipData').propsFor(o, 'right'));
                }
                if (m.is_filtered_content) return (c('React').createElement('div', babelHelpers['extends']({
                    className: "_5wd9 _5wdc uiBoxYellow clearfix",
                    ref: 'inner'
                }, n), c('MercuryDisplayTimeFilterMessageRenderer').renderFilteredContent(m)));
                return (c('React').createElement('div', babelHelpers['extends']({
                    className: "_5wd9",
                    ref: 'inner'
                }, n), this._renderBubble(), this._renderAttachments('outside')));
            },
            _renderUndertext: function() {
                if (this.props.message.is_filtered_content) return null;
                return (c('React').createElement('div', {
                    className: "_3ry4",
                    ref: 'undertext'
                }, c('React').createElement(c('MercuryMessageError.react'), {
                    className: "_5wda clearfix",
                    message: this.props.message,
                    ref: 'status'
                }), this._renderSpoofWarning()));
            },
            _renderSpoofWarning: function() {
                return (this.props.message.is_spoof_warning ? c('React').createElement(c('BootloadedComponent.react'), {
                    bootloadPlaceholder: c('React').createElement('span', null),
                    bootloadLoader: c('JSResource')('MercurySpoofWarning.react').__setRef('ChatMessage.react'),
                    authorID: this.props.message.author,
                    className: "_5wdb"
                }) : null);
            },
            _getAttachmentPlaceholder: function() {
                return (c('React').createElement('div', {
                    style: {
                        padding: '20px',
                        text_align: 'center'
                    }
                }, c('React').createElement(c('XUISpinner.react'), null)));
            },
            _renderProgressBar: function() {
                var m = this.props.message;
                if (!m.ephemeral_ttl_mode || !m.timestamp) return null;
                return (c('React').createElement(c('ChatAttachmentProgressBar.react'), {
                    ephemeralTTLMode: m.ephemeral_ttl_mode,
                    timestamp: m.timestamp,
                    isMessageAuthor: !c('MercuryMessageInfo').isInbound(m)
                }));
            },
            _renderAttachments: function(m) {
                if (this.props.message.commerce_message_type === c('MNCommerceMessageType').RIDE_INTENT) return null;
                var n = this.props.message,
                    o = this.props.thread ? this.props.thread.custom_like_icon : null,
                    p = m == 'inside' ? 'attachmentsInside' : 'attachmentsOutside',
                    q = c('MercuryAttachment').get(n).filter(function(t) {
                        var u = c('MercuryAttachment').isBubblePreferred(t);
                        return u && m === 'inside' || !u && m === 'outside';
                    }),
                    r = n.attachments.length > 0 && n.attachments.every(function(t) {
                        return c('MercuryAttachment').isEphemeralAttachmentStyle(t);
                    }),
                    s = this.props.thread && c('MercuryConfig').ChatMessengerStyles ? c('convertMIGColorToFIGColor')(this.props.thread.custom_color) : '';
                if (q.length > 0) return (c('React').createElement(c('BootloadedComponent.react'), {
                    bootloadPlaceholder: this._getAttachmentPlaceholder(),
                    bootloadLoader: c('JSResource')('MercuryAttachments.react').__setRef('ChatMessage.react'),
                    className: (m === 'outside' ? "_3e7u" : '') + (!!n.body ? ' ' + "_16ys" : '') + (!!n.ephemeral_ttl_mode ? ' ' + "_3-rb" : '') + (!!s ? ' ' + "_3al" : '') + (' ' + "_n4o"),
                    attachments: q,
                    customLike: o,
                    customColor: s,
                    hasFlowerBorder: c('MercuryConfig').WWWMessengerFlowerBorderViewer && c('MercuryMessageCustomizations').getCustomizationValue(n, c('MessageCustomizationType').BORDER) === c('MessageBorderType').FLOWERS && m === 'outside',
                    isChat: true,
                    isGiftWrapped: c('MessagingGiftWrapChecker').shouldRenderWithGiftWrap(n) && m === 'outside',
                    maxWidth: this.props.maxBubbleWidth,
                    message: n,
                    onUnwrap: this._handleUnwrap,
                    renderProgressBar: r ? this._renderProgressBar : null,
                    onAttachmentLoad: this.props.onAttachmentLoad,
                    onStickerClick: this.props.onStickerClick,
                    ref: p
                }));
            },
            _renderBubble: function() {
                var m = this.props.message,
                    n = m.body,
                    o = this._renderAttachments('inside'),
                    p = c('MercuryMessageInfo').isInbound(m),
                    q = c('MercuryConfig').WWWMessengerFlowerBorderViewer && c('MercuryMessageCustomizations').getCustomizationValue(m, c('MessageCustomizationType').BORDER) === c('MessageBorderType').FLOWERS;
                if (c('ChatAnimatedGifs').shouldHideBody(m)) n = '';
                if (n || o) return (c('React').createElement('div', {
                    className: "_5wde" + (' ' + "_n4o") + (q ? ' ' + "_337n" : '')
                }, c('React').createElement(c('ChatBubble.react'), {
                    attachments: o,
                    body: n,
                    className: "_5wdf",
                    isMessageAuthor: !p,
                    maxWidth: this.props.maxBubbleWidth,
                    ranges: m.ranges,
                    metaRanges: m.meta_ranges,
                    ref: 'bubble',
                    isEmojiLike: c('EmojiLikeUtils').isEmojiLike(m),
                    isGiftWrapped: c('MessagingGiftWrapChecker').shouldRenderWithGiftWrap(m),
                    onUnwrap: this._handleUnwrap,
                    threadID: m.thread_id,
                    ttl: m.ephemeral_ttl_mode,
                    timestamp: m.timestamp,
                    customLike: m.customLike,
                    customColor: c('MercuryConfig').ChatMessengerStyles && this.props.thread && this.props.isFromViewer ? c('convertMIGColorToFIGColor')(this.props.thread.custom_color) : ''
                }), q ? c('React').createElement(c('MessagingFlowerBorder.react'), null) : null));
            },
            _handleUnwrap: function() {
                var m = "2500ms";
                setTimeout(function() {
                    return this._persistUnwrapping();
                }.bind(this), m.substring(0, m.length - 2));
            },
            _persistUnwrapping: function() {
                c('MercuryMessageActions').get().unwrap(this.props.message);
            }
        });
    f.exports = l;
}, null);
__d('ChatMessageGroup.react', ['cx', 'fbt', 'ChatConfig', 'ChatDateBreak.react', 'ChatMessage.react', 'Image.react', 'immutable', 'ImmutableObject', 'MercuryConfig', 'MercuryIDs', 'MercuryParticipants', 'MercuryTimestamp', 'MessengerTextWithEmoticons.react', 'React', 'StoreAndPropBasedStateMixin'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = new(c('ImmutableObject'))({
            name: '',
            href: '#',
            image_src: ''
        }),
        l = c('ChatConfig').get('chattab_rounded_profile', false),
        m = c('React').createClass({
            displayName: 'ChatMessageGroup',
            mixins: [c('StoreAndPropBasedStateMixin')(c('MercuryParticipants'))],
            propTypes: {
                activeMessageID: j.string,
                author: j.string,
                hasDateBreak: j.bool,
                isCanonical: j.bool,
                isFromViewer: j.bool,
                isPageMessage: j.bool,
                maxBubbleWidth: j.number,
                messages: j.instanceOf(c('immutable').List).isRequired,
                onAttachmentLoad: j.func,
                onStickerClick: j.func,
                thread: j.instanceOf(c('ImmutableObject')),
                threadID: j.string
            },
            statics: {
                calculateState: function(o) {
                    return {
                        participants: n(o)
                    };
                }
            },
            shouldComponentUpdate: function(o, p) {
                return (this.props.activeMessageID !== o.activeMessageID || this.props.isFromViewer !== o.isFromViewer || !c('immutable').is(this.props.messages, o.messages) || !c('immutable').is(this.state.participants, p.participants) || !c('immutable').is(this.props.thread, o.thread));
            },
            render: function() {
                return (c('React').createElement('div', {
                    className: "_4tdt"
                }, this._renderProfileColumn(), this._renderName(), c('React').createElement('div', {
                    className: "_4tdv"
                }, this._renderMessages())));
            },
            _renderProfileColumn: function() {
                if (this.props.isFromViewer) return null;
                var o = this.state.participants.get(this.props.author) || k,
                    p = i._("{name} {time}", [i.param('name', o.name), i.param('time', c('MercuryTimestamp').getPreciseTimestamp(this.props.messages.last().timestamp))]),
                    q = o.image_src ? c('React').createElement(c('Image.react'), {
                        src: o.image_src
                    }) : null;
                return (c('React').createElement('div', {
                    className: "_31o4" + (l ? ' ' + "_3njy" : '')
                }, c('React').createElement('a', {
                    'aria-label': p,
                    className: "_4tdw",
                    'data-hover': 'tooltip',
                    'data-tooltip-content': p,
                    'data-tooltip-position': 'left',
                    href: o.href,
                    ref: 'link'
                }, q)));
            },
            _renderName: function() {
                if (this.props.isCanonical || this.props.isFromViewer) return null;
                var o = this.state.participants.get(this.props.messages.first().author);
                if (!o) return null;
                var p = o.short_name;
                if (this.props.thread && this.props.thread.custom_nickname) {
                    var q = c('MercuryIDs').getUserIDFromParticipantID(o.id);
                    if (this.props.thread.custom_nickname[q]) {
                        p = this.props.thread.custom_nickname[q];
                        if (c('MercuryConfig').MessengerNewEmojiGK) p = c('React').createElement(c('MessengerTextWithEmoticons.react'), {
                            renderEmoticons: true,
                            renderEmoji: true,
                            text: p
                        });
                    }
                }
                return (c('React').createElement('div', {
                    className: "_4tdx"
                }, p));
            },
            _renderMessages: function() {
                var o = this.props.messages.size,
                    p = [];
                this.props.messages.forEach(function(q, r, s) {
                    var t = q.message_id === this.props.activeMessageID;
                    if (t && !(r === 0 && this.props.hasDateBreak)) p.push(c('React').createElement(c('ChatDateBreak.react'), {
                        date: new Date(q.timestamp),
                        key: 'db:' + q.message_id
                    }));
                    p.push(c('React').createElement(c('ChatMessage.react'), {
                        isFromViewer: this.props.isFromViewer,
                        key: q.message_id,
                        maxBubbleWidth: this.props.maxBubbleWidth,
                        message: q,
                        nextTimestamp: this._getNextTimestamp(s, o, r),
                        onAttachmentLoad: this.props.onAttachmentLoad,
                        onStickerClick: this.props.onStickerClick,
                        thread: this.props.thread
                    }));
                }.bind(this));
                return p;
            },
            _getNextTimestamp: function(o, p, q) {
                return q < p - 1 ? o.get(q + 1).timestamp : this.props.nextTimestamp;
            }
        });

    function n(o) {
        return c('immutable').Map().withMutations(function(p) {
            o.readReceipts.forEach(function(q, r) {
                p.set(r, c('MercuryParticipants').getOrFetch(r));
            });
            p.set(o.author, c('MercuryParticipants').getOrFetch(o.author));
        });
    }
    f.exports = m;
}, null);
__d('MercuryLogMessage.react', ['cx', 'fbt', 'DOM', 'DOMDimensions', 'Event', 'ImmutableObject', 'MercuryLogMessageRenderer', 'MercuryMeMessageProcessor', 'MercuryLogMessageType', 'React', 'ReactDOM', 'cancelAnimationFrame', 'emptyFunction', 'formatDate', 'joinClasses', 'requestAnimationFrame', 'requireWeak'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = c('React').createClass({
            displayName: 'MercuryLogMessage',
            propTypes: {
                loadMoreMessages: j.func,
                maxWidth: j.number,
                message: j.instanceOf(c('ImmutableObject')).isRequired,
                onImageLoad: j.func,
                thread: j.object
            },
            getDefaultProps: function() {
                return {
                    onImageLoad: c('emptyFunction')
                };
            },
            getInitialState: function() {
                return {
                    messageText: null,
                    showEventReminderFlyout: false
                };
            },
            componentDidMount: function() {
                this.componentWillReceiveProps(this.props);
            },
            componentWillUnmount: function() {
                if (this._raf) c('cancelAnimationFrame')(this._raf);
            },
            _renderErrorMessage: function() {
                return (c('React').createElement('a', {
                    onClick: this._loadMoreMessages
                }, i._("Show previous messages.")));
            },
            _loadMoreMessages: function() {
                var l = this.props.loadMoreMessages && this.props.loadMoreMessages();
                if (l) {
                    this.setState({
                        messageText: this._renderErrorMessage()
                    });
                } else {
                    var m = i._("Couldn't find previous messages.");
                    this.setState({
                        messageText: m
                    });
                }
            },
            componentWillReceiveProps: function(l) {
                if (l.message.log_message_type === c('MercuryLogMessageType').SERVER_ERROR) {
                    this._loadMoreMessages();
                    return;
                }
                if (c('MercuryMeMessageProcessor').shouldTransform(l.message)) {
                    c('MercuryMeMessageProcessor').transformSnippet(l.message.body, l.message.author, l.thread, function(m) {
                        this.setState({
                            messageText: m
                        });
                    }.bind(this));
                    return;
                }
                c('MercuryLogMessageRenderer').renderText(l.message, l.thread, function(m) {
                    this.setState({
                        messageText: m
                    });
                }.bind(this));
            },
            shouldComponentUpdate: function(l, m) {
                return (this.state.messageText != m.messageText || l.maxWidth !== this.props.maxWidth || this.state.showEventReminderFlyout !== m.showEventReminderFlyout);
            },
            componentDidUpdate: function() {
                this._informAttachmentLoaded();
                if (!this.refs.attachment) return;
                c('MercuryLogMessageRenderer').renderAttachmentLegacy(this.refs.attachment, this.props.message);
                c('DOM').scry(this.refs.wrap, 'img').forEach(function(l) {
                    var m = c('Event').listen(l, 'load', function() {
                        this._informAttachmentLoaded();
                        m.remove();
                    }.bind(this));
                }.bind(this));
            },
            render: function() {
                return (c('React').createElement('div', babelHelpers['extends']({}, this.props, {
                    className: c('joinClasses')(this.props.className, "_5ye6"),
                    ref: 'wrap',
                    style: babelHelpers['extends']({}, this.props.style, this._getStyle()),
                    title: c('formatDate')(new Date(this.props.message.timestamp), 'g:ia')
                }), c('React').createElement('div', {
                    className: "_5ye7"
                }, c('MercuryLogMessageRenderer').renderIcon(this.props.message), this.state.messageText), c('React').createElement('div', {
                    className: "_5ye8",
                    ref: 'attachment'
                }, this._renderEventReminderAttachment())));
            },
            _renderEventReminderAttachment: function() {
                if (this.props.thread && !this.props.thread.lightweight_events || !this.props.message.log_message_data) return null;
                var l;
                c('requireWeak')('Link.react', function(n) {
                    l = n;
                });
                var m = '';
                switch (this.props.message.log_message_data.message_type) {
                    case 'lightweight_event_create':
                        m = i._("Add Name");
                        break;
                    case 'lightweight_event_update_time':
                        m = i._("Change Time");
                        break;
                    case 'lightweight_event_update_title':
                        m = i._("Change Name");
                        break;
                    case 'lightweight_event_update':
                        m = i._("Update Event");
                        break;
                    default:
                        return null;
                }
                return (c('React').createElement('span', null, c('React').createElement(l, {
                    href: '#',
                    onClick: this._handleEventReminderClick,
                    title: i._("Edit Event"),
                    ref: 'event_rem_link'
                }, m), this._renderEventReminderFlyout()));
            },
            _handleEventReminderClick: function() {
                this.setState({
                    showEventReminderFlyout: !this.state.showEventReminderFlyout
                });
            },
            _renderEventReminderFlyout: function() {
                if (!this.state.showEventReminderFlyout) return null;
                var event = {
                    eventDate: this.props.thread.lightweight_events.event_time,
                    eventName: this.props.thread.lightweight_events.title,
                    eventID: this.props.thread.lightweight_events.oid,
                    threadID: this.props.thread.lightweight_events.message_thread_id
                };
                c('requireWeak')('EventReminderStateStore', function(n) {
                    var o, p = n.getEvent(event.threadID);
                    if (!p) {
                        (function() {
                            var q = {
                                eventName: event.eventName,
                                eventDate: event.eventDate,
                                eventID: event.eventID.toString(),
                                threadID: event.threadID.toString()
                            };
                            c('requireWeak')('EventReminderActions', function(r) {
                                r.updateEventReminder(q);
                            });
                        })();
                    } else {
                        event.eventDate = p.eventDate;
                        event.eventName = p.eventName;
                        event.eventID = p.eventID;
                    }
                });
                var l = {
                        position: 'above',
                        contextRef: function() {
                            return this.refs.event_rem_link;
                        }.bind(this),
                        shown: this.state.showEventReminderFlyout,
                        onToggle: this._onToggle
                    },
                    m;
                c('requireWeak')('ChatEventReminderContainer.react', function(n) {
                    m = n;
                });
                return (c('React').createElement(m, {
                    eventDate: event.eventDate,
                    eventName: event.eventName,
                    eventID: event.eventID,
                    threadID: event.threadID,
                    dialogProps: l,
                    flyoutNoSheet: true
                }));
            },
            _onToggle: function(l) {
                if (l !== this.state.showEventReminderFlyout) this.setState({
                    showEventReminderFlyout: l
                });
            },
            _getStyle: function() {
                return this.props.maxWidth ? {
                    maxWidth: this.props.maxWidth
                } : null;
            },
            _informAttachmentLoaded: function() {
                if (this._raf) c('cancelAnimationFrame')(this._raf);
                this._raf = c('requestAnimationFrame')(function() {
                    this.props.onImageLoad && this.props.onImageLoad(c('DOMDimensions').getElementDimensions(this.refs.wrap).height);
                    delete this._raf;
                }.bind(this));
            }
        });
    f.exports = k;
}, null);
__d('MessengerDomIDs', ['uniqueID'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        COMPOSER_INPUT_DESCRIPTION: c('uniqueID')(),
        CONVERSATION: c('uniqueID')(),
        MAIN_LABEL: c('uniqueID')(),
        MUTE_DIALOG_TITLE: c('uniqueID')(),
        THREAD_INFO_PANEL: c('uniqueID')(),
        THREAD_TITLE: c('uniqueID')()
    };
    f.exports = h;
}, null);
__d('MessageList.react', ['cx', 'immutable', 'ImmutableObject', 'MercuryActionType', 'MercuryIDs', 'MercuryMeMessageProcessor', 'MercuryMessageGroup', 'MercuryShareAttachmentRenderLocations', 'MessengerDomIDs', 'ReactComponentWithPureRenderMixin', 'React', 'ReactDOM', 'MercuryLogMessageType'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = 1000 * 60 * 60,
        k = c('React').createClass({
            displayName: 'MessageList',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                DateBreak: i.func.isRequired,
                deliveryTimestamp: i.number.isRequired,
                isCanonical: i.bool,
                isPageMessage: i.bool,
                location: i.string.isRequired,
                LogMessage: i.func.isRequired,
                loadMoreMessages: i.func,
                MessageGroup: i.func.isRequired,
                messages: i.instanceOf(c('immutable').List).isRequired,
                onAttachmentLoad: i.func,
                onStickerClick: i.func,
                readReceipts: i.instanceOf(c('immutable').OrderedMap).isRequired,
                viewer: i.string.isRequired,
                thread: i.object,
                threadID: i.string
            },
            getInitialState: function() {
                return {
                    activeMessageID: null,
                    messageGroups: c('MercuryMessageGroup').calculateMessageGroups(this.props.messages, this.props.location)
                };
            },
            componentWillReceiveProps: function(q) {
                if (q.messages !== this.props.messages) this.setState({
                    messageGroups: c('MercuryMessageGroup').calculateMessageGroups(q.messages, q.location)
                });
            },
            render: function() {
                var q = this.props,
                    r = q.DateBreak,
                    s = q.location,
                    t = q.MessageGroup,
                    u = [],
                    v = this.state.activeMessageID,
                    w = this.state.messageGroups,
                    x = w.length,
                    y = this.props.readReceipts,
                    z = y.last() || 0,
                    aa = c('MercuryIDs').getParticipantIDFromUserID(this.props.viewer);
                for (var ba = 0; ba < x; ba++) {
                    var ca = ba > 0 ? w[ba - 1] : null,
                        da = ca && ca.length > 0 ? ca[ca.length - 1] : null,
                        ea = w[ba],
                        fa = ea[0],
                        ga = ea[ea.length - 1],
                        ha = false;
                    if (!da || fa.timestamp - da.timestamp > j) {
                        ha = true;
                        u.push(c('React').createElement(r, {
                            date: new Date(fa.timestamp),
                            key: 'db:' + fa.message_id,
                            ref: 'db:' + fa.message_id
                        }));
                    }
                    if (fa.action_type == c('MercuryActionType').LOG_MESSAGE) {
                        if ((s === c('MercuryShareAttachmentRenderLocations').CHAT || s === c('MercuryShareAttachmentRenderLocations').MESSENGER) && (fa.log_message_type === c('MercuryLogMessageType').VIDEO_CALL || fa.log_message_type === c('MercuryLogMessageType').PHONE_CALL)) {
                            var ia = this._createRTCMessageGroup(fa, aa, w, x, ba, y, z, ga);
                            u.push(ia);
                        } else {
                            var ja = this._createLogMessageGroup(fa);
                            u.push(ja);
                        }
                        continue;
                    }
                    if (c('MercuryMeMessageProcessor').shouldTransform(fa)) {
                        u.push(this._createLogMessageGroup(fa));
                        continue;
                    }
                    ea = c('immutable').List(ea);
                    var ka = m(w, x, ba),
                        la = !o(y, ea, ka),
                        ma = n(z, ga),
                        na = p(this.props.deliveryTimestamp, ga);
                    u.push(c('React').createElement(t, {
                        activeMessageID: l(v, ea),
                        author: ea.first().author,
                        deliveryTimestamp: na,
                        hasDateBreak: ha,
                        isCanonical: this.props.isCanonical,
                        isFromViewer: aa === fa.author,
                        isPageMessage: this.props.isPageMessage,
                        key: 'mg:' + fa.message_id,
                        lastReadTimestamp: ma,
                        maxBubbleWidth: this.props.maxBubbleWidth,
                        messages: ea,
                        nextTimestamp: ka,
                        onAttachmentLoad: this.props.onAttachmentLoad,
                        onMessageDeselect: this._handleMessageDeselect,
                        onMessageSelect: this._handleMessageSelect,
                        onStickerClick: this.props.onStickerClick,
                        readReceipts: la ? y : c('immutable').OrderedMap(),
                        ref: 'mg:' + fa.message_id,
                        thread: this.props.thread,
                        threadID: this.props.threadID
                    }));
                }
                return (c('React').createElement('div', {
                    id: s === c('MercuryShareAttachmentRenderLocations').MESSENGER ? c('MessengerDomIDs').CONVERSATION : null
                }, u));
            },
            getMessageElement: function(q, r) {
                if (r) {
                    var s = this.refs['db:' + q];
                    if (s) return c('ReactDOM').findDOMNode(s);
                }
                var t = this.state.messageGroups.find(function(w) {
                    return w.some(function(x) {
                        return x.message_id === q;
                    });
                });
                if (!t) return null;
                var u = t[0].message_id,
                    v = this.refs['mg:' + u];
                if (!v) return null;
                if (r && u === q) return c('ReactDOM').findDOMNode(v);
                return v.getMessageElement(q);
            },
            _handleMessageDeselect: function(q) {
                this.setState(function(r) {
                    return {
                        activeMessageID: r.activeMessageID === q ? null : r.activeMessageID
                    };
                });
            },
            _handleMessageSelect: function(q) {
                this.setState({
                    activeMessageID: q
                });
            },
            _createRTCMessageGroup: function(q, r, s, t, u, v, w, x) {
                var y = this.props.MessageGroup,
                    z = {
                        attach_type: 'share',
                        share: {
                            style_list: ['rtc_call_log', 'fallback'],
                            log_message_body: q.log_message_body,
                            log_message_data: q.log_message_data,
                            log_message_type: q.log_message_type,
                            timestamp: q.timestamp
                        }
                    },
                    aa = c('ImmutableObject').setProperty(q, 'attachments', [z]);
                aa = c('ImmutableObject').setProperty(aa, 'body', '');
                var ba = c('immutable').List([aa]),
                    ca = m(s, t, u),
                    da = !o(v, ba, ca),
                    ea = n(w, x),
                    fa = p(this.props.deliveryTimestamp, x);
                return (c('React').createElement(y, {
                    author: ba.first().author,
                    deliveryTimestamp: fa,
                    isFromViewer: r === q.author,
                    key: q.message_id,
                    lastReadTimestamp: ea,
                    maxBubbleWidth: this.props.maxBubbleWidth,
                    messages: ba,
                    nextTimestamp: ca,
                    onAttachmentLoad: this.props.onAttachmentLoad,
                    onMessageDeselect: this._handleMessageDeselect,
                    onMessageSelect: this._handleMessageSelect,
                    onStickerClick: this.props.onStickerClick,
                    readReceipts: da ? v : c('immutable').OrderedMap(),
                    thread: this.props.thread,
                    threadID: this.props.threadID
                }));
            },
            _createLogMessageGroup: function(q) {
                var r = this.props.LogMessage;
                return (c('React').createElement(r, {
                    className: this.props.location === c('MercuryShareAttachmentRenderLocations').CHAT ? "_5w0o" : null,
                    key: q.message_id,
                    loadMoreMessages: this.props.loadMoreMessages,
                    message: q,
                    onImageLoad: this.props.onAttachmentLoad,
                    viewer: this.props.viewer,
                    thread: this.props.thread
                }));
            }
        });

    function l(q, r) {
        return r.find(function(s) {
            return s.message_id === q;
        }) ? q : null;
    }

    function m(q, r, s) {
        return s < r - 1 ? q[s + 1][0].timestamp : Infinity;
    }

    function n(q, r) {
        return r.timestamp > q ? q : Infinity;
    }

    function o(q, r, s) {
        return (r.isEmpty() || q.last() < r.first().timestamp || q.first() >= s);
    }

    function p(q, r) {
        return r.timestamp > q ? q : Infinity;
    }
    f.exports = k;
}, null);
__d('ChatConversation.react', ['invariant', 'ChatDateBreak.react', 'ChatMessageGroup.react', 'immutable', 'MercuryLogMessage.react', 'MessageList.react', 'React', 'MercuryShareAttachmentRenderLocations', 'cancelAnimationFrame', 'requestAnimationFrame'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'ChatConversation',
            _raf: (undefined, Number),
            _onMountTimeout: (undefined, Number),
            propTypes: {
                contextBanner: i.object,
                isCanonical: i.bool.isRequired,
                loadMoreMessages: i.func,
                maxBubbleWidth: i.number.isRequired,
                messages: i.instanceOf(c('immutable').List).isRequired,
                onAttachmentLoad: i.func,
                onMount: i.func,
                onStickerClick: i.func,
                viewer: i.string.isRequired,
                thread: i.object,
                threadID: i.string
            },
            componentDidMount: function() {
                this._raf = c('requestAnimationFrame')(function() {
                    this._onMountTimeout = setTimeout(function() {
                        this.props.onMount && this.props.onMount();
                        delete this._onMountTimeout;
                    }.bind(this), 0);
                    delete this._raf;
                }.bind(this));
            },
            componentWillUnmount: function() {
                if (this._raf) c('cancelAnimationFrame')(this._raf);
                clearTimeout(this._onMountTimeout);
            },
            componentWillReceiveProps: function(k) {
                !(k.maxBubbleWidth === this.props.maxBubbleWidth) ? h(0): void 0;
            },
            render: function() {
                return (c('React').createElement('div', null, this.props.contextBanner, c('React').createElement(c('MessageList.react'), {
                    DateBreak: c('ChatDateBreak.react'),
                    LogMessage: c('MercuryLogMessage.react'),
                    MessageGroup: c('ChatMessageGroup.react'),
                    deliveryTimestamp: 0,
                    isCanonical: this.props.isCanonical,
                    location: c('MercuryShareAttachmentRenderLocations').CHAT,
                    loadMoreMessages: this.props.loadMoreMessages,
                    maxBubbleWidth: this.props.maxBubbleWidth,
                    messages: this.props.messages,
                    onAttachmentLoad: this.props.onAttachmentLoad,
                    onStickerClick: this.props.onStickerClick,
                    readReceipts: c('immutable').OrderedMap(),
                    viewer: this.props.viewer,
                    thread: this.props.thread,
                    threadID: this.props.threadID
                })));
            }
        });
    f.exports = j;
}, null);
__d('MercuryTypingAnimation.react', ['cx', 'React', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'MercuryTypingAnimation',
            propTypes: {
                color: i.oneOf(['light', 'dark'])
            },
            getDefaultProps: function() {
                return {
                    color: 'dark'
                };
            },
            render: function() {
                var k = "_4a0v" + (this.props.color === 'light' ? ' ' + "_4a0w" : '') + (this.props.color === 'dark' ? ' ' + "_4a0x" : '');
                return (c('React').createElement('div', {
                    className: c('joinClasses')(this.props.className, k)
                }, c('React').createElement('div', {
                    className: "_4b0g"
                }, c('React').createElement('div', {
                    className: "_5pd7"
                }), c('React').createElement('div', {
                    className: "_5pd7"
                }), c('React').createElement('div', {
                    className: "_5pd7"
                }))));
            }
        });
    f.exports = j;
}, null);
__d('ChatTypingIndicator.react', ['cx', 'fbt', 'ChatConfig', 'Image.react', 'MercuryParticipants', 'MercuryTypingAnimation.react', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = c('ChatConfig').get('chattab_rounded_profile', false),
        l = c('React').createClass({
            displayName: 'ChatTypingIndicator',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                userID: j.string,
                showName: j.bool
            },
            render: function() {
                var n = void 0;
                if (this.props.userID) n = c('MercuryParticipants').getNow(this.props.userID);
                if (!n) return null;
                return (c('React').createElement('div', {
                    className: "_4tdt"
                }, m(n), this._renderBubble()));
            },
            getBubble: function() {
                return this.refs.bubble;
            },
            _renderBubble: function() {
                var n = this.props.showName;
                return (c('React').createElement('div', {
                    className: "_4tdv"
                }, c('React').createElement('div', {
                    className: "_5wd4" + (' ' + "_1nc7") + (' ' + "_2cnu") + (n ? ' ' + "_5ysy" : '')
                }, c('React').createElement('div', {
                    className: "_5wd9" + (' ' + "_n4o")
                }, c('React').createElement('div', {
                    className: "_5w1r" + (' ' + "_5wdf") + (' ' + "_3_om")
                }, c('React').createElement(c('MercuryTypingAnimation.react'), {
                    className: "_5x7x",
                    ref: 'bubble'
                }))))));
            }
        });

    function m(n) {
        var o = i._("{name}", [i.param('name', n.name)]);
        return (c('React').createElement('div', {
            className: "_31o4" + (k ? ' ' + "_3njy" : '')
        }, c('React').createElement('a', {
            'aria-label': o,
            className: "_4tdw",
            'data-hover': 'tooltip',
            'data-tooltip-content': o,
            'data-tooltip-position': 'left',
            href: n.href || '#',
            ref: 'link'
        }, c('React').createElement(c('Image.react'), {
            src: n.image_src,
            ref: 'image'
        }))));
    }
    f.exports = l;
}, null);
__d('ChatTypingIndicators.react', ['fbt', 'ChatTypingIndicator.react', 'DOM', 'MercuryIDs', 'MercuryThreadInformer', 'MercuryThreads', 'MercuryTypingReceiver', 'MercuryParticipants', 'React', 'ReactDOM', 'SubscriptionsHandler', 'TooltipData', 'createObjectFrom', 'emptyFunction'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = c('MercuryThreads').get(),
        j = c('React').PropTypes,
        k = c('React').createClass({
            displayName: 'ChatTypingIndicators',
            propTypes: {
                indicatorClass: j.func,
                indicatorsWillShow: j.func,
                indicatorsDidShow: j.func,
                rootClassName: j.string,
                threadID: j.string.isRequired,
                viewer: j.string.isRequired
            },
            getDefaultProps: function() {
                return {
                    indicatorClass: c('ChatTypingIndicator.react'),
                    indicatorsWillShow: c('emptyFunction'),
                    indicatorsDidShow: c('emptyFunction')
                };
            },
            getInitialState: function() {
                return {
                    typingUserIDs: []
                };
            },
            componentDidMount: function() {
                var l = c('MercuryThreadInformer').getForFBID(this.props.viewer),
                    m = c('MercuryTypingReceiver').getForFBID(this.props.viewer);
                this._subscriptions = new(c('SubscriptionsHandler'))();
                this._subscriptions.addSubscriptions(m.addRetroactiveListener('state-changed', this.typingStateChanged), l.subscribe('messages-received', this.messagesReceived));
            },
            componentWillReceiveProps: function(l) {
                if (l.threadID != this.props.threadID) this.setState({
                    typingUserIDs: []
                });
            },
            componentWillUpdate: function(l, m) {
                if (m.typingUserIDs.length > 0) this.props.indicatorsWillShow();
            },
            componentDidUpdate: function() {
                if (this.state.typingUserIDs.length > 0) this.props.indicatorsDidShow();
                c('MercuryParticipants').getMulti(this.state.typingUserIDs, function(l) {
                    if (this.isMounted()) this.state.typingUserIDs.forEach(function(m) {
                        var n = l[m],
                            o = this.refs[m] && this.refs[m].getBubble();
                        if (o && n) c('TooltipData').set(c('ReactDOM').findDOMNode(o), this.renderTooltip(n.short_name), 'above', 'left');
                    }.bind(this));
                }.bind(this));
            },
            componentWillUnmount: function() {
                this._subscriptions.release();
            },
            render: function() {
                var l = i.getThreadMetaNow(this.props.threadID);
                if (l && !l.is_subscribed) return null;
                var m = c('MercuryIDs').isGroupChat(this.props.threadID);
                return (c('React').createElement('div', {
                    className: this.props.rootClassName
                }, this.state.typingUserIDs.map(function(n) {
                    return (this._renderTypingIndicator(n, !!m));
                }.bind(this))));
            },
            _renderTypingIndicator: function(l, m) {
                var n = this.props.indicatorClass;
                return (c('React').createElement(n, {
                    key: l,
                    ref: l,
                    showName: m,
                    userID: l
                }));
            },
            renderTooltip: function(l) {
                var m = c('DOM').create('span');
                c('ReactDOM').render(c('React').createElement('span', null, h._("{name} is typing...", [h.param('name', l)])), m);
                return m;
            },
            typingStateChanged: function(l) {
                if (this.props.threadID in l) this.setState({
                    typingUserIDs: l[this.props.threadID].slice().sort()
                });
            },
            messagesReceived: function(l, m) {
                if (this.props.threadID in m) {
                    var n = m[this.props.threadID],
                        o = c('createObjectFrom')(n.map(function(p) {
                            return p.author;
                        }));
                    this.setState({
                        typingUserIDs: this.state.typingUserIDs.filter(function(p) {
                            return !o[p];
                        }).sort()
                    });
                }
            }
        });
    f.exports = k;
}, null);
__d('MercuryMessageList', ['immutable', 'LogHistory', 'Map', 'setTimeoutAcrossTransitions'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('LogHistory').getInstance('mercury_message_list');

    function i(k) {
        this.$MercuryMessageList1 = c('immutable').List(k || []);
        this.$MercuryMessageList2();
    }
    i.prototype.append = function(k) {
        var l;
        this.$MercuryMessageList1 = (l = this.$MercuryMessageList1).push.apply(l, k);
        this.$MercuryMessageList2();
        j('append', k);
    };
    i.prototype.prepend = function(k) {
        var l;
        this.$MercuryMessageList1 = (l = this.$MercuryMessageList1).unshift.apply(l, k);
        this.$MercuryMessageList2();
        j('prepend', k);
    };
    i.prototype.update = function(k) {
        var l = k.filter(function(m) {
            return this.contains(m);
        }.bind(this));
        if (l.length === 0) return;
        this.$MercuryMessageList1 = this.$MercuryMessageList1.withMutations(function(m) {
            l.forEach(function(n) {
                var o = this.$MercuryMessageList3.get(n.message_id);
                if (o !== undefined) m.set(o, n);
            }.bind(this));
        }.bind(this));
        j('update', l);
    };
    i.prototype.reorder = function(k) {
        this.$MercuryMessageList1 = c('immutable').List(k);
        this.$MercuryMessageList2();
        j('reorder', k);
    };
    i.prototype.at = function(k) {
        return this.$MercuryMessageList1.get(k);
    };
    i.prototype.contains = function(k) {
        return this.$MercuryMessageList3.has(k.message_id);
    };
    i.prototype.toArray = function() {
        return this.$MercuryMessageList1.toArray();
    };
    i.prototype.toMap = function() {
        return new(c('Map'))(c('immutable').Seq(this.$MercuryMessageList1).map(function(k) {
            return [k.message_id, k];
        }));
    };
    i.prototype.$MercuryMessageList2 = function() {
        this.$MercuryMessageList3 = new(c('Map'))(c('immutable').Seq(this.$MercuryMessageList1).map(function(k, l) {
            return [k.message_id, l];
        }));
    };

    function j(event, k) {
        c('setTimeoutAcrossTransitions')(function() {
            h.debug(event, JSON.stringify({
                messageIDs: k.map(function(l) {
                    return l.message_id;
                })
            }));
        }, 0);
    }
    f.exports = i;
}, null);
__d('MercuryMessageStore', ['MercuryAPIArgsSource', 'LogHistory', 'MercuryMessages', 'MercuryViewer', 'MercuryMessageList', 'SubscriptionsHandler', 'MercuryThreadInformer', 'MercuryThreadlistConstants', 'MercuryThreads', 'mixInEventEmitter', 'setImmediate', 'setTimeoutAcrossTransitions'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('MercuryThreads').get(),
        i = c('LogHistory').getInstance('mercury_message_store');

    function j(l, m, n) {
        this.$MercuryMessageStore1 = l;
        this.$MercuryMessageStore2 = new(c('MercuryMessageList'))();
        this.$MercuryMessageStore3 = n ? c('MercuryMessages').getForFBID(n) : c('MercuryMessages').get();
        this.$MercuryMessageStore4 = 1;
        this.$MercuryMessageStore5 = null;
        this.$MercuryMessageStore6 = 0;
        this.$MercuryMessageStore7 = m || c('MercuryThreadlistConstants').RECENT_MESSAGES_LIMIT;
        this.$MercuryMessageStore8 = n ? c('MercuryThreadInformer').getForFBID(n) : c('MercuryThreadInformer').get();
        this.$MercuryMessageStore9 = new(c('SubscriptionsHandler'))();
        this.$MercuryMessageStore9.addSubscriptions(this.$MercuryMessageStore8.subscribe('messages-received', function(o, p) {
            return this.$MercuryMessageStore10(p);
        }.bind(this)), this.$MercuryMessageStore8.subscribe('messages-updated', function(o, p) {
            return p[this.$MercuryMessageStore1] && this.$MercuryMessageStore11(p[this.$MercuryMessageStore1]);
        }.bind(this)), this.$MercuryMessageStore8.subscribe('messages-reordered', function(o, p) {
            return p[this.$MercuryMessageStore1] && this.$MercuryMessageStore12();
        }.bind(this)), this.$MercuryMessageStore8.subscribe('thread-invalidated', function(o, p) {
            return p[this.$MercuryMessageStore1] && this.$MercuryMessageStore13();
        }.bind(this)));
        i.debug('constructed', JSON.stringify({
            threadID: this.$MercuryMessageStore1
        }));
        this.$MercuryMessageStore14();
    }
    j.prototype.setNewThreadID = function(l) {
        this.$MercuryMessageStore15 = l;
    };
    j.prototype.destroy = function() {
        this.$MercuryMessageStore9 && this.$MercuryMessageStore9.release();
        i.debug('destroyed', JSON.stringify({
            threadID: this.$MercuryMessageStore1
        }));
    };
    j.prototype.subscribe = function(l) {
        return this.addRetroactiveListener('updated', l);
    };
    j.prototype.fetchMoreMessages = function() {
        if (this.hasFetchedAll()) return false;
        this.$MercuryMessageStore14();
        return true;
    };
    j.prototype.hasFetchedAll = function() {
        if (this.$MercuryMessageStore3.hasLoadedExactlyNMessages(this.$MercuryMessageStore1, this.$MercuryMessageStore6) && this.$MercuryMessageStore3.hasLoadedAllMessages(this.$MercuryMessageStore1)) return true;
        return h.isNewEmptyLocalThread(this.$MercuryMessageStore1);
    };
    j.prototype.$MercuryMessageStore14 = function() {
        var l = this.$MercuryMessageStore6 + this.$MercuryMessageStore7 * this.$MercuryMessageStore4;
        i.debug('fetching', JSON.stringify({
            threadID: this.$MercuryMessageStore1,
            limit: l
        }));
        this.$MercuryMessageStore3.getThreadMessagesRange(this.$MercuryMessageStore1, 0, l, this.$MercuryMessageStore16.bind(this), null, c('MercuryAPIArgsSource').MERCURY);
        if (this.$MercuryMessageStore4 < 10) this.$MercuryMessageStore4 += 1;
        if (this.$MercuryMessageStore3.hasLoadedNMessages(this.$MercuryMessageStore1, l)) c('setImmediate')(function() {
            this.$MercuryMessageStore12();
        }.bind(this));
    };
    j.prototype.$MercuryMessageStore16 = function(l) {
        if (l && l.length) {
            this.$MercuryMessageStore5 = l[0].timestamp;
            this.$MercuryMessageStore6 = l.length;
            i.debug('fetched', JSON.stringify({
                threadID: this.$MercuryMessageStore1,
                earliestMessageTimestamp: this.$MercuryMessageStore5,
                count: this.$MercuryMessageStore6
            }));
        } else if (l && !l.length && !this.$MercuryMessageStore6) this.$MercuryMessageStore17(j.THREAD_IS_EMPTY);
    };
    j.prototype.$MercuryMessageStore10 = function(l) {
        var m = [],
            n = l[this.$MercuryMessageStore1];
        if (n && n.length) m = m.concat(n);
        if (this.$MercuryMessageStore15) {
            var o = l[this.$MercuryMessageStore15];
            if (o && o.length) {
                m = m.concat(o);
                this.$MercuryMessageStore15 = null;
            }
        }
        if (m.length) {
            this.$MercuryMessageStore2.append(m);
            this.$MercuryMessageStore6 += m.length;
            var p = m.every(function(q) {
                return q.author != c('MercuryViewer').getID();
            });
            this.$MercuryMessageStore17(j.MESSAGES_RECEIVED, {
                allFromOthers: p
            });
        }
    };
    j.prototype.$MercuryMessageStore11 = function(l) {
        this.$MercuryMessageStore2.update(this.$MercuryMessageStore3.getMessagesFromIDs(Object.keys(l)));
        this.$MercuryMessageStore18();
        this.$MercuryMessageStore17(j.MESSAGES_CHANGED);
    };
    j.prototype.$MercuryMessageStore12 = function() {
        if (!this.$MercuryMessageStore5) return;
        this.$MercuryMessageStore2.reorder(this.$MercuryMessageStore3.getThreadMessagesSinceTimestamp(this.$MercuryMessageStore1, this.$MercuryMessageStore5));
        this.$MercuryMessageStore18();
        this.$MercuryMessageStore17(j.MESSAGES_REORDERED);
    };
    j.prototype.$MercuryMessageStore13 = function() {
        this.$MercuryMessageStore2 = new(c('MercuryMessageList'))();
        this.$MercuryMessageStore4 = 1;
        this.$MercuryMessageStore5 = null;
        this.$MercuryMessageStore6 = 0;
        this.$MercuryMessageStore14();
    };
    j.prototype.$MercuryMessageStore17 = function(l, m) {
        var n = this.$MercuryMessageStore2.toArray();
        this.releaseHeldEventType('updated');
        this.emitAndHold('updated', babelHelpers['extends']({
            messages: n,
            eventType: l
        }, m));
        k(this.$MercuryMessageStore1, l, n);
    };
    j.prototype.$MercuryMessageStore18 = function() {
        var l = this.$MercuryMessageStore2.at(0);
        if (l) this.$MercuryMessageStore5 = l.timestamp;
    };

    function k(l, m, n) {
        c('setTimeoutAcrossTransitions')(function() {
            i.debug('update:' + m, JSON.stringify({
                threadID: l,
                messageIDs: n.map(function(o) {
                    return o.message_id;
                })
            }));
        }, 0);
    }
    Object.assign(j, {
        MESSAGES_FETCHED: 'fetched',
        MESSAGES_CHANGED: 'changed',
        MESSAGES_RECEIVED: 'received',
        MESSAGES_REORDERED: 'reordered',
        THREAD_IS_EMPTY: 'thread-is-empty'
    });
    c('mixInEventEmitter')(j, {
        updated: true
    });
    f.exports = j;
}, null);
__d('MercuryQuickReply.react', ['cx', 'BootloadedComponent.react', 'JSResource', 'MercuryIDs', 'React', 'ReactComponentWithPureRenderMixin', 'XUISpinner.react'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'MercuryQuickReply',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                quickReplyWillShow: i.func,
                quickReplyDidShow: i.func,
                lastMessage: i.object,
                threadID: i.string.isRequired
            },
            componentWillUpdate: function(k, l) {
                if (k && this.props.lastMessage !== k.lastMessage && this.props.quickReplyWillShow) this.props.quickReplyWillShow();
            },
            componentDidUpdate: function(k, l) {
                if (k && this.props.lastMessage !== k.lastMessage && this.props.quickReplyDidShow) this.props.quickReplyDidShow();
            },
            render: function() {
                var k = this.props.lastMessage;
                if (!k) return null;
                var l = null,
                    m = c('MercuryIDs').getParticipantIDFromUserID(this.props.viewer);
                if (k && k.platform_xmd && k.author !== m) {
                    var n = JSON.parse(k.platform_xmd);
                    l = n && n.quick_replies;
                }
                if (!l) return null;
                return (c('React').createElement('div', {
                    className: "_419m",
                    ref: 'quickReply'
                }, c('React').createElement(c('BootloadedComponent.react'), {
                    bootloadLoader: c('JSResource')('MessengerBotsQuickReplyButtonList.react').__setRef('MercuryQuickReply.react'),
                    bootloadPlaceholder: c('React').createElement(c('XUISpinner.react'), {
                        className: "_5h-9"
                    }),
                    options: l,
                    threadID: k.thread_id
                })));
            }
        });
    f.exports = j;
}, null);
__d('ChatTabMessagesView', ['Animation', 'Arbiter', 'BanzaiLogger', 'Bootloader', 'CSS', 'ChatConversation.react', 'ChatPerfInstrumentation', 'ChatTabViewEvents', 'ChatTypingIndicators.react', 'ChatWelcomeMessage', 'CurrentUser', 'DOM', 'Event', 'immutable', 'MercuryLastMessageIndicator.react', 'LiveTimer', 'MercuryConfig', 'MercuryIDs', 'MercuryQuickReply.react', 'MercuryThreads', 'MercuryMessageStore', 'MessengerContextBannerBootloader', 'MessengerHotLikePreviewEvents', 'React', 'ReactDOM', 'ReactComponentRenderer', 'MercuryShareAttachmentRenderLocations', 'Scroll', 'ServerTime', 'StickerInterfaces', 'Style', 'SubscriptionsHandler', 'UserAgent_DEPRECATED', 'arrayContains', 'getElementPosition', 'throttle', 'isEventSupported'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('MercuryThreads').get(),
        i = 64,
        j = null,
        k = 20;

    function l(n) {
        if (j === null) {
            var o = n.childNodes[0];
            c('Style').set(n, 'overflow', 'scroll');
            j = o.clientWidth - i;
            c('Style').set(n, 'overflow', '');
        }
        return j;
    }

    function m(n, o, p, q, r, s, t, u, v, w) {
        var x, y = this;
        this.loadingIcon = r;
        this.threadID = n;
        this.sheetController = o;
        this.scrollContainer = p;
        this.conversationElem = q;
        this.contextBannerEligible = v;
        this.contextBannerElem = null;
        this.tabView = u;
        c('LiveTimer').restart(c('ServerTime').get() / 1000);
        this._loadingMoreMessages = false;
        this._initialLoadFinished = false;
        if (this.threadID && !h.isEmptyLocalThread(this.threadID)) c('CSS').show(this.loadingIcon);

        function z() {
            c('ChatTabViewEvents').inform('interaction-with-tab', n);
        }
        this._subscriptions = new(c('SubscriptionsHandler'))();
        this._subscriptions.addSubscriptions(c('Arbiter').subscribe('overflow-applied-to-body', this.scrollToBottom.bind(this)), c('Event').listen(this.scrollContainer, 'mousedown', z));
        this._initOverflowObserver();
        var aa = c('isEventSupported')('wheel') ? 'wheel' : c('isEventSupported')('mousewheel') ? 'mousewheel' : 'DOMMouseScroll';
        this._subscriptions.addSubscriptions(c('Event').listen(this.scrollContainer, aa, z));
        this._subscriptions.addSubscriptions(c('Event').listen(this.scrollContainer, 'scroll', c('throttle')(this.scrolling, 50, this)));
        var ba = void 0;
        c('ReactDOM').render(c('React').createElement(c('ChatTypingIndicators.react'), {
            threadID: this.threadID,
            indicatorsWillShow: function() {
                return (ba = this.isScrolledToBottom());
            }.bind(this),
            indicatorsDidShow: function() {
                return (ba && this.scrollToBottom(true));
            }.bind(this),
            viewer: c('CurrentUser').getID()
        }), t);
        var ca = void 0;
        this.lastMessageIndicatorNode = s;
        this.lastMessageIndicator = new(c('ReactComponentRenderer'))(c('MercuryLastMessageIndicator.react'), this.lastMessageIndicatorNode);
        this.lastMessageIndicator.setProps({
            threadID: this.threadID,
            hideTyping: true,
            indicatorWillShow: function() {
                return ca = this.isScrolledToBottom();
            }.bind(this),
            indicatorDidShow: function() {
                return ca && this.scrollToBottom(true);
            }.bind(this)
        });
        if (c('MercuryConfig').EnableQuickReply)(function() {
            var da = void 0;
            y.quickReplyNode = w;
            y.quickReply = new(c('ReactComponentRenderer'))(c('MercuryQuickReply.react'), y.quickReplyNode);
            y.quickReply.setProps({
                threadID: y.threadID,
                quickReplyWillShow: function() {
                    return da = this.isScrolledToBottom();
                }.bind(y),
                quickReplyDidShow: function() {
                    return da && this.scrollToBottom(true);
                }.bind(y),
                viewer: c('CurrentUser').getID()
            });
        })();
        this.initializeConversation();
    }
    Object.assign(m.prototype, {
        initializeConversation: function() {
            this._store = new(c('MercuryMessageStore'))(this.threadID);
            this._conversation = new(c('ReactComponentRenderer'))(c('ChatConversation.react'), this.conversationElem);
            this._conversation.setProps({
                isCanonical: c('MercuryIDs').isCanonical(this.threadID),
                loadMoreMessages: this._loadMoreMessages.bind(this),
                maxBubbleWidth: l(this.scrollContainer),
                messages: c('immutable').List(),
                onAttachmentLoad: function(n) {
                    var o = this.scrollContainer,
                        p = c('Scroll').getTop(o) + o.clientHeight;
                    if (p + n >= o.scrollHeight - k || this._shouldScrollToBottom) {
                        this._shouldScrollToBottom = true;
                        this.scrollToBottom();
                    }
                }.bind(this),
                onMount: this.scrollToBottom.bind(this),
                onStickerClick: this._onStickerClick.bind(this),
                viewer: c('CurrentUser').getID(),
                threadID: this.threadID
            });
            h.getThreadMeta(this.threadID, function(n) {
                this._conversation.setProps({
                    thread: n
                });
                if (!n || n.message_count === 0) {
                    c('CSS').hide(this.loadingIcon);
                } else this.renderContextBanner(this.threadID);
            }.bind(this));
            this._subscriptions.addSubscriptions(this._store.subscribe(this._updateMessageFromStore.bind(this)), c('MessengerHotLikePreviewEvents').addListener(c('MessengerHotLikePreviewEvents').START, function(n, o) {
                if (this.threadID !== o) return;
                this._likePreview = n;
                this._conversation.setProps({
                    messages: this._getNormalizedMessages()
                }, this.scrollToBottom.bind(this));
                this.scrollToBottom();
                clearInterval(this._scrollToBottomInterval);
                this._scrollToBottomInterval = setInterval(this.scrollToBottom.bind(this), 50);
            }.bind(this)), c('MessengerHotLikePreviewEvents').addListener(c('MessengerHotLikePreviewEvents').STOP, function(n) {
                if (this.threadID !== n) return;
                this._likePreview = null;
            }.bind(this)), c('MessengerHotLikePreviewEvents').addListener(c('MessengerHotLikePreviewEvents').FINISH_ANIMATION, function(n) {
                clearInterval(this._scrollToBottomInterval);
            }.bind(this)), c('MessengerHotLikePreviewEvents').addListener(c('MessengerHotLikePreviewEvents').REMOVE, function(n) {
                if (this.threadID !== n) return;
                clearInterval(this._scrollToBottomInterval);
                this._likePreview = null;
                this._conversation.setProps({
                    messages: this._getNormalizedMessages()
                });
            }.bind(this)));
        },
        _initOverflowObserver: function() {
            if (!c('UserAgent_DEPRECATED').firefox()) return;
            var n = function() {
                    return c('Style').get(document.body, 'overflowX') + ' ' + c('Style').get(document.body, 'overflowY');
                },
                o = n(),
                p = function() {
                    var s = n();
                    if (s !== o) {
                        o = s;
                        c('Arbiter').inform('overflow-applied-to-body');
                    }
                };
            if ('MutationObserver' in window) {
                var q = new MutationObserver(p),
                    r = {
                        attributes: true,
                        attributeFilter: ['class', 'style']
                    };
                q.observe(document.documentElement, r);
            } else document.documentElement.addEventListener('DOMAttrModified', function(event) {
                if (event.getTarget() === document.documentElement && (event.attrName === 'class' || event.attrName === 'style')) p();
            }, false);
        },
        _updateMessageFromStore: function(n) {
            var o = n.eventType == c('MercuryMessageStore').MESSAGES_REORDERED,
                p = n.eventType == c('MercuryMessageStore').MESSAGES_RECEIVED;
            if (p && n.allFromOthers && !this.isScrolledToBottom()) {
                this.sheetController.openNewMessagesSheet();
                this._newMessagesSheetOpened = true;
                this._shouldScrollToBottom = false;
            }
            if (o) this._loadingMoreMessages = false;
            if (o || p) c('CSS').hide(this.loadingIcon);
            var q = this.isScrolledToBottom(),
                r = this._getLoadingHeight(),
                s = this.scrollContainer.scrollHeight,
                t = c('Scroll').getTop(this.scrollContainer);
            this._messages = n.messages;
            var u = c('ChatWelcomeMessage').getWelcomeMessage(this.threadID);
            if (u) this._messages.push(u);
            this._conversation.setProps({
                messages: this._getNormalizedMessages()
            }, function() {
                if (q || this._shouldScrollToBottom) {
                    this.scrollToBottom();
                    this.setShouldScrollToBottom(false);
                } else if (o) this.scrollToPosition(this.scrollContainer.scrollHeight - s - r + t);
                if (!this._initialLoadFinished) {
                    this._initialLoadFinished = true;
                    c('ChatPerfInstrumentation').logCHAT_CONVERSATION_TTI();
                }
                if (this._store.hasFetchedAll() && this.contextBannerEligible) this.renderContextBanner(this.threadID);
            }.bind(this));
            h.getThreadMeta(this.threadID, function(v) {
                return this._conversation.setProps({
                    thread: v
                });
            }.bind(this));
            this.lastMessageIndicator.setProps({
                lastMessage: this._messages.length > 0 ? this._messages[this._messages.length - 1] : null
            });
            if (this.quickReply) this.quickReply.setProps({
                lastMessage: this._messages.length > 0 ? this._messages[this._messages.length - 1] : null
            });
            if (n.eventType == c('MercuryMessageStore').MESSAGES_CHANGED) this._checkToAnimateSticker();
        },
        setShouldScrollToBottom: function(n) {
            this._shouldScrollToBottom = n;
        },
        scrolling: function() {
            this._checkToAnimateSticker();
            if (this.isScrolledNearTop() && !this._loadingMoreMessages && !this.isScrolledToBottom() && !this.tabView._isDragDropActive)
                if (this._store.fetchMoreMessages()) {
                    c('CSS').show(this.loadingIcon);
                    this._loadingMoreMessages = true;
                }
            if (!this._newMessagesSheetOpened) return;
            if (this.isScrolledToBottom()) {
                this.sheetController.closeNewMessagesSheet();
                this._newMessagesSheetOpened = false;
            }
        },
        getScrollTop: function() {
            return this.scrollContainer && c('Scroll').getTop(this.scrollContainer);
        },
        getThreadID: function() {
            return this.threadID;
        },
        destroy: function() {
            c('DOM').scry(this.conversationElem, '.stickerContainer').forEach(function(n) {
                return c('ReactDOM').unmountComponentAtNode(n);
            });
            this.unmountContextBanner();
            c('ReactDOM').unmountComponentAtNode(this.conversationElem);
            this._subscriptions && this._subscriptions.release();
            c('ReactDOM').unmountComponentAtNode(this.lastMessageIndicatorNode);
            delete this.lastMessageIndicator;
            if (this.quickReplyNode) {
                c('ReactDOM').unmountComponentAtNode(this.quickReplyNode);
                delete this.quickReply;
            }
            this._store && this._store.destroy();
            this.destroyed = true;
        },
        _getLoadingHeight: function() {
            return this.loadingHeight || this.loadingIcon.clientHeight;
        },
        isScrolledToBottom: function(n) {
            var o = this.scrollContainer;
            n = n || k;
            return c('Scroll').getTop(o) + o.clientHeight >= o.scrollHeight - n;
        },
        isScrolledNearTop: function() {
            return c('Scroll').getTop(this.scrollContainer) < this.scrollContainer.clientHeight;
        },
        scrollToBottom: function(n) {
            this.scrollToPosition(this.scrollContainer.scrollHeight, n);
        },
        scrollToPosition: function(n, o) {
            this._scrollTopAnimation && this._scrollTopAnimation.stop();
            if (o === true) {
                this._scrollTopAnimation = new(c('Animation'))(this.scrollContainer).to('scrollTop', n).ease(c('Animation').ease.end).duration(400).go();
            } else c('Scroll').setTop(this.scrollContainer, n);
        },
        _loadMoreMessages: function() {
            return this._store.fetchMoreMessages();
        },
        _onStickerClick: function(n, o) {
            if (!n || !this.threadID) return;
            c('BanzaiLogger').log('StickersLoggerConfig', {
                event: 'click_sticker',
                packid: n,
                stickerid: o
            });
            c('Bootloader').loadModules(["Stickers2Utils", "Stickers2Actions", "Stickers2StoreController"], function(p, q, r) {
                p.onIsPackInTray(n, c('StickerInterfaces').MESSAGES, function(s) {
                    if (s.in_sticker_tray) {
                        q.selectTrayPack(n);
                        q.showStickerFlyout(this.threadID);
                    } else r.showStore(n);
                }.bind(this));
            }.bind(this), 'ChatTabMessagesView');
        },
        _checkToAnimateSticker: function() {
            var n = c('getElementPosition')(this.scrollContainer);
            c('Arbiter').inform('chatScrolled/' + this.threadID, {
                scrollTop: c('Scroll').getTop(this.scrollContainer),
                top: n.y,
                viewHeight: n.height
            });
        },
        setNewThreadID: function(n) {
            this._store.setNewThreadID(n);
        },
        _getNormalizedMessages: function() {
            if (this._likePreview) {
                this._messages.push(this._likePreview);
            } else this._messages = this._messages.filter(function(n) {
                return !n.is_like_preview;
            });
            return c('immutable').List(this._messages);
        },
        renderContextBanner: function(n, o) {
            c('MessengerContextBannerBootloader').getBootloadedComponent(n, c('MercuryShareAttachmentRenderLocations').CHAT, function(p) {
                c('Style').set(this.conversationElem, 'padding-top', '80px');
                this._conversation.setProps({
                    contextBanner: p
                });
            }.bind(this), o, function(p) {
                c('Style').set(this.conversationElem, 'padding-top', p + 'px');
            }.bind(this));
        },
        unmountContextBanner: function() {
            if (this._conversation) this._conversation.setProps({
                contextBanner: null
            });
        }
    });
    f.exports = m;
}, null);
__d('ChatNubLogger', ['BanzaiLogger', 'ScriptPath', 'pageID'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = 'TimeSpentChatNubLoggerConfig',
        i = {
            INPUT_ACTIVE: 'active',
            INPUT_INACTIVE: 'inactive'
        },
        j = {
            ENTER: 'enter',
            LEAVE: 'leave'
        },
        k = i.INPUT_INACTIVE,
        l = 0,
        m = false;

    function n() {
        if (k == i.INPUT_ACTIVE && !m) {
            k = i.INPUT_INACTIVE;
            o(j.LEAVE);
            l = 0;
        } else if (k == i.INPUT_INACTIVE && m) {
            k = i.INPUT_ACTIVE;
            l = Date.now();
            o(j.ENTER);
        }
    }

    function o(event) {
        var q = c('BanzaiLogger').create({
                retry: true
            }),
            r = Date.now();
        q.log(h, {
            event: event,
            client_event_time_ms: r,
            active_time_ms: event == j.LEAVE ? r - l : 0,
            page_id: c('pageID'),
            script_path: c('ScriptPath').getScriptPath(),
            page_data: c('ScriptPath').getPageInfo() ? c('ScriptPath').getPageInfo().extraData : {}
        });
    }
    var p = {
        processEvent: function(q) {
            switch (q) {
                case 'focus':
                    m = true;
                    break;
                case 'blur':
                    m = false;
                    break;
                default:
                    break;
            }
            n();
        }
    };
    f.exports = p;
}, null);
__d('ContextualLayerAutoFlipHorizontal', ['ContextualLayerAutoFlip'], function a(b, c, d, e, f, g) {
    var h, i;
    if (c.__markCompiled) c.__markCompiled();
    h = babelHelpers.inherits(j, c('ContextualLayerAutoFlip'));
    i = h && h.prototype;
    j.prototype.getValidPositions = function(k) {
        'use strict';
        return [k.getPosition()];
    };

    function j() {
        'use strict';
        h.apply(this, arguments);
    }
    f.exports = j;
}, null);
__d('ChatContentSearchContextualDialog.react', ['cx', 'ContextualLayerAutoFlipHorizontal', 'LayerHideOnEscape', 'ReactAbstractContextualDialog', 'ReactLayer'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('ReactLayer').createClass(c('ReactAbstractContextualDialog').createSpec({
        addedBehaviors: [c('ContextualLayerAutoFlipHorizontal'), c('LayerHideOnEscape')],
        displayName: 'StickerXUIContextualDialog',
        theme: {
            wrapperClassName: "_53ii",
            arrowDimensions: {
                offset: 47,
                length: 16
            }
        }
    }));
    f.exports = i;
}, null);
__d('ChatFlyoutPlaceholder.react', ['React', 'XUISpinner.react'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
            padding: '30px',
            textAlign: 'center'
        },
        i = function() {
            return (c('React').createElement('div', {
                style: h
            }, c('React').createElement(c('XUISpinner.react'), {
                size: 'large'
            })));
        };
    f.exports = i;
}, null);
__d('ChatContentSearchButton.react', ['cx', 'fbt', 'BootloadOnRender.react', 'ChatFlyoutPlaceholder.react', 'ChatContentSearchContextualDialog.react', 'JSResource', 'LazyComponent.react', 'Link.react', 'ReactComponentWithPureRenderMixin', 'React', 'MercuryShareAttachmentRenderLocations', 'joinClasses'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = 278,
        l = c('React').createClass({
            displayName: 'ChatContentSearchButton',
            _clickGuard: false,
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                ContextualDialogClass: j.func,
                flyoutAlignment: j.oneOf(['left', 'right']),
                getQuery: j.func.isRequired,
                location: j.oneOf(c('MercuryShareAttachmentRenderLocations').getValues()),
                onLoad: j.func,
                onSelect: j.func.isRequired
            },
            getDefaultProps: function() {
                return {
                    flyoutAlignment: 'left',
                    location: c('MercuryShareAttachmentRenderLocations').CHAT
                };
            },
            getInitialState: function() {
                return {
                    query: '',
                    shown: false
                };
            },
            componentDidMount: function() {
                this.props.onLoad && this.props.onLoad(this);
            },
            updateQuery: function() {
                this.setState({
                    query: this.props.getQuery()
                });
            },
            hideFlyout: function() {
                this.setState(this.getInitialState());
            },
            render: function() {
                return (c('React').createElement('span', null, c('React').createElement(c('Link.react'), {
                    className: c('joinClasses')(this.props.className, this.state.shown ? "open" : ''),
                    href: '#',
                    onMouseDown: this._handleMouseDown,
                    onClick: this._handleClick,
                    role: 'button',
                    title: i._("Choose a gif or sticker"),
                    ref: 'link'
                }), this.renderLayers()));
            },
            renderLayers: function() {
                if (!this.state.shown) return null;
                var m = this.props.ContextualDialogClass || c('ChatContentSearchContextualDialog.react');
                return (c('React').createElement(m, {
                    alignment: this.props.flyoutAlignment,
                    contextRef: function() {
                        return this.refs.link;
                    }.bind(this),
                    onBlur: this.hideFlyout,
                    onToggle: this._handleContextualDialogToggle,
                    shown: this.state.shown,
                    width: k,
                    key: 'contextualDialog'
                }, c('React').createElement(c('BootloadOnRender.react'), {
                    component: c('React').createElement(c('LazyComponent.react'), {
                        location: this.props.location,
                        onEscKeyDown: this.hideFlyout,
                        onSelect: this._handleSelect,
                        query: this.state.query
                    }),
                    loader: c('JSResource')('ChatContentSearchFlyout.react').__setRef('ChatContentSearchButton.react'),
                    placeholder: c('React').createElement(c('ChatFlyoutPlaceholder.react'), null)
                })));
            },
            _handleMouseDown: function(m) {
                this._clickGuard = this.state.shown;
            },
            _handleClick: function(m) {
                m.stopPropagation();
                if (this.state.shown || this._clickGuard) return;
                this.setState({
                    query: this.props.getQuery(),
                    shown: !this.state.shown
                });
            },
            _handleSelect: function(m, n) {
                this.props.onSelect(m, n);
                this.hideFlyout();
            },
            _handleContextualDialogToggle: function(m) {
                this.setState({
                    shown: m
                });
            }
        });
    f.exports = l;
}, null);
__d('ChatEmojiButton.react', ['cx', 'fbt', 'Bootloader', 'BootloadOnRender.react', 'ChatFlyoutPlaceholder.react', 'JSResource', 'LazyComponent.react', 'Link.react', 'ReactComponentWithPureRenderMixin', 'React', 'XUIContextualDialog.react', 'joinClasses'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = 278,
        l = c('React').createClass({
            displayName: 'ChatEmojiButton',
            _clickGuard: false,
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                ContextualDialogClass: j.func.isRequired,
                flyoutAlignment: j.oneOf(['left', 'right']),
                onSelect: j.func
            },
            getDefaultProps: function() {
                return {
                    ContextualDialogClass: c('XUIContextualDialog.react'),
                    flyoutAlignment: 'left'
                };
            },
            getInitialState: function() {
                return {
                    shown: false
                };
            },
            hideFlyout: function() {
                this.setState(this.getInitialState());
                this.props.getInput && this.props.getInput().focus();
            },
            render: function() {
                return (c('React').createElement('span', null, c('React').createElement(c('Link.react'), {
                    className: c('joinClasses')(this.props.className, this.state.shown ? "open" : ''),
                    href: '#',
                    onMouseDown: this._handleMouseDown,
                    onClick: this._handleClick,
                    role: 'button',
                    title: i._("Choose an emoji"),
                    ref: 'link'
                }), this.renderLayers()));
            },
            renderLayers: function() {
                if (!this.state.shown) return null;
                var m = this.props.ContextualDialogClass;
                return (c('React').createElement(m, {
                    alignment: this.props.flyoutAlignment,
                    contextRef: function() {
                        return this.refs.link;
                    }.bind(this),
                    onBlur: this.hideFlyout,
                    onToggle: this._handleContextualDialogToggle,
                    shown: this.state.shown,
                    width: k,
                    key: 'contextualDialog'
                }, c('React').createElement(c('BootloadOnRender.react'), {
                    component: c('React').createElement(c('LazyComponent.react'), {
                        onCategorySelect: this._focusInput,
                        onEscKeyDown: this.hideFlyout,
                        onSelect: this._handleSelect,
                        width: k
                    }),
                    loader: c('JSResource')('ChatEmojiFlyout.react').__setRef('ChatEmojiButton.react'),
                    placeholder: c('React').createElement(c('ChatFlyoutPlaceholder.react'), null)
                })));
            },
            _focusInput: function() {
                this.props.getInput && this.props.getInput().focus();
            },
            _handleMouseDown: function() {
                this._clickGuard = this.state.shown;
            },
            _handleClick: function(m) {
                m.stopPropagation();
                if (this._clickGuard) {
                    this._clickGuard = false;
                    return;
                }
                this.setState({
                    shown: !this.state.shown
                });
                this._focusInput();
            },
            _handleSelect: function(m) {
                this.props.onSelect && this.props.onSelect(m);
            },
            _handleContextualDialogToggle: function(m) {
                this.setState({
                    shown: m
                });
            }
        });
    f.exports = l;
}, null);
__d('MessengerEmojiSpan.react', ['cx', 'DraftEntity', 'EmojiLikeConstants', 'EmojiLikeCxData', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'MessengerEmojiSpan',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                children: i.arrayOf(i.object),
                entityKey: i.string.isRequired,
                offsetKey: i.string
            },
            render: function() {
                var k = c('DraftEntity').get(this.props.entityKey),
                    l = k.getData(),
                    m = l.type,
                    n = c('EmojiLikeCxData').getUrl(m, c('EmojiLikeConstants').size.SMALL);
                n = n ? n : '';
                return (c('React').createElement('span', {
                    className: "_21wj",
                    style: {
                        backgroundImage: 'url(' + n + ')'
                    },
                    'data-offset-key': this.props.offsetKey
                }, c('React').createElement('span', {
                    className: "_21wk"
                }, this.props.children)));
            }
        });
    f.exports = j;
}, null);
__d('MessengerEmoticonSpan.react', ['cx', 'DraftEntity', 'EmojiLikeConstants', 'EmojiLikeCxData', 'EmoticonEmojiList', 'ReactComponentWithPureRenderMixin', 'React'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'MessengerEmoticonSpan',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                children: i.arrayOf(i.object),
                entityKey: i.string.isRequired,
                offsetKey: i.string
            },
            render: function() {
                var k = c('DraftEntity').get(this.props.entityKey),
                    l = k.getData(),
                    m = l.type,
                    n = c('EmoticonEmojiList').emote2emojis[m],
                    o = c('EmojiLikeCxData').getUrl(n, c('EmojiLikeConstants').size.XSMALL);
                o = o ? o : '';
                return (c('React').createElement('span', {
                    className: "_21wj",
                    style: {
                        backgroundImage: 'url(' + o + ')'
                    },
                    'data-offset-key': this.props.offsetKey
                }, c('React').createElement('span', {
                    className: "_21wk"
                }, this.props.children)));
            }
        });
    f.exports = j;
}, null);
__d('getVisibleValueForContentStateWithMessengerEmoji', ['ContentState', 'DraftEntity', 'EmojiFormat', 'emptyFunction'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        var j = i.getBlockMap().map(function(k) {
            var l = k.getText(),
                m = '';
            k.findEntityRanges(c('emptyFunction').thatReturnsTrue, function(n, o) {
                var p = k.getEntityAt(n);
                if (!p) {
                    m += l.slice(n, o);
                } else {
                    var q = c('DraftEntity').get(p);
                    if (q.getType() === 'EMOTICON') {
                        m += q.getData().originalEmoticon;
                    } else if (q.getType() === 'EMOJI') {
                        var r = q.getData().type,
                            s = c('EmojiFormat').codeStringToCodeArray(r);
                        m += String.fromCodePoint.apply(String, s);
                    } else m += l.slice(n, o);
                }
            });
            return m;
        });
        return j.join('\n');
    }
    f.exports = h;
}, null);
__d('insertMessengerEmojiIntoContentState', ['ContentState', 'DraftEntity', 'DraftModifier', 'SelectionState'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = '\u3000';

    function i(j, k, l, m) {
        var n = c('DraftEntity').create('EMOJI', 'IMMUTABLE', {
            type: j
        });
        return c('DraftModifier').insertText(k, l, h, m, n);
    }
    f.exports = i;
}, null);
__d('handleBeforeInputForMessengerEmoji', ['EditorState', 'MessengerSupportedEmoji', 'insertMessengerEmojiIntoContentState'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(i, j) {
        var k = i.getSelection();
        if (!k.isCollapsed() || !j) return i;
        var l = c('MessengerSupportedEmoji').findEmoji(j);
        if (!l) return i;
        var m = c('insertMessengerEmojiIntoContentState')(l.emoji, i.getCurrentContent(), k, i.getCurrentInlineStyle());
        return c('EditorState').push(i, m, 'insert-characters');
    }
    f.exports = h;
}, null);
__d('applyMessengerEmoticonToContentBlock', ['CharacterMetadata', 'DraftEntity', 'EmoticonEmojiList', 'immutable'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('immutable').List,
        i = '\u3000';

    function j(k, l, m) {
        if (!c('EmoticonEmojiList').names[l]) return k;
        var n = c('DraftEntity').create('EMOTICON', 'IMMUTABLE', {
                type: c('EmoticonEmojiList').names[l],
                originalEmoticon: l
            }),
            o = k.getText(),
            p = k.getCharacterList(),
            q = l.length,
            r = p.get(m);
        return k.merge({
            text: o.slice(0, m) + i + o.slice(m + q),
            characterList: p.slice(0, m).concat(h.of(c('CharacterMetadata').applyEntity(r, n)), p.slice(m + q))
        });
    }
    f.exports = j;
}, null);
__d('applyMessengerEmoticonToContentState', ['EmoticonEmojiList', 'applyMessengerEmoticonToContentBlock', 'getTextAfterNearestEntity'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(i, j) {
        var k = j.getAnchorKey(),
            l = j.getAnchorOffset(),
            m = i.getBlockForKey(k),
            n = c('getTextAfterNearestEntity')(m, l),
            o = c('EmoticonEmojiList').regexp.exec(n);
        if (!o) return i;
        var p = o[1];
        if (!p && l !== n.length) return i;
        var q = o[2],
            r = l - n.length,
            s = r + o.index + o[1].length,
            t = i.getBlockMap().set(k, c('applyMessengerEmoticonToContentBlock')(m, q, s));
        l -= q.length - 1;
        return i.merge({
            blockMap: t,
            selectionBefore: j,
            selectionAfter: j.merge({
                anchorOffset: l,
                focusOffset: l
            })
        });
    }
    f.exports = h;
}, null);
__d('handleBeforeInputForMessengerEmoticon', ['DraftModifier', 'EditorState', 'applyMessengerEmoticonToContentState'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = new RegExp(/[\s'".,!?]/);

    function i(j, k) {
        var l = j.getSelection();
        if (!l.isCollapsed() || !k || !h.test(k)) return j;
        var m = j.getCurrentContent(),
            n = c('applyMessengerEmoticonToContentState')(m, l);
        if (n === m) return j;
        var o = c('DraftModifier').insertText(n, n.getSelectionAfter(), k);
        return c('EditorState').push(j, o, 'insert-characters');
    }
    f.exports = i;
}, null);
__d('handleSoftNewlineForMessengerEmoticon', ['DraftModifier', 'EditorState', 'applyMessengerEmoticonToContentState'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        var j = i.getCurrentContent(),
            k = i.getSelection(),
            l = c('applyMessengerEmoticonToContentState')(j, k);
        if (l === j) return i;
        var m = c('DraftModifier').splitBlock(l, l.getSelectionAfter());
        return c('EditorState').push(i, m, 'split-block');
    }
    f.exports = h;
}, null);
__d('ChatInput.react', ['ContentState', 'CompositeDraftDecorator', 'DraftEditor.react', 'DraftModifier', 'EditorState', 'EmojiFormat', 'EmoticonSpan.react', 'MercuryConfig', 'MessengerEmojiSpan.react', 'MessengerEmoticonSpan.react', 'React', 'ReactDOM', 'clearImmediate', 'emptyFunction', 'getDefaultKeyBinding', 'getEntityMatcher', 'getVisibleValueForContentState', 'getVisibleValueForContentStateWithMessengerEmoji', 'handleBeforeInputForEmoticon', 'handleBeforeInputForMessengerEmoji', 'handleBeforeInputForMessengerEmoticon', 'handleSoftNewlineForEmoticon', 'handleSoftNewlineForMessengerEmoticon', 'insertEmoticonIntoEditorState', 'insertMessengerEmojiIntoContentState', 'isSoftNewlineEvent', 'setImmediate'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes,
        i = c('emptyFunction').thatReturnsNull,
        j = c('React').createClass({
            displayName: 'ChatInput',
            propTypes: {
                blockStyleFn: h.func,
                initializeThingsWithInputFn: h.func,
                inputKeyDown: h.func,
                keyBindingFn: h.func,
                onBeforeInput: h.func,
                onBlur: h.func,
                onEscape: h.func,
                onFocus: h.func,
                onTab: h.func,
                resizeFn: h.func
            },
            getDefaultProps: function() {
                return {
                    blockStyleFn: i,
                    keyBindingFn: c('getDefaultKeyBinding')
                };
            },
            componentDidMount: function() {
                this._oldHeight = c('ReactDOM').findDOMNode(this).getBoundingClientRect().height;
                this.props.resizeFn(this._oldHeight);
                this.props.initializeThingsWithInputFn(c('ReactDOM').findDOMNode(this.refs.input), this.getValue);
                this.setState({
                    triggeredWord: this.props.triggeredWord
                });
            },
            componentWillUnmount: function() {
                if (this._updateToken) c('clearImmediate')(this._updateToken);
                this._updateToken = null;
            },
            componentWillReceiveProps: function(k) {
                if (this.state.triggeredWord !== k.triggeredWord) this.setState({
                    triggeredWord: k.triggeredWord
                }, this._updateDecorator);
            },
            componentDidUpdate: function() {
                this._updateToken = c('setImmediate')(function() {
                    this._updateToken = null;
                    var k = c('ReactDOM').findDOMNode(this).getBoundingClientRect(),
                        l = k.height;
                    if (this._oldHeight !== l) this.props.resizeFn(l);
                    this._oldHeight = l;
                }.bind(this));
            },
            getInitialState: function() {
                return {
                    editorState: this._createEmptyEditorState()
                };
            },
            _createEmptyEditorState: function() {
                return c('EditorState').createWithContent(c('ContentState').createFromText(''), this._getDecorator());
            },
            resetState: function() {
                if (this.state.typeaheadReporter) {
                    this.state.typeaheadReporter.sessionEnd();
                    this.state.typeaheadReporter.sessionStart();
                }
                this.setState({
                    editorState: c('EditorState').moveFocusToEnd(this._createEmptyEditorState()),
                    triggeredWord: null
                });
            },
            _updateDecorator: function() {
                var k = this._getDecorator();
                c('setImmediate')(function() {
                    var l = c('EditorState').set(this.state.editorState, {
                        decorator: k
                    });
                    this.setState({
                        editorState: l
                    });
                }.bind(this));
            },
            _getDecorator: function() {
                var k = c('MercuryConfig').MessengerNewEmojiGK,
                    l = k ? c('MessengerEmoticonSpan.react') : c('EmoticonSpan.react'),
                    m = [{
                        strategy: c('getEntityMatcher')(function(n) {
                            return n.getType() === 'EMOTICON';
                        }),
                        component: l
                    }];
                if (k) m.push({
                    strategy: c('getEntityMatcher')(function(n) {
                        return n.getType() === 'EMOJI';
                    }),
                    component: c('MessengerEmojiSpan.react')
                });
                return new(c('CompositeDraftDecorator'))(m);
            },
            onChange: function(k) {
                this.setState({
                    editorState: k
                });
            },
            onReturn: function(event) {
                if (c('isSoftNewlineEvent')(event)) {
                    var k = c('MercuryConfig').MessengerNewEmojiGK ? c('handleSoftNewlineForMessengerEmoticon')(this.state.editorState) : c('handleSoftNewlineForEmoticon')(this.state.editorState);
                    if (k === this.state.editorState) return false;
                    this.setState({
                        editorState: k
                    });
                    return true;
                }
                this.props.inputKeyDown(event, this.getValue());
                return true;
            },
            getValueFromEditorState: function(k) {
                var l = k.getCurrentContent();
                return c('MercuryConfig').MessengerNewEmojiGK ? c('getVisibleValueForContentStateWithMessengerEmoji')(l) : c('getVisibleValueForContentState')(l);
            },
            getValue: function() {
                return this.getValueFromEditorState(this.state.editorState);
            },
            focus: function() {
                this.refs.input.focus();
            },
            _handleBeforeInput: function(k) {
                this.props.onBeforeInput && this.props.onBeforeInput();
                var l = this._handleBeforeInputForEmoticon(k),
                    m = this._handleBeforeInputForEmoji(k);
                return l || m;
            },
            _handleBeforeInputForEmoticon: function(k) {
                var l = c('MercuryConfig').MessengerNewEmojiGK ? c('handleBeforeInputForMessengerEmoticon')(this.state.editorState, k) : c('handleBeforeInputForEmoticon')(this.state.editorState, k);
                if (l === this.state.editorState) return false;
                this.setState({
                    editorState: l
                });
                return true;
            },
            _handleBeforeInputForEmoji: function(k) {
                if (!c('MercuryConfig').MessengerNewEmojiGK) return false;
                var l = c('handleBeforeInputForMessengerEmoji')(this.state.editorState, k);
                if (l === this.state.editorState) return false;
                this.setState({
                    editorState: l
                });
                return true;
            },
            _handleFiles: function(k) {
                var l = /^image\//,
                    m = k.filter(function(n) {
                        return l.test(n.type);
                    });
                if (m.length) {
                    this.props.uploadPhotoFn(m[0]);
                    return true;
                }
                return false;
            },
            _handlePastedFiles: function(k) {
                return this._handleFiles(k);
            },
            _handleDroppedFiles: function(k, l) {
                return this._handleFiles(l);
            },
            insertEmoticon: function(k) {
                var l = c('insertEmoticonIntoEditorState')(k, this.state.editorState);
                if (l !== this.state.editorState) this.setState({
                    editorState: l
                });
            },
            insertEmoji: function(k) {
                var l = this.state.editorState,
                    m = c('insertMessengerEmojiIntoContentState')(c('EmojiFormat').codeArrayToCodeString(k), l.getCurrentContent(), l.getSelection(), l.getCurrentInlineStyle()),
                    n = c('EditorState').push(l, m, 'insert-characters');
                if (n !== this.state.editorState) this.setState({
                    editorState: c('EditorState').forceSelection(n, m.getSelectionAfter())
                });
            },
            appendText: function(k) {
                var l = this.state.editorState,
                    m = l.getSelection(),
                    n = l.getCurrentContent();
                n = c('DraftModifier').insertText(n, m, k);
                l = c('EditorState').push(l, n, 'insert-characters');
                this.setState({
                    editorState: l
                });
            },
            render: function() {
                return (c('React').createElement(c('DraftEditor.react'), babelHelpers['extends']({
                    ref: 'input'
                }, this.props, {
                    editorState: this.state.editorState,
                    onChange: this.onChange,
                    handleBeforeInput: this._handleBeforeInput,
                    handlePastedFiles: this._handlePastedFiles,
                    handleDroppedFiles: this._handleDroppedFiles,
                    handleReturn: this.onReturn,
                    spellCheck: true,
                    stripPastedStyles: true
                })));
            }
        });
    f.exports = j;
}, null);
__d('ChatPhotoUploader.react', ['cx', 'fbt', 'Promise', 'Bootloader', 'InlineBlock.react', 'Link.react', 'MercuryConfig', 'React', 'ReactDOM', 'SubscriptionsHandler', 'emptyFunction', 'joinClasses'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = c('React').createClass({
            displayName: 'ChatPhotoUploader',
            _uploader: null,
            _uploaderPromiseIsResolving: false,
            _uploaderPromise: null,
            _subscriptions: null,
            propTypes: {
                actionURI: j.string,
                allowCrossPage: j.bool,
                customUI: j.bool,
                disabled: j.bool,
                imageClassName: j.string,
                imagesOnly: j.bool,
                linkClassName: j.string,
                onSubmit: j.func,
                onAllUploadsComplete: j.func,
                onLastUploadFail: j.func,
                onLastUploadCancel: j.func,
                onMount: j.func,
                onUploadError: j.func
            },
            getDefaultProps: function() {
                return {
                    actionURI: c('MercuryConfig').upload_url,
                    allowCrossPage: true,
                    costomUI: false,
                    disabled: false,
                    imageClassName: "_509w",
                    imagesOnly: true,
                    linkClassName: '',
                    onSubmit: c('emptyFunction'),
                    onAllUploadsComplete: c('emptyFunction'),
                    onLastUploadFail: c('emptyFunction'),
                    onLastUploadCancel: c('emptyFunction')
                };
            },
            shouldComponentUpdate: function(l) {
                return l.actionURI != this.props.actionURI || l.disabled !== this.props.disabled;
            },
            componentDidMount: function() {
                if (this.props.onMount) this.props.onMount(this);
            },
            componentDidUpdate: function(l) {
                if (this._uploader) this._uploader.setAllowCrossPage(this.props.allowCrossPage);
            },
            componentWillUnmount: function() {
                if (!this.isUploading() || !this.props.allowCrossPage) this._cleanup();
            },
            render: function() {
                var l = this.props.imagesOnly ? i._("Add Photos") : i._("Add Files"),
                    m = c('joinClasses')("_4q61" + (!this.props.customUI ? ' ' + "_5f0v" : '') + (!this.props.customUI ? ' ' + "_509v" : ''), this.props.linkClassName);
                return (c('React').createElement('form', {
                    action: this.props.actionURI,
                    className: "_vzk",
                    title: l,
                    method: 'post',
                    onClick: function(n) {
                        n.stopPropagation();
                        if (this.props.disabled) n.preventDefault();
                    }.bind(this),
                    ref: 'form'
                }, c('React').createElement('input', {
                    type: 'hidden',
                    name: 'attach_id',
                    ref: 'attachID'
                }), c('React').createElement('input', {
                    type: 'hidden',
                    name: 'images_only',
                    value: this.props.imagesOnly
                }), c('React').createElement(c('InlineBlock.react'), {
                    onClick: this._bootloadChatAutoSendPhotoUploader,
                    className: c('joinClasses')(this.props.className, "_m _4q60 _3rzn")
                }, c('React').createElement('input', {
                    disabled: this.props.disabled,
                    type: 'file',
                    className: "_n _2__f",
                    name: 'attachment[]',
                    multiple: 'true',
                    accept: this.props.imagesOnly ? 'image/*' : '*',
                    ref: 'input',
                    title: l
                }), c('React').createElement(c('Link.react'), {
                    className: m,
                    tabIndex: -1
                }, c('React').createElement('i', {
                    className: this.props.imageClassName,
                    alt: i._("Camera")
                })))));
            },
            _handleSubmit: function(l, m) {
                this.props.onSubmit && this.props.onSubmit(l, m);
            },
            _handleAllUploadsCompleted: function(l, m) {
                this.props.onAllUploadsComplete && this.props.onAllUploadsComplete(l, m);
                if (!this.isMounted()) this._cleanup();
            },
            _handleLastUploadFailed: function(l, m) {
                this.props.onLastUploadFail && this.props.onLastUploadFail(l, m);
                if (!this.isMounted()) this._cleanup();
            },
            _handleLastUploadCanceled: function(l, m) {
                this.props.onLastUploadCancel && this.props.onLastUploadCancel(l, m);
                if (!this.isMounted()) this._cleanup();
            },
            _handleUploadError: function(l, m) {
                this.props.onUploadError && this.props.onUploadError(m);
                if (!this.isMounted()) this._cleanup();
            },
            isUploading: function() {
                return (this._uploader && this._uploader.isUploading() || this._uploaderPromiseIsResolving);
            },
            _bootloadChatAutoSendPhotoUploader: function() {
                if (!this._uploaderPromise) {
                    this._uploaderPromiseIsResolving = true;
                    this._uploaderPromise = new(c('Promise'))(function(l) {
                        c('Bootloader').loadModules(["ChatAutoSendPhotoUploader"], function(m) {
                            this._uploaderPromiseIsResolving = false;
                            var n = new m(c('ReactDOM').findDOMNode(this.refs.form), c('ReactDOM').findDOMNode(this.refs.input), c('ReactDOM').findDOMNode(this.refs.attachID), c('MercuryConfig').msgr_region);
                            n.setAllowCrossPage(this.props.allowCrossPage);
                            var o = new(c('SubscriptionsHandler'))();
                            o.addSubscriptions(n.subscribe('submit', this._handleSubmit), n.subscribe('all-uploads-completed', this._handleAllUploadsCompleted), n.subscribe('last-upload-failed', this._handleLastUploadFailed), n.subscribe('last-upload-canceled', this._handleLastUploadCanceled), n.subscribe('file-upload-error', this._handleUploadError));
                            this._subscriptions = o;
                            this._uploader = n;
                            l(this._uploader);
                        }.bind(this), 'ChatPhotoUploader.react');
                    }.bind(this));
                }
                return this._uploaderPromise;
            },
            uploadFiles: function(l) {
                this._bootloadChatAutoSendPhotoUploader().then(function(m) {
                    m.uploadFiles(l);
                });
            },
            uploadURL: function(l) {
                this._bootloadChatAutoSendPhotoUploader().then(function(m) {
                    m.uploadURL(l);
                });
            },
            _cleanup: function() {
                this._subscriptions && this._subscriptions.release();
                this._uploader && this._uploader.destroy();
            }
        });
    f.exports = k;
}, null);
__d('StickerContextualDialog.react', ['cx', 'ContextualLayerAutoFlipHorizontal', 'MercuryConfig', 'ReactAbstractContextualDialog', 'ReactLayer'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = 7,
        j = c('ReactLayer').createClass(c('ReactAbstractContextualDialog').createSpec({
            addedBehaviors: [c('ContextualLayerAutoFlipHorizontal')],
            displayName: 'StickerXUIContextualDialog',
            theme: {
                wrapperClassName: "_53ii",
                arrowDimensions: {
                    offset: i,
                    length: 16
                }
            }
        }));
    j.WIDTH = {
        NORMAL: 312,
        WIDE: 400
    };
    f.exports = j;
}, null);
__d('MessengerBotsMenuActions', ['MessengerDispatcher', 'MNCommerceActionTypes'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        showMenu: function(i) {
            c('MessengerDispatcher').dispatch({
                type: c('MNCommerceActionTypes').BOTS_MENU.SHOW,
                pageID: i
            });
        },
        hideMenu: function(i) {
            c('MessengerDispatcher').dispatch({
                type: c('MNCommerceActionTypes').BOTS_MENU.HIDE,
                pageID: i
            });
        },
        stateLoaded: function(i, j) {
            c('MessengerDispatcher').dispatch({
                type: c('MNCommerceActionTypes').BOTS_MENU.LOADED,
                pageID: i,
                ctas: j
            });
        },
        stateLoadError: function(i) {
            c('MessengerDispatcher').dispatch({
                type: c('MNCommerceActionTypes').BOTS_MENU.LOAD_ERROR,
                pageID: i
            });
        },
        stateReload: function(i) {
            c('MessengerDispatcher').dispatch({
                type: c('MNCommerceActionTypes').BOTS_MENU.RELOAD,
                pageID: i
            });
        }
    };
    f.exports = h;
}, null);
__d("XMessengerBotsMenuController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/messenger\/commerce\/bots\/menu\/", {
        page_id: {
            type: "String",
            required: true
        }
    });
}, null);
__d('MNCommerceBotMenuDataManager', ['AsyncRequest', 'MessengerBotsMenuActions', 'XMessengerBotsMenuController'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    h.prototype.fetchMenu = function(i) {
        var j = c('XMessengerBotsMenuController').getURIBuilder().setString('page_id', i).getURI();
        new(c('AsyncRequest'))().setURI(j).setHandler(this.$MNCommerceBotMenuDataManager1.bind(this, i)).setErrorHandler(this.$MNCommerceBotMenuDataManager2.bind(this, i)).send();
    };
    h.prototype.$MNCommerceBotMenuDataManager1 = function(i, j) {
        c('MessengerBotsMenuActions').stateLoaded(i, j.payload);
    };
    h.prototype.$MNCommerceBotMenuDataManager2 = function(i, j) {
        c('MessengerBotsMenuActions').stateLoadError(i);
    };

    function h() {}
    f.exports = new h();
}, null);
__d('MessengerBotsMenuVisibilityActions', ['MessengerDispatcher', 'MNCommerceActionTypes'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        visibilityLoaded: function(i, j) {
            c('MessengerDispatcher').dispatch({
                type: c('MNCommerceActionTypes').BOTS_MENU.VISIBILITY_LOADED,
                pageID: i,
                isVisible: j
            });
        }
    };
    f.exports = h;
}, null);
__d("XMNCommerceShowStructuredMenuController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/messenger\/commerce\/menu\/show\/", {});
}, null);
__d('MNCommerceBotMenuVisibilityDataManager', ['AsyncRequest', 'MessengerBotsMenuVisibilityActions', 'XMNCommerceShowStructuredMenuController'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    h.prototype.fetchVisibility = function(i) {
        var j = c('XMNCommerceShowStructuredMenuController').getURIBuilder().getURI();
        new(c('AsyncRequest'))().setURI(j).setMethod('post').setData({
            page_id: i
        }).setHandler(this.$MNCommerceBotMenuVisibilityDataManager1.bind(this, i)).setErrorHandler(this.$MNCommerceBotMenuVisibilityDataManager2.bind(this, i)).send();
    };
    h.prototype.$MNCommerceBotMenuVisibilityDataManager1 = function(i, j) {
        c('MessengerBotsMenuVisibilityActions').visibilityLoaded(i, !!(j && j.payload));
    };
    h.prototype.$MNCommerceBotMenuVisibilityDataManager2 = function(i, j) {
        c('MessengerBotsMenuVisibilityActions').visibilityLoaded(i, false);
    };

    function h() {}
    f.exports = new h();
}, null);
__d('MessengerBotsMenuStore', ['Cache', 'FluxStore', 'LoadObject', 'MessengerDispatcher', 'MNCommerceActionTypes', 'MNCommerceCacheTimeoutLimits', 'MNCommerceBotMenuDataManager', 'MNCommerceBotMenuVisibilityDataManager'], function a(b, c, d, e, f, g) {
    'use strict';
    var h, i;
    if (c.__markCompiled) c.__markCompiled();
    h = babelHelpers.inherits(j, c('FluxStore'));
    i = h && h.prototype;

    function j() {
        i.constructor.call(this, c('MessengerDispatcher'));
        this.$MessengerBotsMenuStore1 = new(c('Cache'))();
        this.$MessengerBotsMenuStore2 = new(c('Cache'))();
        this.$MessengerBotsMenuStore3 = null;
        this.$MessengerBotsMenuStore4 = false;
    }
    j.prototype.__onDispatch = function(k) {
        var l = k.type,
            m = k.pageID;
        switch (l) {
            case c('MNCommerceActionTypes').BOTS_MENU.SHOW:
                this.$MessengerBotsMenuStore4 = true;
                this.$MessengerBotsMenuStore3 = m;
                break;
            case c('MNCommerceActionTypes').BOTS_MENU.HIDE:
                this.$MessengerBotsMenuStore4 = false;
                this.$MessengerBotsMenuStore3 = null;
                break;
            case c('MNCommerceActionTypes').BOTS_MENU.VISIBILITY_LOADED:
                this.$MessengerBotsMenuStore2.set(m, k.isVisible);
                break;
            case c('MNCommerceActionTypes').BOTS_MENU.LOADED:
                var n = k.ctas.menu;
                this.$MessengerBotsMenuStore1.set(m, c('LoadObject').empty().setValue(n), null, c('MNCommerceCacheTimeoutLimits').SUCCESS_TIMEOUT);
                break;
            case c('MNCommerceActionTypes').BOTS_MENU.LOAD_ERROR:
                this.$MessengerBotsMenuStore1.set(m, c('LoadObject').empty().setError(new Error('Unable to load structured menu for: ' + m)), null, c('MNCommerceCacheTimeoutLimits').ERROR_TIMEOUT);
                break;
        }
        this.__emitChange();
    };
    j.prototype.getState = function() {
        return {
            pageID: this.$MessengerBotsMenuStore3,
            showTray: this.$MessengerBotsMenuStore4
        };
    };
    j.prototype.getMenu = function(k) {
        if (k && !this.$MessengerBotsMenuStore1.has(k)) {
            this.$MessengerBotsMenuStore1.set(k, c('LoadObject').loading().setValue({
                pageID: k
            }));
            c('MNCommerceBotMenuDataManager').fetchMenu(k);
        }
        return this.$MessengerBotsMenuStore1.get(k) || c('LoadObject').empty();
    };
    j.prototype.getMenuButtonVisibility = function(k) {
        if (!this.$MessengerBotsMenuStore2.has(k)) c('MNCommerceBotMenuVisibilityDataManager').fetchVisibility(k);
        return !!this.$MessengerBotsMenuStore2.get(k, false);
    };
    f.exports = new j();
}, null);
__d('MessengerContextualDialog.react', ['cx', 'ContextualLayerAutoFlipHorizontal', 'LayerHideOnEscape', 'ReactAbstractContextualDialog', 'ReactLayer'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = 12,
        j = c('ReactLayer').createClass(c('ReactAbstractContextualDialog').createSpec({
            addedBehaviors: [c('ContextualLayerAutoFlipHorizontal'), c('LayerHideOnEscape')],
            displayName: 'MessengerContextualDialog',
            shouldSetARIAProperties: false,
            theme: {
                wrapperClassName: "_1r_9",
                arrowDimensions: {
                    offset: i,
                    length: 16
                }
            }
        }));
    f.exports = j;
}, null);
__d('MessengerBotsMenuButton.react', ['BootloadOnRender.react', 'ChatFlyoutPlaceholder.react', 'CurrentEnvironment', 'JSResource', 'LazyComponent.react', 'Link.react', 'MessengerBotsMenuActions', 'MessengerBotsMenuStore', 'MessengerBotsWebTypedLogger', 'MessengerContextualDialog.react', 'MNBotsLoggerEvents', 'React', 'StoreAndPropBasedStateMixin', 'XUIContextualDialog.react'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('React').PropTypes,
        i = 302,
        j = 280,
        k = c('React').createClass({
            displayName: 'MessengerBotsMenuButton',
            _clickGuard: false,
            mixins: [c('StoreAndPropBasedStateMixin')(c('MessengerBotsMenuStore'))],
            propTypes: {
                className: h.string,
                threadID: h.string.isRequired,
                pageID: h.string.isRequired
            },
            statics: {
                calculateState: function(l) {
                    var m = c('MessengerBotsMenuStore').getState();
                    return {
                        shown: m.showTray && l.pageID === m.pageID
                    };
                }
            },
            componentWillUnmount: function() {
                if (this.state.shown) this._hideFlyout();
            },
            shouldComponentUpdate: function(l, m) {
                return this.state.shown !== m.shown;
            },
            render: function() {
                new(c('MessengerBotsWebTypedLogger'))().setEvent(c('MNBotsLoggerEvents').BOT_COMPOSER_MENU_ICON_DISPLAYED).setPageID(this.props.pageID).log();
                return (c('React').createElement('span', null, c('React').createElement(c('Link.react'), {
                    className: this.props.className,
                    href: '#',
                    onClick: this.showFlyout,
                    onMouseDown: this._prepareForClick,
                    role: 'button',
                    ref: 'link'
                }), this.renderLayers()));
            },
            _hideFlyout: function() {
                c('MessengerBotsMenuActions').hideMenu(this.props.pageID);
            },
            _handleBeforeHide: function() {
                if (this.state.shown) this._hideFlyout();
            },
            _prepareForClick: function() {
                this._clickGuard = this.state.shown;
            },
            showFlyout: function(event) {
                event && event.stopPropagation();
                if (this._clickGuard) {
                    this._clickGuard = false;
                    return;
                }
                c('MessengerBotsMenuActions').showMenu(this.props.pageID);
            },
            renderLayers: function() {
                if (!this.state.shown) return null;
                var l = c('CurrentEnvironment').messengerdotcom,
                    m = l ? i : j,
                    n = l ? c('MessengerContextualDialog.react') : c('XUIContextualDialog.react');
                return (c('React').createElement(n, babelHelpers['extends']({
                    alignment: this.props.flyoutAlignment ? this.props.flyoutAlignment : l ? 'right' : 'left',
                    width: m,
                    position: 'above',
                    contextRef: function() {
                        return this.refs.link;
                    }.bind(this),
                    onBeforeHide: this._handleBeforeHide,
                    onBlur: this._hideFlyout,
                    shown: this.state.shown
                }, this.props, {
                    key: 'contextualDialog'
                }), c('React').createElement(c('BootloadOnRender.react'), {
                    component: c('React').createElement(c('LazyComponent.react'), {
                        onEscKeyDown: this._hideFlyout,
                        shown: this.state.shown,
                        pageID: this.props.pageID,
                        threadID: this.props.threadID,
                        onClick: this._hideFlyout
                    }),
                    loader: c('JSResource')('MessengerPlatformPersistMenuDialog.react').__setRef('MessengerBotsMenuButton.react'),
                    placeholder: c('React').createElement(c('ChatFlyoutPlaceholder.react'), null)
                })));
            }
        });
    f.exports = k;
}, null);
__d('MessengerHotLikeOutlineSVG.react', ['cssVar', 'fbt', 'React', 'MercuryShareAttachmentRenderLocations', 'uniqueID', 'UserAgent'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    var j, k;
    if (c.__markCompiled) c.__markCompiled();
    var l = c('React').PropTypes,
        m = 'transparent',
        n = i._("Thumbs Up Sign");
    j = babelHelpers.inherits(o, c('React').Component);
    k = j && j.prototype;

    function o() {
        var p, q;
        for (var r = arguments.length, s = Array(r), t = 0; t < r; t++) s[t] = arguments[t];
        return p = (q = k.constructor).call.apply(q, [this].concat(s)), this.state = {
            titleId: c('uniqueID')()
        }, p;
    }
    o.prototype.render = function() {
        var p = this.props.color || "#0084ff",
            q = c('UserAgent').isBrowser('Safari') ? '0 0 40.16 42.24' : '-1 -1 40.16 42.24',
            r = void 0;
        if (this.props.location !== c('MercuryShareAttachmentRenderLocations').CHAT && this.props.location !== c('MercuryShareAttachmentRenderLocations').PAGES_INBOX) r = {
            width: '66%'
        };
        return (c('React').createElement('svg', {
            'aria-labelledby': this.state.titleId,
            version: '1.1',
            viewBox: q,
            height: '90%',
            preserveAspectRatio: 'xMinYMax meet',
            style: r
        }, c('React').createElement('title', {
            id: this.state.titleId
        }, n), c('React').createElement('path', {
            d: 'M935.36,1582.44a0,0,0,0,0,0,.06,3.59,3.59,0,0,1-.72,6.53,0,0,0,0,0,0,0,3.56,3.56,0,0,1,.71,2.13,3.6,3.6,0,0,1-3,3.54, 0,0,0,0,0,0,.05,3.56,3.56,0,0,1,.38,1.61,3.61,3.61,0,0,1-3.42,3.6H910v-19.6l5.27-7.9a4,4,0,0,0,.66-2.31l-0.1-4c-0.22-2.4-.09-2.06, 1.13-2.37,2-.51,7.16,1.59,5.13,12.17h11.06A3.59,3.59,0,0,1,935.36,1582.44ZM899,1581h7v22h-7v-22Z',
            transform: 'translate(-898.5 -1563.26)',
            fill: m,
            fillRule: 'evenodd',
            stroke: p,
            strokeLinecap: 'round',
            strokeWidth: '5%'
        })));
    };
    o.propTypes = {
        color: l.string,
        location: l.string
    };
    f.exports = o;
}, null);
__d('MessengerHotLikeButton.react', ['cx', 'fbt', 'EmojiLikeConstants', 'EmojiLikeCxData', 'Image.react', 'ImmutableObject', 'Keys', 'KeyStatus', 'Link.react', 'MercuryConfig', 'MercuryMessageObject', 'MercurySourceType', 'MessengerHotLikePreviewEvents', 'MessengerHotLikeOutlineSVG.react', 'MessengerHotLikeUtils', 'React', 'StickerActions', 'StickerConstants', 'clearTimeout', 'joinClasses', 'setTimeoutAcrossTransitions'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    var j, k;
    if (c.__markCompiled) c.__markCompiled();
    var l = c('MercuryMessageObject').get(),
        m = c('React').PropTypes;
    j = babelHelpers.inherits(n, c('React').PureComponent);
    k = j && j.prototype;

    function n() {
        var o, p;
        for (var q = arguments.length, r = Array(q), s = 0; s < q; s++) r[s] = arguments[s];
        return o = (p = k.constructor).call.apply(p, [this].concat(r)), this.$MessengerHotLikeButton1 = null, this.$MessengerHotLikeButton2 = null, this.$MessengerHotLikeButton3 = null, this.$MessengerHotLikeButton5 = function(t) {
            if (this.props.disabled || this.$MessengerHotLikeButton2) {
                t.preventDefault();
                t.stopPropagation();
            }
            if (this.props.disabled || t.button !== 0) return;
            c('StickerActions').hideStickerTray();
            this.props.onMouseDown && this.props.onMouseDown();
            this.$MessengerHotLikeButton2 = Date.now();
            this.$MessengerHotLikeButton8();
            this.$MessengerHotLikeButton9();
        }.bind(this), this.$MessengerHotLikeButton7 = function() {
            if (!(this.props.threadID && this.$MessengerHotLikeButton2)) return;
            this.$MessengerHotLikeButton2 = 0;
            this.$MessengerHotLikeButton10();
            this.$MessengerHotLikeButton11();
        }.bind(this), this.$MessengerHotLikeButton8 = function() {
            if (!this.props.threadID) return;
            c('MessengerHotLikePreviewEvents').emit(c('MessengerHotLikePreviewEvents').START, this.$MessengerHotLikeButton12(), this.props.threadID);
        }.bind(this), this.$MessengerHotLikeButton11 = function() {
            if (!this.props.threadID) return;
            c('MessengerHotLikePreviewEvents').emit(c('MessengerHotLikePreviewEvents').STOP, this.props.threadID);
        }.bind(this), this.$MessengerHotLikeButton13 = function() {
            if (!this.props.threadID) return;
            c('MessengerHotLikePreviewEvents').emit(c('MessengerHotLikePreviewEvents').POP, this.props.threadID);
        }.bind(this), this.$MessengerHotLikeButton12 = function() {
            if (!this.props.threadID) return null;
            var t = l.constructStickerMessageObject(c('StickerConstants').HOT_LIKE_SMALL_STICKER_ID, c('MercurySourceType').MESSENGER_WEB, this.props.threadID);
            l.normalizeNewMessage(t);
            t.is_like_preview = true;
            t.like_preview_since = this.$MessengerHotLikeButton2;
            t.customLike = this.props.customLike;
            t.body = '';
            return new(c('ImmutableObject'))(t);
        }.bind(this), this.$MessengerHotLikeButton9 = function() {
            this.$MessengerHotLikeButton10();
            this.$MessengerHotLikeButton1 = c('setTimeoutAcrossTransitions')(this.$MessengerHotLikeButton13, c('MessengerHotLikeUtils').SizeTimes.large);
        }.bind(this), this.$MessengerHotLikeButton6 = function() {
            if (this.$MessengerHotLikeButton2) {
                this.$MessengerHotLikeButton2 = 0;
                this.$MessengerHotLikeButton10();
                this.$MessengerHotLikeButton13();
            }
        }.bind(this), this.$MessengerHotLikeButton10 = function() {
            c('clearTimeout')(this.$MessengerHotLikeButton1);
        }.bind(this), this.$MessengerHotLikeButton4 = function(t) {
            t.stopPropagation();
            if (this.props.disabled) return;
            if (c('KeyStatus').getKeyDownCode() === c('Keys').RETURN || !this.props.threadID) {
                var u = this.props.sendCustomLike;
                if (this.props.customLike && u) {
                    u(this.props.customLike, c('MessengerHotLikeUtils').getEmojiSizeForTime(1));
                } else this.props.sendSticker(c('MessengerHotLikeUtils').getStickerIDForTime(1));
            }
        }.bind(this), o;
    }
    n.prototype.componentDidMount = function() {
        this.$MessengerHotLikeButton3 = c('MessengerHotLikePreviewEvents').addListener(c('MessengerHotLikePreviewEvents').FINISH_ANIMATION, function(o, p, q) {
            if (o === this.props.threadID)
                if (q && this.props.customLike && this.props.sendCustomLike) {
                    this.props.sendCustomLike(this.props.customLike, q);
                } else this.props.sendSticker(p);
        }.bind(this));
    };
    n.prototype.componentWillUnmount = function() {
        this.$MessengerHotLikeButton3 && this.$MessengerHotLikeButton3.remove();
    };
    n.prototype.render = function() {
        var o = null,
            p = {};
        if (this.props.customLike != null) {
            if (c('MercuryConfig').MessengerNewEmojiGK) {
                var q = this.props.customLike.emoji,
                    r = c('EmojiLikeCxData').getNewEmojiData(q, c('EmojiLikeConstants').size.SMALL),
                    s = this.props.renderSize ? this.props.renderSize : 16;
                p.background = 'none';
                o = c('React').createElement(c('Image.react'), {
                    src: r.url,
                    style: {
                        padding: s == 16 ? 0 : 3,
                        display: 'block',
                        height: s,
                        width: s
                    }
                });
            } else {
                q = this.props.customLike.medium;
                if (q) {
                    p.background = 'none';
                    o = c('React').createElement(c('Image.react'), {
                        src: q,
                        style: {
                            display: 'block',
                            height: 16,
                            width: 16
                        }
                    });
                }
            }
        } else if (this.props.CustomRenderer) {
            var t = this.props.CustomRenderer;
            o = c('React').createElement(t, {
                color: this.props.customColor,
                location: this.props.location
            });
        } else if (this.props.customColor) o = c('React').createElement(c('MessengerHotLikeOutlineSVG.react'), {
            color: this.props.customColor,
            location: this.props.location
        });
        var u = i._("Send a Like");
        return c('React').createElement(c('Link.react'), {
            'aria-label': u,
            className: c('joinClasses')(this.props.customColor || this.props.CustomRenderer ? "_5j_u" : '', this.props.className),
            disabled: this.props.disabled,
            href: '#',
            onClick: this.$MessengerHotLikeButton4,
            onDragStart: function(v) {
                return v.preventDefault();
            },
            onMouseDown: this.$MessengerHotLikeButton5,
            onMouseLeave: this.$MessengerHotLikeButton6,
            onMouseUp: this.$MessengerHotLikeButton7,
            role: 'button',
            style: p,
            title: u
        }, o);
    };
    n.propTypes = {
        CustomRenderer: m.func,
        onMouseDown: m.func,
        customLike: m.object,
        customColor: m.string,
        location: m.string,
        sendSticker: m.func.isRequired,
        sendCustomLike: m.func,
        threadID: m.string,
        disabled: m.bool,
        renderSize: m.number
    };
    f.exports = n;
}, null);
__d('MessengerHotLikeChatSVGIcon.react', ['cssVar', 'fbt', 'React', 'uniqueID'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    var j, k;
    if (c.__markCompiled) c.__markCompiled();
    var l = c('React').PropTypes,
        m = 'transparent',
        n = i._("Thumbs Up Sign");
    j = babelHelpers.inherits(o, c('React').Component);
    k = j && j.prototype;

    function o() {
        var p, q;
        for (var r = arguments.length, s = Array(r), t = 0; t < r; t++) s[t] = arguments[t];
        return p = (q = k.constructor).call.apply(q, [this].concat(s)), this.state = {
            titleId: c('uniqueID')()
        }, p;
    }
    o.prototype.render = function() {
        var p = this.props.color || "#0084ff",
            q = '0 0 32 32',
            r = {
                fill: p,
                opacity: .2
            };
        return (c('React').createElement('svg', {
            'aria-labelledby': this.state.titleId,
            preserveAspectRatio: 'xMinYMax meet',
            version: '1.1',
            viewBox: q,
            xmlns: 'http://www.w3.org/2000/svg'
        }, c('React').createElement('title', {
            id: this.state.titleId
        }, n), c('React').createElement('g', null, c('React').createElement('rect', {
            id: 'bounds',
            fill: m,
            width: '32',
            height: '32'
        }), c('React').createElement('g', {
            style: r
        }, c('React').createElement('path', {
            d: 'M670.93,460a0.08,0.08,0,0,0,0,.15,1.75,1.75,0,0,1,1.29,1.66c0,1.45-1.2,1.66-2,1.75a0.06,0.06,0,0,0,0,.12,1.54,1.54,0,0,1,.88,1.68C671,467,669.17,467,668,467H658a5.63,5.63,0,0,1-5-2.5V455l2.19-1.59a4.39,4.39,0,0,0,1.21-1.75l1.48-5.59v-0.43l-0.41-3.81a0.45,0.45,0,0,1,.16-0.41c1.34-1,3.07-.23,4,2.6a12.83,12.83,0,0,1,0,6.33,0.55,0.55,0,0,0,.54.66c1.77,0,6.77,0,6.77,0,2,0,3.31.62,3.54,2.5a2.39,2.39,0,0,1-1.23,2.4,0.08,0.08,0,0,0,0,.14,1.87,1.87,0,0,1,1.71,2A2,2,0,0,1,670.93,460Zm-20.13-7h-5.6a0.2,0.2,0,0,0-.2.2v15.6a0.2,0.2,0,0,0,.2.2h5.6a0.2,0.2,0,0,0,.2-0.2V453.2A0.2,0.2,0,0,0,650.8,453Z',
            transform: 'translate(-643 -439)'
        })), c('React').createElement('g', {
            style: r
        }, c('React').createElement('rect', {
            x: '2',
            y: '14',
            width: '6',
            height: '16',
            rx: '0.2',
            ry: '0.2'
        })), c('React').createElement('path', {
            fill: p,
            d: 'M650.8,453a0.2,0.2,0,0,1,.2.2v15.6a0.2,0.2,0,0,1-.2.2h-5.6a0.2,0.2,0,0,1-.2-0.2V453.2a0.2,0.2,0,0,1,.2-0.2h5.6m0-2h-5.6a2.2,2.2,0,0,0-2.2,2.2v15.6a2.2,2.2,0,0,0,2.2,2.2h5.6a2.2,2.2,0,0,0,2.2-2.2V453.2a2.2,2.2,0,0,0-2.2-2.2h0Z',
            transform: 'translate(-643 -439)'
        }), c('React').createElement('path', {
            fill: p,
            'data-name': 'stroke',
            d: 'M658.83,441c1.06,0,2.16,1,2.83,3a12.83,12.83,0,0,1,0,6.33,0.55,0.55,0,0,0,.54.66h1.18l5.59,0c2,0,3.31.62,3.54,2.5a2.39,2.39,0,0,1-1.23,2.4,0.08,0.08,0,0,0,0,.14,1.87,1.87,0,0,1,1.71,2,2,2,0,0,1-2.07,1.91,0.08,0.08,0,0,0,0,.15,1.75,1.75,0,0,1,1.29,1.66c0,1.45-1.2,1.66-2,1.75a0.06,0.06,0,0,0,0,.12,1.54,1.54,0,0,1,.88,1.68C671,467,669.24,467,668.07,467H658a5.63,5.63,0,0,1-5-2.5V455l2.19-1.59a4.39,4.39,0,0,0,1.21-1.75l1.48-5.59v-0.43l-0.41-3.81a0.45,0.45,0,0,1,.16-0.41,2,2,0,0,1,1.17-.41m0-2h0a4,4,0,0,0-2.36.8,2.45,2.45,0,0,0-1,2.23l0.39,3.67h0v0.05l-1.41,5.32a3.64,3.64,0,0,1-.47.69l-2.19,1.59L651,454v11.15l0.36,0.52A7.58,7.58,0,0,0,658,469h10.07c3.25,0,4.95-1.21,5-3.59a4.54,4.54,0,0,0-.05-0.93,3.59,3.59,0,0,0,1.14-2.71,3.77,3.77,0,0,0-.18-1.15,3.85,3.85,0,0,0,1-2.57,4,4,0,0,0-.82-2.55,4.38,4.38,0,0,0,.31-2.25c-0.2-1.59-1.18-4.25-5.53-4.25l-5,0a12.65,12.65,0,0,0-.35-5.63c-0.91-2.75-2.67-4.38-4.73-4.38h0Z',
            transform: 'translate(-643 -439)'
        }))));
    };
    o.propTypes = {
        color: l.string,
        location: l.string
    };
    f.exports = o;
}, null);
__d("XMessagingQuickCamController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/messages\/quick-cam\/", {
        thread_id: {
            type: "String",
            required: true
        },
        __asyncDialog: {
            type: "Int"
        }
    });
}, null);
__d('MessengerQuickCamButton.react', ['fbt', 'Link.react', 'React', 'XMessagingQuickCamController'], function a(b, c, d, e, f, g, h) {
    'use strict';
    var i, j;
    if (c.__markCompiled) c.__markCompiled();
    var k = c('React').PropTypes;
    i = babelHelpers.inherits(l, c('React').Component);
    j = i && i.prototype;

    function l() {
        var m, n;
        for (var o = arguments.length, p = Array(o), q = 0; q < o; q++) p[q] = arguments[q];
        return m = (n = j.constructor).call.apply(n, [this].concat(p)), this.state = {
            dialogOpen: false
        }, this.$MessengerQuickCamButton1 = false, this.$MessengerQuickCamButton2 = function() {
            this.setState({
                dialogOpen: false
            });
        }.bind(this), this.$MessengerQuickCamButton3 = function(r) {
            this.$MessengerQuickCamButton1 = this.state.dialogOpen;
        }.bind(this), this.$MessengerQuickCamButton4 = function(r) {
            if (this.state.dialogOpen || this.$MessengerQuickCamButton1) return;
            r.stopPropagation();
            this.setState({
                dialogOpen: !this.state.dialogOpen
            });
        }.bind(this), m;
    }
    l.prototype.render = function() {
        var m = c('XMessagingQuickCamController').getURIBuilder().setString('thread_id', this.props.threadID).getURI();
        return c('React').createElement(c('Link.react'), {
            className: this.props.className,
            href: m,
            rel: 'async',
            ref: 'photoButton',
            role: 'button',
            title: h._("Take a picture using quick cam")
        });
    };
    l.propTypes = {
        className: k.string.isRequired,
        threadID: k.string.isRequired,
        viewer: k.string.isRequired
    };
    f.exports = l;
}, null);
__d('MessengerQuickCamDispatcher', ['ExplicitRegistrationReactDispatcher'], function a(b, c, d, e, f, g) {
    'use strict';
    var h, i;
    if (c.__markCompiled) c.__markCompiled();
    h = babelHelpers.inherits(j, c('ExplicitRegistrationReactDispatcher'));
    i = h && h.prototype;

    function j() {
        h.apply(this, arguments);
    }
    f.exports = new j({
        strict: false
    });
}, null);
__d('MessengerQuickCamActions', ['MessengerQuickCamDispatcher', 'keyMirror'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('keyMirror')({
            CLOSE: null,
            PROCESS_RECORDING: null,
            REGISTER_QUICKCAM: null,
            REMOVE_ALL_LISTENERS: null,
            REQUEST_USER_MEDIA: null,
            RETAKE: null,
            SEND_PHOTO: null,
            SEND_VIDEO: null,
            SET_MEDIA: null,
            STOP_VIDEO: null,
            TAKE_PHOTO: null,
            TAKE_VIDEO: null,
            UPDATE_PROGRESS: null,
            UPLOAD_COMPLETE: null,
            UPLOAD_ERROR: null,
            USER_MEDIA_ERROR: null
        }),
        i = {
            Types: h,
            close: function() {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.CLOSE
                });
            },
            requestUserMedia: function(j, k) {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.REQUEST_USER_MEDIA,
                    viewer: j,
                    threadID: k
                });
            },
            processRecording: function(j) {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.PROCESS_RECORDING,
                    videoBlob: j
                });
            },
            registerQuickCam: function(j) {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.REGISTER_QUICKCAM,
                    quickcam: j
                });
            },
            retake: function() {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.RETAKE
                });
            },
            sendPhoto: function() {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.SEND_PHOTO
                });
            },
            sendVideo: function() {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.SEND_VIDEO
                });
            },
            setMedia: function(j, k) {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.SET_MEDIA,
                    videoSrc: j,
                    videoStream: k
                });
            },
            stopVideo: function() {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.STOP_VIDEO
                });
            },
            takePhoto: function() {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.TAKE_PHOTO
                });
            },
            takeVideo: function() {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.TAKE_VIDEO
                });
            },
            updateProgress: function() {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.UPDATE_PROGRESS
                });
            },
            uploadError: function(j) {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.UPLOAD_ERROR,
                    error: j
                });
            },
            uploadComplete: function(j) {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.UPLOAD_COMPLETE,
                    data: j
                });
            },
            userMediaError: function() {
                c('MessengerQuickCamDispatcher').dispatch({
                    type: h.USER_MEDIA_ERROR
                });
            }
        };
    f.exports = i;
}, null);
__d('MessengerQuickCamOrigins', [], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        CHAT_TAB: 'chat tab',
        MESSENGER: 'messenger',
        getValues: function() {
            return [h.CHAT_TAB, h.MESSENGER];
        }
    };
    f.exports = h;
}, null);
__d('MessengerQuickCamButtonHTML5.react', ['fbt', 'BootloadedComponent.react', 'JSResource', 'Link.react', 'MessengerDialog.react', 'MessengerQuickCamActions', 'MessengerQuickCamOrigins', 'MessengerSpinner.react', 'React', 'XUIDialog.react', 'XUISpinner.react'], function a(b, c, d, e, f, g, h) {
    'use strict';
    var i, j;
    if (c.__markCompiled) c.__markCompiled();
    var k = c('React').PropTypes;
    i = babelHelpers.inherits(l, c('React').Component);
    j = i && i.prototype;

    function l(m) {
        j.constructor.call(this, m);
        this.$MessengerQuickCamButtonHTML55 = function() {
            if (this.state.dialogOpen) this.setState({
                dialogOpen: false
            });
        }.bind(this);
        this.$MessengerQuickCamButtonHTML56 = function(n) {
            if (!n) {
                this.$MessengerQuickCamButtonHTML55();
            } else c('MessengerQuickCamActions').requestUserMedia(this.props.viewer, this.props.threadID);
        }.bind(this);
        this.$MessengerQuickCamButtonHTML51 = function(n) {
            if (this.state.dialogOpen) return;
            n.stopPropagation();
            this.setState({
                dialogOpen: !this.state.dialogOpen
            });
        }.bind(this);
        this.state = {
            dialogOpen: false
        };
    }
    l.prototype.render = function() {
        return c('React').createElement(c('Link.react'), {
            className: this.props.className,
            onClick: this.$MessengerQuickCamButtonHTML51,
            ref: 'photoButton',
            role: 'button',
            title: h._("Take a picture using quick cam")
        }, this.$MessengerQuickCamButtonHTML52());
    };
    l.prototype.$MessengerQuickCamButtonHTML52 = function() {
        return this.props.location === c('MessengerQuickCamOrigins').MESSENGER ? this.$MessengerQuickCamButtonHTML53() : this.$MessengerQuickCamButtonHTML54();
    };
    l.prototype.$MessengerQuickCamButtonHTML53 = function() {
        return c('React').createElement(c('MessengerDialog.react'), {
            overflow: 'hidden',
            contextRef: function() {
                return this.refs.photoButton;
            }.bind(this),
            shown: this.state.dialogOpen,
            onBlur: this.$MessengerQuickCamButtonHTML55,
            onToggle: this.$MessengerQuickCamButtonHTML56
        }, c('React').createElement(c('BootloadedComponent.react'), {
            bootloadPlaceholder: c('React').createElement('div', {
                style: {
                    padding: '30px',
                    textAlign: 'center'
                }
            }, c('React').createElement(c('MessengerSpinner.react'), null)),
            bootloadLoader: c('JSResource')('MessengerQuickCamDialog.react').__setRef('MessengerQuickCamButtonHTML5.react'),
            location: this.props.location,
            onShown: function(m) {
                if (this.props.onDialogShown) this.props.onDialogShown(m);
            }.bind(this),
            onHidden: this.$MessengerQuickCamButtonHTML55,
            onEscKeyDown: this.$MessengerQuickCamButtonHTML55,
            shown: this.state.dialogOpen,
            viewer: this.props.viewer,
            threadID: this.props.threadID
        }));
    };
    l.prototype.$MessengerQuickCamButtonHTML54 = function() {
        return c('React').createElement(c('XUIDialog.react'), {
            overflow: 'hidden',
            contextRef: function() {
                return this.refs.photoButton;
            }.bind(this),
            shown: this.state.dialogOpen,
            onBlur: this.$MessengerQuickCamButtonHTML55,
            onToggle: this.$MessengerQuickCamButtonHTML56,
            width: 500
        }, c('React').createElement(c('BootloadedComponent.react'), {
            bootloadPlaceholder: c('React').createElement('div', {
                style: {
                    padding: '30px',
                    textAlign: 'center'
                }
            }, c('React').createElement(c('XUISpinner.react'), null)),
            bootloadLoader: c('JSResource')('MessengerQuickCamDialog.react').__setRef('MessengerQuickCamButtonHTML5.react'),
            location: this.props.location,
            onShown: function(m) {
                if (this.props.onDialogShown) this.props.onDialogShown(m);
            }.bind(this),
            onHidden: this.$MessengerQuickCamButtonHTML55,
            onEscKeyDown: this.$MessengerQuickCamButtonHTML55,
            shown: this.state.dialogOpen,
            viewer: this.props.viewer,
            threadID: this.props.threadID
        }));
    };
    l.propTypes = {
        className: k.string.isRequired,
        location: k.oneOf(c('MessengerQuickCamOrigins').getValues()).isRequired,
        threadID: k.string.isRequired,
        viewer: k.string.isRequired
    };
    f.exports = l;
}, null);
__d('ChatTabComposer.react', ['csx', 'cx', 'fbt', 'ChatConfig', 'ChatContentSearchButton.react', 'ChatEmojiButton.react', 'ChatInput.react', 'ChatPhotoUploader.react', 'ChatStickerButton2.react', 'CSS', 'Keys', 'MercuryConfig', 'MercuryIDs', 'MessengerBotsMenuButton.react', 'MessengerHotLikeButton.react', 'MessengerHotLikeChatSVGIcon.react', 'MessengerHotLikeUtils', 'MessengerQuickCamButton.react', 'MessengerQuickCamButtonHTML5.react', 'MessengerQuickCamOrigins', 'P2PSendMoneyContainerBootloader.react', 'ReactComponentWithPureRenderMixin', 'React', 'MercuryShareAttachmentRenderLocations', 'Stickers2Actions', 'convertMIGColorToFIGColor', 'getPageIDFromThreadID'], function a(b, c, d, e, f, g, h, i, j) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var k = c('React').PropTypes,
        l = 77,
        m = c('ChatConfig').get('chat_basic_input_module') || c('ChatInput.react'),
        n = c('React').createClass({
            displayName: 'ChatTabComposer',
            _fileUploader: null,
            _photoUploader: null,
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                disableFileUploads: k.bool,
                initializeThingsWithInputFn: k.func,
                inputKeyDown: k.func,
                onBlur: k.func,
                onEmojiSelect: k.func,
                onEscape: k.func,
                onFocus: k.func,
                onTab: k.func,
                p2pProps: k.object,
                pageID: k.string,
                participantIDs: k.arrayOf(k.string),
                photoUploaderProps: k.object,
                placeHolder: k.string,
                resizeFn: k.func,
                showP2PButton: k.bool,
                showStructuredMenu: k.bool,
                stickerButtonProps: k.object,
                uploadPhotoFn: k.func
            },
            getInitialState: function() {
                return {
                    inputHeight: 0,
                    stickerFlyoutShown: false
                };
            },
            render: function() {
                return (c('React').createElement('div', {
                    className: "_1d4_",
                    onClick: this._handleClick
                }, this._renderInput(), c('React').createElement('div', {
                    className: "_552n"
                }, this._renderIcons())));
            },
            resetInput: function() {
                this.refs.input.resetState();
            },
            uploadURL: function(o) {
                var p = this._fileUploader || this._photoUploader;
                if (!p) return;
                p.uploadURL(o);
            },
            isUploading: function() {
                return !!(this._fileUploader && this._fileUploader.isUploading() || this._photoUploader && this._photoUploader.isUploading());
            },
            getInput: function() {
                return this.refs.input;
            },
            _renderInput: function() {
                var o = {};
                if (this.state.inputHeight) o.minHeight = this.state.inputHeight;
                var p = null;
                if (this.props.showStructuredMenu) p = c('React').createElement('div', {
                    className: "_5c6-"
                }, c('React').createElement(c('MessengerBotsMenuButton.react'), {
                    flyoutAlignment: 'left',
                    threadID: this.props.threadID,
                    pageID: this.props.pageID,
                    className: "_5c6_"
                }));
                return (c('React').createElement('div', {
                    className: "_552h",
                    style: o
                }, p, c('React').createElement('div', {
                    className: this.props.showStructuredMenu ? "_4yzj" : ''
                }, c('React').createElement(m, {
                    initializeThingsWithInputFn: this.props.initializeThingsWithInputFn,
                    inputKeyDown: this._handleInputKeyDown,
                    onBeforeInput: function() {
                        return this.refs.emojiButton && this.refs.emojiButton.hideFlyout();
                    }.bind(this),
                    onBlur: this.props.onBlur,
                    onEscape: this._handleEscape,
                    onFocus: this.props.onFocus,
                    onTab: this.props.onTab,
                    ref: 'input',
                    resizeFn: function(q) {
                        q = Math.min(q, l);
                        this.setState({
                            inputHeight: q
                        });
                        this.props.resizeFn && this.props.resizeFn(q);
                    }.bind(this),
                    uploadPhotoFn: function(q) {
                        this._photoUploader && this._photoUploader.uploadFiles([q]);
                    }.bind(this),
                    placeholder: this.props.placeholder
                }))));
            },
            _renderIcons: function() {
                return [this._renderPhotoUploader(), this._renderStickerButton(), this._renderContentSearchButton(), this._renderEmojiButton(), this._renderP2PButton(), this._renderFileUploader(), this._renderLikeButton()];
            },
            _renderPhotoUploader: function() {
                if (c('ChatConfig').get('messenger_internal_quickcam') && c('ChatConfig').get('messenger_www_quickcam')) return this._renderQuickCam();
                var o = this.props.photoUploaderProps || {};
                return (c('React').createElement(c('ChatPhotoUploader.react'), babelHelpers['extends']({
                    key: 'photos',
                    onMount: function(p) {
                        return this._photoUploader = p;
                    }.bind(this)
                }, o)));
            },
            _renderFileUploader: function() {
                if (this.props.disableFileUploads) return null;
                var o = this.props.fileUploaderProps || {};
                return (c('React').createElement(c('ChatPhotoUploader.react'), babelHelpers['extends']({
                    key: 'files',
                    onMount: function(p) {
                        return this._fileUploader = p;
                    }.bind(this)
                }, o)));
            },
            _renderStickerButton: function() {
                var o = this.props.stickerButtonProps;
                if (!o) return null;
                return (c('React').createElement('div', {
                    className: "_6gd",
                    key: 'stickers'
                }, c('React').createElement(c('ChatStickerButton2.react'), babelHelpers['extends']({}, o, {
                    onFlyoutShown: function() {
                        this.refs.input.focus();
                        this.setState({
                            stickerFlyoutShown: true
                        });
                    }.bind(this),
                    onFlyoutHidden: function() {
                        this.setState({
                            stickerFlyoutShown: false
                        });
                    }.bind(this)
                }))));
            },
            _renderContentSearchButton: function() {
                if (!c('ChatConfig').get('chat_content_search')) return null;
                return (c('React').createElement('div', {
                    className: "_6gd",
                    key: 'contentsearch'
                }, c('React').createElement(c('ChatContentSearchButton.react'), {
                    className: "_6gb _6gs",
                    getQuery: function() {
                        return this.refs.input.getValue();
                    }.bind(this),
                    onSelect: this._handleContentSearchSelect
                })));
            },
            _renderEmojiButton: function() {
                if (!c('ChatConfig').get('www_messenger_emoji_picker')) return null;
                return (c('React').createElement('div', {
                    className: "_6gd",
                    key: 'emojipicker'
                }, c('React').createElement(c('ChatEmojiButton.react'), {
                    className: "_6gb _3oxr",
                    getInput: function() {
                        return this.refs.input;
                    }.bind(this),
                    onSelect: this.props.onEmojiSelect,
                    ref: 'emojiButton'
                })));
            },
            _renderLikeButton: function() {
                if (!c('ChatConfig').get('hotlike')) return null;
                var o = this.props.thread,
                    p = c('MercuryConfig').ChatMessengerStyles ? c('convertMIGColorToFIGColor')(o && o.custom_color) || '' : '',
                    q = undefined;
                if (c('MercuryConfig').ChatMessengerIcons) q = c('MessengerHotLikeChatSVGIcon.react');
                var r = (!p && !q ? "_6h1" : '') + (' ' + "_6gb");
                return (c('React').createElement('div', {
                    className: "_6gd _5ep3",
                    key: 'like'
                }, c('React').createElement(c('MessengerHotLikeButton.react'), {
                    className: r,
                    customColor: p,
                    customLike: c('MessengerHotLikeUtils').getCustomEmojiFromThread(o) || undefined,
                    CustomRenderer: q,
                    location: c('MercuryShareAttachmentRenderLocations').CHAT,
                    sendSticker: this.props.onStickerSelect,
                    sendCustomLike: this.props.onCustomLikeSelect,
                    threadID: this.props.threadID
                })));
            },
            _renderP2PButton: function() {
                if (!this.props.p2pProps || !this.props.showP2PButton || this._isPageChat()) return null;
                var o = this.props.p2pProps;
                o.threadID = this.props.threadID;
                if (this.props.participantIDs && this.props.participantIDs.length) o.participantIDs = this.props.participantIDs;
                return (c('React').createElement('div', {
                    className: "_6gd",
                    key: 'p2p'
                }, c('React').createElement(c('P2PSendMoneyContainerBootloader.react'), o)));
            },
            _renderQuickCam: function() {
                if (!c('ChatConfig').get('messenger_www_quickcam') || c('MercuryIDs').isLocalThread(this.props.threadID)) return null;
                var o = c('React').createElement(c('MessengerQuickCamButton.react'), {
                    className: "_6gb _6ge",
                    threadID: this.props.threadID,
                    viewer: this.props.viewer
                });
                if (c('ChatConfig').get('messenger_www_html5_quickcam')) o = c('React').createElement(c('MessengerQuickCamButtonHTML5.react'), babelHelpers['extends']({
                    location: c('MessengerQuickCamOrigins').CHAT_TAB
                }, o.props));
                return (c('React').createElement('div', {
                    className: "_6gd",
                    key: 'quickcam'
                }, o));
            },
            _handleInputKeyDown: function(o) {
                if (o.keyCode === c('Keys').RETURN) this.refs.emojiButton && this.refs.emojiButton.hideFlyout();
                this.props.inputKeyDown && this.props.inputKeyDown(o);
            },
            _handleClick: function(o) {
                if (c('CSS').matchesSelector(o.target, "._1d4_") || c('CSS').matchesSelector(o.target, "._552h") || c('CSS').matchesSelector(o.target, "._552n")) this.refs.input.focus();
            },
            _handleEscape: function(o) {
                if (this.state.stickerFlyoutShown) return c('Stickers2Actions').hideStickerFlyout();
                this.props.onEscape && this.props.onEscape(o);
            },
            _handleContentSearchSelect: function(o, p) {
                if (o.platformFBID.toString() !== c('MercuryConfig').MessengerAppID) {
                    this.uploadURL({
                        attribution_app_id: o.platformFBID,
                        errorDialogParams: {
                            body: j._("There was a problem sending this GIF. Choose another one and try again."),
                            title: j._("Couldn't Send GIF")
                        },
                        external_image_url: o.source.url,
                        preview_url: o.media.preview ? o.media.preview.url : o.media.thumbnail.url,
                        source: o.source
                    });
                } else this.props.onStickerSelect && this.props.onStickerSelect(o.resultID.toString);
            },
            _isPageChat: function() {
                return !!this._getPageID();
            },
            _getPageID: function() {
                return c('getPageIDFromThreadID')(this.props.threadID);
            }
        });
    f.exports = n;
}, null);
__d('ChatTabComposerContainer.react', ['cx', 'fbt', 'ChatConfig', 'ChatTabComposer.react', 'MercuryIDs', 'MercuryThreads', 'MercuryMessageActions', 'MessengerBotsMenuStore', 'P2PGKValues', 'ReactComponentWithPureRenderMixin', 'React', 'MercuryShareAttachmentRenderLocations', 'SimpleXUIDialog', 'StoreAndPropBasedStateMixin', 'getPageIDFromThreadID'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var j = 'right',
        k = c('React').PropTypes,
        l = c('ChatConfig').get('www_messenger_platform_structure_menu'),
        m = c('React').createClass({
            displayName: 'ChatTabComposerContainer',
            mixins: [c('ReactComponentWithPureRenderMixin'), c('StoreAndPropBasedStateMixin')(c('MercuryThreads'), c('MessengerBotsMenuStore'))],
            propTypes: {
                threadID: k.string,
                viewer: k.string.isRequired,
                onFileUploadFail: k.func,
                onPhotoUploadFail: k.func,
                onStickerSelect: k.func,
                onUploadCancel: k.func,
                onUploadComplete: k.func,
                onUploadSubmit: k.func
            },
            statics: {
                calculateState: function(n) {
                    var o = c('MercuryThreads').getForFBID(n.viewer),
                        p = n.threadID ? o.getOrFetch(n.threadID) : null,
                        q = c('P2PGKValues').P2PVisible && n.viewer !== c('MercuryIDs').getUserIDFromThreadID(n.threadID),
                        r = c('getPageIDFromThreadID')(n.threadID),
                        s = !!(l && r && c('MessengerBotsMenuStore').getMenuButtonVisibility(r));
                    return {
                        thread: p,
                        showP2PButton: q,
                        pageID: r,
                        participantIDs: [],
                        placeholder: n.placeholder,
                        showStructuredMenu: s
                    };
                }
            },
            componentDidMount: function() {
                this.props.onMount(this);
            },
            render: function() {
                return (c('React').createElement(c('ChatTabComposer.react'), babelHelpers['extends']({
                    fileUploaderProps: this._getFileUploaderProps(),
                    ref: 'composer',
                    thread: this.state.thread
                }, this.props, {
                    p2pProps: this._getP2PProps(),
                    pageID: this.state.pageID,
                    participantIDs: this.state.participantIDs,
                    photoUploaderProps: this._getPhotoUploaderProps(),
                    placeholder: this.state.placeholder,
                    showP2PButton: this.state.showP2PButton,
                    showStructuredMenu: this.state.showStructuredMenu,
                    stickerButtonProps: this._getStickerButtonProps()
                })));
            },
            onSend: function() {
                this.refs.composer.resetInput();
            },
            setPlaceholder: function(n) {
                this.setState({
                    placeholder: n
                });
            },
            setParticipantIDs: function(n) {
                n = n || [];
                this.setState({
                    participantIDs: n
                });
            },
            getInput: function() {
                return this.refs.composer.getInput();
            },
            isUploading: function() {
                return this.refs.composer.isUploading();
            },
            _getP2PProps: function() {
                if (!this.state.showP2PButton) return {};
                return {
                    button: c('React').createElement('i', {
                        className: "hidden_elem"
                    }),
                    className: "_6ga _6gb",
                    flyoutAlignment: j,
                    referrer: c('MercuryShareAttachmentRenderLocations').CHAT,
                    threadID: this.props.threadID,
                    onTrigger: this.props.onP2PTrigger
                };
            },
            _getStickerButtonProps: function() {
                var n = {
                    className: "_6gb _6gf",
                    flyoutAlignment: j,
                    threadID: this.props.threadID,
                    onStickerSelect: this.props.onStickerSelect
                };
                return n;
            },
            _getPhotoUploaderProps: function() {
                var n = {
                    className: "_6gd",
                    customUI: true,
                    imageClassName: "hidden_elem",
                    linkClassName: "_6gb _6ge",
                    onLastUploadCancel: this._handleUploadCancel,
                    onAllUploadsComplete: this._handleUploadComplete,
                    onLastUploadFail: this._handlePhotoUploadFail,
                    onUploadError: this._handleUploadError,
                    onSubmit: this._handleUploadSubmit
                };
                return n;
            },
            _getFileUploaderProps: function() {
                var n = this._getPhotoUploaderProps();
                n.linkClassName = "_6gb _6gg";
                n.imagesOnly = false;
                n.onLastUploadFail = this._handleFileUploadFail;
                return n;
            },
            _handleUploadComplete: function(n, o) {
                c('MercuryMessageActions').getForFBID(this.props.viewer).confirmAttachmentPlaceholder(o.upload_id, o);
                this.props.onUploadComplete && this.props.onUploadComplete(o);
            },
            _handleUploadError: function(n) {
                var o = void 0,
                    p = void 0;
                switch (n.error) {
                    case 'size-exceeded':
                        o = i._("The file you have selected is too large");
                        p = i._("The file you have selected is too large. The maximum size is 25MB.");
                        break;
                    default:
                        o = i._("File Upload Failed");
                        p = i._("Please try again. There was a problem uploading the file.");
                }
                this._showErrorDialog(o, p);
                this.props.onFileUploadFail && this.props.onFileUploadFail(n);
            },
            _handleUploadCancel: function(n, o) {
                c('MercuryMessageActions').getForFBID(this.props.viewer).cancelAttachmentPlaceholder(o.upload_id, o);
                this.props.onUploadCancel && this.props.onUploadCancel(o);
            },
            _handleFileUploadFail: function(n, o) {
                c('MercuryMessageActions').getForFBID(this.props.viewer).cancelAttachmentPlaceholder(o.upload_id, o);
                var p = i._("File Upload Failed"),
                    q = i._("Please try again. There was a problem uploading the file.");
                if (o.errorDialogParams) {
                    p = o.errorDialogParams.title || p;
                    q = o.errorDialogParams.body || q;
                }
                this._showErrorDialog(p, q);
                this.props.onFileUploadFail && this.props.onFileUploadFail(o);
            },
            _handlePhotoUploadFail: function(n, o) {
                c('MercuryMessageActions').getForFBID(this.props.viewer).cancelAttachmentPlaceholder(o.upload_id, o);
                var p = i._("Photo Upload Failed"),
                    q = i._("Please try again. Make sure you are uploading a valid photo.");
                if (o.errorDialogParams) {
                    p = o.errorDialogParams.title || p;
                    q = o.errorDialogParams.body || q;
                }
                this._showErrorDialog(p, q);
                this.props.onPhotoUploadFail && this.props.onPhotoUploadFail(o);
            },
            _handleUploadSubmit: function(n, o) {
                this.props.onUploadSubmit && this.props.onUploadSubmit(o);
            },
            _showErrorDialog: function(n, o) {
                c('SimpleXUIDialog').show(o, n);
            }
        });
    f.exports = m;
}, null);
__d('ChatCloseButton.react', ['fbt', 'Link.react', 'ReactComponentWithPureRenderMixin', 'React', 'TrackingNodes', 'joinClasses'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('React').PropTypes,
        j = c('React').createClass({
            displayName: 'ChatCloseButton',
            mixins: [c('ReactComponentWithPureRenderMixin')],
            propTypes: {
                onClick: i.func,
                onKeyUp: i.func,
                onMouseDown: i.func,
                active: i.bool
            },
            getDefaultProps: function() {
                return {
                    active: false
                };
            },
            render: function() {
                var k = c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.CLOSE_BUTTON),
                    l = h._("Press Esc to close"),
                    m = h._("Close tab");
                return (c('React').createElement(c('Link.react'), {
                    'aria-label': this.props.active ? l : m,
                    className: c('joinClasses')(this.props.className, 'close', 'button'),
                    'data-ft': k,
                    'data-hover': 'tooltip',
                    'data-tooltip-content': this.props.active ? l : m,
                    'data-tooltip-position': 'above',
                    onClick: this.props.onClick,
                    onKeyUp: this.props.onKeyUp,
                    onMouseDown: this.props.onMouseDown
                }));
            }
        });
    f.exports = j;
}, null);
__d('ChatTitleLink.react', ['cx', 'ChatEditParticipantsUtils', 'Link.react', 'MercuryThreads', 'MercuryThreadTitle.react', 'MessengerAdminGroupUtils', 'React', 'TrackingNodes', 'UserAgent'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var i = c('MercuryThreads').get(),
        j = c('React').PropTypes,
        k = c('React').createClass({
            displayName: 'ChatTitleLink',
            propTypes: {
                href: j.string,
                thread: j.object,
                viewer: j.string
            },
            getDefaultProps: function() {
                return {
                    href: null
                };
            },
            getTitle: function() {
                return this.refs.threadTitle.getTitle();
            },
            render: function() {
                if (!this.props.thread) return null;
                return (c('React').createElement(l, {
                    'aria-level': '3',
                    className: "titlebarText" + (c('UserAgent').isBrowser('Chrome') && !c('UserAgent').isPlatform('Windows') ? ' ' + "fixemoji" : '') + (this.props.href === null ? ' ' + "noLink" : ''),
                    'data-ft': c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.TITLE),
                    'data-hover': 'tooltip',
                    onClick: function(m) {
                        return this._handleClick(m);
                    }.bind(this),
                    href: this.props.href
                }, c('React').createElement(c('MercuryThreadTitle.react'), {
                    ref: 'threadTitle',
                    isNewThread: i.isNewEmptyLocalThread(this.props.thread.thread_id),
                    thread: this.props.thread,
                    useAndSeparator: true,
                    useShortName: !this.props.thread.is_canonical,
                    viewer: this.props.viewer
                })));
            },
            _handleClick: function(m) {
                if (c('MessengerAdminGroupUtils').showParticipantsModal(this.props.thread.is_canonical, i.isEmptyLocalThread(this.props.thread.thread_id), this.props.thread)) {
                    c('ChatEditParticipantsUtils').showParticipantsModal(this.props.thread.thread_id);
                    m.preventDefault();
                }
            }
        }),
        l = function(m) {
            return (m.href ? c('React').createElement(c('Link.react'), m) : c('React').createElement('span', m));
        };
    f.exports = k;
}, null);
__d('ChatTabHeader.react', ['cx', 'ChatCloseButton.react', 'ChatTitleLink.react', 'MercuryTypingAnimation.react', 'React'], function a(b, c, d, e, f, g, h) {
    'use strict';
    var i, j;
    if (c.__markCompiled) c.__markCompiled();
    var k = c('React').PropTypes;
    i = babelHelpers.inherits(l, c('React').PureComponent);
    j = i && i.prototype;

    function l(m) {
        j.constructor.call(this, m);
        this.focus = function() {
            this.refs.root && this.refs.root.focus();
        }.bind(this);
    }
    l.prototype.render = function() {
        return c('React').createElement('div', {
            className: "_15p4" + (!this.props.isRaised ? ' ' + "_15p5" : ''),
            ref: 'root',
            onClick: this.props.onClick,
            onKeyDown: this.props.onKeyDown,
            tabIndex: '0'
        }, c('React').createElement('div', {
            className: "titlebarTextWrapper _15p6"
        }, c('React').createElement(c('ChatTitleLink.react'), {
            href: this.props.isRaised ? this.props.href : undefined,
            thread: this.props.thread,
            viewer: this.props.viewer
        })), this.props.isTyping && !this.props.isRaised ? c('React').createElement(c('MercuryTypingAnimation.react'), {
            className: "_15p8",
            color: 'dark'
        }) : null, c('React').createElement('div', {
            className: "_15p9"
        }, c('React').createElement(c('ChatCloseButton.react'), {
            active: this.props.isActive,
            className: "_3olu _3olv",
            onClick: this.props.onCloseClick,
            onKeyUp: this.props.onCloseKeyUp,
            onMouseDown: this.props.onCloseMouseDown
        })));
    };
    l.propTypes = {
        href: k.string,
        isActive: k.bool.isRequired,
        isRaised: k.bool,
        isTyping: k.bool,
        thread: k.object,
        viewer: k.string.isRequired,
        onClick: k.func.isRequired,
        onCloseClick: k.func.isRequired,
        onCloseKeyUp: k.func.isRequired,
        onCloseMouseDown: k.func.isRequired,
        onKeyDown: k.func.isRequired
    };
    f.exports = l;
}, null);
__d('ChatTabHeaderContainer.react', ['ChatTabHeader.react', 'MercuryThreads', 'React', 'SubscriptionsHandler'], function a(b, c, d, e, f, g) {
    'use strict';
    var h, i;
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes;
    h = babelHelpers.inherits(k, c('React').PureComponent);
    i = h && h.prototype;

    function k(l) {
        i.constructor.call(this, l);
        this.focus = function() {
            this.refs.header.focus();
        }.bind(this);
        this.$ChatTabHeaderContainer1 = new(c('SubscriptionsHandler'))();
        this.state = this.calculateState(l);
    }
    k.prototype.calculateState = function(l) {
        var m = void 0;
        if (l.threadID) m = c('MercuryThreads').getForFBID(l.viewer).getOrFetch(l.threadID);
        return {
            thread: m
        };
    };
    k.prototype.componentWillMount = function() {
        this.$ChatTabHeaderContainer1.addSubscriptions(c('MercuryThreads').addListener('change', function() {
            this.setState(this.calculateState(this.props));
        }.bind(this)));
    };
    k.prototype.componentWillReceiveProps = function(l) {
        this.setState(this.calculateState(l));
    };
    k.prototype.componentWillUnMount = function() {
        this.$ChatTabHeaderContainer1.release();
    };
    k.prototype.render = function() {
        return c('React').createElement(c('ChatTabHeader.react'), {
            isActive: this.props.isActive,
            isRaised: this.props.isRaised,
            isTyping: this.props.isTyping,
            ref: 'header',
            thread: this.state.thread,
            viewer: this.props.viewer,
            onClick: this.props.onClick,
            onCloseClick: this.props.onCloseClick,
            onCloseKeyUp: this.props.onCloseKeyUp,
            onCloseMouseDown: this.props.onCloseMouseDown,
            onKeyDown: this.props.onKeyDown
        });
    };
    k.propTypes = {
        isActive: j.bool.isRequired,
        isRaised: j.bool,
        isTyping: j.bool,
        threadID: j.string,
        viewer: j.string.isRequired,
        onClick: j.func.isRequired,
        onCloseClick: j.func.isRequired,
        onCloseKeyUp: j.func.isRequired,
        onCloseMouseDown: j.func.isRequired,
        onKeyDown: j.func.isRequired
    };
    f.exports = k;
}, null);
__d('ChatTabSheetListener', ['invariant', 'ChatPrivacyActionController', 'MercuryIDs', 'MercuryParticipants', 'MercuryThreadInformer', 'MercuryThreads', 'MercuryViewer'], function a(b, c, d, e, f, g, h) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function i(j, k) {
        this.$ChatTabSheetListener1 = k;
        this.$ChatTabSheetListener3 = j;
        this.$ChatTabSheetListener4 = c('MercuryIDs').getUserIDFromThreadID(this.$ChatTabSheetListener3);
        c('MercuryThreadInformer').get().subscribe('threads-updated', function() {
            return this.$ChatTabSheetListener5();
        }.bind(this));
        if (this.$ChatTabSheetListener4) this.$ChatTabSheetListener2 = new(c('ChatPrivacyActionController'))(this.$ChatTabSheetListener4, function(l) {
            return this.$ChatTabSheetListener6(l);
        }.bind(this));
    }
    i.prototype.destroy = function() {
        this.$ChatTabSheetListener2 && this.$ChatTabSheetListener2.destroy();
    };
    i.prototype.$ChatTabSheetListener5 = function() {
        var j = c('MercuryThreads').get();
        j.getThreadMeta(this.$ChatTabSheetListener3, function(k) {
            var l = c('MercuryViewer').getID(),
                m = k.participants.filter(function(n) {
                    return n !== l;
                });
            m.length < 1 && !j.isNewEmptyLocalThread(this.$ChatTabSheetListener3) ? this.$ChatTabSheetListener1.openNoRecipientsSheet() : this.$ChatTabSheetListener1.closeNoRecipientsSheet();
        }.bind(this));
    };
    i.prototype.$ChatTabSheetListener6 = function(j) {
        switch (j) {
            case c('ChatPrivacyActionController').OFFLINE:
                this.$ChatTabSheetListener1.closeUserBlockedSheet();
                this.$ChatTabSheetListener1.openOfflineSheet();
                break;
            case c('ChatPrivacyActionController').NORMAL:
                this.$ChatTabSheetListener1.closeUserBlockedSheet();
                this.$ChatTabSheetListener1.closeOfflineSheet();
                break;
            case c('ChatPrivacyActionController').BLOCKED:
                this.$ChatTabSheetListener1.closeOfflineSheet();
                !!!this.$ChatTabSheetListener4 ? h(0) : void 0;
                c('MercuryParticipants').get(c('MercuryIDs').getParticipantIDFromUserID(this.$ChatTabSheetListener4), function(k) {
                    k.is_friend ? this.$ChatTabSheetListener1.openUserBlockedSheet() : this.$ChatTabSheetListener1.closeUserBlockedSheet();
                }.bind(this));
                break;
        }
    };
    f.exports = i;
}, null);
__d('ChatTabSheetController', ['Bootloader', 'ChatTabSheetListener', 'Deferred', 'MercurySheetPolicy'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = function(i, j, k, l) {
        this._threadID = i;
        this._rootElement = j;
        this._tabElement = k;
        this._view = l;
        this._deferred = new(c('Deferred'))();
        this._isLoading = false;
        this._listener = new(c('ChatTabSheetListener'))(this._threadID, this);
    };
    Object.assign(h.prototype, {
        openAddFriendsSheet: function() {
            this._load(function() {
                this._addFriendsTabSheet.open();
            }.bind(this));
        },
        openMessageBlockedTabSheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatThreadIsMessageBlockedSheet);
            }.bind(this));
        },
        getAddFriendsParticipants: function() {
            return this._addFriendsTabSheet ? this._addFriendsTabSheet.getParticipants() : [];
        },
        openNameConversationSheet: function(i) {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatNameConversationTabSheet, {
                    automatic: i
                });
            }.bind(this));
        },
        openReadOnlySheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatReadOnlyTabSheet);
            }.bind(this));
        },
        openPermanentReadOnlySheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatReadOnlyPermanentTabSheet);
            }.bind(this));
        },
        openNewMessagesSheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatNewMessagesTabSheet);
            }.bind(this));
        },
        openUploadWarningTabSheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatUploadWarningTabSheet);
            }.bind(this));
        },
        openThreadIsMutedTabSheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatThreadIsMutedTabSheet);
            }.bind(this));
        },
        openEmployeeAwaySheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatEmployeeAwaySheet);
            }.bind(this));
        },
        openBypassFocusSheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatUserFocusBypassSheet);
            }.bind(this));
        },
        openUserFocusSheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatUserFocusSheet);
            }.bind(this));
        },
        openUserTimezoneSheet: function(i) {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatUserTimezoneSheet, i);
            }.bind(this));
        },
        openOfflineSheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatOfflineTabSheet);
            }.bind(this));
        },
        openUserBlockedSheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatUserBlockedTabSheet);
            }.bind(this));
        },
        openNoRecipientsSheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatNoRecipientsTabSheet);
            }.bind(this));
        },
        openSecretModeSheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatThreadSecretModeSheet);
            }.bind(this));
        },
        openPageResponsivenessSheet: function(i) {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatPageResponsivenessIndicator, {
                    description: i
                });
            }.bind(this));
        },
        openChatEventReminderTabSheet: function() {
            this._load(function() {
                this._sheetView.open(c('MercurySheetPolicy').sheets.ChatEventReminderTabSheet);
            }.bind(this));
        },
        closeAddFriendsSheet: function() {
            this._lazy(function() {
                this._addFriendsTabSheet.close();
            }.bind(this));
        },
        closeThreadIsMutedTabSheet: function() {
            this._lazy(function() {
                this._sheetView.close(c('MercurySheetPolicy').sheets.ChatThreadIsMutedTabSheet);
            }.bind(this));
        },
        closeUserBlockedSheet: function() {
            this._lazy(function() {
                this._sheetView.close(c('MercurySheetPolicy').sheets.ChatUserBlockedTabSheet);
            }.bind(this));
        },
        closeUploadWarningTabSheet: function() {
            this._lazy(function() {
                this._sheetView.close(c('MercurySheetPolicy').sheets.ChatUploadWarningTabSheet);
            }.bind(this));
        },
        closeSecretModeSheet: function() {
            this._lazy(function() {
                this._sheetView.close(c('MercurySheetPolicy').sheets.ChatThreadSecretModeSheet);
            }.bind(this));
        },
        closeMessageBlockedTabSheet: function() {
            this._lazy(function() {
                this._sheetView.close(c('MercurySheetPolicy').sheets.ChatThreadIsMessageBlockedSheet);
            }.bind(this));
        },
        closeOfflineSheet: function() {
            this._lazy(function() {
                this._sheetView.close(c('MercurySheetPolicy').sheets.ChatOfflineTabSheet);
            }.bind(this));
        },
        closeNoRecipientsSheet: function() {
            this._lazy(function() {
                this._sheetView.close(c('MercurySheetPolicy').sheets.ChatNoRecipientsTabSheet);
            }.bind(this));
        },
        closeNewMessagesSheet: function() {
            this._lazy(function() {
                this._sheetView.close(c('MercurySheetPolicy').sheets.ChatNewMessagesTabSheet);
            }.bind(this));
        },
        closeAutomaticNameConversationSheet: function() {
            this._lazy(function() {
                this._sheetView.close(c('MercurySheetPolicy').sheets.ChatNameConversationTabSheet);
            }.bind(this));
        },
        closePageResponsivenessSheet: function() {
            this._lazy(function() {
                this._sheetView.close(c('MercurySheetPolicy').sheets.ChatPageResponsivenessIndicator);
            }.bind(this));
        },
        closeChatEventReminderTabSheet: function() {
            this._lazy(function() {
                this._sheetView.close(c('MercurySheetPolicy').sheets.ChatEventReminderTabSheet);
            }.bind(this));
        },
        onResize: function(i) {
            this._lazy(function() {
                this._sheetView.subscribe('resize', i);
            }.bind(this));
        },
        onTokensChanged: function(i) {
            this._lazy(function() {
                this._addFriendsTabSheet.subscribe('chat/tokens-changed', i);
            }.bind(this));
        },
        onEscape: function(i) {
            this._lazy(function() {
                this._addFriendsTabSheet.subscribe('esc-pressed', i);
            }.bind(this));
        },
        destroy: function() {
            this._listener && this._listener.destroy();
            this._sheetView && this._sheetView.destroy();
        },
        _load: function(i) {
            this._bootload();
            this._deferred.done(i);
        },
        _lazy: function(i) {
            this._deferred.done(i);
        },
        _bootload: function() {
            if (this._isLoading) return;
            this._isLoading = true;
            c('Bootloader').loadModules(["ChatAddFriendsTabSheet", "MercurySheetView"], function(i, j) {
                this._sheetView = new j(this._threadID, this._rootElement, this._tabElement, this._view);
                this._addFriendsTabSheet = new i(this._threadID, this._rootElement, this._sheetView, this._view);
                this._deferred.resolve();
            }.bind(this), 'ChatTabSheetController');
        }
    });
    f.exports = h;
}, null);
__d("XMNCommercePostbackCTAController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/messages\/commerce\/postback\/", {
        cta_id: {
            type: "String",
            required: true
        }
    });
}, null);
__d('MNCommercePostbackCTADataManager', ['AsyncRequest', 'BanzaiODS', 'CurrentUser', 'MercuryConfig', 'MercuryMessageActions', 'MercuryMessageObject', 'MercurySourceType', 'XMNCommercePostbackCTAController'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = c('MercuryMessageActions').get();
    i.prototype.send = function(j) {
        var k = c('XMNCommercePostbackCTAController').getURIBuilder().setString('cta_id', j).getURI();
        new(c('AsyncRequest'))().setURI(k).setMethod('post').send();
    };
    i.prototype.sendAndConfirm = function(j, k, l, m) {
        this.send(j);
        if (!c('MercuryConfig').WWWMessengerSendMessageOnPostbackGK) return;
        if (!l) {
            c('BanzaiODS').bumpEntityKey('messenger_commerce', 'confirm_message_failed.empty_threadID');
        } else {
            var n = new(c('MercuryMessageObject'))(c('CurrentUser').getID());
            h.send(n.constructCTAConfirmationMessageObject(k, c('MercurySourceType').TITAN_WEB, l, m));
        }
    };

    function i() {}
    f.exports = new i();
}, null);
__d('MercuryCanonicalGroupThreadManager', ['Bootloader', 'KeyedCallbackManager', 'MercuryIDs', 'MercuryServerPayloadPreprocessor', 'MercurySingletonProvider', 'MercuryThreads', 'MercuryServerDispatcher', 'SubscriptionsHandler'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(j) {
        this.$MercuryCanonicalGroupThreadManager1 = j;
        this.$MercuryCanonicalGroupThreadManager2 = new(c('KeyedCallbackManager'))();
        this.$MercuryCanonicalGroupThreadManager3 = c('MercuryServerPayloadPreprocessor').getForFBID(this.$MercuryCanonicalGroupThreadManager1);
        this.$MercuryCanonicalGroupThreadManager6 = c('MercuryThreads').getForFBID(this.$MercuryCanonicalGroupThreadManager1);
        this.$MercuryCanonicalGroupThreadManager4 = {};
        this.$MercuryCanonicalGroupThreadManager7();
        this.$MercuryCanonicalGroupThreadManager8();
    }
    h.getForFBID = function(j) {
        return i.getForFBID(j);
    };
    h.get = function() {
        return i.get();
    };
    h.prototype.getCanonicalGroupThreadIDForParticipants = function(j, k) {
        j = this.$MercuryCanonicalGroupThreadManager9(j);
        var l = this.$MercuryCanonicalGroupThreadManager10(j),
            m = this.$MercuryCanonicalGroupThreadManager2.executeOrEnqueue(l, k);
        this.$MercuryCanonicalGroupThreadManager11(j);
        return m;
    };
    h.prototype.unsubscribe = function(j) {
        if (j) this.$MercuryCanonicalGroupThreadManager2.unsubscribe(j);
    };
    h.prototype.$MercuryCanonicalGroupThreadManager10 = function(j) {
        return j.sort().join(',');
    };
    h.prototype.$MercuryCanonicalGroupThreadManager12 = function(j, k) {
        var l = c('MercuryIDs').getThreadIDFromThreadFBID(k);
        this.$MercuryCanonicalGroupThreadManager2.setResource(j, l);
        this.$MercuryCanonicalGroupThreadManager4[l] = j;
    };
    h.prototype.$MercuryCanonicalGroupThreadManager11 = function(j) {
        var k = {
            canonical_group_key: this.$MercuryCanonicalGroupThreadManager10(j),
            participants: j
        };
        c('MercuryServerDispatcher').trySend('/ajax/mercury/search_canonical_groups.php', k, null, this.$MercuryCanonicalGroupThreadManager1);
    };
    h.prototype.$MercuryCanonicalGroupThreadManager7 = function() {
        c('MercuryServerDispatcher').registerEndpoints({
            '/ajax/mercury/search_canonical_groups.php': {
                request_user_id: this.$MercuryCanonicalGroupThreadManager1,
                mode: c('MercuryServerDispatcher').IMMEDIATE,
                handler: function(j) {
                    this.handleUpdate(j);
                }.bind(this)
            }
        });
    };
    h.prototype.$MercuryCanonicalGroupThreadManager9 = function(j) {
        if (j.indexOf(this.$MercuryCanonicalGroupThreadManager1) === -1) j.push(this.$MercuryCanonicalGroupThreadManager1);
        return j;
    };
    h.prototype.handleUpdate = function(j) {
        if (j.mercury_payload) this.$MercuryCanonicalGroupThreadManager3.handleUpdate(j.mercury_payload);
        var k = j.canonical_group;
        if (k)
            for (var l in k) this.$MercuryCanonicalGroupThreadManager12(l, k[l]);
    };
    h.prototype.getNow = function(j) {
        var k = this.$MercuryCanonicalGroupThreadManager10(this.$MercuryCanonicalGroupThreadManager9(j));
        return this.$MercuryCanonicalGroupThreadManager2.getResource(k);
    };
    h.prototype.$MercuryCanonicalGroupThreadManager8 = function() {
        c('Bootloader').loadModules(["MercuryThreadInformer"], function(j) {
            var k = j.getForFBID(this.$MercuryCanonicalGroupThreadManager1),
                l = new(c('SubscriptionsHandler'))();
            l.addSubscriptions(k.subscribe('threads-deleted', function(m, n) {
                for (var o in n)
                    if (this.$MercuryCanonicalGroupThreadManager4[o]) {
                        this.$MercuryCanonicalGroupThreadManager2.setResource(this.$MercuryCanonicalGroupThreadManager4[o], undefined);
                        delete this.$MercuryCanonicalGroupThreadManager4[o];
                    }
            }.bind(this)));
            this.$MercuryCanonicalGroupThreadManager5 = l;
        }.bind(this), 'MercuryCanonicalGroupThreadManager');
    };
    var i = new(c('MercurySingletonProvider'))(h);
    f.exports = h;
}, null);
__d('MessengerEmojiUsageUtils', ['MessengerSupportedEmoji'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        findAllEmojis: function(i) {
            var j = [];
            while (i.length > 0) {
                var k = c('MessengerSupportedEmoji').findEmoji(i);
                if (!k) break;
                var l = k.emoji.split('_').map(function(m) {
                    return parseInt(m, 16);
                });
                j.push(l);
                i = i.substr(k.index + k[0].length);
            }
            return j;
        }
    };
    f.exports = h;
}, null);
__d("XPagesMercuryIndicatorController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/pages\/messaging\/mercury\/indicator\/", {});
}, null);
__d('PagesMercuryChatTabIndicatorHandler', ['AsyncRequest', 'AvailableListConstants', 'ChatPrivacyActionController', 'ChatVisibility', 'DOM', 'FBID', 'MercuryIDs', 'PresencePrivacy', 'XPagesMercuryIndicatorController'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    h.tryCreateHandler = function(i, j, k, l) {
        var m = c('MercuryIDs').getUserIDFromThreadID(i);
        if (!m || c('FBID').isUser(m)) return null;
        return new h(m, j, k, l);
    };

    function h(i, j, k, l) {
        this.$PagesMercuryChatTabIndicatorHandler2 = false;
        this.$PagesMercuryChatTabIndicatorHandler3 = false;
        this.$PagesMercuryChatTabIndicatorHandler4 = false;
        this.$PagesMercuryChatTabIndicatorHandler5 = j;
        this.$PagesMercuryChatTabIndicatorHandler6 = false;
        this.$PagesMercuryChatTabIndicatorHandler7 = i;
        this.$PagesMercuryChatTabIndicatorHandler10 = k;
        this.$PagesMercuryChatTabIndicatorHandler9 = l;
        this.$PagesMercuryChatTabIndicatorHandler8 = new(c('ChatPrivacyActionController'))(i, function(m) {
            return this.$PagesMercuryChatTabIndicatorHandler11(m);
        }.bind(this));
    }
    h.prototype.__getEnableTimeSwitch = function() {
        return this.$PagesMercuryChatTabIndicatorHandler2;
    };
    h.prototype.__getIsShown = function() {
        return this.$PagesMercuryChatTabIndicatorHandler4;
    };
    h.prototype.__getPageOnlineStatus = function() {
        return this.$PagesMercuryChatTabIndicatorHandler5;
    };
    h.prototype.__getShouldPreventFutureShown = function() {
        return this.$PagesMercuryChatTabIndicatorHandler6;
    };
    h.prototype.__getTargetID = function() {
        return this.$PagesMercuryChatTabIndicatorHandler7;
    };
    h.prototype.__getIsChecking = function() {
        return this.$PagesMercuryChatTabIndicatorHandler3;
    };
    h.prototype.__getResponsivenessDescription = function() {
        return this.$PagesMercuryChatTabIndicatorHandler1;
    };
    h.prototype.checkResponsiveness = function() {
        if (this.$PagesMercuryChatTabIndicatorHandler3) return;
        var i = c('XPagesMercuryIndicatorController').getURIBuilder().getURI();
        this.$PagesMercuryChatTabIndicatorHandler3 = true;
        new(c('AsyncRequest'))().setURI(i).setMethod('POST').setData({
            page_id: this.$PagesMercuryChatTabIndicatorHandler7
        }).setHandler(function(j) {
            this.$PagesMercuryChatTabIndicatorHandler3 = false;
            var k = j.payload;
            if (k.responsiveness) this.$PagesMercuryChatTabIndicatorHandler12(k.responsiveness, k.enableTimeSwitch);
        }.bind(this)).send();
    };
    h.prototype.hideIndicator = function() {
        this.$PagesMercuryChatTabIndicatorHandler13(false);
    };
    h.prototype.hideIndicatorAndPreventFutureShow = function() {
        this.$PagesMercuryChatTabIndicatorHandler13(true);
    };
    h.prototype.$PagesMercuryChatTabIndicatorHandler13 = function(i) {
        this.$PagesMercuryChatTabIndicatorHandler6 = this.$PagesMercuryChatTabIndicatorHandler6 || i;
        if (this.$PagesMercuryChatTabIndicatorHandler4) {
            this.$PagesMercuryChatTabIndicatorHandler4 = false;
            this.$PagesMercuryChatTabIndicatorHandler9();
        }
    };
    h.prototype.showIndicator = function() {
        if (this.$PagesMercuryChatTabIndicatorHandler4 || this.$PagesMercuryChatTabIndicatorHandler5 !== c('AvailableListConstants').OFFLINE || !this.$PagesMercuryChatTabIndicatorHandler1 || !c('ChatVisibility').isOnline() || !c('PresencePrivacy').allows(this.targetID) || this.$PagesMercuryChatTabIndicatorHandler6) return;
        this.$PagesMercuryChatTabIndicatorHandler4 = true;
        this.$PagesMercuryChatTabIndicatorHandler10(this.$PagesMercuryChatTabIndicatorHandler1);
    };
    h.prototype.notifyPageOnlineStatusChanged = function(i) {
        if (this.$PagesMercuryChatTabIndicatorHandler5 === i) return;
        this.$PagesMercuryChatTabIndicatorHandler5 = i;
        if (!this.$PagesMercuryChatTabIndicatorHandler2) return;
        switch (i) {
            case c('AvailableListConstants').ACTIVE:
                this.hideIndicator();
                break;
            default:
                this.showIndicator();
                break;
        }
    };
    h.prototype.$PagesMercuryChatTabIndicatorHandler12 = function(i, j) {
        this.$PagesMercuryChatTabIndicatorHandler1 = i;
        this.$PagesMercuryChatTabIndicatorHandler2 = j;
        this.showIndicator();
    };
    h.prototype.$PagesMercuryChatTabIndicatorHandler11 = function(i) {
        switch (i) {
            case c('ChatPrivacyActionController').OFFLINE:
            case c('ChatPrivacyActionController').BLOCKED:
                this.$PagesMercuryChatTabIndicatorHandler13(true);
                break;
        }
    };
    f.exports = h;
}, null);
__d("XMNCommercePageNullStateCTAController", ["XController"], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = c("XController").create("\/messages\/commerce\/page\/nullstate\/", {});
}, null);
__d('getTitleHrefFromThreadID', ['MercuryIDs', 'MercuryParticipants', 'WebMessengerThreadPermalinks'], function a(b, c, d, e, f, g) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();

    function h(i, j) {
        var k = c('MercuryIDs').getUserIDFromThreadID(i);
        if (k) {
            c('MercuryParticipants').get(c('MercuryIDs').getParticipantIDFromUserID(k), function(l) {
                if (l.href) {
                    j(l.href);
                } else j(c('WebMessengerThreadPermalinks').getThreadURIFromUserID(k));
            });
        } else c('WebMessengerThreadPermalinks').getThreadURI(i, j);
    }
    f.exports = h;
}, null);
__d('ChatTabView', ['csx', 'cx', 'fbt', 'Promise', 'AsyncRequest', 'AsyncSignal', 'AvailableListConstants', 'BootloadedComponent.react', 'Bootloader', 'ChatBehavior', 'ChatConfig', 'ChatNubLogger', 'ChatOpenTab', 'ChatPerfInstrumentation', 'ChatTabActions', 'ChatTabBlinking', 'ChatTabComposerContainer.react', 'ChatTabHeaderContainer.react', 'ChatTabLazyFocus', 'ChatTabMessagesView', 'ChatTabSheetController', 'ChatTabViewEvents', 'ChatTabViewInstances', 'ChatTitleLink.react', 'ChatVisibility', 'CSS', 'CurrentUser', 'Dock', 'DOM', 'DOMQuery', 'DragDropTarget', 'EmojiLikeUtils', 'EmojiState', 'Event', 'FBID', 'JSResource', 'Keys', 'LogHistory', 'MercuryBlockedParticipants', 'MercuryCanonicalGroupThreadManager', 'MercuryConfig', 'MercuryIDs', 'MercuryParticipants', 'MercuryShareAttachmentRenderLocations', 'MercurySourceType', 'MercuryThreadInfo', 'MercuryThreadTitle.react', 'MercuryTypingAnimation.react', 'MercuryTypingReceiver', 'MercuryViewer', 'MessageRequestUtils', 'MessagingTag', 'MessengerAdminGroupUtils', 'MessengerEmojiUsageUtils', 'MNCommercePostbackCTADataManager', 'NubController', 'PagesMercuryChatTabIndicatorHandler', 'Parent', 'PhotosUploadWaterfall', 'PresenceStatus', 'React', 'ReactComponentRenderer', 'ReactDOM', 'Run', 'Scroll', 'ShortProfiles', 'SimpleXUIDialog', 'SiteData', 'Style', 'SubscriptionsHandler', 'SyntheticEvent', 'ChatTabTemplates', 'TooltipData', 'TypingDetectorController', 'UserAgent_DEPRECATED', 'WaterfallIDGenerator', 'WebMessengerThreadPermalinks', 'WorkFileUploadsGating', 'WorkFocusModeController', 'WorkModeConfig', 'createCancelableFunction', 'convertMIGColorToFIGColor', 'emptyFunction', 'getActiveElement', 'getTitleHrefFromThreadID', 'getVendorPrefixedEventName', 'ifRequired', 'isEmpty', 'isInFocusMode', 'requireWeak', 'setIntervalAcrossTransitions', 'MercuryMessageObject', 'MercuryMessages', 'MercuryServerRequests', 'MercuryThreadActions', 'MercuryThreadIDMap', 'MercuryThreadInformer', 'MercuryThreads', 'MercuryMessageActions', 'XMNCommercePageNullStateCTAController'], function a(b, c, d, e, f, g, h, i, j) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var k = c('MercuryTypingReceiver').get(),
        l = c('MercuryMessageObject').get(),
        m = c('MercuryMessages').get(),
        n = c('MercuryServerRequests').get(),
        o = c('MercuryThreadActions').get(),
        p = c('MercuryThreadIDMap').get(),
        q = c('MercuryThreadInformer').get(),
        r = c('MercuryThreads').get(),
        s = c('MercuryMessageActions').get(),
        t = /^\s*$/,
        u = c('WorkFocusModeController').WorkFocusMode,
        v = c('ChatTabViewInstances'),
        w = 960,
        x = 10,
        y = '\n',
        z = /\D+/g,
        aa = c('MercuryConfig').ChatMessengerStyles,
        ba = c('MercuryConfig').CloseAnimation,
        ca = c('ChatConfig').get('web_messenger_thread_null_state_cta'),
        da = c('ChatConfig').get('always_enable_cta_instead_of_composer'),
        ea = c('ChatConfig').get('chat_send_link_without_share'),
        fa = c('ChatConfig').get('chat_full_react_header'),
        ga = c('LogHistory').getInstance('chat_tab_view');
    c('requireWeak')('AvailableList', function(wa) {
        wa.subscribe(c('AvailableListConstants').ON_AVAILABILITY_CHANGED, ta);
    });

    function ha(wa, xa) {
        var ya = c('DOM').create('div'),
            za = [];
        xa = xa && xa.filter(function(cb) {
            return cb != c('MercuryViewer').getID();
        });
        if (c('isEmpty')(xa)) return c('TooltipData').remove(wa);
        var ab = xa.length,
            bb = ab - x;
        if (bb > 1) xa = xa.slice(0, x);
        c('MercuryParticipants').getMulti(xa, function(cb) {
            for (var db in cb) {
                var eb = cb[db];
                za.push(eb.name);
            }
            if (bb > 1) {
                var fb = j._("and {number of hidden chat participants} more.", [j.param('number of hidden chat participants', bb)]);
                za.push(fb);
            }
            c('TooltipData').set(wa, za.join(y), 'above');
        });
    }

    function ia(wa) {
        var xa = c('MercuryIDs').tokenize(wa);
        switch (xa.type) {
            case 'user':
                return c('ChatTabTemplates')[':fb:mercury:chat:user-tab'].build();
        }
        return c('ChatTabTemplates')[':fb:mercury:chat:multichat-tab'].build();
    }

    function ja(wa) {
        var xa = wa._getInputValue();
        c('EmojiState').updateRecentlyUsed(c('MessengerEmojiUsageUtils').findAllEmojis(xa));
        var ya = wa._filesUploader,
            za = ya ? ya.getAttachments() : [];
        if (oa(wa)) la(wa, xa, za, function(ab) {
            ab = va(ab, ya);
            s.send(ab, function(bb) {
                var cb = r.getThreadMetaNow(bb);
                if (cb && c('MessageRequestUtils').isMessageRequest(cb)) o.movePendingToInbox(bb);
                if (cb && cb.other_user_fbid && !c('FBID').isUser(cb.other_user_fbid)) c('ChatTabViewEvents').inform('chat-send-to-page', {
                    pageID: cb.other_user_fbid
                });
            });
            ya && ya.removeAttachments();
            if (wa._sharePreview) wa._sharePreview.setProps({
                share: null,
                uri: null
            });
            if (ea && wa._urlScraperData) delete wa._urlScraperData;
            wa._composer && wa._composer.onSend();
            wa._typingDetector && wa._typingDetector.resetState();
            if (wa._messagesView) {
                wa._messagesView.scrollToBottom();
                wa._messagesView.setShouldScrollToBottom(true);
                wa.tryMarkAsRead();
            }
        });
    }

    function ka(wa, xa) {
        if (xa === 0) return;
        qa(wa, c('PhotosUploadWaterfall').POST_PUBLISHED, {
            count: xa
        });
        wa._waterfallID = c('WaterfallIDGenerator').generate();
    }

    function la(wa, xa, ya, za) {
        r.getThreadMeta(wa._threadID, function(ab) {
            var bb;
            if (ab && ab.is_canonical && !c('MercuryThreadInfo').canReply(ab)) {
                wa._showMessageBlockedDialog(ab);
                return;
            }
            var cb = c('MercurySourceType').CHAT_WEB,
                db = l.constructUserGeneratedMessageObject(xa, cb, wa._threadID);
            if (ya.length > 0) {
                db.has_attachment = true;
                db.raw_attachments = ya;
            }
            if (wa._sharePreview && wa._sharePreview.component) {
                var eb = wa._sharePreview.component.getShareData();
                if (eb) {
                    db.has_attachment = true;
                    db.shareable_attachment = eb;
                }
            }
            if (r.isNewEmptyLocalThread(wa._threadID)) {
                var fb = wa._sheetController.getAddFriendsParticipants();
                wa._sheetController.closeAddFriendsSheet();
                if (fb === null || fb.length === 0) return;
                fb = fb.filter(function(ib) {
                    return ib != c('MercuryViewer').getID();
                });
                if (fb.length === 0) {
                    db.thread_id = c('MercuryIDs').getThreadIDFromUserID(c('CurrentUser').getID());
                } else if (fb.length === 1) {
                    db.thread_id = c('MercuryIDs').getThreadIDFromParticipantID(fb[0]);
                } else {
                    var gb = wa.getMessagesView().getThreadID();
                    if (gb != wa._threadID) db.thread_id = gb;
                    o.addParticipants(wa._threadID, fb);
                }
            }
            if (r.isEmptyLocalThread(wa._threadID)) {
                db.offline_threading_id = c('MercuryIDs').tokenize(wa._threadID).value;
                var hb = r.getThreadMetaNow(ab.thread_id);
                db.specific_to_list = Array.from(hb.participants);
            }
            if (db != undefined) db.signatureID = wa._signatureID;
            db.ui_push_phase = c('SiteData').push_phase;
            za(db);
            if (wa._threadID !== db.thread_id && !wa.isUploading())(function() {
                var ib = wa._getInputValue();
                if (u && c('isInFocusMode')() && !c('isInFocusMode')(wa._threadID)) u.addBypassFocusModeForThread(db.thread_id);
                c('ChatTabActions').closeTab(wa._threadID);
                c('ChatOpenTab').openThread(db.thread_id, 'ChatTabView', null, xa ? c('emptyFunction') : function(jb) {
                    return jb.appendTextToInput(ib);
                });
            })();
        });
    }

    function ma(wa) {
        wa._blocked = true;
        wa._sheetController.openUploadWarningTabSheet();
    }

    function na(wa) {
        return wa.isUploading();
    }

    function oa(wa) {
        var xa = wa._getInputValue();
        if (!t.test(xa)) return true;
        var ya = wa._filesUploader;
        if (ya && (ya.getAttachments().length > 0 || ya.getImageFiles().length > 0 || ya.getAnimatedImageFiles().length > 0 || ya.getVideoFiles().length > 0 || ya.getAudioFiles().length > 0 || ya.getFiles().length > 0)) return true;
        if (wa._sharePreview && wa._sharePreview.component.getShareData()) return true;
        return false;
    }

    function pa(wa) {
        wa._nubController.flyoutContentChanged();
        var xa = wa._getNode('attachmentShelf');
        c('Scroll').setTop(xa, xa.scrollHeight);
    }

    function qa(wa, xa, ya) {
        c('PhotosUploadWaterfall').sendSignal(babelHelpers['extends']({
            qn: wa._waterfallID,
            step: xa,
            uploader: c('PhotosUploadWaterfall').APP_CHAT
        }, ya || {}));
    }

    function ra(wa, xa, ya, za, ab) {
        if (xa) n.ensureThreadIsFetched(xa);
        this._threadID = wa;
        this._signatureID = ya;
        this._eventListeners = [];
        this._onlineStatus = c('AvailableListConstants').OFFLINE;
        this._tabTemplate = ia(wa);
        this._tabElem = this._tabTemplate.getRoot();
        if (ab && ab.getTabElem()) {
            this.insertBefore(ab);
        } else this.appendTo(za);
        this._messagesView = null;
        this._customColor = null;
        this._titlebar = this._getNode('nubFlyoutTitlebar');
        this._nubButton = c('DOMQuery').scry(this._tabElem, ".fbNubButton")[0];
        this._waterfallID = c('WaterfallIDGenerator').generate();
        this._subscriptionsHandler = new(c('SubscriptionsHandler'))();
        this._canonicalGroupSearchSubscriptionID = null;
        this._initializeSheetController();
        var bb = [c('emptyFunction'), this._initializeDockUIListeners.bind(this), this.updateAvailableStatus.bind(this), this.updateTab.bind(this), this._initializeP2PChatThreadBannerContainer.bind(this)],
            cb = this._initializeHeader.bind(this);
        this._flyoutInitializers = [this._initializeUIListeners.bind(this), this._initializeTitleHREF.bind(this), this._initializeInput.bind(this), this._initializeDragDropTarget.bind(this), this._initializeUnloadListeners.bind(this), this._initializePageMessagingIndicator.bind(this), this._initializePagesGreeting.bind(this)];
        if (fa) {
            bb.push(cb);
        } else this._flyoutInitializers.unshift(cb);
        for (var db = bb, eb = Array.isArray(db), fb = 0, db = eb ? db : db[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
            var gb;
            if (eb) {
                if (fb >= db.length) break;
                gb = db[fb++];
            } else {
                fb = db.next();
                if (fb.done) break;
                gb = fb.value;
            }
            var hb = gb;
            hb();
        }
        v.set(wa, this);
        this._logOpenTab();
    }

    function sa(wa) {
        if (wa._photoUploader && wa._photoUploader.isUploading()) qa(wa, c('PhotosUploadWaterfall').CANCEL_DURING_UPLOAD);
    }

    function ta() {
        for (var wa = v.values(), xa = Array.isArray(wa), ya = 0, wa = xa ? wa : wa[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
            var za;
            if (xa) {
                if (ya >= wa.length) break;
                za = wa[ya++];
            } else {
                ya = wa.next();
                if (ya.done) break;
                za = ya.value;
            }
            var ab = za;
            ab.updateAvailableStatus();
            ab.updateTitlebarTooltip();
        }
    }
    c('ChatBehavior').subscribe(c('ChatBehavior').ON_CHANGED, function() {
        for (var wa = v.keys(), xa = Array.isArray(wa), ya = 0, wa = xa ? wa : wa[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
            var za;
            if (xa) {
                if (ya >= wa.length) break;
                za = wa[ya++];
            } else {
                ya = wa.next();
                if (ya.done) break;
                za = ya.value;
            }
            var ab = za;
            r.getThreadMeta(ab, function(bb) {
                v.get(ab)._updateUnreadCount(bb);
            });
        }
    });
    k.addRetroactiveListener('state-changed', function(wa) {
        for (var xa in wa) {
            var ya = wa[xa] && wa[xa].length,
                za = v.get(xa);
            za && za.showTypingIndicator(ya);
        }
    });
    q.subscribe('threads-updated', function(wa, xa) {
        for (var ya = v.keys(), za = Array.isArray(ya), ab = 0, ya = za ? ya : ya[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
            var bb;
            if (za) {
                if (ab >= ya.length) break;
                bb = ya[ab++];
            } else {
                ab = ya.next();
                if (ab.done) break;
                bb = ab.value;
            }
            var cb = bb,
                db = v.get(cb);
            xa[cb] && db.updateTab();
            if (db._newThreadIDFromPhotoUpload && !db.isUploading() && xa[db._newThreadIDFromPhotoUpload]) {
                c('ChatTabActions').closeTab(db._threadID);
                c('ChatOpenTab').openThread(db._newThreadIDFromPhotoUpload, 'ChatTabView');
                db._newThreadIDFromPhotoUpload = null;
            }
        }
    });
    q.subscribe('threads-deleted', function(wa, xa) {
        for (var ya = v.keys(), za = Array.isArray(ya), ab = 0, ya = za ? ya : ya[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
            var bb;
            if (za) {
                if (ab >= ya.length) break;
                bb = ya[ab++];
            } else {
                ab = ya.next();
                if (ab.done) break;
                bb = ab.value;
            }
            var cb = bb;
            xa[cb] && c('ChatTabActions').closeTab(cb, 'thread_deleted');
            if (r.isNewEmptyLocalThread(cb)) {
                var db = v.get(cb);
                db.ensureValidCanonicalGroup(xa);
            }
        }
    });
    Object.assign(ra.prototype, {
        getThreadID: function() {
            return this._threadID;
        },
        getTabElem: function() {
            return this._tabElem;
        },
        showAddFriend: function() {
            setTimeout(function() {
                this._sheetController.openAddFriendsSheet();
            }.bind(this), 0);
        },
        showNameConversation: function(wa) {
            setTimeout(function() {
                this._sheetController.openNameConversationSheet(wa);
            }.bind(this), 0);
        },
        hideAutomaticNameConversation: function() {
            setTimeout(function() {
                this._sheetController.closeAutomaticNameConversationSheet();
            }.bind(this), 0);
        },
        isVisible: function() {
            return this._isVisible === undefined ? c('CSS').shown(this._tabElem) : this._isVisible;
        },
        isUploading: function() {
            return !!(this._composer && this._composer.isUploading() || this._filesUploader && this._filesUploader.isUploading() || !ea && this._sharePreview && this._sharePreview.component.isLoading());
        },
        setVisibleState: function(wa, xa) {
            this._isVisible = wa;
            this._isRaised = xa;
            if (xa) this._initFlyout();
            this._setHeaderProps({
                isRaised: xa
            });
            if (wa && !xa) c('ChatPerfInstrumentation').logDisplayDone();
            var ya = c('CSS').shown(this._tabElem),
                za = c('CSS').hasClass(this._tabElem, 'opened');
            c('CSS').conditionShow(this._tabElem, wa);
            c('CSS').conditionClass(this._tabElem, 'opened', xa);
            if (!(ya && za) && wa && xa) {
                if (!this._messagesView) this._updateChatTabMessagesView(this._threadID);
                this._nubController.flyoutContentChanged();
                this._messagesView.scrollToBottom();
                this.setP2PChatThreadBannerContainerVisibility();
            }
        },
        newMessageClicked: function() {
            this._messagesView && this._messagesView.scrollToBottom();
            this.focus();
            this.tryMarkAsRead();
        },
        _updateChatTabMessagesView: function(wa) {
            if (this._messagesView && this._messagesView.getThreadID() === wa) return;
            var xa = c('MercuryIDs').tokenize(wa);
            this._messagesView && this._messagesView.destroy();
            this._messagesView = new(c('ChatTabMessagesView'))(wa, this._sheetController, this._getNode('scrollingArea'), this._getNode('conversation'), this._getNode('loadingIndicator'), this._getNode('lastMessageIndicator'), this._getNode('typingIndicator'), this, c('MercuryConfig').ShowContextBanner && xa.type === 'user', this._getNode('quickReply'));
        },
        focus: function() {
            if (this.isChatViewable()) {
                try {
                    this._focusInput();
                } catch (wa) {}
            } else if (fa) {
                this._nubTitle && this._nubTitle.component.focus();
            } else this._getNode('dockButton').focus();
        },
        isFocused: function() {
            var wa = c('getActiveElement')();
            return c('Parent').bySelector(wa, "._50mz") === this._tabElem;
        },
        hover: function() {
            c('CSS').addClass(this._tabElem, 'hovered');
        },
        resetHover: function() {
            c('CSS').removeClass(this._tabElem, 'hovered');
        },
        isHovered: function() {
            return c('CSS').hasClass(this._tabElem, 'hovered');
        },
        hasEmptyInput: function() {
            return t.test(this._getInputValue());
        },
        getInputElem: function() {
            return this._composer && c('ReactDOM').findDOMNode(this._composer.getInput());
        },
        getMessagesView: function() {
            return this._messagesView;
        },
        loadShareFromParams: function(wa, xa) {
            this._getSharePreview().done(function(ya) {
                ya.setProps({
                    share: {
                        params: xa,
                        type: wa
                    },
                    uri: null
                });
            });
        },
        _linkDropped: function(wa) {
            this._getSharePreview().done(function(xa) {
                xa.setProps({
                    share: null,
                    uri: wa
                });
            });
        },
        _filesDropped: function(wa) {
            this._loadReactMenu().done(function(xa) {
                var ya = xa.component.getFileUploaderPromise();
                if (ya) ya.done(function(za) {
                    setTimeout(function() {
                        za.addDroppedFiles(wa);
                    }, 0);
                });
            });
        },
        insertBefore: function(wa) {
            c('DOM').insertBefore(wa.getTabElem(), this._tabElem);
        },
        appendTo: function(wa) {
            c('DOM').appendContent(wa, this._tabElem);
        },
        nextTabIs: function(wa) {
            var xa = wa && wa.getTabElem();
            return this._tabElem.nextSibling == xa;
        },
        getScrollTop: function() {
            return c('Scroll').getTop(c('DOM').find(this._tabElem, '.fbNubFlyoutBody.scrollable'));
        },
        setScrollTop: function(wa) {
            c('Scroll').setTop(c('DOM').find(this._tabElem, '.fbNubFlyoutBody.scrollable'), wa);
        },
        destroy: function() {
            this._selectionPosition && this._selectionPosition.disable();
            while (this._eventListeners.length) this._eventListeners.pop().remove();
            if (this._dropTarget) this._dropTarget.disable();
            this._checkUnsentMessages && this._checkUnsentMessages.cancel();
            this._logUnsentPhotos && this._logUnsentPhotos.cancel();
            this._messagesView && this._messagesView.destroy();
            this._sheetController && this._sheetController.destroy();
            c('ReactDOM').unmountComponentAtNode(this._getNode('animationContainer'));
            c('ReactDOM').unmountComponentAtNode(this._getNode('menuContainer'));
            if (this._addToThreadButton) {
                this._addToThreadButton.unmount();
                this._addToThreadButton = null;
            }
            if (this._archiveWarning) {
                this._archiveWarning.unmount();
                this._archiveWarning = null;
            }
            if (this._videoCallButton) {
                this._videoCallButton.unmount();
                this._videoCallButton = null;
            }
            if (this._voiceCallButton) {
                this._voiceCallButton.unmount();
                this._voiceCallButton = null;
            }
            if (this._closeButton) {
                this._closeButton.unmount();
                this._closeButton = null;
            }
            if (this._title) {
                this._title.unmount();
                this._title = null;
            }
            if (this._sharePreview) {
                this._sharePreview.unmount();
                this._sharePreview = null;
            }
            this._subscriptionsHandler && this._subscriptionsHandler.release();
            c('ReactDOM').unmountComponentAtNode(this._getNode('name'));
            c('ReactDOM').unmountComponentAtNode(this._getNode('footer'));
            c('DOM').remove(this._tabElem);
            v['delete'](this._threadID);
            c('Dock').unregisterNubController(this._nubController);
        },
        updateAvailableStatus: function() {
            r.getThreadMeta(this._threadID, function(wa) {
                var xa = c('AvailableListConstants').OFFLINE,
                    ya = this._getCanonicalUserID(),
                    za = null;
                if (ya) {
                    xa = c('PresenceStatus').get(ya);
                    za = c('ShortProfiles').getNow(ya);
                } else {
                    var ab = wa.participants.map(function(cb) {
                        return c('MercuryIDs').getUserIDFromParticipantID(cb);
                    });
                    xa = c('PresenceStatus').getGroup(ab);
                }
                if (!c('ChatVisibility').isOnline()) xa = c('AvailableListConstants').OFFLINE;
                c('CSS').conditionClass(this._tabElem, "_5238", xa === c('AvailableListConstants').ACTIVE && (za === undefined || za === null || !za.is_messenger_only));
                var bb = this._getNode('presenceIndicator');
                this._onlineStatus = xa;
                this._pagesMessageIndicatorHandler && this._pagesMessageIndicatorHandler.notifyPageOnlineStatusChanged(xa);
                switch (xa) {
                    case c('AvailableListConstants').ACTIVE:
                        bb.setAttribute('alt', j._("Online"));
                        break;
                    default:
                        bb.removeAttribute('alt');
                        break;
                }
            }.bind(this));
        },
        updateTab: function() {
            r.getThreadMeta(this._threadID, function(wa) {
                this.updateTitlebar(wa);
                this._updateControls(wa);
                this._updateMessageBlockSettings(wa);
                this._updateMessageManageSettings(wa);
                this._updateSecretModeSettings(wa);
                this._updateMutingSettings(wa);
                this._updateUnreadCount(wa);
                this._updateArchiveWarning(wa);
                this._updateConfidentialStatus(wa);
                this._updateEmployeeAwayWarning(wa);
                this._updateUserInFocusWarning(wa);
                this._updateUserTimezoneWarning(wa);
                this._updateOfficeStatus(wa);
                this._updateNewThread(wa);
                this._updateNameConversationSheet(wa);
                this._updateEventReminderSheet(wa);
                this._updateReadOnlySheet(wa);
                this._updateSwitchToWork(wa);
            }.bind(this));
        },
        _updateEventReminderSheet: function(wa) {
            var xa = wa.lightweight_events;
            if (xa) {
                c('requireWeak')('EventReminderActions', function(ya) {
                    var event = {
                        eventName: xa.title,
                        eventDate: xa.event_time,
                        eventID: xa.oid.toString(),
                        threadID: xa.message_thread_id.toString()
                    };
                    ya.updateEventReminder(event);
                });
                this._sheetController.openChatEventReminderTabSheet();
            } else this._sheetController.closeChatEventReminderTabSheet();
        },
        _updateNameConversationSheet: function(wa) {
            this.hideAutomaticNameConversation();
        },
        _updateReadOnlySheet: function(wa) {
            var xa = c('MercuryThreadInfo').showComposer(wa),
                ya = c('MercuryThreadInfo').canReply(wa),
                za = r.isEmptyLocalThread(wa.thread_id);
            if (c('MercuryConfig').ViewerIsReadOnly) {
                this._sheetController.openPermanentReadOnlySheet();
            } else if (!ya && !xa && !za) this._sheetController.openReadOnlySheet();
        },
        _updateMessageManageSettings: function(wa) {
            var xa = c('MercuryIDs').getParticipantIDFromFromThreadID(wa.thread_id),
                ya = xa ? c('MercuryParticipants').getNow(xa) : null;
            this._updateMenuPropsSafe({
                isBusinessEnabled: ya && ya.is_business_enabled
            });
        },
        updateSignatureID: function(wa) {
            this._signatureID = wa;
        },
        _updateMessageBlockSettings: function(wa) {
            this._updateMenuPropsSafe({
                hasMessageBlocked: c('MercuryBlockedParticipants').get().isMessageBlocked(wa),
                isEmptyConversation: wa && wa.message_count == 0
            });
        },
        _updateSecretModeSettings: function(wa) {
            var xa = !!(wa && wa.ephemeral_ttl_mode);
            this._updateMenuPropsSafe({
                hasSecretModeOn: xa
            });
            c('CSS').conditionClass(this._tabElem, "_5iq8", xa);
            var ya = xa ? j._("Type a disappearing message...") : j._("Type a message...");
            this._composer && this._composer.setPlaceholder(ya);
        },
        _updateMutingSettings: function(wa) {
            var xa = !!wa && c('MercuryThreadInfo').isMuted(wa);
            xa && !this._reactChatTabMenu && this._loadReactMenu();
            this._updateMenuPropsSafe({
                isMuted: xa
            });
        },
        _updateMenuPropsSafe: function(wa) {
            if (this._menuPromise) this._menuPromise.done(function(xa) {
                xa && xa.component && xa.component.isMounted() && xa.setProps(wa);
            });
        },
        _updateArchiveWarning: function(wa) {
            if (c('CurrentUser').isEmployee()) c('MercuryParticipants').getMulti(wa.participants, this._showArchiveWarningIfAllParticipantsAreEmployees.bind(this));
        },
        _updateConfidentialStatus: function(wa) {
            if (wa.other_user_fbid) c('MercuryParticipants').getMulti(wa.participants, function(xa) {
                var ya = this._getNode('titlebarConfidentialStatus');
                if (ya) {
                    var za = wa.other_user_fbid && xa[c('MercuryIDs').getParticipantIDFromUserID(wa.other_user_fbid)].is_anonymous_crisis_support;
                    c('CSS').conditionShow(ya, za);
                }
            }.bind(this));
        },
        _updateEmployeeAwayWarning: function(wa) {
            if (!c('CurrentUser').isEmployee()) return;
            c('Run').onAfterLoad(function() {
                c('Bootloader').loadModules(["ChatEmployeeAwayWarning"], function(xa) {
                    xa.updateEmployeeAwayWarning(wa, function() {
                        this._sheetController.openEmployeeAwaySheet();
                    }.bind(this), c('emptyFunction'));
                }.bind(this), 'ChatTabView');
            }.bind(this));
        },
        _getFocusWarning: function() {
            if (!this._focusModulePromise) this._focusModulePromise = new(c('Promise'))(function(wa) {
                c('requireWeak')('ChatUserFocusWarning', function(xa) {
                    return wa(xa);
                });
            });
            return this._focusModulePromise;
        },
        _updateUserInFocusWarning: function(wa) {
            this._getFocusWarning().done(function(xa) {
                xa.updateUserFocusWarning(wa, function(ya) {
                    ya ? this._sheetController.openBypassFocusSheet() : this._sheetController.openUserFocusSheet();
                }.bind(this), c('emptyFunction'));
            }.bind(this));
        },
        _getTimezoneWarning: function() {
            if (!this._timezoneModulePromise) this._timezoneModulePromise = new(c('Promise'))(function(wa) {
                c('requireWeak')('ChatTimezoneWarning', wa);
            });
            return this._timezoneModulePromise;
        },
        _updateUserTimezoneWarning: function(wa) {
            this._getTimezoneWarning().done(function(xa) {
                xa.updateUserTimezoneWarning(wa, function(ya) {
                    this._sheetController.openUserTimezoneSheet(ya);
                }.bind(this), c('emptyFunction'));
            }.bind(this));
        },
        _updateOfficeStatus: function(wa) {
            var xa = this._getNode('officeStatus');
            if (!xa || c('MercuryIDs').isGroupChat(wa.thread_id)) return;
            c('Run').onAfterLoad(function() {
                c('Bootloader').loadModules(["ChatTabOfficeStatus"], function(ya) {
                    var za = c('MercuryIDs').getParticipantIDFromUserID(wa.other_user_fbid);
                    c('MercuryParticipants').get(za, function(ab) {
                        ya.update(xa, ab);
                    });
                }, 'ChatTabView');
            });
        },
        _updateSwitchToWork: function(wa) {
            if (c('CurrentUser').isEmployee() && c('CurrentUser').hasWorkUser() && c('MercuryIDs').isGroupChat(wa.thread_id)) {
                c('MercuryParticipants').getMulti(wa.participants, function(xa) {
                    var ya = this._isEmployeesOnly(xa);
                    this._updateMenuPropsSafe({
                        hasSwitchToWork: ya
                    });
                }.bind(this));
            } else this._updateMenuPropsSafe({
                hasSwitchToWork: false
            });
        },
        _updateControls: function(wa, xa, ya) {
            var za = this._isPageChat(),
                ab = c('MercuryThreadInfo').showComposer(wa) && (!c('isEmpty')(wa.participants) || !!xa) && !this._composerNullState && !c('MercuryConfig').ViewerIsReadOnly,
                bb = this._getNode('footer');
            c('CSS').conditionShow(bb, ab);
            c('CSS').conditionShow(this._getNode('menuContainer'), ab);
            var cb = {
                isEmptyChat: r.isNewEmptyLocalThread(wa.thread_id),
                show: ab
            };
            if (za) cb.showAddFriend = null;
            this._updateMenuPropsSafe(cb);
            var db = ab && !za;
            this._addToThreadButton && this._addToThreadButton.setProps({
                shown: db
            });
            if (ya && ya.length === 1 && c('MercuryConfig').ShowContextBanner && c('MercuryConfig').ShowContextBannerNullState) {
                this._messagesView && this._messagesView.renderContextBanner(null, ya[0].info && ya[0].info.uid);
            } else this._messagesView && this._messagesView.unmountContextBanner();
        },
        _updateNewThread: function(wa) {
            if (r.isNewEmptyLocalThread(wa.thread_id)) this.showAddFriend();
        },
        _isEmployeesOnly: function(wa) {
            for (var xa in wa)
                if (!wa[xa].employee) return false;
            return true;
        },
        _showArchiveWarningIfAllParticipantsAreEmployees: function(wa) {
            var xa = this._isEmployeesOnly(wa) && Object.keys(wa).length > 1,
                ya = this._getNode('archiveContainer');
            if (ya) {
                if (this._titlebarTooltipAnchor) c('CSS').conditionClass(this._titlebarTooltipAnchor, 'narrowTitleBar', xa);
                c('CSS').conditionShow(ya, xa);
                this._archiveWarning && this._archiveWarning.setProps({
                    shown: xa
                });
            }
        },
        updateTitlebarTooltip: function() {
            if (!this._title) return;
            r.getThreadMeta(this._threadID, function(wa) {
                var xa = c('ReactDOM').findDOMNode(this._title.component);
                if (!xa) return;
                ha(xa, wa.participants);
            }.bind(this));
        },
        _getNode: function(wa) {
            return this._tabTemplate.getNode(wa);
        },
        _getCanonicalUserID: function() {
            return c('MercuryIDs').getUserIDFromThreadID(this._threadID);
        },
        _listen: function(wa, event, xa, ya) {
            var za = this._getNode(wa);
            if (za) {
                this._eventListeners.push(c('Event').listen(za, event, xa.bind(this)));
            } else if (!ya) throw new Error('Could not find node "' + wa + '"');
        },
        _closePreClicked: function(wa) {
            this._closeMouseDown = true;
        },
        _closeClicked: function(wa) {
            sa(this);
            this.animateClose(function() {
                return c('ChatTabActions').closeTab(this._threadID, 'close_click');
            }.bind(this));
            if (wa instanceof c('SyntheticEvent')) {
                wa.preventDefault();
            } else wa.kill();
        },
        animateClose: function(wa) {
            if (ba) {
                this._animationendFailsafeTimeout = setTimeout(wa, 1.2 * c('ifRequired')('cssVar', function(ya) {
                    return "200ms".replace(z, '');
                }, function() {
                    return 200;
                }));
                var xa = c('Event').listen(this._tabElem, c('getVendorPrefixedEventName')('animationend'), function(ya) {
                    if (ya.animationName === 'closeChatTab') {
                        wa();
                        clearTimeout(this._animationendFailsafeTimeout);
                    }
                }.bind(this));
                this._subscriptionsHandler && this._subscriptionsHandler.addSubscriptions(xa);
                c('CSS').addClass(this._tabElem, "_2suj");
            } else wa();
        },
        _closeEnter: function(wa) {
            if (wa.keyCode === c('Keys').RETURN) this._closeClicked(wa);
        },
        _nubClicked: function(wa) {
            if (this._closeMouseDown) return;
            if (wa instanceof c('SyntheticEvent')) {
                wa.preventDefault();
            } else wa.kill();
            this._initFlyout();
            return c('ChatTabViewEvents').inform('nub-activated', this._threadID);
        },
        _dockKeyDown: function(wa) {
            if (wa.keyCode === c('Keys').RETURN || wa.keyCode === c('Keys').SPACE) {
                c('ChatTabViewEvents').inform('nub-activated', this._threadID);
                if (wa instanceof c('SyntheticEvent')) {
                    wa.preventDefault();
                } else wa.kill();
            } else this._handleHotkeyPressed(wa);
        },
        _handleHotkeyPressed: function(wa) {
            if (wa.keyCode === c('Keys').ESC) {
                this._handleEscape();
                if (wa instanceof c('SyntheticEvent')) {
                    wa.preventDefault();
                } else wa.kill();
            } else if (wa.keyCode === c('Keys').TAB) this._handleTabPressed(wa);
        },
        _handleTabPressed: function(event) {
            if (!event.ctrlKey) {
                var wa = c('ChatTabViewEvents').inform('tab-pressed', {
                    id: this._threadID,
                    shiftPressed: event.shiftKey
                });
                !wa && event.preventDefault();
            }
        },
        _handleEscape: function() {
            sa(this);
            if (this.hasEmptyInput()) {
                this.animateClose(function() {
                    return c('ChatTabViewEvents').inform('esc-pressed', this._threadID);
                }.bind(this));
            } else {
                var wa = j._("Are you sure you want to close this chat window?"),
                    xa = j._("You haven't sent your message.");
                c('SimpleXUIDialog').showConfirm(wa, xa, function(ya) {
                    if (ya) {
                        c('ChatTabViewEvents').inform('esc-pressed', this._threadID);
                    } else this.focus();
                }.bind(this), {
                    autofocusConfirm: true,
                    useReactFocusBehavior: true
                });
            }
        },
        _titleClicked: function(event) {
            var wa = event.getTarget();
            if (!c('Parent').byClass(wa, 'titlebarText') && !c('Parent').byClass(wa, 'uiSelector') && (!c('Parent').bySelector(wa, "._3olv") || c('Parent').bySelector(wa, "._14lt")) && !c('Parent').byClass(wa, 'close')) {
                event.kill();
                c('ChatTabActions').lowerTab(this._threadID);
                this.focus();
                this.resetHover();
            }
        },
        _titleHovered: function() {
            var wa = c('CSS').hasClass(this._tabElem, 'highlightTab');
            if (wa) this.hover();
        },
        _addFriendLinkClicked: function() {
            this.showAddFriend();
        },
        _getUserParticipants: function(wa) {
            var xa = [];
            wa.forEach(function(ya) {
                var za = c('MercuryIDs').getUserIDFromParticipantID(ya);
                za && xa.push(za);
            });
            return xa;
        },
        _enableDesktopNotif: function() {
            Notification.requestPermission();
        },
        _inputPasted: function(event) {
            if (c('UserAgent_DEPRECATED').chrome()) {
                var wa = event.clipboardData || event.originalEvent.clipboardData;
                if (!wa || !wa.items || wa.items.length < 1) return;
                var xa = wa.items[0].type;
                if (xa !== 'image/png') return;
                if (wa.items[0].getAsFile) {
                    var ya = wa.items[0].getAsFile();
                    this._photoUploader && this._photoUploader.uploadFiles([ya]);
                }
            }
        },
        _focusInput: function() {
            c('ChatNubLogger').processEvent('focus');
            this._composer ? this._composer.getInput().focus() : this._focusOnComposerMount = true;
        },
        _focusTab: function() {
            c('CSS').addClass(this._tabElem, 'focusedTab');
            this.tryMarkAsRead();
            this._closeMouseDown = false;
            if (fa) {
                this._setHeaderProps({
                    isActive: true
                });
            } else this._setCloseTooltip(true);
            c('ChatTabViewEvents').inform('focus-tab', this._threadID);
        },
        _blurTab: function() {
            c('ChatNubLogger').processEvent('blur');
            c('CSS').removeClass(this._tabElem, 'focusedTab');
            if (fa) {
                !this._closeMouseDown && this._setHeaderProps({
                    isActive: false
                });
            } else !this._closeMouseDown && this._setCloseTooltip(false);
        },
        _setCloseTooltip: function(wa) {
            if (this._closeButton) {
                this._closeButton.setProps({
                    active: wa
                });
                return;
            }
            var xa = this._getNode('titlebarCloseButton');
            if (!xa) return;
            var ya = wa ? j._("Press Esc to close") : j._("Close tab");
            c('TooltipData').set(xa, ya, 'above');
        },
        _initFlyout: function(event) {
            this._initFlyout = c('emptyFunction');
            for (var wa = this._flyoutInitializers, xa = Array.isArray(wa), ya = 0, wa = xa ? wa : wa[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
                var za;
                if (xa) {
                    if (ya >= wa.length) break;
                    za = wa[ya++];
                } else {
                    ya = wa.next();
                    if (ya.done) break;
                    za = ya.value;
                }
                var ab = za;
                ab();
            }
        },
        _inputKeyDown: function(event) {
            this.tryMarkAsRead();
            if (event.keyCode === c('Keys').RETURN && !event.shiftKey) {
                if (na(this)) {
                    ma(this);
                    event.kill && event.kill();
                    return;
                }
                ja(this);
                event.kill ? event.kill() : event.preventDefault();
                return;
            }
            if (event.keyCode === c('Keys').DOWN && event.shiftKey && this.hasEmptyInput()) {
                event.kill && event.kill();
                c('ChatTabActions').lowerTab(this._threadID);
                this.focus();
                return;
            }
            this._handleHotkeyPressed(event);
        },
        _showMessageBlockedDialog: function(wa) {
            var xa = this._getCanonicalUserID();
            if (!xa) return;
            var ya = 'fbid:' + xa;
            c('MercuryParticipants').get(ya, function(za) {
                c('Bootloader').loadModules(["MessageBlockedDialog"], function(ab) {
                    ab.show(wa.thread_id, wa.can_reply, c('MercuryBlockedParticipants').get().isMessageBlocked(wa), za.short_name);
                }, 'ChatTabView');
            });
        },
        _initializeInput: function() {
            var wa = new(c('ReactComponentRenderer'))(c('ChatTabComposerContainer.react'), this._getNode('footer'));
            wa.setProps({
                disableFileUploads: !c('WorkFileUploadsGating').canUploadFiles,
                initializeThingsWithInputFn: this._initializeThingsWithInputFn.bind(this),
                inputKeyDown: this._inputKeyDown.bind(this),
                onMount: function(xa) {
                    this._composer = xa;
                    var ya = false;
                    if (this._focusOnComposerMount) {
                        ya = true;
                        this._focusOnComposerMount = false;
                    }
                    if (c('ChatTabLazyFocus').get() === this._threadID) {
                        ya = true;
                        c('ChatTabLazyFocus').clear();
                    }
                    if (ya) setTimeout(function() {
                        this._composer.getInput().focus();
                    }.bind(this), 0);
                }.bind(this),
                onBlur: this._blurTab.bind(this),
                onEscape: this._handleEscape.bind(this),
                onFocus: this._focusTab.bind(this),
                onTab: this._handleTabPressed.bind(this),
                resizeFn: function() {
                    this._nubController.flyoutContentChanged();
                }.bind(this),
                placeholder: j._("Type a message..."),
                onCustomLikeSelect: this._customLikeSelected.bind(this),
                onEmojiSelect: this._emojiSelected.bind(this),
                onFileUploadFail: this._handleFileLastUploadFailed.bind(this),
                onP2PTrigger: this._p2pTriggered.bind(this),
                onPhotoUploadFail: this._handlePULastUploadFailed.bind(this),
                onStickerSelect: this._stickerSelected.bind(this),
                onUploadCancel: this._handlePULastUploadCanceled.bind(this),
                onUploadComplete: this._handlePUAllUploadsCompleted.bind(this),
                onUploadSubmit: this._handleUploadSubmit.bind(this),
                threadID: this._threadID,
                viewer: c('CurrentUser').getID()
            });
        },
        _initializeSharePreview: function(wa, xa) {
            c('Event').listen(wa, 'keyup', function() {
                var ya = xa ? xa() : wa.value;
                if (!ya.length)
                    if (this._urlScraper) {
                        this._urlScraper.reset();
                        delete this._urlScraperData;
                    }
            }.bind(this));
            c('Run').onAfterLoad(function() {
                c('Bootloader').loadModules(["URLScraper"], function(ya) {
                    this._urlScraper = new ya(wa, xa);
                    this._urlScraper.subscribe('match', function(za, ab) {
                        this._urlScraperData = ab;
                        this._getSharePreview().done(function(bb) {
                            var cb = this._urlScraperData;
                            bb.setProps({
                                share: null,
                                uri: cb && cb.url
                            });
                        }.bind(this));
                    }.bind(this));
                }.bind(this), 'ChatTabView');
            }.bind(this));
        },
        _getSharePreview: function() {
            if (!this._sharePreview && !this._sharePreviewPromise) this._sharePreviewPromise = new(c('Promise'))(function(wa) {
                c('Bootloader').loadModules(["MercurySharePreview.react"], function(xa) {
                    this._sharePreview = new(c('ReactComponentRenderer'))(xa, this._getNode('shareAttachmentShelf'));
                    this._sharePreview.setProps({
                        imageSize: {
                            width: w,
                            height: w
                        },
                        location: c('MercuryShareAttachmentRenderLocations').CHAT_PREVIEW,
                        onClose: this._focusInput.bind(this),
                        onUpdate: function() {
                            pa(this);
                            this._unblockSend();
                        }.bind(this)
                    });
                    wa(this._sharePreview);
                }.bind(this), 'ChatTabView');
            }.bind(this));
            return this._sharePreviewPromise;
        },
        _initializeThingsWithInputFn: function(wa, xa) {
            var ya, za = this;
            this._getValueFromReactComposer = xa;
            this._initializeSharePreview(wa, xa);
            r.getThreadMeta(this._threadID, function(ab) {
                if (ab) {
                    if (c('MessageRequestUtils').isMessageRequest(ab))(function() {
                        var fb = c('DOM').create('div');
                        c('DOM').appendContent(za._getNode('chatConv'), fb);
                        za._composerNullState = fb;
                        var gb = c('MessageRequestUtils').isFiltered(ab);
                        c('ReactDOM').render(c('React').createElement(c('BootloadedComponent.react'), {
                            bootloadPlaceholder: c('React').createElement('div', {
                                style: {
                                    height: 27
                                }
                            }),
                            bootloadLoader: c('JSResource')('ChatPendingActions.react').__setRef('ChatTabView'),
                            isFiltered: gb,
                            onDeleteClick: function(hb) {
                                if (gb) {
                                    c('Bootloader').loadModules(["WebMessengerDeleteThreadDialog"], function(ib) {
                                        ib.show(this._threadID);
                                    }.bind(this), 'ChatTabView');
                                } else {
                                    o.changeFolder(this._threadID, c('MessagingTag').OTHER);
                                    c('ChatTabActions').closeTab(this._threadID);
                                }
                            }.bind(za),
                            onReplyClick: function(hb) {
                                o.changeFolder(this._threadID, c('MessagingTag').INBOX);
                                c('DOM').remove(fb);
                                delete this._composerNullState;
                                this._updateControls(ab);
                                this._nubController.flyoutContentChanged();
                            }.bind(za)
                        }), fb);
                    })();
                    var bb = ca && ab.message_count === 0,
                        cb = da;
                    if (this._isPageChat() && (bb || cb)) {
                        var db = this._getPageID(),
                            eb = c('XMNCommercePageNullStateCTAController').getURIBuilder();
                        new(c('AsyncRequest'))().setURI(eb.getURI()).setMethod('POST').setData({
                            page_id: db
                        }).setHandler(function(fb) {
                            var gb, hb = this;
                            if (fb && fb.payload)(function() {
                                var ib = c('DOM').create('div');
                                hb._composerNullState = ib;
                                var jb = fb.payload;
                                c('DOM').appendContent(hb._getNode('chatConv'), ib);
                                hb._composerNullState = ib;
                                c('ReactDOM').render(c('React').createElement(c('BootloadedComponent.react'), {
                                    bootloadPlaceholder: c('React').createElement('div', {
                                        style: {
                                            height: 27
                                        }
                                    }),
                                    bootloadLoader: c('JSResource')('ChatPageComposerNullState.react').__setRef('ChatTabView'),
                                    title: jb.title,
                                    onClick: function(kb) {
                                        c('MNCommercePostbackCTADataManager').send(jb.id);
                                        c('DOM').remove(ib);
                                        delete this._composerNullState;
                                        this._updateControls(ab);
                                        this._nubController.flyoutContentChanged();
                                    }.bind(hb)
                                }), ib);
                                hb._updateControls(ab);
                                hb._nubController.flyoutContentChanged();
                            })();
                        }.bind(this)).send();
                    }
                }
                p.getServerIDFromClientID(this._threadID, function(fb) {
                    this._typingDetector = new(c('TypingDetectorController'))(this._getCanonicalUserID(), wa, 'mercury-chat', null, fb, xa);
                }.bind(this));
            }.bind(this));
        },
        _getInputValue: function() {
            if (this._getValueFromReactComposer) return this._getValueFromReactComposer();
            if (!this._chatInput || !this._chatInput.component.isMounted()) return '';
            return this._chatInput.component.getValue() || '';
        },
        appendTextToInput: function(wa) {
            this._composer && this._composer.getInput().appendText(wa);
        },
        _hasUnfinishedPost: function() {
            return oa(this) || this.isUploading();
        },
        tryMarkAsRead: function() {
            if (!this._messagesView || this._messagesView.isScrolledToBottom()) {
                o.markRead(this._threadID);
                o.markSeen(this._threadID);
                return true;
            }
            return false;
        },
        _chatConvClicked: function(wa) {
            this.tryMarkAsRead();
            if (c('Parent').byTag(wa.getTarget(), 'a') || c('DOM').getSelection()) return;
            this.focus();
        },
        _inputContainerClicked: function(wa) {
            this.tryMarkAsRead();
            this.focus();
        },
        _initializePageMessagingIndicator: function() {
            this._pagesMessageIndicatorHandler = c('PagesMercuryChatTabIndicatorHandler').tryCreateHandler(this._threadID, this._onlineStatus, this._sheetController.openPageResponsivenessSheet.bind(this._sheetController), this._sheetController.closePageResponsivenessSheet.bind(this._sheetController));
            this._pagesMessageIndicatorHandler && this._pagesMessageIndicatorHandler.checkResponsiveness();
        },
        _initializePagesGreeting: function() {
            var wa = c('DOMQuery').scry(this._tabElem, "._av1"),
                xa = this._threadID,
                ya = c('MercuryIDs').getUserIDFromThreadID(xa);
            if (!wa || wa.length === 0) return;
            if (c('FBID').isUser(ya)) {
                c('CSS').hide(wa[0]);
                return;
            }
            var za = c('React').createElement(c('BootloadedComponent.react'), {
                bootloadPlaceholder: c('React').createElement('div', null),
                bootloadLoader: c('JSResource')('MercuryChatTabPagesGreetingContainer.react').__setRef('ChatTabView'),
                threadID: xa
            });
            c('ReactDOM').render(za, wa[0]);
        },
        showTypingIndicator: function(wa) {
            if (fa) {
                this._setHeaderProps({
                    isTyping: !!wa
                });
                return;
            }
            this._renderTypingIndicator();
            c('CSS').conditionClass(this._tabElem, "_54m8", wa);
        },
        _renderTypingIndicator: function() {
            var wa = c('CSS').hasClass(this._tabElem, 'highlightTab') ? 'light' : 'dark';
            c('ReactDOM').render(c('React').createElement(c('MercuryTypingAnimation.react'), {
                color: wa
            }), this._getNode('animationContainer'));
        },
        _updateUnreadCount: function(wa) {
            var xa = wa.unread_count;
            if (u && u.currentViewerInFocusMode(wa.id)) return;
            if (xa != undefined) {
                var ya = !!xa && (!c('ChatBehavior').showsTabUnreadUI || c('ChatBehavior').showsTabUnreadUI()),
                    za = this._getNode('numMessages');
                c('CSS').conditionShow(za, ya);
                c('CSS').conditionClass(this._tabElem, 'highlightTab', ya);
                this._renderTypingIndicator();
                if (ya) {
                    c('ChatTabBlinking').blinkTab(this._threadID, this);
                } else c('ChatTabBlinking').unblinkTab(this._threadID);
                c('DOM').setContent(za, xa);
            }
        },
        ensureValidCanonicalGroup: function(wa) {
            if (this._messagesView && this._messagesView.getThreadID() === this._threadID) return;
            if (wa[this._messagesView.getThreadID()]) this._updateChatTabMessagesView(this._threadID);
        },
        _initializeSheetController: function() {
            this._sheetController = new(c('ChatTabSheetController'))(this._threadID, this._getNode('sheet'), this._tabElem, this);
            this._sheetController.onTokensChanged(function(wa, xa) {
                this._handleSheetControllerTokensChanged(xa);
            }.bind(this));
            this._nubController = new(c('NubController'))().init(this._tabElem);
            this._sheetController.onResize(function() {
                this._nubController.flyoutContentChanged();
            }.bind(this));
        },
        _handleSheetControllerTokensChanged: function(wa) {
            this._updateComposerParticipants(wa.tokens);
            r.getThreadMeta(this._threadID, function(xa) {
                this._updateControls(xa, wa.token_count, wa.tokens);
            }.bind(this));
            this._updateMessagesViewIfNecessary(wa);
        },
        _updateMessagesViewIfNecessary: function(wa) {
            if (!r.isEmptyLocalThread(this._threadID)) return;
            var xa = c('MercuryCanonicalGroupThreadManager').get();
            xa.unsubscribe(this._canonicalGroupSearchSubscriptionID);
            if (wa.token_count === 1) {
                var ya = wa.tokens[0].info && wa.tokens[0].info.uid;
                this._updateMercuryMessagesViewCanonical(c('MercuryIDs').getThreadIDFromUserID(ya));
                return;
            }
            this._updateMercuryMessagesViewCanonical(this._threadID);
            if (wa.token_count > 1) {
                var za = wa.tokens.map(function(ab) {
                    return ab.info.uid;
                });
                this._canonicalGroupSearchSubscriptionID = xa.getCanonicalGroupThreadIDForParticipants(Array.from(za), this._updateMercuryMessagesViewCanonical.bind(this));
            }
        },
        _updateMercuryMessagesViewCanonical: function(wa) {
            if (wa) {
                this._updateChatTabMessagesView(wa);
                this._messagesView.scrollToBottom();
            }
        },
        _updateComposerParticipants: function(wa) {
            var xa = void 0;
            if (wa && wa.length === 1 && wa[0].info && wa[0].info.uid) xa = [c('MercuryIDs').getParticipantIDFromUserID(wa[0].info.uid)];
            this._composer && this._composer.setParticipantIDs(xa);
        },
        _initializeHeader: function() {
            if (fa) {
                if (this._nubButton.nodeName.toLowerCase() === 'a') {
                    var wa = document.createElement('div');
                    wa.className = "fbNubButton";
                    var xa = this._nubButton.parentNode;
                    xa.insertBefore(wa, this._nubButton);
                    xa.removeChild(this._nubButton);
                    this._nubButton = wa;
                }
                this._header = new(c('ReactComponentRenderer'))(c('ChatTabHeaderContainer.react'), this._getNode('nubFlyoutTitlebar'));
                this._nubTitle = new(c('ReactComponentRenderer'))(c('ChatTabHeaderContainer.react'), this._nubButton);
                this._setHeaderProps({
                    isActive: false,
                    raised: this._isRaised,
                    threadID: this._threadID,
                    viewer: c('CurrentUser').getID(),
                    onClick: this._nubClicked.bind(this),
                    onCloseClick: this._closeClicked.bind(this),
                    onCloseKeyUp: this._closeEnter.bind(this),
                    onCloseMouseDown: this._closePreClicked.bind(this),
                    onKeyDown: this._dockKeyDown.bind(this)
                });
                return;
            }
            this._initializeTitle();
            this._initializeCloseButton();
            this._initializeReactMenu();
            this._initializeAddToThreadButton();
            this._initializeRTC();
            this._initializeArchiveWarning();
            this._setCloseTooltip(false);
        },
        _setHeaderProps: function(wa) {
            this._header && this._header.setProps(wa);
            this._nubTitle && this._nubTitle.setProps(wa);
        },
        _loadReactMenu: function() {
            var wa = c('MercuryIDs').isGroupChat(this._threadID),
                xa = r.isNewEmptyLocalThread(this._threadID),
                ya = this._sheetController.openAddFriendsSheet.bind(this._sheetController);
            if (!this._menuPromise) this._initializeReactMenu();
            c('JSResource')('ChatTabMenu.react').__setRef('ChatTabView').load().done(function(za) {
                this._reactChatTabMenu = new(c('ReactComponentRenderer'))(za, this._getNode('menuContainer'));
                this._reactChatTabMenu.setProps({
                    sheetController: this._sheetController,
                    onFileUploaderMounted: this.setFilesUploader.bind(this),
                    nameConversationFunc: function() {
                        return this.showNameConversation();
                    }.bind(this),
                    isGroupChat: wa,
                    isEmptyChat: xa,
                    showAddFriend: ya,
                    threadID: this._threadID,
                    otherUserID: this._getCanonicalUserID(),
                    attachmentsShelf: this._getNode('fileAttachmentShelf'),
                    onUploadFinished: this._unblockSend.bind(this),
                    onUpdateAttachmentsShelf: function() {
                        return pa(this);
                    }.bind(this),
                    onSubmit: this._focusInput.bind(this)
                }, function() {
                    this._menuPromiseResolve && this._menuPromiseResolve(this._reactChatTabMenu);
                }.bind(this));
            }.bind(this));
            return this._menuPromise;
        },
        _initializeReactMenu: function() {
            this._menuPromise = new(c('Promise'))(function(wa) {
                this._menuPromiseResolve = wa;
            }.bind(this));
            this._listen('menuButton', 'click', function(wa) {
                wa.preventDefault();
                this._loadReactMenu().done(function(xa) {
                    xa.component.open();
                });
            }.bind(this));
        },
        _initializeArchiveWarning: function() {
            var wa = this._getNode('archiveContainer');
            if (!wa) return;
            c('Run').onAfterLoad(function() {
                c('Bootloader').loadModules(["ArchiveWarning.react"], function(xa) {
                    this._archiveWarning = new(c('ReactComponentRenderer'))(xa, wa);
                    this._archiveWarning.setProps({
                        isFBAtWork: c('WorkModeConfig').is_work_user,
                        shown: false,
                        useCSS: aa
                    });
                    var ya = r.getThreadMetaNow(this._threadID);
                    if (ya) this._updateArchiveWarning(ya);
                }.bind(this), 'ChatTabView');
            }.bind(this));
        },
        _initializeAddToThreadButton: function() {
            c('Run').onAfterLoad(function() {
                c('Bootloader').loadModules(["ChatAddToThreadButton.react"], function(wa) {
                    this._addToThreadButton = new(c('ReactComponentRenderer'))(wa, this._getNode('addToThreadContainer'));
                    var xa = r.getThreadMetaNow(this._threadID);
                    this._addToThreadButton.setProps({
                        isFBAtWork: c('WorkModeConfig').is_work_user,
                        onClick: this._addFriendLinkClicked.bind(this),
                        shown: false,
                        shouldAddToApprovalQueue: c('MessengerAdminGroupUtils').shouldAddToApprovalQueue(xa, c('CurrentUser').getID())
                    });
                    if (xa) this._updateControls(xa);
                }.bind(this), 'ChatTabView');
            }.bind(this));
        },
        _initializeRTC: function() {
            var wa = c('MercuryIDs').isGroupChat(this._threadID);
            if (wa && !c('ChatConfig').get('rtc_conferencing_www')) return;
            c('Run').onAfterLoad(function() {
                c('Bootloader').loadModules(["ChatVideoCallButton.react"], function(xa) {
                    var ya = c('CurrentUser').getID();
                    this._videoCallButton = new(c('ReactComponentRenderer'))(xa, this._getNode('videoCallButtonContainer'));
                    this._videoCallButton.setProps({
                        isAudio: false,
                        isGroupChat: wa,
                        threadID: this._threadID,
                        viewer: ya
                    });
                    this._voiceCallButton = new(c('ReactComponentRenderer'))(xa, this._getNode('voiceCallButtonContainer'));
                    this._voiceCallButton.setProps({
                        isAudio: true,
                        isGroupChat: wa,
                        threadID: this._threadID,
                        viewer: ya
                    });
                }.bind(this), 'ChatTabView');
            }.bind(this));
        },
        _initializeCloseButton: function() {
            this._listen('titlebarCloseButton', 'click', this._closeClicked);
            this._listen('titlebarCloseButton', 'keyup', this._closeEnter);
            this._listen('titlebarCloseButton', 'mousedown', this._closePreClicked);
            c('Run').onAfterLoad(function() {
                c('Bootloader').loadModules(["ChatCloseButton.react"], function(wa) {
                    this._closeButton = new(c('ReactComponentRenderer'))(wa, this._getNode('titlebarCloseButtonContainer'));
                    this._closeButton.setProps({
                        active: this.isFocused(),
                        className: "_3olu _3olv",
                        onClick: this._closeClicked.bind(this),
                        onKeyUp: this._closeEnter.bind(this),
                        onMouseDown: this._closePreClicked.bind(this)
                    });
                }.bind(this), 'ChatTabView');
            }.bind(this));
        },
        _initializeTitle: function() {
            var wa = r.getThreadMetaNow(this._threadID);
            this._title = new(c('ReactComponentRenderer'))(c('ChatTitleLink.react'), this._getNode('titleContainer'));
            this._title.setProps({
                thread: wa,
                viewer: c('CurrentUser').getID()
            });
        },
        _initializeTitleHREF: function() {
            c('getTitleHrefFromThreadID')(this._threadID, this._setTitleHref.bind(this));
            this._titlebarTooltipAnchor = this._getNode('titlebarText');
        },
        _initializeDockUIListeners: function() {
            if (fa) return;
            this._listen('dockButton', 'click', this._nubClicked);
            this._listen('dockButton', 'keydown', this._dockKeyDown);
            this._listen('closeButton', 'click', this._closeClicked);
        },
        _initializeUIListeners: function() {
            this._listen('nubFlyoutTitlebar', 'click', this._titleClicked);
            this._listen('nubFlyoutTitlebar', 'mouseenter', this._titleHovered);
            this._listen('chatConv', 'click', this._chatConvClicked);
            if (this._getNode('inputContainer')) this._listen('inputContainer', 'click', this._inputContainerClicked);
            this._listen('sheet', 'keydown', function(event) {
                if (!event.getModifiers().any && event.keyCode === c('Keys').TAB) {
                    this._focusInput();
                    event.kill();
                }
                if (event.keyCode === c('Keys').ESC) this._handleEscape();
            }.bind(this));
            if (this._getNode('officeStatus')) this._listen('officeStatus', 'click', function() {
                return false;
            }, true);
        },
        setFilesUploader: function(wa) {
            this._filesUploader = wa;
        },
        _initializeDragDropTarget: function() {
            if (c('WorkFileUploadsGating').canUploadFiles) {
                var wa = c('DOMQuery').scry(this._tabElem, "._1ia");
                if (wa && wa.length > 0) {
                    this._dropTarget = new(c('DragDropTarget'))(wa[0]);
                    this._dropTarget.setOnFilesDropCallback(this._filesDropped.bind(this));
                    this._dropTarget.setOnURLDropCallback(this._linkDropped.bind(this));
                    this._dropTarget.enable();
                }
            }
        },
        _initializeP2PChatThreadBannerContainer: function() {
            var wa = c('DOMQuery').scry(this._tabElem, "._2hc2");
            if (wa && wa.length > 0) {
                this._p2pChatThreadBannerContainerEl = wa[0];
                c('Run').onAfterLoad(function() {
                    c('Bootloader').loadModules(["P2PChatThreadBannerContainer.react"], function(xa) {
                        this._p2pChatThreadBannerContainer = new(c('ReactComponentRenderer'))(xa, this._p2pChatThreadBannerContainerEl);
                        this._p2pChatThreadBannerContainer.setProps({
                            isVisible: this.isChatViewable(),
                            otherUserID: c('MercuryIDs').getUserIDFromThreadID(this._threadID),
                            threadID: this._threadID
                        });
                    }.bind(this), 'ChatTabView');
                }.bind(this));
            }
        },
        setP2PChatThreadBannerContainerVisibility: function() {
            if (this._p2pChatThreadBannerContainer) this._p2pChatThreadBannerContainer.setProps({
                isVisible: this.isChatViewable()
            });
        },
        isChatViewable: function() {
            return !!(this._tabElem && this._isVisible && this._isRaised);
        },
        _initializeUnloadListeners: function() {
            this._checkUnsentMessages = c('createCancelableFunction')(function() {
                if (this._hasUnfinishedPost()) return j._("You haven't sent your message yet. Do you want to leave without sending?");
                if (m.getNumberLocalMessages(this._threadID)) return j._("Your message is still being sent. Are you sure you want to leave?");
                return null;
            }.bind(this));
            c('Run').onBeforeUnload(this._checkUnsentMessages, false);
            this._logUnsentPhotos = c('createCancelableFunction')(sa.bind(null, this));
            c('Run').onUnload(this._logUnsentPhotos);
        },
        _handleUploadSubmit: function(wa) {
            qa(this, c('PhotosUploadWaterfall').UPLOAD_START, wa);
            la(this, '', [], function(xa) {
                if (this._threadID !== xa.thread_id) {
                    this._newThreadIDFromPhotoUpload = xa.thread_id;
                    if (this._messagesView) this._messagesView.setNewThreadID(xa.thread_id);
                }
                xa.content_attachment = null;
                s.addAttachmentPlaceholder(xa, wa.upload_id, wa);
            }.bind(this));
            ua('submit', wa);
            this._focusInput();
        },
        _handleFileLastUploadFailed: function(wa) {
            qa(this, c('PhotosUploadWaterfall').CLIENT_ERROR, wa);
            ua('failed', wa);
        },
        _handlePULastUploadFailed: function(wa) {
            qa(this, c('PhotosUploadWaterfall').CLIENT_ERROR, wa);
            ua('failed', wa);
        },
        _handlePULastUploadCanceled: function(wa) {
            qa(this, c('PhotosUploadWaterfall').CANCEL_DURING_UPLOAD, wa);
            ua('canceled', wa);
        },
        _handlePUAllUploadsCompleted: function(wa) {
            qa(this, c('PhotosUploadWaterfall').ALL_UPLOADS_DONE, wa);
            ua('completed', wa);
            var xa = wa.image_ids.length || wa.attachments.length;
            ka(this, xa);
        },
        _stickerSelected: function(wa) {
            la(this, '', [], function(xa) {
                xa.has_attachment = true;
                xa.sticker_id = wa;
                s.send(xa);
                this.focus();
            }.bind(this));
            this._messagesView && this._messagesView.scrollToBottom();
        },
        _emojiSelected: function(wa) {
            this._composer && this._composer.getInput().insertEmoji(wa);
        },
        _customLikeSelected: function(wa, xa) {
            la(this, wa.emoji, [], function(ya) {
                ya.has_attachment = false;
                s.send(c('EmojiLikeUtils').setEmojiSize(ya, xa));
                this.focus();
            }.bind(this));
            this._messagesView && this._messagesView.scrollToBottom();
        },
        _p2pTriggered: function() {
            la(this, '', [], function(wa) {
                this.focus();
            }.bind(this));
            this._messagesView && this._messagesView.scrollToBottom();
        },
        _setTitleHref: function(wa) {
            this._title && this._title.setProps({
                href: wa
            });
        },
        _unblockSend: function() {
            if (!this._blocked || na(this)) return;
            this._blocked = false;
            ja(this);
            this._sheetController.closeUploadWarningTabSheet();
        },
        _logOpenTab: function() {
            new(c('AsyncSignal'))('/ajax/chat/opentab_tracking.php', {
                threadID: this._threadID,
                userID: this._getCanonicalUserID(),
                signatureID: this._signatureID
            }).send();
        },
        _setCustomColor: function(wa, xa) {
            if (!wa) return;
            if (xa) {
                c('Style').apply(wa, {
                    color: xa
                });
            } else if (wa.style) wa.style.color = '';
            c('CSS').conditionClass(wa, "_1m34", !!xa);
        },
        _isPageChat: function() {
            if (this._threadID) {
                var wa = c('MercuryIDs').tokenize(this._threadID);
                if (wa.type === 'user') return !c('FBID').isUser(wa.value);
            }
            return false;
        },
        _getPageID: function() {
            if (this._threadID) {
                var wa = c('MercuryIDs').tokenize(this._threadID);
                if (wa.type === 'user' && !c('FBID').isUser(wa.value)) return wa.value;
            }
            return null;
        },
        getCustomColor: function() {
            return this._customColor;
        },
        updateTitlebar: function(wa) {
            if (!wa) return;
            if (aa) {
                this._customColor = c('convertMIGColorToFIGColor')(wa.custom_color);
                if (this._titlebar && !wa.ephemeral_ttl_mode) this._setCustomColor(this._titlebar, this._customColor);
            }
            if (this._title) this._title.setProps({
                thread: wa
            }, function() {
                this._getNode('chatWrapper').setAttribute('aria-label', this._title.component.getTitle());
            }.bind(this));
            if (!fa) c('ReactDOM').render(c('React').createElement(c('MercuryThreadTitle.react'), {
                isNewThread: r.isNewEmptyLocalThread(this._threadID),
                thread: wa,
                useAndSeparator: true,
                useShortName: !wa.is_canonical,
                viewer: c('CurrentUser').getID()
            }), this._getNode('name'));
            this.updateTitlebarTooltip();
        }
    });

    function ua(wa, xa) {
        ga.debug('photo_uploader:' + wa, '{}');
    }

    function va(wa, xa) {
        if (!xa) return wa;
        var ya = xa.getImageFiles();
        if (ya.length > 0) {
            wa.image_ids = ya;
            wa.has_attachment = true;
        }
        var za = xa.getAnimatedImageFiles();
        if (za.length > 0) {
            wa.gif_ids = za;
            wa.has_attachment = true;
        }
        var ab = xa.getVideoFiles();
        if (ab.length > 0) {
            wa.video_ids = ab;
            wa.has_attachment = true;
        }
        var bb = xa.getAudioFiles();
        if (bb.length > 0) {
            wa.audio_ids = bb;
            wa.has_attachment = true;
        }
        var cb = xa.getFiles();
        if (cb.length > 0) {
            wa.file_ids = cb;
            wa.has_attachment = true;
        }
        return wa;
    }
    f.exports = ra;
}, null);
__d('ChatStickerButton.react', ['cx', 'fbt', 'BootloadOnRender.react', 'ChatFlyoutPlaceholder.react', 'JSResource', 'LazyComponent.react', 'Link.react', 'React', 'StickerActions', 'StickerContextualDialog.react', 'StickerStateStore', 'StoreAndPropBasedStateMixin', 'emptyFunction', 'joinClasses'], function a(b, c, d, e, f, g, h, i) {
    'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var j = c('React').PropTypes,
        k = 278,
        l = c('React').createClass({
            displayName: 'ChatStickerButton',
            _clickGuard: false,
            mixins: [c('StoreAndPropBasedStateMixin')(c('StickerStateStore'))],
            propTypes: {
                className: j.string,
                ContextualDialogClass: j.func.isRequired,
                disabled: j.bool,
                flyoutClassName: j.string,
                flyoutWidth: j.number,
                getInput: j.func,
                onLoad: j.func,
                onStickerSelect: j.func.isRequired,
                onFlyoutShown: j.func,
                onFlyoutHidden: j.func,
                threadID: j.string
            },
            statics: {
                calculateState: function(m) {
                    var n = c('StickerStateStore').getState();
                    return {
                        shown: n.showTray && m.threadID === n.threadID
                    };
                }
            },
            getDefaultProps: function() {
                return {
                    ContextualDialogClass: c('StickerContextualDialog.react'),
                    disabled: false,
                    flyoutWidth: k,
                    onStickerSelect: c('emptyFunction')
                };
            },
            componentDidMount: function() {
                this.props.onLoad && this.props.onLoad(this);
            },
            componentDidUpdate: function(m, n) {
                var o = this.state && this.state.shown;
                if (o !== n.shown)
                    if (o) {
                        this.props.onFlyoutShown && this.props.onFlyoutShown();
                    } else this.props.onFlyoutHidden && this.props.onFlyoutHidden();
            },
            componentWillUnmount: function() {
                if (this.state.shown) this._hideFlyout();
            },
            shouldComponentUpdate: function(m, n) {
                return this.props.disabled !== m.disabled || this.state.shown !== n.shown;
            },
            render: function() {
                var m = i._("Choose a sticker");
                return (c('React').createElement('span', null, c('React').createElement(c('Link.react'), {
                    className: c('joinClasses')(this.props.className, this.state.shown ? "open" : ''),
                    href: '#',
                    onClick: this.showFlyout,
                    onMouseDown: this._prepareForClick,
                    role: 'button',
                    title: m,
                    ref: 'link'
                }), this.renderLayers()));
            },
            renderLayers: function() {
                if (!this.state.shown) return null;
                var m = this.props.ContextualDialogClass;
                return (c('React').createElement(m, {
                    alignment: this.props.flyoutAlignment,
                    className: "_5e-r",
                    contextRef: function() {
                        return this.refs.link;
                    }.bind(this),
                    onBeforeHide: this._handleBeforeHide,
                    onBlur: this._hideFlyout,
                    position: 'above',
                    shown: this.state.shown,
                    width: this.props.flyoutWidth,
                    key: 'contextualDialog'
                }, c('React').createElement(c('BootloadOnRender.react'), {
                    component: c('React').createElement(c('LazyComponent.react'), {
                        className: this.props.flyoutClassName,
                        onEscKeyDown: this._hideFlyout,
                        onStickerSelect: this._handleStickerSelected,
                        shown: this.state.shown
                    }),
                    loader: c('JSResource')('StickersFlyout.react').__setRef('ChatStickerButton.react'),
                    placeholder: c('React').createElement(c('ChatFlyoutPlaceholder.react'), null)
                })));
            },
            _prepareForClick: function() {
                this._clickGuard = this.state.shown;
            },
            showFlyout: function(m) {
                m && m.stopPropagation();
                if (this._clickGuard || this.props.disabled) {
                    this._clickGuard = false;
                    return;
                }
                c('StickerActions').showStickerTray(this.props.threadID);
            },
            _handleBeforeHide: function() {
                if (this.state.shown) {
                    this._hideFlyout();
                    return false;
                }
            },
            _hideFlyout: function() {
                var m = this.props.getInput && this.props.getInput();
                m && m.focus && m.focus();
                c('StickerActions').hideStickerTray();
            },
            _handleStickerSelected: function(m) {
                this.props.onStickerSelect(m);
            }
        });
    f.exports = l;
}, null);
