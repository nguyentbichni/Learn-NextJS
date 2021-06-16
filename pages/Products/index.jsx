import React from 'react';
import { connect } from 'react-redux';

import { getProductList } from '../../redux/actions';
import Gnavi from '../../components/Gnavi'

function Products (props){
    const {productList, getList} = props;
    const renderProduct = () => {
        return productList.map((item, index) => (
            <>
                <p>{item.title}</p>
            </>
    ))
    }
    return(
        <div>
            <Gnavi />
            <p>Products Page</p>
            {renderProduct()}
        </div>
    )
}

const mapStateToProps = (state) => {
    const { productList } = state;
    return {
        productList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
         getList: (params) => dispatch(getProductList(params)),
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);