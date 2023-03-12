const rssParser = (xmlString) => {
  const data = {
    feed: {
      title: '',
      description: '',
    },
    posts: [],
  };
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
  data.feed.title = xmlDoc.querySelector('title').textContent;
  data.feed.description = xmlDoc.querySelector('description').textContent;
  const items = xmlDoc.querySelectorAll('item');
  items.forEach((item) => {
    const post = {
      title: '',
      link: '',
      description: '',
    };
    post.title = item.querySelector('title').textContent;
    post.link = item.querySelector('link').textContent;
    post.description = item.querySelector('description').textContent;
    data.posts.push(post);
  });
  return data;
};

export default rssParser;