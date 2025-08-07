const createElement = str => {
  const match = str.match(/^([a-z0-9-]+)?(?:#([a-zA-Z0-9_-]+))?(?:\.([a-zA-Z0-9_.-]+))?$/i);
  if (!match) return document.createElement('div');
  const [, tag = 'div', id, cl] = match;
  const element = document.createElement(tag);
  if (id) element.id        = id;
  if (cl) element.className = cl.replace(/\./g, ' ');
  return element;
};
