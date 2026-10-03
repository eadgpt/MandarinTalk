// Getting Around — directions, taxis, metro & bus, trains, driving.
// Line format:  Level | English | 中文 | optional note
MT.module({
  id: "transport",
  area: "travel",
  title: "Getting Around",
  zh: "出行交通",
  added: "2026-10-02",
  keys: `
Directions | 往左拐 turn left · 往右拐 turn right · 一直走 straight on. 往 = towards.
站 = station or stop | 地铁站 metro · 火车站 railway · 下一站 next stop · 坐几站？ how many stops?
Taxi kit | 请打表 use the meter · 发票 receipt · 尾号 the last four digits of your phone, which Didi drivers ask for.
高铁 seats | 二等座 standard · 一等座 first · 商务座 business, the top class.
改签 and 退票 | 改签 = change a ticket, 退票 = refund. Same words for trains and flights.
Passport is your ticket | Chinese trains are ticketless. You book with your passport and show it at the gate.
`,
  phrases: `
# Asking directions | 问路
E | Excuse me, may I ask… | 请问…… | Polite way to start a question
E | Where is the subway station? | 地铁站在哪里？
M | How do I get to the Bund? | 去外滩怎么走？
M | Is it far from here? | 离这里远吗？
M | Can I walk there? | 可以走路过去吗？
M | It's about ten minutes on foot. | 走路大概十分钟。
E | Go straight ahead. | 一直往前走。
E | Turn left. | 往左拐。
E | Turn right. | 往右拐。
M | Turn left at the traffic lights. | 在红绿灯那里左拐。
M | It's on your right. | 在你的右手边。
M | It's across the road. | 在马路对面。
M | It's next to the bank. | 在银行旁边。
M | Go past the mall and keep walking. | 经过商场以后继续走。
H | Could you show me on the map? | 您能在地图上指给我看吗？
E | I'm lost. | 我迷路了。
M | What is this place called? | 这是什么地方？
E | Is there a toilet nearby? | 附近有洗手间吗？
M | Which way is north? | 哪边是北？
M | Sorry, I'm not from around here either. | 不好意思，我也不是本地人。

# Taxis & ride-hailing | 打车
E | Taxi! | 出租车！
M | Please take me to this address. | 请带我去这个地址。
E | To the airport, please. | 去机场。
M | Is the traffic bad now? | 现在路上堵吗？
M | Please use the meter. | 请打表。 | 打表 = run the meter
M | Roughly how much will it be? | 大概多少钱？
H | Please take the fastest route. | 请走最快的路线。
H | Please don't take the expressway. | 请不要走高速。
M | Please drive a bit slower. | 请开慢一点。
M | Please stop here. | 请在这里停车。
M | Could you wait for me here? | 您能在这里等我一下吗？
M | Please open the boot. | 请打开后备箱。
M | Could I have a receipt? | 可以给我一张发票吗？ | Taxi receipts in China are called 发票
M | Keep the change. | 不用找了。
H | I'll book a car on Didi. | 我用滴滴叫车。 | 滴滴 (Didi) = China's main ride-hailing app
H | What's your licence plate number? | 您的车牌号是多少？
M | I'm waiting at the entrance. | 我在门口等你。
H | The last four digits of my phone number are 4567. | 我的手机尾号是4567。 | Drivers ask this to confirm the booking
M | Are you the car I booked? | 你是我叫的车吗？
M | Please turn on the air conditioning. | 请开一下空调。

# Metro & buses | 地铁与公交
E | Where can I buy a ticket? | 在哪里买票？
M | One ticket to People's Square, please. | 一张去人民广场的票。
M | Which line goes to the airport? | 哪条线去机场？
M | Where do I change lines? | 我在哪里换乘？
H | Change to Line 2 at the next station. | 下一站换乘二号线。
M | How many stops is it? | 坐几站？
M | Is this the right direction? | 这个方向对吗？
M | Which exit should I take? | 我应该从哪个出口出去？
M | Take Exit B. | 从B口出去。
M | When is the last train? | 末班车是几点？
H | Can I tap my bank card to ride the metro? | 可以刷银行卡坐地铁吗？
H | I scan a QR code to go through the gate. | 我扫码进站。
M | Does this bus go to the railway station? | 这辆公交车去火车站吗？
M | Please tell me when we get to my stop. | 到站的时候请告诉我一声。
M | I'm getting off at the next stop. | 我下一站下车。
M | Excuse me, may I get past? | 麻烦让一下。
M | Is this seat taken? | 这里有人坐吗？
H | Please give your seat to those in need. | 请给有需要的乘客让座。
M | The train is very crowded. | 车上很挤。
M | It's rush hour now. | 现在是高峰期。

# Trains | 火车与高铁
M | I'd like a ticket to Hangzhou. | 我要买一张去杭州的票。
H | One high-speed rail ticket, second class. | 一张高铁二等座。 | 二等座 = standard class on high-speed rail
M | Are there business class seats? | 有商务座吗？
M | When does the next train leave? | 下一班车几点开？
H | Which platform does it leave from? | 从几号站台出发？
H | Which ticket gate do I go through? | 在哪个检票口检票？ | Chinese stations board through numbered ticket gates
M | How long is the journey? | 要坐多长时间？
H | Is it a direct train? | 是直达的吗？
M | One-way or return? | 单程还是往返？
H | I'd like to change to an earlier train. | 我想改签到早一点的车。 | 改签 = change a ticket
H | I'd like a refund for this ticket. | 我想退这张票。
M | Please show your ID. | 请出示身份证件。
H | You can use your passport to enter the station. | 您可以刷护照进站。
M | Is there a dining car? | 有餐车吗？
H | Which carriage is this? | 这是几号车厢？
E | This is my seat. | 这是我的座位。
H | Excuse me, could you help me with my suitcase? | 不好意思，能帮我放一下箱子吗？
H | We're nearly at Shanghai Hongqiao. | 我们快到上海虹桥了。
H | Is there a taxi rank at the station? | 车站有出租车上车点吗？
M | The train is running late. | 火车晚点了。 | 晚点 = running late

# Driving & other transport | 开车与其他交通
M | I'd like to rent a car. | 我想租一辆车。
H | Do I need an international driving permit? | 我需要国际驾照吗？
M | Where is the nearest petrol station? | 最近的加油站在哪里？
M | Fill it up, please. | 请加满。
M | Where can I park? | 在哪里可以停车？
M | How much is parking per hour? | 停车一小时多少钱？
H | I'd like to hire a car and driver for the day. | 我想包车一天。 | 包车 = hire a car with driver
M | Can you pick me up from the hotel? | 你能来酒店接我吗？
H | Is the road to the mountains open? | 去山上的路通吗？
H | There's been an accident. | 出车祸了。
M | My car has broken down. | 我的车坏了。
H | Please call a tow truck. | 请叫一辆拖车。
M | Are there shared bikes here? | 这里有共享单车吗？
M | Can I ride a bike here? | 这里可以骑自行车吗？
M | Is it safe to walk around at night? | 晚上走路安全吗？
H | Where do I catch the ferry? | 在哪里坐渡轮？
H | Is there a night bus? | 有夜班车吗？
M | How do I get to the airport from here? | 从这里去机场怎么走？
H | Can you let me off at the corner? | 能让我在路口下车吗？
M | Please drive carefully. | 开车小心。
`
});
