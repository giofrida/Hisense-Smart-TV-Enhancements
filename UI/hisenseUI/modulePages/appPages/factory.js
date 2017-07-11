/**
 * Created by BOB.J on 2014/12/10.
 */

function getFactoryPageData(){

    return appFac.pageData;
}


function AppFactory() {
    var self = this;

    self.pageData = {};

    var oprtData = {
        command: '',
        isRemoteKey: false,
        amName: "factory",
        commandType: 0,
        appStarted: false
    };

    self.pageData.operateData = oprtData;

    //var appOpened = false;
    self.onOpenFactory = function() {
        //factoryLoading = true;
        model.hisfactory.setStateOpen(1);
        try {
            if(!!hiWebOsFrame.SettingSndAdvancedPage && hiWebOsFrame.isPageExist(hiWebOsFrame.SettingSndAdvancedPage.id)){
                debugG('factory Open, hiWebOsFrame.SettingSndAdvancedPage still exist, close it');
                hiWebOsFrame.SettingSndAdvancedPage.close();
                hiWebOsFrame.SettingSndAdvancedPage.destroy();
            }
        } catch (ex) {
            debugE(ex.message);
        }
    }

    self.onCloseFactory = function() {
        //factoryLoading = true;
        model.hisfactory.setStateOpen(0);
        sendAM(":am,am,:focus=dtv_app_mtk");
    }
}

var appFac = new AppFactory();
