// Welcome to the Our Jee mains Master Hub Website
// Physics Flashcards Data File

const physicsCards = [
    // 1. Mechanics
    { q: "Equations of Motion (Constant Acceleration)?", a: "$v = u + at$ <br> $s = ut + \\frac{1}{2}at^2$ <br> $v^2 = u^2 + 2as$" },
    { q: "Work-Energy Theorem?", a: "Work done by all forces = Change in Kinetic Energy <br> $W_{\\text{all}} = K_f - K_i$" },
    { q: "Centripetal Acceleration and Force?", a: "$a_c = \\frac{v^2}{r} = \\omega^2 r$ <br> $F_c = \\frac{mv^2}{r}$" },
    { q: "Moment of Inertia (Ring vs Disc)?", a: "Ring: $I = MR^2$ <br> Disc: $I = \\frac{1}{2}MR^2$" },
    { q: "Escape Velocity on Earth?", a: "$v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR} \\approx 11.2 \\text{ km/s}$" },

    // 2. Heat & Thermodynamics
    { q: "First Law of Thermodynamics?", a: "$\\Delta Q = \\Delta U + \\Delta W$ <br> (Heat supplied = Change in internal energy + Work done)" },
    { q: "Efficiency of Carnot Engine?", a: "$\\eta = 1 - \\frac{T_2}{T_1}$ <br> (where $T_1$ is Source and $T_2$ is Sink temp in Kelvin)" },
    { q: "Root Mean Square (RMS) Velocity?", a: "$v_{rms} = \\sqrt{\\frac{3RT}{M}}$" },

    // 3. Electrostatics & Magnetism
    { q: "Coulomb's Law (Force)?", a: "$F = k \\frac{q_1 q_2}{r^2}$ <br> where $k = \\frac{1}{4\\pi\\epsilon_0}$" },
    { q: "Gauss's Law in Electrostatics?", a: "$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{in}}{\\epsilon_0}$" },
    { q: "Capacitance of Parallel Plate Capacitor?", a: "$C = \\frac{\\epsilon_0 A}{d}$" },
    { q: "Biot-Savart Law (Magnetic Field)?", a: "$d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\hat{r})}{r^2}$" },

    // 4. Optics & Modern Physics
    { q: "Lens Maker's Formula?", a: "$\\frac{1}{f} = (\\mu - 1) \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)$" },
    { q: "Einstein's Photoelectric Equation?", a: "$K_{max} = h\nu - \phi$ <br> (Max KE = Photon energy - Work function)" },
    { q: "De-Broglie Wavelength?", a: "$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$" },
    { q: "Radioactive Decay Law?", a: "$N = N_0 e^{-\\lambda t}$" }
];
