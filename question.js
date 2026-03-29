// JEE Master Hub - Question Bank File
// Note: 'correct' index 0 se start hota hai (0=A, 1=B, 2=C, 3=D)

const examQuestions = {
    physics: [
        {
            q: "A body starts from rest and moves with a uniform acceleration of $2 m/s^2$. What is the displacement after 5 seconds?",
            options: ["10 m", "25 m", "50 m", "100 m"],
            correct: 1, // Option B (25m)
            solution: "Using formula $s = ut + \\frac{1}{2}at^2$. Since $u=0$, $s = \\frac{1}{2} \\times 2 \\times 5^2 = 25m$."
        },
        {
            q: "Which of the following is a scalar quantity?",
            options: ["Force", "Velocity", "Work", "Acceleration"],
            correct: 2, // Option C (Work)
            solution: "Work is a scalar quantity because it only has magnitude, no direction."
        },
        // Yahan aap baaki 23 Physics ke questions add karein...
    ],

    chemistry: [
        {
            q: "What is the oxidation state of Oxygen in $H_2O_2$?",
            options: ["-2", "-1", "+1", "0"],
            correct: 1, // Option B (-1)
            solution: "In Peroxides ($H_2O_2$), Oxygen always has an oxidation state of -1."
        },
        {
            q: "Which gas is known as Laughing Gas?",
            options: ["$NO_2$", "$N_2O$", "$NO$", "$N_2O_5$"],
            correct: 1, // Option B (N2O)
            solution: "Nitrous Oxide ($N_2O$) is commonly known as laughing gas."
        },
        // Yahan aap baaki 23 Chemistry ke questions add karein...
    ],

    mathematics: [
        {
            q: "If $f(x) = x^2$, then the value of $f'(2)$ is:",
            options: ["2", "4", "8", "0"],
            correct: 1, // Option B (4)
            solution: "Differentiation of $x^2$ is $2x$. Putting $x=2$, we get $2(2) = 4$."
        },
        {
            q: "The value of $\\sin^2\\theta + \\cos^2\\theta$ is:",
            options: ["0", "1", "-1", "None"],
            correct: 1, // Option B (1)
            solution: "This is a fundamental trigonometric identity."
        },
        // Yahan aap baaki 23 Mathematics ke questions add karein...
    ]
};

// Console log for debugging (Optional)
console.log("Questions loaded successfully from equation.js");
