const BlogItem = ({ date, title, shortDescription, image }) => {
  return (
    <article className="space-y-8">
      <img src={image} alt={title} />
      <div className="space-y-3">
        <span className="text-sm font-medium text-primary-2/75">{date}</span>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-primary-2/75">{shortDescription}</p>
        <a href="" className="block pt-5">
          Selengkapnya &rarr;
        </a>
      </div>
    </article>
  );
};

export default BlogItem;
