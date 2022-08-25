let answers = document.querySelectorAll(".faq-row");
console.log(answers);
    answers.forEach((event) => {
        event.addEventListener('click', () =>{
            if(event.classList.contains("active")){
                event.classList.remove("active");
            }  else {
                event.classList.add("active");
            }
        })
    });


// const modal = document.querySelector('.modal');
// const overLay = document.querySelector('.overlay');
// const showModal = document.querySelector('#show-modal');


// const closeModal = function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// };

// const openModal = function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// };

// showModal.addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//     console.log(e.key)

//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//         closeModal();
//     }
// });

