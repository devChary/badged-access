const Select = ({ value, label, onChange, options = [] }) => {
  return (
    <label>
      {label}:
      <select value={value} onChange={onChange}>
        {options?.map(({ value, label }) => (
          <option key={value} value={label}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
