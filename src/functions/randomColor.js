

const colorList =['#FFFF00',
'#FFF700',
'#7FFF00',
'#00FF00',
'#00FF7F',
'#98FB98',
'#2E8B57',
'#90EE90',
'#98FB98',
'#808000']


export function randomColor (){
    return colorList[parseInt(Math.random()*10)]
}

