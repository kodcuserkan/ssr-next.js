import { createContext, useEffect, useRef, useState } from "react";
import DesktopComponent from "../components/DesktopComponent";
import MobileComponent from "../components/MobileComponent";

export const MainContextProvider = createContext(null);

const HomePage = ({ deviceType }) => {
  const [legalStatementApproved, setLegalStatementApproved] = useState(false);
  const [position, setposition] = useState("Bottom");

  const bottomRef = useRef(null);
  const topRef = useRef(null);

  useEffect(() => {
    const isApproved = localStorage.getItem("legalStatementApproved");
    if (isApproved) {
      setLegalStatementApproved(true);
    } else {
      setLegalStatementApproved(false);
    }
  }, []);

  const approve = () => {
    localStorage.setItem("legalStatementApproved", true);
    setLegalStatementApproved(true);
  };

  let componentToRender;
  const [deviceTypeContext] = useState({
    deviceType: deviceType,
  });

  if (deviceType === "mobile") {
    componentToRender = <MobileComponent />;
  } else {
    componentToRender = <DesktopComponent />;
  }

  return (
    <MainContextProvider.Provider value={deviceTypeContext}>
      <>
        <div className="top-content" ref={topRef} />
        {componentToRender}
        {!legalStatementApproved && <div className="bg-cover"></div>}
        <div
          className={
            "modal-wrapper" + (legalStatementApproved ? " hidden" : " visible")
          }
        >
          <div className="modal-inner">
            <h2>Modal title</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              ducimus eos nemo at quibusdam, earum, rerum provident dolore quod
              quam, tempore cum quidem id. Sint incidunt eligendi maxime,
              corrupti voluptatem fugit tempora nobis inventore repellat
              obcaecati culpa id eaque eius! Accusantium dolorum veritatis rerum
              quasi consequuntur eligendi! Consequuntur dolore est culpa fuga
              minus delectus obcaecati accusamus eius nisi, beatae, magnam
              cupiditate quis! Officia omnis qui excepturi fuga beatae iure quod
              hic molestiae, maxime iusto eligendi ipsa nesciunt sapiente velit
              doloribus voluptate. Possimus porro incidunt at, unde,
              exercitationem distinctio dolores quos ad, doloribus molestias hic
              magni sed dolorem accusamus? Blanditiis nihil commodi omnis
              aliquam ipsum. Recusandae corporis officia aliquid porro
              consectetur similique voluptatum odit voluptas tempora, accusamus
              ipsum excepturi repudiandae voluptate autem quo pariatur animi?
              Aspernatur possimus doloribus assumenda consequuntur quia?
            </p>
            <p>
              Deserunt deleniti quidem excepturi praesentium aliquam. Ad,
              doloribus! Quasi inventore accusamus deserunt ab libero
              necessitatibus repudiandae odit dolores expedita in facere
              consequuntur, qui repellat fugit itaque ipsam! Id temporibus
              deserunt officiis amet consectetur quidebus! Quasi inventore
              accusamus deserunt ab libero necessitatibus repudiandae odit
              dolores expedita in facere consequuntur, qui repellat fugit itaque
              ipsam! Id temporibus deserunt officiis amet consectetur quidebus!
              Quasi inventore accusamus deserunt ab libero necessitatibus
              repudiandae odit dolores expedita in facere consequuntur, qui
              repellat fugit itaque ipsam! Id temporibus deserunt officiis amet
              consectetur quidebus! Quasi inventore accusamus deserunt ab libero
              necessitatibus repudiandae odit dolores expedita in facere
              consequuntur, qui repellat fugit itaque ipsam! Id temporibus
              deserunt officiis amet consectetur quidem nisi esse laudantium
              voluptatem iure, fugit facere explicabo ipsum voluptatum veritatis
              quisquam at aspernatur cupiditate, eum maiores corrupti suscipit
              tempore dolores? Consequuntur perspiciatis soluta, placeat harum
              sapiente, assumenda minima aliquid repellendus delectus, amet modi
              quaerat ex.
            </p>
            <button onClick={approve}>I Accept</button>
          </div>
        </div>
        <div id="bottom-text" ref={bottomRef}>
          <h2>BOTTOM DESCRIPTION</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
            suscipit doloremque nobis error iste at alias possimus corrupti fuga
            veniam molestias tempora sequi, amet doloribus pariatur magnam?
            Repellendus, ratione, maxime numquam quidem, qui earum architecto
            nam necessitatibus veniam quisquam temporibus accusamus aspernatur
            iusto. Ut itaque, aliquam animi consequatur illo dignissimos
            consequuntur, perferendis omnis dolor nostrum recusandae earum sequi
            fugiat cum esse nobis vel enim. Delectus ex dolore facere est minima
            ipsam minus nulla, aliquam, at perferendis reiciendis animi expedita
            unde quisquam ad perspiciatis. Qui corporis fugit sapiente non, at a
            provident vero ipsam excepturi minima. Iusto optio sapiente nobis
            voluptas sunt, delectus repellendus unde nemo nulla veniam
            recusandae quod quisquam ex qui! Iure libero saepe voluptatum magnam
            commodi reiciendis. Deleniti minima blanditiis veritatis neque
            expedita similique doloremque, quasi modi optio placeat facere,
            praesentium aliquid, iure aspernatur voluptatum itaque? Praesentium,
            exercitationem. Sit nulla repellat aperiam eligendi ab officia, sed,
            molestias eum reprehenderit quod aliquam necessitatibus at neque
            ipsam ipsum molestiae. Alias, ipsam? Nulla omnis eum beatae
            obcaecati error laborum nemo fuga iusto voluptatum perspiciatis illo
            provident cumque, ratione numquam facilis necessitatibus magnam
            rerum quia quae. Veritatis sed ea fugit voluptatibus possimus
            voluptatem, iusto accusamus amet vitae distinctio quae fugiat
            doloribus mollitia voluptatum, commodi, reiciendis iste at inventore
            doloremque pariatur temporibus dolores cumque illum. Doloremque
            blanditiis ex harum totam suscipit. Autem quis, nemo quos vero ab
            odit earum cupiditate sequi officiis quibusdam dignissimos hic
            nesciunt. Amet omnis odio molestiae nisi officia enim. Libero
            aperiam atque, magni commodi eum reiciendis nulla odit in. Quibusdam
            reiciendis dolor nisi quis necessitatibus quidem dolore architecto
            maiores harum qui, excepturi ab nulla impedit quas quod explicabo
            voluptatibus, repellendus aut atque recusandae corporis. Vitae
            dolore ipsum sed corporis architecto tempora ratione repellat quis
            explicabo mollitia quisquam fuga reiciendis, provident culpa quasi
            ea sequi? Dicta error obcaecati blanditiis nulla?
          </p>
        </div>
        <button
          className="position-button"
          onClick={() => {
            position === "Bottom" &&
              bottomRef.current.scrollIntoView({ behavior: "smooth" });
            position === "Top" &&
              topRef.current.scrollIntoView({ behavior: "smooth" });
            setposition(position === "Bottom" ? "Top" : "Bottom");
          }}
        >
          Go to {position}
        </button>
      </>
    </MainContextProvider.Provider>
  );
};

export async function getServerSideProps(context) {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
    },
  };
}

export default HomePage;
