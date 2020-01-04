const users = [
  {
    no: 1,
    id: "id1",
    pw: "pw1"
  },
  {
    no: 2,
    id: "id2",
    pw: "pw2"
  },
  {
    no: 3,
    id: "id3",
    pw: "pw3"
  }
];

const resolvers = {
  Query: {
    user: () => users[0],
    users: () => users
  }
};

export default resolvers;
