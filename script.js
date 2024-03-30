//your JS code here. If required.
const btn = document.querySelector("#btn");
function createPromise() {
  return new Promise((resolve, reject) => {
    let text = document.querySelector("#text").value;
    let delay = parseInt(document.querySelector("#delay").value);
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await createPromise();
  console.log(result);
  document.querySelector("#output").textContent = `${result}`;
  // Expected output: "resolved"
}

btn.addEventListener("click", asyncCall);
