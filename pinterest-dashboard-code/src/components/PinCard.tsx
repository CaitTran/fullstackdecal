export default function PinCard({ pin }) {
  return (
    <div className="pin-card">
      <img src={pin.image_url} alt={pin.title} />
      <p>{pin.title}</p>
    </div>
  );
}