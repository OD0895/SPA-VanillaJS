const Error404 = () => {
  const view = `
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>404</h1>
          <p>
            We're sorry, but the page you are looking for does not exist.
          </p>
          <p>
            <a href="/">Go back to the home page</a>
          </p>
        </div>
      </div>
    </div>
  `;
  return view;
};
export default Error404;