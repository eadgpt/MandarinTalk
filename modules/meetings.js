// Meetings & Introductions — meeting people, small talk, running meetings, presenting.
// Line format:  Level | English | 中文 | optional note
MT.module({
  id: "meetings",
  area: "business",
  title: "Meetings & Introductions",
  zh: "会议与介绍",
  added: "2026-10-02",
  keys: `
贵 = "your honoured" | 您贵姓？ your surname? · 贵公司 your company. Answer plainly, 我姓王 — never use 贵 about yourself.
Modest replies | Praised? Say 哪里哪里 ("where, where") or 过奖了 ("you over-praise me").
Give a view softly | 我觉得… I feel · 我认为… I think (firmer) · 我建议… I suggest.
Order your points | 首先 first · 其次 second · 最后 finally.
同比 vs 环比 | 同比 = against the same period last year. 环比 = against the previous period.
"Have you eaten?" | 您吃饭了吗？ is a greeting, like "how are you". Answer 吃了, then ask back.
`,
  phrases: `
# Introductions | 自我介绍
E | Nice to meet you. | 很高兴认识您。
E | My name is Lisa. | 我叫丽莎。
E | May I ask your surname? | 请问您贵姓？ | Polite way to ask someone's name
E | My surname is Wang. | 我姓王。
E | Here is my business card. | 这是我的名片。
M | I look forward to working with you. | 请多多指教。 | Polite set phrase when meeting someone new
M | I work for an airline in Singapore. | 我在新加坡的一家航空公司工作。
M | I'm in charge of the China market. | 我负责中国市场。
M | What do you do? | 您是做什么工作的？
M | Which company are you with? | 您在哪家公司工作？
M | Let me introduce my colleague. | 我来介绍一下我的同事。
M | This is our general manager, Mr Chen. | 这位是我们的总经理，陈总。 | 陈总 = "Boss Chen", polite title for senior managers
H | I've heard so much about you. | 久仰大名。 | Formal set phrase
E | Long time no see. | 好久不见。
H | Thank you for coming all this way. | 感谢您远道而来。
M | Did you have a good trip? | 一路上还顺利吗？
M | Is this your first time in Singapore? | 您是第一次来新加坡吗？
E | Please have a seat. | 请坐。
M | Would you like some tea? | 您要喝点茶吗？
H | It's an honour to meet you. | 能见到您是我的荣幸。

# Small talk | 寒暄
E | How have you been? | 最近怎么样？
E | I've been busy lately. | 最近挺忙的。
M | How's business these days? | 最近生意怎么样？
E | It's really hot today. | 今天天气真热。
M | Have you eaten yet? | 您吃饭了吗？ | A friendly greeting, not always a real question
M | Your Chinese is very good! | 你的中文说得[de]真好！
M | Not at all, I'm still learning. | 哪里哪里，我还在学习。 | Modest reply to a compliment
M | How long have you lived here? | 您在这里住了多久了？
M | Where is your hometown? | 您老家是哪里的？
M | Do you travel a lot for work? | 您经常出差吗？
M | What do you like to do on weekends? | 周末您喜欢做什么？
E | I love the food here. | 我很喜欢这里的菜。
M | Have you been to the new terminal yet? | 您去过新航站楼了吗？
M | The traffic was terrible this morning. | 今天早上堵车堵得[de]很厉害。
M | Let's keep in touch. | 我们保持联系吧。

# Running a meeting | 主持会议
M | Shall we get started? | 我们开始吧？
M | Thank you all for coming today. | 感谢各位今天来参加会议。
M | Today's meeting is to discuss the new route. | 今天会议的目的是讨论新航线。
H | Let's go through the agenda. | 我们先过一下议程。
H | First, let's review last month's results. | 首先，我们回顾一下上个月的业绩。
M | Who is taking notes? | 谁来做会议记录？
H | Let's go around the table and introduce ourselves. | 我们轮流做一下自我介绍吧。
M | Does everyone have a copy of the report? | 大家都有这份报告吗？
H | Let's move on to the next item. | 我们进入下一个议题。
M | We're running out of time. | 时间不多了。
M | Let's take a ten-minute break. | 我们休息十分钟吧。
H | Can we come back to this later? | 这个问题我们稍后再讨论，好吗？
H | Let's stay on topic. | 我们不要跑题。
M | Any questions so far? | 到目前为止，大家有什么问题吗？
H | Could you say more about that? | 您能具体说一下吗？
M | Sorry, could you say that again? | 不好意思，您能再说一遍吗？
E | Could you speak a little more slowly? | 您能说慢一点吗？
H | Let me summarise the main points. | 我来总结一下要点。
H | Let's agree on the next steps. | 我们确定一下下一步的工作。
H | Who will follow up on this? | 这件事由谁来跟进？ | 跟进 = follow up
H | Please send me the minutes after the meeting. | 会后请把会议纪要发给我。 | 会议纪要 = minutes
M | The deadline is the end of this month. | 截止日期是这个月底。
M | Let's set up another meeting next week. | 我们下周再约一次会吧。
M | Let's stop here for today. | 今天就到这里吧。
E | Thank you, everyone. | 谢谢大家。

# Opinions & discussion | 表达观点
M | I think this is a good idea. | 我觉得这是个好主意。
E | I agree with you. | 我同意你的看法。
M | I don't quite agree. | 我不太同意。
H | I see your point, but… | 我明白您的意思，但是……
M | I think we should wait. | 我认为我们应该再等等。
E | What do you think? | 您怎么看？
M | That's a good question. | 这个问题问得[de]好。
M | Let me think about it. | 让我考虑一下。
H | I need to check with my manager first. | 我需要先和我的经理确认一下。
E | That makes sense. | 有道理。
H | I'm not sure that will work. | 我不确定这样行不行得[de]通。
M | Could you give me an example? | 您能举个例子吗？
M | Have we thought about the cost? | 我们考虑过成本吗？
H | The main risk is the timeline. | 主要的风险在于时间安排。
H | From the customer's point of view… | 从客户的角度来看……
M | Let's look at the data first. | 我们先看看数据吧。
H | We're on the same page. | 我们的想法是一致的。
H | I'd like to add one point. | 我想补充一点。
H | Can we find a middle ground? | 我们能不能找个折中的办法？
H | Let's not make a decision today. | 今天我们先不做决定。

# Presentations | 演示汇报
H | Today I'll talk about our expansion plan. | 今天我要介绍一下我们的扩张计划。
H | My presentation has three parts. | 我的汇报分为三个部分。
M | Please look at this slide. | 请看这张幻灯片。
H | As you can see from this chart… | 从这张图表可以看出……
H | Revenue rose fifteen percent year on year. | 营业收入同比增长了百分之十五。 | 同比 = year on year
H | Costs fell compared with last quarter. | 成本比上个季度有所下降。 | 环比 = vs. previous period
M | This is our target for next year. | 这是我们明年的目标。
H | Our market share is about twenty percent. | 我们的市场份额大约是百分之二十。
H | Customer satisfaction has improved. | 客户满意度提高了。
H | Let me explain this in more detail. | 我来详细解释一下。
H | To sum up… | 总而言之……
H | I'll be happy to take questions at the end. | 最后我很乐意回答大家的问题。
M | Can everyone at the back hear me? | 后面的人听得[de]见吗？
M | Sorry, the projector isn't working. | 不好意思，投影仪出问题了。
M | Let me share my screen. | 我来共享一下屏幕。
M | Can you see my screen? | 你们能看到我的屏幕吗？
H | The figures are in the appendix. | 具体数字在附录里。
M | This is just a first draft. | 这只是初稿。
M | We welcome your feedback. | 欢迎大家提出意见。
H | Thank you for listening. | 感谢大家的聆听。
`
});
