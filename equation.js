const questions = 
physics:[
        // Section A: MCQs
        {
            q: "Kinematics: A particle moves in a straight line with retardation proportional to its displacement x. The loss of kinetic energy for any displacement x is proportional to:",
            options: ["x", "e^x", "x^2", "log_e x"],
            correct: 2,
            solution: "Retardation $a = -kx \\Rightarrow v \\frac{dv}{dx} = -kx$. Integrating both sides: $\\int v dv = -\\int kx dx \\Rightarrow \\frac{1}{2}mv^2 \\propto x^2$. Hence, loss of KE is proportional to $x^2$."
        },
        {
            q: "NLM & Friction: A block of mass m is pushed against a vertical wall by a horizontal force F. If the coefficient of friction is $\\mu$, the minimum force F required to hold the block is:",
            options: ["mg/\\mu", "\\mu mg", "mg", "mg/(1+\\mu)"],
            correct: 0,
            solution: "Normal force $N = F$. Friction $f = \\mu N = \\mu F$. For the block to stay, $f = mg \\Rightarrow \\mu F = mg \\Rightarrow F = mg/\\mu$."
        },
        {
            q: "Rotational Motion: A thin uniform rod of length L and mass M is swinging freely about its end. Max angular speed is $\\omega$. Its CM rises to a max height of:",
            options: ["L^2\\omega^2/3g", "L^2\\omega^2/6g", "L^2\\omega^2/2g", "L^2\\omega^2/4g"],
            correct: 1,
            solution: "Conservation of energy: $\\frac{1}{2}I\\omega^2 = Mgh$. For a rod at end, $I = ML^2/3$. Thus, $\\frac{1}{2}(\\frac{ML^2}{3})\\omega^2 = Mgh \\Rightarrow h = \\frac{L^2\\omega^2}{6g}$."
        },
        {
            q: "Gravitation: If the distance between Earth and Sun becomes 1/4th of the present distance, the duration of the year will become:",
            options: ["1/4 times", "1/2 times", "1/8 times", "8 times"],
            correct: 2,
            solution: "Kepler's 3rd Law: $T^2 \\propto R^3$. If $R \\to R/4$, then $T \\to (1/4)^{3/2} = 1/8$ times."
        },
        {
            q: "Current Electricity: In a circuit, emf is E and internal resistance is r. Connected to variable resistance R, power to R is max when:",
            options: ["R = r", "R = r/2", "R = 2r", "R \\to 0"],
            correct: 0,
            solution: "Maximum Power Transfer Theorem states that power is maximum when external resistance equals internal resistance ($R = r$)."
        },
        // Section B: Numerical
        {
            q: "A body of mass 2 kg moves such that $x = t^3/3$. Work done by force in first 2 seconds is:",
            type: "numerical",
         option: ["16" , "17" , "15" , "20" ]
            correct: 16,
            solution: "$v = dx/dt = t^2$. At $t=0, v=0$. At $t=2, v=4$. $W = \\Delta KE = \\frac{1}{2}(2)(4^2 - 0) = 16J$."
        },
        {
            q: "Half-life is 20 mins. Time interval between 33% decay and 67% decay is:",
            type: "numerical",
           options: ["67" , "17" , "10" , "20"]
                correct: 20,
            solution: "33% decay means 67% left. 67% decay means 33% left. Since 33 is approx half of 67, this interval is one half-life = 20 mins."
        }
    ],

    chemistry: [
        // Section A: MCQs
        {
            q: "Atomic Structure: Ratio of shortest wavelength of Balmer series (He+) to shortest Lyman series (H-atom) is:",
            options: ["1:1", "4:1", "1:4", "2:1"],
            correct: 0,
            solution: "$\\lambda \\propto n_1^2/Z^2$. Balmer He+: $2^2/2^2 = 1$. Lyman H: $1^2/1^2 = 1$. Ratio is 1:1."
        },
        {
            q: "Chemical Bonding: Maximum number of lone pairs on central atom is in:",
            options: ["XeF4", "IF5", "ClO3-", "XeF2"],
            correct: 3,
            solution: "XeF2 has 3 lone pairs. XeF4 has 2. IF5 and ClO3- have 1 each."
        },
        {
            q: "Thermodynamics: $\\Delta H_{neut}$ of strong acid/base is -57.1 kJ. If HCN/NaOH is -12.1 kJ, $\\Delta H_{diss}$ of HCN is:",
            options: ["-45.0", "45.0", "69.2", "32.0"],
            correct: 1,
            solution: "$\\Delta H_{neut} = \\Delta H_{strong} + \\Delta H_{diss} \\Rightarrow -12.1 = -57.1 + \\Delta H_{diss} \\Rightarrow \\Delta H_{diss} = 45.0$ kJ/mol."
        },
        {
            q: "Aldehydes: Which of the following does NOT undergo Cannizzaro reaction?",
            options: ["HCHO", "C6H5CHO", "CCl3CHO", "CH3CHO"],
            correct: 3,
            solution: "CH3CHO has alpha-hydrogens, so it undergoes Aldol Condensation instead of Cannizzaro."
        },
        // Section B: Numerical
        {
            q: "The number of radial nodes in a 4p orbital is:",
            type: "numerical",
           options: ["1" , "2" , "3" , "4" ]
            correct: 2,
            solution: "Radial nodes $= n - l - 1 = 4 - 1 - 1 = 2$."
        },
        {
            q: "Number of oxygen atoms in one molecule of Pyrophosphoric acid (H4P2O7) is:",
            type: "numerical",
           option:["7" , "8" , "10" , "6"] 
                correct: 7,
            solution: "Formula is H4P2O7, which clearly contains 7 oxygen atoms."
        }
    ],

    maths: [
        // Section A: MCQs
        {
            q: "Function: The domain of $f(x) = \\sqrt{\\log_{0.4} (\\frac{x-1}{x+5})}$ is:",
            options: ["(1, \\infty)", "[1, \\infty)", "(-\\infty, -5) \\cup [1, \\infty)", "(-\\infty, -5) \\cup (1, \\infty)"],
            correct: 2,
            solution: "Log base < 1, so $\\frac{x-1}{x+5} \\le 1$. Solving this with $\\frac{x-1}{x+5} > 0$ gives $(-\\infty, -5) \\cup [1, \\infty)$."
        },
        {
            q: "Complex Numbers: Value of $(1+\\omega-\\omega^2)^7$ is:",
            options: ["128\\omega", "-128\\omega^2", "128\\omega^2", "-128\\omega"],
            correct: 1,
            solution: "$1+\\omega = -\\omega^2$. Expression: $(-2\\omega^2)^7 = -128\\omega^{14} = -128\\omega^2$."
        },
        {
            q: "Quadratic: Number of real solutions of $x^2 - 3|x| + 2 = 0$ is:",
            options: ["2", "1", "4", "3"],
            correct: 2,
            solution: "Factors: $(|x|-1)(|x|-2)=0 \\Rightarrow |x|=1, 2$. Solutions: $\\pm 1, \\pm 2$. Total = 4."
        },
        {
            q: "Probability: Variance of green balls (n=10, p=15/25) is:",
            options: ["2.4", "2.0", "3.0", "1.5"],
            correct: 0,
            solution: "$Var = npq = 10 \\times (15/25) \\times (10/25) = 10 \\times 0.6 \\times 0.4 = 2.4$."
        },
        // Section B: Numerical
        {
            q: "If $\\int_{0}^{k} \\frac{dx}{2+8x^2} = \\pi/16$, then k is:",
            type: "numerical",
         options: ["0.6" , "1" , "0.05" , "0.5"]
            correct: 0.5,
            solution: "Integral is $\\frac{1}{4}\\tan^{-1}(2x)$. $\\frac{1}{4}\\tan^{-1}(2k) = \\pi/16 \\Rightarrow \\tan^{-1}(2k) = \\pi/4 \\Rightarrow 2k=1 \\Rightarrow k=0.5$."
        },
        {
            q: "Value of $\\cos 20^\\circ \\cos 40^\\circ \\cos 80^\\circ$ is $1/n$. n is:",
            type: "numerical",
           options: ["60" , "73" , "80" , "8"]
                correct: 8,
            solution: "Standard identity: $\\cos A \\cos 2A \\cos 4A = \\frac{\\sin(2^3 A)}{2^3 \\sin A}$. For $A=20^\\circ$, it is $1/8$."
        }
    ]
};


