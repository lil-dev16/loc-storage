const input1 = document.querySelector('.inp1');
const input2 = document.querySelector('.inp2');
const form = document.querySelector('.form');
const nameval = document.querySelector('.nam');
const ageval = document.querySelector('.age')

const submit = (e) => {
    e.preventDefault();
    const name = input1.value;
    const age = input2.value;
    localStorage.setItem('name', name);
    localStorage.setItem('age', age)
    console.log(localStorage);

    nameval.innerHTML = localStorage.name;
    ageval.innerHTML = localStorage.age
}

nameval.innerHTML = localStorage.name;
ageval.innerHTML = localStorage.age


form.addEventListener('submit', submit)

console.log(localStorage);