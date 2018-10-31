import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCardanoCoin, onClickSort } from '../action';

class Init extends Component {
    componentDidMount() {
        if (!this.props.altcoin || _.isEmpty(this.props.altcoin)) {
            this.props.fetchCardanoCoin();
        }
    }

    onClickSortByKey(event) {
        event.preventDefault();
        const values = event.target.getAttribute('data-value');
        this.props.onClickSort(values);
    }

    renderTbody(data) {
        return _.map(data, coin => {
            return (
                <tr key={coin.rank}>
                    <td>
                        <Link to={`/grafic/${coin.id}`}>{coin.id}</Link>
                    </td>
                    <td>{coin.symbol}</td>
                    <td>{coin.rank}</td>
                    <td>{coin.percent_change_1h}</td>
                    <td>{coin.percent_change_24h}</td>
                    <td>{coin.price_eur} €</td>
                </tr>
            )
        })
    }
    render() {
        const { altcoin } = this.props
        return (
            <table className="table">
                <thead>
                    <tr onClick={(event) => this.onClickSortByKey(event)}>
                        <th data-value="id">Coin</th>
                        <th data-value="symbol">Simbolo</th>
                        <th data-value="rank">Rank</th>
                        <th data-value="percent_change_1h"> % Cambio in 1 ora</th>
                        <th data-value="percent_change_24h">% cambio 24 ore</th>
                        <th data-value="price_eur">Prezzo in € <span className="glyphicon glyphicon-arrow-down"></span></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTbody(altcoin)}
                </tbody>
            </table>
        )
    }

}
function mapStateToProps(state) {
    return { altcoin: state.altcoin }
}
export default connect(mapStateToProps, { fetchCardanoCoin, onClickSort })(Init);

/*
    {
        "id": "bitcoin", 
        "name": "Bitcoin", 
        "symbol": "BTC", 
        "rank": "1", 
        "price_usd": "8891.8", 
        "price_btc": "1.0", 
        "24h_volume_usd": "8578510000.0", 
        "market_cap_usd": "151165374897", 
        "available_supply": "17000537.0", 
        "total_supply": "17000537.0", 
        "max_supply": "21000000.0", 
        "percent_change_1h": "0.16", 
        "percent_change_24h": "-1.6", 
        "percent_change_7d": "7.55", 
        "last_updated": "1524772176", 
        "price_eur": "7332.8362732", 
        "24h_volume_eur": "7074474155.74", 
        "market_cap_eur": "124662154377"
    }
    */