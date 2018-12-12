export const camelize = function (str) {
  return str.split(/[\s_]/).map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}
