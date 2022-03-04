// const text = [
//   'Ты у меня одна,\n',
//   'Словно в ночи луна\n'
// ].join("<br>");
//
//
//  let line = 0;
//  let count = 0;
//   let result = '';
//   function typeLine() {
//     let interval = setTimeout(
//       () => {
//         result += text[line][count]
//         document.querySelector('.pre').innerHTML =result +'|';
//
//
//       count++;
//       if (count >= text[line].length) {
//         count = 0;
//         line++;
//         if (line == text.length) {
//           clearTimeout(interval);
//            document.querySelector('.pre').innerHTML =result;
//           return true;
//         }
//       }
//       typeLine();
//     }, getRandomInt(getRandomInt(250*2.5)))
//   }
//   typeLine();
//
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
//
// jQuery(document).ready(function($) {
// $('.pre').html('Словно в степи сосна.\n');
// });
//
// var properties = {
//     element: $element,
//     newText: 'new Text',
// };
// bubbleText(properties);
//properties.element - элемент в котором будут печататься фразы

//properties.newText - текстовая фраза
$(document).ready(function() {
    var $element = $('#bubble-1');
    var newText = 'Печатающийся текст в несколько строк';

    bubbleText({
        element: $element,
        newText: newText,
        speed: 3000,
        repeat: Infinity,
    });
})
$(document).ready(function() {
    var $element = $('#bubble-2');
    var newText = 'пишем тут';

    bubbleText({
        element: $element,
        newText: newText,
        speed: 3000,
        repeat: Infinity,
    });
})
//https://atuin.ru/blog/pechatayushhijsya-tekst-na-jquery/
