$('.texts').textillate({
    minDisplayTime: 1000, 
    in: { effect: 'flipInX', sync: true }, 
    out :{  delay: 3, effect: 'lightSpeedOut', sync: true},
    loop: true

});
const textList = ["space", "expense", "cleaning", "energy"];
const cycle = document.querySelector("#cycle");
let i = 0;
const cycleText = () => {
  cycle.innerHTML = textList[i];
  i = ++i % textList.length;
};
cycleText();
setInterval(cycleText, 400);

const textList2 = ["time", "freedom", "money", "calm"];
const cycle2 = document.querySelector("#cycle2");
let j = 0;
const cycleText2 = () => {
  cycle2.innerHTML = textList2[i];
  j = ++j % textList2.length;
};
cycleText2();
setInterval(cycleText2, 500);

