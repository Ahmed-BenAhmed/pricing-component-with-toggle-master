import { useState } from "react";

const plans = [
    {
        active: false,
        type: "Basic",
        monthPrice: "19.99",
        AnnualPrice: "199.99",
        properties: ["500 GB Storage","2 Users Allowed","Send up to 3 GB"]
    },
    {
        active: true,
        type: "Professional",
        monthPrice: "24.99",
        AnnualPrice: "249.99",
        properties: ["1 TB Storage","5 Users Allowed","Send up to 10 GB"]
    },
    {
        active: false,
        type: "Master",
        monthPrice: "39.99",
        AnnualPrice: "399.99",
        properties: ["2 TB Storage","10 Users Allowed","Send up to 20 GB"]
    }

]

const Toggle = ({value, setValue}) => {
    return <div className={`switch-container ${value ? "checked" : ""}`} onClick={()=>setValue(!value)}>
        <div className="ball"></div>
    </div>
}
function PricingComponent() {
    const [annually, setAnnually] = useState(false)
  return (
    <div className="pricing-component">
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>
        <header>
            <h2> Our Pricing </h2>
            <div className="choice"> Annually <Toggle value={annually} setValue={setAnnually} /> Monthly</div>
        </header>
        <main>
            {plans.map((plan,index)=>(<div key={"plan"+index} className={plan.active ? "plan active": "plan"}>
                <h3 className="type">{plan.type}</h3>
                <span className="price">{annually ? plan.AnnualPrice : plan.monthPrice}</span>
                <ul className="proprties">
                    {plan.properties.map((prop,index2)=>(<li className="prop" key={"prop"+index2}>
                    {prop}
                    </li>))}
                </ul>
                <a href="#" className="btn">LEARN MORE</a>
            </div>))}
        </main>
    </div>
  );
}

export default PricingComponent;
