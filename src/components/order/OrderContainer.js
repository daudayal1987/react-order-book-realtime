import { Component } from 'react';
import { connect } from 'react-redux';

class OrderContainer extends Component {
    constructor(props) {
        super(props);
        this.BOOK = { BIDS: [], ASKS: [] };
    }

    transformBook() {
        let transformedBook = { BIDS: [], ASKS: [] };
        ['BIDS', 'ASKS'].forEach(key => {
            for (let idx in this.props.book[key]) {
                transformedBook[key].push(this.props.book[key][idx]);
            }
        });
        this.BOOK = transformedBook;
    }

    sortBook() {
        for (let key of ['BIDS', 'ASKS']) {
            this.BOOK[key].sort((obj1, obj2)=>{
                return obj1.total < obj2.total ? -1 : 1;
            })
        }
    }

    render() {
        this.transformBook();
        this.sortBook();

        return (
            <div className="body-container">
                <div className="bid-container inner">
                    <div className="header">
                        <span className="col align-center">Count</span>
                        <span className="col align-right">Amount</span>
                        <span className="col align-right">Total</span>
                        <span className="col align-right">Price</span>
                    </div>
                    <div className="chart-container">
                        <svg width="100%" height={(this.BOOK.BIDS.length + 1) * 18 + 'px'} style={{ transform: "scale(-1, 1)" }}>
                            {this.BOOK.BIDS.map((bid, index) => {
                                return (
                                    <rect key={bid.price} x="1" y={index * 18} width="100%" height="18px" style={{
                                        transform: "scaleX(" + (bid.total / Math.max(this.BOOK.BIDS[this.BOOK.BIDS.length - 1].total, 10)) + ")"
                                    }}></rect>
                                )
                            })}
                        </svg>
                    </div>
                    <div className="rows">
                        {this.BOOK.BIDS.map(bid => {
                            return (
                                <div key={bid.price} className="order-row">
                                    <span className="col align-center">{bid.count}</span>
                                    <span className="col align-right">{bid.amount.toFixed(2)}</span>
                                    <span className="col align-right">{bid.total.toFixed(3)}</span>
                                    <span className="col align-right">{bid.price}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="ask-container inner">
                    <div className="header">
                        <span className="col align-right">Price</span>
                        <span className="col align-right">Total</span>
                        <span className="col align-right">Amount</span>
                        <span className="col align-center">Count</span>
                    </div>
                    <div className="chart-container">
                        <svg width="100%" height={(this.BOOK.ASKS.length + 1) * 18 + 'px'} style={{ transform: "scale(1, 1)" }}>
                            {this.BOOK.ASKS.map((ask, index) => {
                                return (
                                    <rect key={ask.price} x="1" y={index * 18} width="100%" height="18px" style={{
                                        transform: "scaleX(" + (ask.total / Math.max(this.BOOK.ASKS[this.BOOK.ASKS.length - 1].total, 10)) + ")"
                                    }}></rect>
                                )
                            })}
                        </svg>
                    </div>
                    <div className="rows">
                        {this.BOOK.ASKS.map(ask => {
                            return (
                                <div key={ask.price} className="order-row">
                                    <span className="col align-right">{ask.price}</span>
                                    <span className="col align-right">{ask.total.toFixed(3)}</span>
                                    <span className="col align-right">{ask.amount.toFixed(2)}</span>
                                    <span className="col align-center">{ask.count}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.order.BOOK
    }
}
export default connect(mapStateToProps)(OrderContainer);