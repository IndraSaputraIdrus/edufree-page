import BlogItem from "./BlogItem";
import Container from "./Container";

import blogs from "../data/blogs";

const Blog = () => {
  return (
    <section>
      <Container>
        <div className="pt-8 pb-28">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-semibold">Blog, Berita dan Event</h2>
            <a href="">Lihat Semua &rarr;</a>
          </div>
          <div className="grid grid-cols-3 gap-11">
            {blogs.map((item) => (
              <BlogItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
