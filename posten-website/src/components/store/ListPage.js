import Posts from "./Posts";

const ListPage = ({ searchResult }) => {
  const results = searchResult.map((post) => (
    <Posts key={post.id} post={post} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Posts</p>
    </article>
  );

  return <div>{content}</div>;
};

export default ListPage;
