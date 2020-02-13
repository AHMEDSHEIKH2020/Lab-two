const hello - document.getElementById("hello")

hello.addEventListener('Click', greeting);

function greeting() {
  console.log('hello world');
  hello.textContent = 'Something else';


}
