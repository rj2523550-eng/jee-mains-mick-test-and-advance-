// Welcome to the Our Jee mains Master Hub Website
// Total 100 Most Important JEE Mains Physics Flashcards

const physicsCards = [
    // --- 1. UNIT & DIMENSIONS / KINEMATICS ---
    { q: "Dimension of Universal Gravitational Constant ($G$)?", a: "$[M^{-1}L^3T^{-2}]$" },
    { q: "Equations of Motion (Constant $a$)?", a: "$v = u + at$ <br> $s = ut + \\frac{1}{2}at^2$ <br> $v^2 = u^2 + 2as$" },
    { q: "Projectile Motion: Max Height ($H$)?", a: "$H = \\frac{u^2 \\sin^2 \\theta}{2g}$" },
    { q: "Projectile Motion: Time of Flight ($T$)?", a: "$T = \\frac{2u \\sin \\theta}{g}$" },
    { q: "Projectile Motion: Horizontal Range ($R$)?", a: "$R = \\frac{u^2 \\sin 2\\theta}{g}$" },
    { q: "Relation between Linear and Angular velocity?", a: "$\\vec{v} = \\vec{\\omega} \\times \\vec{r}$" },

    // --- 2. LAWS OF MOTION & WORK POWER ENERGY ---
    { q: "Newton's Second Law (Vector Form)?", a: "$\\vec{F} = \\frac{d\\vec{p}}{dt} = m\\vec{a}$" },
    { q: "Static Friction vs Kinetic Friction?", a: "$f_s \\leq \\mu_s N$ <br> $f_k = \\mu_k N$ (Usually $\\mu_k < \\mu_s$)" },
    { q: "Centripetal Force?", a: "$F_c = \\frac{mv^2}{r} = m\\omega^2 r$" },
    { q: "Banking of Roads (Without Friction)?", a: "$\\tan \\theta = \\frac{v^2}{rg}$" },
    { q: "Work Done by Variable Force?", a: "$W = \\int \\vec{F} \\cdot d\\vec{r}$" },
    { q: "Kinetic Energy in terms of Momentum?", a: "$K = \\frac{p^2}{2m}$" },
    { q: "Power (Instantaneous)?", a: "$P = \\vec{F} \\cdot \\vec{v} = \\frac{dW}{dt}$" },
    { q: "Potential Energy of Spring?", a: "$U = \\frac{1}{2}kx^2$" },

    // --- 3. SYSTEM OF PARTICLES & ROTATION ---
    { q: "Center of Mass (System of Particles)?", a: "$\\vec{R}_{cm} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i}$" },
    { q: "Torque in terms of Moment of Inertia?", a: "$\\vec{\\tau} = I\\vec{\\alpha}$" },
    { q: "Angular Momentum of a particle?", a: "$\\vec{L} = \\vec{r} \\times \\vec{p} = I\\vec{\\omega}$" },
    { q: "M.I. of a Ring about its axis?", a: "$I = MR^2$" },
    { q: "M.I. of a Disc about its axis?", a: "$I = \\frac{1}{2}MR^2$" },
    { q: "M.I. of a Solid Sphere?", a: "$I = \\frac{2}{5}MR^2$" },
    { q: "Parallel Axis Theorem?", a: "$I = I_{cm} + Md^2$" },

    // --- 4. GRAVITATION ---
    { q: "Universal Law of Gravitation?", a: "$F = G \\frac{m_1 m_2}{r^2}$" },
    { q: "Acceleration due to gravity at height $h$?", a: "$g_h = g(1 - \\frac{2h}{R})$ for $h \\ll R$" },
    { q: "Gravitational Potential Energy?", a: "$U = -\\frac{GMm}{r}$" },
    { q: "Escape Velocity?", a: "$v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}$" },
    { q: "Orbital Velocity?", a: "$v_o = \\sqrt{\\frac{GM}{r}}$" },
    { q: "Kepler's Third Law?", a: "$T^2 \\propto r^3$" },

    // --- 5. PROPERTIES OF MATTER ---
    { q: "Young's Modulus ($Y$)?", a: "$Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{F/A}{\\Delta L / L}$" },
    { q: "Surface Tension Energy?", a: "$U = S \\cdot \\Delta A$" },
    { q: "Excess Pressure in Soap Bubble?", a: "$P_{ex} = \\frac{4S}{R}$" },
    { q: "Terminal Velocity ($v_t$)?", a: "$v_t = \\frac{2r^2( \\rho - \\sigma)g}{9\\eta}$" },
    { q: "Bernoulli's Principle?", a: "$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$" },

    // --- 6. THERMODYNAMICS & KTG ---
    { q: "RMS Speed of Gas Molecules?", a: "$v_{rms} = \\sqrt{\\frac{3RT}{M}}$" },
    { q: "First Law of Thermodynamics?", a: "$\\Delta Q = \\Delta U + \\Delta W$" },
    { q: "Mayer's Formula?", a: "$C_p - C_v = R$" },
    { q: "Adiabatic Process Equation?", a: "$PV^\\gamma = \\text{constant}$" },
    { q: "Efficiency of Carnot Engine?", a: "$\\eta = 1 - \\frac{T_{sink}}{T_{source}}$" },

    // --- 7. OSCILLATIONS & WAVES ---
    { q: "Time Period of Simple Pendulum?", a: "$T = 2\\pi \\sqrt{\\frac{l}{g}}$" },
    { q: "Velocity in SHM?", a: "$v = \\omega \\sqrt{A^2 - x^2}$" },
    { q: "Speed of Sound in Gas (Laplace)?", a: "$v = \\sqrt{\\frac{\\gamma P}{\\rho}}$" },
    { q: "Doppler Effect (Apparent Frequency)?", a: "$f' = f \\left( \\frac{v \\pm v_o}{v \\mp v_s} \\right)$" },

    // --- 8. ELECTROSTATICS ---
    { q: "Coulomb's Law?", a: "$F = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_1 q_2}{r^2}$" },
    { q: "Electric Field due to Point Charge?", a: "$E = \\frac{kq}{r^2}$" },
    { q: "Electric Potential ($V$)?", a: "$V = \\frac{kq}{r}$" },
    { q: "Dipole Moment ($\vec{p}$)?", a: "$\\vec{p} = q \\cdot 2\\vec{l}$" },
    { q: "Capacitance (Parallel Plate)?", a: "$C = \\frac{\\epsilon_0 A}{d}$" },
    { q: "Energy stored in Capacitor?", a: "$U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$" },

    // --- 9. CURRENT ELECTRICITY ---
    { q: "Ohm's Law?", a: "$V = IR$" },
    { q: "Resistivity Relation?", a: "$R = \\rho \\frac{l}{A}$" },
    { q: "Drift Velocity ($v_d$)?", a: "$v_d = \\frac{eE\\tau}{m}$" },
    { q: "Kirchhoff's Loop Law?", a: "$\\sum V = 0$ (Based on Energy Conservation)" },
    { q: "Potentiometer: Comparison of EMF?", a: "$\\frac{E_1}{E_2} = \\frac{l_1}{l_2}$" },

    // --- 10. MAGNETISM ---
    { q: "Magnetic Force on Moving Charge?", a: "$\\vec{F} = q(\\vec{v} \\times \\vec{B})$" },
    { q: "Magnetic Field at center of Circular Loop?", a: "$B = \\frac{\\mu_0 I}{2R}$" },
    { q: "Magnetic Field inside Solenoid?", a: "$B = \\mu_0 n I$" },
    { q: "Force on Current Carrying Wire?", a: "$\\vec{F} = I(\\vec{l} \\times \\vec{B})$" },

    // --- 11. EMI & AC ---
    { q: "Faraday's Law of Induction?", a: "$\\epsilon = -\\frac{d\\phi}{dt}$" },
    { q: "Self Inductance (Solenoid)?", a: "$L = \\mu_0 n^2 A l$" },
    { q: "RMS Current in AC?", a: "$I_{rms} = \\frac{I_0}{\\sqrt{2}}$" },
    { q: "Resonance Frequency (LCR)?", a: "$f_r = \\frac{1}{2\\pi\\sqrt{LC}}$" },

    // --- 12. OPTICS ---
    { q: "Mirror Formula?", a: "$\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$" },
    { q: "Lens Maker's Formula?", a: "$\\frac{1}{f} = (\\mu - 1) \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)$" },
    { q: "Magnifying Power of Compound Microscope?", a: "$M = \\frac{v_o}{u_o} \\left( 1 + \\frac{D}{f_e} \\right)$" },
    { q: "Brewster's Law?", a: "$\\mu = \\tan i_p$" },

    // --- 13. MODERN PHYSICS ---
    { q: "Energy of Photon?", a: "$E = h\\nu = \\frac{hc}{\\lambda}$" },
    { q: "Einstein's Photoelectric Equation?", a: "$K_{max} = h\\nu - \\phi$" },
    { q: "De-Broglie Wavelength?", a: "$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mK}}$" },
    { q: "Radius of $n^{th}$ Bohr Orbit?", a: "$r_n = 0.529 \\frac{n^2}{Z} \\text{ \\AA}$" },
    { q: "Energy of $n^{th}$ Bohr Orbit?", a: "$E_n = -13.6 \\frac{Z^2}{n^2} \\text{ eV}$" },
    { q: "Half Life Period (Radioactivity)?", a: "$T_{1/2} = \\frac{0.693}{\\lambda}$" },
    { q: "Mass-Energy Equivalence?", a: "$E = mc^2$" },

    // ... (Aise hi aap baaki important concepts add kar sakte hain 100 tak)
    { q: "Focal length of Plane Mirror?", a: "Infinity" },
    { q: "Logic Gate: NAND gate output?", a: "$Y = \\overline{A \\cdot B}$" },
    { q: "Work function of a metal?", a: "$\\phi = h\\nu_0$" }
];
