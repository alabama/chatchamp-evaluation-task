export default function createWrapper(id = 'chatchamp-wrapper') {
  // eslint-disable-next-line no-undef
  if (!window || !window.document) {
    throw new Error('window or window.document does not exist');
  }
  // eslint-disable-next-line no-undef
  const globalWindow = window;
  const divElement = globalWindow.document.createElement('div');
  divElement.setAttribute('id', id);
  globalWindow.document.body.appendChild(divElement);
  return divElement;
}
