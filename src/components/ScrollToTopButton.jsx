import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true); // Show button if scrolled more than 100vh
      } else {
        setIsVisible(false); // Hide button if scrolled less than 100vh
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const styles = {
    button: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#FFCC00',
      color: 'black',
      border: 'none',
      
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '18px',
    },
  };

  return (
    <div>
      {isVisible && (
        <button  style={styles.button} onClick={scrollToTop}>
          <i class="ri-arrow-up-s-line font-bold"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
