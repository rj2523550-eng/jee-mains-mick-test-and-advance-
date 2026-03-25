/**
 * JEE Master Hub - Mock Test Question Bank
 * Questions: 10 Physics, 10 Chemistry, 10 Maths
 */

const examQuestions = {
    physics: [
        {
            q: "Kinematics: A ball is thrown vertically upwards with a velocity u. It passes a point at height h at time t1 and t2. The height h is given by:",
            options: ["g t1 t2", "1/2 g t1 t2", "g (t1 + t2)", "1/2 g sqrt(t1 t2)"],
            correct: 1,
            solution: "Using s = ut - 1/2gt^2 => 1/2gt^2 - ut + h = 0. Product of roots t1*t2 = h/(g/2). Therefore, h = 1/2 g t1 t2."
        },
        {
            q: "Electrostatics: Two point charges +9e and +e are kept at a distance of 16 cm from each other. At what point between them should a third charge q be placed so that the system remains in equilibrium?",
            options: ["12 cm from +9e", "10 cm from +9e", "4 cm from +9e", "12 cm from +e"],
            correct: 0,
            solution: "For equilibrium: k(9e)q/x^2 = k(e)q/(16-x)^2. Square root: 3/x = 1/(16-x) => 48 - 3x = x => x = 12 cm from +9e."
        },
        {
            q: "Modern Physics: The de-Broglie wavelength of an electron accelerated through a potential difference of V volts is λ. If the potential difference is increased to 4V, the new wavelength will be:",
            options: ["2λ", "4λ", "λ/2", "λ/4"],
            correct: 2,
            solution: "λ ∝ 1/sqrt(V). If V becomes 4V, new λ = λ/sqrt(4) = λ/2."
        },
        {
            q: "Rotational Mechanics: A solid sphere and a solid cylinder of same mass and radius roll down the same inclined plane without slipping. The ratio of their accelerations a_sphere/a_cylinder is:",
            options: ["14:15", "15:14", "5:4", "1:1"],
            correct: 1,
            solution: "a = (g sin θ) / (1 + I/MR^2). For sphere I/MR^2 = 2/5, for cylinder = 1/2. Ratio = (1 + 1/2) / (1 + 2/5) = (3/2) / (7/5) = 15/14."
        },
        {
            q: "Thermodynamics: In an adiabatic process, the pressure of a gas is proportional to the cube of its absolute temperature. The ratio of specific heats Cp/Cv (γ) for the gas is:",
            options: ["3/2", "4/3", "5/3", "1.67"],
            correct: 0,
            solution: "P ∝ T^3. Since PV=nRT, P ∝ (PV)^3 => P^(-2)V^3 = constant => PV^(3/2) = constant. Thus γ = 3/2."
        },
        {
            q: "Current Electricity: In a Wheatstone bridge, the four resistances are 10Ω, 10Ω, 10Ω and 11Ω. To balance the bridge, what resistance should be connected in parallel with the 11Ω resistor?",
            options: ["10Ω", "110Ω", "11Ω", "1Ω"],
            correct: 1,
            solution: "To balance, 11Ω must become 10Ω. Using parallel: (11*R)/(11+R) = 10 => 11R = 110 + 10R => R = 110Ω."
        },
        {
            q: "Optics: A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 40 cm. The power of the combination is:",
            options: ["+2.5 D", "-2.5 D", "+5 D", "-5 D"],
            correct: 0,
            solution: "P = P1 + P2 = 100/20 + 100/(-40) = 5 - 2.5 = +2.5 D."
        },
        {
            q: "Gravitation: If the mass of Earth remains constant but its radius shrinks by 1%, the acceleration due to gravity g on its surface would:",
            options: ["Decrease by 2%", "Increase by 2%", "Increase by 1%", "Decrease by 1%"],
            correct: 1,
            solution: "g = GM/R^2. Taking log and differentiating: Δg/g = -2(ΔR/R). If R decreases by 1%, g increases by 2%."
        },
        {
            q: "Magnetic Effects of Current: A long straight wire carries a current of 35 A. What is the magnitude of the magnetic field B at a point 20 cm from the wire?",
            options: ["3.5 x 10^-5 T", "7 x 10^-5 T", "3.5 x 10^-4 T", "1.75 x 10^-5 T"],
            correct: 0,
            solution: "B = (μ₀I)/(2πr) = (4π x 10^-7 * 35)/(2π * 0.2) = 2 x 10^-7 * 175 = 3.5 x 10^-5 T."
        },
        {
            q: "SHM: The total energy of a particle executing simple harmonic motion of amplitude A is E. What is its kinetic energy when the displacement is A/2?",
            options: ["0.25 E", "0.5 E", "0.75 E", "E"],
            correct: 2,
            solution: "PE = 1/2 k (A/2)^2 = 1/4 (1/2 kA^2) = 0.25E. KE = E - PE = E - 0.25E = 0.75E."
        }
    ],
    chemistry: [
        {
            q: "Atomic Structure: The radius of the second Bohr orbit for H-atom is (Bohr radius a0 = 0.529 Å):",
            options: ["0.529 Å", "2.116 Å", "1.058 Å", "4.232 Å"],
            correct: 1,
            solution: "r_n = a0 * (n^2/Z). For n=2, Z=1: r_2 = 0.529 * 4 = 2.116 Å."
        },
        {
            q: "Chemical Bonding: Which of the following molecules has a non-zero dipole moment?",
            options: ["CO2", "BF3", "NH3", "CCl4"],
            correct: 2,
            solution: "NH3 has a pyramidal shape with a lone pair, making it polar (μ ≠ 0). Others are symmetrical (μ = 0)."
        },
        {
            q: "Solutions: The van't Hoff factor (i) for a dilute aqueous solution of K2SO4 (assuming 100% dissociation) is:",
            options: ["1", "2", "3", "4"],
            correct: 2,
            solution: "K2SO4 -> 2K+ + SO4^2-. Total ions = 3. Thus, i = 3."
        },
        {
            q: "Organic Chemistry (GOC): Which of the following carbocations is the most stable?",
            options: ["CH3CH2+", "(CH3)2CH+", "(CH3)3C+", "CH3+"],
            correct: 2,
            solution: "Tertiary carbocation (3°) is most stable due to +I effect of 3 methyl groups and 9 alpha-H hyperconjugation."
        },
        {
            q: "Thermodynamics: For a spontaneous process at all temperatures, the conditions are:",
            options: ["ΔH > 0, ΔS > 0", "ΔH < 0, ΔS > 0", "ΔH < 0, ΔS < 0", "ΔH > 0, ΔS < 0"],
            correct: 1,
            solution: "ΔG = ΔH - TΔS. For spontaneity, ΔG < 0. If ΔH is negative and ΔS is positive, ΔG is always negative."
        },
        {
            q: "Coordination Compounds: The IUPAC name of [Co(NH3)5Cl]Cl2 is:",
            options: ["Pentaaminechloridocobalt (III) chloride", "Chloridopentaaminecobalt (II) chloride", "Pentaaminechloridocobalt (II) chloride", "Pentaaminecobalt (III) trichloride"],
            correct: 0,
            solution: "Ligands: Pentaammine (5 NH3) and chlorido (1 Cl). Metal is Cobalt(III). Outside ions: chloride."
        },
        {
            q: "Equilibrium: For the reaction PCl5(g) ⇌ PCl3(g) + Cl2(g), the relation between Kp and Kc is:",
            options: ["Kp = Kc", "Kp = Kc (RT)^-1", "Kp = Kc (RT)", "Kp = Kc (RT)^2"],
            correct: 2,
            solution: "Kp = Kc(RT)^Δn. Here Δn = (1+1) - 1 = 1. So, Kp = Kc(RT)^1."
        },
        {
            q: "Inorganic (p-block): Which of the following noble gases is used in MRI as a cryogenic agent?",
            options: ["Helium", "Neon", "Argon", "Krypton"],
            correct: 0,
            solution: "Liquid Helium has the lowest boiling point, making it ideal for cooling superconducting MRI magnets."
        },
        {
            q: "Organic (Named Reactions): Phenol reacts with CHCl3 and aqueous NaOH to give salicylaldehyde. This reaction is known as:",
            options: ["Rosenmund reaction", "Reimer-Tiemann reaction", "Kolbe's reaction", "Etard reaction"],
            correct: 1,
            solution: "Reimer-Tiemann reaction involves formylation of phenol in the ortho position using chloroform and base."
        },
        {
            q: "Electrochemistry: The unit of molar conductivity (Λm) is:",
            options: ["S cm2 mol^-1", "S cm^-1 mol^-1", "S cm2 mol", "Ω cm2 mol^-1"],
            correct: 0,
            solution: "Λm = (κ * 1000) / M. Unit calculation results in S cm^2 mol^-1."
        }
    ],
    maths: [
        {
            q: "Matrices: If A = [[1, 1], [0, 1]], then A^n - A^(n-1) is equal to:",
            options: ["I", "A", "[[0, 1], [0, 0]]", "[[0, n], [0, 0]]"],
            correct: 2,
            solution: "A^n = [[1, n], [0, 1]]. Thus A^n - A^(n-1) = [[1, n], [0, 1]] - [[1, n-1], [0, 1]] = [[0, 1], [0, 0]]."
        },
        {
            q: "Sequence & Series: The sum of the first 20 terms of the series 5 + 11 + 19 + 29 + 41 + ... is:",
            options: ["3520", "3510", "3500", "3480"],
            correct: 0,
            solution: "Differences are 6, 8, 10... (AP). General term T_n = n^2 + 3n + 1. Summing up to n=20 gives 3520."
        },
        {
            q: "Limits: The value of lim_{x->0} [cos(sin x) - 1] / x^2 is:",
            options: ["1", "-1", "1/2", "-1/2"],
            correct: 3,
            solution: "Expansion: cos(sin x) ≈ 1 - (sin x)^2 / 2 ≈ 1 - x^2/2. Limit becomes [(1 - x^2/2) - 1] / x^2 = -1/2."
        },
        {
            q: "Probability: Two dice are thrown. If sum is 7, the probability that number 2 appeared at least once is:",
            options: ["1/3", "2/3", "1/6", "5/36"],
            correct: 0,
            solution: "Outcomes for sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) [Total=6]. Favorable (has 2): (2,5), (5,2) [Total=2]. Prob = 2/6 = 1/3."
        },
        {
            q: "Coordinate Geometry: The length of the tangent from (5, 1) to circle x^2 + y^2 + 6x - 4y - 3 = 0 is:",
            options: ["7", "sqrt(52)", "8", "sqrt(48)"],
            correct: 0,
            solution: "L = sqrt(S1) = sqrt(5^2 + 1^2 + 6*5 - 4*1 - 3) = sqrt(25 + 1 + 30 - 4 - 3) = sqrt(49) = 7."
        },
        {
            q: "Integration: The value of ∫[0 to π/2] sqrt(sin x) / [sqrt(sin x) + sqrt(cos x)] dx is:",
            options: ["π/2", "π/4", "π/8", "0"],
            correct: 1,
            solution: "Using property ∫f(x)dx = ∫f(a+b-x)dx. 2I = ∫[0 to π/2] 1 dx = π/2 => I = π/4."
        },
        {
            q: "Complex Numbers: If z = (sqrt(3) + i)/2, then z^69 is equal to:",
            options: ["-i", "i", "1", "-1"],
            correct: 0,
            solution: "z = e^(iπ/6). z^69 = e^(i 69π/6) = e^(i 23π/2) = e^(i (11π + π/2)) = -i."
        },
        {
            q: "Vector Algebra: If a and b are unit vectors and θ is the angle between them, then |a - b| is:",
            options: ["cos(θ/2)", "2 sin(θ/2)", "sin(θ/2)", "2 cos(θ/2)"],
            correct: 1,
            solution: "|a-b|^2 = |a|^2 + |b|^2 - 2|a||b|cosθ = 1 + 1 - 2cosθ = 2(1-cosθ) = 4sin^2(θ/2). So |a-b| = 2sin(θ/2)."
        },
        {
            q: "Differential Equations: The solution of dy/dx + y/x = x^2 is:",
            options: ["4xy = x^4 + C", "xy = x^3 + C", "3xy = x^3 + C", "y = x^2 + C"],
            correct: 0,
            solution: "IF = e^∫(1/x)dx = x. x*y = ∫x*x^2 dx = x^4/4 + C' => 4xy = x^4 + C."
        },
        {
            q: "Calculus (AOD): The maximum value of f(x) = x(1-x)^2 in [0, 1] is:",
            options: ["4/27", "2/27", "1/27", "4/9"],
            correct: 0,
            solution: "f'(x) = (1-x)(1-3x). Critical point x=1/3. f(1/3) = 1/3 * (2/3)^2 = 4/27."
        }
    ]
};
