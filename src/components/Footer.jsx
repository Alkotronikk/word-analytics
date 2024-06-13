export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <small>&copy; Copyright {year}.</small>
      <small>Last checked limits: 17 days ago</small>
    </footer>
  );
}
