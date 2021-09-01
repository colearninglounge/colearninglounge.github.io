const RecentBlogCard = ({ post }) => {
  const postDate = post.pubDate.split(" ")[0];
  const calculateDays = (pastDate) => {
    const prevDate = new Date(pastDate.replaceAll("-", "/"));
    return Math.floor(
      Math.round(new Date().getTime() - prevDate.getTime()) / (1000 * 3600 * 24)
    );
  };

  const openLinkInNewTab = (link) => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      onClick={() => openLinkInNewTab(post.guid)}
      className="min-w-80 text-left bg-white rounded-md overflow-hidden shadow-xl cursor-pointer"
    >
      <div className="rounded-t-md overflow-hidden relative">
        <img
          src={post.thumbnail}
          alt="event"
          className="h-48 max-h-48 w-full object-cover"
        />
      </div>
      <div className="py-6 px-4">
        <div className="flex justify-between items-center text-socialHandle">
          <h5 className="flex items-center uppercase text-xs">
            {post.categories[0]}
          </h5>
          <h5 className="flex items-center text-xs">
            {/* {post.pubDate ? calculateDays(postDate) : 21} days ago */}
            21 days ago
          </h5>
        </div>
        <div className="mt-3">
          <h3 className="text-blackAlt text-lg leading-tight font-medium">
            {post.title}
          </h3>
          <h4
            className="text-gray-600 mt-2 leading-relaxed text-sm"
            dangerouslySetInnerHTML={{ __html: post.description }}
          >
            {/* {post.description} */}
          </h4>
        </div>
        <div className="flex justify-between items-center mt-8 text-primary">
          <div className="flex items-center space-x-3">
            <img
              src="/images/projectAvatar1.png"
              className="w-8 border-2 border-white rounded-full"
              alt="avatar"
            />
            <h5>{post.author}</h5>
          </div>
          <h5>15 min read</h5>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogCard;
