import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  console.error("Errore del router:", error); // log completo in console per debug

  // Caso in cui l'errore è una Response (fetch fallito, 404 ecc)
  if (error instanceof Response) {
    return (
      <div>
        <h2>Errore {error.status}</h2>
        <p>{error.statusText}</p>
      </div>
    );
  }

  // Caso in cui l'errore è un oggetto con message (spesso Error di JS)
  if (error && typeof error === "object" && "message" in error) {
    return (
      <div>
        <h2>Errore imprevvisto</h2>
        <p>{(error).message}</p>
      </div>
    );
  }

  // Fallback generico
  return (
    <div>
      <h2>Errore imprevvisto</h2>
      <p>Si è verificato un errore sconosciuto.</p>
    </div>
  );
}

export default Error;
