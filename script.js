// const selectPlans = document.querySelectorAll('.plan-selector')

// console.log(selectPlans)

// selectPlans.forEach(plan => {
//     if(plan.checked === true) {
//         console.log(checked);
//     }else {
//         console.log('nothing');
//     }
// });

//switch checkbox plan
const monthlyText = document.querySelector('.monthly-plan')
const yearlyText = document.querySelector('.yearly-plan')
const switchInput = document.querySelector('.switch-input')

switchInput.addEventListener('click', () => {
    if(switchInput.checked == true) {
        monthlyText.classList.add('blue-text')
        yearlyText.classList.remove('blue-text')
    }else {
        monthlyText.classList.remove('blue-text')
        yearlyText.classList.add('blue-text')
    }
    console.log(monthlyText, yearlyText, switchInput.checked);
})

//checking step
const sidebarActiveSteps = document.querySelectorAll('.sidebar-item-number')
const nextBtn = document.querySelector('.next-btn')
const backBtn = document.querySelector('.back-btn')
const tabsForm = document.querySelectorAll('.tab')
let currentIndex = 0
const currentTab = tabsForm[currentIndex]

nextBtn.addEventListener('click', () => {
    // for (let index = 0; index < tabsForm.length; index++) {
    //     const tab = tabsForm[0];
    //     console.log(tab[0]);
    // }
    // tabsForm.forEach((tab, index) => {
    //     console.log(tabsForm[0]);
    // })
    if(currentIndex <= tabsForm.length) {
        tabsForm[currentIndex].classList.add('non-active')
        sidebarActiveSteps[currentIndex].classList.add('sidebar-active')
        currentIndex++
        tabsForm[currentIndex].classList.remove('non-active')
        sidebarActiveSteps[currentIndex-1].classList.remove('sidebar-active')
        sidebarActiveSteps[currentIndex].classList.add('sidebar-active')
    }
    if(currentIndex == 5) {
        nextBtn.innerHTML = 'Completed'
    }
    console.log(currentIndex);
})

backBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        tabsForm[currentIndex].classList.add('non-active')
        sidebarActiveSteps[currentIndex].classList.add('sidebar-active')
        currentIndex--
        tabsForm[currentIndex].classList.remove('non-active')
        sidebarActiveSteps[currentIndex-1].classList.remove('sidebar-active')
        sidebarActiveSteps[currentIndex].classList.add('sidebar-active')
    }
})

