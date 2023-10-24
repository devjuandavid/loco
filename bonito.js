let element = document.querySelector('h1');
let counter = 0;
let i = 0;
let text = [
    'BUENAS NOCHES',
    'Desde el dia que te conoci y vi tu ternura de tu ser. ',
    'se que un arrullo o un abrazo seria ideal,',
    'yo quisiera ser algo mas belleza . ❤',
    'BABY ME VUELVES LOCO .',
    'Queria probar un poco de tu ternura, perfeccion.',
    'baby que mas, que fue que tal si nos enamoramos seria un placer',
    'yo te entiendo todo, solo quiero el exito y lujos. ❤',
    'no se que mas hacer, pero hacer esto es un placer,',
    'cada dia remontando mis logros y entre ellos tu eres la prioridad .',
  'quizas he de fallar nadie es perfecto,',
  'pero soy el mejor superando todo .',
    'aveces me siento tonto! 😓',
    'pero es por ti mujer!',
    'ME TRAES LOCO ❤😍💕'
  
]



setInterval(() => {
    element.innerHTML += text[counter][i];
    i++
    if(i > text[counter].length - 1){
        counter++;
        i = 0;
        element.innerHTML += '<br>';
    }  
}, 150);
