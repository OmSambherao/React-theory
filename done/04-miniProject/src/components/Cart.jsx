import React from 'react';
import { Bookmark } from 'lucide-react';

function Cart( props ) {
  return (
    <div className="cart">
      <div className="top">
        <img
          src={props.url}
          alt="Company Logo"
        />
        <button>
          <Bookmark />
          Save
        </button>
      </div>
      <div className="middle">
        <h3>{props.name} <span>in San Francisco, CA</span></h3>
        <h1>Senior Frontend Engineer, Mobile</h1>
      </div>
      <div className="bottom">
        <h1>$150k - $250k</h1>
        <button>apply now</button>
      </div>
    </div>
  );
}

export default Cart;