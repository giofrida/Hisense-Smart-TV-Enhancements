function load() {
	initStage();
	initLoadingBar();
	initLoader();
}

function initLoadingBar() {
	loadingBar = new createjs.Bitmap("img/bg.png");
	loadingBar.x = 0;
	loadingBar.y = 0;
	stage.addChild(loadingBar);
	start();
}

function initLoader() {
	loader = new createjs.LoadQueue(false);
	loader.addEventListener("complete", waitLoadSide);
	loader.loadManifest(manifest, true, "img/");
}

function waitLoadSide() {
	createjs.Tween.get(loadingBar, {loop: false}).wait(4000).call(loadSide);
}

function loadSide() {
	loader1 = new createjs.LoadQueue(false);
	loader1.addEventListener("complete", prePlay);
	loader1.loadManifest(manifest2, true, "img/");
}

function prePlay() {
	createjs.Tween.get(loadingBar, {loop: false}).wait(4000).call(main);
}

function main() {
	stage.removeAllChildren();
	stage.drawRect = new createjs.Rectangle(0, 0, 1920, 1080);
	stage.update();
	initSprites(loader);
	initPositionDown();
	initTweens();

}

function initStage() {
	stage = new createjs.Stage("TVCanvas", false, false);
}

function initSprites(loader) {

	bardown = new createjs.Bitmap(loader.getResult("barDown"));
	barleft = new createjs.Bitmap(loader.getResult("barLeft"));
	barright = new createjs.Bitmap(loader.getResult("barRight"));
	pic1 = new createjs.DOMElement("pic1");
	pic2 = new createjs.DOMElement("pic2");

    btnsSheet = new createjs.SpriteSheet({
		framerate: frmRate,
		"images": [loader.getResult("btns")],
		"frames": btnsFrames,
		"animations": {
			"4kPlay": [0],
			"curvePlay": [1],
			"ledPlay": [2],
			"colorPlay": [3],
			"4k": [4],
			"curve": [5],
			"led": [6],
			"color": [7],
			"playBtn":[8, 108],
			"4kText": [109],
			"curveText": [110],
			"ledText": [111],
			"colorText": [112]
		}
	});

	btnSmallSheet = new createjs.SpriteSheet({
		framerate: frmRate,
		"images": [loader.getResult("btnSmall")],
		"frames": btnSmallFrames,
		"animations": {
			"4kPlay": [0],
			"curvePlay": [1],
			"ledPlay": [2],
			"colorPlay": [3],
			"4k": [4],
			"curve": [5],
			"led": [6],
			"color": [7],
			"playBtn":[8, 108],
			"4kText": [109],
			"curveText": [110],
			"ledText": [111],
			"colorText": [112]
		}
	});

    btn1ft = new createjs.Sprite(btnsSheet, "4k");
    btn2ft = new createjs.Sprite(btnsSheet, "curve");
    btn3ft = new createjs.Sprite(btnsSheet, "led");
    btn4ft = new createjs.Sprite(btnsSheet, "color");

    btn1bg = new createjs.Sprite(btnsSheet, "waitBtn");
    btn2bg = new createjs.Sprite(btnsSheet, "waitBtn");
    btn3bg = new createjs.Sprite(btnsSheet, "waitBtn");
    btn4bg = new createjs.Sprite(btnsSheet, "waitBtn");

	text1 = new createjs.Sprite(btnsSheet, "4kText");
	text2 = new createjs.Sprite(btnsSheet, "curveText");
	text3 = new createjs.Sprite(btnsSheet, "ledText");
	text4 = new createjs.Sprite(btnsSheet, "colorText");


	anime1Sheet = new createjs.SpriteSheet({
		framerate: frmRate,
		"images": [loader.getResult("anime1")],
		"frames": {width:350, height:250, count:176, regX: 0, regY:0, spacing:2, margin:0},
		"animations": {
			"wait": [0],
			"stop": [170],
			"play": [0, 170, "stop"]

		}
	});

	anime2Sheet = new createjs.SpriteSheet({
		framerate: frmRate,
		"images": [loader.getResult("anime2")],
		"frames": {width:350, height:250, count:176, regX: 0, regY:0, spacing:2, margin:0},
		"animations": {
			"wait": [0],
			"stop": [170],
			"play": [0, 170, "stop"]
		}
	});


	anime3Sheet = new createjs.SpriteSheet({
		framerate: frmRate,
		"images": [loader.getResult("anime3")],
		"frames": {width:350, height:250, count:176, regX: 0, regY:0, spacing:2, margin:0},
		"animations": {
			"wait": [0],
			"stop": [170],
			"play": [0, 170, "stop"]
		}
	});


	anime4Sheet = new createjs.SpriteSheet({
		framerate: frmRate,
		"images": [loader.getResult("anime4")],
		"frames": {width:350, height:250, count:176, regX: 0, regY:0, spacing:2, margin:0},
		"animations": {
			"wait": [0],
			"stop": [170],
			"play": [0, 170, "stop"]
		}
	});

	anime1 = new createjs.Sprite(anime1Sheet, "wait");
	anime2 = new createjs.Sprite(anime2Sheet, "wait");
	anime3 = new createjs.Sprite(anime3Sheet, "wait");
	anime4 = new createjs.Sprite(anime4Sheet, "wait");

	stage.addChild(pic1, pic2, bardown, barleft, barright, btn1bg, btn2bg, btn3bg, btn4bg, btn1ft, btn2ft, btn3ft, btn4ft, anime1, anime2,anime3,anime4, text1, text2, text3, text4);
}

function initPositionDown() {
	pic1.x = 1920 - pic1.htmlElement.width - 10;
	pic1.y = 5;
	pic2.x = 1920 - pic2.htmlElement.width - 15;
	pic2.y = 5 + pic1.htmlElement.height + 30;
	stage.drawRect = new createjs.Rectangle(0, 1080 - 300, 1920, 300);
	bardown.x = 0;  bardown.y = 1080 - 230; bardown.visible = false;
	barleft.x = 0;  barleft.y = 0; barleft.visible = false;
	barright.x = 1920 - 330;  barright.y = 0; barright.visible = false;
	btn1ft.x = 1920 - 800; btn1ft.y = 1080 - 125; btn1ft.visible = false; btn1ft.alpha = 1; btn1ft.spriteSheet = btnsSheet;
	btn2ft.x = 1920 - 600; btn2ft.y = 1080 - 125; btn2ft.visible = false; btn2ft.alpha = 1; btn2ft.spriteSheet = btnsSheet;
	btn3ft.x = 1920 - 400; btn3ft.y = 1080 - 125; btn3ft.visible = false; btn3ft.alpha = 1; btn3ft.spriteSheet = btnsSheet;
	btn4ft.x = 1920 - 200; btn4ft.y = 1080 - 125; btn4ft.visible = false; btn4ft.alpha = 1; btn4ft.spriteSheet = btnsSheet;
    btn1bg.x = 1920 - 800; btn1bg.y = 1080 - 125; btn1bg.visible = false; btn1bg.alpha = 1; btn1bg.spriteSheet = btnsSheet;
    btn2bg.x = 1920 - 600; btn2bg.y = 1080 - 125; btn2bg.visible = false; btn2bg.alpha = 1; btn2bg.spriteSheet = btnsSheet;
    btn3bg.x = 1920 - 400; btn3bg.y = 1080 - 125; btn3bg.visible = false; btn3bg.alpha = 1; btn3bg.spriteSheet = btnsSheet;
    btn4bg.x = 1920 - 200; btn4bg.y = 1080 - 125; btn4bg.visible = false; btn4bg.alpha = 1; btn4bg.spriteSheet = btnsSheet;
	text1.x = 1920 - 955; text1.y = 1080 - 80; text1.visible = false; text1.alpha = 1; text1.spriteSheet = btnsSheet;
	text2.x = 1920 - 955; text2.y = 1080 - 80; text2.visible = false; text2.alpha = 1; text2.spriteSheet = btnsSheet;
	text3.x = 1920 - 955; text3.y = 1080 - 80; text3.visible = false; text1.alpha = 1; text3.spriteSheet = btnsSheet;
	text4.x = 1920 - 955; text4.y = 1080 - 80; text4.visible = false; text4.alpha = 1; text4.spriteSheet = btnsSheet;
	anime1.x = 1920 - 1200; anime1.y = 1080 - 135; anime1.visible = false; anime1.scaleX = 0.01; anime1.scaleY = 0.01;anime1.spriteSheet = anime1Sheet;
	anime2.x = 1920 - 1200; anime2.y = 1080 - 135; anime2.visible = false; anime2.scaleX = 0.01; anime2.scaleY = 0.01;anime2.spriteSheet = anime2Sheet;
	anime3.x = 1920 - 1200; anime3.y = 1080 - 135; anime3.visible = false; anime3.scaleX = 0.01; anime3.scaleY = 0.01;anime3.spriteSheet = anime3Sheet;
	anime4.x = 1920 - 1200; anime4.y = 1080 - 135; anime4.visible = false; anime4.scaleX = 0.01; anime4.scaleY = 0.01;anime4.spriteSheet = anime4Sheet;
}

function initPositionLeft() {

	anime5Sheet = new createjs.SpriteSheet({
		framerate: frmRate,
		"images": [loader1.getResult("anime5")],
		"frames": {width:250, height:250, count:176, regX: 0, regY:0, spacing:2, margin:0},
		"animations": {
			"wait": [0],
			"stop": [170],
			"play": [0, 170, "stop"]
		}
	});

	anime6Sheet = new createjs.SpriteSheet({
		framerate: frmRate,
		"images": [loader1.getResult("anime6")],
		"frames": {width:250, height:250, count:176, regX: 0, regY:0, spacing:2, margin:0},
		"animations": {
			"wait": [0],
			"stop": [170],
			"play": [0, 170, "stop"]
		}
	});

	anime7Sheet = new createjs.SpriteSheet({
		framerate: frmRate,
		"images": [loader1.getResult("anime7")],
		"frames": {width:250, height:250, count:176, regX: 0, regY:0, spacing:2, margin:0},
		"animations": {
			"wait": [0],
			"stop": [170],
			"play": [0, 170, "stop"]
		}
	});

	anime8Sheet = new createjs.SpriteSheet({
		framerate: frmRate,
		"images": [loader1.getResult("anime8")],
		"frames": {width:250, height:250, count:176, regX: 0, regY:0, spacing:2, margin:0},
		"animations": {
			"wait": [0],
			"stop": [170],
			"play": [0, 170, "stop"]
		}
	});

	pic1.x = 1920 - pic1.htmlElement.width - 10;
	pic1.y = 5;
	pic2.x = 1920 - pic2.htmlElement.width - 15;
	pic2.y = 5 + pic1.htmlElement.height + 30;
	stage.drawRect = new createjs.Rectangle(0, 0, 400, 1080);
	barleft.x = 0;  barleft.y = 0; barleft.visible = false;
	btn1ft.x = 120; btn1ft.y = 1080 - 550; btn1ft.visible = false; btn1ft.alpha = 1; btn1ft.spriteSheet = btnSmallSheet;
	btn2ft.x = 120; btn2ft.y = 1080 - 400; btn2ft.visible = false; btn2ft.alpha = 1; btn2ft.spriteSheet = btnSmallSheet;
	btn3ft.x = 120; btn3ft.y = 1080 - 250; btn3ft.visible = false; btn3ft.alpha = 1; btn3ft.spriteSheet = btnSmallSheet;
	btn4ft.x = 120; btn4ft.y = 1080 - 100; btn4ft.visible = false; btn4ft.alpha = 1; btn4ft.spriteSheet = btnSmallSheet;
	btn1bg.x = 120; btn1bg.y = 1080 - 550; btn1bg.visible = false; btn1bg.alpha = 1; btn1bg.spriteSheet = btnSmallSheet;
	btn2bg.x = 120; btn2bg.y = 1080 - 400; btn2bg.visible = false; btn2bg.alpha = 1; btn2bg.spriteSheet = btnSmallSheet;
	btn3bg.x = 120; btn3bg.y = 1080 - 250; btn3bg.visible = false; btn3bg.alpha = 1; btn3bg.spriteSheet = btnSmallSheet;
	btn4bg.x = 120; btn4bg.y = 1080 - 100; btn4bg.visible = false; btn4bg.alpha = 1; btn4bg.spriteSheet = btnSmallSheet;
	text1.x = 85; text1.y = 420; text1.visible = false; text1.alpha = 1; text1.spriteSheet = btnSmallSheet;
	text2.x = 85; text2.y = 420; text2.visible = false; text2.alpha = 1; text2.spriteSheet = btnSmallSheet;
	text3.x = 85; text3.y = 420; text3.visible = false; text1.alpha = 1; text3.spriteSheet = btnSmallSheet;
	text4.x = 85; text4.y = 420; text4.visible = false; text4.alpha = 1; text4.spriteSheet = btnSmallSheet;
	anime1.x = 150; anime1.y = 290; anime1.visible = false; anime1.scaleX = 0.01; anime1.scaleY = 0.01;anime1.spriteSheet = anime5Sheet;
	anime2.x = 150; anime2.y = 290; anime2.visible = false; anime2.scaleX = 0.01; anime2.scaleY = 0.01;anime2.spriteSheet = anime6Sheet;
	anime3.x = 150; anime3.y = 290; anime3.visible = false; anime3.scaleX = 0.01; anime3.scaleY = 0.01;anime3.spriteSheet = anime7Sheet;
	anime4.x = 150; anime4.y = 290; anime4.visible = false; anime4.scaleX = 0.01; anime4.scaleY = 0.01;anime4.spriteSheet = anime8Sheet;
}

function initPositionRight() {

	pic1.x = 10;
	pic1.y = 5;
	pic2.x = 15;
	pic2.y = 5 + pic1.htmlElement.height + 30;
	stage.drawRect = new createjs.Rectangle(1920 - 400, 0, 400, 1080);
	barright.x = 1920 - 249;  barright.y = 0; barright.visible = false;
	btn1ft.x = 1920 - 120; btn1ft.y = 1080 - 550; btn1ft.visible = false; btn1ft.alpha = 1; btn1ft.spriteSheet = btnSmallSheet;
	btn2ft.x = 1920 - 120; btn2ft.y = 1080 - 400; btn2ft.visible = false; btn2ft.alpha = 1; btn2ft.spriteSheet = btnSmallSheet;
	btn3ft.x = 1920 - 120; btn3ft.y = 1080 - 250; btn3ft.visible = false; btn3ft.alpha = 1; btn3ft.spriteSheet = btnSmallSheet;
	btn4ft.x = 1920 - 120; btn4ft.y = 1080 - 100; btn4ft.visible = false; btn4ft.alpha = 1; btn4ft.spriteSheet = btnSmallSheet;
	btn1bg.x = 1920 - 120; btn1bg.y = 1080 - 550; btn1bg.visible = false; btn1bg.alpha = 1; btn1bg.spriteSheet = btnSmallSheet;
	btn2bg.x = 1920 - 120; btn2bg.y = 1080 - 400; btn2bg.visible = false; btn2bg.alpha = 1; btn2bg.spriteSheet = btnSmallSheet;
	btn3bg.x = 1920 - 120; btn3bg.y = 1080 - 250; btn3bg.visible = false; btn3bg.alpha = 1; btn3bg.spriteSheet = btnSmallSheet;
	btn4bg.x = 1920 - 120; btn4bg.y = 1080 - 100; btn4bg.visible = false; btn4bg.alpha = 1; btn4bg.spriteSheet = btnSmallSheet;
	text1.x = 1920 - 75; text1.y = 420; text1.visible = false; text1.alpha = 1; text1.spriteSheet = btnSmallSheet;
	text2.x = 1920 - 80; text2.y = 420; text2.visible = false; text2.alpha = 1; text2.spriteSheet = btnSmallSheet;
	text3.x = 1920 - 80; text3.y = 420; text3.visible = false; text1.alpha = 1; text3.spriteSheet = btnSmallSheet;
	text4.x = 1920 - 75; text4.y = 420; text4.visible = false; text4.alpha = 1; text4.spriteSheet = btnSmallSheet;
	anime1.x = 1920 - 150; anime1.y = 290; anime1.visible = false; anime1.scaleX = 0.01; anime1.scaleY = 0.01;anime1.spriteSheet = anime5Sheet;
	anime2.x = 1920 - 150; anime2.y = 290; anime2.visible = false; anime2.scaleX = 0.01; anime2.scaleY = 0.01;anime2.spriteSheet = anime6Sheet;
	anime3.x = 1920 - 150; anime3.y = 290; anime3.visible = false; anime3.scaleX = 0.01; anime3.scaleY = 0.01;anime3.spriteSheet = anime7Sheet;
	anime4.x = 1920 - 150; anime4.y = 290; anime4.visible = false; anime4.scaleX = 0.01; anime4.scaleY = 0.01;anime4.spriteSheet = anime8Sheet;
}

function initTweens() {

	mainTween = createjs.Tween.get(bardown, {loop: true})
		.call(showLight)
        .call(showBar)
        .wait(1500)
		.call(showBtn1)
		.wait(200)
		.call(showBtn2)
		.wait(200)
		.call(showBtn3)
		.wait(200)
		.call(showBtn4)
		.wait(2000)
		.call(showAnime1)
		.wait(1500)
		.call(turnOnBtn1)
		.wait(50)
		.call(playAnime1,[1, 1])
		.wait(170/frmRate*1000)
		.call(stopAnime1)
		.wait(200)
        .call(hideAnime1)
		.wait(100)
		.call(turnOffBtn1)
		.wait(500)
		.call(shiftDownBtns,[btn2ft, btn2bg, btn3ft, btn3bg, btn4ft, btn4bg, btn1ft, btn1bg])
		.wait(800)
		.call(shiftDownBtns1,[btn2ft, btn2bg, btn3ft, btn3bg, btn4ft, btn4bg, btn1ft, btn1bg])
		.wait(800)
		.call(showAnime2)
		.wait(1500)
		.call(turnOnBtn2)
		.wait(50)
        .call(playAnime2,[1, 1])
        .wait(170/frmRate*1000)
        .call(stopAnime2)
        .wait(200)
        .call(hideAnime2)
		.wait(100)
		.call(turnOffBtn2)
		.wait(500)
		.call(shiftDownBtns,[btn3ft, btn3bg, btn4ft, btn4bg, btn1ft, btn1bg, btn2ft, btn2bg])
		.wait(800)
		.call(shiftDownBtns1,[btn3ft, btn3bg, btn4ft, btn4bg, btn1ft, btn1bg, btn2ft, btn2bg])
		.wait(800)
		.call(showAnime3)
		.wait(1500)
		.call(turnOnBtn3)
		.wait(50)
        .call(playAnime3,[1, 1])
        .wait(170/frmRate*1000)
        .call(stopAnime3)
        .wait(200)
        .call(hideAnime3)
		.wait(100)
		.call(turnOffBtn3)
		.wait(500)
		.call(shiftDownBtns,[btn4ft, btn4bg, btn1ft, btn1bg, btn2ft, btn2bg, btn3ft, btn3bg])
		.wait(800)
		.call(shiftDownBtns1,[btn4ft, btn4bg, btn1ft, btn1bg, btn2ft, btn2bg, btn3ft, btn3bg])
		.wait(800)
		.call(showAnime4)
		.wait(1500)
		.call(turnOnBtn4)
		.wait(50)
        .call(playAnime4,[1, 1])
        .wait(170/frmRate*1000)
        .call(stopAnime4)
        .wait(200)
        .call(hideAnime4)
		.wait(100)
		.call(turnOffBtn4)
		.wait(500)
		.call(backBtn4)
		.wait(150)
		.call(backBtn1)
		.wait(150)
		.call(backBtn2)
		.wait(150)
		.call(backBtn3)
		.wait(400)
        .call(backAllBtn)
		.wait(300)
		.call(showLight)
		.call(backBar)
		.wait(1000)
		.call(hideBar)
		.wait(1500)
		.call(initPositionLeft)
		.wait(3000)
		.call(showLight)
		.call(showLeftBar)
		.wait(1500)
		.call(showBtn1)
		.wait(200)
		.call(showBtn2)
		.wait(200)
		.call(showBtn3)
		.wait(200)
		.call(showBtn4)
		.wait(2000)
		.call(showAnime1)
		.wait(1500)
		.call(turnOnBtn1)
		.wait(50)
		.call(playAnime1,[1, 1])
		.wait(170/frmRate*1000)
		.call(stopAnime1)
		.wait(200)
		.call(hideAnime1)
		.wait(100)
		.call(turnOffBtn1)
		.wait(500)
		.call(shiftSideBtns,[btn2ft, btn2bg, btn3ft, btn3bg, btn4ft, btn4bg, btn1ft, btn1bg])
		.wait(800)
		.call(shiftSideBtns1,[btn2ft, btn2bg, btn3ft, btn3bg, btn4ft, btn4bg, btn1ft, btn1bg])
		.wait(800)
		.call(showAnime2)
		.wait(1500)
		.call(turnOnBtn2)
		.wait(50)
		.call(playAnime2,[1, 1])
		.wait(170/frmRate*1000)
		.call(stopAnime2)
		.wait(200)
		.call(hideAnime2)
		.wait(100)
		.call(turnOffBtn2)
		.wait(500)
		.call(shiftSideBtns,[btn3ft, btn3bg, btn4ft, btn4bg, btn1ft, btn1bg, btn2ft, btn2bg])
		.wait(800)
		.call(shiftSideBtns1,[btn3ft, btn3bg, btn4ft, btn4bg, btn1ft, btn1bg, btn2ft, btn2bg])
		.wait(800)
		.call(showAnime3)
		.wait(1500)
		.call(turnOnBtn3)
		.wait(50)
		.call(playAnime3,[1, 1])
		.wait(170/frmRate*1000)
		.call(stopAnime3)
		.wait(200)
		.call(hideAnime3)
		.wait(100)
		.call(turnOffBtn3)
		.wait(500)
		.call(shiftSideBtns,[btn4ft, btn4bg, btn1ft, btn1bg, btn2ft, btn2bg, btn3ft, btn3bg])
		.wait(800)
		.call(shiftSideBtns1,[btn4ft, btn4bg, btn1ft, btn1bg, btn2ft, btn2bg, btn3ft, btn3bg])
		.wait(800)
		.call(showAnime4)
		.wait(1500)
		.call(turnOnBtn4)
		.wait(50)
		.call(playAnime4,[1, 1])
		.wait(170/frmRate*1000)
		.call(stopAnime4)
		.wait(200)
		.call(hideAnime4)
		.wait(100)
		.call(turnOffBtn4)
		.wait(500)
		.call(backBtn4)
		.wait(150)
		.call(backBtn1)
		.wait(150)
		.call(backBtn2)
		.wait(150)
		.call(backBtn3)
		.wait(400)
		.call(backAllBtn)
		.wait(300)
		.call(backLeftBar)
		.wait(1000)
		.call(hideBar)
		.wait(500)
		.call(initPositionRight)
		.wait(3000)
		.call(showLight)
		.call(showRightBar)
		.wait(1500)
		.call(showBtn1)
		.wait(200)
		.call(showBtn2)
		.wait(200)
		.call(showBtn3)
		.wait(200)
		.call(showBtn4)
		.wait(2000)
		.call(showAnime1)
		.wait(1500)
		.call(turnOnBtn1)
		.wait(50)
		.call(playAnime1,[1, 1])
		.wait(170/frmRate*1000)
		.call(stopAnime1)
		.wait(200)
		.call(hideAnime1)
		.wait(100)
		.call(turnOffBtn1)
		.wait(500)
		.call(shiftSideBtns,[btn2ft, btn2bg, btn3ft, btn3bg, btn4ft, btn4bg, btn1ft, btn1bg])
		.wait(800)
		.call(shiftSideBtns1,[btn2ft, btn2bg, btn3ft, btn3bg, btn4ft, btn4bg, btn1ft, btn1bg])
		.wait(800)
		.call(showAnime2)
		.wait(1500)
		.call(turnOnBtn2)
		.wait(50)
		.call(playAnime2,[1, 1])
		.wait(170/frmRate*1000)
		.call(stopAnime2)
		.wait(200)
		.call(hideAnime2)
		.wait(100)
		.call(turnOffBtn2)
		.wait(500)
		.call(shiftSideBtns,[btn3ft, btn3bg, btn4ft, btn4bg, btn1ft, btn1bg, btn2ft, btn2bg])
		.wait(800)
		.call(shiftSideBtns1,[btn3ft, btn3bg, btn4ft, btn4bg, btn1ft, btn1bg, btn2ft, btn2bg])
		.wait(800)
		.call(showAnime3)
		.wait(1500)
		.call(turnOnBtn3)
		.wait(50)
		.call(playAnime3,[1, 1])
		.wait(170/frmRate*1000)
		.call(stopAnime3)
		.wait(200)
		.call(hideAnime3)
		.wait(100)
		.call(turnOffBtn3)
		.wait(500)
		.call(shiftSideBtns,[btn4ft, btn4bg, btn1ft, btn1bg, btn2ft, btn2bg, btn3ft, btn3bg])
		.wait(800)
		.call(shiftSideBtns1,[btn4ft, btn4bg, btn1ft, btn1bg, btn2ft, btn2bg, btn3ft, btn3bg])
		.wait(800)
		.call(showAnime4)
		.wait(1500)
		.call(turnOnBtn4)
		.wait(50)
		.call(playAnime4,[1, 1])
		.wait(170/frmRate*1000)
		.call(stopAnime4)
		.wait(200)
		.call(hideAnime4)
		.wait(100)
		.call(turnOffBtn4)
		.wait(500)
		.call(backBtn4)
		.wait(150)
		.call(backBtn1)
		.wait(150)
		.call(backBtn2)
		.wait(150)
		.call(backBtn3)
		.wait(400)
		.call(backAllBtn)
		.wait(300)
		.call(backRightBar)
		.wait(1000)
		.call(hideBar)
		.wait(1500)
		.call(initPositionDown)
		.wait(3000)

}

function tick(event) {
	stage.update(event);
}

function start() {
	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	//createjs.Ticker.framerate = frmRate;
	createjs.Ticker.on("tick", tick, this);
}

function stopEpos() {
    stage.visiable = false;
    createjs.Ticker.paused = true;
    createjs.Tween.removeAllTweens();
    createjs.Ticker.removeAllEventListeners();
    stage.clear();
    stage.removeAllChildren();
    loader.removeAll();
    loader.destroy();

    loadingBar=loader=stage=bardown=barleft=barright=btn1bg=btn2bg=btn3bg=btn4bg=btn1ft=btn2ft=btn3ft=btn4ft=anime1=anime2=anime3=anime4=text1=text2=text3=text4=anime1Sheet=anime2Sheet=anime3Sheet=anime4Sheet=anime5Sheet=anime6Sheet=anime7Sheet=anime8Sheet=btnsSheet=btnSmallSheet = null;
}