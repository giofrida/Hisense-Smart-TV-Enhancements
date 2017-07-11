/**
 * Created by BOB on 14-9-24.
 */

function getQuickSettingPageData(opts) {
    opts.CaE = [
        {
            id: 'setting_qsp_title',
            CaEType: 'span'
        },
        {
            id: 'setting_qsp_Modes',
            CaEType: 'Ul',
            handler: {
                befEnterHandler: qSetting.openModePage
            },
            nav: {
                downTo: 'setting_qsp_more'
            },
            oriCaE: [
                {
                    id: 'setting_qsm_item',
                    CaEType: 'span'
                }
            ],
            UlConfig: {
                UlDataItem: [
                    'setting_qsm_item'
                ]
            }
        },
        {
            id: 'setting_qsp_more',
            CaEType: 'span',
            nav: {
                upTo: 'setting_qsp_Modes'
            },
            handler: {
                befEnterHandler: qSetting.openMoreSetting
            }
        }
    ];

    qSetting.initRecentUse();
    return qSetting.pageData;
}

var quicSetting = function() {

    var self = this;
    self.id = 'setting_sys_qs_page';
    var oprtData = {
        title: 'Quick Setup',
        recentUse: [
            {
                name: 'Picture Mode',
                commond: '',
                pageId: 'setting_pic_mode'
            },
            {
                name: 'SoundMode',
                commond: '',
                pageId: 'setting_snd_mode'
            },
            {
                name: 'SAP XXX',
                commond: '',
                pageId: 'setting_snd_sap'
            },
            {
                name: 'Close Caption',
                commond: '',
                pageId: 'setting_sys_cc_page'
            }
        ],
        moreSetting: {
            name: 'More Settings',
            commond: '',
            pageId: 'setting_fircls_page'
        }
    };

    self.pageData = {
        setting_qsp_title: {Data: ''},
        setting_qsp_Modes: {Data: [], SelectedIndex: 0},
        setting_qsp_more: {Data: ''},
        rewrite: rewritePageData
    };

    self.pageData.operateData = oprtData;

    function rewritePageData(pageData) {
        pageData.setting_qsp_title.Data = oprtData.title;

        pageData.setting_qsp_Modes.Data = [];
        oprtData.recentUse.forEach(function(v) {
            pageData.setting_qsp_Modes.Data.push({
                setting_qsm_item: {Data: v.name}
            });
        });
        pageData.setting_qsp_Modes.Data.SelectedIndex = 0;

        pageData.setting_qsp_more.Data = oprtData.moreSetting.name;

    }

    self.onFocus = function() {

    }

    self.onOpen = function() {

//        createModulePage('setting_fircls_page', hiWebOsFrame[self.id]);

    }

    self.onClose = function() {

    }

    self.onDestroy = function() {

    }
    self.openModePage = function() {
        var ind = this.SelectedIndex;
        openPageByParam(oprtData.recentUse[ind]);

    }

    self.openMoreSetting = function(){
        openPageByParam(oprtData.moreSetting);
    }

    self.initRecentUse = function(){

    }

    function openPageByParam(param){

        if('' == param.commond) {
            hiWebOsFrame[self.id].close();
            createModulePage(param.pageId, hiWebOsFrame[self.id]);
        }
        else {
            param.commond.call(this);
        }
    }

}

var qSetting = new quicSetting();
