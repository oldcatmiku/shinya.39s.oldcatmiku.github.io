var animeList= [

{
	"name":"吹响！上低音号",
	"img":"https://cdn.yinghuazy.xyz/upload/vod/20201029-3/abffd7d0b23cd1264008ec3dbada0eb4.jpg", 
    "url":"https://www.vdm1.com/video/147900.html",
},
{
	"name":"莉兹与青鸟",
	"img":"https://s21.ax1x.com/2024/04/15/pFvUMpF.jpg", 
    "url":"https://pan.baidu.com/s/1JkIZCspH0Ytv0Hn_YqoDKA?pwd=jwek",
},
{
	"name":"孤独摇滚！",
	"img":"https://image.baidu.com/search/down?url=https://lz.sinaimg.cn/large/006yt1Omgy1h6ns614olkj30no0xcn5c.jpg", 
    "url":"https://www.vdm1.com/video/116940.html",
},
{
	"name":"猫物语（白）",
	"img":"https://th.bing.com/th/id/R.ac4b457283566374e08ae3c9da91f52e?rik=aY0Ex43LgtP%2fug&riu=http%3a%2f%2fi1.hdslb.com%2fbfs%2farchive%2fabef8dbb4a6f58b869bb17d18c8c4ea6a86cf3a4.jpg&ehk=Mi6B9QMpWj1swZfPY7uCci6o65jFdZN4k1wkxQIYiqY%3d&risl=&pid=ImgRaw&r=0", 
    "url":"https://www.acfun.cn/bangumi/aa6002986_36188_1737690",
},
{
	"name":"轻音少女第二季",
	"img":"https://img2.imgtp.com/2024/03/31/i0NirBdz.png", 
    "url":"https://www.vdm1.com/play/17780-1-19.html",
},
{
	"name":"打了300年的史莱姆 不知不觉就练到了满级",
	"img":"https://cdn.yinghuazy.xyz/jpg/ly1h2yppazilfj30ew0l87ac.jpg", 
    "url":"https://www.vdm1.com/video/19720.html",
},
{
	"name":"情色漫画老师",
	"img":"https://cdn.yinghuazy.xyz/upload/vod/20201029-3/ab0f6dc975b43006464d206ac385c0ca.jpg", 
    "url":"https://www.vdm1.com/video/142990.html",
},
{
	"name":"凉宫春日的忧郁 2009",
	"img":"https://img2.imgtp.com/2024/03/31/nIaIbkre.png", 
    "url":"https://www.vdm1.com/video/145350.html",
},
{
	"name":"紫罗兰永恒花园",
	"img":"https://cdn.yinghuazy.xyz/upload/vod/20210108-1/23bc648cb1408fcd0fa159d677e9c34e.jpg", 
    "url":"https://www.vdm1.com/video/139220.html",
},
{
	"name":"伪物语",
	"img":"https://img2.imgtp.com/2024/03/31/5Kxrru22.png", 
    "url":"https://www.acfun.cn/bangumi/aa6004318",
},
{
	"name":"猫物语（黑）",
	"img":"https://cdn.yinghuazy.xyz/upload/vod/20201029-4/f8f1d16928cdce15c80b6f998019067a.jpg", 
    "url":"https://www.acfun.cn/bangumi/aa6004319_36188_1754217",
},
];

for (let i = 0; i < animeList.length; i++) {
    // 在此处处理每个元素
    const element = document.getElementById("output");
    element.innerHTML += `
    <div class="bord">
    <div class="imgs">
        <a href="` + animeList[i].url + `">
            <img src="` + animeList[i].img + `">
        </a>
    </div>
    <span class="title">` + animeList[i].name + `</span>
</div>
    `;
}