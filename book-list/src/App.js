import './App.css'

const bookImages = [
  'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/610O4MLOT2L._AC_UL200_SR200,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/71EEdvsvd1L._AC_UL200_SR200,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/812F2oVcq5L._AC_UL200_SR200,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/81GeAcdMCsL._AC_UL200_SR200,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/81Hn5oQmOKL._AC_UL200_SR200,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/81LYYbsEPeL._AC_UL200_SR200,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/71-vtv87CvL._AC_UL200_SR200,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/71AIzioFxTL._AC_UL200_SR200,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/91imiYtCBTL._AC_UL200_SR200,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/71Ks%2B8mKq2L._AC_UL200_SR200,200_.jpg',
]

const bookTitles = [
  'A Promised land',
  'Greenlights',
  'Interesting Stories for curious people',
  'Difficult Riddles For Smart Kids',
  'Humans',
  'If Animals Kissed Goodnight',
  'The Times Machine',
  'Becoming',
  'The Vanishing Half',
  'The Bluest Eye',
  'I Am Confident',
  'The UnOfficial Harry Potter cookbook',
  'The Deep End'
]

const authors = [
  'Barack Obama',
  'Matthew McConaughey',
  'Bill O\'Neil',
  'M. Prefontaine',
  'Brandon Stanton',
  'Ann Whitford',
  'Danica McKellar',
  'Michelle Obama',
  'Brit Bennet',
  'Toni Morrison',
  'Hopscotch Girls',
  'Dinah Bucholz',
  'Jiff Kinney'
]

function App() {

  let info = []

  // create an array of objects where each object contains the info for each listing
  for (let i = 0; i < bookImages.length; i++){
    const listing = {
      imageURL: bookImages[i],
      title: bookTitles[i],
      author: authors[i]
    }
    info.push(listing)
  }

  return (
      <div>{
        info.map((value, index) => {
          return <Book key={index} book={value} />
        })
        }
      </div>
  );
}

function Book(props) {
  const { imageURL, title, author} = props.book
  return (
    <div className='book-listing'>
      <img src={imageURL}/>
      <h3>{title}</h3>
      <h5>{author}</h5>
    </div>
  )
}

export default App;
