const MainContent = () => {
  const articles = [
    {
      id: 1,
      image: "img/blog1.png",
      alt: "Earth-Vision Reality TV. ",
      title: "Why I still Watch Earth-Vision Reality TV",
      datePosted: "October 15, 2018",
      content:
        "Lots of my Alien friends have moved on from Earth-Vision Reality TV. I hear the same complaints all the time - its too repetitive, there aren’t enough abductions, our plants in high level governments are too obvious. Blah-blah-blah. You know what I say? They are just setting the stage for the next big chapter, and I can’t wait...",
    },
    {
      id: 2,
      image: "img/blog2.png",
      alt: "Proper UFO Maintenance. ",
      title: "Proper UFO Maintenance",
      datePosted: "October 5, 2018",
      content:
        "Flying around the galaxy is all well and good, but if you’ve ever found yourself stranded in the middle of an anti-matter cloud for a few millennia, you’ll start wishing you had cared better for your UFO. Here are my top tricks to keep yourself at light speed.",
    },
  ];

  return (
    <section>
      {articles.map((post) => (
        <article key={post.id}>
          <img src={post.image} alt={post.alt} />
          <h2>{post.title}</h2>
          <p className="posted">{post.datePosted}</p>
          <p>{post.content}</p>
          <p>
            <a href={`blog.html${post.id}`}>Read more</a>
          </p>
        </article>
      ))}
    </section>
  );
};
