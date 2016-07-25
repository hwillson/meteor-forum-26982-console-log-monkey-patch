console.log('Hi from the console!');

hiddenConsole = console;
console = {
  log() {
    // Do nothing!
  }
};

console.log('Nothing happens!');
hiddenConsole.log('Hi from the hidden console!');
