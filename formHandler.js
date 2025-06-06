// 
// const scriptURL = 'https://script.google.com/macros/s/AKfycbzFhpcvXW90CzKzFfbVricbTVtzH3BLyZHzgk39XkPIfpUpAp3BGd3cgnNyPNSuVgdrKw/exec';

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('entryForm');
//   const response = document.getElementById('response');

//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     const formData = new FormData(form);

//     fetch(scriptURL, { method: 'POST', body: formData })
//       .then(res => res.text())
//       .then(data => {
//         response.innerText = '✅ Submitted Successfully!';
//         response.style.color = 'green';
//         form.reset();
//       })
//       .catch(error => {
//         response.innerText = '❌ Submission failed. Try again.';
//         response.style.color = 'red';
//         console.error('Error!', error.message);
//       });
//   });
// });
const scriptURL = 'https://script.google.com/macros/s/AKfycbzFhpcvXW90CzKzFfbVricbTVtzH3BLyZHzgk39XkPIfpUpAp3BGd3cgnNyPNSuVgdrKw/exec';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('entryForm');
  const response = document.getElementById('response');
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('togglePassword');

  togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    response.textContent = '⏳ Sending...';
    response.style.color = 'black';

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(res => res.text())
      .then(data => {
        response.textContent = '✅ Submitted successfully!';
        response.style.color = 'green';
        form.reset();
      })
      .catch(err => {
        response.textContent = '❌ Failed to submit. Try again.';
        response.style.color = 'red';
        console.error('Error:', err);
      });
  });
});
