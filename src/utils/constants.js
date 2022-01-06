const trueEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
// источник регулярного выражения
// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

// const trueHardPass = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{4,}/g
// пример выражения для сложного пароля

const trueEasyPass = /^[a-zA-Z0-9]+$/
const trueName = /^[a-zA-Zа-яА-ЯёЁ][а-яА-ЯёЁa-zA-Z-_]{1,30}$/
const infoAboutErEmail = 'Формат должен быть x@x.xx'
const infoAboutErPas = 'Только латинские буквы и цифры'
const infoAboutErNameMoreTwo = 'Имя должно быть от 2 символов и больше'
const infoAboutErNameLessThirty = 'Имя должно быть меньше 30 символов'
const infoAboutErName = 'Имя должно состоять из буквы латиницы или кириллицы. Может содержать - _'
const infoAboutErSearchNotInfo = 'Нужно ввести ключевое слово'
const infoAboutErSearchNotConnect = `Во время запроса произошла ошибка.
  Возможно, проблема с соединением или сервер недоступен.
  Подождите немного и попробуйте еще раз.`
const smallScreen = 767
const medScreen = 1000
const bigScreen = 1280
const smallCardsOnPage = 5
const medCardsOnPage = 8
const bigCardsOnPage = 9
const hugeCardsOnPage = 12
const addSmallCardsOnPage = 2
const addMedCardsOnPage = 2
const addBigCardsOnPage = 3
const addHugeCardsOnPage = 4
const pageWithImgs = 'https://api.nomoreparties.co'
const textForLoading = 'Загрузка...'
const textForExampleEmail = 'example@nemail.su'
const numFirstDot = 60
const duraShortFilm = 40

module.exports.trueEmail = trueEmail
module.exports.trueName = trueName
module.exports.truePass = trueEasyPass
module.exports.infoAboutErEmail = infoAboutErEmail
module.exports.infoAboutErPas = infoAboutErPas
module.exports.infoAboutErNameMoreTwo = infoAboutErNameMoreTwo
module.exports.infoAboutErNameLessThirty = infoAboutErNameLessThirty
module.exports.infoAboutErName = infoAboutErName
module.exports.infoSearchNotInfo = infoAboutErSearchNotInfo
module.exports.infoSearchNotConnect = infoAboutErSearchNotConnect
module.exports.smallScreen = smallScreen
module.exports.medScreen = medScreen
module.exports.bigScreen = bigScreen
module.exports.smallCardsOnPage = smallCardsOnPage
module.exports.medCardsOnPage = medCardsOnPage
module.exports.bigCardsOnPage = bigCardsOnPage
module.exports.hugeCardsOnPage = hugeCardsOnPage
module.exports.pageWithImgs = pageWithImgs
module.exports.textForLoading = textForLoading
module.exports.textForExampleEmail = textForExampleEmail
module.exports.numFirstDot = numFirstDot
module.exports.duraShortFilm = duraShortFilm
module.exports.addSmallCardsOnPage = addSmallCardsOnPage
module.exports.addMedCardsOnPage = addMedCardsOnPage
module.exports.addBigCardsOnPage = addBigCardsOnPage
module.exports.addHugeCardsOnPage = addHugeCardsOnPage
