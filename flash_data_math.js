// Welcome to the Our Jee mains Master Hub Website
// Total 100 Most Important JEE Mains Maths Flashcards (Error Free Version)

const mathsCards = [
    // --- 1. ALGEBRA ---
    { q: "Number of Subsets of a set with $n$ elements?", a: "$2^n$" },
    { q: "De Morgan's Laws?", a: "$(A \\cup B)' = A' \\cap B'$ <br> $(A \\cap B)' = A' \\cup B'$" },
    { q: "Sum of first $n$ natural numbers?", a: "$\\sum n = \\frac{n(n+1)}{2}$" },
    { q: "Sum of squares of first $n$ natural numbers?", a: "$\\sum n^2 = \\frac{n(n+1)(2n+1)}{6}$" },
    { q: "Sum of cubes of first $n$ natural numbers?", a: "$\\sum n^3 = [\\frac{n(n+1)}{2}]^2$" },
    { q: "AM-GM Inequality?", a: "$AM \\geq GM$ <br> $\\frac{a+b}{2} \\geq \\sqrt{ab}$" },
    { q: "Condition for infinite solutions in Linear Equations?", a: "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$" },
    { q: "Quadratic: Sum and Product of roots?", a: "Sum: $\\alpha + \\beta = -b/a$ <br> Product: $\\alpha\\beta = c/a$" },
    { q: "Quadratic: Condition for Common Root?", a: "$(a_1b_2 - a_2b_1)(b_1c_2 - b_2c_1) = (c_1a_2 - c_2a_1)^2$" },
    { q: "Complex: Euler's Form?", a: "$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$" },
    { q: "Complex: Cube roots of unity?", a: "$1, \\omega, \\omega^2$ <br> $1 + \\omega + \\omega^2 = 0, \\omega^3 = 1$" },
    { q: "Logarithm: Change of Base?", a: "$\\log_a b = \\frac{\\log_c b}{\\log_c a}$" },
    { q: "Binomial: General Term?", a: "$T_{r+1} = {}^nC_r a^{n-r} b^r$" },
    { q: "Binomial: Total number of terms in $(x+y)^n$?", a: "$n+1$" },
    { q: "Matrices: $(AB)^{-1}$?", a: "$B^{-1} A^{-1}$" },
    { q: "Determinant: Property of $adj(A)$?", a: "$A \\cdot adj(A) = |A|I$" },
    { q: "Permutations: $nPr$ formula?", a: "$\\frac{n!}{(n-r)!}$" },
    { q: "Combinations: $nCr$ formula?", a: "$\\frac{n!}{r!(n-r)!}$" },
    { q: "Probability: $P(A \\cup B)$?", a: "$P(A) + P(B) - P(A \\cap B)$" },
    { q: "Bayes' Theorem?", a: "$P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$" },

    // --- 2. TRIGONOMETRY ---
    { q: "$\\sin(A+B)$?", a: "$\\sin A\\cos B + \\cos A\\sin B$" },
    { q: "$\\cos(A+B)$?", a: "$\\cos A\\cos B - \\sin A\\sin B$" },
    { q: "$\\tan(A+B)$?", a: "$\\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B}$" },
    { q: "$\\sin 2\\theta$ in terms of $\\tan$?", a: "$\\frac{2\\tan\\theta}{1+\\tan^2\\theta}$" },
    { q: "$\\cos 2\\theta$ (all 3 forms)?", a: "$\\cos^2\\theta - \\sin^2\\theta$ <br> $2\\cos^2\\theta - 1$ <br> $1 - 2\\sin^2\\theta$" },
    { q: "$\\sin 3\\theta$?", a: "$3\\sin\\theta - 4\\sin^3\\theta$" },
    { q: "$\\cos 3\\theta$?", a: "$4\\cos^3\\theta - 3\\cos\\theta$" },
    { q: "General Solution of $\\sin\\theta = \\sin\\alpha$?", a: "$\\theta = n\\pi + (-1)^n \\alpha$" },
    { q: "General Solution of $\\cos\\theta = \\cos\\alpha$?", a: "$\\theta = 2n\\pi \\pm \\alpha$" },
    { q: "Inverse: $\\tan^{-1}x + \\tan^{-1}y$?", a: "$\\tan^{-1}(\\frac{x+y}{1-xy})$" },

    // --- 3. COORDINATE GEOMETRY ---
    { q: "Distance from point $(x_1, y_1)$ to line $ax+by+c=0$?", a: "$\\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2+b^2}}$" },
    { q: "Slope of line perpendicular to $y = mx+c$?", a: "$-1/m$" },
    { q: "Angle between two lines?", a: "$\\tan\\theta = |\\frac{m_1-m_2}{1+m_1m_2}|$" },
    { q: "Circle: Equation of Tangent at $(x_1, y_1)$?", a: "$xx_1 + yy_1 + g(x+x_1) + f(y+y_1) + c = 0$" },
    { q: "Circle: Length of tangent from external point?", a: "$\\sqrt{x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c}$" },
    { q: "Parabola: $y^2 = 4ax$ Focus and Directrix?", a: "Focus: $(a, 0)$ <br> Directrix: $x = -a$" },
    { q: "Parabola: Parametric coordinates?", a: "$(at^2, 2at)$" },
    { q: "Ellipse: Eccentricity ($e$)?", a: "$b^2 = a^2(1-e^2)$" },
    { q: "Hyperbola: Eccentricity ($e$)?", a: "$b^2 = a^2(e^2-1)$" },
    { q: "Rectangular Hyperbola $xy = c^2$ eccentricity?", a: "$\\sqrt{2}$" },

    // --- 4. CALCULUS (Differential) ---
    { q: "Limit: $\\frac{\\sin x}{x}$ as $x \\rightarrow 0$?", a: "$1$" },
    { q: "Limit: $\\frac{e^x-1}{x}$ as $x \\rightarrow 0$?", a: "$1$" },
    { q: "Derivative of $a^x$?", a: "$a^x \\ln a$" },
    { q: "Derivative of $\\tan^{-1}x$?", a: "$\\frac{1}{1+x^2}$" },
    { q: "Chain Rule?", a: "$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$" },
    { q: "L'Hopital's Rule?", a: "Use when limit is $0/0$ or $\\infty/\\infty$. Differentiate Nr and Dr separately." },
    { q: "Mean Value Theorem?", a: "$f'(c) = \\frac{f(b)-f(a)}{b-a}$" },
    { q: "Condition for strictly increasing function?", a: "$f'(x) > 0$" },
    { q: "Point of Inflection?", a: "Where $f''(x) = 0$ and sign of $f''(x)$ changes." },
    { q: "Derivative of $\\sec x$?", a: "$\\sec x \\tan x$" },

    // --- 5. CALCULUS (Integral) ---
    { q: "Definite Integral Property: $\\int_0^a f(x)dx$?", a: "$\\int_0^a f(a-x)dx$" },
    { q: "Area under curve $y=f(x)$ from $a$ to $b$?", a: "$\\int_a^b y dx$" },
    { q: "Order and Degree of Differential Eq?", a: "Order: Highest derivative. Degree: Power of highest derivative." },
    { q: "Linear Differential Eq: $dy/dx + Py = Q$ IF?", a: "$IF = e^{\\int P dx}$" },
    { q: "$\\int e^x (f(x) + f'(x)) dx$?", a: "$e^x f(x) + C$" },
    { q: "$\\int \\sec x dx$?", a: "$\\ln |\\sec x + \\tan x| + C$" },

    // --- 6. VECTORS & 3D GEOMETRY (Fixed Errors) ---
    { q: "Dot Product $\\vec{a} \\cdot \\vec{b}$?", a: "$|\\vec{a}||\\vec{b}| \\cos\\theta$" },
    { q: "Cross Product magnitude $|\\vec{a} \\times \\vec{b}|$?", a: "$|\\vec{a}||\\vec{b}| \\sin\\theta$" },
    { q: "Projection of $\\vec{a}$ on $\\vec{b}$?", a: "$\\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$" },
    { q: "Unit vector in direction of $\\vec{a}$?", a: "$\\frac{\\vec{a}}{|\\vec{a}|}$" },
    { q: "Scalar Triple Product $[\\vec{a} \\ \\vec{b} \\ \\vec{c}]$?", a: "$\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$" },
    { q: "Shortest distance between two skew lines?", a: "$\\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}$" },
    { q: "Direction Cosines relation?", a: "$l^2 + m^2 + n^2 = 1$" },
    { q: "Angle between two planes?", a: "$\\cos\\theta = \\frac{|n_1 \\cdot n_2|}{|n_1||n_2|}$" },
    { q: "Equation of plane in intercept form?", a: "$x/a + y/b + z/c = 1$" },
    { q: "Vector triple product $\\vec{a} \\times (\\vec{b} \\times \\vec{c})$?", a: "$(\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$" },

    // --- 7. STATISTICS & REASONING ---
    { q: "Variance $(\\sigma^2)$ formula?", a: "$\\frac{\\sum x_i^2}{n} - (\\bar{x})^2$" },
    { q: "Standard Deviation $(\\sigma)$?", a: "$\\sqrt{\\text{Variance}}$" },
    { q: "Coefficient of Variation?", a: "$\\frac{\\sigma}{\\bar{x}} \\times 100$" },
    { q: "Mathematical Reasoning: $p \\rightarrow q$ is equivalent to?", a: "$\\sim p \\lor q$" },
    { q: "Contrapositive of $p \\rightarrow q$?", a: "$\\sim q \\rightarrow \\sim p$" },

    // --- 8. MORE HIGH-WEIGHTAGE MIXED ---
    { q: "Sum of infinite GP?", a: "$a/(1-r)$ where $|r|<1$" },
    { q: "Sum of $n$ terms of $1^3+2^3...$?", a: "$[n(n+1)/2]^2$" },
    { q: "Formula involving Inclusion-Exclusion?", a: "$|A \\cup B \\cup C| = \\sum |A| - \\sum |A \\cap B| + |A \\cap B \\cap C|$" },
    { q: "Product of roots of $x^n-1=0$?", a: "$(-1)^{n-1}$" },
    { q: "Area of ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$?", a: "$\\pi ab$" },
    { q: "Distance between parallel planes?", a: "$\\frac{|d_1 - d_2|}{\\sqrt{a^2+b^2+c^2}}$" },
    { q: "Property: ${}^nC_r + {}^nC_{r-1}$?", a: "${}^{n+1}C_r$" },
    { q: "Coefficient of $x^r$ in $(1-x)^{-n}$?", a: "${}^{n+r-1}C_r$" },
    { q: "Matrices: $|kA|$ where A is $n \\times n$?", a: "$k^n |A|$" },
    { q: "Skew symmetric matrix determinant of odd order?", a: "$0$" },
    { q: "Condition for consistency of system $AX=B$?", a: "$rank(A) = rank(A|B)$" },
    { q: "Relation between Mean, Median, Mode?", a: "Mode = 3 Median - 2 Mean" },
    { q: "$\int \\sqrt{a^2-x^2} dx$?", a: "$\\frac{x}{2}\\sqrt{a^2-x^2} + \\frac{a^2}{2}\\sin^{-1}(x/a) + C$" },
    { q: "Volume of Tetrahedron?", a: "$\\frac{1}{6} |[\\vec{a} \\ \\vec{b} \\ \\vec{c}]|$" },
    { q: "Condition for lines to be coplanar?", a: "$[\\vec{a}_2 - \\vec{a}_1 \\ \\vec{b}_1 \\ \\vec{b}_2] = 0$" },
    { q: "Standard Deviation of first $n$ natural numbers?", a: "$\\sqrt{\\frac{n^2-1}{12}}$" },
    { q: "$\int e^{ax} \\sin bx dx$?", a: "$\\frac{e^{ax}}{a^2+b^2} (a\\sin bx - b\\cos bx) + C$" },
    { q: "Reflection of point $(h,k)$ in line $ax+by+c=0$?", a: "$\\frac{x-h}{a} = \\frac{y-k}{b} = -2\\frac{ah+bk+c}{a^2+b^2}$" }
];
