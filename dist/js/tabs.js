// tabs vars
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')



// tabs logic

// iterating through tab items 
tabs.forEach(tab => {
    // adding click event
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)

        // switching active class 
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})