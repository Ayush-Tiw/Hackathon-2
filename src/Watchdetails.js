import * as React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Button from '@mui/material/Button';

export function Watchdetails() {

    const watch = {
        image: "https://th.bing.com/th/id/OIP.KwwLDLT8hYWTEuLUR5FrUQHaFj?pid=ImgDet&rs=1",
        brand: "Timex",
        summary: "Men Sport Watch High-end Silicone Strap Military Wrist Watch Led Calendar Waterproof Digital Watch Kids Watch KIDS SPORTS WATCH Digital Watch - For Boys & Girls Digital Watch - For Boys",
        price: "₹ 450",
        display:"Analog",
        occassion:"Casual",
        watchType:"wrist watch",
        dialColor:"whte,blue",
        waterResistant:"yes"
    };

    return (
        <div>
            <div className="watch-container">
                <div>
                    <img className="watch-image" src={watch.image} alt="Image not loading"></img>
                    <div className="action-button">
                        <Button style={{ backgroundColor: "#ff752317", color: "black", margin: "10px" }} variant="outlined" startIcon={<AddShoppingCartIcon />}>
                            Add to cart
                        </Button>
                        <Button style={{ backgroundColor: "#ff7523", color: "white" }} variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}>
                            Buy Now
                        </Button>
                    </div>
                </div>
                <div className="watch-specs">
                    <h3 className="watch-brand">{watch.brand}</h3>
                    <p>{watch.summary}</p>
                    <h2>{watch.price}</h2>
                </div>
            </div>
            <div className="product-details">
                <table className="details-table">
                    <h2>Product Details</h2>
                    <tr>
                        <td className="key-color">{watch}</td>
                        <td className="bold-data">Analog</td>
                    </tr>
                    <tr>
                        <td className="key-color">Display Type</td>
                        <td className="bold-data">Analog</td>
                    </tr>
                    <tr>
                        <td className="key-color">Display Type</td>
                        <td className="bold-data">Analog</td>
                    </tr>
                    <tr>
                        <td className="key-color">Display Type</td>
                        <td className="bold-data">Analog</td>
                    </tr>
                </table>
            </div>
        </div>);
}
