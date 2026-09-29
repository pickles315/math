```javascript
/*
====================================================
                MATH LESSON DATABASE
====================================================

ADDING A LESSON:

Just add another object to the "lessons" array.

Each lesson contains:

    number
    title
    explanation
    questions

Every lesson should have 5 questions.

Example:

{
    number: 3,
    title: "My New Lesson",

    explanation: `
        <h3>My lesson</h3>
        <p>This is what students learn.</p>
    `,

    questions: [
        {
            question: "What is 2 + 2?",
            answer: "4"
        },

        {
            question: "What is 3 + 3?",
            answer: "6"
        },

        ...
    ]
}

====================================================
*/


const grades = [

    /*
    ==================================================
                    GRADE 6
    ==================================================
    */

    {
        id: "grade6",

        name: "Grade 6",

        description: "Middle school mathematics",

        categories: [

            /*
            ==========================================
                    NUMBERS & OPERATIONS
            ==========================================
            */

            {
                id: "numbers",

                name: "Numbers & Operations",

                description: "Learn how numbers work.",

                lessons: [

                    {
                        number: 1,

                        title: "Understanding Whole Numbers",

                        explanation: `
                            <h3>What are whole numbers?</h3>

                            <p>
                                Whole numbers are numbers that start at 0
                                and continue upward.
                            </p>

                            <div class="example">
                                <strong>Examples:</strong><br><br>

                                0, 1, 2, 3, 4, 5, 6, 7...
                            </div>

                            <p>
                                Whole numbers do not include negative numbers,
                                fractions, or decimals.
                            </p>
                        `,

                        questions: [

                            {
                                question: "What is the smallest whole number?",
                                answer: "0"
                            },

                            {
                                question: "Is 7 a whole number?",
                                answer: "yes"
                            },

                            {
                                question: "Is -3 a whole number?",
                                answer: "no"
                            },

                            {
                                question: "Is 25 a whole number?",
                                answer: "yes"
                            },

                            {
                                question: "Is 1.5 a whole number?",
                                answer: "no"
                            }

                        ]
                    },


                    {
                        number: 2,

                        title: "Place Value",

                        explanation: `
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
                        `,

                        questions: [

                            {
                                question: "What is the value of the 5 in 5,432?",
                                answer: "5000"
                            },

                            {
                                question: "What is the value of the 3 in 3,214?",
                                answer: "3000"
                            },

                            {
                                question: "What place is the 7 in 2,374?",
                                answer: "tens"
                            },

                            {
                                question: "What place is the 9 in 9,821?",
                                answer: "thousands"
                            },

                            {
                                question: "What is the value of the 6 in 4,651?",
                                answer: "600"
                            }

                        ]
                    },


                    {
                        number: 3,

                        title: "Adding Whole Numbers",

                        explanation: `
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
                        `,

                        questions: [

                            {
                                question: "What is 5 + 3?",
                                answer: "8"
                            },

                            {
                                question: "What is 12 + 7?",
                                answer: "19"
                            },

                            {
                                question: "What is 25 + 15?",
                                answer: "40"
                            },

                            {
                                question: "What is 100 + 250?",
                                answer: "350"
                            },

                            {
                                question: "What is 245 + 132?",
                                answer: "377"
                            }

                        ]
                    },


                    {
                        number: 4,

                        title: "Subtracting Whole Numbers",

                        explanation: `
                            <h3>Subtraction</h3>

                            <p>
                                Subtraction tells us how much remains after
                                taking one number away from another.
                            </p>

                            <div class="example">
                                500 - 125 = 375
                            </div>
                        `,

                        questions: [

                            {
                                question: "What is 10 - 3?",
                                answer: "7"
                            },

                            {
                                question: "What is 20 - 5?",
                                answer: "15"
                            },

                            {
                                question: "What is 50 - 25?",
                                answer: "25"
                            },

                            {
                                question: "What is 100 - 45?",
                                answer: "55"
                            },

                            {
                                question: "What is 500 - 125?",
                                answer: "375"
                            }

                        ]
                    },


                    {
                        number: 5,

                        title: "Multiplication",

                        explanation: `
                            <h3>Multiplication</h3>

                            <p>
                                Multiplication can be thought of as repeated
                                addition.
                            </p>

                            <div class="example">
                                4 × 3 = 12
                                <br><br>
                                3 + 3 + 3 + 3 = 12
                            </div>
                        `,

                        questions: [

                            {
                                question: "What is 2 × 3?",
                                answer: "6"
                            },

                            {
                                question: "What is 4 × 5?",
                                answer: "20"
                            },

                            {
                                question: "What is 6 × 7?",
                                answer: "42"
                            },

                            {
                                question: "What is 8 × 8?",
                                answer: "64"
                            },

                            {
                                question: "What is 12 × 5?",
                                answer: "60"
                            }

                        ]
                    },


                    {
                        number: 6,

                        title: "Division",

                        explanation: `
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
                        `,

                        questions: [

                            {
                                question: "What is 10 ÷ 2?",
                                answer: "5"
                            },

                            {
                                question: "What is 20 ÷ 4?",
                                answer: "5"
                            },

                            {
                                question: "What is 30 ÷ 5?",
                                answer: "6"
                            },

                            {
                                question: "What is 42 ÷ 7?",
                                answer: "6"
                            },

                            {
                                question: "What is 100 ÷ 10?",
                                answer: "10"
                            }

                        ]
                    },


                    {
                        number: 7,

                        title: "Order of Operations",

                        explanation: `
                            <h3>Order of Operations</h3>

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
                        `,

                        questions: [

                            {
                                question: "What is 2 + 3 × 4?",
                                answer: "14"
                            },

                            {
                                question: "What is 10 - 2 × 3?",
                                answer: "4"
                            },

                            {
                                question: "What is (2 + 3) × 4?",
                                answer: "20"
                            },

                            {
                                question: "What is 20 ÷ 4 + 2?",
                                answer: "7"
                            },

                            {
                                question: "What is 5 + 2 × 5?",
                                answer: "15"
                            }

                        ]
                    },


                    {
                        number: 8,

                        title: "Factors",

                        explanation: `
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
                        `,

                        questions: [

                            {
                                question: "Is 2 a factor of 10?",
                                answer: "yes"
                            },

                            {
                                question: "Is 3 a factor of 10?",
                                answer: "no"
                            },

                            {
                                question: "Is 5 a factor of 20?",
                                answer: "yes"
                            },

                            {
                                question: "Is 4 a factor of 16?",
                                answer: "yes"
                            },

                            {
                                question: "Is 7 a factor of 20?",
                                answer: "no"
                            }

                        ]
                    },


                    {
                        number: 9,

                        title: "Multiples",

                        explanation: `
                            <h3>Multiples</h3>

                            <p>
                                Multiples are the results of multiplying
                                a number by whole numbers.
                            </p>

                            <div class="example">
                                Multiples of 5:
                                <br><br>
                                5, 10, 15, 20, 25, 30...
                            </div>
                        `,

                        questions: [

                            {
                                question: "What is the next multiple of 5 after 10?",
                                answer: "15"
                            },

                            {
                                question: "What is the next multiple of 3 after 6?",
                                answer: "9"
                            },

                            {
                                question: "What is the next multiple of 4 after 12?",
                                answer: "16"
                            },

                            {
                                question: "What is the next multiple of 10 after 20?",
                                answer: "30"
                            },

                            {
                                question: "What is the next multiple of 7 after 14?",
                                answer: "21"
                            }

                        ]
                    },


                    {
                        number: 10,

                        title: "Prime Numbers",

                        explanation: `
                            <h3>Prime Numbers</h3>

                            <p>
                                A prime number has exactly two factors:
                                1 and itself.
                            </p>

                            <div class="example">
                                Examples:
                                <br><br>
                                2, 3, 5, 7, 11, 13...
                            </div>

                            <p>
                                Remember: 1 is not a prime number.
                            </p>
                        `,

                        questions: [

                            {
                                question: "Is 2 prime?",
                                answer: "yes"
                            },

                            {
                                question: "Is 5 prime?",
                                answer: "yes"
                            },

                            {
                                question: "Is 9 prime?",
                                answer: "no"
                            },

                            {
                                question: "Is 11 prime?",
                                answer: "yes"
                            },

                            {
                                question: "Is 15 prime?",
                                answer: "no"
                            }

                        ]
                    }

                ]
            },


            /*
            ==========================================
                        FRACTIONS
            ==========================================
            */

            {
                id: "fractions",

                name: "Fractions",

                description: "Learn how fractions work.",

                lessons: [

                    {
                        number: 1,

                        title: "What is a Fraction?",

                        explanation: `
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
                        `,

                        questions: [

                            {
                                question: "What is the numerator in 3/5?",
                                answer: "3"
                            },

                            {
                                question: "What is the denominator in 3/5?",
                                answer: "5"
                            },

                            {
                                question: "What is the numerator in 7/10?",
                                answer: "7"
                            },

                            {
                                question: "What is the denominator in 2/8?",
                                answer: "8"
                            },

                            {
                                question: "What fraction represents one half?",
                                answer: "1/2"
                            }

                        ]
                    },


                    {
                        number: 2,

                        title: "Equivalent Fractions",

                        explanation: `
                            <h3>Equivalent Fractions</h3>

                            <p>
                                Equivalent fractions have the same value,
                                even though they look different.
                            </p>

                            <div class="example">
                                1/2 = 2/4 = 3/6
                            </div>
                        `,

                        questions: [

                            {
                                question: "Is 1/2 equal to 2/4?",
                                answer: "yes"
                            },

                            {
                                question: "Is 1/3 equal to 2/6?",
                                answer: "yes"
                            },

                            {
                                question: "Is 1/2 equal to 2/5?",
                                answer: "no"
                            },

                            {
                                question: "Is 2/4 equal to 1/2?",
                                answer: "yes"
                            },

                            {
                                question: "Is 3/6 equal to 1/2?",
                                answer: "yes"
                            }

                        ]
                    }

                ]
            }

        ]
    },


    /*
    ==================================================
                    GRADE 7
    ==================================================
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

                        explanation: `
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
                        `,

                        questions: [

                            {
                                question: "In x + 5 = 10, what is the variable?",
                                answer: "x"
                            },

                            {
                                question: "In y + 3 = 8, what is the variable?",
                                answer: "y"
                            },

                            {
                                question: "Is x a variable?",
                                answer: "yes"
                            },

                            {
                                question: "Is 5 a variable?",
                                answer: "no"
                            },

                            {
                                question: "In a + 2 = 9, what is the variable?",
                                answer: "a"
                            }

                        ]
                    },


                    {
                        number: 2,

                        title: "Solving Simple Equations",

                        explanation: `
                            <h3>Solving Equations</h3>

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
                        `,

                        questions: [

                            {
                                question: "Solve: x + 3 = 8",
                                answer: "5"
                            },

                            {
                                question: "Solve: x + 5 = 12",
                                answer: "7"
                            },

                            {
                                question: "Solve: x - 2 = 6",
                                answer: "8"
                            },

                            {
                                question: "Solve: x + 10 = 20",
                                answer: "10"
                            },

                            {
                                question: "Solve: x - 5 = 15",
                                answer: "20"
                            }

                        ]
                    }

                ]
            }

        ]
    }

];



/*
====================================================
                 WEBSITE VARIABLES
====================================================
*/

let selectedGrade = null;

let selectedCategory = null;

let selectedLesson = null;


/*
====================================================
                 PRACTICE VARIABLES
====================================================
*/

let currentQuestion = 0;

let score = 0;


/*
====================================================
                 PAGE MANAGEMENT
====================================================
*/

function hideAllPages() {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.add("hidden");

        });

}


/*
====================================================
                    HOME
====================================================
*/

function showHome() {

    hideAllPages();

    document
        .getElementById("home")
        .classList.remove("hidden");

    selectedGrade = null;

    selectedCategory = null;

    selectedLesson = null;

}


/*
====================================================
                  CATEGORIES
====================================================
*/

function showCategories() {

    hideAllPages();

    document
        .getElementById("categories")
        .classList.remove("hidden");

}


/*
====================================================
                    LESSONS
====================================================
*/

function showLessons() {

    hideAllPages();

    document
        .getElementById("lessons")
        .classList.remove("hidden");

}


/*
====================================================
              LOAD GRADES
====================================================
*/

function loadGrades() {

    const container =
        document.getElementById("grade-list");

    container.innerHTML = "";

    grades.forEach(grade => {

        const card =
            document.createElement("div");

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
====================================================
            LOAD CATEGORIES
====================================================
*/

function loadCategories() {

    hideAllPages();

    document
        .getElementById("categories")
        .classList.remove("hidden");

    document
        .getElementById("category-title")
        .textContent =
            `${selectedGrade.name} Categories`;

    const container =
        document.getElementById("category-list");

    container.innerHTML = "";

    selectedGrade.categories.forEach(category => {

        const card =
            document.createElement("div");

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
====================================================
              LOAD LESSONS
====================================================
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

    const container =
        document.getElementById("lesson-list");

    container.innerHTML = "";

    selectedCategory.lessons.forEach(lesson => {

        const button =
            document.createElement("button");

        button.className = "lesson-button";

        button.innerHTML = `
            <span class="lesson-number">
                Lesson ${lesson.number}
            </span>

            ${lesson.title}
        `;

        button.onclick = () => {

            startLesson(lesson);

        };

        container.appendChild(button);

    });

}


/*
====================================================
              START A LESSON
====================================================
*/

function startLesson(lesson) {

    selectedLesson = lesson;

    currentQuestion = 0;

    score = 0;

    hideAllPages();

    document
        .getElementById("lesson-page")
        .classList.remove("hidden");


    /*
        Put lesson title on page
    */

    document
        .getElementById("current-lesson-title")
        .textContent =
            `Lesson ${lesson.number}: ${lesson.title}`;


    /*
        Put lesson explanation on page
    */

    document
        .getElementById("current-lesson-content")
        .innerHTML =
            lesson.explanation;


    /*
        Reset practice
    */

    document
        .getElementById("practice-area")
        .classList.remove("hidden");

    document
        .getElementById("completion-area")
        .classList.add("hidden");


    showQuestion();

}


/*
====================================================
                 SHOW QUESTION
====================================================
*/

function showQuestion() {

    const question =
        selectedLesson.questions[currentQuestion];


    document
        .getElementById("question-number")
        .textContent =
            `Question ${currentQuestion + 1} of ${selectedLesson.questions.length}`;


    document
        .getElementById("question-text")
        .textContent =
            question.question;


    document
        .getElementById("answer-input")
        .value = "";


    document
        .getElementById("answer-result")
        .textContent = "";


    document
        .getElementById("answer-input")
        .focus();

}


/*
====================================================
                 CHECK ANSWER
====================================================
*/

function checkAnswer() {

    const input =
        document
            .getElementById("answer-input")
            .value
            .trim()
            .toLowerCase();


    if (input === "") {

        document
            .getElementById("answer-result")
            .textContent =
                "Please enter an answer.";

        return;

    }


    const correctAnswer =
        String(
            selectedLesson
                .questions[currentQuestion]
                .answer
        )
        .trim()
        .toLowerCase();


    if (input === correctAnswer) {

        score++;

        document
            .getElementById("answer-result")
            .textContent =
                "✅ Correct!";

    } else {

        document
            .getElementById("answer-result")
            .textContent =
                `❌ Not quite. The correct answer is ${correctAnswer}.`;

    }


    /*
        Wait a moment before moving
        to the next question.
    */

    setTimeout(() => {

        currentQuestion++;

        if (
            currentQuestion >=
            selectedLesson.questions.length
        ) {

            finishLesson();

        } else {

            showQuestion();

        }

    }, 1200);

}


/*
====================================================
                FINISH LESSON
====================================================
*/

function finishLesson() {

    document
        .getElementById("practice-area")
        .classList.add("hidden");


    document
        .getElementById("completion-area")
        .classList.remove("hidden");


    document
        .getElementById("final-score")
        .textContent =
            `You scored ${score} out of ${selectedLesson.questions.length}.`;

}


/*
====================================================
              ENTER KEY SUPPORT
====================================================
*/

document.addEventListener("keydown", event => {

    if (
        event.key === "Enter" &&
        !document
            .getElementById("lesson-page")
            .classList.contains("hidden")
    ) {

        const practice =
            document.getElementById("practice-area");


        if (
            !practice.classList.contains("hidden")
        ) {

            checkAnswer();

        }

    }

});


/*
====================================================
                  START WEBSITE
====================================================
*/

loadGrades();
```
