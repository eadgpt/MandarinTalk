// Negotiation & Deals — proposals, price, compromise, contracts, partnerships.
// Line format:  Level | English | 中文 | optional note
MT.module({
  id: "negotiation",
  area: "business",
  title: "Negotiation & Deals",
  zh: "谈判与合作",
  added: "2026-10-02",
  phrases: `
# Opening the discussion | 开场
M | We very much hope to work with your company. | 我们很希望和贵公司合作。 | 贵公司 = your (respected) company
H | We'd like to understand your needs better. | 我们想进一步了解你们的需求。
H | What matters most to you? | 你们最看重的是什么？
H | What is your budget for this project? | 这个项目你们的预算是多少？
M | Let me explain our proposal. | 我来介绍一下我们的方案。
H | We can offer a complete solution. | 我们可以提供一整套解决方案。
H | We have worked with many airlines in the region. | 我们和这个地区的很多航空公司合作过。
H | Our main advantage is reliability. | 我们最大的优势是可靠。
H | Who will make the final decision? | 最后由谁来做决定？
M | When do you need this by? | 你们最晚什么时候需要？
H | Let's be frank with each other. | 我们开诚布公地谈吧。
H | We hope this partnership is a win-win. | 希望我们的合作能实现双赢。
H | Is there any flexibility on timing? | 时间上有没有调整的余地？
M | Could you send us more detailed information? | 你们可以给我们发一些更详细的资料吗？
H | We've prepared a draft agreement. | 我们准备了一份协议草案。

# Price & terms | 价格与条款
E | How much does it cost? | 价格是多少？
M | Is the price negotiable? | 这个价格可以谈吗？
H | What's included in the price? | 这个价格包括哪些内容？
M | Does the price include tax? | 价格含税吗？
M | That's higher than our budget. | 这比我们的预算高。
M | Can you give us a discount? | 能给我们打个折吗？
H | If we order more, can you lower the price? | 如果我们多订一些，价格能再低一点吗？
H | We can offer five percent off. | 我们可以给你们打九五折。 | 九五折 = pay 95%, i.e. 5% off
H | This is our best price. | 这是我们最优惠的价格了。
H | Other companies have quoted lower prices. | 别的公司报价比你们低。
H | What are your payment terms? | 你们的付款条件是什么？
H | We usually pay within sixty days. | 我们一般在六十天内付款。
H | We require a thirty percent deposit. | 我们需要百分之三十的定金。
H | The contract is for three years. | 合同期是三年。
H | Prices are fixed for the first year. | 第一年的价格是固定的。
H | Is there a cancellation penalty? | 取消的话有违约金吗？ | 违约金 = penalty for breach
H | Who pays for shipping? | 运费由谁承担？
H | Can you guarantee delivery before March? | 你们能保证三月份之前交货吗？
H | What happens if delivery is late? | 如果延迟交货怎么办？
H | We need at least a two-year warranty. | 我们需要至少两年的保修期。
H | Please send us a formal quotation. | 请给我们发一份正式报价单。
H | Are these prices in US dollars? | 这些价格是以美元计算的吗？
H | Exchange rates are a risk for us. | 汇率对我们来说是一个风险。
H | Volume discounts start at a thousand units. | 一千件以上可以享受批量折扣。
M | Prices will go up next year. | 明年价格会上涨。

# Bargaining & compromise | 讨价还价与让步
H | I'm afraid we can't accept that. | 恐怕我们不能接受。
M | That's a bit difficult for us. | 这对我们来说有点难。
M | We need to think about it. | 我们需要考虑一下。
H | Can we each give a little? | 我们各让一步，好吗？
H | If the price comes down a little, we can sign today. | 如果价格能降一点，我们今天就可以签。
H | We could accept that if you extend the warranty. | 如果你们延长保修期，我们可以接受。
H | Let's think of another way. | 我们再想想别的办法吧。
H | That is our bottom line. | 这是我们的底线。
H | I don't have the authority to agree to that. | 这个我没有权限答应。
H | I'll have to discuss it with headquarters. | 我得[děi]跟总部商量一下。 | 得 = děi (must) here
H | Let's put this point aside for now. | 这一点我们先放一放。
H | How about we split the cost evenly? | 费用由双方各承担一半，怎么样？
H | We value this working relationship. | 我们很重视这段合作关系。
H | We're close to an agreement. | 我们快要达成协议了。
M | That's a fair proposal. | 这个提议很公平。
H | We can't go any lower. | 价格不能再低了。
M | Could you give us a few more days? | 能再给我们几天时间吗？
H | Let's take a short break and come back to it. | 我们先休息一下，再回来谈。
H | I understand your position. | 我理解你们的立场。
H | No rush; we want to get this right. | 不用着[zháo]急，我们想把这件事做好。

# Closing & contracts | 成交与合同
H | I think we have a deal. | 我想我们可以成交了。
M | Then it's settled. | 那就这么定了。
M | We'll prepare the contract. | 我们来准备合同。
H | Our lawyers will review the contract. | 我们的律师会审核合同。
H | Please check the terms carefully. | 请仔细核对条款。
H | We'd like to change this clause. | 我们想修改这一条。
H | Both sides need to sign. | 双方都需要签字。
M | When can we sign the contract? | 我们什么时候可以签合同？
H | The contract takes effect next month. | 合同下个月生效。
H | Please stamp it with your company seal. | 请盖上贵公司的公章。 | Chinese contracts need the company chop (公章)
H | We'll send you the signed copy. | 我们会把签好的合同寄给您。
M | Here's to a happy partnership! | 祝我们合作愉快！
H | We look forward to a long partnership. | 期待我们长期合作。
H | Let's arrange a kick-off meeting. | 我们安排一次启动会议吧。
H | Who is our main point of contact? | 我们的主要联系人是谁？
H | We'll send the invoice next week. | 我们下周会把发票寄给你们。
M | Payment has been made. | 已经付款了。
H | Please confirm receipt. | 请确认收到。
H | Everything has been confirmed in writing. | 所有内容都以书面形式确认了。
H | It's been a pleasure working with you. | 和您合作非常愉快。

# Partnerships & follow-up | 合作与跟进
M | How is the project going? | 项目进展怎么样？
H | Everything is on schedule. | 一切按计划进行。
H | We're a little behind schedule. | 我们的进度有点落后。
M | There's a problem we need to discuss. | 有个问题我们需要讨论一下。
H | We're not very satisfied with the service. | 我们对服务不太满意。
H | Could you look into this for us? | 你们能帮我们查一下吗？
H | We'll fix it as soon as possible. | 我们会尽快解决。
H | Let's do a review every month. | 我们每个月做一次回顾吧。
H | We'd like to renew the contract. | 我们想续签合同。
H | We'd like to expand the partnership. | 我们想扩大合作范围。
H | Thank you for your support over the years. | 感谢您这些年来的支持。
M | I hope to see you in Shanghai soon. | 希望很快能在上海见到您。
H | I'll introduce you to our team in Beijing. | 我会把你介绍给我们北京的团队。
H | Please give my regards to Mr Li. | 请代我向李总问好。
H | I'll get back to you by Friday. | 我周五之前给您答复。
H | I'd like to follow up on our last conversation. | 我想跟进一下我们上次谈的事情。
M | Have you looked at our proposal? | 您看过我们的方案了吗？
H | Let me know if you have any concerns. | 如果有任何顾虑，请告诉我。
M | We should celebrate together. | 我们应该一起庆祝一下。
H | Come to Singapore — we'll host you. | 欢迎您来新加坡，我们来招待。
`
});
