/**
 * Created by liutiantian on 14-11-10.
 */

var iqqiRootHead =
    "    <div id=\"iqqiInputContainer\" class=\"iqqiInputContainer\" style=\"direction: ltr\">" +
    "        <div id=\"iqqiPosition\" class=\"iqqiPosition_Normal\">" +
    "            <div id=\"iqqiInput\" class=\"iqqiInput_Normal\">" +
    "                <div id=\"iqqiCursor\" class=\"iqqiCursor_Normal\"></div>" +
    "            </div>" +
    "        </div>" +
    "    </div>" +
    "    <div class=\"iqqiContainer\">" +
    "        <div id=\"iqqiImagineArea\" class=\"iqqiImagineArea\">" +
    "            <div id=\"iqqiImagineAreaContainer\" class=\"iqqiImagineAreaContainer\">";

var iqqiRootHead_RTL =
    "    <div id=\"iqqiInputContainer\" class=\"iqqiInputContainer\" style=\"direction: rtl\">" +
    "        <div id=\"iqqiPosition\" class=\"iqqiPosition_Normal\">" +
    "            <div id=\"iqqiInput\" class=\"iqqiInput_Normal\">" +
    "                <div id=\"iqqiCursor\" class=\"iqqiCursor_Normal\"></div>" +
    "            </div>" +
    "        </div>" +
    "    </div>" +
    "    <div class=\"iqqiContainer\"style=\"direction: rtl\">" +
    "        <div id=\"iqqiImagineArea\" class=\"iqqiImagineArea\">" +
    "            <div id=\"iqqiImagineAreaContainer\" class=\"iqqiImagineAreaContainer\">";


var iqqiRootHead_Password =
    "    <div id=\"iqqiInputContainer\" class=\"iqqiInputContainerPassword\" style=\"direction: ltr\">" +
    "        <div id=\"iqqiPosition\" class=\"iqqiPosition_Password_Normal\">" +
    "            <div id=\"iqqiInput\" class=\"iqqiInput_Normal\">" +
    "                <div id=\"iqqiCursor\" class=\"iqqiCursor_Normal\"></div>" +
    "            </div>" +
    "        </div>" +
    "    </div>" +
    "    <div class=\"iqqiContainerPassword\" style=\"direction: ltr\">";

var iqqiRootHead_Password_Text =
    "    <div id=\"iqqiInputContainer\" class=\"iqqiInputContainerPassword\" style=\"direction: ltr\">" +
    "        <div id=\"iqqiPosition\" class=\"iqqiPosition_Password_Normal\">" +
    "            <div id=\"iqqiInput\" class=\"iqqiInput_Normal\">" +
    "                <div id=\"iqqiCursor\" class=\"iqqiCursor_Normal\"></div>" +
    "            </div>" +
    "        </div>" +
    "    </div>" +
    "    <div class=\"iqqiContainerPassword\" style=\"direction: ltr\">";

var iqqiRootBelly =
    "            </div>" +
    "        </div>" +
    "        <div id=\"iqqiContent\" class=\"iqqiContentNormal\">";

var iqqiRootBelly_Password =
    "        <div id=\"iqqiContent\" class=\"iqqiContentNormal\">";

var iqqiRootTail =
    "        </div>" +
    "        <div id=\"iqqiControlArea\" class=\"iqqiControlArea\">" +
    "            <div id=\"iqqiControlAreaEnter\"class=\"iqqiControlItemNormal\">" +
    "                <div class=\"iqqiControlEnterIconNormal\"></div>" +
    "                <div class=\"iqqiControlItemLabelNormal\">Enter</div>" +
    "            </div>" +
    "            <div id=\"iqqiControlAreaDelete\" class=\"iqqiControlItemNormal\">" +
    "                <div class=\"iqqiControlDeleteIconNormal\"></div>" +
    "                <div class=\"iqqiControlItemLabelNormal\">Delete</div>" +
    "            </div>" +
    "            <div id=\"iqqiControlAreaRight\" class=\"iqqiControlItemNormal\">" +
    "                <div class=\"iqqiControlRightIconNormal\"></div>" +
    "                <div class=\"iqqiControlItemLabelNormal\">Right</div>" +
    "            </div>" +
    "            <div id=\"iqqiControlAreaLeft\" class=\"iqqiControlItemNormal\">" +
    "                <div class=\"iqqiControlLeftIconNormal\"></div>" +
    "                <div class=\"iqqiControlItemLabelNormal\">Left</div>" +
    "            </div>" +
    "        </div>" +
    "    </div>";

var iqqiRootTail_RTL =
    "        </div>" +
    "        <div id=\"iqqiControlArea\" class=\"iqqiControlArea\">" +
    "            <div id=\"iqqiControlAreaEnter\"class=\"iqqiControlItem_RTL_Normal\">" +
    "                <div class=\"iqqiControlEnterIcon_RTL_Normal\"></div>" +
    "                <div class=\"iqqiControlItemLabelNormal\">Enter</div>" +
    "            </div>" +
    "            <div id=\"iqqiControlAreaDelete\" class=\"iqqiControlItem_RTL_Normal\">" +
    "                <div class=\"iqqiControlDeleteIcon_RTL_Normal\"></div>" +
    "                <div class=\"iqqiControlItemLabelNormal\">Delete</div>" +
    "            </div>" +
    "            <div id=\"iqqiControlAreaRight\" class=\"iqqiControlItem_RTL_Normal\">" +
    "                <div class=\"iqqiControlRightIcon_RTL_Normal\"></div>" +
    "                <div class=\"iqqiControlItemLabelNormal\">Right</div>" +
    "            </div>" +
    "            <div id=\"iqqiControlAreaLeft\" class=\"iqqiControlItem_RTL_Normal\">" +
    "                <div class=\"iqqiControlLeftIcon_RTL_Normal\"></div>" +
    "                <div class=\"iqqiControlItemLabelNormal\">Left</div>" +
    "            </div>" +
    "        </div>" +
    "    </div>";

var iqqiEnHome =
    "    <div id=\"iqqiEnHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col10KeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col10KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col10KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col10KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col10KeyNormal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col10KeyNormal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col10KeyNormal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col10KeyNormal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col10KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col10KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"Line5Col9LineCenterNormal\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col9KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col9KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col9KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col9KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col9KeyNormal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col9KeyNormal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col9KeyNormal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col9KeyNormal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col9KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"engShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"shift9ItemEnNormal\">z</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"shift9ItemEnNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"shift9ItemEnNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"shift9ItemEnNormal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"shift9ItemEnNormal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"shift9ItemEnNormal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"shift9ItemEnNormal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"shift9ItemEnNormal\">,</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"shift9ItemEnNormal\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"controlHome_escEnNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"controlHome_LanSwitchNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"controlHome_NumberSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"controlHome_WhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"controlHome_BackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"controlHome_EnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiPasswordHome =
    "    <div id=\"iqqiEnHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col10KeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col10KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col10KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col10KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col10KeyNormal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col10KeyNormal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col10KeyNormal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col10KeyNormal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col10KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col10KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"Line5Col9LineCenterNormal\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col9KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col9KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col9KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col9KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col9KeyNormal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col9KeyNormal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col9KeyNormal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col9KeyNormal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col9KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"engShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"shift9ItemEnNormal\">z</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"shift9ItemEnNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"shift9ItemEnNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"shift9ItemEnNormal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"shift9ItemEnNormal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"shift9ItemEnNormal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"shift9ItemEnNormal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"shift9ItemEnNormal\">,</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"shift9ItemEnNormal\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"controlHome_escEnNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"controlHome_LanSwitchDisableNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"controlHome_NumberSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"controlHome_WhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"controlHome_BackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"controlHome_EnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiMsaHome =
    "    <div id=\"iqqiMsaHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col10KeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col10KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col10KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col10KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col10KeyNormal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col10KeyNormal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col10KeyNormal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col10KeyNormal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col10KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col10KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThdLine\" class=\"Line5Col9LineCenterNormal\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col9KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col9KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col9KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col9KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col9KeyNormal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col9KeyNormal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col9KeyNormal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col9KeyNormal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col9KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"engShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"shift9ItemEnNormal\">z</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"shift9ItemEnNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"shift9ItemEnNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"shift9ItemEnNormal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"shift9ItemEnNormal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"shift9ItemEnNormal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"shift9ItemEnNormal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"shift9ItemEnNormal\">,</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"shift9ItemEnNormal\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"controlHome_escEnNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"controlHome_LanSwitchNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"controlHome_NumberSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"msaWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"controlHome_BackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"controlHome_EnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiHebHome =
    "    <div id=\"iqqiMsaHome\" class=\"iqqiEnHome\" style=\"direction: ltr\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"Line5Col9LineCenterNormal\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col9KeyNormal\">&#1523;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col9KeyNormal\">&#1511;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col9KeyNormal\">&#1512;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col9KeyNormal\">&#1488;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col9KeyNormal\">&#1496;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col9KeyNormal\">&#1493;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col9KeyNormal\">&#1503;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col9KeyNormal\">&#1501;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col9KeyNormal\">&#1508;</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col10KeyNormal\">&#1513;</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col10KeyNormal\">&#1491;</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col10KeyNormal\">&#1490;</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col10KeyNormal\">&#1499;</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col10KeyNormal\">&#1506;</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col10KeyNormal\">&#1497;</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col10KeyNormal\">&#1495;</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col10KeyNormal\">&#1500;</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col10KeyNormal\">&#1498;</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col10KeyNormal\">&#1507;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"Line5Col11KeyNormal\">&#1494;</div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col11KeyNormal\">&#1505;</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col11KeyNormal\">&#1489;</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col11KeyNormal\">&#1492;</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">&#1504;</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">&#1502;</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">&#1510;</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">&#1514;</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col11KeyNormal\">&#1509;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col11KeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"Line5Col11KeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"Line5Col11EscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"Line5Col11LanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"Line5Col11NumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"hebWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"Line5Col11BackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"Line5Col11EnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\">&quot;,&quot;</div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiFasHome =
    "    <div id=\"iqqiMsaHome\" class=\"iqqiEnHome\" style=\"direction: ltr\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">&#1777;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">&#1778;</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">&#1779;</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">&#1780;</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">&#1781;</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">&#1782;</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">&#1783;</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">&#1784;</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">&#1785;</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">&#1776;</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col12SideKeyNormal\">&#1590;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col12KeyNormal\">&#1589;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col12KeyNormal\">&#1579;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col12KeyNormal\">&#1602;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col12KeyNormal\">&#1601;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col12KeyNormal\">&#1594;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col12KeyNormal\">&#1593;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col12KeyNormal\">&#1607;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col12KeyNormal\">&#1582;</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col12KeyNormal\">&#1581;</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col12KeyNormal\">&#1580;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"Line5Col12SideKeyNormal\">&#1670;</div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col13SideKeyNormal\">&#1588;</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col13SideKeyNormal\">&#1587;</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col13SideKeyNormal\">&#1705;</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col13SideKeyNormal\">&#1576;</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col13SideKeyNormal\">&#1604;</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col13KeyNormal\">&#1570;</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col13KeyNormal\">&#1575;</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col13KeyNormal\">&#1578;</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col13SideKeyNormal\">&#1606;</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col13SideKeyNormal\">&#1605;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col13SideKeyNormal\">&#1705;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"Line5Col13SideKeyNormal\">&#1711;</div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"Line5Col13SideKeyNormal\">&#1548;</div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"Line5Col12SideKeyNormal\">&#1610;</div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col12KeyNormal\">&#1574;</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col12KeyNormal\">&#1592;</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col12KeyNormal\">&#1591;</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col12KeyNormal\">&#1688;</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col12KeyNormal\">&#1586;</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col12KeyNormal\">&#1585;</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col12KeyNormal\">&#1584;</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col12KeyNormal\">&#1583;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col12KeyNormal\">&#1662;</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"Line5Col12KeyNormal\">&#1608;</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"Line5Col12SideKeyNormal\"> &#1628;</div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"fasEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"fasLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"fasNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"fasWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"fasBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"fasEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiRusHome =
    "    <div id=\"iqqiMsaHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col11KeyNormal\">&#1104;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col11KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col11KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col11KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">4</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">5</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">6</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">7</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col11KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col11KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"Line5Col11KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col12SideKeyNormal\">&#1081;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col12KeyNormal\">&#1094;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col12KeyNormal\">&#1091;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col12KeyNormal\">&#1082;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col12KeyNormal\">&#1077;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col12KeyNormal\">&#1085;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col12KeyNormal\">&#1075;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col12KeyNormal\">&#1096;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col12KeyNormal\">&#1097;</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col12KeyNormal\">&#1079;</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col12KeyNormal\">&#1093;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"Line5Col12SideKeyNormal\">&#1098;</div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"iqqiLine5Col11MarginCenterNormal\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"rusThirdLineKeyNormal\">&#1092;</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"rusThirdLineKeyNormal\">&#1099;</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"rusThirdLineKeyNormal\">&#1074;</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"rusThirdLineKeyNormal\">&#1072;</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"rusThirdLineKeyNormal\">&#1087;</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"rusThirdLineKeyNormal\">&#1088;</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"rusThirdLineKeyNormal\">&#1086;</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"rusThirdLineKeyNormal\">&#1083;</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"rusThirdLineKeyNormal\">&#1076;</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"rusThirdLineKeyNormal\">&#1078;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"rusThirdLineKeyNormal\">&#1101;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"rusShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col10KeyNormal\">&#1103;</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col10KeyNormal\">&#1095;</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col10KeyNormal\">&#1089;</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col10KeyNormal\">&#1084;</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col10KeyNormal\">&#1080;</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col10KeyNormal\">&#1090;</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col10KeyNormal\">&#1100;</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col10KeyNormal\">&#1073;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col10KeyNormal\">&#1102;</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"rusEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"rusLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"rusNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"rusWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"rusBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"rusEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiAraHome =
    "    <div id=\"iqqiAraHome\" class=\"iqqiEnHome\" style=\"direction: ltr\">" +
    "        <div id=\"iqqiFirstLine\" class=\"araCenterNormalFirstLine\">" +
    "            <div id=\"FirstLineKey_0\" class=\"araFirstLineSideKeyNormal\">&#1584;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"araFirstLineKeyNormal\">&#1590;</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"araFirstLineKeyNormal\">&#1589;</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"araFirstLineKeyNormal\">&#1579;</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"araFirstLineKeyNormal\">&#1602;</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"araFirstLineKeyNormal\">&#1601;</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"araFirstLineKeyNormal\">&#1594;</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"araFirstLineKeyNormal\">&#1593;</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"araFirstLineKeyNormal\">&#1582;</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"araFirstLineKeyNormal\">&#1581;</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"araFirstLineKeyNormal\">&#1580;</div>" +
    "            <div id=\"FirstLineKey_11\" class=\"araFirstLineSideKeyNormal\">&#1583;</div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"araCenterNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"araFirstLineSideKeyNormal\">&#1588;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"araFirstLineKeyNormal\">&#1587;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"araFirstLineKeyNormal\">&#1610;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"araFirstLineKeyNormal\">&#1576;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"araFirstLineKeyNormal\">&#1604;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"araFirstLineKeyNormal\">&#1575;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"araFirstLineKeyNormal\">&#1578;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"araFirstLineKeyNormal\">&#1606;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"araFirstLineKeyNormal\">&#1605;</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"araFirstLineKeyNormal\">&#1603;</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"araFirstLineKeyNormal\">&#1591;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"araFirstLineSideKeyNormal\">&#1548;</div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"iqqiLineKeyHidden\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"araCenterShortNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"araShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"araThirdLineKeyNormal\"></div>" +
    "            <div id=\"FourthLineKey_2\" class=\"araThirdLineKeyNormal\"></div>" +
    "            <div id=\"FourthLineKey_3\" class=\"araThirdLineKeyNormal\"></div>" +
    "            <div id=\"FourthLineKey_4\" class=\"araThirdLineNarrowKeyNormal\"></div>" +
    "            <div id=\"FourthLineKey_5\" class=\"araThirdLineNarrowKeyNormal\"></div>" +
    "            <div id=\"FourthLineKey_6\" class=\"araThirdLineNarrowKeyNormal\"></div>" +
    "            <div id=\"FourthLineKey_7\" class=\"araThirdLineNarrowKeyNormal\"></div>" +
    "            <div id=\"FourthLineKey_8\" class=\"araThirdLineKeyNormal\"></div>" +
    "            <div id=\"FourthLineKey_9\" class=\"araThirdLineKeyNormal\"></div>" +
    "            <div id=\"FourthLineKey_10\" class=\"araThirdLineKeyNormal\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"araCenterShortNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"araEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"araLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"araNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"araWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"araBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"araEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiAraHome_Shift =
    "    <div id=\"iqqiAraHome\" class=\"iqqiEnHome\" style=\"direction: ltr\">" +
    "        <div id=\"iqqiFirstLine\" class=\"araCenterNormalFirstLine\">" +
    "            <div id=\"FirstLineKey_0\" class=\"araLine5Col10KeyNormal\">&#1633;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"araLine5Col10KeyNormal\">&#1634;</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"araLine5Col10KeyNormal\">&#1635;</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"araLine5Col10KeyNormal\">&#1636;</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"araLine5Col10KeyNormal\">&#1637;</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"araLine5Col10KeyNormal\">&#1638;</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"araLine5Col10KeyNormal\">&#1639;</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"araLine5Col10KeyNormal\">&#1640;</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"araLine5Col10KeyNormal\">&#1641;</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"araLine5Col10KeyNormal\">&#1632;</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"araShiftCenterLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"araCenter9Normal\">&#1617;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"araCenter9Normal\">&#1614;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"araCenter9Normal\">&#1611;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"araCenter9Normal\">&#1615;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"araCenter9Normal\">&#1612;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"araCenter9Normal\">&#1616;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"araCenter9Normal\">&#1613;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"araCenter9Normal\">&#1618;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"araCenter9Normal\">&#1600;</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"iqqiLineKeyHidden\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"araCenterShortNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"araShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"araThirdLineKeyNormal\">&#1569;</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"araThirdLineKeyNormal\">&#1572;</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"araThirdLineKeyNormal\">&#1604;&#1571;</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"araThirdLineNarrowKeyNormal\">&#1604;&#1573;</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"araThirdLineNarrowKeyNormal\">&#1604;&#1570;</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"araThirdLineNarrowKeyNormal\">&#1571;</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"araThirdLineNarrowKeyNormal\">&#1573;</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"araThirdLineKeyNormal\">&#1570;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"araThirdLineKeyNormal\">&#1563;</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"araThirdLineKeyNormal\">&#1567;</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"araCenterShortNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"araEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"araLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"araNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"araWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"araBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"araEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiPorHome =
    "    <div id=\"iqqiPorHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col11KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col11KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col11KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col11KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col11KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col11KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"Line5Col11KeyNormal\">^</div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col11KeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col11KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col11KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col11KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col11KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col11KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col11KeyNormal\">&#714;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col11KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col11KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col11KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col11KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col11KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col11KeyNormal\">&ccedil;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col11KeyNormal\">&#715;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"spaShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col11KeyNormal\">z</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col11KeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col11KeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col11KeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col11KeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"Line5Col11KeyNormal\">~</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"spaEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"spaLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"spaNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"porWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"porBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"porEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiFraHome =
    "    <div id=\"iqqiPorHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">&eacute;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">&quot;</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">\'</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">(</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">-</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">&egrave;</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">_</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">&ccedil;</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">&agrave;</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">)</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col11KeyNormal\">a</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col11KeyNormal\">z</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col11KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col11KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col11KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col11KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col11KeyNormal\">^</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col11KeyNormal\">q</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col11KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col11KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col11KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col11KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col11KeyNormal\">m</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col11KeyNormal\">&ugrave;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"fraShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"fraFourthLineKeyNormal\">w</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"fraFourthLineKeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"fraFourthLineWideKeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"fraFourthLineKeyNormal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"fraFourthLineKeyNormal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"fraFourthLineWideKeyNormal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"fraFourthLineKeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"fraFourthLineKeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"fraEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"fraLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"fraNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"fraWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"fraBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"fraEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiFraHome_Shift =
    "    <div id=\"iqqiEnHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"THAHomeCapsFirstLineSideKeyNormal\">A</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"THAHomeCapsFirstLineKeyNormal\">Z</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"THAHomeCapsFirstLineKeyNormal\">E</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"THAHomeCapsFirstLineKeyNormal\">R</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"THAHomeCapsFirstLineKeyNormal\">T</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"THAHomeCapsFirstLineKeyNormal\">Y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"THAHomeCapsFirstLineKeyNormal\">U</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"THAHomeCapsFirstLineKeyNormal\">I</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"THAHomeCapsFirstLineKeyNormal\">O</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"THAHomeCapsFirstLineKeyNormal\">P</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col10KeyNormal\">&uml;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col10KeyNormal\">Q</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col10KeyNormal\">S</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col10KeyNormal\">D</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col10KeyNormal\">F</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col10KeyNormal\">G</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col10KeyNormal\">H</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col10KeyNormal\">J</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col10KeyNormal\">K</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col10KeyNormal\">L</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col10KeyNormal\">M</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"engShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"fraShiftFourthLineWideKeyNormal\">W</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"fraShiftFourthLineKeyNormal\">X</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"fraShiftFourthLineKeyNormal\">C</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"fraShiftFourthLineKeyNormal\">V</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"fraShiftFourthLineKeyNormal\">B</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"fraShiftFourthLineKeyNormal\">N</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"fraShiftFourthLineKeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"fraShiftFourthLineWideKeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"controlHome_escEnNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"controlHome_LanSwitchNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"controlHome_NumberSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"controlHome_WhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"controlHome_BackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"controlHome_EnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";


var iqqiSpaHome =
    "    <div id=\"iqqiSpaHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col12SideKeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col12KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col12KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col12KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col12KeyNormal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col12KeyNormal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col12KeyNormal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col12KeyNormal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col12KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col12KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col12KeyNormal\">&uacute;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"Line5Col12SideKeyNormal\">&uuml;</div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col11KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col11KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col11KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col11KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col11KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col11KeyNormal\">&ntilde;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col11KeyNormal\">&aacute;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"spaShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col11KeyNormal\">z</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col11KeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col11KeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col11KeyNormal\">&eacute;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col11KeyNormal\">&iacute;</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"Line5Col11KeyNormal\">&oacute;</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"spaEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"spaLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"spaNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"spaWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"spaThirdLineNarrowKeyNormal\">,</div>" +
    "            <div id=\"ControlLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">.</div>" +
    "            <div id=\"ControlLineKey_6\" class=\"spaBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"spaEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiSpaHome_Shift =
    "    <div id=\"iqqiSpaHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col12SideKeyNormal\">Q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col12KeyNormal\">W</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col12KeyNormal\">E</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col12KeyNormal\">R</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col12KeyNormal\">T</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col12KeyNormal\">Y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col12KeyNormal\">U</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col12KeyNormal\">I</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col12KeyNormal\">O</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col12KeyNormal\">P</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col12KeyNormal\">&Uacute;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"Line5Col12SideKeyNormal\">&Uuml;</div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col11KeyNormal\">A</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col11KeyNormal\">S</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col11KeyNormal\">D</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col11KeyNormal\">F</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">G</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">H</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">J</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">K</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col11KeyNormal\">L</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col11KeyNormal\">&Ntilde;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col11KeyNormal\">&Aacute;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"spaShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col11KeyNormal\">Z</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col11KeyNormal\">X</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col11KeyNormal\">C</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">V</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">B</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">N</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">M</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col11KeyNormal\">&Eacute;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col11KeyNormal\">&Iacute;</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"Line5Col11KeyNormal\">&Oacute;</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"spaEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"spaLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"spaNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"spaShiftWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">,</div>" +
    "            <div id=\"ControlLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">.</div>" +
    "            <div id=\"ControlLineKey_6\" class=\"Line5Col11KeyNormal\">&iquest;</div>" +
    "            <div id=\"ControlLineKey_7\" class=\"spaBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"spaEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiNum1Home =
    "    <div id=\"iqqiNum1Home\" class=\"iqqiEnHome\" style=\"direction: ltr\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"numberKeySybEnNormal\">_</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"numberKeySybEnNormal\">&amp;</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"numberKeySybEnNormal\">+</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"numberKeySideNumEnNormal\">1</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"numberKeyNumEnNormal\">2</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"numberKeySideNumEnNormal\">3</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"numberKeySybEnNormal\">$</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"numberKeySybEnNormal\">#</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"numberKeySybEnNormal\">@</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"numberKeySybEnNormal\">\\</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"numberKeySybEnNormal\">^</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"numberKeySybEnNormal\">-</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"numberKeySideNumEnNormal\">4</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"numberKeyNumEnNormal\">5</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"numberKeySideNumEnNormal\">6</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"numberKeySybEnNormal\">!</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"numberKeySybEnNormal\">&quot;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"numberKeySybEnNormal\">'</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"numberKeySybEnNormal\">&lt;</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"numberKeySybEnNormal\">&gt;</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"numberKeySybEnNormal\">*</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"numberKeySideNumEnNormal\">7</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"numberKeyNumEnNormal\">8</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"numberKeySideNumEnNormal\">9</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"numberKeySybEnNormal\">?</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"numberKeySybEnNormal\">,</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"numberKeySybEnNormal\">;</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"numberKeySybEnNormal\">(</div>" +
    "            <div id=\"FourthLineKey_1\" class=\"numberKeySybEnNormal\">)</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"numberKeySybEnNormal\">/</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"numberKeySideNumEnNormal\">=</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"numberKeyNumEnNormal\">0</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"numberKeySideNumEnNormal\">.</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"numberKeySybEnNormal\">%</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"numberKeySybEnNormal\">~</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"numberKeySybEnNormal\">:</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"iqqiLineKeyHidden\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"numberKeyNum1_escEnNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"numberKeyNum1ControlNormal\">1/2</div>" +
    "            <div id=\"ControlLineKey_2\" class=\"numberKeyNum1ControlNormal\">ABC</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"numberKeyNum1_WhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"numberKeyNum1_BackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"numberKeyNum1_EnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiNum2Home =
    "    <div id=\"iqqiNum2Home\" class=\"iqqiEnHome\" style=\"direction: ltr\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">&sect;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">`</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">|</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">&bull;</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">&radic;</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">+</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">&divide;</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">&times;&quot;</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">{</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">}</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col10KeyNormal\">&yen;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col10KeyNormal\">&pound;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col10KeyNormal\">&cent;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col10KeyNormal\">&euro;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col10KeyNormal\">&ordm;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col10KeyNormal\">&trade;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col10KeyNormal\">&reg;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col10KeyNormal\">&copy;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col10KeyNormal\">[</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col10KeyNormal\">]</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNum2CenterLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"numberKeySybEnNormal\">&#8451;</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"numberKeySybEnNormal\">&#8457;</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"numberKeySybEnNormal\">&sup2;</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"numberKeySybEnNormal\">&sup3;</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"numberKeySybEnNormal\">&alpha;</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"numberKeySybEnNormal\">&beta;</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"numberKeySybEnNormal\">&gamma;</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"numberKeySybEnNormal\">&delta;</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"numberKeySybEnNormal\">&epsilon;</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNum2CenterLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"numberKeyNum2_faceNormal\">(^_^)</div>" +
    "            <div id=\"FourthLineKey_1\" class=\"numberKeyNum2_faceNormal\">(^o^)</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"numberKeyNum2_faceNormal\">(Q_Q)</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"numberKeyNum2_faceNormal\">(T_T)</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"numberKeyNum2_faceNormal\">(?_?)</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"numberKeyNum2_faceNormal\">(^_~)</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"numberKeyNum1_escEnNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"numberKeyNum1ControlNormal\">2/2</div>" +
    "            <div id=\"ControlLineKey_2\" class=\"numberKeyNum1ControlNormal\">ABC</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"numberKeyNum2_WhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"numberKeyNum2_BackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"numberKeyNum1_EnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiChiHome =
    "    <div id=\"iqqiEnHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col10KeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col10KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col10KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col10KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col10KeyNormal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col10KeyNormal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col10KeyNormal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col10KeyNormal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col10KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col10KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"Line5Col9LineCenterNormal\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col9KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col9KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col9KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col9KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col9KeyNormal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col9KeyNormal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col9KeyNormal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col9KeyNormal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col9KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"Line5Col9LineCenterNormal\">" +
    "            <div id=\"FourthLineKey_0\" class=\"Line5Col9KeyNormal\">z</div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col9KeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col9KeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col9KeyNormal\">v</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col9KeyNormal\">b</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col9KeyNormal\">n</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col9KeyNormal\">m</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col9KeyNormal\">，</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col9KeyNormal\">。</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"controlHome_escEnNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"controlHome_LanSwitchNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"controlHome_NumberSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"chiWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"controlHome_BackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"controlHome_EnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiZhoHome_ZhuYin =
    "    <div id=\"iqqiEnHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"ZhuYinSideKeyNormal\">&hellip;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"ZhuYinKeyNormal\">&#12549;</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"ZhuYinKeyNormal\">&#12553;</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"ZhuYinKeyNormal\">&#711;</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"ZhuYinKeyNormal\">&#715;</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"ZhuYinKeyNormal\">&#12563;</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"ZhuYinKeyNormal\">&#714;</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"ZhuYinKeyNormal\">&#729;</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"ZhuYinKeyNormal\">&#12570;</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"ZhuYinKeyNormal\">&#12574;</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"ZhuYinKeyNormal\">&#12578;</div>" +
    "            <div id=\"FirstLineKey_11\" class=\"ZhuYinSideKeyNormal\">&#65292;</div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"ZhuYinSideKeyNormal\">&#65306;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"ZhuYinKeyNormal\">&#12550;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"ZhuYinKeyNormal\">&#12554;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"ZhuYinKeyNormal\">&#12557;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"ZhuYinKeyNormal\">&#12560;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"ZhuYinKeyNormal\">&#12564;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"ZhuYinKeyNormal\">&#12567;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"ZhuYinKeyNormal\">&#19968;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"ZhuYinKeyNormal\">&#12571;</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"ZhuYinKeyNormal\">&#12575;</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"ZhuYinKeyNormal\">&#12579;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"ZhuYinSideKeyNormal\">&#12290;</div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"ZhuYinSideKeyNormal\">&#12289;</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"ZhuYinKeyNormal\">&#12551;</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"ZhuYinKeyNormal\">&#12555;</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"ZhuYinKeyNormal\">&#12558;</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"ZhuYinKeyNormal\">&#12561;</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"ZhuYinKeyNormal\">&#12565;</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"ZhuYinKeyNormal\">&#12568;</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"ZhuYinKeyNormal\">&#12584;</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"ZhuYinKeyNormal\">&#12572;</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"ZhuYinKeyNormal\">&#12576;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"ZhuYinKeyNormal\">&#12580;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"ZhuYinSideKeyNormal\">&#65281;</div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"ZhuYinSideKeyNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"ZhuYinKeyNormal\">&#12552;</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"ZhuYinKeyNormal\">&#12556;</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"ZhuYinKeyNormal\">&#12559;</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"ZhuYinKeyNormal\">&#12562;</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"ZhuYinKeyNormal\">&#12566;</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"ZhuYinKeyNormal\">&#12569;</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"ZhuYinKeyNormal\">&#12585;</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"ZhuYinKeyNormal\">&#12573;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"ZhuYinKeyNormal\">&#12577;</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"ZhuYinKeyNormal\">&#12581;</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"ZhuYinSideKeyNormal\">&#65311;</div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"ZhuYinEscNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"ZhuYinLanSwitchNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"ZhuYinNumSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"ZhuYinWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"ZhuYinKeyNormal\">&#12582;</div>" +
    "            <div id=\"ControlLineKey_5\" class=\"ZhuYinBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"ZhuYinEnterNormal\">&#23436;&#25104;</div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

    var iqqiThaHome =
        "    <div id=\"iqqiThaHome\" class=\"iqqiEnHome\">" +
        "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
        "            <div id=\"FirstLineKey_0\" class=\"Line5Col11KeyNormal\">&#3653;</div>" +
        "            <div id=\"FirstLineKey_1\" class=\"Line5Col11KeyNormal\">&#3654;</div>" +
        "            <div id=\"FirstLineKey_2\" class=\"Line5Col11KeyNormal\">&#3616;</div>" +
        "            <div id=\"FirstLineKey_3\" class=\"Line5Col11KeyNormal\">&#3606;</div>" +
        "            <div id=\"FirstLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">&#3640;</div>" +
        "            <div id=\"FirstLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">&#3638;</div>" +
        "            <div id=\"FirstLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">&#3588;</div>" +
        "            <div id=\"FirstLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">&#3605;</div>" +
        "            <div id=\"FirstLineKey_8\" class=\"Line5Col11KeyNormal\">&#3592;</div>" +
        "            <div id=\"FirstLineKey_9\" class=\"Line5Col11KeyNormal\">&#3586;</div>" +
        "            <div id=\"FirstLineKey_10\" class=\"Line5Col11KeyNormal\">&#3594;</div>" +
        "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
        "        </div>" +
        "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
        "            <div id=\"SecondLineKey_0\" class=\"Line5Col11KeyNormal\">&#3652;</div>" +
        "            <div id=\"SecondLineKey_1\" class=\"Line5Col11KeyNormal\">&#3635;</div>" +
        "            <div id=\"SecondLineKey_2\" class=\"Line5Col11KeyNormal\">&#3614;</div>" +
        "            <div id=\"SecondLineKey_3\" class=\"Line5Col11KeyNormal\">&#3632;</div>" +
        "            <div id=\"SecondLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">&#3633;</div>" +
        "            <div id=\"SecondLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">&#3637;</div>" +
        "            <div id=\"SecondLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">&#3619;</div>" +
        "            <div id=\"SecondLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">&#3609;</div>" +
        "            <div id=\"SecondLineKey_8\" class=\"Line5Col11KeyNormal\">&#3618;</div>" +
        "            <div id=\"SecondLineKey_9\" class=\"Line5Col11KeyNormal\">&#3610;</div>" +
        "            <div id=\"SecondLineKey_10\" class=\"Line5Col11KeyNormal\">&#3621;</div>" +
        "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
        "        </div>" +
        "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
        "            <div id=\"ThirdLineKey_0\" class=\"Line5Col11KeyNormal\">&#3615;</div>" +
        "            <div id=\"ThirdLineKey_1\" class=\"Line5Col11KeyNormal\">&#3627;</div>" +
        "            <div id=\"ThirdLineKey_2\" class=\"Line5Col11KeyNormal\">&#3585;</div>" +
        "            <div id=\"ThirdLineKey_3\" class=\"Line5Col11KeyNormal\">&#3604;</div>" +
        "            <div id=\"ThirdLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">&#3648;</div>" +
        "            <div id=\"ThirdLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">&#3657;</div>" +
        "            <div id=\"ThirdLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">&#3656;</div>" +
        "            <div id=\"ThirdLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">&#3634;</div>" +
        "            <div id=\"ThirdLineKey_8\" class=\"Line5Col11KeyNormal\">&#3626;</div>" +
        "            <div id=\"ThirdLineKey_9\" class=\"Line5Col11KeyNormal\">&#3623;</div>" +
        "            <div id=\"ThirdLineKey_10\" class=\"Line5Col11KeyNormal\">&#3591;</div>" +
        "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
        "        </div>" +
        "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
        "            <div id=\"FourthLineKey_0\" class=\"THAHomeShiftKey_NormalNormal\"></div>" +
        "            <div id=\"FourthLineKey_1\" class=\"Line5Col11KeyNormal\">&#3612;</div>" +
        "            <div id=\"FourthLineKey_2\" class=\"Line5Col11KeyNormal\">&#3611;</div>" +
        "            <div id=\"FourthLineKey_3\" class=\"Line5Col11KeyNormal\">&#3649;</div>" +
        "            <div id=\"FourthLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">&#3629;</div>" +
        "            <div id=\"FourthLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">&#3636;</div>" +
        "            <div id=\"FourthLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">&#3639;</div>" +
        "            <div id=\"FourthLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">&#3607;</div>" +
        "            <div id=\"FourthLineKey_8\" class=\"Line5Col11KeyNormal\">&#3617;</div>" +
        "            <div id=\"FourthLineKey_9\" class=\"Line5Col11KeyNormal\">&#3651;</div>" +
        "            <div id=\"FourthLineKey_10\" class=\"Line5Col11KeyNormal\">&#3613;</div>" +
        "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
        "        </div>" +
        "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
        "            <div id=\"ControlLineKey_0\" class=\"THAHomeEscKeyNormal\"></div>" +
        "            <div id=\"ControlLineKey_1\" class=\"THAHomeLanSwitchKeyNormal\"></div>" +
        "            <div id=\"ControlLineKey_2\" class=\"THAHomeNumControlNormal\">123</div>" +
        "            <div id=\"ControlLineKey_3\" class=\"THAHomeWhiteSpaceNormal\"></div>" +
        "            <div id=\"ControlLineKey_4\" class=\"THAHomeBackSpaceNormal\"></div>" +
        "            <div id=\"ControlLineKey_5\" class=\"THAHomeEnterNormal\"></div>" +
        "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
        "        </div>" +
        "    </div>";

    var iqqiThaHome_Shift =
        "    <div id=\"iqqiThaHome\" class=\"iqqiEnHome\">" +
        "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
        "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">&#3665;</div>" +
        "            <div id=\"FirstLineKey_1\" class=\"THAHomeCapsFirstLineKeyNormal\">&#3666;</div>" +
        "            <div id=\"FirstLineKey_2\" class=\"THAHomeCapsFirstLineKeyNormal\">&#3667;</div>" +
        "            <div id=\"FirstLineKey_3\" class=\"THAHomeCapsFirstLineKeyNormal\">&#3668;</div>" +
        "            <div id=\"FirstLineKey_4\" class=\"THAHomeCapsFirstLineKeyNormal\">\u0E39</div>" +
        "            <div id=\"FirstLineKey_5\" class=\"THAHomeCapsFirstLineKeyNormal\">&#3647;</div>" +
        "            <div id=\"FirstLineKey_6\" class=\"THAHomeCapsFirstLineKeyNormal\">&#3669;</div>" +
        "            <div id=\"FirstLineKey_7\" class=\"THAHomeCapsFirstLineKeyNormal\">&#3670;</div>" +
        "            <div id=\"FirstLineKey_8\" class=\"THAHomeCapsFirstLineKeyNormal\">&#3671;</div>" +
        "            <div id=\"FirstLineKey_9\" class=\"THAHomeCapsFirstLineKeyNormal\">&#3672;</div>" +
        "            <div id=\"FirstLineKey_10\" class=\"THAHomeCapsFirstLineSideKeyNormal\">&#3673;</div>" +
        "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
        "        </div>" +
        "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
        "            <div id=\"SecondLineKey_0\" class=\"Line5Col10KeyNormal\">&#3664;</div>" +
        "            <div id=\"SecondLineKey_1\" class=\"Line5Col10KeyNormal\">&#3598;</div>" +
        "            <div id=\"SecondLineKey_2\" class=\"Line5Col10KeyNormal\">&#3598;</div>" +
        "            <div id=\"SecondLineKey_3\" class=\"Line5Col10KeyNormal\">&#3601;</div>" +
        "            <div id=\"SecondLineKey_4\" class=\"Line5Col10KeyNormal\">&#3608;</div>" +
        "            <div id=\"SecondLineKey_5\" class=\"Line5Col10KeyNormal\">\u0E4D</div>" +
        "            <div id=\"SecondLineKey_6\" class=\"Line5Col10KeyNormal\">\u0E4A</div>" +
        "            <div id=\"SecondLineKey_7\" class=\"Line5Col10KeyNormal\">&#3603;</div>" +
        "            <div id=\"SecondLineKey_8\" class=\"Line5Col10KeyNormal\">&#3631;</div>" +
        "            <div id=\"SecondLineKey_9\" class=\"Line5Col10KeyNormal\">&#3597;</div>" +
        "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\">&#3600;</div>" +
        "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
        "        </div>" +
        "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
        "            <div id=\"ThirdLineKey_0\" class=\"Line5Col10KeyNormal\">&#3620;</div>" +
        "            <div id=\"ThirdLineKey_1\" class=\"Line5Col10KeyNormal\">&#3590;</div>" +
        "            <div id=\"ThirdLineKey_2\" class=\"Line5Col10KeyNormal\">&#3599;</div>" +
        "            <div id=\"ThirdLineKey_3\" class=\"Line5Col10KeyNormal\">&#3650;</div>" +
        "            <div id=\"ThirdLineKey_4\" class=\"Line5Col10KeyNormal\">&#3596;</div>" +
        "            <div id=\"ThirdLineKey_5\" class=\"Line5Col10KeyNormal\">\u0E47</div>" +
        "            <div id=\"ThirdLineKey_6\" class=\"Line5Col10KeyNormal\">\u0E4B</div>" +
        "            <div id=\"ThirdLineKey_7\" class=\"Line5Col10KeyNormal\">&#3625;</div>" +
        "            <div id=\"ThirdLineKey_8\" class=\"Line5Col10KeyNormal\">&#3624;</div>" +
        "            <div id=\"ThirdLineKey_9\" class=\"Line5Col10KeyNormal\">&#3595;</div>" +
        "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
        "        </div>" +
        "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
        "            <div id=\"FourthLineKey_0\" class=\"THAHomeShiftKey_ShiftNormal\"></div>" +
        "            <div id=\"FourthLineKey_1\" class=\"THAHomeCapsFourthLineKeyNormal\">&#3593;</div>" +
        "            <div id=\"FourthLineKey_2\" class=\"THAHomeCapsFourthLineKeyNormal\">&#3630;</div>" +
        "            <div id=\"FourthLineKey_3\" class=\"THAHomeCapsFourthLineKey0Normal\">\u0E3A</div>" +
        "            <div id=\"FourthLineKey_4\" class=\"THAHomeCapsFourthLineKey1Normal\">\u0E4C</div>" +
        "            <div id=\"FourthLineKey_5\" class=\"THAHomeCapsFourthLineKeyNormal\">&#3602;</div>" +
        "            <div id=\"FourthLineKey_6\" class=\"THAHomeCapsFourthLineKeyNormal\">&#3628;</div>" +
        "            <div id=\"FourthLineKey_7\" class=\"THAHomeCapsFourthLineKeyNormal\">&#3622;</div>" +
        "            <div id=\"FourthLineKey_8\" class=\"Line5Col10KeyNormal\">.</div>" +
        "            <div id=\"FourthLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
        "        </div>" +
        "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
        "            <div id=\"ControlLineKey_0\" class=\"THAHomeCapsEscKeyNormal\"></div>" +
        "            <div id=\"ControlLineKey_1\" class=\"THAHomeCapsLanSwitchKeyNormal\"></div>" +
        "            <div id=\"ControlLineKey_2\" class=\"THAHomeCapsNumControlNormal\">123</div>" +
        "            <div id=\"ControlLineKey_3\" class=\"THAHomeCapsWhiteSpaceNormal\"></div>" +
        "            <div id=\"ControlLineKey_4\" class=\"THAHomeCapsBackSpaceNormal\"></div>" +
        "            <div id=\"ControlLineKey_5\" class=\"THAHomeCapsEnterNormal\"></div>" +
        "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
        "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
        "        </div>" +
        "    </div>";

var iqqiUkrHome =
    "    <div id=\"iqqiUkrHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col12SideKeyNormal\">&#1081;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col12KeyNormal\">&#1094;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col12KeyNormal\">&#1091;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col12KeyNormal\">&#1082;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col12KeyNormal\">&#1077;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col12KeyNormal\">&#1085;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col12KeyNormal\">&#1075;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col12KeyNormal\">&#1096;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col12KeyNormal\">&#1097;</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col12KeyNormal\">&#1079;</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col12KeyNormal\">&#1093;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"Line5Col12SideKeyNormal\">&#1111;</div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col11KeyNormal\">&#1092;</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col11KeyNormal\">&#1110;</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col11KeyNormal\">&#1074;</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col11KeyNormal\">&#1072;</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">&#1087;</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">&#1088;</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">&#1086;</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">&#1083;</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col11KeyNormal\">&#1076;</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col11KeyNormal\">&#1078;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col11KeyNormal\">&#1108;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"ukrShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col13SideKeyNormal\">&#1169;</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col13SideKeyNormal\">&#1103;</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col13SideKeyNormal\">&#1095;</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col13SideKeyNormal\">&#1089;</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col13KeyNormal\">&#1084;</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col13KeyNormal\">&#1080;</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col13KeyNormal\">&#1090;</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col13SideKeyNormal\">&#1100;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col13SideKeyNormal\">&#1073;</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"Line5Col13SideKeyNormal\">&#1102;</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"Line5Col13SideKeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_12\" class=\"Line5Col13SideKeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"ukrEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"ukrLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"ukrNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"ukrWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"ukrBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"ukrEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiTurHome =
    "    <div id=\"iqqiTurHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col12SideKeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col12KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col12KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col12KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col12KeyNormal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col12KeyNormal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col12KeyNormal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col12KeyNormal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col12KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col12KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col12KeyNormal\">&#287;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"Line5Col12SideKeyNormal\">&uuml;</div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col12SideKeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col12KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col12KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col12KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col12KeyNormal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col12KeyNormal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col12KeyNormal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col12KeyNormal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col12KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col12KeyNormal\">&#351;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col12KeyNormal\">i</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"Line5Col12SideKeyNormal\">,</div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"turShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col11KeyNormal\">z</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col11KeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col11KeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col11KeyNormal\">&ouml;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col11KeyNormal\">&ccedil;</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"Line5Col11KeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"THAHomeEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"THAHomeLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"THAHomeNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"THAHomeWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"THAHomeBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"THAHomeEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";


var iqqiSweHome =
    "    <div id=\"iqqiSweHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col11KeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col11KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col11KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col11KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col11KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col11KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col11KeyNormal\">&aring;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col11KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col11KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col11KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col11KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col11KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col11KeyNormal\">&ouml;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col11KeyNormal\">&auml;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"rusShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col10KeyNormal\">z</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col10KeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col10KeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col10KeyNormal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col10KeyNormal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col10KeyNormal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col10KeyNormal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col10KeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col10KeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"rusEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"rusLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"rusNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"rusWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"rusBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"rusEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiSlkHome =
    "    <div id=\"iqqiSlkHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">&#318;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">&scaron;</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">&#269;</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">&#357;</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">&#382;</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">&yacute;</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">&aacute;</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">&iacute;</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">&eacute;</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">&#328;</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col12SideKeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col12KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col12KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col12KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col12KeyNormal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col12KeyNormal\">z</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col12KeyNormal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col12KeyNormal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col12KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col12KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col12KeyNormal\">&uacute;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"Line5Col12SideKeyNormal\">&auml;</div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col10KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col10KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col10KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col10KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col10KeyNormal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col10KeyNormal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col10KeyNormal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col10KeyNormal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col10KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col10KeyNormal\">&ocirc;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"rusShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col10KeyNormal\">y</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col10KeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col10KeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col10KeyNormal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col10KeyNormal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col10KeyNormal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col10KeyNormal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col10KeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col10KeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"rusEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"rusLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"rusNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"rusWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"rusBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"rusEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiPolHome =
    "    <div id=\"iqqiPolHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col10KeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col10KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col10KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col10KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col10KeyNormal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col10KeyNormal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col10KeyNormal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col10KeyNormal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col10KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col10KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"Line5Col9LineCenterNormal\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col9KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col9KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col9KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col9KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col9KeyNormal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col9KeyNormal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col9KeyNormal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col9KeyNormal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col9KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"rusShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col10KeyNormal\">z</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col10KeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col10KeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col10KeyNormal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col10KeyNormal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col10KeyNormal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col10KeyNormal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col10KeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col10KeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"polEscNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"polLanSwitchNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"polNumberSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"polWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"rusBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"polEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiNorHome =
    "    <div id=\"iqqiSweHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col11KeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col11KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col11KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col11KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col11KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col11KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col11KeyNormal\">&aring;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col11KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col11KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col11KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col11KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col11KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col11KeyNormal\">&oslash;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col11KeyNormal\">&aelig;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"rusShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col10KeyNormal\">z</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col10KeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col10KeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col10KeyNormal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col10KeyNormal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col10KeyNormal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col10KeyNormal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col10KeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col10KeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"polEscNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"polLanSwitchNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"polNumberSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"polWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"rusBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"polEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiItaHome =
    "    <div id=\"iqqiItaHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col11KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col11KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col11KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col11KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col11KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col11KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"Line5Col11KeyNormal\">&igrave;</div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col11KeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col11KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col11KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col11KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col11KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col11KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col11KeyNormal\">&egrave;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col11KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col11KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col11KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col11KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col11KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col11KeyNormal\">&ograve;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col11KeyNormal\">&agrave;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"spaShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col11KeyNormal\">z</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col11KeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col11KeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col11KeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col11KeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"Line5Col11KeyNormal\">&ugrave;</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"polEscNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"polLanSwitchNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"polNumberSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"polWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"rusBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"polEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiHunHome =
    "    <div id=\"iqqiHunHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col13SideKeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col13SideKeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col13SideKeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col13SideKeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col13SideKeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col13KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col13KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col13KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col13SideKeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col13SideKeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"Line5Col13SideKeyNormal\">&ouml;</div>" +
    "            <div id=\"FirstLineKey_11\" class=\"Line5Col13SideKeyNormal\">&uuml;</div>" +
    "            <div id=\"FirstLineKey_12\" class=\"Line5Col13SideKeyNormal\">&oacute;</div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col13SideKeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col13SideKeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col13SideKeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col13SideKeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col13SideKeyNormal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col13KeyNormal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col13KeyNormal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col13KeyNormal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col13SideKeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col13SideKeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col13SideKeyNormal\">&#337;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"Line5Col13SideKeyNormal\">&uacute;</div>" +
    "            <div id=\"SecondLineKey_12\" class=\"Line5Col13SideKeyNormal\">&#369;</div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col11KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col11KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col11KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col11KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col11KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col11KeyNormal\">&eacute;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col11KeyNormal\">&aacute;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"rusShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"THAHomeCapsFirstLineKeyNormal\">&iacute;</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"THAHomeCapsFirstLineKeyNormal\">z</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"THAHomeCapsFirstLineKeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"THAHomeCapsFirstLineKeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"THAHomeCapsFirstLineKeyNormal\">v</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"THAHomeCapsFirstLineKeyNormal\">b</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"THAHomeCapsFirstLineKeyNormal\">n</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"THAHomeCapsFirstLineKeyNormal\">m</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"THAHomeCapsFirstLineKeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"THAHomeCapsFirstLineSideKeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"polEscNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"polLanSwitchNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"polNumberSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"polWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"rusBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"polEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiHinHome =
    "    <div id=\"iqqiHinHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col12SideKeyNormal\">&#2378;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col12KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col12KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col12KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col12KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col12KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col12KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col12KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col12KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col12KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"Line5Col12KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_11\" class=\"Line5Col12SideKeyNormal\">&#2371;</div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col12SideKeyNormal\">&#2380;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col12KeyNormal\">&#2376;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col12KeyNormal\">&#2366;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col12KeyNormal\">&#2368;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col12KeyNormal\">&#2370;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col12KeyNormal\">&#2348;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col12KeyNormal\">&#2361;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col12KeyNormal\">&#2327;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col12KeyNormal\">&#2342;</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col12KeyNormal\">&#2332;</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col12KeyNormal\">&#2337;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"Line5Col12SideKeyNormal\">&#2364;</div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col12SideKeyNormal\">&#2379;</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col12KeyNormal\">&#2375;</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col12KeyNormal\">&#2381;</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col12KeyNormal\">&#2367;</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col12KeyNormal\">&#2369;</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col12KeyNormal\">&#2346;</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col12KeyNormal\">&#2352;</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col12KeyNormal\">&#2325;</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col12KeyNormal\">&#2340;</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col12KeyNormal\">&#2330;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col12KeyNormal\">&#2335;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"Line5Col12SideKeyNormal\">&#2377;</div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"rusShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"THAHomeCapsFirstLineKeyNormal\">&#2374;</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"THAHomeCapsFirstLineKeyNormal\">&#2306;</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"THAHomeCapsFirstLineKeyNormal\">&#2350;</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"THAHomeCapsFirstLineKeyNormal\">&#2344;</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"THAHomeCapsFirstLineKeyNormal\">&#2357;</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"THAHomeCapsFirstLineKeyNormal\">&#2354;</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"THAHomeCapsFirstLineKeyNormal\">&#2360;</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"THAHomeCapsFirstLineKeyNormal\">&#2351;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"THAHomeCapsFirstLineKeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"THAHomeCapsFirstLineSideKeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"polEscNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"polLanSwitchNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"polNumberSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"polWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"rusBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"polEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiDeuHome =
    "    <div id=\"iqqiDeuHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col11KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col11KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col11KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col11KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col11KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col11KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"Line5Col11KeyNormal\">&szlig;</div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col11KeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col11KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col11KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col11KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">z</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col11KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col11KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col11KeyNormal\">&aring;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col11KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col11KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col11KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col11KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col11KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col11KeyNormal\">&ouml;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col11KeyNormal\">&auml;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"rusShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col10KeyNormal\">y</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col10KeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col10KeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col10KeyNormal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col10KeyNormal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col10KeyNormal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col10KeyNormal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col10KeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col10KeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"rusEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"rusLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"rusNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"rusWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"rusBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"rusEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiCesHome =
    "    <div id=\"iqqiCesHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"fraFourthLineWideKeyNormal\">&#283;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"fraFourthLineKeyNormal\">&scaron;</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"fraFourthLineKeyNormal\">&#269;</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"fraFourthLineKeyNormal\">&#345;</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"fraFourthLineKeyNormal\">&#382;</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"fraFourthLineKeyNormal\">&yacute;</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"fraFourthLineKeyNormal\">&aacute;</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"fraFourthLineKeyNormal\">&iacute;</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"fraFourthLineWideKeyNormal\">&eacute;</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col11KeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col11KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col11KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col11KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">z</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col11KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col11KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col11KeyNormal\">&uacute;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col10KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col10KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col10KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col10KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col10KeyNormal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col10KeyNormal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col10KeyNormal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col10KeyNormal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col10KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col10KeyNormal\">&#367;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"rusShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col10KeyNormal\">y</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col10KeyNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col10KeyNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col10KeyNormal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col10KeyNormal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col10KeyNormal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col10KeyNormal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col10KeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col10KeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"polEscNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"polLanSwitchNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"polNumberSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"polWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"rusBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"polEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiBulHome =
    "    <div id=\"iqqiBulHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col12SideKeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col12KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col12KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col12KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col12KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col12KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col12KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col12KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col12KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col12KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"Line5Col12KeyNormal\">&#1110;</div>" +
    "            <div id=\"FirstLineKey_11\" class=\"Line5Col12SideKeyNormal\">v</div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col11KeyNormal\">&#1099;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col11KeyNormal\">&#1091;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col11KeyNormal\">&#1077;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col11KeyNormal\">&#1080;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">&#1096;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">&#1097;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">&#1082;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">&#1089;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col11KeyNormal\">&#1076;</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col11KeyNormal\">&#1079;</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"Line5Col11KeyNormal\">&#1094;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col11KeyNormal\">&#1100;</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col11KeyNormal\">&#1103;</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col11KeyNormal\">&#1072;</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col11KeyNormal\">&#1086;</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col11NarrowKey4567Normal\">&#1078;</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col11NarrowKey4567Normal\">&#1075;</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col11NarrowKey4567Normal\">&#1090;</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col11NarrowKey4567Normal\">&#1085;</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col11KeyNormal\">&#1074;</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col11KeyNormal\">&#1084;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"Line5Col11KeyNormal\">&#1095;</div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"ukrShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col13SideKeyNormal\">&#1102;</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col13SideKeyNormal\">&#1081;</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col13SideKeyNormal\">&#1098;</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col13SideKeyNormal\">&#1101;</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col13KeyNormal\">&#1092;</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col13KeyNormal\">&#1093;</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col13KeyNormal\">&#1087;</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col13SideKeyNormal\">&#1088;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col13SideKeyNormal\">&#1083;</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"Line5Col13SideKeyNormal\">&#1073;</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"Line5Col13SideKeyNormal\">,</div>" +
    "            <div id=\"FourthLineKey_12\" class=\"Line5Col13SideKeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"ukrEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"ukrLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"ukrNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"ukrWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"ukrBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"ukrEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiMyaHome =
    "    <div id=\"iqqiMyaHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"araCenterNormalFirstLine\">" +
    "            <div id=\"FirstLineKey_0\" class=\"araLine5Col10KeyNormal\">&#4102;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"araLine5Col10KeyNormal\">&#4112;</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"araLine5Col10KeyNormal\">&#4116;</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"araLine5Col10KeyNormal\">&#4121;</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"araLine5Col10KeyNormal\">&#4129;</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"araLine5Col10KeyNormal\">&#4117;</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"araLine5Col10KeyNormal\">&#4096;</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"araLine5Col10KeyNormal\">&#4100;</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"araLine5Col10KeyNormal\">&#4126;</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"araLine5Col10KeyNormal\">&#4101;</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"araCenterNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"myaLine5Col11ControlKeyNormal\">&#4097;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"myaLine5Col11KeyNormal\">&#4145;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"myaLine5Col11KeyNormal\">&#4154;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"myaLine5Col11KeyNormal\">&#4141;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"myaLine5Col11NarrowKeyNormal\">&#4153;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"myaLine5Col11NarrowKeyNormal\">&#4139;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"myaLine5Col11NarrowKeyNormal\">&#4244;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"myaLine5Col11NarrowKeyNormal\">&#4155;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"myaLine5Col11KeyNormal\">&#4144;</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"myaLine5Col11KeyNormal\">&#4152;</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"myaLine5Col11KeyNormal\">&#4127;</div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"iqqiLineKeyHidden\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"araCenterShortNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"myaFourthLineControlKeyNormal\">&#4098;</div>" +
    "            <div id=\"FourthLineKey_1\" class=\"araThirdLineKeyNormal\">&#4118;</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"araThirdLineKeyNormal\">&#4113;</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"araThirdLineKeyNormal\">&#4097;</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"araThirdLineNarrowKeyNormal\">&#4124;</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"araThirdLineNarrowKeyNormal\">&#4120;</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"araThirdLineNarrowKeyNormal\">&#4106;</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"araThirdLineNarrowKeyNormal\">&#4140;</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"araThirdLineKeyNormal\">&#4122;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"araThirdLineKeyNormal\">&#4114;</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"araThirdLineKeyNormal\">.</div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"araCenterShortNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"araEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"araLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"araNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"myaWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"myaControlLineNarrowKeyNormal\">&#4161;&#4162;</div>" +
    "            <div id=\"ControlLineKey_5\" class=\"myaBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"myaEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiMyaHome_Fourth =
    "    <div id=\"iqqiAraHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"araCenterNormalFirstLine\">" +
    "            <div id=\"FirstLineKey_0\" class=\"araLine5Col10KeyNormal\">&#4161;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"araLine5Col10KeyNormal\">&#4162;</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"araLine5Col10KeyNormal\">&#4163;</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"araLine5Col10KeyNormal\">&#4164;</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"araLine5Col10KeyNormal\">&#4165;</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"araLine5Col10KeyNormal\">&#4166;</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"araLine5Col10KeyNormal\">&#4167;</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"araLine5Col10KeyNormal\">&#4168;</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"araLine5Col10KeyNormal\">&#4169;</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"araLine5Col10KeyNormal\">&#4160;</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"araCenterNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"araLine5Col10KeyNormal\">&#4109;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"araLine5Col10KeyNormal\">&#4241;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"araLine5Col10KeyNormal\">&#4107;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"araLine5Col10KeyNormal\">&#4240;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"araLine5Col10KeyNormal\">&#4098;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"araLine5Col10KeyNormal\">&#4131;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"araLine5Col10KeyNormal\">&#4132;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"araLine5Col10KeyNormal\">&#4172;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"araLine5Col10KeyNormal\">&#4173;</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"araLine5Col10KeyNormal\">&#4174;</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"iqqiLineKeyHidden\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"araCenterShortNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"myaFourthLine5Col10ShortKeyNormal\">&#4230;</div>" +
    "            <div id=\"FourthLineKey_1\" class=\"myaFourthLine5Col10ShortKeyNormal\">&#4110;</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"myaFourthLine5Col10ShortKeyNormal\">&#4104;</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"myaFourthLine5Col10ShortKeyNormal\">&#4125;</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"myaFourthLine5Col10ShortKeyNormal\">&#4105;</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"myaFourthLine5Col10ShortKeyNormal\">&#4203;</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"myaFourthLine5Col10ShortKeyNormal\">&#4175;</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"myaFourthLine5Col10ShortKeyNormal\">&#4096;&#4154;&#4117;&#4153;</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"myaFourthLine5Col10ShortKeyNormal\">&#4170;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"myaFourthLine5Col10ShortKeyNormal\">&#4171;</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"araCenterShortNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"myaFourthEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"myaFourthLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"myaFourthNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"myaFourthWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"myaFourthControlLineNarrowKeyNormal\">&#4096;</div>" +
    "            <div id=\"ControlLineKey_5\" class=\"myaFourthBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"myaFourthEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiMyaHome_New =
    "    <div id=\"iqqiMsaHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">&#4161;</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">&#4162;</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">&#4163;</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">&#4164;</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">&#4165;</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">&#4166;</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">&#4167;</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">&#4168;</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">&#4169;</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">&#4160;</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col10KeyNormal\">&#4102;</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col10KeyNormal\">&#4112;</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col10KeyNormal\">&#4116;</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col10KeyNormal\">&#4121;</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col10KeyNormal\">&#4129;</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col10KeyNormal\">&#4117;</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col10KeyNormal\">&#4096;</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col10KeyNormal\">&#4100;</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col10KeyNormal\">&#4126;</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col10KeyNormal\">&#4101;</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col10KeyNormal\">&#4145;</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col10KeyNormal\">&#4155;</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col10KeyNormal\">&#4141;</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col10KeyNormal\">&#4154;</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col10KeyNormal\">&#4139;</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col10KeyNormal\">&#4151;</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col10KeyNormal\">&#4156;</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col10KeyNormal\">&#4143;</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col10KeyNormal\">&#4144;</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col10KeyNormal\">&#4152;</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"Line5Col10ControlKeyNormal\">&#4097;</div>" +
    "            <div id=\"FourthLineKey_1\" class=\"Line5Col10KeyNormal\">&#4118;</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"Line5Col10KeyNormal\">&#4113;</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"Line5Col10KeyNormal\">&#4097;</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"Line5Col10KeyNormal\">&#4124;</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"Line5Col10KeyNormal\">&#4120;</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"Line5Col10KeyNormal\">&#4106;</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"Line5Col10KeyNormal\">&#4140;</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"Line5Col10KeyNormal\">&#4170;</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"Line5Col10KeyNormal\">&#4171;</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"rusEscKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"rusLanSwitchKeyNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"rusNumControlNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"rusWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"rusBackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"rusEnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var iqqiUzbHome =
    "    <div id=\"iqqiUzbHome\" class=\"iqqiEnHome\">" +
    "        <div id=\"iqqiFirstLine\" class=\"iqqiFirstLineCenterNormal\">" +
    "            <div id=\"FirstLineKey_0\" class=\"Line5Col10KeyNormal\">1</div>" +
    "            <div id=\"FirstLineKey_1\" class=\"Line5Col10KeyNormal\">2</div>" +
    "            <div id=\"FirstLineKey_2\" class=\"Line5Col10KeyNormal\">3</div>" +
    "            <div id=\"FirstLineKey_3\" class=\"Line5Col10KeyNormal\">4</div>" +
    "            <div id=\"FirstLineKey_4\" class=\"Line5Col10KeyNormal\">5</div>" +
    "            <div id=\"FirstLineKey_5\" class=\"Line5Col10KeyNormal\">6</div>" +
    "            <div id=\"FirstLineKey_6\" class=\"Line5Col10KeyNormal\">7</div>" +
    "            <div id=\"FirstLineKey_7\" class=\"Line5Col10KeyNormal\">8</div>" +
    "            <div id=\"FirstLineKey_8\" class=\"Line5Col10KeyNormal\">9</div>" +
    "            <div id=\"FirstLineKey_9\" class=\"Line5Col10KeyNormal\">0</div>" +
    "            <div id=\"FirstLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FirstLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiSecondLine\" class=\"centerNormalLine\">" +
    "            <div id=\"SecondLineKey_0\" class=\"Line5Col10KeyNormal\">q</div>" +
    "            <div id=\"SecondLineKey_1\" class=\"Line5Col10KeyNormal\">w</div>" +
    "            <div id=\"SecondLineKey_2\" class=\"Line5Col10KeyNormal\">e</div>" +
    "            <div id=\"SecondLineKey_3\" class=\"Line5Col10KeyNormal\">r</div>" +
    "            <div id=\"SecondLineKey_4\" class=\"Line5Col10KeyNormal\">t</div>" +
    "            <div id=\"SecondLineKey_5\" class=\"Line5Col10KeyNormal\">y</div>" +
    "            <div id=\"SecondLineKey_6\" class=\"Line5Col10KeyNormal\">u</div>" +
    "            <div id=\"SecondLineKey_7\" class=\"Line5Col10KeyNormal\">i</div>" +
    "            <div id=\"SecondLineKey_8\" class=\"Line5Col10KeyNormal\">o</div>" +
    "            <div id=\"SecondLineKey_9\" class=\"Line5Col10KeyNormal\">p</div>" +
    "            <div id=\"SecondLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"SecondLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiThirdLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ThirdLineKey_0\" class=\"Line5Col10KeyNormal\">a</div>" +
    "            <div id=\"ThirdLineKey_1\" class=\"Line5Col10KeyNormal\">s</div>" +
    "            <div id=\"ThirdLineKey_2\" class=\"Line5Col10KeyNormal\">d</div>" +
    "            <div id=\"ThirdLineKey_3\" class=\"Line5Col10KeyNormal\">f</div>" +
    "            <div id=\"ThirdLineKey_4\" class=\"Line5Col10KeyNormal\">g</div>" +
    "            <div id=\"ThirdLineKey_5\" class=\"Line5Col10KeyNormal\">h</div>" +
    "            <div id=\"ThirdLineKey_6\" class=\"Line5Col10KeyNormal\">j</div>" +
    "            <div id=\"ThirdLineKey_7\" class=\"Line5Col10KeyNormal\">k</div>" +
    "            <div id=\"ThirdLineKey_8\" class=\"Line5Col10KeyNormal\">l</div>" +
    "            <div id=\"ThirdLineKey_9\" class=\"Line5Col10KeyNormal\">'</div>" +
    "            <div id=\"ThirdLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ThirdLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiFourthLine\" class=\"centerNormalLine\">" +
    "            <div id=\"FourthLineKey_0\" class=\"engShiftKey_NormalNormal\"></div>" +
    "            <div id=\"FourthLineKey_1\" class=\"shift9ItemEnNormal\">z</div>" +
    "            <div id=\"FourthLineKey_2\" class=\"shift9ItemEnNormal\">x</div>" +
    "            <div id=\"FourthLineKey_3\" class=\"shift9ItemEnNormal\">c</div>" +
    "            <div id=\"FourthLineKey_4\" class=\"shift9ItemEnNormal\">v</div>" +
    "            <div id=\"FourthLineKey_5\" class=\"shift9ItemEnNormal\">b</div>" +
    "            <div id=\"FourthLineKey_6\" class=\"shift9ItemEnNormal\">n</div>" +
    "            <div id=\"FourthLineKey_7\" class=\"shift9ItemEnNormal\">m</div>" +
    "            <div id=\"FourthLineKey_8\" class=\"shift9ItemEnNormal\">,</div>" +
    "            <div id=\"FourthLineKey_9\" class=\"shift9ItemEnNormal\">.</div>" +
    "            <div id=\"FourthLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"FourthLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "        <div id=\"iqqiControlLine\" class=\"centerNormalLine\">" +
    "            <div id=\"ControlLineKey_0\" class=\"controlHome_escEnNormal\"></div>" +
    "            <div id=\"ControlLineKey_1\" class=\"controlHome_LanSwitchNormal\"></div>" +
    "            <div id=\"ControlLineKey_2\" class=\"controlHome_NumberSwitchNormal\">123</div>" +
    "            <div id=\"ControlLineKey_3\" class=\"uzbWhiteSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_4\" class=\"controlHome_BackSpaceNormal\"></div>" +
    "            <div id=\"ControlLineKey_5\" class=\"controlHome_EnterNormal\"></div>" +
    "            <div id=\"ControlLineKey_6\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_7\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_8\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_9\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_10\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_11\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_12\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_13\" class=\"iqqiLineKeyHidden\"></div>" +
    "            <div id=\"ControlLineKey_14\" class=\"iqqiLineKeyHidden\"></div>" +
    "        </div>" +
    "    </div>";

var strings = {
    "lan_switch_title": {
        "CHI": "语言选择",
        "ENG": "Language",
        "DEU": "Sprache",
        "ITA": "Lingua",
        "POR": "Idioma",
        "SPA": "Idioma",
        "FRA": "Langue",
        "NOR": "Språk",
        "SWE": "Språk",
        "DAN": "Sprog",
        "FIN": "Kieli",
        "TUR": "Dil",
        "ARA": "اللغة",
        "RUS": "Язык",
        "VIE": "Ngôn ngữ",
        "THA": "ภาษา",
        "MYA": "ဘာသာစကား",
        "UZB": "Til",
        "HIN": "भाषा",
        "UKR": "Мова",
        "MSA": "Bahasa",
        "HEB": "שפה",
        "CES": "Jazyk",
        "SLK": "Jazyk",
        "POL": "Język",
        "HUN": "Nyelv",
        "BUL": "Език",
        "FAS": "زبان",
        "IND": "Bahasa",
        "ZHO": "語言選擇"
    },
    "iqqi_control_enter": {
        "CHI": "确认",
        "ENG": "Enter",
        "DEU": "Eingabe",
        "ITA": "Conferma",
        "POR": "Introduzir",
        "SPA": "Acceder",
        "FRA": "Entrer",
        "NOR": "Gå inn",
        "SWE": "Ange",
        "DAN": "Indtast",
        "FIN": "Syötä",
        "TUR": "Gir",
        "ARA": "دخول",
        "RUS": "Ввод",
        "VIE": "Nhập",
        "THA": "เข้าไป",
        "MYA": "ထည့္သြင္းပါ",
        "UZB": "Kiritish",
        "HIN": "प्रवेश ",
        "UKR": "Ввести",
        "MSA": "Masukkan",
        "HEB": "כניסה",
        "CES": "Zadat",
        "SLK": "Zadať",
        "POL": "Wejście",
        "HUN": "Belép",
        "BUL": "Въвеждане",
        "FAS": "ورود",
        "IND": "Masuk",
        "ZHO": "確認"
    },
    "iqqi_control_delete": {
        "CHI": "删除所有",
        "ENG": "Delete All",
        "DEU": "Alle löschen",
        "ITA": "Elimina tutto",
        "POR": "Apagar tudo",
        "SPA": "Eliminar todos",
        "FRA": "Tous supprimer",
        "NOR": "Slett alle",
        "SWE": "Ta bort alla",
        "DAN": "Slet alle",
        "FIN": "Poista kaikki",
        "TUR": "Tümünü Sil",
        "ARA": "حذف الكل",
        "RUS": "Удалить все",
        "VIE": "Xóa Tất Cả",
        "THA": "ลบทั้งหมด",
        "MYA": "အားလံုး ဖ်က္ပါ",
        "UZB": "Barchasini o'chirish",
        "HIN": "सब डिलीट करें",
        "UKR": "Видалити все",
        "MSA": "Padam Semua",
        "HEB": "מחק הכל",
        "CES": "Vymazat vše",
        "SLK": "Vymazať všetko",
        "POL": "Usuń wszystko",
        "HUN": "Összes törlése",
        "BUL": "Изтриване на всичко",
        "FAS": "حذف همه",
        "IND": "Hapus Semua",
        "ZHO": "刪除所有"
    },
    "iqqi_control_right": {
        "CHI": "向右",
        "ENG": "Right",
        "DEU": "Rechts",
        "ITA": "Destra",
        "POR": "Direita",
        "SPA": "Derecha ",
        "FRA": "Droite",
        "NOR": "Høyre",
        "SWE": "Höger",
        "DAN": "Højre",
        "FIN": "Oikea",
        "TUR": "Sağ",
        "ARA": "يمين",
        "RUS": "Правый",
        "VIE": "Phải",
        "THA": "ด้านขวา",
        "MYA": "ညာဘက္",
        "UZB": "O'ng",
        "HIN": "दांया",
        "UKR": "Правий",
        "MSA": "Hak",
        "HEB": "ימינה",
        "CES": "Vpravo",
        "SLK": "Vpravo",
        "POL": "Prawo",
        "HUN": "Jobb",
        "BUL": "Дясно",
        "FAS": "راست",
        "IND": "Kanan",
        "ZHO": "向右"
    },
    "iqqi_control_left": {
        "CHI": "向左",
        "ENG": "Left",
        "DEU": "Links",
        "ITA": "Sinistra",
        "POR": "Esquerda",
        "SPA": "Izquierda ",
        "FRA": "Gauche",
        "NOR": "Venstre",
        "SWE": "Vänster",
        "DAN": "Venstre",
        "FIN": "Vasen",
        "TUR": "Sol",
        "ARA": "يسار",
        "RUS": "Левый",
        "VIE": "Trái",
        "THA": "ด้านซ้าย",
        "MYA": "ဘယ္ဘက္",
        "UZB": "Chap",
        "HIN": "बांया",
        "UKR": "Лівий",
        "MSA": "Kiri",
        "HEB": "שמאלה",
        "CES": "Vlevo",
        "SLK": "Vľavo",
        "POL": "Lewo",
        "HUN": "Bal",
        "BUL": "Ляво",
        "FAS": "چپ",
        "IND": "Kiri",
        "ZHO": "向左"
    }
};