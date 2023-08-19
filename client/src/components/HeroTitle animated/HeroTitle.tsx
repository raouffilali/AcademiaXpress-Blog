import './HeroTitles.css'

function HeroTitle() {
  return (
    <div className="wrapper ">
      <div className="static-text font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:max-w-[540px]">
        Read the most interesting{" "}
      </div>
      <ul className="dynamic-texts">
        <li>
          <span>Articles</span>
        </li>
        <li>
          <span>Exams</span>
        </li>
        <li>
          <span>Books</span>
        </li>
        <li>
          <span>Notes</span>
        </li>
        <li>
          <span>Projects</span>
        </li>
      </ul>
    </div>



  );
}

export default HeroTitle;
