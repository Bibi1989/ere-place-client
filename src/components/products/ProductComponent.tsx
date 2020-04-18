import React, { useState } from "react";
import { Icon, Popup, Grid, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Product, Div } from "./ProductStyle";

const ProductComponent = ({
  products,
  title,
  handleCart,
  handleWishList,
}: any) => {
  const [state, setState] = useState(false);
  return (
    <div>
      <Div>
        <h1 data-aos='fade-left'>{title}</h1>
        <Product className='second-section-mobile'>
          {products !== undefined &&
            products.map((product: any, i: number) => {
              let b: any = [];
              let c: any = JSON.parse(product.image_url) || [];
              c.forEach((a: any) => {
                b.push(a);
              });
              return (
                <div
                  key={product.id}
                  className='second-section-card'
                  data-aos='fade-left'
                  data-aos-delay={(i + 1) * 100}
                >
                  {products.length > 0 ? (
                    <>
                      <div className='second-section-image'>
                        <img
                          src={b !== undefined && b[0]}
                          alt={product.title}
                        />
                        <div className='second-section-overlay'>
                          <div className='overlay-icons'>
                            <div className='cart'>
                              {/* <span>View Product</span> */}
                              <Link to={`/single/${product.id}`}>
                                <Icon name='info'></Icon>
                              </Link>
                            </div>
                            <div className='cart'>
                              <Popup
                                trigger={
                                  <Icon
                                    onClick={() => setState(true)}
                                    name='shopping bag'
                                  ></Icon>
                                }
                                mouseEnterDelay={500}
                                mouseLeaveDelay={500}
                                flowing
                                hideOnScroll
                                on='click'
                              >
                                {state && (
                                  <Grid style={{ padding: "10px" }}>
                                    <Grid.Column textAlign='center'>
                                      <Header as='h4'>{product.title}</Header>
                                      <p>{product.description.slice(0, 25)}</p>
                                      <Grid columns={2}>
                                        <Button
                                          onClick={() => {
                                            handleCart(product);
                                            setState(!state);
                                          }}
                                        >
                                          <Link to='/cart'>Go To Cart</Link>
                                        </Button>
                                        <Button
                                          onClick={() => {
                                            handleCart(product);
                                            setState(false);
                                          }}
                                        >
                                          Continue Shopping
                                        </Button>
                                      </Grid>
                                    </Grid.Column>
                                  </Grid>
                                )}
                              </Popup>
                            </div>
                            <div className='cart'>
                              {/* <span>Add To Wishlist</span> */}
                              <Icon
                                name='heart'
                                onClick={() => handleWishList(product)}
                              ></Icon>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='second-section-detail'>
                        <div className='second-section-content-one'>
                          <p>
                            {product.title.length > 16
                              ? `${product.title.slice(0, 16)}...`
                              : product.title}
                          </p>
                          <p>{product.location.toUpperCase()}</p>
                        </div>
                        <div className='second-section-content-two'>
                          <p>
                            <span>$</span> {product.price}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div>No Products Available</div>
                  )}
                </div>
              );
            })}
        </Product>
      </Div>
    </div>
  );
};

export default ProductComponent;
