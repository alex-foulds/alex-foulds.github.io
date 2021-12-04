function activateNavigation(){
    const sections = document.querySelectorAll(".section");
    const navContainer = document.createElement("navbar");
    const navItems = Array.from(sections).map(section =>{
        return `
            <div class="navbar-item" data-for-section="${section.id}">
                <a href="#${section.id}" class="nav-link"></a>
                <span class="link-text">${section.dataset.label}</span>
            </div>
        `;
    });

    navContainer.classList.add("navbar");
    navContainer.innerHTML = navItems.join("");

    //console.log(sections);
    //console.log(navContainer);


    const observer = new IntersectionObserver(entries =>{
        document.querySelectorAll(".nav-link").forEach(navLink=>{
            navLink.classList.remove("nav-link-active");
        });

        const visibleSection = entries.filter(entry=> entry.isIntersecting)[0];

        document.querySelector(`.navbar-item[data-for-section="${visibleSection.target.id}"] .nav-link`).classList.add("nav-link-active");

    }, {threshold: 0.5});

    sections.forEach(section=> observer.observe(section));

    document.body.appendChild(navContainer);

}
activateNavigation();


//Result should follow this structure
{/* <nav class="navbar">

        <div class="navbar-item">
            <a href="#about" class="nav-link nav-link-active"></a>
            <span class="link-text">About Me</span>
        </div>

        <div class="navbar-item">
            <a href="#experience" class="nav-link"></a>
            <span class="link-text">My Experience</span>
        </div>

        <div class="navbar-item">
            <a href="#projects" class="nav-link"></a>
            <span class="link-text">Projects</span>
        </div>

        <div class="navbar-item">
            <a href="#contact" class="nav-link"></a>
            <span class="link-text">Get In Conact</span>
        </div>

</nav> */}