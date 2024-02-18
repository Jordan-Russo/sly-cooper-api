export default function WelcomePage() {
  return (
    <>
      <h1>Sly Cooper API Documentation</h1>

      <h2>Introduction</h2>
      <p>Welcome to the Sly Cooper API Documentation. This API allows you to access various information about the Sly Cooper game series characters.</p>
    
      <h2>Base URL</h2>
      <p>The base URL for all API Endpoints is:
      </p>
      <p>
        <code>https://slycooperapi.onrender.com/</code>
      </p>
    
      <h2>API Methods</h2>

      <h3>Search character by name</h3>
      <p>
        <code>https://slycooperapi.onrender.com/api/Sly Cooper</code>
      </p>
      <p>Retrieves information on a specific character from the Sly Cooper series. If the character is invalid or not found, an empty default JSON will be returned instead.</p>
    
      <h3>Lookup a random character</h3>
      <p>
        <code>https://slycooperapi.onrender.com/api/random</code>
      </p>
      <p>Retrieves information on a random character from the Sly Cooper series.</p>

      <h3>Retrieve all characters</h3>
      <p>
        <code>https://slycooperapi.onrender.com/api/all</code>
      </p>
      <p>Retrieves information on all characters from the Sly Cooper series.</p>
    
      <h2>Response Format</h2>
      <p>The API responds with JSON objects. Each endpoint returns an object with relevant information.</p>

      <h2>Error Handling</h2>
      <p>If an error occurs, the API will respond with an appropriate status code and an error message in the body of its response.</p>
    </>
  );
}