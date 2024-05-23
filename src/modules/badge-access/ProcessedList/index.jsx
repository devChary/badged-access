import "./styles.css";

const ProcessedList = ({ results = [] }) => {
  return (
    <div>
      <h2>Output</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>Entry without Exit</th>
            <th>Exit without Entry</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul>
                {results?.[0].map((employee) => (
                  <li key={employee}>{employee}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {results?.[1].map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProcessedList;
