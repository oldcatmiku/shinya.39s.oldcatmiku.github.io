var all = 23
tips = new Array(all);
//条目内容
tips[0] = '“写完压轴题发现写错位置”';
tips[1] = '老猫：X&*%$^……  小柴：辛苦了！';
tips[2] = '老猫进军ejs领域！';
tips[3] = '小黑の消失';
tips[4] = 'CSS代码的分号被天天抢走了！';
tips[5] = '哦~买路ki';
tips[6] = '> ERROR!';
tips[7] = '大啊！';
tips[8] = '「你的自大会让你丧命的，加侬多夫。」';
tips[9] = '「痛揍魔王一顿吧！」';
tips[10] = '迪丽○○的传说';
tips[11] = '「<ruby>电脑用户<rt>手机用户</rt></ruby>与狗不得入内」';
tips[12] = '手机は完全に适配です！';
tips[13] = '∩ɱ$1';
tips[14] = '这里是 <%= config.title %>';
tips[15] = '页主队团CXT'
tips[16] = 'The suber more sers mers'
tips[17] = '老猫：都给我捐助哇呜哇！！'
tips[18] = '真相：页面加载太慢的原因是......'
tips[19] = 'advise sb. doing sth.'
tips[20] = 'int 数据溢出！'
tips[21] = '只有 ' + (100/all)/2+ '% 的可能抽到这条消息！'
tips[21] = '谨 防 内 鬼 举 报 ！'
tips[22] = 'put_file_content = 10TB数据'

index = Math.floor(Math.random() * tips.length);
var radm
radm = Math.floor(Math.random() * 2);
document.getElementById("as_title").innerHTML = tips[index];
