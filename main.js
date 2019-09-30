const add = (x, y) => { return x + y }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (!isValid) {
    event.target.nextElementSibling.innerHTML = 'Invalid input';
    event.target.focus();
  }
}

const updateWithResult = async (event) => {
  document.querySelector('#result').innerHTML = '';
  if (document.querySelector('#courseName').checkValidity() && document.querySelector('#maxLength').checkValidity()) {
    const courseName = document.querySelector('#courseName').value;
    const maxLength = parseInt(document.querySelector('#maxLength').value);
    const ans = `The remaing string length is: ${maxLength - courseName.length}.`;
    document.querySelector('#result').innerHTML = ans;
  }
}

// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'courseName') ||
    (event.target && event.target.id === 'maxLength')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'submit') { updateWithResult(event) }
});