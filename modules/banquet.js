// Business Dining & Social — invitations, the table, toasts, gifts, etiquette.
// Line format:  Level | English | 中文 | optional note
MT.module({
  id: "banquet",
  area: "business",
  title: "Business Dining & Etiquette",
  zh: "商务宴请与礼仪",
  added: "2026-10-02",
  keys: `
Seat of honour | 上座 faces the door and is furthest from it. Wait to be shown where to sit.
Toasting | 干杯 = "dry the cup". Clink with your glass lower than a senior person's.
Not drinking? | 我以茶代酒 — "tea in place of wine". Fully accepted.
The gracious toast | 我干了，您随意 — "I'll finish mine, you drink as you please."
Lucky and unlucky | 鱼 fish sounds like 余 surplus: good. 送钟 (give a clock) sounds like 送终: never.
Gift ritual | Giver says 一点心意 (a small token). Receiver says 您太破费了 (you spent too much).
`,
  phrases: `
# Invitations | 邀请
M | We'd like to take you to dinner tonight. | 今晚我们想请您吃饭。
M | Are you free for lunch tomorrow? | 明天中午您有空[kòng]一起吃饭吗？
H | It would be our honour to host you. | 我们很荣幸能招待您。
M | Thank you, I'd be delighted. | 谢谢，我很乐意。
H | I'm afraid I already have plans. | 不好意思，我已经有别的安排了。
M | What kind of food do you like? | 您喜欢吃什么菜？
M | Is there anything you don't eat? | 您有什么忌口吗？ | 忌口 = foods someone avoids
E | I don't eat spicy food. | 我不吃辣。
E | I'm vegetarian. | 我吃素。
H | I've booked a private room. | 我订了一个包间。 | 包间 = private dining room
M | The restaurant is near your hotel. | 餐厅就在您酒店附近。
M | I'll pick you up at seven. | 我七点去接您。
M | Sorry to keep you waiting. | 不好意思，让您久等了。
H | Please take the seat of honour. | 您请上座。 | The guest of honour sits facing the door
E | After you. | 您先请。

# At the table | 席间
M | Please order whatever you like. | 想吃什么随便点。
H | Let me order a few local specialities. | 我来点几个本地的特色菜。
M | This is a famous Sichuan dish. | 这是一道有名的四川菜。
E | Please try this. | 您尝尝这个。
E | It's delicious! | 真好吃！
M | Is it too spicy for you? | 会不会太辣了？
M | Please, help yourself. | 别客气，自己来。
H | Let me serve you some. | 我给您夹[jiā]一点。 | 夹 = pick up with chopsticks
E | I'm full, thank you. | 我吃饱了，谢谢。
M | Could we have another bowl of rice? | 能再来一碗米饭吗？
M | Could I have a fork? | 可以给我一把叉子吗？
M | How do you say this in Chinese? | 这个用中文怎么说？
H | Fish stands for "abundance every year". | 鱼象征着年年有余。 | 鱼 (fish) sounds like 余 (surplus)
H | Don't turn the fish over. | 鱼不要翻过来。 | Flipping the fish is said to bring bad luck
E | Would you like tea? | 您喝茶吗？
H | When someone pours you tea, tap the table to say thanks. | 别人给你倒[dào]茶时，可以用手指轻敲桌面表示感谢。
M | Let me pour you some tea. | 我给您倒[dào]杯茶。
E | Do you drink alcohol? | 您喝酒吗？
M | I don't drink; I'll have juice. | 我不喝酒，我喝果汁吧。
M | I have to drive later. | 我等一下要开车。
H | This wine is from Bordeaux. | 这款葡萄酒来自波尔多。
M | The food here is really good. | 这里的菜做得[de]很好。
E | How do you eat this? | 这个怎么吃？
M | Have you tried durian? | 您吃过榴莲吗？
M | Singapore's chilli crab is famous. | 新加坡的辣椒螃蟹很有名。

# Toasts | 敬酒
E | Cheers! | 干杯！
M | I'd like to propose a toast. | 我提议大家举杯。
H | To our partnership! | 为我们的合作干杯！
M | To your health! | 祝您身体健康！
M | Welcome to Singapore — cheers! | 欢迎来到新加坡，干杯！
H | I'd like to toast our guests. | 我敬各位来宾一杯。
H | Thank you for your warm hospitality. | 感谢您的热情款待。
H | I'll finish my glass; you drink as you like. | 我干了，您随意。 | Polite toast: you drain yours, the other person needn't
M | Bottoms up! | 一口干了！
M | Just a little for me. | 我少喝一点。
M | I really can't drink any more. | 我真的不能再喝了。
H | Let me toast you with tea instead of wine. | 我以茶代酒敬您。 | Accepted way to toast without drinking
H | When clinking, keep your glass a little lower to show respect. | 碰杯时，杯子要比对方的低一点，表示尊重。
H | Wishing you every success in your career! | 祝您事业有成！
H | May your business prosper! | 祝生意兴隆！
H | Wishing your company continued growth! | 祝贵公司蒸蒸日上！
M | To our friendship! | 为我们的友谊干杯！
E | Happy Chinese New Year! | 春节快乐！
E | Wishing you wealth and prosperity! | 恭喜发财！ | Classic Chinese New Year greeting
M | May everything go as you wish. | 万事如意！

# Gifts & etiquette | 礼物与礼仪
M | This is a small gift from Singapore. | 这是从新加坡带来的一点小礼物。
H | It's just a small token of thanks. | 一点心意，不成敬意。 | Humble phrase when giving a gift
M | You're too kind. | 您太客气了。
H | You really shouldn't have! | 您太破费了！ | Polite reply when receiving a gift
M | Please accept it. | 请您收下。
H | Give and receive gifts with both hands. | 送礼和收礼都要用双手。
H | Don't give a clock as a gift. | 不要送钟。 | 送钟 sounds like 送终 (attending a death)
H | Avoid the number four; it sounds like "death". | 尽量避开数[shù]字四，因为"四"和"死"读音相近。
M | Eight is a lucky number. | 八是个吉利的数[shù]字。
M | Red stands for good luck. | 红色代表吉祥。
H | Hand over business cards with both hands. | 递名片时要用双手。
M | Should I take off my shoes? | 需要脱鞋吗？
E | Is it OK to take a photo? | 可以拍照吗？
M | The host usually pays. | 一般是主人买单。
M | This meal is on me. | 这顿我来请。
H | No, no, it's my treat this time. | 不不不，这次我请客。
E | Next time it's on me. | 下次我请。
M | Should we leave a tip? | 需要给小费吗？
H | Using surname plus job title is polite. | 用姓加职务称呼对方，比较礼貌。 | e.g. 王总, 李经理
M | Just call me Lisa. | 叫我丽莎就行。

# Ending the evening | 结束与道谢
H | Thank you for such a generous evening. | 谢谢您今晚的盛情款待。
M | It's getting late. | 时间不早了。
E | I should get going. | 我该走了。
M | I have an early start tomorrow. | 我明天要早起。
M | Shall I call a car for you? | 要我帮您叫车吗？
M | Get home safely. | 路上注意安全。
E | Thank you for coming. | 谢谢您能来。
M | It was great to see you again. | 很高兴再次见到您。
H | I hope we can meet again soon. | 希望我们很快能再见面。
H | Next time you're in Singapore, do let me know. | 下次您来新加坡，一定要告诉我。
M | Let's go for karaoke! | 我们去唱卡拉OK吧！
M | Let's take a group photo. | 我们来拍张合影吧。
M | I had a really good time today. | 今天玩得[de]很开心。
M | Please send me the photos. | 请把照片发给我。
H | Thank you for looking after me on this trip. | 这次出差，谢谢您的照顾。
H | Have a safe journey home. | 祝您一路顺风。 | 一路顺风 for journeys by land/sea; for flights many say 一路平安
H | Please give my best to your family. | 请代我向您的家人问好。
H | I've learned a lot from you. | 我从您身上学到了很多。
M | Let's keep in touch on WeChat. | 我们微信上保持联系。
E | Good night! | 晚安！
`
});
