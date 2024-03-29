import React, { useContext, useEffect, useState } from "react";
import { NavBar } from "../Components/Nav";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { AppContext } from "../Context/Context";

const Wishlist = () => {
  const { notiDispatch } = useContext(AppContext);
  const [wishlist, setWishlist] = useState([]);
  const token = sessionStorage.getItem("token");
  const getData = async () => {
    const getWishlist = await fetch("/api/user/wishlist", {
      method: "GET",
      headers: {
        authorization: token,
      },
    });
    const convertedJSON = await getWishlist.json();
    setWishlist(convertedJSON.wishlist);
  };
  const deleteWishlist = async (product) => {
    const postData = await fetch(`/api/user/wishlist/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });
    const convertedJSON = await postData.json();
    setWishlist(convertedJSON.wishlist);
    notiDispatch({
      type: "wishlist",
      payload: { wishlistLength: convertedJSON.wishlist.length },
    });
    toast.success("Product Deleted");
  };
  useEffect(() => {
    getData();
  }, []);
  const count = 0;
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <NavBar />
      {token !== null ? (
        <main>
          <h1 className="wishlist-display-title">My Wishlist</h1>
          <section className="wishlist-card-container">
            {wishlist.length > 0 ? (
              wishlist.map((product) => {
                return (
                  <React.Fragment key={product._id}>
                    <div className="wishlist-card">
                      <div className="wishlist-card-img-container">
                        <img
                          src={product.imgURL}
                          alt="Exotic Tea"
                          className="wishlist-card-img"
                        />
                      </div>
                      <div className="wishlist-card-content">
                        <h2 className="card-title">{product.productBrand}</h2>
                        <button
                          className="btn btn-primary wishlist-btn"
                          onClick={() => deleteWishlist(product)}
                        >
                          Delete
                        </button>
                      </div>
                      <button className="btn-primary card-like-btn">
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                  </React.Fragment>
                );
              })
            ) : (
              <h2>No Items in Wishlist</h2>
            )}
          </section>
        </main>
      ) : (
        <section className="follow-section">
          <h2>Please Login/Signup to start saving your favorite Chai</h2>
          <Link to={"/login"}>
            <button className="btn btn-primary">Login</button>
          </Link>
        </section>
      )}
    </>
  );
};

export default Wishlist;
