// jeemasterhub.in - Official Question Bank (75 Questions)
const questions = [
    // --- SECTION: PHYSICS (1-25) ---
    {
        q: "A screw gauge gives the following readings: Main scale: 0 mm; Circular scale: 52 divisions. Given 1 mm on main scale = 100 divisions on circular scale. Diameter of wire is:",
        options: ["0.52 cm", "0.052 cm", "0.026 cm", "0.005 cm"],
        correct: 1
    },
    {
        q: "A particle moves with velocity $$v = at + bt^2$$. The distance travelled between 1s and 2s is:",
        options: ["$$3a + 7b$$", "$$\\frac{3}{2}a + \\frac{7}{3}b$$", "$$\\frac{a}{2} + \\frac{b}{3}$$", "$$2a + 3b$$"],
        correct: 1
    },
    {
        q: "Masses 1 kg and 3 kg have position vectors $$\\hat{i} + 2\\hat{j} + \\hat{k}$$ and $$-3\\hat{i} - 2\\hat{j} + \\hat{k}$$. The center of mass is:",
        options: ["$$-2\\hat{i} - \\hat{j} + \\hat{k}$$", "$$2\\hat{i} - \\hat{j} - 2\\hat{k}$$", "$$-\\hat{i} + \\hat{j} + \\hat{k}$$", "$$-2\\hat{i} + 2\\hat{k}$$"],
        correct: 0
    },
    {
        q: "Escape velocity from Earth is $$v_e$$. Escape velocity from a planet with twice the radius and same density is:",
        options: ["$$v_e$$", "$$2v_e$$", "$$4v_e$$", "$$v_e/2$$"],
        correct: 1
    },
    {
        q: "Water rises to height $$h$$ in capillary of radius $$r$$ (mass $$M$$). If radius is doubled, mass of rising water will be:",
        options: ["M", "2M", "M/2", "4M"],
        correct: 1
    },
    {
        q: "Ideal gas process: $$PV^2 = \\text{constant}$$. If $$T, V$$ changes to volume $$2V$$, final temperature is:",
        options: ["T/2", "2T", "T/4", "$$\\sqrt{2}T$$"],
        correct: 0
    },
    {
        q: "Phase difference between $$y_1 = 4 \\sin(10t + \\phi)$$ and $$y_2 = 5 \\cos(10t)$$ if $$\\phi = \\pi/4$$?",
        options: ["$$\\pi/4$$", "$$3\\pi/4$$", "$$\\pi/2$$", "$$\\pi/6$$"],
        correct: 0
    },
    {
        q: "Potential $$V = -x^2y - xz^3 + 4$$. Electric field $$\\vec{E}$$ is:",
        options: ["$$(2xy + z^3)\\hat{i} + x^2\\hat{j} + 3xz^2\\hat{k}$$", "$$2xy\\hat{i} + x^2\\hat{j} + z^3\\hat{k}$$", "$$(z^3 - 2xy)\\hat{i} + x^2\\hat{j}$$", "None of these"],
        correct: 0
    },
    {
        q: "A wire of resistance R is stretched to twice its length. New resistance is:",
        options: ["2R", "4R", "R/2", "16R"],
        correct: 1
    },
    {
        q: "Ratio of radii ($$r_p : r_\\alpha$$) for proton and alpha particle entering magnetic field with same speed:",
        options: ["1 : 1", "1 : 2", "2 : 1", "1 : 4"],
        correct: 1
    },
    {
        q: "Paramagnetic susceptibility is 400 at 300 K. At what temperature will it be 600?",
        options: ["450 K", "200 K", "150 K", "250 K"],
        correct: 1
    },
    {
        q: "Average power in AC: $$e = 100 \\sin(314t)$$, $$i = 2 \\sin(314t + \\pi/3)$$:",
        options: ["100 W", "50 W", "200 W", "25 W"],
        correct: 1
    },
    {
        q: "Which EM wave has the shortest wavelength?",
        options: ["Infrared", "X-rays", "Gamma rays", "Microwaves"],
        correct: 2
    },
    {
        q: "Object at 20 cm from convex mirror ($$f = 20$$ cm). Image is at:",
        options: ["Infinity", "10 cm behind mirror", "20 cm in front", "10 cm in front"],
        correct: 1
    },
    {
        q: "YDSE: Slit separation halved, screen distance doubled. Fringe width becomes:",
        options: ["Half", "Double", "Four times", "Unchanged"],
        correct: 2
    },
    {
        q: "de Broglie wavelength of electron accelerated through 100 V:",
        options: ["1.227 Å", "12.27 Å", "0.122 Å", "122.7 Å"],
        correct: 0
    },
    {
        q: "Hydrogen: $$n=3 \\to 2$$ is $$\\lambda$$. Wavelength for $$n=4 \\to 2$$ is:",
        options: ["$$\\frac{16}{25}\\lambda$$", "$$\\frac{20}{27}\\lambda$$", "$$\\frac{27}{20}\\lambda$$", "$$\\frac{25}{16}\\lambda$$"],
        correct: 1
    },
    {
        q: "Half-life is 10 years. Time for activity to reduce to 6.25%:",
        options: ["20 years", "30 years", "40 years", "50 years"],
        correct: 2
    },
    {
        q: "CE Amplifier: $$R_c=2k\\Omega, V_{out}=2V, \\beta=100, R_b=1k\\Omega$$. Input voltage:",
        options: ["10 mV", "20 mV", "30 mV", "1 mV"],
        correct: 0
    },
    {
        q: "Two NAND gates in series (NAND + NOT configuration) behaves as:",
        options: ["OR gate", "AND gate", "NOR gate", "XOR gate"],
        correct: 1
    },
    // Numerical Physics (Correct Answers in comments for logic)
    { q: "Numerical: Ball projected at 20 m/s, angle 30°. Time of flight (seconds)?", options: ["Enter Value"], correct: 2, type: "num" },
    { q: "Numerical: Mass 2kg, $$\\mu_s=0.4$$. Force 2.5N applied. Friction force (N)?", options: ["Enter Value"], correct: 2.5, type: "num" },
    { q: "Numerical: 2μF and 3μF in series (100V). Energy in 2μF (mJ)?", options: ["Enter Value"], correct: 1.44, type: "num" },
    { q: "Numerical: Ring rotation. M=2kg, m=0.5kg. New angular velocity $$\\omega/x$$. Value of x?", options: ["Enter Value"], correct: 1.5, type: "num" },
    { q: "Numerical: Sonometer tension increased by 44%. New frequency (Hz) if original was 300Hz?", options: ["Enter Value"], correct: 360, type: "num" },

    // --- SECTION: CHEMISTRY (26-50) ---
    {
        q: "Which quantum number set is NOT possible?",
        options: ["n=3, l=2, m=+2", "n=4, l=0, m=0", "n=3, l=3, m=-3", "n=2, l=1, m=0"],
        correct: 2
    },
    {
        q: "Correct order of increasing ionic radii:",
        options: ["$$Mg^{2+} < Na^+ < F^- < O^{2-}$$", "$$O^{2-} < F^- < Na^+ < Mg^{2+}$$", "$$F^- < O^{2-} < Mg^{2+} < Na^+$$", "$$Na^+ < Mg^{2+} < O^{2-} < F^-$$"],
        correct: 0
    },
    {
        q: "Hybridisation of N in $$NO_2^+, NO_3^-, NH_4^+$$:",
        options: ["sp, sp^3, sp^2", "sp, sp^2, sp^3", "sp^2, sp, sp^3", "sp^2, sp^3, sp"],
        correct: 1
    },
    {
        q: "Rate: [A] doubled -> 4x rate; [B] doubled -> 2x rate. Overall order:",
        options: ["2", "3", "4", "1"],
        correct: 1
    },
    {
        q: "Most stable carbocation:",
        options: ["$$(CH_3)_3C^+$$", "$$(CH_3)_2CH^+$$", "$$CH_3CH_2^+$$", "$$C_6H_5CH_2^+$$"],
        correct: 0
    },
    {
        q: "Moles of $$KMnO_4$$ reduced by 1 mole of KI in alkaline medium:",
        options: ["1", "2", "5", "6"],
        correct: 1
    },
    {
        q: "IUPAC: $$CH_3-CH(OH)-CH_2-C(CH_3)_2-COOH$$:",
        options: ["4-hydroxy-2,2-dimethylpentanoic acid", "2,2-dimethyl-4-hydroxypentanoic acid", "4,4-dimethyl-2-hydroxypentanoic acid", "2-hydroxy-4,4-dimethylpentanoic acid"],
        correct: 0
    },
    {
        q: "Which is a bidentate ligand?",
        options: ["CN-", "en (Ethylenediamine)", "NH3", "EDTA"],
        correct: 1
    },
    {
        q: "Bond order of $$O_2^{2-}$$:",
        options: ["1", "1.5", "2", "2.5"],
        correct: 0
    },
    {
        q: "Basic strength order in aqueous solution:",
        options: ["$$NH_3 > CH_3NH_2 > (CH_3)_2NH$$", "$$(CH_3)_2NH > CH_3NH_2 > NH_3$$", "$$CH_3NH_2 > (CH_3)_2NH > NH_3$$", "$$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2$$"],
        correct: 1
    },
    {
        q: "Which will NOT show Hinsberg test?",
        options: ["Primary amine", "Secondary amine", "Tertiary amine", "Ethylamine"],
        correct: 2
    },
    {
        q: "Phenol + Zn dust gives:",
        options: ["Benzene", "Toluene", "Benzaldehyde", "Benzoic acid"],
        correct: 0
    },
    {
        q: "Highest (most negative) electron gain enthalpy:",
        options: ["Fluorine", "Chlorine", "Bromine", "Iodine"],
        correct: 1
    },
    {
        q: "Bessemer converter (Copper extraction): Silica removes:",
        options: ["Iron oxide as slag", "Copper oxide as slag", "SO2", "CO"],
        correct: 0
    },
    {
        q: "Propene + HBr (Peroxide) major product:",
        options: ["2-bromopropane", "1-bromopropane", "1,2-dibromopropane", "2,2-dibromopropane"],
        correct: 1
    },
    {
        q: "Condensation polymer:",
        options: ["Polyethene", "PVC", "Nylon-6,6", "Teflon"],
        correct: 2
    },
    {
        q: "Water-soluble Vitamin:",
        options: ["Vit A", "Vit D", "Vit C", "Vit E"],
        correct: 2
    },
    {
        q: "Coagulation of $$As_2S_3$$ (negative sol) is most effective by:",
        options: ["Na+", "Mg2+", "Al3+", "K+"],
        correct: 2
    },
    {
        q: "Positive Iodoform test given by:",
        options: ["Methanol", "Ethanol", "Benzophenone", "Pantan-3-one"],
        correct: 1
    },
    {
        q: "Oxidation state of Cr in $$K_2Cr_2O_7$$:",
        options: ["+3", "+4", "+6", "+7"],
        correct: 2
    },
    // Numerical Chemistry
    { q: "Numerical: Chiral carbons in Glucose?", options: ["Value"], correct: 4, type: "num" },
    { q: "Numerical: pH of 0.001 M HCl?", options: ["Value"], correct: 3, type: "num" },
    { q: "Numerical: Unpaired electrons in $$[Fe(H_2O)_6]^{2+}$$?", options: ["Value"], correct: 4, type: "num" },
    { q: "Numerical: 1st order 75% done in 60 min. Half-life (min)?", options: ["Value"], correct: 30, type: "num" },
    { q: "Numerical: Moles of e- to deposit 27g Aluminum from Al3+?", options: ["Value"], correct: 3, type: "num" },

    // --- SECTION: MATHEMATICS (51-75) ---
    {
        q: "n(A)=3, n(B)=6. Minimum elements in $$A \\cup B$$:",
        options: ["3", "6", "9", "18"],
        correct: 1
    },
    {
        q: "Limit: $$\\lim_{x \\to 0} \\frac{\\sin(x^2)}{x}$$ is:",
        options: ["1", "0", "$$\\infty$$", "DNE"],
        correct: 1
    },
    {
        q: "Roots of $$x^2 - bx + c = 0$$ are consecutive integers. $$b^2 - 4c$$ is:",
        options: ["1", "2", "3", "4"],
        correct: 0
    },
    {
        q: "Value of $$\\sin(2\\sin^{-1} 0.8)$$:",
        options: ["0.96", "0.48", "0.64", "0.32"],
        correct: 0
    },
    {
        q: "Sum of 20 terms: 5 + 55 + 555 + ...:",
        options: ["$$\\frac{5}{9}[\\frac{10}{9}(10^{20}-1)-20]$$", "Option B", "Option C", "None"],
        correct: 0
    },
    {
        q: "Area bounded by $$y^2 = 4x$$ and $$x = 3$$:",
        options: ["$$4\\sqrt{3}$$", "$$8\\sqrt{3}$$", "$$16\\sqrt{3}$$", "$$2\\sqrt{3}$$"],
        correct: 1
    },
    {
        q: "Unit vector perpendicular to $$\\vec{a} = \\hat{i}+\\hat{j}+\\hat{k}$$ and $$\\vec{b} = \\hat{i}-\\hat{j}+2\\hat{k}$$:",
        options: ["$$(3\\hat{i}-\\hat{j}-2\\hat{k})/\\sqrt{14}$$", "Option B", "Option C", "Option D"],
        correct: 0
    },
    {
        q: "Derivative of $$e^{\\sin x}$$:",
        options: ["$$e^{\\sin x} \\cos x$$", "$$e^{\\sin x}$$", "cos x", "Option D"],
        correct: 0
    },
    {
        q: "$$\\int_0^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} dx$$:",
        options: ["$$\\pi/2$$", "$$\\pi/4$$", "0", "1"],
        correct: 1
    },
    {
        q: "Distance between $$3x-4y+7=0$$ and $$3x-4y+5=0$$:",
        options: ["2/5", "12/5", "2/25", "3/5"],
        correct: 0
    },
    {
        q: "Square matrix order 3, |A|=5. |adj(A)| is:",
        options: ["5", "25", "125", "625"],
        correct: 1
    },
    {
        q: "Ways 5 people seat around circular table:",
        options: ["120", "24", "60", "10"],
        correct: 1
    },
    {
        q: "Eccentricity of hyperbola $$x^2/9 - y^2/16 = 1$$:",
        options: ["5/4", "5/3", "4/3", "7/9"],
        correct: 1
    },
    {
        q: "$$y = \\log(\\tan x)$$, dy/dx at $$x = \\pi/4$$:",
        options: ["0", "1", "2", "$$\\infty$$"],
        correct: 2
    },
    {
        q: "Prob. of sum 10 in single throw of two dice:",
        options: ["1/12", "1/6", "1/9", "1/36"],
        correct: 0
    },
    {
        q: "General solution of dy/dx = y/x:",
        options: ["y = cx", "y = c/x", "y = x+c", "Option D"],
        correct: 0
    },
    {
        q: "Vectors coplanar: $$2\\hat{i}-\\hat{j}+\\hat{k}, \\hat{i}+2\\hat{j}-3\\hat{k}, 3\\hat{i}+a\\hat{j}+5\\hat{k}$$. Value of a:",
        options: ["1", "2", "-4", "-8"],
        correct: 3
    },
    {
        q: "Value of $$(1+i)^{10} + (1-i)^{10}$$:",
        options: ["0", "32", "64", "-64"],
        correct: 0
    },
    {
        q: "Slope of tangent to $$y = x^3 - x$$ at x = 2:",
        options: ["11", "12", "10", "6"],
        correct: 0
    },
    {
        q: "Focus of parabola $$y^2 - 8x - 2y + 17 = 0$$:",
        options: ["(2, 1)", "(4, 1)", "(3, 1)", "(0, 1)"],
        correct: 2
    },
    // Numerical Maths
    { q: "Numerical: 7th term in expansion of $$(3/x^2 - x^3/6)^n$$ is constant. n?", options: ["Value"], correct: 15, type: "num" },
    { q: "Numerical: Real solutions of $$|x|^2 - 3|x| + 2 = 0$$?", options: ["Value"], correct: 4, type: "num" },
    { q: "Numerical: $$\\int \\frac{dx}{x^2+4x+13} = \\frac{1}{A} \\tan^{-1}(\\frac{x+2}{B})$$. Value of A+B?", options: ["Value"], correct: 6, type: "num" },
    { q: "Numerical: Local extremum points of $$2x^3 - 9x^2 + 12x + 5$$?", options: ["Value"], correct: 2, type: "num" },
    { q: "Numerical: Mean 4.4, Var 8.24. Three obs: 1, 2, 6. Product of other two?", options: ["Value"], correct: 28, type: "num" }
];
        
