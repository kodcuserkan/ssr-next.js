import React, { useEffect } from "react";

const DesktopCard = ({deviceType}) => {


  console.log("desktop page deviceType: ", deviceType);
  

  useEffect(() => {
    const article = document.querySelector("article");

    const { x, y, width, height } = article.getBoundingClientRect();
    const cx = x + width / 2;
    const cy = y + height / 2;

    function handleMove(e) {
      const { pageX, pageY } = e;

      const dx = (cx - pageX) / (width / 2);
      const dy = (cy - pageY) / (height / 2);

      this.style.transform = `rotateX(${10 * dy * -1}deg) rotateY(${
        10 * dx
      }deg)`;
    }

    function handleOut() {
      this.style.transform = "initial";
    }

    article.addEventListener("mousemove", handleMove);
    article.addEventListener("mouseout", handleOut);
    return () => {
      article.removeEventListener("mousemove", handleMove);
      article.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <div className="desktop-card">
      <article className="article">
        <figure className="figure">
          <img className="img"
            alt="A rather marvellous macaw, opening one of its wings to support the cause."
            src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </figure>

        <div className="div">
          <p className="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            repellat, consequuntur doloribus voluptate esse iure?
          </p>
          <h1 className="h1">Marvellous Macaw</h1>
        </div>
      </article>
    </div>
  );
};

export default DesktopCard;
