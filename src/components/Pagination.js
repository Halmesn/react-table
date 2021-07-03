export default function Pagination({ resultsPerPage, totalItems }) {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalItems / resultsPerPage);

  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  const renderedPagination = pageNumbers.map((number) => (
    <li key={number}>
      <a href="/#">{number}</a>
    </li>
  ));

  return (
    <nav>
      <ul>{renderedPagination}</ul>
    </nav>
  );
}
