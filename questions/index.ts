// 题目，根据id进行精力、判断、认知、生活方式的分类
/*
* id:题目序列
* content:题目内容
* answer 选择的类型
* 0 = 未选择 1 = J， 2 = P， 3 = T，4 = F， 5 = S， 6 = N， 7 = E， 8 = I
* J判断 P知觉 T思维 F情感 S感觉 N直觉 E外倾 B内倾
*/
const section1 = [
	{
		id:1,
		content:'当你某日想去某个地方，你会?',
		answer:[
			'计划好将做的事情以及何时做',
			'什么都不想就去'
		],
		scope:['J','P']
	},
	{
		id:2,
		content:'如果你是一位老师，你愿教?',
		answer:['涉及事实的课程','涉及理论的课程'],
		scope:['S','N']
	},
	{
		id:3,
		content:'你通常是?',
		answer:['一个善于交际的人','安静缄默的人'],
		scope:['E','I']
	},
	{
		id:4,
		content:'你喜欢?',
		answer:['事先安排好约会，聚会等','只要时机恰当就无拘无束地做任何有趣的事'],
		scope:['J','P']
	},
	{
		id:5,
		content:'你通常和 相处得更好?',
		answer:['想象力丰富的人','现实的人'],
		scope:['N','S']
	},
	{
		id:6,
		content:'往往，你是 ?',
		answer:['情感驾驭理智','理智驾驭情感'],
		scope:['F','T']
	},
	{
		id:7,
		content:'当你和一群人在一起时，你会 ?',
		answer:['参加大家的谈话','只同你熟知的人单独谈话'],
		scope:['E','I']
	},
	{
		id:8,
		content:'你更喜欢 做多数事情?',
		answer:['即兴时','有计划地'],
		scope:['P','J']
	},
	{
		id:9,
		content:'你愿意自己被认为是一个',
		answer:['善于动手的人','善于创意的人'],
		scope:['S','N']
	},
	{
		id:10,
		content:'你愿意自己被认为是一个',
		answer:['介绍他人','由别人来介绍你'],
		scope:['E','I']
	},
	{
		id:11,
		content:'你更喜欢',
		answer:['头脑灵活的人','务实且有丰富常识的人'],
		scope:['N','S']
	},
	{
		id:12,
		content:'按日程表办事',
		answer:['正合你意','束缚了你'],
		scope:['J','P']
	},
	{
		id:13,
		content:'你觉得通常别人要花费?',
		answer:['很久来了解你','一小段时间来了解你'],
		scope:['I','E']
	},
	{
		id:14,
		content:'对于制定周末计划，你觉得?',
		answer:['很有必要','没必要'],
		scope:['J','P']
	},
	{
		id:15,
		content:'被称为什么人是更高的赞赏?',
		answer:['感性的人 ','一贯理性的人'],
		scope:['F','T']
	},
	{
		id:16,
		content:'多数时候，你倾向于 ?',
		answer:['独处 ','同他人在一起'],
		scope:['I','E']
	},
	{
		id:17,
		content:'日常工作中，你喜欢 ?',
		answer:['在时间紧迫的情况下争分夺秒地工作 ','通常先安排好工作并加以完成，以免压力过大'],
		scope:['P','J']
	},
	{
		id:18,
		content:'你愿把 作为朋友?',
		answer:['常有新观点的人 ','脚踏实地的人'],
		scope:['N','S']
	},
	{
		id:19,
		content:'你能否 ?',
		answer:['只要愿意就能轻松地同几乎任何人说个没完 ','只能在特定场合下或同特定的人才愿意讲许多话'],
		scope:['E','I']
	},
	{
		id:20,
		content:'当有一项特殊工作时，你会 ?',
		answer:['在开始前精心组织策划 ','在工作进行中找出必要环节'],
		scope:['J','P']
	},
	{
		id:21,
		content:'你更倾向于 ?',
		answer:['感性地做事 ','依逻辑行事'],
		scope:['F','T']
	},
	{
		id:22,
		content:'当你为了消遣而阅读时，你 ?',
		answer:['欣赏奇特新颖的表达方式 ','喜欢作者确切地表达其意思'],
		scope:['N','S']
	},
	{
		id:23,
		content:'你新认识的人 说出你的兴趣所在?',
		answer:['马上就能 ','只有当他们真正了解你之后才能'],
		scope:['E','I']
	},
	{
		id:24,
		content:'在计划一次旅行时，你更喜欢 ?',
		answer:['在多数情况下随心所欲地行事 ','事先就知道在大部分日子所将做的事情'],
		scope:['P','J']
	},
	{
		id:25,
		content:'做很多人都会做的事情时，你喜欢 ?',
		answer:['按惯例做 ','按自己独创的方式做'],
		scope:['S','N']
	},
	{
		id:26,
		content:'多数人认为你 ?',
		answer:['不太把自己的事情告诉别人 ','非常坦率'],
		scope:['I','E']
	},
]

/*
*  第二部分的题目
*  在以下各对词中，你更倾向于哪一个。考虑以下这些词的意思，而不是它们好不好听或好不好看。
*/
const section2 = [
	{
		id:27,
		content:'',
		answer:['抽象','实在'],
		scope:['N','S']
	},
	{
		id:28,
		content:'',
		answer:['有计划','随意'],
		scope:['J','P']
	},
	{
		id:29,
		content:'',
		answer:['温柔','坚硬'],
		scope:['F','T']
	},
	{
		id:30,
		content:'',
		answer:['事实','观点'],
		scope:['S','N']
	},
	{
		id:31,
		content:'',
		answer:['思考','感觉'],
		scope:['T','F']
	},
	{
		id:32,
		content:'',
		answer:['热情','安静'],
		scope:['E','I']
	},
	{
		id:33,
		content:'',
		answer:['晓之以理','动之以情'],
		scope:['T','F']
	},
	{
		id:34,
		content:'',
		answer:['陈述','观念'],
		scope:['S','N']
	},
	{
		id:35,
		content:'',
		answer:['分析','认同'],
		scope:['T','F']
	},
	{
		id:36,
		content:'',
		answer:['系统的','自发的'],
		scope:['J','P']
	},
	{
		id:37,
		content:'',
		answer:['敏感','合理'],
		scope:['F','T']
	},
	{
		id:38,
		content:'',
		answer:['缄默','健谈'],
		scope:['I','E']
	},
	{
		id:39,
		content:'',
		answer:['事实的','理论的'],
		scope:['S','N']
	},
	{
		id:40,
		content:'',
		answer:['同情怜悯','深谋远虑'],
		scope:['F','T']
	},
	{
		id:41,
		content:'',
		answer:['系统','随机'],
		scope:['J','P']
	},
	{
		id:42,
		content:'',
		answer:['文静','开朗'],
		scope:['I','E']
	},
	{
		id:43,
		content:'',
		answer:['利益','祝福'],
		scope:['T','F']
	},
	{
		id:44,
		content:'',
		answer:['推测','确定'],
		scope:['N','S']
	},
	{
		id:45,
		content:'',
		answer:['坚决','热忱'],
		scope:['T','F']
	},
	{
		id:46,
		content:'',
		answer:['理想','现实'],
		scope:['N','S']
	},
	{
		id:47,
		content:'',
		answer:['意志坚强','慈悲心肠'],
		scope:['T','F']
	},
	{
		id:48,
		content:'',
		answer:['想象的','事实的'],
		scope:['N','S']
	},
	{
		id:49,
		content:'',
		answer:['客观的','易动情的'],
		scope:['T','F']
	},
	{
		id:50,
		content:'',
		answer:['制作','创造'],
		scope:['S','N']
	},
	{
		id:51,
		content:'',
		answer:['热情','客观'],
		scope:['F','T']
	},
	{
		id:52,
		content:'',
		answer:['实用的','迷人的'],
		scope:['S','N']
	},
	{
		id:53,
		content:'',
		answer:['有同情心','有逻辑头脑'],
		scope:['F','T']
	},
	{
		id:54,
		content:'',
		answer:['制造','设计'],
		scope:['S','N']
	},
	{
		id:55,
		content:'',
		answer:['冲动','决定'],
		scope:['P','J']
	},
	{
		id:56,
		content:'',
		answer:['公正的','体谅的'],
		scope:['T','F']
	},
	{
		id:57,
		content:'',
		answer:['文静','爱交际'],
		scope:['I','E']
	},
	{
		id:58,
		content:'',
		answer:['理性','感性'],
		scope:['T','F']
	},
	{
		id:59,
		content:'',
		answer:['不受限制的','安排好的'],
		scope:['P','J']
	},
	{
		id:60,
		content:'',
		answer:['详实','概括'],
		scope:['S','N']
	},
	{
		id:61,
		content:'',
		answer:['注重实际的','感情丰富的'],
		scope:['T','F']
	},
	{
		id:62,
		content:'',
		answer:['公开的','私人的'],
		scope:['E','I']
	},
	{
		id:63,
		content:'',
		answer:['建造','发明'],
		scope:['S','N']
	},
	{
		id:64,
		content:'',
		answer:['有序的','随便的'],
		scope:['J','P']
	},
	{
		id:65,
		content:'',
		answer:['想象的','现实的'],
		scope:['N','S']
	},
	{
		id:66,
		content:'',
		answer:['称职的','好心的'],
		scope:['T','F']
	},
	{
		id:67,
		content:'',
		answer:['理论','事实'],
		scope:['N','S']
	},
	{
		id:68,
		content:'',
		answer:['少许朋友','很多朋友'],
		scope:['I','E']
	},
	{
		id:69,
		content:'',
		answer:['可能性','必然性'],
		scope:['N','S']
	},
	{
		id:70,
		content:'',
		answer:['宽容','坚定'],
		scope:['F','T']
	},
	{
		id:71,
		content:'',
		answer:['新颖的','已知的'],
		scope:['N','S']
	},
	{
		id:72,
		content:'',
		answer:['温和','力量'],
		scope:['F','T']
	},
	{
		id:73,
		content:'',
		answer:['切实','创新'],
		scope:['S','N']
	}
]

/*
* 哪个答案最接近地描述了你通常的思考和行为方式
*/
const section3 = [
	{
		id:74,
		content:'你觉得被许多人围着 ?',
		answer:['让你感到更有精神','常让你精力衰竭'],
		scope:['E','I']
	},
	{
		id:75,
		content:'作决定时，对于你来说更重要的是 ?',
		answer:['权衡事实','考虑人们的感受和观点'],
		scope:['T','F']
	},
	{
		id:76,
		content:'通常你更喜欢 ?',
		answer:['提前安排好业余活动','即兴地做事情'],
		scope:['J','P']
	},
	{
		id:77,
		content:'在聚会中，你 ?',
		answer:['有时觉得无趣','总是玩得很开心'],
		scope:['I','E']
	},
	{
		id:78,
		content:'多数情况下，你更喜欢 ?',
		answer:['顺其自然','按日程表办事'],
		scope:['P','J']
	},
	{
		id:79,
		content:'你通常 ?',
		answer:['同大家打成一片','倾向于独处'],
		scope:['E','I']
	},
	{
		id:80,
		content:'你喜欢 ?',
		answer:['看清事态如何发展再作计划','事先很早就作好准备'],
		scope:['P','J']
	},
	{
		id:81,
		content:'别人 了解你?',
		answer:['很容易','很难'],
		scope:['E','I']
	},
	{
		id:82,
		content:'通常，你更喜欢上涉及 的课程?',
		answer:['概念和原则','具体内容'],
		scope:['N','S']
	},
	{
		id:83,
		content:'在聚会中，你 ?',
		answer:['自己聊得多','听别人聊得多'],
		scope:['E','I']
	},
	{
		id:84,
		content:'你觉得自己更偏向于是一个 ?',
		answer:['自发性的人','听别人聊得多'],
		scope:['P','J']
	},
	{
		id:85,
		content:'你 ?',
		answer:['只同和自己有共同兴趣的人才能长时间的交谈','只要愿意，就能和几乎任何一个人谈个没完'],
		scope:['I','E']
	},
	{
		id:86,
		content:'当你开始了一项必须在一周内完成的大项目时，你会 ?',
		answer:['花时间列出所要做的事情及其先后次序','直接开始'],
		scope:['J','P']
	},
	{
		id:87,
		content:'被称为 是更高的赞赏?',
		answer:['有竞争力','富有同情心'],
		scope:['T','F']
	},
	{
		id:88,
		content:'你觉得按计划行事 ?',
		answer:['有时必要，便令人不爽','多数时候是有帮助的、适宜的'],
		scope:['P','J']
	},
	{
		id:89,
		content:'你愿在一个 老板(老师)手下工作(学习)?',
		answer:['脾气好，但前后不一致','对人严厉，但有条理'],
		scope:['F','T']
	},
	{
		id:90,
		content:'总的来说，要完成一项重大任务，你倾向于 ?',
		answer:['边做边考虑必须完成的事','开始先确定每一个步骤'],
		scope:['P','J']
	},
	{
		id:91,
		content:'在社交场合中，你通常觉得 ?',
		answer:['某些人很难开展和维持长时间的谈话','很容易同大多数人长时间谈话'],
		scope:['I','E']
	},
	{
		id:92,
		content:'你喜欢的处事方式是 ?',
		answer:['坚持那些已经有效的方法','分析哪些仍有错并挑战未解决的问题'],
		scope:['S','N']
	},
	{
		id:93,
		content:'你更喜欢按照 做大多数事情?',
		answer:['当天的感觉','已定的日程表'],
		scope:['P','J']
	},
]


export default [
	// {
	// 	title:'',
	// 	data:section1
	// },
	{
		title:'在以下各对词中，你更倾向于哪一个。考虑以下这些词的意思，而不是它们好不好听或好不好看。',
		data:section2
	},
	// {
	// 	title:'哪个答案最接近地描述了你通常的思考和行为方式',
	// 	data:section3
	// }
]