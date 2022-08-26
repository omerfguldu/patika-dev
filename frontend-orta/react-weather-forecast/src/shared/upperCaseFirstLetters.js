export default function upperCaseFirstLetters(text) {
  const textArr = text.split(` `).map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return textArr.join(` `);
}
