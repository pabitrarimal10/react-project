const pageOneBtn = document.getElementById("page-one-button");
const pageTwoBtn = document.getElementById("page-two-button");
const mainContent = document.getElementById("main-content");

buttonPageOne.addEventListener("click", function () {
    document.title = "Page One";   
    mainContent.innerHTML = `
        <div>Content for one page</div>
        <ul>
            <li>Image</li>
            <li>News</li>
        </ul>
    `;
});

buttonPageTwo.addEventListener("click", function () {
    document.title = "Page Two";  
    mainContent.innerHTML = `
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus iusto incidunt est laboriosam atque alias ipsam
            blanditiis dolor asperiores? Doloremque accusamus velit
            voluptate rerum commodi, repellendus cumque provident quasi
            numquam! `;
});

