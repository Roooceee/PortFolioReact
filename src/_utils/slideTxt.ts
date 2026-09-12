export function sliceTxt(txt: string, maxLength: number) {
  const regex = new RegExp(`^(.{0,${maxLength}})(\\s|$)`);
  const match = txt.match(regex);
  if (txt.length < maxLength) {
    return txt;
  } else {
    return match ? match[0].trim() + '...' : txt.slice(0, maxLength) + '...';
  }
}
