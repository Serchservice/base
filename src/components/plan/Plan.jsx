import { Icon } from "@iconify/react"
import "./plan.css"

const Plan = ({
    plan = {
        "image": "",
        "name": "",
        "subtitle": "",
        "amount": "",
        "color": "",
        "duration": "",
        "benefits": [""],
        "subPlans": [
            {
                "period": "",
                "discount": "",
                "amount": ""
            }
        ]
    }
}) => {
    return (
        <div className="plan-body" style={{ backgroundColor: `#${ plan.color }`}}>
            <div className="plan-header">
                <img alt={ plan.name } src={ plan.image } className="plan-header-image" />
                <h1 className="plan-header-text">{ plan.name }</h1>
                { (plan.amount !== "" && plan.duration !== "") && (
                    <div className="plan-header-text-unique">
                        <h1 className="plan-header-text-unique-amount">{ plan.amount }</h1>
                        <span className="plan-header-text-unique-duration">/{ plan.duration }</span>
                    </div>
                ) }
                { (plan.amount === "" && plan.duration === "") && (
                    <p className="plan-header-subtitle">{ plan.subtitle }</p>
                ) }
                <div className="plan-benefits">
                    {
                        plan.benefits.map((value, key) => {
                            return (
                                <div className="plan-benefit-mark" key={ key }>
                                    <div className="plan-benefit-check">
                                        <Icon icon="tabler:check" className="plan-benefit-checked"/>
                                    </div>
                                    <label className="plan-benfit">{ value }</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            { (plan.subPlans !== null && plan.subPlans !== undefined && plan.subPlans.length !== 0) && (
                <div className="plan-sub-plans">
                    {
                        plan.subPlans.map((value, key) => {
                            return (
                                <div className="plan-sub-plan" key={ key }>
                                    <div className="plan-sub-plan-header">
                                        <label className="plan-sub-plan-period">{ value.period }</label>
                                    </div>
                                    <h1 className="plan-sub-plan-discount">{ value.discount }</h1>
                                    <h1 className="plan-sub-plan-amount">{ value.amount }</h1>
                                </div>
                            )
                        })
                    }
                </div>
            ) }
        </div>
    )
}

export default Plan