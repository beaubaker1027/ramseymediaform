const formName = "InfoForm";

var validations = {
  fullName: (text)=>{
    document.getElementById('fullName-error')
    return text
  },
  email: (text)=> {
    return text;
  },
  phone: (text)=>{
    return formatPhoneNumber(text);
  },
  city: (text)=>{
    return text;
  },
  state: (text)=>{
    return text;
  },
  zip: (text)=>{
    return text;
  }
}

function getElementId({id, ...event}){
  if(!id) return;
  return id;
}

function toggleClass(id, theme){
  id.classList.toggle(theme);
  return;
}

function formatPhoneNumber(phoneNumberString) {
  console.log(phoneNumberString)
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

function validateForm(){
  let inputs = Object.keys(validations).map(key=>{
    return document.forms[formName][key];
  })
  console.log(inputs);
  return false;
}

function validateInput({name,value, ...rest}){
  if(!validations[name]){
    return
  }
  validations[name](value);
}