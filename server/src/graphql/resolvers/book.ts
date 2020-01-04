const books = [
  {
    title: "book1",
    author: "book1"
  }
];

const resolvers = {
  Query: {
    books: () => books,
    book: () => books[0]
  }
};

export default resolvers;
