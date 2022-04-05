const loginHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  const res = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Login failed.');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginHandler);
