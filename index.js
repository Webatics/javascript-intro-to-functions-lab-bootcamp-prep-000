function shout(string) {
  return string.toUpperCase();
}

shout('Hello');

function whisper(str) {
  return str.toLowerCase();
}

whisper('Hello');

function logShout(str) {
  console.log(str.toUpperCase());
}

logShout('hello');


function logWhisper(str) {
  console.log(str.toLowerCase());
}

logWhisper('hello');

function sayHiToGrandma(str) {
  if (str.toLowerCase === str.toLowerCase()) {
     return "I can't hear you!"
  } else {
    return "YES INDEED!"
  }
}

sayHiToGrandma("hello");
