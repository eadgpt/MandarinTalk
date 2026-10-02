// Food, Shopping & Help — eating out, shopping & money, health & emergencies.
// Line format:  Level | English | 中文 | optional note
MT.module({
  id: "everyday",
  area: "travel",
  title: "Food, Shopping & Help",
  zh: "餐饮、购物与求助",
  added: "2026-10-02",
  phrases: `
# Eating out | 点餐
E | A table for two, please. | 两位。 | The staff ask 几位？ (how many people?)
M | Do you have an English menu? | 有英文菜单吗？
M | What do you recommend? | 你们有什么推荐的？
H | What's your signature dish? | 你们的招牌菜是什么？
E | I'd like this one. | 我要这个。
M | One more of these, please. | 这个再来一份。
M | Not too spicy, please. | 不要太辣。
M | No coriander, please. | 不要香菜。
M | I'm allergic to peanuts. | 我对花生过敏。
M | Is there meat in this? | 这个有肉吗？
M | How much longer will the food take? | 菜还要多久？
H | We didn't order this. | 我们没点这个。
H | Our food hasn't come yet. | 我们的菜还没上。
M | Could I have a glass of water? | 可以给我一杯水吗？
M | Could we have some napkins? | 能给我们一些纸巾吗？
M | Could I have a pair of chopsticks? | 能给我一双筷子吗？
E | The bill, please. | 买单。 | Also: 结账
M | Can we pay separately? | 我们可以分开付吗？ | Splitting the bill is called AA制
H | Can I take the leftovers away? | 剩下的可以打包吗？ | 打包 = pack to take away
E | Delicious, thank you! | 很好吃，谢谢！
M | One milk tea, less sugar. | 一杯奶茶，少糖。
E | Hot or iced? | 热的还是冰的？
M | Eat here or take away? | 在这里吃还是带走？
E | Take away, please. | 带走。
M | Can I order by scanning the QR code? | 可以扫码点餐吗？
M | Is there a wait for a table? | 现在需要排队吗？
M | Could we sit by the window? | 我们可以坐在窗边吗？
M | Is the service charge included? | 包括服务费吗？
M | Where is the hawker centre? | 小贩中心在哪里？ | Singapore word for food centre
E | One chicken rice, please. | 一份鸡饭。
M | Less oil and less salt, please. | 少油少盐。
M | I'd like it well done. | 我要全熟的。
M | Could I see the wine list? | 可以看一下酒单吗？
H | This is cold. Could you heat it up? | 这个凉了，可以帮我热一下吗？
M | Do you do delivery? | 你们可以送外卖吗？

# Shopping & money | 购物与付款
E | How much is this? | 这个多少钱？
E | That's too expensive. | 太贵了。
M | Can you make it a bit cheaper? | 能便宜一点吗？
E | I'm just looking. | 我只是看看。
M | Do you have this in another colour? | 这个有别的颜色吗？
M | Do you have a bigger size? | 有大一号的吗？
M | Do you have a smaller size? | 有小一号的吗？
M | Can I try it on? | 我可以试穿一下吗？
M | Where is the fitting room? | 试衣间在哪里？
M | It fits well. | 很合身。
M | It doesn't fit. | 不合身。
E | I'll take it. | 我要了。
M | Do you take credit cards? | 你们收信用卡吗？
M | Can I pay with WeChat Pay? | 可以用微信支付吗？
M | Cash only? | 只[zhǐ]收现金吗？
M | Could I have a bag? | 能给我一个袋子吗？
H | Can I get a tax refund? | 可以退税吗？
H | Could you gift-wrap it? | 可以帮我包装一下吗？
M | I'd like to return this. | 我想退货。
M | Can I exchange it for another one? | 可以换一个吗？
E | This is broken. | 这个坏了。
M | Is there a discount? | 有折扣吗？
M | Buy one, get one free. | 买一送一。
M | What time do you close? | 你们几点关门？
M | Where is the nearest ATM? | 最近的取款机在哪里？
H | What's today's exchange rate? | 今天的汇率是多少？
H | I'd like to change 500 Singapore dollars. | 我想换五百新元。 | 新元 = Singapore dollar
H | Is this genuine? | 这是正品吗？
M | Where was this made? | 这是哪里生产的？
H | It's a gift — could you take off the price tag? | 这是送人的，可以把价格标签撕掉吗？
H | Can you ship it overseas? | 可以寄到国外吗？
E | Where is the supermarket? | 超市在哪里？
M | I'm looking for souvenirs. | 我想买一些纪念品。
H | What local specialities are worth buying? | 这里有什么特产值得买？
E | I'll think about it. | 我再考虑一下。

# Health & emergencies | 健康与应急
E | Help! | 救命！
M | Please call the police for me. | 请帮我报警。
M | Please call an ambulance. | 请叫救护车。
H | In China, dial 120 for an ambulance and 110 for the police. | 在中国，急救电话是120，报警电话是110。 | Said yāo-èr-líng and yāo-yāo-líng
E | I don't feel well. | 我不舒服。
M | I need to see a doctor. | 我需要看医生。
M | Where is the nearest hospital? | 最近的医院在哪里？
M | I have a fever. | 我发烧了。
M | I have a stomach ache. | 我肚子疼。
M | I have diarrhoea. | 我拉肚子了。
H | I feel dizzy. | 我头晕。
H | I'm allergic to penicillin. | 我对青霉素过敏。
H | I take medicine for high blood pressure. | 我在吃降血[xuè]压的药。
H | I've cut my hand. | 我的手划[huá]破了。
E | It hurts here. | 这里疼。
H | Do I need a prescription? | 需要处方吗？
M | How many times a day do I take this? | 这个药一天吃几次？
M | Take it after meals. | 饭后服用。
M | I've lost my passport. | 我的护照丢了。
H | My wallet has been stolen. | 我的钱包被偷了。
M | Where is the police station? | 派出所在哪里？ | 派出所 = local police station
H | I need to contact my embassy. | 我需要联系我们国家的大使馆。
H | I need a police report for my insurance claim. | 我需要一份报警证明来办保险理赔。
M | My phone battery is dead. | 我的手机没电了。
M | Could I borrow your phone? | 可以借用一下你的手机吗？
M | Does anyone here speak English? | 这里有人会说英语吗？
M | Please write it down for me. | 请帮我写下来。
E | I don't understand. | 我听不懂。
M | Where is the emergency exit? | 安全出口在哪里？
E | Be careful! | 小心！
`
});
