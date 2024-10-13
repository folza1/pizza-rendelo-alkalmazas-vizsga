function NoPage() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexDirection: "column",
                textAlign: "center",
            }}
        >
            <h1>HIBA 404!</h1>
            <p>Az oldal nem található!</p>
        </div>
    );
}

export default NoPage;
