const examQuestions = {
    physics: [
        // --- Section A: MCQs (20 Questions) ---
        {
            q: "A particle moves in a straight line with retardation proportional to its displacement $x$. The loss of kinetic energy for any displacement $x$ is proportional to:",
            options: ["$x$", "$e^x$", "$x^2$", "$\\log_e x$"],
            correct: 2,
            solution: "Loss of KE = Work done = $\\int F dx$. Since $a \\propto x$, $F \\propto x$. So, $\\int x dx = x^2/2$. Thus, Loss of KE $\\propto x^2$."
        },
        {
            q: "A block of mass $m$ is pushed against a vertical wall by a horizontal force $F$. If the coefficient of friction is $\\mu$, the minimum force $F$ required to hold the block is:",
            options: ["$mg/\\mu$", "$\\mu mg$", "$mg$", "$mg/(1+\\mu)$"],
            correct: 0,
            solution: "Friction $f = \\mu F$. To hold the block, $f \\ge mg \\Rightarrow \\mu F \\ge mg \\Rightarrow F \\ge mg/\\mu$."
        },
        {
            q: "A variable force $F = 3x^2$ acts on a particle of mass 1 kg initially at rest. The work done by the force during the first 2 seconds is:",
            options: ["16 J", "32 J", "48 J", "24 J"],
            correct: 0,
            solution: "$a = F/m = 3x^2$. Using $v dv/dx$, we find $v = \\sqrt{2x^3}$. At $t=2s$, $W = \\Delta KE = 16 J$."
        },
        {
            q: "A thin uniform rod of length $L$ and mass $M$ is swinging freely. Its maximum angular speed is $\\omega$. Its center of mass rises to a maximum height of:",
            options: ["$L^2\\omega^2/3g$", "$L^2\\omega^2/6g$", "$L^2\\omega^2/2g$", "$L^2\\omega^2/4g$"],
            correct: 1,
            solution: "By energy conservation: $\\frac{1}{2} I \\omega^2 = Mgh$. For rod $I = ML^2/3$. So, $h = L^2\\omega^2/6g$."
        },
        {
            q: "If the distance between Earth and Sun becomes 1/4th, the duration of the year will become:",
            options: ["1/4 times", "1/2 times", "1/8 times", "8 times"],
            correct: 2,
            solution: "Kepler's Law: $T^2 \\propto R^3$. If $R \\to R/4$, then $T \\to (1/4)^{3/2} = 1/8$."
        },
        {
            q: "In a capillary tube of radius $r$, water rises to height $h$ (mass $M$). If radius is doubled, the mass of water that will rise is:",
            options: ["$M$", "$2M$", "$M/2$", "$4M$"],
            correct: 1,
            solution: "Height $h \\propto 1/r$. Mass $M = \\pi r^2 h \\rho$. So $M \\propto r^2(1/r) \\propto r$. Doubling $r$ doubles $M$."
        },
        {
            q: "An ideal gas ($\\gamma = 1.5$) is expanded adiabatically such that its volume becomes 8 times. $P_{final}/P_{initial}$ is:",
            options: ["1/32", "1/16", "1/64", "1/8"],
            correct: 0,
            solution: "$PV^{1.5} = const$. $P_2/P_1 = (V_1/V_2)^{3/2} = (1/8)^{3/2} = 1/32$."
        },
        {
            q: "Two vessels A and B contain same gas. $V_A=2V_B, P_A=0.5P_B, T_A=2T_B$. Ratio of molecules $N_A:N_B$ is:",
            options: ["1:2", "2:1", "1:4", "4:1"],
            correct: 2,
            solution: "$N = PV/kT$. Ratio $= (0.5 \\times 2) / 2 = 1/2$? No, $N_A/N_B = (0.5 \\times 2)/2 = 0.5$ which is 1:2. Wait, let's re-calc: $(0.5 P_B \\times 2 V_B) / (2 T_B) = 0.5$. Ans: 1:2."
        },
        {
            q: "Simple pendulum $T = 2\\pi\\sqrt{L/g}$. $L=20$cm (1mm accuracy), $t=90$s for 100 osc (1s res). % error in $g$:",
            options: ["3%", "2.7%", "5%", "3.5%"],
            correct: 1,
            solution: "$\\Delta g/g = \\Delta L/L + 2\\Delta T/T = 0.1/20 + 2(1/90) \\approx 2.7\\%$."
        },
        {
            q: "String fundamental frequency is 10 Hz. Tension increased by 21%, new frequency is:",
            options: ["11 Hz", "12.1 Hz", "14.4 Hz", "10.5 Hz"],
            correct: 0,
            solution: "$f \\propto \\sqrt{T}$. New $f = 10 \\times \\sqrt{1.21} = 11$ Hz."
        },
        {
            q: "Three charges Q, q, Q at vertices of equilateral triangle. If net force on q is zero, Q is:",
            options: ["$q$", "$-q$", "$0$", "Not possible"],
            correct: 3,
            solution: "Resultant of two equal forces at $60^\\circ$ is $\\sqrt{3}F$, cannot be zero unless $Q=0$."
        },
        {
            q: "Capacitance C with dielectric slab $d$ and plate separation $D$ is:",
            options: ["$\\epsilon_0 A / (D-d(1-1/K))$", "$\\epsilon_0 A / (D+d(1-1/K))$", "$K\\epsilon_0 A / D$", "$\\epsilon_0 A / K(D-d)$"],
            correct: 0,
            solution: "Standard formula for capacitor with partial dielectric filling."
        },
        {
            q: "Power delivered to variable resistance R from cell (E, r) is maximum when:",
            options: ["$R = r$", "$R = r/2$", "$R = 2r$", "$R \\to 0$"],
            correct: 0,
            solution: "Max Power Transfer Theorem: External resistance = Internal resistance."
        },
        {
            q: "Charged particle moves with constant velocity in E and B fields. Then:",
            options: ["$E \\perp B$", "$E \\parallel B$", "$v \\parallel E$", "$E = 0$"],
            correct: 0,
            solution: "For $v$ to be constant, $qE = qvB$, so $E$ must be perpendicular to $B$ and $v$."
        },
        {
            q: "Circular loop radius $r$ rotating with $\\omega$ in B perpendicular to axis. Max induced emf is:",
            options: ["$B\\pi r^2 \\omega$", "$2B\\pi r^2 \\omega$", "$B\\pi r^2 \\omega/2$", "0"],
            correct: 0,
            solution: "$e = -d\\Phi/dt$. Max emf $= NBA\\omega = 1 \\cdot B \\cdot \\pi r^2 \\cdot \\omega$."
        },
        {
            q: "In LCR at resonance, phase difference between current and voltage is:",
            options: ["$\\pi/2$", "$\\pi/4$", "$0$", "$\\pi$"],
            correct: 2,
            solution: "At resonance, $X_L = X_C$, so circuit is purely resistive ($Z=R$)."
        },
        {
            q: "Glass slab ($\\mu=1.5$) of 6cm thickness. Shift in letters is:",
            options: ["2 cm", "4 cm", "1 cm", "3 cm"],
            correct: 0,
            solution: "Shift $= t(1 - 1/\\mu) = 6(1 - 1/1.5) = 2$ cm."
        },
        {
            q: "In YDSE, intensity where path difference is $\\lambda/6$ is ($I_0$ is max):",
            options: ["$I_0/4$", "$I_0/2$", "$3I_0/4$", "$I_0/\\sqrt{2}$"],
            correct: 2,
            solution: "Phase diff $= 2\\pi/6 = 60^\\circ$. $I = I_0 \\cos^2(60/2) = 3I_0/4$."
        },
        {
            q: "Stopping potential $3V_0$ for $\\lambda$ and $V_0$ for $2\\lambda$. Threshold $\\lambda_0$ is:",
            options: ["$3\\lambda$", "$4\\lambda$", "$2\\lambda$", "$6\\lambda$"],
            correct: 1,
            solution: "$3eV_0 = hc/\\lambda - \phi$ and $eV_0 = hc/2\\lambda - \phi$. Solving gives $\\phi = hc/4\\lambda$, so $\\lambda_0 = 4\\lambda$."
        },
        {
            q: "CE amplifier, $R_c=2k\\Omega, V_{out}=2V, \\beta=100, R_b=1k\\Omega$. $V_{in}$ is:",
            options: ["10 mV", "20 mV", "30 mV", "1 mV"],
            correct: 0,
            solution: "$I_c = 1mA, I_b = 0.01mA. V_{in} = I_b R_b = 10mV$."
        },

        // --- Section B: Numerical (5 Questions) ---
        {
            q: "Mass 2kg, $x = t^3/3$. Work done by force in first 2s is:",
            type: "numerical",
            correct: 16,
            solution: "$v = t^2$. $v(0)=0, v(2)=4$. $W = \\Delta KE = \\frac{1}{2}(2)(16-0) = 16J$."
        },
        {
            q: "Satellites $T_1=1h, T_2=8h, R_1=10^4$km. Closest relative velocity is $\\pi \\times 10^3 \\times X$. Find X:",
            type: "numerical",
            correct: 10,
            solution: "$R_2 = 4R_1$. $v_1-v_2 = 2\\pi(10^4)/1 - 2\\pi(4\\cdot 10^4)/8 = 10\\pi \\cdot 10^3$. So $X=10$."
        },
        {
            q: "Soap bubble $R=3$cm, $V=9V$. If $R$ is doubled, new potential (V) is:",
            type: "numerical",
            correct: 4.5,
            solution: "$V = kQ/R$. If $R$ doubles, $V$ halves. $9/2 = 4.5V$."
        },
        {
            q: "12 fringes for 600nm. Fringes for 400nm in same segment:",
            type: "numerical",
            correct: 18,
            solution: "$n_1\\lambda_1 = n_2\\lambda_2 \\Rightarrow 12 \\times 600 = n_2 \\times 400 \\Rightarrow n_2 = 18$."
        },
        {
            q: "Half-life 20 mins. Time between 33% and 67% decay (mins):",
            type: "numerical",
            correct: 20,
            solution: "Remaining ratio goes from $2/3$ to $1/3$, which is roughly 1 half-life. Exact: 20 mins."
        }
    ],

    chemistry: [
        // --- Section A: MCQs (20 Questions) ---
        {
            q: "Ratio of shortest Balmer $\\lambda$ ($He^+$) to shortest Lyman $\\lambda$ (H):",
            options: ["1:1", "4:1", "1:4", "2:1"],
            correct: 0,
            solution: "$\\lambda_{min} \\propto n_1^2/Z^2$. Both yield $1/R$, ratio is 1:1."
        },
        {
            q: "Max lone pairs on central atom:",
            options: ["XeF4", "IF5", "ClO3-", "XeF2"],
            correct: 3,
            solution: "XeF2 has 3 lone pairs on Xe."
        },
        {
            q: "Enthalpy of neutralization -57.1 kJ/mol. If HCN + NaOH is -12.1, dissociation enthalpy of HCN is:",
            options: ["-45.0", "45.0", "69.2", "32.0"],
            correct: 1,
            solution: "$\\Delta H_{diss} = -12.1 - (-57.1) = 45.0$ kJ/mol."
        },
        {
            q: "Solubility of AgCl ($K_{sp}=1.8e-10$) in 0.1M NaCl:",
            options: ["1.34e-5", "1.8e-9", "1.8e-11", "1.8e-5"],
            correct: 1,
            solution: "$s = K_{sp}/[Cl^-] = 1.8e-10 / 0.1 = 1.8e-9$."
        },
        {
            q: "Variation of total P with $x_1$ for ideal binary solution is:",
            options: ["Linear", "Inverse", "Exponential", "Constant"],
            correct: 0,
            solution: "Raoult's Law: $P = P_2 + (P_1-P_2)x_1$ which is linear."
        },
        {
            q: "Standard Gibbs energy for $E^\\circ=0.24V$ with $n=2$:",
            options: ["-46.32 kJ", "-23.16 kJ", "-92.64 kJ", "46.32 kJ"],
            correct: 0,
            solution: "$\\Delta G^\\circ = -nFE^\\circ = -2 \\cdot 96500 \\cdot 0.24 = -46.32$ kJ."
        },
        {
            q: "First order reaction: 2M becomes 0.15M in 200 min. Rate constant is:",
            options: ["0.0129", "2.303", "0.05", "0.02"],
            correct: 0,
            solution: "$k = (2.303/200) \\log(2/0.15) = 0.0129$ $min^{-1}$."
        },
        {
            q: "Incorrect statement for Borax:",
            options: ["Two sp3 and two sp2 B", "Alkaline in water", "Five B-O-B bonds", "All B are sp3"],
            correct: 3,
            solution: "Borax has both $sp^2$ and $sp^3$ Boron atoms."
        },
        {
            q: "Correct order of ligand field strength:",
            options: ["Cl- < F- < Ox < CN-", "CN- < Ox < F- < Cl-", "F- < Cl- < CN- < Ox", "Cl- < CN- < Ox < F-"],
            correct: 0,
            solution: "Standard spectrochemical series."
        },
        {
            q: "Reaction in Bessemer converter for Copper extraction:",
            options: ["2Cu2S+3O2", "Cu2S+2Cu2O", "FeS+O2", "All of these"],
            correct: 3,
            solution: "All listed steps occur in the converter."
        },
        {
            q: "Stability order: I. Allyl, II. Propyl, III. Benzyl carbocation:",
            options: ["III > I > II", "I > III > II", "II > I > III", "III > II > I"],
            correct: 0,
            solution: "Benzyl is more resonance stabilized than Allyl, which is more than Propyl."
        },
        {
            q: "Chiral centers in 2,3,4-trichloropentane:",
            options: ["3", "2", "1", "0"],
            correct: 1,
            solution: "C2 and C4 are chiral. C3 is pseudo-chiral. Ans: 2."
        },
        {
            q: "Alkene giving glyoxal on reductive ozonolysis:",
            options: ["But-2-ene", "Buta-1,3-diene", "Benzene", "Hexatriene"],
            correct: 2,
            solution: "Benzene gives 3 moles of glyoxal."
        },
        {
            q: "Major product of tert-butyl bromide + NaOEt:",
            options: ["Ether", "2-methylprop-1-ene", "Ethyl ether", "n-butyl ether"],
            correct: 1,
            solution: "Elimination (E2) prevails with bulky base/3-deg halide."
        },
        {
            q: "Phenol is more acidic than ethanol because:",
            options: ["Phenoxide resonance", "Ethoxide resonance", "Molecular weight", "Phenol liquid"],
            correct: 0,
            solution: "Phenoxide ion is resonance stabilized."
        },
        {
            q: "Does NOT undergo Cannizzaro reaction:",
            options: ["HCHO", "PhCHO", "CCl3CHO", "CH3CHO"],
            correct: 3,
            solution: "Acetaldehyde has alpha-H, so it does Aldol condensation."
        },
        {
            q: "Correct order of acid strength:",
            options: ["HCOOH > AcOH > ClCH2COOH", "ClCH2COOH > HCOOH > AcOH", "AcOH > HCOOH > ClCH2COOH", "HCOOH > ClCH2COOH > AcOH"],
            correct: 1,
            solution: "Chloroacetic acid (-I effect) > Formic > Acetic (+I effect)."
        },
        {
            q: "BDC + H3PO2 + H2O gives:",
            options: ["Benzene", "Phenol", "Chlorobenzene", "Aniline"],
            correct: 0,
            solution: "H3PO2 reduces BDC to Benzene."
        },
        {
            q: "Linkage between amino acids in protein:",
            options: ["Glycosidic", "Peptide", "Phosphodiester", "H-bond"],
            correct: 1,
            solution: "Amide linkage (-CONH-) is called peptide bond."
        },
        {
            q: "Gas responsible for Greenhouse Effect:",
            options: ["N2", "O2", "CO2", "H2"],
            correct: 2,
            solution: "CO2 is the primary greenhouse gas."
        },

        // --- Section B: Numerical (5 Questions) ---
        {
            q: "Number of radial nodes in 4p orbital:",
            type: "numerical",
            correct: 2,
            solution: "Nodes $= n - l - 1 = 4 - 1 - 1 = 2$."
        },
        {
            q: "0.01M acid 10% ionized. $Ka = X \\times 10^{-4}$. Find X:",
            type: "numerical",
            correct: 1,
            solution: "$Ka = C\\alpha^2 = 0.01 \\cdot (0.1)^2 = 10^{-4}$. So $X=1$."
        },
        {
            q: "Stereoisomers possible for 2,3-dichlorobutane:",
            type: "numerical",
            correct: 3,
            solution: "1 meso form + 2 enantiomers."
        },
        {
            q: "Oxygen atoms in one molecule of Pyrophosphoric acid:",
            type: "numerical",
            correct: 7,
            solution: "Formula $H_4P_2O_7$ has 7 Oxygens."
        },
        {
            q: "Coefficient of $H^+$ in balanced MnO4- + Oxalate reaction:",
            type: "numerical",
            correct: 16,
            solution: "2 MnO4- + 5 C2O4(2-) + 16 H+ -> 2 Mn2+ + 10 CO2 + 8 H2O."
        }
    ],

    maths: [
        // --- Section A: MCQs (20 Questions) ---
        {
            q: "Domain of $f(x) = \\sqrt{\\log_{0.4} (\\frac{x-1}{x+5})}$ is:",
            options: ["(1, \\infty)", "[1, \\infty)", "(-\\infty, -5) \\cup [1, \\infty)", "(-\\infty, -5) \\cup (1, \\infty)"],
            correct: 2,
            solution: "log base < 1, so arg $\\le 1$. $(x-1)/(x+5) \\le 1$. Sol: $(-\\infty, -5) \\cup [1, \\infty)$."
        },
        {
            q: "Value of $(1+\\omega-\\omega^2)^7$ is:",
            options: ["128\\omega", "-128\\omega^2", "128\\omega^2", "-128\\omega"],
            correct: 1,
            solution: "$(-\\omega^2 - \\omega^2)^7 = (-2\\omega^2)^7 = -128\\omega^2$."
        },
        {
            q: "Matrix A determinant $|A|$ is:",
            options: ["Invertible all $t$", "Invertible $t=\\pi$", "Not invertible", "Invertible $t=0$"],
            correct: 0,
            solution: "$|A| = 5e^{-t} \\neq 0$ always."
        },
        {
            q: "Number of real solutions of $x^2 - 3|x| + 2 = 0$:",
            options: ["2", "1", "4", "3"],
            correct: 2,
            solution: "$|x|=1, 2 \\Rightarrow x = \\pm 1, \\pm 2$."
        },
        {
            q: "Variance of green balls (15G, 10Y, $n=10$):",
            options: ["2.4", "2.0", "3.0", "1.5"],
            correct: 0,
            solution: "$Var = npq = 10 \\cdot (15/25) \\cdot (10/25) = 2.4$."
        },
        {
            q: "HP 10th term 21, 21st term 10. 210th term is:",
            options: ["1", "0", "2.1", "1/2.1"],
            correct: 0,
            solution: "Using $1/a_{n} = A+(n-1)D$, we find $1/a_{210} = 1$."
        },
        {
            q: "Term independent of x in $(2x^2 - 1/3x^2)^{10}$:",
            options: ["C(10,5)32/243", "-C(10,5)32/243", "C(10,6)16/81", "None"],
            correct: 1,
            solution: "$10-r = r \\Rightarrow 2r=10 \\Rightarrow r=5$. Coefficient has $(-1)^5$."
        },
        {
            q: "Limit $\\lim_{x \\to 0} [x \\cot(4x)] / [\\sin^2 x \\cot^2(2x)]$:",
            options: ["0", "2", "1", "4"],
            correct: 2,
            solution: "Evaluates to 1 after applying standard limits."
        },
        {
            q: "f(x) continuous at x=0, find k:",
            options: ["1", "-1", "0", "2"],
            correct: 1,
            solution: "$LHL = k, RHL = -1 \\Rightarrow k = -1$."
        },
        {
            q: "If $x^y = e^{x-y}$, then $dy/dx$ is:",
            options: ["$\\log x / (1+\\log x)^2$", "$1 / (1+\\log x)^2$", "$\\log x / (1+\\log x)$", "None"],
            correct: 0,
            solution: "$y = x/(1+\\log x)$. Differentiating gives option A."
        },
        {
            q: "Angle of intersection of $y^2=x, x^2=y$ at (1,1):",
            options: ["arctan(3/4)", "arctan(4/3)", "pi/2", "pi/4"],
            correct: 0,
            solution: "$m_1=1/2, m_2=2$. $\\tan \\theta = (2-0.5)/(1+1) = 3/4$."
        },
        {
            q: "Function $x/\\log x$ increases in:",
            options: ["(0,e)", "(e,\\infty)", "(0,\\infty)", "(-inf,0)"],
            correct: 1,
            solution: "$f' = (\\log x-1)/(\\log x)^2 > 0$ when $x > e$."
        },
        {
            q: "Integral $\\sin x / \\sin(x-a) dx$:",
            options: ["A", "B", "C", "D"],
            correct: 1,
            solution: "Expansion of $\\sin(x-a+a)$ gives $x \\cos a + \\sin a \\log |\\sin(x-a)|$."
        },
        {
            q: "Integral 0 to pi/2 of $1/(1+\\tan^3 x)$:",
            options: ["pi/2", "pi/4", "pi/8", "0"],
            correct: 1,
            solution: "King's property $2I = pi/2 \\Rightarrow I = pi/4$."
        },
        {
            q: "Solution of DE $dy/dx = y/x + \\phi(y/x)/\\phi'(y/x)$:",
            options: ["$\\phi(y/x) = kx$", "$\\phi(y/x) = ky$", "C", "D"],
            correct: 0,
            solution: "Variable separable: $\\int \\phi'(v)/\\phi(v) dv = \\int dx/x$."
        },
        {
            q: "Vectors coplanar, STP $[a+b, b+c, c+a]$ is:",
            options: ["STP(abc)", "2STP(abc)", "0", "1"],
            correct: 2,
            solution: "If abc are coplanar, STP(abc)=0. Linear combo is also 0."
        },
        {
            q: "Distance between parallel planes $2x-3y+6z=5$ and $6x-9y+18z+20=0$:",
            options: ["5/3", "35/21", "5/7", "1"],
            correct: 0,
            solution: "$d = |5 - (-20/3)| / \\sqrt{4+9+36} = 35/21 = 5/3$."
        },
        {
            q: "Area of triangle by tangents from (h,k) to circle:",
            options: ["A", "B", "C", "D"],
            correct: 0,
            solution: "Standard formula involving $a(h^2+k^2-a^2)^{3/2}$."
        },
        {
            q: "Latus rectum of parabola with given equation:",
            options: ["2", "1", "4/13", "2/13"],
            correct: 3,
            solution: "$LR = 2 \\times$ distance focus to directrix $= 2/13$."
        },
        {
            q: "Mean of $ax_1, ax_2, \\dots$ is:",
         
