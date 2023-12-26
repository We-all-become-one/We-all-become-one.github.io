/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	window.location.href = "https://aegisub.org/docs/latest/typesetting/"; // Замените это значение на нужную вам ссылку
})

// Функция для рассчета возраста
function calculateAge(birthdate) {
    var birthDate = new Date(birthdate);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();

    if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

const age = calculateAge("1997-12-19");
var ageElement = document.getElementById("age");
ageElement.innerText = age;