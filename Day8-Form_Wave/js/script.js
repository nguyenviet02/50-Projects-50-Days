const form_controls = document.querySelectorAll('.form-control');

form_controls.forEach(form_control => {
  form_control.onfocus = ()=> {
    form_control.parentElement.querySelector("label").classList.add('active');
  }
  form_control.onblur = ()=> {
    if(form_control.value == "") {
      form_control.parentElement.querySelector("label").classList.remove('active');
    }
  }
})