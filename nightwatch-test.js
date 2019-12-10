module.exports = {
  'Проверка корректности заголовка страницы и проверка того, что ссылка на твиттер не отображается': function (browser) {
    browser
    // Path to index.html page
      .url("C:/\Users/\artem.katanaev/\Documents/\qa-engineer-master/\index.html")
      .waitForElementPresent('body','Test page loaded')
      .verify.title('Квест QA-инженера')
      browser
      .waitForElementNotPresent('a[href="https://twitter.com/csssr_dev"]',5000,'Link for twitter not visible')
      .end()
  }
}
