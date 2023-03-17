const ErrorNotify = ({ error }) => {
  return (
    <div className="error-notify">
      {error.map((x) => (
        <p className="text-error" key={x}>
          {x}
        </p>
      ))}
    </div>
  );
};
export default ErrorNotify;
