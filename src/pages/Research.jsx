import styles from "../assets/styles/Research.module.css"

function Research() {

    const publications = [
        { url: "https://doi.org/10.1021/acs.iecr.3c02403", text: "Fnu Gorky, Apolo Nambo, Travis J. Kessler, J. Hunter Mack, Maria L. Carreon. \"CO2 and HPDE Upcycling: A Plasma Catalysis Alternative\". Industrial & Engineering Chemistry Research (2023)." },
        { url: "https://doi.org/10.1115/1.4062189", text: "Amina SubLaban, Travis Kessler, Noah Van Dam, J. Hunter Mack. \"Artificial Neural Network Models for Octane Number and Octane Sensitivity: A Quantitative Structure Property Relationship Approach to Fuel Design\". Journal of Energy Resources Technology, 1-20 (2023)." },
        { url: "https://doi.org/10.1115/ICEF2022-91163", text: "Travis Kessler, Amina SubLaban, J. Hunter Mack. \"Predicting the Cetane Number, Sooting Tendency, and Energy Density of Terpene Fuel Additives\". ASME Internal Combustion Engine Division Fall Technical Conference (2022)." },
        { url: "https://doi.org/10.1115/ICEF2021-67785", text: "Travis Kessler, Thomas Schwartz, Hsi-Wu Wong, J. Hunter Mack. \"Evaluating Diesel/Biofuel Blends Using Artificial Neural Networks and Linear/Nonlinear Equations\". ASME Internal Combustion Engine Division Fall Technical Conference (2021)." },
        { url: "https://doi.org/10.1115/ICEF2020-2978", text: "Travis Kessler, Thomas Schwartz, Hsi-Wu Wong, J. Hunter Mack. \"Predicting the Cetane Number, Yield Sooting Index, Kinematic Viscosity, and Cloud Point for Catalytically Upgraded Pyrolysis Oil Using Artificial Neural Networks\". ASME Internal Combustion Engine Division Fall Technical Conference (2020)." },
        { url: "https://doi.org/10.1016/j.proci.2020.07.009", text: "Travis Kessler, Peter C. St. John, Junqing Zhu, Charles S. McEnally, Lisa D. Pfefferle, J. Hunter Mack. \"A comparison of computational models for predicting yield sooting index\". Proceedings of the Combustion Institute (2020)." },
        { url: "https://doi.org/10.1115/ICEF2019-7170", text: "Travis Kessler, Thomas Schwartz, Hsi-Wu Wong, J. Hunter Mack. \"Screening Compounds for Fast Pyrolysis and Catalytic Biofuel Upgrading Using Artificial Neural Networks\". ASME Internal Combustion Engine Division Fall Technical Conference (2019)." },
        { url: "https://doi.org/10.21105/joss.01420", text: "Sanskriti Sharma, Hernan Gelaf-Romer, Travis Kessler, J. Hunter Mack. \"ECabc: A feature tuning program focused on Artificial Neural Network hyperparameters\". Journal of Open Source Software (2019)." },
        { url: "https://doi.org/10.1016/j.fuel.2017.06.015", text: "Travis Kessler, Eric Sacia, Alexis Bell, J. Hunter Mack. \"Artificial neural network based predictions of cetane number for furanic biofuel additives\". Fuel, 206, 171-179 (2017)." },
        { url: "https://doi.org/10.1115/icef2017-3614", text: "Travis Kessler, Gregory Dorian, J. Hunter Mack. \"Application of a Rectified Linear Unit (ReLU) Based Artificial Neural Network to Cetane Number Predictions\". ASME Internal Combustion Engine Division Fall Technical Conference (2017)." },
        { url: "https://doi.org/10.21105/joss.00401", text: "Travis Kessler, J. Hunter Mack. \"ECNet: Large scale machine learning projects for fuel property prediction\". Journal of Open Source Software (2017)." },
        { url: "https://doi.org/10.1115/icef2016-9383", text: "Travis Kessler, Eric Sacia, Alexis Bell, J. Hunter Mack. \"Predicting the Cetane Number of Furanic Biofuel Candidates Using an Improved Artificial Neural Network Based on Molecular Structure\". ASME Internal Combustion Engine Division Fall Technical Conference (2016)." },
    ];

    const presentations = [
        "Amina SubLaban, Travis Kessler, J. Hunter Mack. \"Analysis of Inlier and Outlier Compounds with respect to Artificial Neural Network Cetane Number Prediction Accuracy\". Eastern States Section of the Combustion Institute Spring Technical Meeting (2022).",
        "Travis Kessler, Amina SubLaban, J. Hunter Mack. \"Predicting Research and Motor Octane Number using a Single Artificial Neural Network\". American Chemical Society Fall Conference (2021).",
        "Travis Kessler, Corey Hudson, Leanne Whitmore, J. Hunter Mack. \"Prediction of Research/Motor Octane Number and Octane Sensitivity Using Artificial Neural Networks\". Eastern States Section of the Combustion Institute Spring Technical Meeting (2020).",
        "J. Hunter Mack, Travis Kessler. \"A Computational Approach to Screening Alternative Fuel Candidates\". New England Energy Research Forum (2019).",
        "Travis Kessler, J. Hunter Mack. \"Predicting Biofuel Properties with an Artificial Neural Network\". UMass Lowell Student Research and Engagement Symposium (2016)."
    ];

    return (
        <>
          <h2>Published Works</h2>
          <ul className={styles.pub_pres_ul}>
            {publications.map((item, index) => (
              <li key={index} className={styles.pub_pres_li}>
                {item.text} <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
              </li>
            ))}
          </ul>
          <h2>Presentations</h2>
          <ul className={styles.pub_pres_ul}>
            {presentations.map((item, index) => (
              <li key={index} className={styles.pub_pres_li}>
                {item}
              </li>
            ))}
          </ul>
        </>
    )
}

export default Research
