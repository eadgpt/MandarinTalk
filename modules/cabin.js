// In-flight Cabin Service — crew-to-passenger and passenger requests.
// Line format:  Level | English | 中文 | optional note
MT.module({
  id: "cabin",
  area: "aviation",
  title: "In-flight Service",
  zh: "客舱服务",
  added: "2026-10-02",
  keys: `
系 is jì here | 系好安全带 — fasten your seat belt. 系 is normally xì, but jì when it means "to tie".
A or B? Use 还是 | 茶还是咖啡？ tea or coffee? 热水还是凉水？ hot or cold water?
Short offers | 要…吗？ = "would you like…?" 要加冰吗？ 要加糖和奶吗？
请把… for instructions | 请把 + thing + action: 请把手机调到飞行模式 — "please take the phone and switch it to flight mode".
Four safety checks | 系好安全带 belt · 调直靠背 seat upright · 收起小桌板 tray stowed · 打开遮光板 shade open.
我来 + verb | The natural way to offer help: 我来帮您放行李 — "let me help with your bag".
`,
  phrases: `
# Welcome & seating | 欢迎与就座
E | Welcome aboard. | 欢迎登机。
E | May I see your boarding pass? | 请出示一下您的登机牌。
M | Your seat is on the left, by the window. | 您的座位在左边靠窗。
M | Please go down this aisle. | 请沿着这条过道往里走。
M | Let me help you with your bag. | 我来帮您放行李。
M | Please put your bag in the overhead bin. | 请把包放进头顶的行李架。
M | Please put small items under the seat in front of you. | 小件物品请放在前排座椅下面。
H | The bin above you is full; I'll find another space. | 您上方的行李架满了，我帮您找别的位置。
M | Excuse me, I think you're in my seat. | 不好意思，您好像坐了我的座位。
M | Could we swap seats? | 我们可以换一下座位吗？
H | Would you mind swapping seats so this family can sit together? | 您介意换个座位，让这一家人坐在一起吗？
M | Please take your seat; we are about to close the door. | 请您入座，我们马上就要关舱门了。
M | Today's flight time is six hours and ten minutes. | 今天的飞行时间是六小时十分钟。
M | Is this your first time flying with us? | 这是您第一次乘坐我们的航班吗？
E | Good evening, sir. Good evening, madam. | 先生晚上好，女士晚上好。

# Safety | 安全
E | Please fasten your seat belt. | 请系[jì]好安全带。
M | Please put your seat back upright. | 请把座椅靠背调直。
M | Please open the window shade. | 请打开遮光板。
M | Please stow your tray table. | 请收起小桌板。
M | Please switch your phone to flight mode. | 请把手机调到飞行模式。
H | You are seated in an emergency exit row. | 您坐在紧急出口这一排。
H | Are you willing and able to help in an emergency? | 遇到紧急情况，您愿意并且能够协助我们吗？
M | Bags cannot be placed in the exit row. | 紧急出口这一排不能放行李。
M | The seat belt sign is on. | 安全带指示灯亮了。
H | We are expecting some turbulence. | 我们即将遇到气流颠簸。
E | Please return to your seat. | 请回到座位上。
M | The toilets cannot be used right now. | 现在洗手间暂停使用。
H | Smoking is prohibited, including in the toilets. | 机上全程禁止吸烟，包括洗手间。
M | Your life jacket is under your seat. | 您的救生衣在座位下面。
H | Oxygen masks will drop down automatically. | 氧气面罩会自动脱落。

# Meals & drinks | 餐饮
E | Would you like something to drink? | 您想喝点什么？
E | Would you like tea or coffee? | 您要茶还是咖啡？
E | Water, please. | 请给我一杯水。
M | Hot water or cold water? | 您要热水还是凉水？
E | With ice? | 要加冰吗？
M | We have chicken with rice or fish with noodles. | 我们有鸡肉饭和鱼肉面。
M | Sorry, we have run out of the chicken. | 不好意思，鸡肉饭已经没有了。
M | Would the beef be all right instead? | 给您换成牛肉可以吗？
H | Did you pre-order a special meal? | 您有预订特殊餐食吗？
M | This is your vegetarian meal. | 这是您的素食餐。
M | Do you have any food allergies? | 您对什么食物过敏吗？
M | Does this contain nuts? | 这个含坚果吗？
M | Would you like some more bread? | 您还要面包吗？
E | Are you finished? | 您用完了吗？
M | May I take your tray? | 我可以收走您的餐盘吗？
E | Sugar and milk? | 要加糖和奶吗？
M | We have red wine and white wine. | 我们有红葡萄酒和白葡萄酒。
M | Duty-free sales will begin shortly. | 免税品销售马上开始。
M | We accept cards and Singapore dollars. | 我们接受刷卡和新加坡元。
M | Breakfast will be served one hour before landing. | 落地前一小时供应早餐。

# Comfort & requests | 舒适与需求
E | Could I have a blanket, please? | 可以给我一条毯子吗？
E | Could I have a pillow? | 可以给我一个枕头吗？
M | It's a little cold. Can you turn up the temperature? | 有点冷，可以把温度调高一点吗？
M | There's no sound from my headphones. | 我的耳机没有声音。
M | How do I turn on the screen? | 屏幕怎么打开？
M | The reading light is above you. | 阅读灯在您的头顶上方。
M | Press this button to call the cabin crew. | 按这个按钮可以呼叫乘务员。
E | Where is the toilet? | 洗手间在哪里？
M | The toilets are at the back of the cabin. | 洗手间在客舱后部。
M | The toilet is occupied. | 洗手间有人。
M | Is there Wi-Fi on board? | 飞机上有无线网络吗？
H | Wi-Fi is free for the first thirty minutes. | 前三十分钟可以免费使用无线网络。
M | Can I recline my seat? | 我可以把座椅放倒吗？
H | During the meal, could you please put your seat upright? | 用餐期间，麻烦您先把椅背调直。
M | Could you wake me up for breakfast? | 早餐的时候可以叫醒我吗？
M | Please don't wake me for meals. | 用餐的时候请不要叫醒我。
H | The passenger behind me keeps kicking my seat. | 后面的乘客一直在踢我的座椅。
M | Can I move to an empty seat? | 我可以换到空[kòng]位上吗？
M | Could I have an arrival card? | 可以给我一张入境卡吗？
M | Could you help me fill in this form? | 你可以帮我填这张表吗？

# Passenger care & medical | 旅客关怀与医疗
M | Are you feeling all right? | 您感觉还好吗？
M | I don't feel well. | 我觉得不舒服。
M | Here is a sick bag. | 这是清洁袋。 | 清洁袋 = airline word for sick bag
M | I have a headache. Do you have any medicine? | 我头疼，有药吗？
H | We can't give medication, but I can bring you some water. | 我们不能提供药物，但我可以给您拿杯水。
H | Is there a doctor or nurse on board? | 机上有医生或护士吗？
H | Please stay calm; help is coming. | 请保持冷静，我们马上来帮您。
M | Are you travelling with anyone? | 您有同行的人吗？
M | Do you need a wheelchair on arrival? | 落地后您需要轮椅吗？
H | This is an unaccompanied minor. | 这是一位无成人陪伴的儿童。 | Airline term for a child flying alone
M | Would you like a baby bassinet? | 您需要婴儿摇篮吗？
M | Could you warm up this milk for my baby? | 可以帮我热一下宝宝的奶吗？
H | While seated, please keep your seat belt fastened. | 就座时请系[jì]好安全带。
M | Let me know if you need anything. | 有什么需要请随时告诉我。
M | I'm a little afraid of flying. | 我有点怕坐飞机。

# Landing & farewell | 降落与告别
M | We will be landing in thirty minutes. | 我们将在三十分钟后降落。
H | Please stay seated until the aircraft has stopped completely. | 飞机完全停稳之前，请不要离开座位。
M | The local time is 3:20 in the afternoon. | 当地时间是下午三点二十分。
M | The temperature outside is 28 degrees. | 外面的温度是二十八度。
M | Please take all your belongings with you. | 请带好您的随身物品。
M | Please be careful when opening the overhead bins. | 打开行李架时请小心。
H | Passengers with connecting flights, please see the ground staff. | 需要转机的旅客，请联系地面工作人员。
M | We have arrived early. | 我们提前到达了。
M | Can I use my phone now? | 现在可以用手机了吗？
E | Thank you for flying with us. | 感谢您乘坐我们的航班。
E | Have a nice day. | 祝您今天愉快。
M | Goodbye. We look forward to serving you again. | 再见，期待再次为您服务。
H | Please wait for the bus to take you to the terminal. | 请等候摆渡车送您去航站楼。
H | We are waiting for a parking stand. | 我们正在等待停机位。 | 停机位 = aircraft parking stand
M | I left something on the plane. | 我把东西落[là]在飞机上了。 | 落 here is là (to leave behind)
`
});
