const items = ['github', 'users', 'user', 'world', 'programmers'];
const messages = ['hello', 'goodbye', 'thanks'];

function getItem(char) {
  let filtered = items.filter(function(item) {
    return item.startsWith(char);
  });
  return filtered[0];
}

function getMessage(char) {
  let filtered = messages.filter(function(message) {
    return message.startsWith(char);
  });
  return filtered[0];
}

function main(itemChar, messageChar) {
  let item = getItem(itemChar);
  let message = getMessage(messageChar);
  console.log(`${message}, ${item}`);
}

main('w', 'h');
