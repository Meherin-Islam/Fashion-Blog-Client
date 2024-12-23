import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pic from '../../assets/picn.jpg'

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <div className="newsletter-section bg-orange-800" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
     
      <div className="newsletter-left" style={{ flex: 1 }}>
        <h2 className='text-5xl text-white font-bold mb-3'>Subscribe to Our Newsletter</h2>
        <p className='text-white font-semibold mb-4'>Stay updated with the latest news and updates from us.</p>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{ padding: '10px', width: '80%', marginBottom: '10px' }}
          />
          <br />
          <button className='btn text-2xl bg-red-900 rounded-none text-white' type="submit" >
            Subscribe
          </button>
        </form>
      </div>

      
      <div className="newsletter-right" style={{ flex: 1 }}>
        <img src={pic} alt="Newsletter" style={{ width: '80%', height: 'auto' }} />
      </div>

     
      <ToastContainer />
    </div>
  );
};

export default NewsLetter;
