// Hotel & Accommodation — booking, check-in, room problems, services, check-out.
// Line format:  Level | English | 中文 | optional note
MT.module({
  id: "hotel",
  area: "travel",
  title: "Hotel",
  zh: "酒店住宿",
  added: "2026-10-02",
  keys: `
Room types | 单人间 single · 双人间 twin · 大床房 one big bed · 套房 suite. 间 and 房 both mean room.
In and out | 入住 check in · 退房 check out ("return the room") · 续住 stay longer.
Money words | 押金 deposit · 发票 official invoice · 报销 claim expenses.
Ask for the 发票 | For company claims you need a 发票 with the company name as the 抬头. Ask at check-out.
Room numbers | Read digit by digit, and 1 is yāo: 1208 = yāo èr líng bā.
请勿 = please do not | The formal wording on signs: 请勿打扰 do not disturb · 请勿吸烟 no smoking.
`,
  phrases: `
# Booking | 预订
M | I'd like to book a room. | 我想订一个房间。
M | Do you have any rooms free tonight? | 今晚还有空[kòng]房吗？
M | How many nights? | 您住几晚？
E | Three nights, please. | 住三晚。
M | A single room or a twin room? | 单人间还是双人间？
H | I'd like a king room, non-smoking. | 我要一个大床房，无烟的。 | 大床房 = room with one big bed
M | Does the rate include breakfast? | 房价含早餐吗？
E | How much is it per night? | 一晚多少钱？
M | Is there a cheaper room? | 有便宜一点的房间吗？
H | Do you have a corporate rate? | 你们有公司协议价吗？ | 协议价 = negotiated corporate rate
H | I'd like a room on a high floor. | 我想要高楼层的房间。
H | Can I cancel for free? | 可以免费取消吗？
M | I booked online. | 我是在网上订的。
M | Can I pay when I arrive? | 我可以到了再付款吗？
M | I'd like to stay one more night. | 我想多住一晚。 | Also: 续住一晚

# Check-in | 入住
E | I'd like to check in. | 我要办理入住。
M | I have a booking under the name Chen. | 我订了房，姓陈。
E | Here is my passport. | 这是我的护照。
H | We need a 500-yuan deposit. | 需要交五百元押金。 | 押金 = deposit
H | The deposit will be returned when you check out. | 押金会在退房时退还[huán]给您。
M | Your room is on the 12th floor. | 您的房间在十二楼。
M | Here is your key card. | 这是您的房卡。
M | Breakfast is from 6:30 to 10:00. | 早餐时间是六点半到十点。
E | Where is the restaurant? | 餐厅在哪里？
E | The lifts are on the right. | 电梯在右边。
M | Check-out is at noon. | 退房时间是中午十二点。
M | Can I check in early? | 我可以提前入住吗？
M | Your room isn't ready yet. | 您的房间还没有准备好。
H | We can keep your luggage until your room is ready. | 房间准备好之前，我们可以帮您寄存行李。 | 寄存 = to leave for safekeeping
M | Is the Wi-Fi free? | 无线网是免费的吗？
M | Could someone help me with my bags? | 可以找人帮我拿一下行李吗？
M | Is there a gym or a swimming pool? | 有健身房或者游泳池吗？
H | Could I have a room away from the lift? | 能给我一间离电梯远一点的房间吗？
M | Could I have two key cards? | 可以给我两张房卡吗？
M | Is there a convenience store nearby? | 附近有便利店吗？

# Room problems & requests | 客房问题与需求
M | The air conditioning isn't working. | 空调坏了。
E | The room is too cold. | 房间太冷了。
E | There's no hot water. | 没有热水。
M | The toilet is blocked. | 马桶堵了。
M | The TV won't turn on. | 电视打不开。
M | My key card won't open the door. | 我的房卡打不开门。
M | I've locked my key card in the room. | 我把房卡锁在房间里了。
M | The room next door is very noisy. | 隔壁房间太吵了。
M | Could I change rooms? | 可以换个房间吗？
M | The room smells of smoke. | 房间里有烟味。
M | Could I have a few more towels? | 可以再给我几条毛巾吗？
M | Could I have another pillow? | 可以再给我一个枕头吗？
E | I need toothpaste and a toothbrush. | 我需要牙膏和牙刷。
M | Could you send someone to clean the room? | 可以派人来打扫一下房间吗？
M | Do not disturb. | 请勿打扰。 | The sign on the door
M | Is there a hairdryer? | 有吹风机吗？
M | Do you have a plug adapter? | 你们有转换插头吗？
M | The safe won't open. | 保险箱打不开。
M | Could I check out a little later? | 可以晚一点退房吗？ | Also: 延迟退房 = late check-out
M | The bathroom light is broken. | 浴室的灯坏了。
M | There are mosquitoes in my room. | 我房间里有蚊子。
H | Could you bring me an iron? | 可以拿一个熨斗过来吗？
M | The water pressure is too low. | 水压太低了。
H | Please send someone to fix it. | 请派人来修一下。
E | How long will it take? | 需要多长时间？

# Hotel services | 酒店服务
M | Please give me a wake-up call at 6 a.m. tomorrow. | 请明天早上六点叫醒我。
M | Could you call a taxi for me? | 可以帮我叫一辆出租车吗？
M | Do you have a laundry service? | 有洗衣服务吗？
H | When will my laundry be ready? | 我的衣服什么时候能洗好？
H | I'd like to order room service. | 我想叫客房送餐服务。
H | Could you recommend a good restaurant nearby? | 您能推荐一家附近好吃的餐厅吗？
H | Can I leave my luggage here after check-out? | 退房以后可以把行李寄存在这里吗？
M | Is there an airport shuttle bus? | 有机场班车吗？
M | What time does the shuttle leave? | 班车几点出发？
H | Could you book a table for me? | 可以帮我订个位子吗？
M | Is there a business centre? | 有商务中心吗？
M | I'd like to print my boarding pass. | 我想打印一下登机牌。
M | Can I change money here? | 这里可以换钱吗？
M | Is there a pharmacy nearby? | 附近有药店吗？
H | Has anyone left a message for me? | 有人给我留言吗？
H | I'm expecting a delivery. | 我在等一个快递。
M | Could you call a doctor for me? | 可以帮我叫医生吗？
H | Could you write the address in Chinese for me? | 可以用中文帮我写一下地址吗？
M | How far is it to the city centre? | 到市中心有多远？
H | Thank you, you've been a great help. | 谢谢，您帮了我很大的忙。

# Check-out | 退房
E | I'd like to check out. | 我要退房。
M | Room 1208. | 1208房间。 | In room numbers, 1 is said yāo
H | Did you have any drinks or snacks from the room? | 您有没有用过房间里的饮料和零食？
M | Here is your bill. | 这是您的账单。
H | What is this charge for? | 这笔费用是什么？
H | I think there's a mistake on the bill. | 账单好像有错。
E | Can I pay by card? | 可以刷卡吗？
M | Can I use Alipay? | 可以用支付宝吗？
M | Could I have a receipt, please? | 可以给我一张收据吗？
H | I need an official invoice to claim from my company. | 我需要开发票，给公司报销用。 | 发票 = official tax invoice · 报销 = claim expenses
H | Please put the company name on the invoice. | 发票抬头请写公司名称。 | 抬头 = name the invoice is made out to
H | Here is our company's tax number. | 这是我们公司的税号。
E | I'm here to collect my luggage. | 我来取行李。
M | How long does it take to get to the airport? | 去机场要多长时间？
H | I left my charger in the room. | 我把充电器落[là]在房间里了。
M | I really enjoyed my stay. | 这次住得[de]很愉快。
M | I'll come back again. | 我下次还会再来。
H | Please refund the deposit to my card. | 押金请退回到我的卡上。
H | Were you happy with your stay? | 您对这次入住还满意吗？
M | Everything was great, thank you. | 一切都很好，谢谢。
`
});
