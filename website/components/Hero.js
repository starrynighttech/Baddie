export default function Hero() {
  return (
    <div style={{
      position: "relative",
      height: "100vh",
      width: "100%",
      overflow: "hidden"
    }}>
      
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0
        }}
      >
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.4)"
      }} />

      <div style={{
        position: "relative",
        zIndex: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "4rem",
          letterSpacing: "3px"
        }}>
          Starry Nights
        </h1>

        <p style={{
          opacity: 0.8,
          marginTop: 10
        }}>
          Luxury Shopping Experience
        </p>

        <a href="/shop" style={{
          marginTop: 30,
          padding: "12px 28px",
          border: "1px solid white",
          color: "white",
          textDecoration: "none"
        }}>
          Enter Store
        </a>
      </div>
    </div>
  )
}
