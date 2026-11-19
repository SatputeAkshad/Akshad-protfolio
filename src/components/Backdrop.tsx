// Fixed, softly drifting holographic colour field. The glass panels blur and
// saturate whatever is behind them, so this is what gives them their colour.
export const Backdrop = () => (
  <div className="backdrop" aria-hidden="true">
    <span className="blob b1" />
    <span className="blob b2" />
    <span className="blob b3" />
    <span className="blob b4" />
    <span className="grain" />
  </div>
);
