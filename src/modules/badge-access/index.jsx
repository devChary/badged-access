import { useState } from "react";

// Components
import Select from "../../components/Select";
import Button from "../../components/Button";
import ProcessedList from "./ProcessedList";
import GatewayUsers from "./GatewayUsers";

// Constants
import { EMPLOYEE_OPTIONS, GATEWAY_OPTIONS } from "../constants";

// styles
import "./styles.css";

const BadgeAccess = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(
    EMPLOYEE_OPTIONS[0].value
  );
  const [selectedGateway, setSelectedGateway] = useState("Enter");

  const [userActions, setUserActions] = useState([]);
  const [results, setResults] = useState(null);

  const handleGatewayActions = (userActions) => {
    const entriesWithoutExits = new Set();
    const exitsWithoutEntries = new Set();
    const currentState = {};

    userActions.forEach(([employee, action]) => {
      if (action === "Enter") {
        if (currentState[employee] === "Enter") {
          entriesWithoutExits.add(employee);
        }
        currentState[employee] = "Enter";
      } else if (action === "Exit") {
        if (currentState[employee] !== "Enter") {
          exitsWithoutEntries.add(employee);
        } else {
          currentState[employee] = "Exit";
        }
      }
    });

    Object.keys(currentState).forEach((employee) => {
      if (currentState[employee] === "Enter") {
        entriesWithoutExits.add(employee);
      }
    });

    return [Array.from(entriesWithoutExits), Array.from(exitsWithoutEntries)];
  };

  return (
    <div className="badge-access">
      <h1>Badge Access</h1>
      <div className="access-selection">
        <Select
          label="Employees"
          value={selectedEmployee.value}
          onChange={(e) => {
            setSelectedEmployee(e.target.value);
          }}
          options={EMPLOYEE_OPTIONS}
        />
        <Select
          label="Gateway"
          value={selectedGateway.value}
          onChange={(e) => {
            setSelectedGateway(e.target.value);
          }}
          options={GATEWAY_OPTIONS}
        />
        <Button
          name="user-action"
          onClick={() =>
            setUserActions([
              ...userActions,
              [selectedEmployee, selectedGateway],
            ])
          }
        >
          User Action +
        </Button>
      </div>
      <Button
        name="process-userActions"
        onClick={() => setResults(handleGatewayActions(userActions))}
      >
        Submit
      </Button>
      {!!userActions?.length && <GatewayUsers userActions={userActions} />}
      {results && <ProcessedList results={results} />}
    </div>
  );
};

export default BadgeAccess;
