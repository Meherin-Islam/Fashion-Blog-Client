import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";

const WishList = () => {
    const {user} = UseAuth();
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/wishlist?email=${user.email}`)
            .then(res => res.json())
            .then(data => setList(data))
    }, [user.email])
    return (
        <div>
            <h2 className="text-2xl ">Wishlist:{list.length}</h2>
        </div>
    );
};

export default WishList;