import React from 'react';
import { useHistory } from 'react-router-dom';

export const SellerNav = () => {

    const history = useHistory();



    function goToMarketPlace(){
        history.push('/marketplace');
    }

    return (
        <div>
            <nav>
                <a></a>
                <a onClick={goToMarketPlace}>Marketplace</a>
                <a>Logout</a>
            </nav>


        </div>
    )
}