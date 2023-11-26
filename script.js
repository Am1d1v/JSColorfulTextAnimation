

const text = document.querySelector('.text');

// Transform inner text in array then wrap each latter in span
let htmlSpans =  text.innerText
                     .split('')
                     .map((letter, index) => {
                                return `<span 
                                         style="animation-duration: ${Math.random() * 5}s;
                                         filter: hue-rotate(${index * 60}deg)"
                                         >${letter}</span>`
                            }).join('');

console.log(htmlSpans);

// Add htmlSpans in h2 as HTML-Elements
text.innerHTML = htmlSpans;







