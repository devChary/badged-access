const GatewayUsers = ({ userActions = [] }) => {
  return (
    <>
      <h2>Gateway Users</h2>
      <ul>
        {userActions?.map((userInfo, index) => {
          return (
            <li key={index}>
              {userInfo?.[0]} - {userInfo?.[1]}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GatewayUsers;
