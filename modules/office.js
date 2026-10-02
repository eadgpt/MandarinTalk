// Phone, Email & Scheduling — calls, arranging times, written messages, office life.
// Line format:  Level | English | 中文 | optional note
MT.module({
  id: "office",
  area: "business",
  title: "Phone, Email & Scheduling",
  zh: "电话、邮件与日程",
  added: "2026-10-02",
  phrases: `
# Phone calls | 打电话
E | Hello? | 喂[wéi]？ | Phone hello is said wéi
M | Hello, this is Lisa, calling from Singapore. | 您好，我是丽莎，从新加坡打来的。
M | May I speak to Mr Zhang? | 请问张先生在吗？
M | May I ask who's calling? | 请问您是哪位？
E | Please hold on a moment. | 请稍等一下。
M | I'll put you through. | 我帮您转接。
M | He's in a meeting right now. | 他现在正在开会。
M | Would you like to leave a message? | 您要留言吗？
M | Could you ask him to call me back? | 能请他给我回个电话吗？
M | My number is 9123 4567. | 我的电话号码是9123 4567。 | In phone numbers, 1 is said yāo
M | Sorry, the signal isn't very good. | 不好意思，信号不太好。
M | I can't hear you clearly. | 我听不清楚。
M | Could you speak up a little? | 您能大声一点吗？
M | Sorry, I dialled the wrong number. | 不好意思，我打错了。
H | I'm calling about tomorrow's meeting. | 我打电话是想说一下明天开会的事。
M | You called me earlier? | 您刚才给我打电话了？
M | Is now a good time to talk? | 您现在方便说话吗？
M | I'll call you back in five minutes. | 我五分钟后给您回电话。
M | Sorry, I missed your call just now. | 不好意思，刚才没接到您的电话。
H | Let's switch to a video call. | 我们改成视频通话吧。
M | Can I add you on WeChat? | 可以加一下您的微信吗？ | WeChat (微信) is the main business messaging app in China
M | I'll scan your QR code. | 我扫一下你的二维码。
M | I'll send you a voice message. | 我给你发个语音吧。
M | Thank you for calling. | 谢谢您的来电。
E | Talk soon. Bye! | 回头聊，再见！

# Scheduling | 安排时间
M | When are you free? | 您什么时候有空[kòng]？
M | Do you have time next Tuesday? | 下周二您有时间吗？
E | How about Thursday afternoon? | 周四下午怎么样？
M | What time suits you? | 您几点方便？
M | Ten o'clock works for me. | 十点我可以。
M | Sorry, I have something on that day. | 不好意思，那天我有事。
H | Can we move the meeting to Friday? | 我们可以把会议改到周五吗？
H | I need to change our meeting time. | 我需要改一下我们开会的时间。
H | I'm afraid I have to cancel. | 恐怕我得[děi]取消了。
M | Let's meet at your office. | 我们在您的办公室见吧。
M | Let's meet in the hotel lobby. | 我们在酒店大堂见吧。
E | I'll be there at 2 p.m. | 我下午两点到。
M | I'll be ten minutes late. | 我会晚到十分钟。
E | Sorry I'm late. | 不好意思，我来晚了。
H | I'll send you a calendar invite. | 我给您发一个日历邀请。
H | Which time zone is that? | 那是哪个时区的时间？
M | Singapore and Beijing are in the same time zone. | 新加坡和北京没有时差。
E | What's the date today? | 今天几号？
M | I'm on a business trip next week. | 下周我出差。
M | I'm on leave until Monday. | 我休假到周一。
H | My schedule is full this week. | 这周我的日程都排满了。
H | Let's set a deadline. | 我们定一个截止时间吧。
M | Can we do it a bit earlier? | 能提前一点吗？
H | Please confirm the time and place. | 请确认一下时间和地点。
E | See you then! | 到时候见！

# Emails & messages | 邮件与消息
H | Dear Mr Wang, | 尊敬的王先生： | Formal email opening
H | Thank you for your email. | 感谢您的来信。
H | Please find the report attached. | 附件是报告，请查收。 | 请查收 = please check it on receipt
H | I'm writing to confirm the meeting arrangements. | 来信是想跟您确认一下会议安排。
H | As we discussed on the phone, … | 如电话中所谈，……
H | Please let me know if you have any questions. | 如有任何问题，请随时告诉我。
H | I look forward to your reply. | 期待您的回复。
M | Best wishes, | 祝好！ | Common friendly email sign-off
H | Sorry for the late reply. | 抱歉这么晚才回复您。
H | I'm forwarding this email to my colleague. | 我把这封邮件转给我的同事。
H | I've cc'd my manager. | 我把这封邮件抄送给了我的经理。 | 抄送 = cc
H | Please reply by Friday. | 请在周五之前回复。
M | Could you send the file again? | 能再发一次文件吗？
H | There's no attachment in the email. | 邮件里没有附件。
M | I got your message. | 你的消息我收到了。
E | Got it, thanks! | 收到，谢谢！
H | I'll reply in detail later. | 我晚点再详细回复您。
H | Please see my comments below. | 请看下面我的意见。
H | Please note that the time has changed. | 请注意，时间有所调整。
M | This is urgent. | 这件事很紧急。
E | No rush. | 不急。
H | Please keep this confidential. | 请对此保密。
H | Please ignore my previous email. | 请忽略我上一封邮件。
H | I'm out of the office until Monday. | 我周一之前不在办公室。
H | For urgent matters, please contact my colleague. | 如有急事，请联系我的同事。

# Office & workplace | 办公室与职场
E | Good morning, everyone. | 大家早上好。
E | Where is the meeting room? | 会议室在哪里？
M | Could you print this for me? | 能帮我打印一下吗？
M | The printer is broken. | 打印机坏了。
M | What's the Wi-Fi password? | 无线网密码是多少？
M | I'm working from home today. | 我今天在家办公。
M | Could you take a look at this for me? | 你能帮我看一下这个吗？
H | I'll finish it by this afternoon. | 我今天下午之前做完。
M | I've finished writing the report. | 报告我已经写完了。
H | Who is responsible for this? | 这件事谁负责？
H | Let me check and get back to you. | 我查一下再回复你。
H | I have a lot on my plate this week. | 我这周手头的事情很多。
H | Can I take tomorrow off? | 我明天可以请假吗？
M | I'm going for lunch. Want to come? | 我去吃午饭，一起吗？
E | Great job! | 干[gàn]得[de]好！
M | Thanks for your hard work. | 辛苦了！ | Said often to thank colleagues
E | I'm new here. | 我是新来的。
M | What time do you usually finish work? | 你一般几点下班？
M | We have a team dinner on Friday. | 我们周五有团队聚餐。
M | Congratulations on your promotion! | 恭喜你升职了！
M | Our department is hiring. | 我们部门在招人。
M | I have an interview tomorrow. | 我明天有个面试。
M | Today is my last day. | 今天是我最后一天上班。
H | I'll miss working with you. | 我会想念和你一起工作的日子。
H | Please keep me updated. | 有新进展请随时告诉我。
`
});
