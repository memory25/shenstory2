const textList = [
	'',
	'一隻喵的走廊...',
	'一隻喵的發呆...',
	'一隻喵的出門...',
	'一隻喵的做夢...',
	'但他依然樂觀，微笑著',
	'生活難免有風風雨雨',
	'他總是能夠輕鬆的應對',
	'並且面帶陽光、自信的笑容',
	'生活也不會總是一帆風順...',

	'但他每次都能勇敢的面對<br />隨時準備接受生活的挑戰',
	'可是軒軒喵的鏟屎官又在哪裡呢？',
	'在鏡子裡面嗎？他不敢相信',
	'他去問大樹，我的愛情在哪裡？ <br />大樹告訴他，也許就在不遠的地方',
	'於是，軒軒一個人繼續向前走<br />走在茫茫的雪地上',
	'直到有一天與蝦太郎相遇了',
	'軒軒喜歡蝦太郎，因為蝦太郎的出現，軒軒臉上有了更加燦爛的笑容',
	'可是蝦太郎會喜歡軒軒嗎？',
	'終於有一天，軒軒鼓起了勇氣喵喵叫',
	'軒軒好高興 呼嚕呼呼~',

	'軒軒喵每天都想去找蝦太郎',
	'然後一人一喵一起出去玩',
	'晚上喵喵陪著蝦太郎回家',
	'直到很晚<br />喵喵才自己回家',
	'然後高興地進入夢鄉，希望夢到蝦太郎...',
	'喵喵很快就成為了蝦太郎的逛街助手',
	'軒軒喵和蝦太郎一起走過好多好玩的地方',
	'蝦太郎喜歡吃的東西，喵喵就會叼過來',
	'後來，他們搬到了一起',
	'為了能夠照顧蝦大人，於是軒軒開始學習工作技能',

	'他們常常吃著蝦太郎做的美食',
	'高高興興的一起搭車',
	'軒軒感覺自己好幸福。 <br />因為自己有了家<br />那個有蝦太郎在的地方',
	'他們偶爾也會吵架',
	'軒軒不想這樣',
	'一定是我有什麼做的不對，軒軒在想...',
	'如果沒有蝦太郎在身邊，窗外就沒有風景',
	'如果沒有蝦太郎在身後',
	'軒軒又怎會飛的更高更遠',
	'軒軒不想這樣。他要為蝦太郎改變自己<br />蝦太郎說她喜歡溫柔體貼的喵，並且想要一個正式浪漫的告白',

	'喵喵跟獅子座大神許願，期許自己可以變成小獅子心目中的理想情人...',
	'愛情就像花草一樣<br />需要用包容來澆灌',
	'需要選一個重要的日子<br />去完成愛的承諾...',

	'軒軒喵帶著喵族獨有的浪漫<br />貓貓好開心<br />因為他想像著蝦太郎看到這些後開心雀躍的樣子',

	'想想後面還有一輩子<br />軒軒和蝦蝦都好開心<br />因為可以一起去全世界好多地方玩',
	'軒軒也會繼續努力<br />為了他和蝦蝦的夢之城堡',

	'軒軒很幸福，因為他找到了蝦大人。<br />他相信後面的每天都會是快樂的<br />簡簡單單，享受著與蝦大人在一起的每個時刻',

	'永遠有多遠？<br />比時間多一秒就是永遠，軒軒會永遠愛蝦大人<br />世界有多大？<br />蝦大人走到哪裡，軒軒的世界就有多大',

	''
];

function start(lettuce) {
	var L = new lettuce();
	
	const data = {};
	textList.forEach((text, i)=>{
		data[`p${i+1}`] = text
	})

	function render(element) {
		//var html = '<div class="' + element + '"><h3>{%=o.' +  element + '%}</h3></div>';
		//var result = L.Template.tmpl(html, data);
		var result = '<div class="' + element + '"><h3>' +  data[element] + '</h3></div>';
		document.getElementById("results").innerHTML = result;
	}

	function showLove() {
		var c = document.getElementsByTagName('canvas')[0];
		var a = c.getContext('2d');
		e=[];h=[];O=c.width=innerWidth;Q=c.height=innerHeight;v=32;M=Math;R=M.random;C=M.cos;Y=6.3;for(i=0;i<Y;i+=0.2)h.push([O/2+180*M.pow(M.sin(i),3),Q/2+10*-(15*C(i)-5*C(2*i)-2*C(3*i)-C(4*i))]);
		for(i=0;i<v;){x=R()*O;y=R()*Q;H=80*(i/v)+280;S=40*R()+60;B=60*R()+20;f=[];for(k=0;k<v;)f[k++]={x:x,y:y,X:0,Y:0,R:1-k/v+1,S:R()+1,q:~~(R()*v),D:2*(i%2)-1,F:0.2*R()+0.7,f:"hsla("+~~H+","+~~S+"%,"+~~B+"%,.1)"};e[i++]=f}
		function _(d){a.fillStyle=d.f;a.beginPath();a.arc(d.x,d.y,d.R,0,Y,1);a.closePath();a.fill()}
		setInterval(function(){a.fillStyle="rgba(0,0,0,.2)";a.fillRect(0,0,O,Q);for(i=v;i--;){f=e[i];u=f[0];q=h[u.q];D=u.x-q[0];E=u.y-q[1];G=M.sqrt(D*D+E*E);10>G&&(0.95<R()?u.q=~~(R()*v):(0.99<R()&&(u.D*=-1),u.q+=u.D,u.q%=v,0>u.q&&(u.q+=v)));u.X+=-D/G*u.S;u.Y+=-E/G*u.S;u.x+=u.X;u.y+=u.Y;_(u);u.X*=u.F;u.Y*=u.F;for(k=0;k<v-1;)T=f[k],N=f[++k],N.x-=0.7*(N.x-T.x),N.y-=0.7*(N.y-T.y),_(N)}},25);
	}

    function final() {
	    document.getElementById("results").innerHTML = '<canvas width="1440" height="740"></canvas>';
	    L.Event.trigger("showLove")
    }

	L.Event.on("showLove", showLove);

	function show(func, n){
		var p = new L.Promise();
		var code = function () {
			if (func !== undefined) {
				func();
				L.FX.fadeIn(document.getElementById('results'), {
					duration: 3000, complete: function () {
					}
				});
			}
			p.done(null, n);
		};
		setTimeout(code, n);
		return p;
	}

	async function start(){
		await show(undefined, 5000)
		for(let i=2; i<50;i++){
			const delay = textList[i-2].length * 250 + 3250;
			await show(() => render('p' + i), delay)
		}
		await show(final, 4000)
		const div = document.createElement('div');
		div.style.position = 'absolute';
		div.style.width = 'auto';
		div.style.height = '22px';
		div.style.cursor = 'pointer';
		div.style.bottom = '50%';
		div.style.left = '50%';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.color = '#fff';
		div.style.border = '1px solid #fff';
		div.addEventListener('click', ()=>{
			window.open('https://memory25.github.io/lovestory3');
			document.querySelector('audio').pause();
		});
		div.innerText = '繼續前進';
		setTimeout(()=>{
			document.querySelector('#results').append(div)
		}, 3000);
	}
	start()
}

document.querySelector('#start button').addEventListener('click', ()=>{
	start(lettuce)
	const audio = document.querySelector('audio');
	audio.play()
	audio.addEventListener('ended', (a)=>{
		audio.src = './天淨沙.mp3';
        audio.pause();
        audio.load();
        audio.play();
	})
	document.querySelector('#start').style.display = 'none'
	document.querySelector('.typeWrap').style.display = 'block'
})
