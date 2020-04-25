color='purple'
number=10
word='coool'

if(color==='purple') {
    $('.N').css('background',color)
}
if(number>100) {
    $('.E').text("whoah, that's a big number.")
} else {
    $('.E').text("just a regular number, please.")
}

if(word==='cool') {
    $('.W').text('Power of DOM')
} else {
    $('.S').text('Power of DOM')
}

$('body').append(
    '<h1>Hello World!</h1>'
)