var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

// 이미지
var right = Paper.image('right.png', 0, 0, 23, 23).toDefs();
var traffic1 = Paper.image('traffic1.png', 0, 0, 350, 500).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topArea = Paper.g();
right.use().transform('t330, 7').click(handler01).appendTo(topArea);
function handler01() {
  location.replace('trafficsafety2.html');
}
traffic1.use().transform('t5, 35').appendTo(topArea);
