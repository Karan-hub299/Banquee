import React from 'react';
import './features.css';

function Features() {
  return (
    <div className="featurecontainer">
        <div className="feature1">ALL FEATURES YOU NEED IN ONE PLACE</div>
        <div className="feature2">
            <div className="feature21">
                <div className="feature211"></div>
                <div className="feature212">Secure Online Banking</div>
            </div>
            <div className="feature22">
                <div className="feature221"></div>
                <div className="feature222">Automatic Bill Payment</div>
            </div>

        </div>
        <div className="feature3">
            <div className="feature31">
                <div className="feature311"></div>
                <div className="feature312">No Hidden Fees</div>
            </div>
            <div className="feature32">
                <div className="feature321"></div>
                <div className="feature322">Card Payments Anytime</div>
            </div>
        </div>

    </div>
  )
}

export default Features