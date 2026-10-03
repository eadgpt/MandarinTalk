// China Aviation — talking shop with aviation people, plus China's airlines, cities and provinces.
// Line format:  Level | English | 中文 | optional note
// Every fact is a sentence you can actually say. The note is the memory hook:
// airline / airport code, what the name literally means, and what the place is known for.
// "keys" = the short "Remember these" box shown at the top of the module:  Title | one-line explanation
MT.module({
  id: "chinaaviation",
  area: "priority",
  title: "China Aviation: People, Airlines & Cities",
  zh: "中国航空圈",
  added: "2026-10-04",
  art: "clouds",
  keys: `
The Big Three = compass | 国航 CA → Beijing (the nation's capital). 东航 MU → Shanghai (east coast). 南航 CZ → Guangzhou (the south).
Short name = place + 航 | 川航 Sichuan · 厦航 Xiamen · 深航 Shenzhen · 山航 Shandong · 海航 Hainan · 上航 Shanghai.
Logos | 国航 phoenix · 东航 swallow · 南航 red kapok flower · 厦航 egret · 春秋 green "S".
Codes from old spellings | PEK Peking · CAN Canton · CKG Chungking · TAO Tsingtao · NKG Nanking · CGO Chengchow.
Two-airport cities | Beijing: 首都 PEK + 大兴 PKX. Shanghai: 浦东 PVG + 虹桥 SHA. Chengdu: 双流 CTU + 天府 TFU. Always ask which.
Provinces come in pairs | 山东/山西 (mountains) · 河北/河南 (Yellow River) · 湖北/湖南 (lake) · 广东/广西. 东 east · 西 west · 南 south · 北 north.
Shanxi vs Shaanxi | 山西 Shānxī (1st tone, Taiyuan) is not 陕西 Shǎnxī (3rd tone, Xi'an).
Four municipalities | 北京 京 · 上海 沪 · 天津 津 · 重庆 渝 — cities that rank as provinces.
`,
  phrases: `
# Who's who in aviation | 航空圈的人
M | Which airline are you with? | 您是哪家航司的？ | 航司 = insiders' short form of 航空公司
M | Are you flight crew or ground staff? | 您是空勤还是地勤？ | 空勤 = "air duty" · 地勤 = "ground duty"
E | He is a captain. | 他是机长。 | 机 = aircraft · 长 = head → "head of the aircraft"
M | She is a first officer. | 她是副驾驶。 | 副 = deputy · 驾驶 = pilot / drive
M | I'm a cabin crew instructor. | 我是乘务教员。 | 教员 = instructor
H | He is a flight dispatcher. | 他是签派员。 | 签派 = "sign and send" — the person who signs off the flight plan
H | She is an air traffic controller. | 她是一名管制员。 | 管制 = control. 空管 = air traffic control.
M | He is a maintenance engineer. | 他是机务工程师。
M | I work for the airport group. | 我在机场集团工作。 | In China each big airport is run by an 机场集团 (airport group)
H | He is from the civil aviation authority. | 他是民航局的。 | 民航局 = CAAC, the regulator · 民航 = civil aviation
M | Where are you based? | 您的基地在哪里？ | 基地 = base
M | I'm based in Singapore. | 我的基地在新加坡。
M | What type do you fly? | 您飞什么机型？ | 机型 = aircraft type
M | Boeing or Airbus? | 波音还是空客？ | 波音 Bōyīn sounds like "Boeing" · 空客 = "air guest", short for 空中客车 "air bus"
H | Have you flown the C919? | 您飞过C919吗？ | China's own narrow-body, built by 中国商飞 (COMAC) in Shanghai
H | China Eastern flew the first commercial C919 flight in 2023. | 2023年，东航执飞了C919的首次商业航班。 | Shanghai Hongqiao → Beijing Capital, 28 May 2023
M | How many flight hours do you have? | 您飞了多少个小时了？
M | Do you fly domestic or international? | 您飞国内线还是国际线？
M | Aviation is a small world — let's keep in touch. | 航空圈很小，我们常联系。 | 圈 = circle. 航空圈 = "the aviation circle"

# China's airlines | 中国的航空公司
H | China's "Big Three" are Air China, China Eastern and China Southern. | 中国的三大航是国航、东航和南航。 | 三大航 = "three big airlines". 国 nation · 东 east · 南 south.
M | Air China is headquartered in Beijing. | 国航的总部在北京。 | CA · Star Alliance · flag carrier · phoenix logo. 国 = nation → the nation's capital.
M | China Eastern is headquartered in Shanghai. | 东航的总部在上海。 | MU · SkyTeam · swallow logo. Shanghai is on the EAST coast → 东航.
M | China Southern is headquartered in Guangzhou. | 南航的总部在广州。 | CZ · red kapok-flower logo. Guangzhou is in the SOUTH → 南航.
M | Which alliance is Air China in? | 国航属于哪个航空联盟？ | 国航 → 星空联盟 Star · 东航 → 天合联盟 SkyTeam · 南航 → none (left SkyTeam in 2019)
M | Hainan Airlines is headquartered in Haikou. | 海航的总部在海口。 | HU · 海 for Hainan island · second big hub in Beijing
H | Hainan, Capital and Tianjin Airlines are all part of the HNA family. | 海南航空、首都航空和天津航空都是海航系的。 | HU · JD · GS. 海航系 = "the HNA family". 祥鹏 Lucky Air belongs too.
M | XiamenAir's logo is an egret. | 厦[xià]航的标志是一只白鹭。 | MF · SkyTeam · 白鹭 = egret, Xiamen's city bird
M | Sichuan Airlines is based in Chengdu. | 川航的基地在成都。 | 3U · 川 = Sichuan. Flight 3U8633 is the story behind the film 中国机长 "The Captain".
M | Shenzhen Airlines is part of the Air China group. | 深航属于国航集团。 | ZH · Star Alliance · 深 = Shenzhen
M | Shandong Airlines' fleet is all Boeing 737s. | 山航的机队全是波音737。 | SC · based in Jinan · 山 = Shandong
M | Shanghai Airlines is a subsidiary of China Eastern. | 上航是东航的子公司。 | FM · 子公司 = "child company" → subsidiary
M | Spring Airlines is China's biggest low-cost carrier. | 春秋航空是中国最大的低成本航空公司。 | 9C · Shanghai · 春秋 = "spring and autumn" · green livery
M | Juneyao Airlines is also based in Shanghai. | 吉祥航空的基地也在上海。 | HO · 吉祥 = "lucky, auspicious". "Juneyao" comes from its parent group 均瑶.
H | China United is China Eastern's low-cost arm, based at Beijing Daxing. | 中联航是东航旗下的低成本航空公司，基地在北京大兴。 | KN · 旗下 = "under the flag of" → owned by
M | Chengdu Airlines was the first airline to operate the ARJ21. | 成都航空是第一家运营ARJ21的航空公司。 | EU · ARJ21 (now renamed C909) = China's regional jet
M | Lucky Air is based in Kunming. | 祥鹏航空的基地在昆明。 | 8L · Yunnan · 祥 = lucky · 鹏 = the giant bird of legend
M | Loong Air is based in Hangzhou. | 长龙航空的基地在杭州。 | GJ · Zhejiang · 长龙 = "long dragon"
H | Tibet Airlines flies high-altitude routes from Lhasa. | 西藏航空从拉萨飞高原航线。 | TV · 高原 = plateau. Lhasa airport sits at about 3,600 m.
H | China Express is a regional airline. | 华夏航空是一家支线航空公司。 | G5 · 支线 = "branch line" → regional. 干线 = trunk route.
H | SF Airlines is China's largest cargo airline. | 顺丰航空是中国最大的货运航空公司。 | O3 · owned by courier SF Express · cargo hub at Ezhou, Hubei
M | Cathay Pacific is Hong Kong's main airline. | 国泰航空是香港最主要的航空公司。 | CX · oneworld. Don't mix up 国泰 (Cathay) and 国航 (Air China)!

# Cities & their airports | 城市与机场
M | Beijing has two airports: Capital and Daxing. | 北京有两个机场：首都机场和大兴机场。 | PEK + PKX · 北京 = "north capital" · Daxing is the giant "starfish", opened 2019
M | In Shanghai, Pudong is mainly international and Hongqiao mainly domestic. | 上海浦东以国际航班为主，虹桥以国内航班为主。 | PVG + SHA · 浦东 = "east of the Huangpu river" · 虹桥 = "rainbow bridge"
M | Is that Pudong or Hongqiao? | 是浦东还是虹桥？ | Always ask — the two Shanghai airports are about an hour apart
M | Guangzhou's airport is called Baiyun. | 广州的机场叫白云机场。 | CAN (Canton) · 白云 = "white cloud" · capital of Guangdong
M | Shenzhen is right next to Hong Kong. | 深圳就在香港旁边。 | SZX · Bao'an airport · Guangdong · China's tech city
M | Chengdu also has two airports: Shuangliu and Tianfu. | 成都也有两个机场：双流和天府。 | CTU + TFU · capital of Sichuan · pandas and hotpot · Tianfu opened 2021
M | Chongqing is a municipality; it is not part of Sichuan. | 重庆是直辖市，不属于四川。 | CKG (Chungking) · 直辖市 = city run directly by the central government · the "mountain city"
M | Xi'an is the capital of Shaanxi. | 西安是陕西的省会。 | XIY (Xi'an + Xianyang) · 西安 = "western peace" · Terracotta Warriors · 省会 = provincial capital
M | Kunming is known as the "Spring City". | 昆明被称为“春城”。 | KMG · Changshui airport · capital of Yunnan · mild weather all year
M | Hangzhou's West Lake is very famous. | 杭州的西湖很有名。 | HGH · Xiaoshan airport · capital of Zhejiang · home of Alibaba
M | Nanjing is the capital of Jiangsu. | 南京是江苏的省会。 | NKG (Nanking) · 南京 = "south capital", the twin of 北京 "north capital"
M | Xiamen is a coastal city in Fujian. | 厦门是福建的沿海城市。 | XMN · Gaoqi airport · home of XiamenAir · faces Taiwan
M | Qingdao is in Shandong, but the provincial capital is Jinan. | 青岛在山东，但是省会是济南。 | TAO (Tsingtao, like the beer) · 青岛 = "green island"
M | Wuhan is right in the middle of China. | 武汉在中国的正中心。 | WUH · Tianhe airport · capital of Hubei · on the Yangtze
M | Changsha is the capital of Hunan. | 长沙是湖南的省会。 | CSX · Huanghua airport · 长沙 = "long sands" · very spicy food
H | Zhengzhou is an important cargo hub. | 郑州是重要的货运枢纽。 | CGO (Chengchow) · capital of Henan · 枢纽 = hub
H | Urumqi is China's gateway to Central Asia. | 乌鲁木齐是中国通往中亚的门户。 | URC · capital of Xinjiang · about four hours' flying from Beijing
M | Harbin's ice and snow festival is very famous. | 哈尔滨的冰雪节很有名。 | HRB · capital of Heilongjiang · far north-east · long de-icing season
M | Shenyang and Dalian are both in Liaoning. | 沈阳和大连都在辽宁。 | SHE + DLC · Shenyang is the capital, Dalian is the port
M | Sanya is a beach resort on Hainan island. | 三亚是海南岛的海滨度假城市。 | SYX · Phoenix (凤凰) airport · "China's Hawaii"
M | Haikou is the capital of Hainan. | 海口是海南的省会。 | HAK · Meilan airport · 海口 = "sea mouth" · home of Hainan Airlines
M | Tianjin to Beijing takes only half an hour by high-speed rail. | 从天津到北京坐高铁只要半个小时。 | TSN · a municipality · 天津 = "heaven's ford"
M | Guiyang is the capital of Guizhou. | 贵阳是贵州的省会。 | KWE · mountains, Moutai liquor and big-data centres
M | Guilin is in Guangxi and is famous for its scenery. | 桂林在广西，山水很有名。 | KWL · 桂林 = "osmanthus forest" · Guangxi's capital is Nanning (NNG)
H | Lhasa is a high-altitude airport. | 拉萨机场是高原机场。 | LXA · Tibet · about 3,600 m — crews need a special plateau qualification
H | Beijing, Shanghai and Guangzhou are the three big hubs. | 北京、上海、广州是三大枢纽。 | 北上广 = shorthand for the top-tier cities. Add Shenzhen: 北上广深.
H | China has four municipalities: Beijing, Shanghai, Tianjin and Chongqing. | 中国有四个直辖市：北京、上海、天津和重庆。 | One-character names: 京 · 沪 · 津 · 渝

# Provinces: names that explain themselves | 省份
M | Shandong means "east of the mountains". | 山东的意思[si]是“山的东边”。 | 山 = mountain · 东 = east · capital Jinan. Its twin is 山西, "west of the mountains".
M | Shanxi is west of the mountains; its capital is Taiyuan. | 山西在山的西边，省会是太原。 | TYN. Not the same as 陕西 Shaanxi (Xi'an): 山 shān is 1st tone, 陕 shǎn is 3rd.
M | The Terracotta Warriors are in Shaanxi. | 兵马俑在陕西。 | Capital Xi'an. English spells it with a double "a" to tell it apart from Shanxi 山西.
M | Hebei is north of the Yellow River; Henan is south of it. | 河北在黄河以北，河南在黄河以南。 | 河 = river. Hebei → Shijiazhuang · Henan → Zhengzhou
M | Hubei is north of the lake; Hunan is south of it. | 湖北在湖的北边，湖南在湖的南边。 | 湖 = Dongting Lake. Hubei → Wuhan · Hunan → Changsha
M | Guangdong and Guangxi are neighbours in the south. | 广东和广西是南方的邻居。 | 广 + east / west. Guangdong → Guangzhou, Shenzhen · Guangxi → Nanning, Guilin
M | Yunnan means "south of the clouds". | 云南的意思[si]是“云的南边”。 | 云 = cloud · capital Kunming · borders Myanmar, Laos and Vietnam
M | Sichuan means "four rivers". | 四川的意思[si]是“四条河”。 | 四 = four · 川 = river · capital Chengdu · spicy food and pandas
M | Hainan is China's southernmost province. | 海南是中国最南边的省。 | 海南 = "south of the sea" · an island · Haikou and Sanya
M | Heilongjiang is China's northernmost province. | 黑龙江是中国最北边的省。 | 黑龙江 = "Black Dragon River" · capital Harbin
H | The three north-eastern provinces are Heilongjiang, Jilin and Liaoning. | 东北三省是黑龙江、吉林和辽宁。 | North to south: 黑 · 吉 · 辽. Capitals: Harbin · Changchun · Shenyang.
M | Zhejiang is just south of Shanghai. | 浙江就在上海的南边。 | Capital Hangzhou · also Ningbo and Wenzhou
M | Jiangsu is just north of Shanghai. | 江苏就在上海的北边。 | Capital Nanjing · also Suzhou and Wuxi. 苏 comes from Suzhou.
M | Fujian is just across the water from Taiwan. | 福建的对面就是台湾。 | Capital Fuzhou · also Xiamen · 福 = good fortune
M | Xinjiang is the largest region in China. | 新疆是中国面积最大的地区。 | 新疆 = "new frontier" · capital Urumqi · one-sixth of China's land
H | Tibet is known as the "roof of the world". | 西藏被称为“世界屋脊”。 | 西藏 Xīzàng · capital Lhasa · 屋脊 = roof ridge
H | Inner Mongolia stretches right across northern China. | 内蒙古横跨中国北部。 | Capital Hohhot · grasslands · 横跨 = stretch across
M | Guizhou is full of mountains. | 贵州的山特别多。 | Capital Guiyang · 贵 = precious · home of Moutai (茅台)
M | Anhui's Yellow Mountain is very famous. | 安徽的黄山很有名。 | Capital Hefei (HFE) · inland from Shanghai
H | China has five autonomous regions. | 中国有五个自治区。 | Xinjiang · Tibet · Inner Mongolia · Guangxi · Ningxia

# Talking routes | 聊航线
M | Which cities in China do you fly to? | 你们飞中国的哪些城市？
M | We have a direct flight to Chengdu every day. | 我们每天都有直飞成都的航班。
M | Is there a direct flight, or do I change in Guangzhou? | 有直飞的吗，还是要在广州转机？
H | Our airline has just launched a Hangzhou route. | 我们公司刚开通了杭州航线。
H | Most second-tier cities have international flights now. | 大部分二线城市现在都有国际航班了。 | 一线 = tier one (北上广深) · 二线 = tier two (Chengdu, Hangzhou, Xi'an…)
M | How long is the flight from Beijing to Urumqi? | 从北京飞乌鲁木齐要多长时间？
H | Beijing–Shanghai is one of the busiest routes in the world. | 京沪航线是世界上最繁忙的航线之一。 | 京 = Beijing · 沪 = Shanghai → 京沪
H | On short routes, high-speed rail competes hard with the airlines. | 在短途航线上，高铁和航空公司竞争很激烈。 | 高铁 = "high (speed) iron" → high-speed rail
M | Which province is that city in? | 那个城市在哪个省？
M | I've been to Sichuan, but never to Yunnan. | 我去过四川，但是没去过云南。
M | Which Chinese city do you like best? | 您最喜欢中国的哪个城市？
M | Next time I'm in Shanghai, I'll come and see you. | 下次到上海，我去找您。
`
});
