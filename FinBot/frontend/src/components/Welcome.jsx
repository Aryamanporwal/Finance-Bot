import React from "react";

const Welcome = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#f0f9ff",
        color: "#2563eb",
      }}
    >
      🎉 Welcome to FinBot!
    </div>
  );
};

export default Welcome;
