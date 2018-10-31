import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchByUniqueCoin } from '../action';


class GraficCoin extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchByUniqueCoin(id);
    }

    render() {
        const { altcoin } = this.props
        if (!altcoin) {
            return <div>Loading....</div>
        }
        console.log(altcoin)
        return (
            <div>
                <div className="card border-primary mb-3 text-center">
                    <div className="card-header">{altcoin.id}</div>
                    <div className="card-body text-primary">
                        <h4 className="card-title">{altcoin.id}</h4>
                        <p className="card-text">Prezzo euro attuale : {altcoin.price_eur} €</p>
                        <p className="card-text">Monete minate : {altcoin.total_supply} </p>
                    </div>
                </div>
            </div>
        )
    }

}
function mapStateToProps({ altcoin }, owsProps) {
    return { altcoin: altcoin[owsProps.match.params.id] }
}


export default connect(mapStateToProps, { fetchByUniqueCoin })(GraficCoin);