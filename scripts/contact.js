// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submit=document.getElementById('submit-button');
function submitButton()
{
  let form=document.getElementById('contact-page');
  form.innerHTML='';
  let message=document.createElement('p');
  message.innerHTML='Thank you for your message';
  message.style.fontSize='24px';
  form.appendChild(message);
}
submit.addEventListener('click',submitButton);