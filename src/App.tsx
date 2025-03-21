import HeaderText from "./components/HeaderText";
import LinkButton from "./components/LinkButton";
import PayPal from "./svgs/PayPal";

const App: React.FC = () => {

  return (
    <div className="bg-[#020202] h-screen flex flex-col">
      <header className="p-4 flex justify-between bg-gradient-to-b from-[#0A111E] from-80% to-[#0a111e00]">
        <h1 className="text-[#F3F3F3] text-4xl">issu.money</h1>
        <h1 className="text-[#F3F3F3] text-4xl">TODO Mode Switch</h1>
      </header>
        <HeaderText text="GASFA"/>
        <LinkButton icon={<PayPal fill="#F3F3F3"/>} text="Test"/>
    </div>
  )
}

export default App;