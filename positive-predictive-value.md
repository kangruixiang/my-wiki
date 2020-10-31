---
- date: 2020-09-11
---

# positive predictive value

- related: [[Biostats]]

Unlike sensitivity, specificity and likelihood ratios, **predictive values** depend on the **prevalence** of the disease in the population tested.  If the prevalence is high, a positive test is more likely to be a true positive (PPV is high).  If the prevalence is low, a negative test is more likely to be a true negative (NPV is high).

It is also important to understand that predictive values are impacted by the pre-test probability of disease.  In patients with a high pre-test probability of disease, the PPV of diagnostic testing is increased.  Imagine performing HIV testing on two patients.  The first patient has multiple risk factors for infection and therefore has a high pre-test probability of HIV.  The second patient has no risk factor for infection and therefore has a low pre-test probability of the disease.  A positive result in the first patient has a higher PPV (post-test probability of the disease) than a positive result in the second patient, although sensitivity and specificity of the HIV test are the same for both patients.

It is possible to calculate predictive values if given the sensitivity, specificity and disease prevalence.  Bayes theorem, an important theorem in probability theory is used for calculations.

Applying Bayes theorem to Question #1:

Sensitivity is 80% (0.8) and specificity is 90% (0.9).  Prevalence of the disease is 10% (0.1).  To calculate the predictive values, begin by calculating the probability of obtaining a true positive: multiply sensitivity by prevalence (0.8\*0.1).  Then, calculate the probability of obtaining a false positive: multiply (1-specificity) by (1-prevalence) (0.1\*0.9).  According to the definition, PPV equals the number of true positives divided by the total number of positive test results.  Therefore, PPV is equal to (0.8\*0.1)/\[( 0.8\*0.1) +( 0.1\*0.9)] = 47%.  A similar method can be used to calculate NPV.

Another way of solving Question #1 is by plugging in numbers.  Imagine that the population consists of 100 patients.  Since the disease prevalence is 10%, that means 10 patients have the disease and 90 do not.  Performing a test with 80% sensitivity on 10 diseased patients yields 8 true positive.  Performing a test with 90% specificity on 90 patients without disease yields 9 false positives.  PPV equals the fraction of true positives divided by all positives.  Therefore, PPV in this case is equal to 8/(8+9) = 47%.

Question #5 asks for the reciprocal of NPV: what is the probability of having the disease (positive coronary angiogram) if you have a negative test (EKG stress test)? It can be calculated as the following:

(1 – NPV) = 1 - D/(C+D) = C/(C+D) = 12/(12+78)= 0.13 (13%)

The cutoff value of a test determines the balance between false positives and false negatives.  It therefore affects the sensitivity and specificity of a test (see the discussion in section 9).  In turn, specificity of a test is an important determinant of PPV, because a high specificity is associated with fewer false positives (Question #6).  In Question #4, moving the cutoff value from point X to point A increases sensitivity and therefore also increases the number of true positives.  At the same time, this move also decreases the specificity and therefore increases the number of false positives.  Because the disease prevalence is low (i.e. there are more healthy than diseased individuals in the population), the increase in false positives from moving the cutoff point in this manner is  larger than the increase in true positives.  The overall result is a decrease in the positive predictive value.


<hr>

[📝 Edit on GitHub](https://github.com/Mint-System/Knowledge/blob/master/positive%20predictive%20value.md)

[📂 Open in Obsidan](obsidian://open?vault=Knowledge%20Mint%20System&file=positive%20predictive%20value.md ':target=_self')

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>