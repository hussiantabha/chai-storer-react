import React, { useContext, useEffect, useState } from "react";
import { NavBar } from "../Components/Nav";
import { FilterContext } from "../Context/Context";

const Wishlist = () => {
  const { userLoggedIn } = useContext(FilterContext);
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
  };
  useEffect(() => {
    getData();
  }, []);
  const count = wishlist.length;
  return (
    <>
      <NavBar />
      {userLoggedIn ? (
        <main>
          <h1 className="wishlist-display-title">My Wishlist</h1>
          <section className="wishlist-card-container">
            {wishlist.length > 0 ? (
              wishlist.map((product) => {
                return (
                  <>
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
                  </>
                );
              })
            ) : (
              <h2>No Items in Wishlist</h2>
            )}
          </section>
        </main>
      ) : (
        <h1>User Not Logged In</h1>
      )}
    </>
  );
};

export default Wishlist;
