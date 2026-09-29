/*
    ==========================================
             MATH LESSON DATABASE
    ==========================================

    To add a new grade:
        Add another object to grades.

    To add a category:
        Add another object inside categories.

    To add a lesson:
        Add another object inside lessons.

    You don't need to modify the HTML.
*/


const grades = [

    {
        id: "grade6",
        name: "Grade 6",
        description: "Middle school mathematics",
        
        categories: [

            {
                id: "numbers",
                name: "Numbers & Operations",
                description: "Learn how numbers work.",

                lessons: [

                    {
                        number: 1,
                        title: "Understanding Whole Numbers",

                        content: `
                            <h3>What are whole numbers?</h3>

                            <p>
                                Whole numbers are numbers that start at 0 and
                                continue upward without fractions or decimals.
                            </p>

                            <div class="example">
                                <strong>Examples:</strong><br>
                                0, 1, 2, 3, 4, 5, 6, 7...
                            </div>

                            <h3>Important idea</h3>

                            <p>
                                Whole numbers do not include negative numbers,
                                fractions, or decimals.
                            </p>
                        `
                    },


                    {
                        number: 2,
                        title: "Place Value",

                        content: `
                            <h3>What is place value?</h3>

                            <p>
                                Place value tells us how much a digit is worth
                                based on where it appears in a number.
                            </p>

                            <div class="example">
                                <strong>Example:</strong><br><br>

                                4,582
                                <br><br>

                                4 = thousands<br>
                                5 = hundreds<br>
                                8 = tens<br>
                                2 = ones
                            </div>
                        `
                    },


                    {
                        number: 3,
                        title: "Adding Whole Numbers",

                        content: `
                            <h3>Adding numbers</h3>

                            <p>
                                Addition combines numbers together.
                            </p>

                            <div class="example">
                                245 + 132 = 377
                            </div>

                            <p>
                                When adding large numbers, line up the digits
                                according to their place value.
                            </p>
                        `
                    },


                    {
                        number: 4,
                        title: "Subtracting Whole Numbers",

                        content: `
                            <h3>Subtraction</h3>

                            <p>
                                Subtraction tells us how much remains after
                                taking one number away from another.
                            </p>

                            <div class="example">
                                500 - 125 = 375
                            </div>
                        `
                    },


                    {
                        number: 5,
                        title: "Multiplication",

                        content: `
                            <h3>Multiplication</h3>

                            <p>
                                Multiplication can be thought of as repeated
                                addition.
                            </p>

                            <div class="example">
                                4 × 3 = 12
                                <br><br>
                                This is the same as:
                                <br>
                                3 + 3 + 3 + 3 = 12
                            </div>
                        `
                    },


                    {
                        number: 6,
                        title: "Division",

                        content: `
                            <h3>Division</h3>

                            <p>
                                Division separates a number into equal groups.
                            </p>

                            <div class="example">
                                20 ÷ 4 = 5
                            </div>

                            <p>
                                This means that 20 can be separated into
                                4 equal groups of 5.
                            </p>
                        `
                    },


                    {
                        number: 7,
                        title: "Order of Operations",

                        content: `
                            <h3>Order of operations</h3>

                            <p>
                                When an equation contains multiple operations,
                                we need to follow a specific order.
                            </p>

                            <div class="example">
                                <strong>PEMDAS</strong><br><br>

                                Parentheses<br>
                                Exponents<br>
                                Multiplication<br>
                                Division<br>
                                Addition<br>
                                Subtraction
                            </div>

                            <div class="example">
                                2 + 3 × 4
                                <br><br>
                                First multiply:
                                <br>
                                3 × 4 = 12
                                <br><br>
                                Then add:
                                <br>
                                2 + 12 = 14
                            </div>
                        `
                    },


                    {
                        number: 8,
                        title: "Factors",

                        content: `
                            <h3>Factors</h3>

                            <p>
                                A factor is a number that multiplies with
                                another number to produce a result.
                            </p>

                            <div class="example">
                                Factors of 12:
                                <br><br>
                                1, 2, 3, 4, 6, 12
                            </div>
                        `
                    },


                    {
                        number: 9,
                        title: "Multiples",

                        content: `
                            <h3>Multiples</h3>

                            <p>
                                Multiples are the results of multiplying a
                                number by whole numbers.
                            </p>

                            <div class="example">
                                Multiples of 5:
                                <br><br>
                                5, 10, 15, 20, 25, 30...
                            </div>
                        `
                    },


                    {
                        number: 10,
                        title: "Prime Numbers",

                        content: `
                            <h3>Prime numbers</h3>

                            <p>
                                A prime number has exactly two factors:
                                1 and itself.
                            </p>

                            <div class="example">
                                Examples:
                                <br><br>
                                2, 3, 5, 7, 11, 13, 17...
                            </div>

                            <p>
                                Remember: 1 is not a prime number.
                            </p>
                        `
                    }

                ]
            },


            {
                id: "fractions",
                name: "Fractions",
                description: "Learn how fractions work.",

                lessons: [

                    {
                        number: 1,
                        title: "What is a Fraction?",

                        content: `
                            <h3>Fractions</h3>

                            <p>
                                A fraction represents part of a whole.
                            </p>

                            <div class="example">
                                <strong>1/2</strong>
                                <br><br>
                                The top number is the numerator.
                                <br>
                                The bottom number is the denominator.
                            </div>
                        `
                    },


                    {
                        number: 2,
                        title: "Numerators and Denominators",

                        content: `
                            <h3>The two parts</h3>

                            <p>
                                The numerator tells us how many parts we have.
                            </p>

                            <p>
                                The denominator tells us how many equal parts
                                the whole is divided into.
                            </p>
                        `
                    }

                ]
            }

        ]
    },


    /*
        ==========================================
                    GRADE 7
        ==========================================
    */

    {
        id: "grade7",
        name: "Grade 7",
        description: "More advanced mathematics",

        categories: [

            {
                id: "algebra",
                name: "Algebra",
                description: "Learn the basics of algebra.",

                lessons: [

                    {
                        number: 1,
                        title: "Variables",

                        content: `
                            <h3>Variables</h3>

                            <p>
                                A variable is a letter or symbol that represents
                                an unknown value.
                            </p>

                            <div class="example">
                                x + 5 = 12
                                <br><br>
                                Here, x is the variable.
                            </div>
                        `
                    },


                    {
                        number: 2,
                        title: "Solving Simple Equations",

                        content: `
                            <h3>Solving equations</h3>

                            <p>
                                We can solve an equation by finding the value
                                of the unknown variable.
                            </p>

                            <div class="example">
                                x + 4 = 10
                                <br><br>
                                Subtract 4 from both sides:
                                <br>
                                x = 6
                            </div>
                        `
                    }

                ]
            }

        ]
    }

];



/*
    ==========================================
             WEBSITE LOGIC
    ==========================================
*/

let selectedGrade = null;
let selectedCategory = null;


/*
    Hide every page
*/

function hideAllPages() {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.add("hidden");
    });

}


/*
    Show home
*/

function showHome() {

    hideAllPages();

    document
        .getElementById("home")
        .classList.remove("hidden");

    selectedGrade = null;
    selectedCategory = null;

}


/*
    Show categories
*/

function showCategories() {

    hideAllPages();

    document
        .getElementById("categories")
        .classList.remove("hidden");

    selectedCategory = null;

}


/*
    Show lessons
*/

function showLessons() {

    hideAllPages();

    document
        .getElementById("lessons")
        .classList.remove("hidden");

}


/*
    Show individual lesson
*/

function showLesson(lesson) {

    hideAllPages();

    document
        .getElementById("lesson-page")
        .classList.remove("hidden");

    document
        .getElementById("current-lesson-title")
        .textContent = `Lesson ${lesson.number}: ${lesson.title}`;

    document
        .getElementById("current-lesson-content")
        .innerHTML = lesson.content;

}


/*
    Create grade cards
*/

function loadGrades() {

    const container = document.getElementById("grade-list");

    container.innerHTML = "";

    grades.forEach(grade => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${grade.name}</h3>
            <p>${grade.description}</p>
        `;

        card.onclick = () => {

            selectedGrade = grade;

            loadCategories();

        };

        container.appendChild(card);

    });

}


/*
    Create category cards
*/

function loadCategories() {

    hideAllPages();

    document
        .getElementById("categories")
        .classList.remove("hidden");

    document
        .getElementById("category-title")
        .textContent = `${selectedGrade.name} Categories`;

    const container = document.getElementById("category-list");

    container.innerHTML = "";

    selectedGrade.categories.forEach(category => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        `;

        card.onclick = () => {

            selectedCategory = category;

            loadLessons();

        };

        container.appendChild(card);

    });

}


/*
    Create lesson buttons
*/

function loadLessons() {

    hideAllPages();

    document
        .getElementById("lessons")
        .classList.remove("hidden");

    document
        .getElementById("lesson-title")
        .textContent =
            `${selectedGrade.name} → ${selectedCategory.name}`;

    const container = document.getElementById("lesson-list");

    container.innerHTML = "";

    selectedCategory.lessons.forEach(lesson => {

        const button = document.createElement("button");

        button.className = "lesson-button";

        button.innerHTML = `
            <span class="lesson-number">
                Lesson ${lesson.number}
            </span>

            ${lesson.title}
        `;

        button.onclick = () => {

            showLesson(lesson);

        };

        container.appendChild(button);

    });

}


/*
    Start the website
*/

loadGrades();
