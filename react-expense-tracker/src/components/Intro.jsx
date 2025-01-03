import { Form } from "react-router-dom"
import { UserPlusIcon } from "@heroicons/react/24/solid"
import chart from "../assets/chart.jpg"

const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    Take Control of <span className="accent">Your Funds</span>
                </h1>
                <p>
                    Controlling your spendings is key, Start now.
                </p>
                <Form method="post">
                    <input 
                    type="text" 
                    name="userName" 
                    required 
                    placeholder="Write your name!"
                    aria-label="Your Name"
                    />
                    <input type="hidden" name="_action" value="newUser"/>
                    <button type="submit" className="btn btn--dark">
                        <span>Create Account</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
            <img src={chart} alt="" width={600}/>
        </div>
    )
}
export default Intro;