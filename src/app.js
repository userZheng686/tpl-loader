import tpl from './info.tpl'

const oApp = document.querySelector('#app')

const info = tpl({
    name : 'hello',
    age : 34,
    career : 'web',
    hobby : '旅行，钢琴'
})

console.log('hello')
oApp.innerHTML = info