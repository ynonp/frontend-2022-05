const images = [
  'pretty flowers',
  'cute kittens',
  'ugly monster',
  'scary mouse',
];

export default function ImageSelector() {
  return (
    <ul className="image-selector">
      {images.map((imageName, index) => (
        <li key={imageName}>
          <a href="#">{imageName}</a>
        </li>
      ))}
    </ul>
  )
}