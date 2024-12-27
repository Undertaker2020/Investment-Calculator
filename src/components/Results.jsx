import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({userInput}) {
    const resultData = calculateInvestmentResults(userInput);
    const initialInvestment =
        resultData[0].valueEndOfYear -
        resultData[0].interest -
        resultData[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((yearData) => {

                    const { year, interest, valueEndOfYear, annualInvestment} = yearData;
                    const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment;
                    const totalAmountInvested = valueEndOfYear - totalInterest;
                    return (<tr key={year}>
                        <td>{year}</td>
                        <td>{formatter.format(valueEndOfYear)}</td>
                        <td>{formatter.format(interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>)
                }
                )}
            </tbody>
        </table>
    );
}

