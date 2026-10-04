// Changi Airport & Jewel Tour — a Changi Airport Group host showing external guests and VIPs around
// the airport and Jewel Changi Airport.
// Line format:  Level | English | 中文 | optional note
// The notes are memory hooks: what a name literally means, how a big number is built, or the fact behind the line.
// Figures are rounded and said with 大约 (about). Check them against the latest CAG numbers before a real visit.
// "keys" = the short "Remember these" cards shown as the first tab:  Title | one-line explanation
MT.module({
  id: "changi",
  area: "priority",
  title: "Changi Airport & Jewel Tour",
  zh: "樟宜机场导览",
  added: "2026-10-04",
  art: "jewel",
  keys: `
各位 = "all of you", politely | Speak to a group as 各位 (gèwèi), never 你们. 各位贵宾 = distinguished guests.
Big numbers use 万 and 亿 | 万 = 10,000 · 亿 = 100 million. Count in blocks of four digits: 68 million = 六千八百万. 1.7 billion = 十七亿.
Changi in five numbers | Opened 1981 · 4 terminals · about 68 million passengers (2024) · about 100 airlines · about 170 cities.
Jewel in five numbers | Opened 2019 · S$1.7 billion · 10 floors · 40-metre waterfall · 280+ shops.
Names to know | 星耀樟宜 Jewel · 雨漩涡 Rain Vortex · 森林谷 Forest Valley · 星空花园 Canopy Park · 雨之舞 Kinetic Rain.
航站楼 or 搭客大厦 | Guests from China say 航站楼. Singapore's own signs say 搭客大厦. Same thing: a terminal.
Measure words | 座 buildings · 家 shops and airlines · 棵 trees · 块 glass panels · 层 floors.
Host phrases | 这边请 this way · 请跟我来 follow me · 请小心脚下 mind your step.
Not sure? Say so | 具体数字我不太确定，我确认以后发给您 — "I'm not sure of the exact figure; I'll confirm and send it to you."
`,
  phrases: `
# Welcoming the guests | 迎接来宾
E | Welcome to Changi Airport. | 欢迎来到樟宜机场。 | 樟宜 Zhāngyí = Changi · 机场 = "aircraft field" → airport
M | I'm from Changi Airport Group. | 我是樟宜机场集团的。 | 集团 = group. CAG = 樟宜机场集团.
M | I'll be introducing the airport to you today. | 今天由我来为各位做介绍。 | 由我来… = "it falls to me to…" — the host's way of saying "I'll be doing this"
M | It's an honour to host you all today. | 今天能接待各位，非常荣幸。 | 接待 = receive, host · 各位 = all of you (polite)
M | Today's visit will take about ninety minutes. | 今天的参观大约需要九十分钟。 | 参观 = visit, tour (a place)
M | We'll see the terminals first, then go to Jewel. | 我们先参观航站楼，然后去星耀樟宜。 | 先…然后… = first… then…
M | Here are your visitor passes; please wear them throughout. | 这是各位的访客证，请全程佩戴。 | 访客证 = visitor pass · 全程 = "the whole journey"
H | We need to go through security before entering the airside. | 进入空侧之前需要过安检。 | 空侧 = airside · 陆侧 = landside (industry words)
H | I'm sorry, photos are not allowed in this area. | 不好意思，这个区域不能拍照。 | 区域 = area, zone
M | You're welcome to take photos here. | 这里可以随意拍照。 | 随意 = "as you wish"
E | Please follow me. | 请跟我来。
M | Please mind your step. | 请小心脚下。 | 脚下 = "under the feet"
M | If you have any questions, ask me at any time. | 有任何问题，可以随时问我。 | 随时 = at any time

# Changi at a glance | 樟宜机场概况
M | Changi Airport opened in 1981. | 樟宜机场是1981年启用的。 | 启用 = "start use" → open (for a building or facility)
M | We have four terminals. | 我们有四座航站楼。 | 座 = measure word for buildings. Singapore's own word is 搭客大厦.
H | In 2024 we handled about 68 million passengers. | 2024年，我们接待了大约六千八百万人次旅客。 | 六千八百万 = 6,800 × 万 (10,000) · 人次 = passenger movements
H | About a hundred airlines operate here. | 大约有一百家航空公司在这里运营。 | 家 = measure word for companies
H | We are connected to about 170 cities around the world. | 我们连接全球大约一百七十个城市。 | 连接 = connect · 全球 = "whole globe"
H | A plane takes off or lands about every ninety seconds. | 大约每九十秒就有一架飞机起降。 | 起降 = 起飞 + 降落, take-offs and landings · 架 = measure word for aircraft
H | Changi has been named the world's best airport many times. | 樟宜机场多次被评为[wéi]全球最佳机场。 | 多次 = many times · 被评为 = "be rated as"
M | The airport is about twenty minutes by car from the city centre. | 机场离市中心大约二十分钟车程。 | 车程 = journey by car
M | Changi is the home base of Singapore Airlines. | 樟宜机场是新加坡航空的大本营。 | 新航 = short for 新加坡航空 · 大本营 = "great base camp"
M | Scoot is also based here. | 酷航的基地也在这里。 | 酷航 Kùháng = Scoot · 酷 = "cool"
M | China is one of our biggest markets. | 中国是我们最大的市场之一。 | 之一 = one of
M | We have direct flights to many cities in China. | 我们有直飞中国很多城市的航班。
H | Changi Airport Group manages and operates the airport. | 樟宜机场集团负责机场的管理和运营。 | 管理 = manage · 运营 = operate
H | The group was set up in 2009. | 集团成立于2009年。 | 成立于 = "was established in" (formal)
H | We also handle about two million tonnes of cargo a year. | 我们每年还处理大约两百万吨货物。 | 两百万 = 200 × 万 · 吨 = tonne
M | The airport runs 24 hours a day, all year round. | 机场二十四小时运营，全年无休。 | 全年无休 = "whole year, no rest"
H | Our aim: not just an airport, but a destination in itself. | 我们的目标是，机场不只是机场，更是一个目的地。 | 不只是…更是… = not only… but even more…

# Touring the terminals | 参观航站楼
M | We are now in Terminal 3. | 我们现在在三号航站楼。 | 一号 · 二号 · 三号 · 四号航站楼 = T1 to T4
M | This is the departure hall. | 这里是出发大厅。 | 出发 = depart · 到达 = arrive · 大厅 = hall
H | Passengers can check in and drop their bags by themselves. | 旅客可以自助值机和托运行李。 | 自助 = "self-help" → self-service
H | Departing passengers clear immigration by face and iris scan, with no need to show a passport. | 离境旅客刷脸和虹膜就能通关，不用出示护照。 | 刷脸 = "swipe face" · 虹膜 = iris · 通关 = clear immigration
H | Terminal 4 is automated all the way from check-in to boarding. | 四号航站楼从值机到登机全程自动化。 | 自动化 = automated
M | Terminals 1, 2 and 3 are linked by the Skytrain. | 一号、二号和三号航站楼之间有轻轨列车连接。 | 轻轨 = "light rail" → the Skytrain
M | You can take a free shuttle bus to Terminal 4. | 去四号航站楼可以坐免费接驳巴士。 | 接驳 = connecting. Singapore says 巴士; guests from China may say 大巴.
M | This is the "Kinetic Rain" sculpture in Terminal 1. | 这是一号航站楼的“雨之舞”雕塑。 | 雨之舞 = "dance of the rain" — 1,216 bronze raindrops
M | Terminal 3 has a butterfly garden. | 三号航站楼有一个蝴蝶园。 | 蝴蝶 = butterfly · 园 = garden
M | There is a sunflower garden on the roof of Terminal 2. | 二号航站楼的顶楼有一个向日葵花园。 | 向日葵 = "facing-the-sun flower"
M | Terminal 1 even has a swimming pool. | 一号航站楼甚至有游泳池。 | 甚至 = even
M | Every terminal has its own gardens. | 每座航站楼都有自己的花园。
M | The transit area has many shops and restaurants. | 候机区有很多商店和餐厅。 | 候机区 = "wait-for-aircraft area"
M | Transit passengers can watch films for free. | 中转旅客可以免费看电影。 | 中转 = transit · 免费 = free of charge
H | Passengers with a long layover can join a free city tour. | 中转时间长的旅客可以参加免费的市区游览。 | Free Singapore Tour: for layovers of about five and a half hours or more
M | There is free Wi-Fi throughout the airport. | 整个机场都有免费无线网络。 | 无线 = wireless · 网络 = network
M | This lounge is for first and business class passengers. | 这个贵宾室是为头等舱和商务舱旅客准备的。 | 贵宾室 = "honoured-guest room" → lounge
M | The MRT station is between Terminal 2 and Terminal 3. | 地铁站在二号和三号航站楼之间。 | 在…之间 = between
H | Everything is designed around the passenger. | 所有的设计都以旅客为[wéi]中心。 | 以…为中心 = "take … as the centre"
M | From here it is only a five-minute walk to Jewel. | 从这里步行到星耀樟宜只要五分钟。 | 步行 = on foot

# Jewel Changi Airport | 星耀樟宜
M | This is Jewel Changi Airport. | 这就是星耀樟宜。 | 星耀 Xīngyào = "star shine" — Jewel's official Chinese name
M | Jewel opened in April 2019. | 星耀樟宜是2019年4月开业的。 | 开业 = open for business
H | It was designed by the architect Moshe Safdie. | 它是由建筑师摩西·萨夫迪设计的。 | He also designed Marina Bay Sands (滨海湾金沙)
H | It cost 1.7 billion Singapore dollars to build. | 建造成本是十七亿新元。 | 十七亿 = 17 × 亿 (100 million) · 新元 = Singapore dollar
H | This used to be the open-air car park of Terminal 1. | 这里原来是一号航站楼的露天停车场。 | 原来 = originally · 露天 = "exposed to the sky" → open-air
M | Jewel is connected directly to Terminal 1. | 星耀樟宜和一号航站楼直接相连。 | 相连 = joined to each other
M | From Terminals 2 and 3 you can walk over on the link bridges. | 从二号和三号航站楼可以走连接桥过来。 | 连接桥 = link bridge
M | This is the Rain Vortex. | 这是雨漩涡。 | 雨 = rain · 漩涡 = whirlpool
H | At forty metres, it is the tallest indoor waterfall in the world. | 它高四十米，是全世界最高的室内瀑布。 | 室内 = indoor · 瀑布 pùbù = waterfall
H | The waterfall uses collected rainwater. | 瀑布用的是收集来的雨水。 | 收集 = collect
M | There is a light and music show every evening. | 每天晚上都有灯光音乐秀。 | 秀 xiù = "show" (borrowed from English)
M | The garden around the waterfall is called the Forest Valley. | 瀑布周围的花园叫森林谷。 | Full name 资生堂森林谷, Shiseido Forest Valley
H | More than two thousand trees are planted inside. | 里面种[zhòng]了两千多棵树。 | 棵 = measure word for trees · 种 is zhòng when it means "to plant"
H | The roof is made of more than nine thousand pieces of glass. | 屋顶由九千多块玻璃组成。 | 块 = measure word for pieces · 玻璃 = glass
M | Jewel has ten floors: five above ground and five below. | 星耀樟宜一共十层，地上五层，地下五层。 | 层 = floor · 地上 above ground · 地下 below ground
M | There are more than 280 shops and restaurants here. | 这里有两百八十多家商店和餐厅。 | 家 = measure word for shops
M | Canopy Park is on the top floor. | 顶层是星空花园。 | 星空花园 = "starry-sky garden" → Canopy Park
M | Up there you can walk on the Sky Nets. | 上面可以走天空之网。 | 天空之网 = "net of the sky"
H | The Canopy Bridge has a glass floor, 23 metres above the ground. | 天悬桥有玻璃地板，离地面二十三米。 | 天悬桥 = "sky-hanging bridge"
M | Children love the mazes and the slides. | 小朋友很喜欢迷宫和滑梯。 | 迷宫 = maze · 滑梯 = slide
M | There is also a hotel inside Jewel. | 星耀樟宜里面还有一家酒店。
H | Passengers on some flights can check in early here. | 部分航班的旅客可以在这里提前值机。 | 部分 = some, a portion · 提前 = ahead of time
M | The Skytrain passes right beside the waterfall. | 轻轨列车就从瀑布旁边经过。 | 经过 = pass by
H | Jewel is open to everyone, not only to passengers. | 星耀樟宜对所有人开放，不只是旅客。 | 对…开放 = open to…
M | Many Singaporeans come here at the weekend. | 很多新加坡人周末会来这里。

# Operations and the future | 运营与未来
H | Terminal 5 is now under construction. | 五号航站楼正在建设中。 | 正在…中 = in the middle of… · ground was broken in 2025
H | It is expected to open in the mid-2030s. | 预计在2030年代中期启用。 | 年代 = decade · 中期 = middle period
H | Terminal 5 will be able to handle about fifty million passengers a year. | 五号航站楼每年可以接待大约五千万人次旅客。 | 五千万 = 5,000 × 万
H | By then, Changi's capacity will be much greater. | 到时候，樟宜机场的容量会大大增加。 | 到时候 = when that time comes · 容量 = capacity
H | About fifty thousand people work at the airport. | 大约有五万人在机场工作。 | 五万 = 5 × 万
H | Airlines, ground handlers and government agencies work closely together here. | 航空公司、地勤公司和政府部门在这里密切配合。 | 密切配合 = cooperate closely
H | We work very closely with our airline partners. | 我们和航空公司伙伴合作非常紧密。 | 伙伴 = partner
H | We hope to open more routes to China. | 我们希望开通更多中国航线。 | 开通 = open (a route or service)
H | To us, safety and service are equally important. | 对我们来说，安全和服务同样重要。 | 对…来说 = as far as … is concerned
H | We use data and technology to improve efficiency. | 我们用数据和科技来提高效率。 | 数据 = data · 科技 = technology · 效率 = efficiency
H | We keep reducing energy use and carbon emissions. | 我们在不断减少能源消耗和碳排放。 | 不断 = "without a break" → continuously
H | We are installing solar panels on the terminal roofs. | 我们正在航站楼屋顶安装太阳能板。 | 太阳能 = "sun energy" → solar
H | We would be glad to share our experience with you. | 我们很愿意和各位分享我们的经验。 | 分享 = share · 经验 = experience

# Questions and farewell | 答问与送别
M | Does anyone have any questions? | 各位有什么问题吗？
M | That's a very good question. | 这个问题问得[de]很好。
H | I'm not sure of the exact figure; I'll confirm and send it to you. | 具体数字我不太确定，我确认以后发[fā]给您。 | Better an honest "I'll check" than a wrong number in front of a VIP
H | I'll ask the colleague in charge to answer that. | 这个问题我请负责的同事来回答。 | 负责 = be responsible for
M | Shall we take a group photo here? | 我们在这里合个影吧？ | 合影 = group photo. 合个影 splits the word — very natural in speech.
M | The waterfall makes the best background. | 瀑布是最好的背景。 | 背景 = background
M | Would you like to rest for a moment and have a coffee? | 各位要不要休息一下，喝杯咖啡？ | 要不要… = "want or not want" → would you like to…
M | Here is a small souvenir from Changi Airport. | 这是樟宜机场的一点小纪念品。 | 纪念品 = "remember-thing" → souvenir
M | That is the end of our visit. | 我们的参观就到这里。 | 就到这里 = "just up to here" → that's all
M | Thank you all for coming today. | 感谢各位今天的到来。 | 到来 = arrival (formal)
H | We look forward to working with you more in future. | 期待今后和各位有更多的合作。 | 期待 = look forward to · 今后 = from now on
M | Let me see you to your car. | 我送各位上车。 | 送 = see someone off
M | Have a safe journey, and you are welcome back any time. | 祝各位一路平安，欢迎再来。 | 欢迎再来 = "welcome, come again"
`
});
