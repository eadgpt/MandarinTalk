// Aviation Industry & Operations — airline business, ops, crew life, ground handling, safety.
// Line format:  Level | English | 中文 | optional note
MT.module({
  id: "industry",
  area: "aviation",
  title: "Aviation Industry",
  zh: "航空业务",
  added: "2026-10-02",
  phrases: `
# Airline business | 航空公司业务
M | Which airline do you work for? | 您在哪家航空公司工作？
M | I work in the commercial department. | 我在商务部门工作。
M | We fly to forty destinations in Asia. | 我们在亚洲有四十个航点。 | 航点 = destination on a network
H | We are launching a new route to Chengdu. | 我们要开通飞往成都的新航线。
H | The route will operate four times a week. | 这条航线每周执飞四班。 | 执飞 = to operate a flight
H | What is the load factor on this route? | 这条航线的客座率是多少？ | 客座率 = load factor
H | The load factor is above eighty-five percent. | 客座率超过了百分之八十五。
H | We have a codeshare agreement with them. | 我们和他们有代码共享协议。
H | We are members of the same alliance. | 我们是同一个航空联盟的成员。
M | Fares are higher in peak season. | 旺季的票价比较高。
M | Demand for business travel is recovering. | 商务出行的需求正在恢复。
H | The yield on this route is quite low. | 这条航线的收益水平比较低。 | yield = 收益水平
H | We need more slots at Beijing Daxing. | 我们需要更多北京大兴机场的时刻。 | 时刻 = airport slot
M | We use the A350 on this route. | 这条航线用的是A350机型。
H | We plan to expand our widebody fleet. | 我们计划扩大宽体机机队。
M | How many aircraft do you have? | 你们有多少架飞机？
H | Fuel is a large share of our costs. | 燃油成本在我们的开支中占很大比例。
M | Low-cost airlines are growing fast in this region. | 低成本航空公司在这个地区发展很快。
H | Most of our passengers book through our app. | 我们大部分旅客通过手机应用订票。
H | Cargo has become an important source of revenue. | 货运已经成为重要的收入来源。

# Operations & punctuality | 运行与准点
M | What is our on-time performance this month? | 这个月的准点率是多少？
H | Our on-time rate improved to ninety percent. | 我们的准点率提高到了百分之九十。
H | The inbound aircraft is late from Bangkok. | 前序航班从曼谷晚到了。 | 前序航班 = inbound flight
H | We are waiting for the crew to arrive. | 我们在等机组到位。
H | Bad weather at the destination is holding us on the ground. | 目的地天气不好，暂时不能起飞。
H | Air traffic control has given us a new slot. | 空管给了我们新的起飞时刻。 | 空管 = ATC
H | We need to divert to Xiamen. | 我们需要备降厦门。 | 备降 = divert
H | The flight returned to the stand because of a technical problem. | 因为机械故障，航班滑回了停机位。
H | Turnaround time at this airport is forty-five minutes. | 这个机场的过站时间是四十五分钟。 | 过站时间 = turnaround time
M | Refuelling is complete. | 加油已经完成了。
M | Is the aircraft ready for boarding? | 飞机可以登机了吗？
M | We are still loading cargo. | 我们还在装货。
H | The load sheet is ready. | 载重平衡表已经准备好了。 | 载重平衡表 = weight & balance / load sheet
M | Please close the cargo doors. | 请关闭货舱门。
H | We have push-back clearance. | 我们已经拿到推出许可了。
H | The runway is closed for maintenance. | 跑道因维修关闭了。
H | We are holding over the airport because of traffic. | 由于流量控制，我们正在机场上空盘旋等待。 | 流量控制 = ATC flow control
M | The captain has switched on the seat belt sign. | 机长已经打开了安全带指示灯。
H | We need to de-ice the aircraft before departure. | 起飞前需要给飞机除冰。
H | Let's review what caused the delay. | 我们来复盘一下延误的原因。 | 复盘 = post-event review

# Crew life & rosters | 机组生活与排班
M | I'm a flight attendant. | 我是空乘。 | 空乘 = flight attendant
M | How many years have you been flying? | 你飞了几年了？
M | I've been flying for eight years. | 我飞了八年了。
M | What's your roster like this month? | 你这个月的排班怎么样？
H | I have a three-day layover in London. | 我在伦敦外站休息三天。 | 外站 = outstation
H | I'm on standby tomorrow. | 我明天备份。 | Crew slang: 备份 = standby
M | I'm flying a red-eye tonight. | 我今晚飞红眼航班。
M | I'm still jet-lagged. | 我还在倒时差。
M | When is your next day off? | 你下次休息是什么时候？
M | Can we swap flights? | 我们可以换班吗？
H | The briefing is at 7 a.m. | 航前准备会是早上七点。
H | Who is the purser on this flight? | 这班的乘务长[zhǎng]是谁？ | 乘务长 = purser / cabin manager
H | The captain will brief us shortly. | 机长马上给我们做简报。
H | We need to complete our recurrent training. | 我们需要完成复训。 | 复训 = recurrent training
M | My uniform needs ironing. | 我的制服需要熨一下。
E | Let's have dinner at the hotel. | 我们在酒店吃晚饭吧。
H | Long-haul flights are tiring but interesting. | 长途航线虽然累，但是很有意思。
H | My duty time today is twelve hours. | 我今天的执勤时间是十二个小时。
M | I'm flying to Tokyo and back today. | 我今天飞东京来回。
E | Have a safe flight! | 一路平安！

# Ground handling & airport | 地面服务与机场
M | I work in ground handling. | 我在地面服务部门工作。 | Also: 我是地勤
H | Which ground handling agent do you use here? | 你们在这里用的是哪家地面代理？ | 地面代理 = ground handling agent
H | The aircraft is parked at a remote stand. | 飞机停在远机位。 | 远机位 = remote stand
H | Please send a bus to stand 215. | 请派一辆摆渡车到215号机位。
H | The jet bridge isn't working. | 廊桥出了故障。 | 廊桥 = jet bridge / aerobridge
M | We need a wheelchair at Gate D4. | D4登机口需要一辆轮椅。
H | Catering hasn't arrived yet. | 配餐还没有送到。
M | The cleaners are still on board. | 清洁人员还在飞机上。
H | We are unloading the bags now. | 我们正在把行李卸下来。
H | A passenger didn't board; we need to offload his bag. | 有一位旅客没有登机，我们需要把他的行李卸下来。
M | The new terminal opens next year. | 新航站楼明年启用。
H | Passenger numbers at Changi are above pre-pandemic levels. | 樟宜机场的客流量已经超过了疫情前的水平。
M | The airport is building a third runway. | 机场正在建第三条跑道。
H | Self-service bag drop has cut queuing times. | 自助行李托运缩短了排队时间。
H | Ramp safety is our top priority. | 机坪安全是我们的首要任务。 | 机坪 = ramp / apron
H | Who is the station manager here? | 这里的场站经理是谁？
H | Please send me the passenger manifest. | 请把旅客舱单发给我。 | 舱单 = manifest
M | How many passengers are on board? | 机上有多少名旅客？
H | Everyone is on board; we can close the door. | 旅客已经全部登机，可以关舱门了。
H | We must find this passenger before we can leave. | 我们必须找到这位旅客才能起飞。

# Safety, maintenance & rules | 安全、维修与法规
M | Safety always comes first. | 安全永远第一。
H | The aircraft is in for a scheduled check. | 飞机正在做定期检修。
H | We found a problem during the walk-around check. | 绕机检查时我们发现了一个问题。 | 绕机检查 = walk-around
H | Engineering needs another hour to fix it. | 机务还需要一个小时才能修好。 | 机务 = maintenance / engineering
H | We are waiting for a spare part. | 我们在等备件。
H | The aircraft has been grounded. | 这架飞机已经停飞了。
M | We need to change the aircraft. | 我们需要换飞机。
H | Please file an incident report. | 请提交一份事件报告。
H | There was a bird strike on landing. | 着[zhuó]陆时发生了鸟击。 | 鸟击 = bird strike
H | The captain declared a medical emergency. | 机长宣布了医疗紧急情况。
H | Crew must have at least ten hours of rest. | 机组必须休息满十个小时。
H | The regulator has issued new rules. | 监管机构出台了新规定。 | China's regulator: 民航局 (CAAC)
H | We passed the safety audit. | 我们通过了安全审计。
H | All crew must complete fatigue training. | 所有机组人员都必须完成疲劳管理培训。
H | Please report any unruly passengers to the captain. | 如有扰乱秩序的旅客，请报告机长。
H | Sustainable aviation fuel is still expensive. | 可持续航空燃料目前还很贵。
H | We are cutting carbon emissions by twenty percent. | 我们正在把碳排放减少百分之二十。
M | New aircraft use less fuel. | 新飞机更省油。
H | The fleet's average age is six years. | 机队的平均机龄是六年。
M | Do you have any safety concerns? | 您有什么安全方面的顾虑吗？
`
});
