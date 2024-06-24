import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Modal from 'react-modal';
import axios from 'axios';
import Header from './Header';

Modal.setAppElement('#root'); // To avoid screen readers issues

function RestaurantDetails({ logo, auth }) {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [menu, setMenu] = useState([]);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        async function fetchDetails() {
            try {
                const result = await axios.get(`http://localhost:8080/rest/restaurant/${id}`);
                setDetails(result.data);
            } catch (error) {
                setError('Failed to fetch restaurant details');
                console.error(error);
            }
        }
        fetchDetails();
    }, [id]);

    useEffect(() => {
        async function fetchMenu() {
            try {
                const result = await axios.get(`http://localhost:8080/rest/menu/${id}/menu`);
                setMenu(result.data);
            } catch (error) {
                setError('Failed to fetch menu');
                console.error(error);
            }
        }
        fetchMenu();
    }, [id]);

    const handleClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const totalPages = Math.ceil(menu.length / itemsPerPage);
    const paginatedMenu = menu.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const addToCart = (item) => {
        const existingItemIndex = cart.findIndex(cartItem => cartItem._id === item._id);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity++;
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (item) => {
        setCart(prevCart => prevCart.filter(cartItem => cartItem._id !== item._id));
    };

    const updateQuantity = (item, newQuantity) => {
        setCart(prevCart =>
            prevCart.map(cartItem =>
                cartItem._id === item._id ? { ...cartItem, quantity: newQuantity } : cartItem
            )
        );
    };

    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const amount = calculateTotalAmount();
        if (amount === 0) {
            alert("Please add items to the cart");
            return;
        }

        const options = {
            key: "rzp_test_3v1mKDY2COfe7n",
            key_secret: "HFvmVGk8GE0Mjf5HK7TamjdP",
            amount: amount * 100,
            currency: "INR",
            name: "Zomoto-clone",
            description: "for testing purpose",
            handler: function(response) {
                alert(response.razorpay_payment_id);
            },
            prefill: {
                name: "Srikanth",
                email: "srikanthravi6222@gmail.com",
                contact: "6380158098"
            },
            notes: {
                address: "Razorpay Corporate office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        const pay = new window.Razorpay(options);
        pay.open();
    };

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!details) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <div className="restaurant-details">
                <Carousel>
                    {details.thumb.map((image, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <img src={image} alt={`food-${index}`} className="carousel-image" />
                            <p className="legend">Image {index + 1}</p>
                        </div>
                    ))}
                </Carousel>
                <div className='flex justify-end'>
                    <button onClick={handleClick} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Order Now
                    </button>
                </div>
                <div className="details-content mt-4">
                    <Tabs>
                        <TabList>
                            <Tab>Restaurant</Tab>
                            <Tab>Contact</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="flex justify-between p-8">
                                <div>
                                    <h2 className="text-2xl font-bold">{details.name}</h2>
                                    <p className="mt-2">Minimum price: {details.min_price}</p>
                                    <p className="mt-1">Review: {details.rating_text}</p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="p-8">
                                <h2 className="text-xl font-semibold">Cuisines</h2>
                                <p className="mt-2">{details.cuisine.map(c => c.name).join(", ")}</p>
                                <h2 className="text-xl font-semibold mt-4">Contact Number</h2>
                                <p className="mt-2">{details.contact_number}</p>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Order Now Modal"
                    className="fixed inset-0 flex items-center justify-center p-4 bg-white rounded-lg shadow-lg outline-none"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                >
                    <div className="bg-white p-3 rounded-lg shadow-lg w-max">
                        <h2 className="text-2xl font-bold mb-4">Order Now</h2>
                        <div className="mb-4">
                            {menu.length > 0 ? (
                                <>
                                    <ul className="">
                                        {paginatedMenu.map((item, index) => (
                                            <div key={index} className="mt-2">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <h1>{item.name}</h1>
                                                        <p>Price: &#8377; {item.price}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => addToCart(item)}
                                                        className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded ml-4"
                                                    >
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </ul>
                                    <div className="flex justify-between mt-4">
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
                                        >
                                            Previous
                                        </button>
                                        <span className="text-gray-700">
                                            Page {currentPage} of {totalPages}
                                        </span>
                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <p>No menu items available</p>
                            )}
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">Cart</h2>
                            {cart.length > 0 ? (
                                <table className="w-max">
                                    <thead>
                                        <tr className='border'>
                                            <th className='border p-2'>Name</th>
                                            <th className='border'>Quantity</th>
                                            <th className='border'>Total</th>
                                            <th className='border'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={index}>
                                                <td className=' border px-2'>{item.name}</td>
                                                <td className=' border px-2'>{item.quantity}</td>
                                                <td className=' border px-2'>&#8377; {item.price * item.quantity}</td>
                                                <td className=' border px-2'>
                                                    <div className="flex  px-2 py-4">
                                                        <button
                                                            onClick={() => updateQuantity(item, item.quantity - 1)}
                                                            className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded mr-2"
                                                            disabled={item.quantity === 1}
                                                        >
                                                            -
                                                        </button>
                                                        <button
                                                            onClick={() => updateQuantity(item, item.quantity + 1)}
                                                            className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded mr-2"
                                                        >
                                                            +
                                                        </button>
                                                        <button
                                                            onClick={() => removeFromCart(item)}
                                                            className="bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>Your cart is empty</p>
                            )}
                            {cart.length > 0 && (
                                <div className="mt-4 text-xl font-bold">
                                    Total Amount: 
                                    &#8377; {calculateTotalAmount()}
                                </div>
                            )}
                            <div className='flex justify-between'>
                                <button onClick={closeModal} className="mt-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                                    Close
                                </button>
                                <button onClick={handleSubmit} className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    💰 Pay &#8377; {calculateTotalAmount()}
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
}

export default RestaurantDetails;
