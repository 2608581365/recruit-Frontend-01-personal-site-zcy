// 找到入门建议按钮和需要显示、隐藏的内容。
const showTips = document.querySelector('#showTips');
const tipsContent = document.querySelector('#tipsContent');

// 点击按钮时，使用 HTML 的 hidden 属性切换内容显示和隐藏。
showTips.addEventListener('click', function () {
  tipsContent.hidden = !tipsContent.hidden;

  // 根据内容当前的状态，更新按钮文字。
  if (tipsContent.hidden) {
    showTips.textContent = '查看入门建议';
  } else {
    showTips.textContent = '收起入门建议';
  }
});

console.log('🏸 羽你同行网站已加载');

// 找到三个比赛规则按钮。
const ruleButtons = document.querySelectorAll('.rule-button');

// 给每个规则按钮添加展开和收起功能。
ruleButtons.forEach(function (button) {
  const ruleContent = button.nextElementSibling;
  const ruleSymbol = button.querySelector('.rule-symbol');

  button.addEventListener('click', function () {
    ruleContent.hidden = !ruleContent.hidden;

    if (ruleContent.hidden) {
      ruleSymbol.textContent = '+';
    } else {
      ruleSymbol.textContent = '-';
    }
  });
});
