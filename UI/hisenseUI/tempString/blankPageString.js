
var blank_tmpStr = '<div id="chl_firstPlayTV" style="display: none">'+
    '<div id="chl_fpt_info" class="chl_fpt_info" style="visibility: hidden">'+
        '<img class="chl_fpt_info_up" src="img/infobar/up.png">'+

        '<div id="chl_fpt_info_text" class="chl_fpt_info_text">Load Info Bar</div>'+
    '</div>'+
    '<div id="chl_fpt_list" class="chl_fpt_list" style="visibility: hidden">'+
        '<img class="chl_fpt_list_ok" src="img/infobar/ok.png">'+

        '<div id="chl_fpt_list_text" class="chl_fpt_list_text">Load Channel List</div>'+
    '</div>'+
    '<div id="chl_fpt_pvr" class="chl_fpt_pvr" style="visibility: hidden">'+
        '<img class="chl_fpt_list_ok" src="img/infobar/down.png">'+

        '<div id="chl_fpt_pvr_text" class="chl_fpt_pvr_text">Load PVR/T.Shift</div>'+
    '</div>'+
    '<div id="chl_fpt_watch" class="chl_fpt_watch" style="visibility: hidden">'+
        '<img class="chl_fpt_watch_back" src="img/infobar/back.png">'+

        '<div id="chl_fpt_watch_text" class="chl_fpt_watch_text">Load Recent Watch</div>'+
    '</div>'+

'</div>'+
'<div id="chl_showChannelNum" style="display: none">'+
    '<div id="chl_scn_text" class="chl_scn_text"></div>'+
'</div>'+

'<div id="chl_showNoSignal" style="display: none">'+
    '<span id="chl_sns_text" class="chl_sns_text"></span>'+
'</div>'+
'<div id="chl_showAudioOnly" style="display: none">'+
        '<span id="chl_sao_text" class="chl_sao_text"></span>'+
 '</div>'+

'<div id="chl_showOtherSourceInfoBar" style="display: none">'+
    '<div class="chl_sos_line">'+
        '<img id="chl_sos_icon36" class="chl_sos_icon36">'+
        '<div id="chl_sos_name" class="chl_sos_name" style="display: inline-block"></div>'+
        '<div id="chl_sos_name1" class="chl_sos_name1"></div>'+
        '<img id="chl_sos_icon" class="chl_sos_icon" src="img/infobar/MHL.png" style="display: none">'+
    '</div>'+
    '<span id="chl_sos_text" class="chl_sos_text"></span>'+
    '<span id="chl_sos_hz" class="chl_sos_text"></span>'+
'</div>'+

'<div id="chl_showInfoBar" style="display: none">'+
    '<div id="chl_sib_left" style="display: none" class="chl_sib_left">'+
        '<div id="chl_sib_left_line1" class="chl_sib_left_line1">'+
            '<span id="chl_sib_ch_num" class="chl_sib_ch_num" style="display: inline-block"></span>'+

            '<div id="chl_sib_icon30" class="chl_sib_icon30">'+
                '<img id="chl_sib_icon30_1" style="display: none" class="chl_sib_icon30_3">'+
                '<img id="chl_sib_icon30_2" style="display: none" class="chl_sib_icon30_3">'+
                '<img id="chl_sib_icon30_3" style="display: none" class="chl_sib_icon30_3">'+
                '<img id="chl_sib_icon30_4" style="display: none" class="chl_sib_icon30_3">'+
                '<img id="chl_sib_icon30_5" style="display: none" class="chl_sib_icon30_3">'+
                '<span id="chl_sib_ch_format" class="chl_sib_ch_format" style="display: inline-block"></span>'+
            '</div>'+
        '</div>'+
        '<div id="chl_sib_channel_name" class="chl_sib_channel_name"></div>'+
        '<div id="chl_sib_date" class="chl_sib_date"></div>'+

    '</div>'+
    '<div id="chl_sib_left_signal" style="display: none" class="chl_sib_left">'+
        '<img class="chl_sib_larrow" src="img/infobar/larrow.png">'+
        '<div id="chl_sib_left_signal_name" class="chl_sib_left_signal_name"></div>'+
        '<div id="chl_sib_left_signal_level" class="chl_sib_signal"></div>'+
        '<div id="chl_sib_left_signal_strength" class="chl_sib_signal" style="display: none"></div>'+

    '</div>'+
    '<div id="chl_sib_right" class="chl_sib_right" style="display: none">'+
        '<div class="chl_sib_right_line1">'+
            '<span id="chl_sib_startTime" class="chl_sib_startTime"></span>'+

            '<div id="chl_sib_progress_bg" class="chl_sib_progress_bg">'+
                '<div id="chl_sib_progress_color" class="chl_sib_progress_color"></div>'+
            '</div>'+
            '<span id="chl_sib_endTime" class="chl_sib_endTime"></span>'+

            '<div class="chl_sib_pro_para1">'+
                '<span id="chl_sib_pro_para_7" class="chl_sib_pro_para_1" style="display: none">1080i</span>'+
                '<img id="chl_sib_pro_para_line_7" class="chl_sib_pro_para_line" src="img/infobar/line.png" style="display: none">'+
                '<span id="chl_sib_pro_para_6" class="chl_sib_pro_para_1" style="display: none">4:3</span>'+
                '<img id="chl_sib_pro_para_line_6" class="chl_sib_pro_para_line" src="img/infobar/line.png" style="display: none">'+
                '<span id="chl_sib_pro_para_5" class="chl_sib_pro_para_1" style="display: none">DTV</span>'+
                '<img id="chl_sib_pro_para_line_5" class="chl_sib_pro_para_line" src="img/infobar/line.png" style="display: none">'+
                '<span id="chl_sib_pro_para_4" class="chl_sib_pro_para_1" style="display: none">CC</span>'+
                '<img id="chl_sib_pro_para_line_4" class="chl_sib_pro_para_line" src="img/infobar/line.png" style="display: none">'+
                '<span id="chl_sib_pro_para_3" style="display: none" class="chl_sib_pro_para_1" >Hbbtv</span>'+
                '<img id="chl_sib_pro_para_line_3" class="chl_sib_pro_para_line" style="display: none" src="img/infobar/line.png">'+
                '<span id="chl_sib_pro_para_2" class="chl_sib_pro_para_1" style="display: none">PG-16</span>'+
                '<img id="chl_sib_pro_para_line_2" class="chl_sib_pro_para_line" style="display: none" src="img/infobar/line.png">'+
                '<span id="chl_sib_pro_para_1" class="chl_sib_pro_para_1" style="display: none">PG-16</span>'+
            '</div>'+
        '</div>'+
        '<div class="chl_sib_right_line2">'+
            '<span id="chl_sib_nowName" class="chl_sib_nowName" style="display: inline-block">11</span>'+
            '<img id="chl_sib_icon36_1" class="chl_sib_icon36" src="img/common/deaf36.png" style="display: none">'+
           ' <img id="chl_sib_icon36_2" class="chl_sib_icon36" src="img/common/sight36.png" style="display: none">'+

            '<div class="chl_sib_pro_para2">'+
                '<span id="chl_sib_pro_para_11" class="chl_sib_pro_para_1" style="display: none">1/4 Eng</span>'+
                '<img class="chl_sib_pro_para_line_11" src="img/infobar/line.png" style="display: none">'+
                '<span id="chl_sib_pro_para_10" class="chl_sib_pro_para_1" style="display: none">Sub.T</span>'+
                '<img id="chl_sib_pro_para_line_10" style="display: none" class="chl_sib_pro_para_line" src="img/infobar/line.png">'+
                '<span id="chl_sib_pro_para_9" class="chl_sib_pro_para_1" style="display: none">Dolby</span>'+
                '<img id="chl_sib_pro_para_line_9" class="chl_sib_pro_para_line" src="img/infobar/line.png" style="display: none">'+
                '<span id="chl_sib_pro_para_8" class="chl_sib_pro_para_1" style="display: none">Dolby</span>'+
            '</div>'+
        '</div>'+
        '<img id="chl_sib_rarrow" style="visibility: hidden" class="chl_sib_rarrow" src="img/infobar/rarrow.png">'+
        '<div class="chl_sib_right_line3">'+
            '<span id="chl_sib_nextTime" class="chl_sib_nextTime"></span>'+
            '<span id="chl_sib_nextName" class="chl_sib_nextName" style="display: inline-block"></span>'+

        '</div>'+
        '<div id="chl_sib_more_info_normal" class="chl_sib_prgm_bottom" style="display: none">'+
            '<span id="chl_sib_bottom_info_normal" class="chl_sib_bottom_info">More Info</span>'+
            '<img class="chl_scl_bottom_img40" src="img/channellist/detail40.png">'+
        '</div>'+

    '</div>'+
    '<div id="chl_sib_detail" class="chl_sib_right" style="display: none">'+
        '<div id="chl_sib_prgm_title" class="chl_sib_prgm_title">fox GGGGGG</div>'+

        '<div id="chl_sib_prgm_detail" class="chl_sib_prgm_detail"></div>'+
        '<div id="chl_sib_more_info_detail" class="chl_sib_prgm_bottom" style="display: none">'+
            '<span id="chl_sib_bottom_info" class="chl_sib_bottom_info">More Info</span>'+
            '<img class="chl_scl_bottom_img40" src="img/channellist/detail40.png">'+
        '</div>'+

    '</div>'+
    '<div id="chl_sib_noprogram" class="chl_sib_right" style="display: none">'+
        '<span id="chl_sib_noprogram_text" class="chl_sib_noprogram_text" style="display: inline-block"></span>'+

    '</div>'+
'</div>'+
'<div id="chl_showChannelList" style="display: none">'+

    '<div id="chl_scl_right" class="chl_scl_right">'+
        '<div id="chl_scl_top" class="chl_scl_top">'+
            '<div id="chl_scl_top_title_list" class="chl_scl_top_title_list">.</div>'+
            '<div id="chl_scl_top_title" class="chl_scl_top_title_focus"></div>' +

            '<div id="chl_scl_top_info" class="chl_scl_top_title_unfocus" style="display: none"></div>'+
        '</div>'+
        '<div class="chl_scl_middle_bg">'+
        '</div>'+

        '<div id="chl_scl_middle" class="chl_scl_middle">'+
            '<div class="chl_scl_middle_unfocus">'+
                '<div id="chl_scl_middle_item1" style="display: block">'+
                    '<div class="chl_scl_middle_line">'+
                        '<span id="chl_scl_middle_ch_num1" class="chl_scl_middle_ch_num"></span>'+
                        '<span id="chl_scl_middle_ch_name1" class="chl_scl_middle_ch_name"'+
                              'style="display: inline-block"></span>'+

                        '<div class="chl_scl_icon30">'+
                            '<img id="chl_scl_middle_icon30_11" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_12" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_13" style="display: inline" class="chl_sib_icon30_1">'+
                        '</div>'+
                    '</div>'+
                    '<span id="chl_scl_middle_ch_prgm1" class="chl_scl_middle_ch_prgm"></span>'+
                '</div>'+
            '</div>'+
            '<div class="chl_scl_middle_unfocus">'+
                '<div id="chl_scl_middle_item2" style="display: block">'+
                    '<div class="chl_scl_middle_line">'+
                        '<span id="chl_scl_middle_ch_num2" class="chl_scl_middle_ch_num"></span>'+
                        '<span id="chl_scl_middle_ch_name2" class="chl_scl_middle_ch_name"'+
                              'style="display: inline-block"></span>'+

                        '<div class="chl_scl_icon30">'+
                            '<img id="chl_scl_middle_icon30_21" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_22" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_23" style="display: inline" class="chl_sib_icon30_1">'+
                        '</div>'+
                    '</div>'+
                    '<span id="chl_scl_middle_ch_prgm2" class="chl_scl_middle_ch_prgm"></span>'+
                '</div>'+
            '</div>'+
            '<div class="chl_scl_middle_unfocus">'+
                '<div id="chl_scl_middle_item3" style="display: block">'+
                    '<div class="chl_scl_middle_line_focus">'+
                        '<span id="chl_scl_middle_ch_num3" class="chl_scl_middle_ch_num"></span>'+
                        '<span id="chl_scl_middle_ch_name3" class="chl_scl_middle_ch_name"'+
                              'style="display: inline-block"></span>'+

                        '<div class="chl_scl_icon30">'+
                            '<img id="chl_scl_middle_icon30_31" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_32" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_33" style="display: inline" class="chl_sib_icon30_1">'+
                        '</div>'+
                    '</div>'+
                    '<span id="chl_scl_middle_ch_prgm3" class="chl_scl_middle_ch_prgm"'+
                          'style="display: inline-block"></span>'+
                '</div>'+
            '</div>'+
            '<div id="chl_scl_middle_focus" class="chl_scl_middle_focus">'+
                '<div id="chl_scl_middle_item4" style="display: block">'+
                    '<div class="chl_scl_middle_line">'+
                        '<span id="chl_scl_middle_ch_num4" class="chl_scl_middle_ch_num"></span>'+
                        '<span id="chl_scl_middle_ch_name4" class="chl_scl_middle_ch_name"'+
                              'style="display: inline-block"></span>'+

                        '<div class="chl_scl_icon30">'+
                            '<img id="chl_scl_middle_icon30_41" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_42" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_43" style="display: inline" class="chl_sib_icon30_1">'+
                        '</div>'+
                    '</div>'+
                    '<span id="chl_scl_middle_ch_prgm4" class="chl_scl_middle_ch_prgm_focus"></span>'+
                    '<div id="chl_scl_progress_bg" class="chl_scl_progress_bg">'+
                        '<div id="chl_scl_progress_color" class="chl_scl_progress_color"></div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="chl_scl_middle_unfocus">'+
                '<div id="chl_scl_middle_item5" style="display: block">'+
                    '<div class="chl_scl_middle_line">'+
                        '<span id="chl_scl_middle_ch_num5" class="chl_scl_middle_ch_num"></span>'+
                        '<span id="chl_scl_middle_ch_name5" class="chl_scl_middle_ch_name"'+
                              'style="display: inline-block"></span>'+

                        '<div class="chl_scl_icon30">'+
                            '<img id="chl_scl_middle_icon30_51" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_52" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_53" style="display: inline" class="chl_sib_icon30_1">'+
                        '</div>'+
                    '</div>'+
                    '<span id="chl_scl_middle_ch_prgm5" class="chl_scl_middle_ch_prgm"></span>'+
                '</div>'+

            '</div>'+
            '<div class="chl_scl_middle_unfocus">'+
                '<div id="chl_scl_middle_item6" style="display: block">'+
                    '<div class="chl_scl_middle_line">'+
                        '<span id="chl_scl_middle_ch_num6" class="chl_scl_middle_ch_num"></span>'+
                        '<span id="chl_scl_middle_ch_name6" class="chl_scl_middle_ch_name"'+
                              'style="display: inline-block"></span>'+

                        '<div class="chl_scl_icon30">'+
                            '<img id="chl_scl_middle_icon30_61" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_62" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_63" style="display: inline" class="chl_sib_icon30_1">'+
                        '</div>'+
                    '</div>'+
                    '<span id="chl_scl_middle_ch_prgm6" class="chl_scl_middle_ch_prgm"></span>'+
                '</div>'+

            '</div>'+
            '<div class="chl_scl_middle_unfocus">'+
                '<div id="chl_scl_middle_item7" style="display: block">'+
                    '<div class="chl_scl_middle_line">'+
                        '<span id="chl_scl_middle_ch_num7" class="chl_scl_middle_ch_num"></span>'+
                        '<span id="chl_scl_middle_ch_name7" class="chl_scl_middle_ch_name"'+
                              'style="display: inline-block"></span>'+

                        '<div class="chl_scl_icon30">'+
                            '<img id="chl_scl_middle_icon30_71" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_72" style="display: inline" class="chl_sib_icon30_1">'+
                            '<img id="chl_scl_middle_icon30_73" style="display: inline" class="chl_sib_icon30_1">'+
                        '</div>'+
                    '</div>'+
                    '<span id="chl_scl_middle_ch_prgm7" class="chl_scl_middle_ch_prgm"></span>'+
                '</div>'+

            '</div>'+
            '<div id="chl_scl_bottom" class="chl_scl_bottom">'+
                '<span id="chl_scl_bottom_info" class="chl_scl_bottom_info" style="display: none" >Info</span>'+
                '<img class="chl_scl_bottom_img" src="img/channellist/info32.png" style="display: none">'+
                '<span id="chl_scl_bottom_channellist" class="chl_scl_bottom_channellist">CH.List Select</span>'+
                '<img class="chl_scl_bottom_img" src="img/channellist/left32.png">'+
            '</div>'+
        '</div>'+
        '<div id="chl_scl_top_shadow" class="chl_scl_top_shadow" style="display: none">'+
        '</div>'+
        '<div id="chl_scl_bottom_shadow" class="chl_scl_bottom_shadow" style="display: none">'+
        '</div>'+
        '<div id="chl_scl_bar" class="chl_scl_bar" style="display: none">'+
        '</div>'+

    '</div>'+
    '<div id="chl_scl_left_top" class="chl_scl_left_top" style="display: none">Select List</div>'+
    '<div id="chl_scl_left" class="chl_scl_left" style="display: none">'+

        '<div id="chl_scl_left_list">'+
            '<ul id="chl_scl_type_list">'+
            '</ul>'+
        '</div>'+
        '<div id="chl_scl_left_shadow" class="chl_scl_left_shadow"></div>'+
        '<div id="chl_scl_left_bottom" class="chl_scl_left_bottom"></div>'+
        '<div id="chl_scl_left_bar" class="chl_scl_left_bar" style="display: none"></div>'+

    '</div>'+

'</div>'+

'<div id="chl_showProgramList" style="display: none">'+
    '<div class="chl_scl_right">'+
        '<div class="chl_scl_top">'+


            '<div id="chl_spl_top_title" class="chl_spl_top_title_unfocus" style="display: inline-block"></div>'+
            '<div id="chl_spl_top_info" class="chl_spl_top_title_focus" style="display: inline-block">Info</div>'+


        '</div>'+
        '<div class="chl_spl_middle">'+
            '<div class="chl_spl_middle_top">'+
                '<div class="chl_spl_middle_top1">'+
                    '<span id="chl_spl_middle_ch_num" class="chl_scl_middle_ch_num"></span>'+
                    '<span id="chl_spl_middle_ch_name" class="chl_scl_middle_ch_name"'+
                          'style="display: inline-block"></span>'+

                    '<div class="chl_scl_icon30">'+
                        '<img id="chl_spl_middle_icon30_1" style="display: inline" class="chl_sib_icon30_1">'+
                        '<img id="chl_spl_middle_icon30_2" style="display: inline" class="chl_sib_icon30_1">'+
                        '<img id="chl_spl_middle_icon30_3" style="display: inline" class="chl_sib_icon30_1">'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div id="chl_spl_middle_program0" class="chl_spl_current_unfocus">'+
                '<div id="chl_spl_middle_item0" style="display: block">'+

                    '<div id="chl_spl_middle_name0" class="chl_spl_middle_name0_focus"></div>'+
                    '<span id="chl_spl_startTime0" class="chl_spl_startTime"></span>'+

                    '<div id="chl_spl_progress_bg" class="chl_spl_progress_bg" style="display: none">'+
                        '<div id="chl_spl_progress_color" class="chl_scl_progress_color"></div>'+

                    '</div>'+
                    '<span id="chl_spl_endTime0" class="chl_spl_startTime"></span>'+

                    '<div id="chl_spl_detail_item0" class="chl_spl_detail"></div>'+
                '</div>'+

            '</div>'+
            '<div id="chl_spl_middle_program1" class="chl_spl_middle_unfocus">'+
                '<div id="chl_spl_middle_item1" style="display: block">'+
                    '<span id="chl_spl_middle_name1" class="chl_spl_middle_name" style="display: inline-block"></span>'+

                    '<div class="chl_spl_icon30">'+
                        '<img id="chl_spl_middle_icon30_11" style="display: inline" class="chl_sib_icon30_1">'+
                        '<img id="chl_spl_middle_icon30_12" style="display: inline" class="chl_sib_icon30_1">'+
                    '</div>'+
                    '<div id="chl_spl_middle_time1" class="chl_spl_middle_time"></div>'+
                    '<div id="chl_spl_detail_item1" class="chl_spl_detail"></div>'+
                '</div>'+
            '</div>'+
            '<div id="chl_spl_middle_program2" class="chl_spl_middle_unfocus">'+
                '<div id="chl_spl_middle_item2" style="display: block">'+
                    '<span id="chl_spl_middle_name2" class="chl_spl_middle_name" style="display: inline-block"></span>'+

                    '<div class="chl_spl_icon30">'+
                        '<img id="chl_spl_middle_icon30_21" style="display: inline" class="chl_sib_icon30_1">'+
                        '<img id="chl_spl_middle_icon30_22" style="display: inline" class="chl_sib_icon30_1">'+
                    '</div>'+
                    '<div id="chl_spl_middle_time2" class="chl_spl_middle_time"></div>'+
                    '<div id="chl_spl_detail_item2" class="chl_spl_detail"></div>'+
                '</div>'+
            '</div>'+
            '<div id="chl_spl_middle_program3" class="chl_spl_middle_unfocus">'+
                '<div id="chl_spl_middle_item3" style="display: block">'+
                    '<span id="chl_spl_middle_name3" class="chl_spl_middle_name" style="display: inline-block"></span>'+

                    '<div class="chl_spl_icon30">'+
                        '<img id="chl_spl_middle_icon30_31" style="display: inline" class="chl_sib_icon30_1">'+
                        '<img id="chl_spl_middle_icon30_32" style="display: inline" class="chl_sib_icon30_1">'+
                    '</div>'+
                    '<div id="chl_spl_middle_time3" class="chl_spl_middle_time"></div>'+
                    '<div id="chl_spl_detail_item3" class="chl_spl_detail"></div>'+
                '</div>'+
            '</div>'+

        '</div>'+
        '<div class="chl_spl_bottom">'+
            '<span id="chl_spl_bottom_channellist" class="chl_scl_bottom_info">CH.List</span>'+
            '<img class="chl_scl_bottom_img" src="img/channellist/left32.png">'+
            '<span id="chl_spl_bottom_detail" class="chl_scl_bottom_channellist">Program Detail</span>'+
            '<img class="chl_scl_bottom_img40" src="img/channellist/detail40.png">'+
        '</div>'+

    '</div>'+
'</div>'+

'<div id="chl_showPowerOffDialog" style="display: none">'+
    '<div class="chl_sdg_top">'+
        '<img id="chl_spd_alert" class="chl_sdg_alert" src="img/common/alert.png">'+
        '<div id="chl_spd_content" class="chl_sdg_content"></div>'+
    '</div>'+
    '<div class="chl_sdg_bottom">'+
        '<span id="chl_spd_btn_cancel" class="chl_spd_btn_focus" ></span>'+
    '</div>'+
'</div>'+
'<div id="chl_showDialog" style="display: none">'+
    '<div class="chl_sdg_top">'+
        '<img id="chl_sdg_alert" class="chl_sdg_alert" src="img/common/alert.png">'+
        '<div id="chl_sdg_content" class="chl_sdg_content"></div>'+
    '</div>'+
    '<div class="chl_sdg_bottom">'+
        '<span id="chl_sdg_btn_ok" class="chl_sdg_btn_focus"></span>'+
        '<span id="chl_sdg_btn_cancel" class="chl_sdg_btn_unfocus" ></span>'+
    '</div>'+
'</div>'+
'<div id="chl_showInputPassword" style="display: none">'+

    '<div id="chl_sip_text" class="chl_sip_text"></div>'+
    '<div class="chl_sip_inputbg">'+
        '<div id="chl_sip_zipContainer1" class="chl_sip_zipContainerFocus">'+
            '<input id="chl_sip_input1"  class="chl_sip_input"  maxlength="1" type="password">'+
        '</div>'+
        '<div id="chl_sip_zipContainer2" class="chl_sip_zipContainerNormal">'+
            '<input id="chl_sip_input2"  class="chl_sip_input" maxlength="1" type="password">'+
        '</div>'+
        '<div id="chl_sip_zipContainer3" class="chl_sip_zipContainerNormal">'+
            '<input id="chl_sip_input3"  class="chl_sip_input" maxlength="1" type="password">'+
        '</div>'+
        '<div id="chl_sip_zipContainer4" class="chl_sip_zipContainerNormal" >'+
            '<input id="chl_sip_input4"  class="chl_sip_input" maxlength="1" type="password">'+
        '</div>'+
    '</div>'+
'</div>';