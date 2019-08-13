function getElementId({id, ...event}){
  if(!id) return;
  return id;
}

function toggleClass(id, theme){
  id.classList.toggle(theme);
  return;
}

function changeInputValue(el, mutation){
  let { value, id } = el;
  let newValue = mutation(value);
  el.value = newValue;
}

function formatPhoneNumber(phoneNumberString) {
  return phoneNumberString.trim().replace(/\s/g,"");
}

function upperCaseText(text){
  return text.toUpperCase();
}