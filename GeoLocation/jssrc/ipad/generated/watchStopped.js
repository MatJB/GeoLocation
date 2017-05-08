function addWidgetswatchStopped() {
    var lblWatchPop = new kony.ui.Label({
        "id": "lblWatchPop",
        "isVisible": true,
        "text": "Watch has stopped"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [12, 18, 12, 15],
        "marginInPixel": true,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnWatchPop = new kony.ui.Button({
        "id": "btnWatchPop",
        "isVisible": true,
        "onClick": p2kwiet2125006231309_btnWatchPop_onClick_seq0,
        "text": "OK"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [32, 4, 32, 4],
        "marginInPixel": true,
        "padding": [4, 7, 4, 7],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    watchStopped.add(lblWatchPop, btnWatchPop);
};

function watchStoppedGlobals() {
    watchStopped = new kony.ui.Popup({
        "addWidgets": addWidgetswatchStopped,
        "id": "watchStopped",
        "isModal": false,
        "onHide": p2kwiet2125006231309_watchStopped_onhide_seq0,
        "transparencyBehindThePopup": 0
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 80,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendTop": false,
        "extendTop": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "popupStyle": constants.POPUP_TYPE_KONY_STYLE
    });
};