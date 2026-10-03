// Airport & Check-in — ground staff and passenger phrases.
// Line format:  Level | English | 中文 | optional note
// Level: E = Easy, M = Medium, H = Hard.  "# Title | 标题" starts a new group.
// Fix a pinyin reading by putting it in brackets after the character: 系[jì]
MT.module({
  id: "airport",
  area: "aviation",
  title: "Airport & Check-in",
  zh: "机场与值机",
  added: "2026-10-02",
  keys: `
The journey in four words | 值机 check in → 安检 security → 登机 board → 转机 transfer. 机 = aircraft.
托运 or 随身 | 托运 tuōyùn = checked into the hold. 随身 suíshēn = "with the body" → carry-on. Power banks and lithium batteries: 随身 only.
口 = an opening | 登机口 gate ("board-aircraft mouth") · 出口 exit · 入口 entrance.
When things go wrong | 延误 delayed · 取消 cancelled · 改签 rebook · 退票 refund.
请 + verb | 请出示 please show · 请稍等 please wait · 请通过 please walk through. 请 makes any instruction polite.
Two sizes of sorry | 不好意思 for small things. 给您带来不便，我们深表歉意 for real disruption.
`,
  phrases: `
# Check-in counter | 值机柜台
E | Good morning. Where are you flying to today? | 早上好，您今天飞哪里？
E | May I see your passport, please? | 请出示您的护照。
E | Thank you. One moment, please. | 谢谢，请稍等。
M | Do you have a booking reference? | 您有预订编号吗？
E | Are you travelling alone? | 您是一个人出行吗？
M | Would you like a window seat or an aisle seat? | 您想要靠窗的座位还是靠过道的座位？
M | I'm sorry, today's flight is full. | 不好意思，今天的航班已经满了。
M | Your seat is 32A, by the window. | 您的座位是32A，靠窗。
E | Here is your boarding pass. | 这是您的登机牌。
M | Boarding starts at 10:15 at Gate C12. | 十点十五分在C12登机口开始登机。
M | Please be at the gate thirty minutes before departure. | 请在起飞前三十分钟到达登机口。
H | Your connecting boarding pass is also printed. | 您的转机登机牌也已经打印好了。
M | Do you have a visa for China? | 您有中国签证吗？
H | You qualify for visa-free transit. | 您符合免签过境的条件。
M | Online check-in closes one hour before departure. | 网上值机在起飞前一小时关闭。
M | You can use the self-service kiosk over there. | 您可以使用那边的自助值机设备。
H | Would you like to join our frequent flyer programme? | 您想加入我们的常旅客计划吗？
M | May I have your membership number? | 请告诉我您的会员号码。
H | You've been upgraded to business class. | 您已经升舱到商务舱了。 | 升舱 = upgrade
M | The business class counter is on the left. | 商务舱柜台在左边。

# Baggage | 行李
E | How many bags are you checking in? | 您要托运几件行李？
E | Please put your bag on the scale. | 请把行李放到秤上。
M | Your bag is three kilos overweight. | 您的行李超重了三公斤。
H | There is an excess baggage fee of 300 yuan. | 需要支付三百元的超重行李费。
M | Could you move some items to your carry-on? | 您可以把一些东西放到随身行李里吗？
M | Are there any power banks in your checked bag? | 您的托运行李里有充电宝吗？
H | Lithium batteries must be carried in the cabin. | 锂电池必须随身携带。
M | Is there anything fragile inside? | 里面有易碎物品吗？
M | Please attach this tag to your bag. | 请把这个标签挂在您的行李上。
H | Your bag is checked through to your final destination. | 您的行李直挂到最终目的地。 | 直挂 = checked through (industry term)
M | You will need to collect your bag in Shanghai. | 您需要在上海提取行李。
E | Is this your hand luggage? | 这是您的手提行李吗？
M | Only one piece of hand luggage is allowed. | 只能带一件手提行李。
H | This bag is too big for the cabin; it must be checked in. | 这个包太大了，不能带上飞机，需要托运。
M | Please check in oversized baggage at counter 5. | 请到五号柜台办理超大行李托运。

# Security & immigration | 安检与出入境
E | Please take out your laptop. | 请把笔记本电脑拿出来。
M | Please put liquids in a separate tray. | 请把液体单独放在一个筐里。
M | Please take off your belt and shoes. | 请解下皮带，脱掉鞋子。
E | Please walk through. | 请通过。
M | Please raise your arms. | 请把双手抬起来。
M | This bottle is over 100 ml. | 这瓶超过一百毫升了。
H | I'm afraid we'll have to confiscate this. | 恐怕这个我们需要没收。
E | Please fill in this arrival card. | 请填写这张入境卡。
M | What is the purpose of your visit? | 您这次来的目的是什么？
E | I'm here on business. | 我是来出差的。
E | I'm here on holiday. | 我是来旅游的。
M | How long will you be staying? | 您打算待[dāi]多久？
M | Where will you be staying? | 您住在哪里？
H | Please look at the camera and place your fingers on the scanner. | 请看摄像头，把手指放在扫描仪上。
M | Do you have anything to declare? | 您有需要申报的物品吗？

# Boarding gate | 登机口
E | Boarding will begin shortly. | 马上就要开始登机了。
M | We now invite business class passengers to board. | 现在请商务舱旅客登机。
M | Passengers with young children may board first. | 带小孩的旅客可以优先登机。
M | Please have your boarding pass and passport ready. | 请准备好您的登机牌和护照。
M | Rows 40 to 55 may now board. | 现在请四十排到五十五排的旅客登机。
H | This is the final boarding call for flight SQ830. | 这是SQ830航班的最后一次登机广播。
M | The gate will close in ten minutes. | 登机口将在十分钟后关闭。
M | The gate has changed to B6. | 登机口已经改到B6了[le]。
E | Is this the right gate for Shanghai? | 这是去上海的登机口吗？
M | Sorry, this is not your gate. | 不好意思，这不是您的登机口。
H | Today we will board by bus. | 今天我们需要乘坐摆渡车登机。 | 摆渡车 = apron shuttle bus
M | Your bag is too large; we'll check it in at the gate. | 您的包太大了，我们在登机口帮您托运。
H | The flight is overbooked; we are looking for volunteers. | 航班超售了，我们正在寻找自愿改签的旅客。 | 超售 = overbooked · 改签 = change flight
H | You will receive compensation and a hotel room. | 您将获得补偿和酒店住宿。
M | Please wait for the announcement. | 请等候广播通知。

# Delays & disruptions | 延误与变动
M | The flight is delayed by two hours. | 航班延误了两个小时。
H | The delay is due to bad weather. | 延误是因为天气原因。
H | The delay is due to air traffic control. | 延误是因为航空管制。
M | The flight has been cancelled. | 航班已经取消了。
M | We will rebook you on the next flight. | 我们会帮您改签到下一班航班。
H | The next flight with seats is tomorrow morning. | 最早有空[kòng]位的航班是明天上午。
M | Here is a meal voucher. | 这是您的餐券。
M | We will arrange a hotel for you tonight. | 今晚我们会为您安排酒店住宿。
H | We apologise for the inconvenience. | 给您带来不便，我们深表歉意。
M | What is the new departure time? | 新的起飞时间是几点？
M | Will I miss my connection? | 我会不会错过转机航班？
H | We will arrange your onward connection for you. | 我们会帮您安排好后续的转机航班。
M | Please keep an eye on the screens for updates. | 请留意屏幕上的最新信息。
H | In that case, can I get a refund? | 那我可以退票吗？
H | The aircraft has a technical problem. | 飞机出现了机械故障。

# Transfers & arrivals | 转机与到达
E | Where is the transfer desk? | 中转柜台在哪里？
M | Follow the signs for international transfers. | 请跟着国际中转的指示牌走。
M | You need to go through security again. | 您需要重新过安检。
M | Your connecting flight leaves from Terminal 2. | 您的转机航班从二号航站楼出发。
M | There is a free shuttle between terminals. | 航站楼之间有免费的摆渡车。
E | Where is baggage claim? | 行李提取处在哪里？
M | My bag hasn't arrived. | 我的行李没有到。
H | I'd like to report a lost bag. | 我想登记一下丢失的行李。
M | Here is my baggage tag. | 这是我的行李牌。
H | We will deliver it to your hotel once it arrives. | 行李到了以后，我们会送到您的酒店。
M | My suitcase is damaged. | 我的箱子被摔坏了。
E | Where can I get a taxi? | 在哪里可以打车？
E | Where is the exit? | 出口在哪里？
M | Is there anywhere selling SIM cards here? | 这里有卖电话卡的地方吗？
M | Where can I change money? | 在哪里可以换钱？
M | Is there a VIP lounge here? | 这里有贵宾休息室吗？
M | My ticket includes lounge access. | 我的机票可以进休息室。
M | How long is the layover? | 中转时间有多长？
H | Do I need to collect my bags and check them in again? | 我需要提取行李再重新托运吗？
E | Welcome to Singapore. | 欢迎来到新加坡。
`
});
