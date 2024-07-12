export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.InitialInvestment}
            required
            onChange={(event) =>
              onChange("InitialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.AnnualInvestment}
            required
            onChange={(event) =>
              onChange("AnnualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.ExpectedReturn}
            required
            onChange={(event) =>
              onChange(" ExpectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.Duration}
            required
            onChange={(event) => onChange("Duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
