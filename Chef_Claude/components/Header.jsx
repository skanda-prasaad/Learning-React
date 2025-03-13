import cheficon from "../src/assets/chef.png"

export default function Header()
{
    return (
        <header>
            <img src={cheficon} alt="" />
            <h1>Chef Claude</h1>
        </header>
    )
}