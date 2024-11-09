const AppFooter = () => {
  const socials = [1, 2, 3, 4, 5, 6, 7];

  return (
    <footer>
      <p>Legal disclaimer, copyright, etc.</p>
      <ul>
        {socials.map((num) => (
          <li key={num}>
            <a href="#">
              <img src={`img/icon${num}.png`} alt={`Social Media ${num}.`} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
