import _ from 'lodash';
import React, { Component } from 'react';
import { fetchCardanoCoin } from '../action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class GraficIndex extends Component {
    componentDidMount() {
        if (!this.props.altcoin || _.isEmpty(this.props.altcoin)) {
            this.props.fetchCardanoCoin();
        }
    }

    renderTbody(data) {
        return _.map(data, altcoin => {
            return (
                <div key={altcoin.id} className="card border-primary mb-3 text-center">
                    <Link to={`/grafic/${altcoin.id}`} >
                        <div className="card-header">{altcoin.id}</div>
                    </Link>
                    <div className="card-body text-primary">
                        <h4 className="card-title">{altcoin.id}</h4>
                        <p className="card-text">Prezzo euro attuale : {altcoin.price_eur} €</p>
                        <p className="card-text">Monete minate : {altcoin.total_supply} </p>
                    </div>
                </div>
            )
        })
    }
    render() {
        const { altcoin } = this.props;
        if (!altcoin) {
            return <div>Loading..</div>
        }
        return (
            <div>
                {this.renderTbody(altcoin)}
            </div>
        )
    }
}

function mapStatetoProps({ altcoin }) {
    return { altcoin }
}
export default connect(mapStatetoProps, { fetchCardanoCoin })(GraficIndex);