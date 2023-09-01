import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";
import SuggestedPosts from "./container/SuggestedPosts";
import { CommentContainer } from "../../components/comments/CommentContainer";
import SocialShareButtons from "../../components/SocialShareButtons";

const BreadCrumbsData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Article Title",
    link: "/blog/1",
  },
];

const postsData = [
  {
    _id: 1,
    image: images.post1,
    title: "Help children get better education",
    createdAt: "2021-08-21T18:30:00.000Z",
    category: "Education",
    tags: ["Education", "Children", "School"],
  },
  {
    _id: 2,
    image: images.post1,
    title: "Help children get better education",
    createdAt: "2021-08-12T18:30:00.000Z",
    category: "Education",
    tags: ["Education", "Children", "School"],
  },
  {
    _id: 3,
    image: images.post1,
    title: "Help children get better education",
    createdAt: "2021-08-01T18:30:00.000Z",
    category: "Education",
    tags: ["Education", "Children", "School"],
  },
  {
    _id: 4,
    image: images.post1,
    title: "Help children get better education",
    createdAt: "2021-08-03 T18:30:00.000Z",
    category: "Education",
    tags: ["Education", "Children", "School"],
  },
];

// creating tags var of 12 items

const tags = [
  "mathematics",
  "science",
  "history",
  "literature",
  "programming",
  "geography",
  "language",
  "psychology",
  "biology",
  "physics",
];

function ArticleDetailPage() {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:items-start lg:gap-x-5">
        <article className="flex-1">
          <BreadCrumbs data={BreadCrumbsData} />
          <img
            src={images.post1}
            alt="Post Image"
            className="rounded-xl w-full "
          />
          <Link
            to="/blog?category=selectedCtegory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin.
            </p>
          </div>
          <CommentContainer className="mt-10" loggedinUserId="a" />
        </article>
        <div>
          {/* Last articles section with tags */}
          <SuggestedPosts
            header="Latest Article"
            posts={postsData}
            tags={tags}
            className="mt-8 lg:mt-0 lg:max-w-xs "
          />
          <div className="mt-7">
            <h2 className="font-robot font-medium text-dark-hard mb-4 md:text-xl">
              Share on :
            </h2>
            <SocialShareButtons
              url={encodeURI("https://github.com/raouffilali")}
              title={encodeURIComponent("Abderraouf Filali's Github")}
              
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ArticleDetailPage;
