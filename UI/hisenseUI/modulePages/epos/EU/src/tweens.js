function showLight() {

}

function hideLight() {

}

function showBar() {
    bardown.visible = true;
    //playFlg = 1;
    bardown.alpha = 0;
    createjs.Tween.get(bardown, {loop: false}).to({alpha:1}, 1000, createjs.Ease.quadIn);
}

function showLeftBar() {
    barleft.visible = true;
    //playFlg = 2;
    barleft.alpha = 0;
    createjs.Tween.get(barleft, {loop: false}).to({alpha:1}, 1000, createjs.Ease.quadIn);
}

function showRightBar() {
    barright.visible = true;
    //playFlg = 3;
    barright.alpha = 0;
    createjs.Tween.get(barright, {loop: false}).to({alpha:1}, 1000, createjs.Ease.quadIn);
}

function backBar() {
    createjs.Tween.get(bardown, {loop: false}).to({alpha:0}, 1000, createjs.Ease.quadIn);
}

function backLeftBar() {
    createjs.Tween.get(barleft, {loop: false}).to({alpha:0}, 1000, createjs.Ease.quadIn);
}

function backRightBar() {
    createjs.Tween.get(barright, {loop: false}).to({alpha:0}, 1000, createjs.Ease.quadIn);
}

function hideBar() {
    bardown.visible = false;
    barleft.visible = false;
    barright.visible = false;
}

function showAnime1() {
    anime1.visible = true;
    anime1.gotoAndPlay("wait");
    anime1.scaleX = 0.01; anime1.scaleY = 0.01;
}

function showAnime2() {
    anime2.visible = true;
    anime2.gotoAndPlay("wait");
    anime2.scaleX = 0.01; anime2.scaleY = 0.01;
}

function showAnime3() {
    anime3.visible = true;
    anime3.gotoAndPlay("wait");
    anime3.scaleX = 0.01; anime3.scaleY = 0.01;
}

function showAnime4() {
    anime4.visible = true;
    anime4.gotoAndPlay("wait");
    anime4.scaleX = 0.01; anime4.scaleY = 0.01;
}

function showBtn1() {
    btn1ft.scaleX = 0.01;
    btn1ft.scaleY = 0.01;
    btn1ft.visible = true;
    createjs.Tween.get(btn1ft, {loop: false}).to({scaleX:1, scaleY:1}, 1200, createjs.Ease.backOut);
}

function turnOnBtn1() {
    btn1ft.gotoAndPlay("4kPlay");
    btn1ft.scaleX = 0.8;
    btn1ft.scaleY = 0.8;
    createjs.Tween.get(btn1ft, {loop: false}).to({scaleX:1, scaleY:1}, 1000, createjs.Ease.getElasticOut2(1,0.3));
    btn1bg.scaleX = 0.8;
    btn1bg.scaleY = 0.8;
    btn1bg.visible = true;
    btn1bg.gotoAndPlay("playBtn");
    createjs.Tween.get(btn1bg, {loop: false}).to({scaleX:1, scaleY:1}, 1000, createjs.Ease.getElasticOut2(1,0.3));
}

function turnOffBtn1() {
    btn1ft.gotoAndPlay("4k");
    btn1ft.scaleX = 1.2;
    btn1ft.scaleY = 1.2;
    createjs.Tween.get(btn1ft, {loop: false}).to({scaleX:1, scaleY:1}, 500, createjs.Ease.elasticOut);
    btn1bg.visible = false;
}

function showBtn2() {
    btn2ft.scaleX = 0.01;
    btn2ft.scaleY = 0.01;
    btn2ft.visible = true;
    createjs.Tween.get(btn2ft, {loop: false}).to({scaleX:1, scaleY:1}, 1200, createjs.Ease.backOut);
}

function turnOnBtn2() {
    btn2ft.gotoAndPlay("curvePlay");
    btn2ft.scaleX = 0.8;
    btn2ft.scaleY = 0.8;
    createjs.Tween.get(btn2ft, {loop: false}).to({scaleX:1, scaleY:1}, 1000, createjs.Ease.getElasticOut2(1,0.3));
    btn2bg.scaleX = 0.8;
    btn2bg.scaleY = 0.8;
    btn2bg.visible = true;
    btn2bg.gotoAndPlay("playBtn");
    createjs.Tween.get(btn2bg, {loop: false}).to({scaleX:1, scaleY:1}, 1000, createjs.Ease.getElasticOut2(1,0.3));
}

function turnOffBtn2() {
    btn2ft.gotoAndPlay("curve");
    btn2ft.scaleX = 1.2;
    btn2ft.scaleY = 1.2;
    createjs.Tween.get(btn2ft, {loop: false}).to({scaleX:1, scaleY:1}, 500, createjs.Ease.elasticOut);
    btn2bg.visible = false;
}

function showBtn3() {
    btn3ft.scaleX = 0.01;
    btn3ft.scaleY = 0.01;
    btn3ft.visible = true;
    createjs.Tween.get(btn3ft, {loop: false}).to({scaleX:1, scaleY:1}, 1200, createjs.Ease.backOut);
}

function turnOnBtn3() {
    btn3ft.gotoAndPlay("ledPlay");
    btn3ft.scaleX = 0.8;
    btn3ft.scaleY = 0.8;
    createjs.Tween.get(btn3ft, {loop: false}).to({scaleX:1, scaleY:1}, 1000, createjs.Ease.getElasticOut2(1,0.3));
    btn3bg.scaleX = 0.8;
    btn3bg.scaleY = 0.8;
    btn3bg.visible = true;
    btn3bg.gotoAndPlay("playBtn");
    createjs.Tween.get(btn3bg, {loop: false}).to({scaleX:1, scaleY:1}, 1000, createjs.Ease.getElasticOut2(1,0.3));
}

function turnOffBtn3() {
    btn3ft.gotoAndPlay("led");
    btn3ft.scaleX = 1.2;
    btn3ft.scaleY = 1.2;
    createjs.Tween.get(btn3ft, {loop: false}).to({scaleX:1, scaleY:1}, 500, createjs.Ease.elasticOut);
    btn3bg.visible = false;
}

function showBtn4() {
    btn4ft.scaleX = 0.01;
    btn4ft.scaleY = 0.01;
    btn4ft.visible = true;
    createjs.Tween.get(btn4ft, {loop: false}).to({scaleX:1, scaleY:1}, 1200, createjs.Ease.backOut);
}

function turnOnBtn4() {
    btn4ft.gotoAndPlay("colorPlay");
    btn4ft.scaleX = 0.8;
    btn4ft.scaleY = 0.8;
    createjs.Tween.get(btn4ft, {loop: false}).to({scaleX:1, scaleY:1}, 1000, createjs.Ease.getElasticOut2(1,0.3));
    btn4bg.scaleX = 0.8;
    btn4bg.scaleY = 0.8;
    btn4bg.visible = true;
    btn4bg.gotoAndPlay("playBtn");
    createjs.Tween.get(btn4bg, {loop: false}).to({scaleX:1, scaleY:1}, 1000, createjs.Ease.getElasticOut2(1,0.3));
}

function turnOffBtn4() {
    btn4ft.gotoAndPlay("color");
    btn4ft.scaleX = 1.2;
    btn4ft.scaleY = 1.2;
    createjs.Tween.get(btn4ft, {loop: false}).to({scaleX:1, scaleY:1}, 500, createjs.Ease.elasticOut);
    btn4bg.visible = false;
}


function backBtn1() {
    createjs.Tween.get(btn1ft, {loop: false}).to({scaleX:0.01, scaleY:0.01, alpha:0}, 500, createjs.Ease.backIn);
    createjs.Tween.get(btn1bg, {loop: false}).to({scaleX:0.01, scaleY:0.01, alpha:0}, 500, createjs.Ease.backIn);
}
function backBtn2() {
    createjs.Tween.get(btn2ft, {loop: false}).to({scaleX:0.01, scaleY:0.01, alpha:0}, 500, createjs.Ease.backIn);
    createjs.Tween.get(btn2bg, {loop: false}).to({scaleX:0.01, scaleY:0.01, alpha:0}, 500, createjs.Ease.backIn);
}
function backBtn3() {
    createjs.Tween.get(btn3ft, {loop: false}).to({scaleX:0.01, scaleY:0.01, alpha:0}, 500, createjs.Ease.backIn);
    createjs.Tween.get(btn3bg, {loop: false}).to({scaleX:0.01, scaleY:0.01, alpha:0}, 500, createjs.Ease.backIn);
}
function backBtn4() {
    createjs.Tween.get(btn4ft, {loop: false}).to({scaleX:0.01, scaleY:0.01, alpha:0}, 500, createjs.Ease.backIn);
    createjs.Tween.get(btn4bg, {loop: false}).to({scaleX:0.01, scaleY:0.01, alpha:0}, 500, createjs.Ease.backIn);
}

function backAllBtn() {
    btn1ft.visible = false;
    btn2ft.visible = false;
    btn3ft.visible = false;
    btn4ft.visible = false;
    btn1bg.visible = false;
    btn2bg.visible = false;
    btn3bg.visible = false;
    btn4bg.visible = false;
}

function playAnime1(scale, reverseX) {
    anime1.scaleX = 0.1;
    anime1.scaleY = 0.1;
    anime1.visible = true;
    anime1.gotoAndPlay("play");
    createjs.Tween.get(anime1, {loop: false}).to({scaleX:reverseX, scaleY:scale}, 500, createjs.Ease.backInOut);
    text1.visible = true;
    text1.alpha = 0;
    createjs.Tween.get(text1, {loop: false}).to({alpha:1}, 500);
}

function stopAnime1() {
    anime1.gotoAndPlay("stop");
    createjs.Tween.get(anime1, {loop: false}).to({scaleX:0.01, scaleY:0.01}, 200, createjs.Ease.quintOut);
    createjs.Tween.get(text1, {loop: false}).to({alpha:0}, 200);

}

function hideAnime1() {
    anime1.visible = false;
    text1.visible = false;
}

function playAnime2(scale, reverseX) {
    anime2.scaleX = 0.1;
    anime2.scaleY = 0.1;
    anime2.visible = true;
    anime2.gotoAndPlay("play");
    createjs.Tween.get(anime2, {loop: false}).to({scaleX:reverseX, scaleY:scale}, 500, createjs.Ease.backInOut);
    text2.visible = true;
    text2.alpha = 0;
    createjs.Tween.get(text2, {loop: false}).to({alpha:1}, 500);
}

function stopAnime2() {
    anime2.gotoAndPlay("stop");
    createjs.Tween.get(anime2, {loop: false}).to({scaleX:0.01, scaleY:0.01}, 200, createjs.Ease.quintOut);
    createjs.Tween.get(text2, {loop: false}).to({alpha:0}, 200);

}

function hideAnime2() {
    anime2.visible = false;
    text2.visible = false;
}

function playAnime3(scale, reverseX) {
    anime3.scaleX = 0.1;
    anime3.scaleY = 0.1;
    anime3.visible = true;
    anime3.gotoAndPlay("play");
    createjs.Tween.get(anime3, {loop: false}).to({scaleX:reverseX, scaleY:scale}, 500, createjs.Ease.backInOut);
    text3.visible = true;
    text3.alpha = 0;
    createjs.Tween.get(text3, {loop: false}).to({alpha:1}, 500);
}

function stopAnime3() {
    anime3.gotoAndPlay("stop");
    createjs.Tween.get(anime3, {loop: false}).to({scaleX:0.01, scaleY:0.01}, 200, createjs.Ease.quintOut);
    createjs.Tween.get(text3, {loop: false}).to({alpha:0}, 200);

}

function hideAnime3() {
    anime3.visible = false;
    text3.visible = false;
}

function playAnime4(scale, reverseX) {
    anime4.scaleX = 0.1;
    anime4.scaleY = 0.1;
    anime4.visible = true;
    anime4.gotoAndPlay("play");
    createjs.Tween.get(anime4, {loop: false}).to({scaleX:reverseX, scaleY:scale}, 500, createjs.Ease.backInOut);
    text4.visible = true;
    text4.alpha = 0;
    createjs.Tween.get(text4, {loop: false}).to({alpha:1}, 500);
}

function stopAnime4() {
    anime4.gotoAndPlay("stop");
    createjs.Tween.get(anime4, {loop: false}).to({scaleX:0.01, scaleY:0.01}, 200, createjs.Ease.quintOut);
    createjs.Tween.get(text4, {loop: false}).to({alpha:0}, 200);
}

function hideAnime4() {
    anime4.visible = false;
    text4.visible = false;
}

function shiftDownBtns(b1ft, b1bg, b2ft, b2bg, b3ft, b3bg, b4ft, b4bg) {
    createjs.Tween.get(b4ft, {loop: false}).to({scaleX:0, scaleY:0}, 500, createjs.Ease.backIn);
    createjs.Tween.get(b1ft, {loop: false}).wait(100).to({scaleX:0, scaleY:0}, 500, createjs.Ease.backIn);
    createjs.Tween.get(b2ft, {loop: false}).wait(200).to({scaleX:0, scaleY:0}, 500, createjs.Ease.backIn);
    createjs.Tween.get(b3ft, {loop: false}).wait(300).to({scaleX:0, scaleY:0}, 500, createjs.Ease.backIn).call(changeDownPos,[b1ft, b1bg, b2ft, b2bg, b3ft, b3bg, b4ft, b4bg]);
}

function shiftDownBtns1(b1ft, b1bg, b2ft, b2bg, b3ft, b3bg, b4ft, b4bg) {
    createjs.Tween.get(b1ft, {loop: false}).to({scaleX:1, scaleY:1}, 500, createjs.Ease.backOut);
    createjs.Tween.get(b2ft, {loop: false}).wait(100).to({scaleX:1, scaleY:1}, 500, createjs.Ease.backOut);
    createjs.Tween.get(b3ft, {loop: false}).wait(200).to({scaleX:1, scaleY:1}, 500, createjs.Ease.backOut);
    createjs.Tween.get(b4ft, {loop: false}).wait(300).to({scaleX:1, scaleY:1}, 500, createjs.Ease.backOut);
}

function changeDownPos(b1ft, b1bg, b2ft, b2bg, b3ft, b3bg, b4ft, b4bg) {
    b1ft.x = 1920 - 800;
    b2ft.x = 1920 - 600;
    b3ft.x = 1920 - 400;
    b4ft.x = 1920 - 200;
    b1bg.x = 1920 - 800;
    b2bg.x = 1920 - 600;
    b3bg.x = 1920 - 400;
    b4bg.x = 1920 - 200;
}

function shiftSideBtns(b1ft, b1bg, b2ft, b2bg, b3ft, b3bg, b4ft, b4bg) {
    createjs.Tween.get(b4ft, {loop: false}).to({scaleX:0, scaleY:0}, 500, createjs.Ease.backIn);
    createjs.Tween.get(b1ft, {loop: false}).wait(100).to({scaleX:0, scaleY:0}, 500, createjs.Ease.backIn);
    createjs.Tween.get(b2ft, {loop: false}).wait(200).to({scaleX:0, scaleY:0}, 500, createjs.Ease.backIn);
    createjs.Tween.get(b3ft, {loop: false}).wait(300).to({scaleX:0, scaleY:0}, 500, createjs.Ease.backIn).call(changeSidePos,[b1ft, b1bg, b2ft, b2bg, b3ft, b3bg, b4ft, b4bg]);
}

function shiftSideBtns1(b1ft, b1bg, b2ft, b2bg, b3ft, b3bg, b4ft, b4bg) {
    createjs.Tween.get(b1ft, {loop: false}).to({scaleX:1, scaleY:1}, 500, createjs.Ease.backOut);
    createjs.Tween.get(b2ft, {loop: false}).wait(100).to({scaleX:1, scaleY:1}, 500, createjs.Ease.backOut);
    createjs.Tween.get(b3ft, {loop: false}).wait(200).to({scaleX:1, scaleY:1}, 500, createjs.Ease.backOut);
    createjs.Tween.get(b4ft, {loop: false}).wait(300).to({scaleX:1, scaleY:1}, 500, createjs.Ease.backOut);
}

function changeSidePos(b1ft, b1bg, b2ft, b2bg, b3ft, b3bg, b4ft, b4bg) {
    b1ft.y = 1080 - 550;
    b2ft.y = 1080 - 400;
    b3ft.y = 1080 - 250;
    b4ft.y = 1080 - 100;
    b1bg.y = 1080 - 550;
    b2bg.y = 1080 - 400;
    b3bg.y = 1080 - 250;
    b4bg.y = 1080 - 100
}
