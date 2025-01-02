import { Form, NavLink } from "react-router-dom";
import logomark from "../assets/logomark.svg";
import { TrashIcon } from '@heroicons/react/24/solid'

const Nav = ({ userName }) => {
    return (
        <nav>
            <NavLink to="/" aria-label="Home">
                <img src={logomark} alt="" height={35}/>
                <span>ExpenceApp</span>
            </NavLink>
            {
                userName && (
                    <Form method="post" action="/logout"
                    onSubmit={(event) => {if (!confirm("remove user's data?"))
                    {event.preventDefault()}
                    }}>
                        <button type="submit" className="btn btn--warning">
                            <span>Remove User</span>
                            <TrashIcon width={20} />
                        </button>
                    </Form>
                )
            }
        </nav>
    )
}
export default Nav;