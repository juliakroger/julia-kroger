const SciFiOrb = () => (
  <div className="orbital-system" aria-hidden="true">
    <div className="orbital-label orbital-label--top">
      <span>CORE / JK-01</span>
      <span>ROT 24.8°</span>
    </div>
    <div className="orbital-crosshair orbital-crosshair--x" />
    <div className="orbital-crosshair orbital-crosshair--y" />
    <div className="orbital-ring orbital-ring--one" />
    <div className="orbital-ring orbital-ring--two" />
    <div className="orbital-ring orbital-ring--three" />
    <div className="orbital-planet">
      <span className="orbital-scan" />
      <span className="orbital-contour orbital-contour--one" />
      <span className="orbital-contour orbital-contour--two" />
      <span className="orbital-contour orbital-contour--three" />
    </div>
    <div className="orbital-node orbital-node--one" />
    <div className="orbital-node orbital-node--two" />
    <div className="orbital-label orbital-label--bottom">
      <span>SYSTEM STATUS</span>
      <strong>ONLINE</strong>
    </div>
  </div>
);

export default SciFiOrb;
