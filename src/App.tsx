import LinkColumn from "./components/link-column/LinkColumn";
import IconSection from "./components/IconSection";
import Nav from "./components/nav/Nav";
import PayPal from "./svgs/PayPal";
import Icon from "./assets/pfp.jpg";
import Footer from "./components/footer/Footer";
import MovingBackground from "./components/MovingBackground";
import CashApp from "./svgs/CashApp";
import Venmo from "./svgs/Venmo";
import Ad from "./svgs/Ad";
import Roblox from "./svgs/Roblox";
import Youtube from "./svgs/YouTube";
import Browser from "./svgs/Browser";

const App: React.FC = () => {

  return (
    <div className="h-screen flex flex-col select-none overflow-x-hidden items-center">
      
      <Nav siteName="issu.money" />
      <IconSection image={Icon} />

      {/* Links Section */}
      <div className="flex flex-col justify-center xs:w-full md:w-3/4 lg:w-1/2">
        <div className="flex flex-col xl:flex-row justify-center w-full">
          <LinkColumn headerText="have money?" buttons={
            [
              { icon: <PayPal />, text: "PayPal", url: "http://youtube.com" },
              { icon: <CashApp />, text: "Cash App", url: "#" },
              { icon: <Venmo />, text: "Venmo", url: "#" }
            ]
          } />
          <LinkColumn headerText="no money?" buttons={
            [
              { icon: <Ad />, text: "Watch an ad :D", url: "#", subtext: "If you have no ad-blockers", openInNewTab: false },
              { icon: <Roblox />, text: "Play my Roblox Game", url: "#", subtext: "If you have Roblox Premium" },
              { icon: <Youtube />, text: "Watch my YouTube videos", url: "#", subtext: "If you have YouTube Premium" }
            ]
          } />
        </div>
        <LinkColumn
          headerText="In the EU or truly broke?"
          buttons={[{ icon: <Browser />, text: "Check out my site", url: "#", subtext: "(I don't beg as desperately here)" }]}
        />
      </div>

      <Footer />
      <MovingBackground isFlipped={true}/>
      <MovingBackground isFlipped={false}/>
    </div>
  )
}

export default App;