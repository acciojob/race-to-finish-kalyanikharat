window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

// Utility function to create a promise with random delay
function createRandomPromise(index) {
  const time = Math.floor(Math.random() * 5000) + 1000; // 1–5 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Promise ${index + 1} resolved after ${time} ms`);
    }, time);
  });
}

// Add 5 promises to the array
for (let i = 0; i < 5; i++) {
  window.promises.push(createRandomPromise(i));
}

// Use Promise.any to get the first resolved promise
Promise.any(window.promises).then(result => {
  document.getElementById("output").textContent = result;
});
