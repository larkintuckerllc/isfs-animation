export default function (field, url) {
  const href = url !== undefined ? url : window.location.href;
  const reg = new RegExp(`[?&]${field}=([^&#]*)`, 'i');
  const string = reg.exec(href);
  return string !== null ? string[1] : null;
}
