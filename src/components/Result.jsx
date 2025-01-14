import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Result({ input }) {
  const ResultData = calculateInvestmentResults(input);
  const InitialInvestment =
    ResultData[0].valueEndOfYear -
    ResultData[0].interest -
    ResultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest (Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {ResultData.map((yearData) => {
          const totalIntrest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            InitialInvestment;
          const TotalAmountInvested = yearData.valueEndOfYear - totalIntrest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(TotalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
