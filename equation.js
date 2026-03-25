const examQuestions = {
    physics: [
        { q: "A ball is thrown vertically upwards with a velocity u. It passes a point at height h at time t1 and t2. The height h is given by:", options: ["g t1 t2", "1/2 g t1 t2", "g (t1 + t2)", "1/2 g sqrt(t1 t2)"], correct: 1 },
        { q: "Two point charges +9e and +e are kept at a distance of 16 cm from each other. At what point between them should a third charge q be placed so that the system remains in equilibrium?", options: ["12 cm from +9e", "10 cm from +9e", "4 cm from +9e", "12 cm from +e"], correct: 0 },
        { q: "The de-Broglie wavelength of an electron accelerated through a potential difference of V volts is λ. If the potential difference is increased to 4V, the new wavelength will be:", options: ["2λ", "4λ", "λ/2", "λ/4"], correct: 2 },
        { q: "A solid sphere and a solid cylinder of same mass and radius roll down the same inclined plane without slipping. The ratio of their accelerations asphere/acylinder is:", options: ["14:15", "15:14", "5:4", "1:1"], correct: 1 },
        { q: "In an adiabatic process, the pressure of a gas is proportional to the cube of its absolute temperature. The ratio of specific heats Cp/Cv (γ) for the gas is:", options: ["3/2", "4/3", "5/3", "1.67"], correct: 0 },
        { q: "In a Wheatstone bridge, the four resistances are 10Ω, 10Ω, 10Ω and 11Ω. To balance the bridge, what resistance should be connected in parallel with the 11Ω resistor?", options: ["10Ω", "110Ω", "11Ω", "1Ω"], correct: 1 },
        { q: "A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 40 cm. The power of the combination is:", options: ["+2.5 D", "-2.5 D", "+5 D", "-5 D"], correct: 0 },
        { q: "If the mass of Earth remains constant but its radius shrinks by 1%, the acceleration due to gravity g on its surface would:", options: ["Decrease by 2%", "Increase by 2%", "Increase by 1%", "Decrease by 1%"], correct: 1 },
        { q: "A long straight wire carries a current of 35 A. What is the magnitude of the magnetic field B at a point 20 cm from the wire?", options: ["3.5 x 10^-5 T", "7 x 10^-5 T", "3.5 x 10^-4 T", "1.75 x 10^-5 T"], correct: 0 },
        { q: "The total energy of a particle executing simple harmonic motion of amplitude A is E. What is its kinetic energy when the displacement is A/2?", options: ["0.25 E", "0.5 E", "0.75 E", "E"], correct: 2 }
    ],
    chemistry: [
        { q: "The radius of the second Bohr orbit for H-atom is (Bohr radius a0 = 0.529 Å):", options: ["0.529 Å", "2.116 Å", "1.058 Å", "4.232 Å"], correct: 1 },
        { q: "Which of the following molecules has a non-zero dipole moment?", options: ["CO2", "BF3", "NH3", "CCl4"], correct: 2 },
        { q: "The van't Hoff factor (i) for a dilute aqueous solution of K2SO4 (assuming 100% dissociation) is:", options: ["1", "2", "3", "4"], correct: 2 },
        { q: "Which of the following carbocations is the most stable?", options: ["CH3CH2+", "(CH3)2CH+", "(CH3)3C+", "CH3+"], correct: 2 },
        { q: "For a spontaneous process at all temperatures, the conditions are:", options: ["ΔH > 0, ΔS > 0", "ΔH < 0, ΔS > 0", "ΔH < 0, ΔS < 0", "ΔH > 0, ΔS < 0"], correct: 1 },
        { q: "The IUPAC name of [Co(NH3)5Cl]Cl2 is:", options: ["Pentaaminechloridocobalt (III) chloride", "Chloridopentaaminecobalt (II) chloride", "Pentaaminechloridocobalt (II) chloride", "Pentaaminecobalt (III) trichloride"], correct: 0 },
        { q: "For the reaction PCl5(g) ⇌ PCl3(g) + Cl2(g), the relation between Kp and Kc is:", options: ["Kp = Kc", "Kp = Kc (RT)^-1", "Kp = Kc (RT)", "Kp = Kc (RT)^2"], correct: 2 },
        { q: "Which of the following noble gases is used in magnetic resonance imaging (MRI) as a cryogenic agent?", options: ["Helium", "Neon", "Argon", "Krypton"], correct: 0 },
        { q: "Phenol reacts with CHCl3 and aqueous NaOH to give salicylaldehyde. This reaction is known as:", options: ["Rosenmund reaction", "Reimer-Tiemann reaction", "Kolbe's reaction", "Etard reaction"], correct: 1 },
        { q: "The unit of molar conductivity (Λm) is:", options: ["S cm2 mol^-1", "S cm^-1 mol^-1", "S cm2 mol", "Ω cm2 mol^-1"], correct: 0 }
    ],
    maths: [
        { q: "If A = [[1,1],[0,1]], then An - An-1 is equal to:", options: ["I", "A", "[[0,1],[0,0]]", "[[0,n],[0,0]]"], correct: 2 },
        { q: "The sum of the first 20 terms of the series 5 + 11 + 19 + 29 + 41 + ... is:", options: ["3520", "3510", "3500", "3480"], correct: 0 },
        { q: "The value of lim x→0 (cos(sin x) - 1)/x^2 is:", options: ["1", "-1", "1/2", "-1/2"], correct: 3 },
        { q: "Two dice are thrown. If the sum of the numbers appearing on them is 7, then the probability that the number 2 has appeared at least once is:", options: ["1/3", "2/3", "1/6", "5/36"], correct: 0 },
        { q: "The length of the tangent from the point (5, 1) to the circle x^2 + y^2 + 6x - 4y - 3 = 0 is:", options: ["7", "sqrt(52)", "8", "sqrt(48)"], correct: 0 },
        { q: "The value of ∫[0 to π/2] (sqrt(sin x) / (sqrt(sin x) + sqrt(cos x))) dx is:", options: ["π/2", "π/4", "π/8", "0"], correct: 1 },
        { q: "If z = (sqrt(3) + i)/2, then z^69 is equal to:", options: ["-i", "i", "1", "-1"], correct: 0 },
        { q: "If a and b are unit vectors and θ is the angle between them, then |a - b| is:", options: ["cos(θ/2)", "2 sin(θ/2)", "sin(θ/2)", "2 cos(θ/2)"], correct: 1 },
        { q: "The solution of the differential equation dy/dx + y/x = x^2 is:", options: ["4xy = x^4 + C", "xy = x^3 + C", "3xy = x^3 + C", "y = x^2 + C"], correct: 0 },
        { q: "The maximum value of f(x) = x(1-x)^2 in the interval [0, 1] is:", options: ["4/27", "2/27", "1/27", "4/9"], correct: 0 }
    ]
};
