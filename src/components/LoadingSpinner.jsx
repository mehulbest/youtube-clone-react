export default function LoadingSpinner() {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <div style={{ width: "50px", height: "50px", border: "5px solid #ccc", borderTop: "5px solid red", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
      </div>
    );
  }
  