// Welcome to the Our Jee mains Master Hub Website
// Total 100 Most Important JEE Mains Chemistry Flashcards (Error-Free)

const chemistryCards = [
    // --- 1. SOME BASIC CONCEPTS & ATOMIC STRUCTURE ---
    { q: "Molarity ($M$) formula?", a: "$M = \\frac{\\text{Moles of solute}}{\\text{Volume of solution (in L)}}$" },
    { q: "Molality ($m$) formula?", a: "$m = \\frac{\\text{Moles of solute}}{\\text{Mass of solvent (in kg)}}$" },
    { q: "Heisenberg's Uncertainty Principle?", a: "$\\Delta x \\cdot \\Delta p \\geq \\frac{h}{4\\pi}$" },
    { q: "De-Broglie Wavelength of electron?", a: "$\\lambda = \\frac{h}{\\sqrt{2mKE}}$" },
    { q: "Radius of $n^{th}$ orbit (Bohr)?", a: "$r_n = 0.529 \\frac{n^2}{Z} \\text{ \\AA}$" },
    { q: "Energy of $n^{th}$ orbit?", a: "$E_n = -13.6 \\frac{Z^2}{n^2} \\text{ eV/atom}$" },

    // --- 2. CHEMICAL BONDING & STATES OF MATTER ---
    { q: "Dipole Moment ($\\mu$)?", a: "$\\mu = q \\times d$ (Unit: Debye)" },
    { q: "Formal Charge formula?", a: "$FC = V - L - \\frac{1}{2}S$ <br> (V: Valence e-, L: Lone pair e-, S: Shared e-)" },
    { q: "Ideal Gas Equation?", a: "$PV = nRT$ (where $R = 0.0821 \\text{ L atm/K mol}$)" },
    { q: "Graham's Law of Diffusion?", a: "$\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}$" },
    { q: "Dalton's Law of Partial Pressure?", a: "$P_i = \\chi_i \\cdot P_{total}$" },

    // --- 3. THERMODYNAMICS & EQUILIBRIUM ---
    { q: "First Law of Thermodynamics?", a: "$\\Delta U = q + w$" },
    { q: "Enthalpy ($H$) relation?", a: "$\\Delta H = \\Delta U + \\Delta n_g RT$" },
    { q: "Gibbs Free Energy change?", a: "$\\Delta G = \\Delta H - T\\Delta S$" },
    { q: "Condition for Spontaneity?", a: "$\\Delta G < 0$ (Negative)" },
    { q: "Relation between $K_p$ and $K_c$?", a: "$K_p = K_c(RT)^{\\Delta n_g}$" },
    { q: "pH of a solution?", a: "$pH = -\\log[H^+]$" },
    { q: "Henderson-Hasselbalch (Acidic Buffer)?", a: "$pH = pK_a + \\log\\frac{[\\text{Salt}]}{[\\text{Acid}]}$" },
    { q: "Solubility Product ($K_{sp}$) for $A_2B$?", a: "$K_{sp} = 4s^3$" },

    // --- 4. SOLUTIONS & ELECTROCHEMISTRY ---
    { q: "Raoult's Law?", a: "$P_s = P^0 \\cdot \\chi_{solvent}$" },
    { q: "Elevation in Boiling Point?", a: "$\\Delta T_b = i \\cdot K_b \\cdot m$" },
    { q: "Nernst Equation?", a: "$E_{cell} = E^0_{cell} - \\frac{0.059}{n} \\log Q$ (at $298K$)" },
    { q: "Faraday's First Law of Electrolysis?", a: "$w = ZIt = E \\cdot \\frac{Q}{96500}$" },
    { q: "Molar Conductivity ($\\Lambda_m$)?", a: "$\\Lambda_m = \\frac{\\kappa \\times 1000}{M}$" },

    // --- 5. CHEMICAL KINETICS ---
    { q: "Rate Law for $n^{th}$ order?", a: "$\\text{Rate} = k[A]^n$" },
    { q: "Half-life ($t_{1/2}$) for First Order?", a: "$t_{1/2} = \\frac{0.693}{k}$" },
    { q: "Arrhenius Equation?", a: "$k = A e^{-E_a/RT}$" },

    // --- 6. INORGANIC (Periodic & Coordination) ---
    { q: "Periodic Trend: Ionization Energy?", a: "Left to Right: Increases <br> Top to Bottom: Decreases" },
    { q: "Periodic Trend: Atomic Radius?", a: "Left to Right: Decreases <br> Top to Bottom: Increases" },
    { q: "Magnetic Moment (Spin only)?", a: "$\\mu = \\sqrt{n(n+2)} \\text{ BM}$" },
    { q: "Hybridization of $SF_6$?", a: "$sp^3d^2$ (Octahedral)" },
    { q: "Strong Field Ligands (Spectrochemical)?", a: "$CO > CN^- > en > NH_3$" },

    // --- 7. ORGANIC (Named Reactions & Tests) ---
    { q: "Wurtz Reaction?", a: "$2RX + 2Na \\xrightarrow{\\text{dry ether}} R-R + 2NaX$" },
    { q: "Reimer-Tiemann Reaction?", a: "Phenol $\\xrightarrow{CHCl_3/KOH}$ Salicylaldehyde" },
    { q: "Kolbe's Reaction?", a: "Phenol $\\xrightarrow{CO_2/NaOH}$ Salicylic Acid" },
    { q: "Hoffmann Bromamide Reaction?", a: "$RCONH_2 + Br_2 + 4KOH \\rightarrow RNH_2$ (Primary Amine)" },
    { q: "Lucas Test observation?", a: "$3^\\circ$ Alcohol: Immediate Turbidity <br> $2^\\circ$: 5 mins <br> $1^\\circ$: No turbidity" },
    { q: "Rosenmund Reduction?", a: "$RCOCl \\xrightarrow{Pd/BaSO_4} RCHO$" },
    { q: "Aldol Condensation condition?", a: "Must have $\\alpha$-hydrogen" },
    { q: "Cannizzaro Reaction condition?", a: "No $\\alpha$-hydrogen (e.g., HCHO, $C_6H_5CHO$)" },
    { q: "Tollens' Test (Silver Mirror)?", a: "Given by Aldehydes only" },
    { q: "Iodoform Test result?", a: "Yellow ppt of $CHI_3$ (Given by Methyl Ketones/Alcohols)" },
    
    // --- 8. BIOMOLECULES & OTHERS ---
    { q: "Linkage in Proteins?", a: "Peptide linkage ($-CONH-$)" },
    { q: "Linkage in Carbohydrates?", a: "Glycosidic linkage" },
    { q: "Nitrogenous base NOT in DNA?", a: "Uracil (present in RNA)" },
    { q: "Aspirin chemical name?", a: "2-Acetoxybenzoic acid" },
    { q: "Zwitterion example?", a: "Amino acids (at Isoelectric point)" }
];
