// Welcome to the Our Jee mains Master Hub Website
// Yahan aapke saare Maths ke Flashcards organized hain

const mathsCards = [
    // 1. Number Systems & Algebra
    { q: "AP: $n^{th}$ term formula?", a: "$a_n = a + (n - 1)d$" },
    { q: "AP: Sum of $n$ terms ($S_n$)?", a: "$S_n = \\frac{n}{2} [2a + (n - 1)d]$ <br> or <br> $S_n = \\frac{n}{2} (a + l)$" },
    { q: "Quadratic Equation: Standard Form?", a: "$ax^2 + bx + c = 0$" },
    { q: "Quadratic Formula ($x$)?", a: "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$" },
    { q: "Discriminant ($D$) and Nature of Roots?", a: "$D = b^2 - 4ac$ <br> If $D>0$: Real & Distinct <br> If $D=0$: Real & Equal <br> If $D<0$: Imaginary" },

    // 2. Coordinate Geometry
    { q: "Distance Formula?", a: "$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$" },
    { q: "Section Formula (Internal)?", a: "$P(x,y) = \\left( \\frac{mx_2 + nx_1}{m+n}, \\frac{my_2 + ny_1}{m+n} \\right)$" },
    { q: "Midpoint Formula?", a: "$M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right)$" },
    { q: "Centroid of a Triangle ($G$)?", a: "$G = \\left( \\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3} \\right)$" },
    { q: "Area of Triangle (Coordinates)?", a: "$\\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$" },

    // 4. Geometry (Circles & Triangles)
    { q: "Circle: Circumference & Area?", a: "Circumference: $2\\pi r$ <br> Area: $\\pi r^2$" },
    { q: "Length of Arc?", a: "$\\text{Length} = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$" },
    { q: "Area of Sector?", a: "$\\text{Area} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$" },
    { q: "Pythagoras Theorem?", a: "$H^2 = P^2 + B^2$" },

    // 5. Mensuration (Surface Areas & Volumes)
    { q: "Cuboid: TSA & Volume?", a: "TSA: $2(lb + bh + hl)$ <br> Volume: $l \\times b \\times h$" },
    { q: "Cylinder: CSA & Volume?", a: "CSA: $2\\pi rh$ <br> Volume: $\\pi r^2 h$" },
    { q: "Cone: CSA & Volume?", a: "CSA: $\\pi rl$ (where $l = \\sqrt{r^2+h^2}$) <br> Volume: $\\frac{1}{3} \\pi r^2 h$" },
    { q: "Sphere: Surface Area & Volume?", a: "Area: $4\\pi r^2$ <br> Volume: $\\frac{4}{3} \\pi r^3$" },
    { q: "Hemisphere: CSA & TSA?", a: "CSA: $2\\pi r^2$ <br> TSA: $3\\pi r^2$" },

    // 6. Statistics & Probability
    { q: "Mean (Direct Method)?", a: "$\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$" },
    { q: "Median Formula?", a: "$l + \\left( \\frac{\\frac{n}{2} - cf}{f} \\right) \\times h$" },
    { q: "Mode Formula?", a: "$l + \\left( \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\right) \\times h$" },
    { q: "Empirical Formula (Relation)?", a: "$3 \\times \\text{Median} = \\text{Mode} + 2 \\times \\text{Mean}$" },
    { q: "Probability $P(E)$?", a: "$P(E) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of outcomes}}$" }
];
