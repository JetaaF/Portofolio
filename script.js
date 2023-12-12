function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");

    var logo = document.querySelector('.dode');
    logo.classList.toggle('dode-dark');

    var textElements = document.querySelectorAll('.text-light');
    textElements.forEach(function(element) {
        element.classList.toggle('text-dark');
    });

    var rrejte = document.querySelector(".ic");
    rrejte.classList.toggle('icd');
}



