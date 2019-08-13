function getElementId({id, ...event}){
  if(!id) return;
  return id;
}

function toggleClass(id, theme){
  id.classList.toggle(theme);
  return;
}