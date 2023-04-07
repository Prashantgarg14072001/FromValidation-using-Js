function validateForm() {
  const username = document.getElementById('username').value.trim();
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('pass').value.trim();
  const confirmPassword = document.getElementById('cpass').value.trim();

  if (!isValidUsername(username)) {
    alert('Username must contain only letters, numbers, or underscores and be between 5 to 15 characters long');
    return false;
  }

  if (!isValidfname(fname)) {
    alert('First name must contain only letters');
    return false;
  }
  if (!isValidlname(lname)) {
    alert('Last name must contain only letters');
    return false;
  }
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return false;
  }
  return true;
}
function isValidUsername(username) {
  if(/^[a-zA-Z0-9_]{5,15}$/.test(username)){
    return true;
  }
 else{
  return false;
 }
}
function isValidfname(fname) {
  const regex =/^[A-Za-z0-9]+$/;
  return regex.test(fname);
}
function isValidlname(lname) {
  const regex = /^[a-zA-Z0-9]{1,15}$/;
  return regex.test(lname);
}
function isValidEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}


const countrySelect  = document.getElementById('country-select');
const countryCode = document.getElementById('country-code');
countrySelect.addEventListener('change', () =>{
 const selectedCountry = countrySelect.value;
 if(selectedCountry === 'ind'){
  countryCode.textContent = '+91';
 }
 else if(selectedCountry === 'usa'){
  countryCode.textContent = '+1';
 }
 else if(selectedCountry === 'canada'){
  countryCode.textContent = '+1';
 }
 else if(selectedCountry === 'china'){
  countryCode.textContent = '+86';
 }
 console.log(`Country code changed to ${countryCode}`);
});