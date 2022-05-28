import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import styles from './common.module.css'

function Profile({ user_data, isauth }) {
    if (isauth) {
        return (
            <div className="col-md-4 my-2 my_card mx-auto">
                <div className="card"  style={{marginTop:"30px"}}   >
                    <div className={styles.card_main} >
                        <h1 style={{textAlign:"center"}} >User Details</h1>
                        <img class={styles.center} src="/profile.webp" width="150px" height="150px" alt="user" />
                        <div className="card-body">
                            <p style={{fontSize:"18px", fontWeight:"600"}} className="card-title text-center">Name : {user_data[0].name}</p>
                            <p style={{fontSize:"18px", fontWeight:"600"}} className="card-text text-center">Age : {user_data[0].age}</p>
                            <p style={{fontSize:"18px", fontWeight:"600"}} className="card-text text-center">Email : {user_data[0].email}</p>
                            <p style={{fontSize:"18px", fontWeight:"600"}} className="card-text text-center">Mobile : {user_data[0].mobile}</p>
                            <p style={{fontSize:"18px", fontWeight:"600"}} className="card-text text-center">Address : {user_data[0].address}</p>
                            <hr />

                            <Link to='/' style={{ textDecoration: "none" }}>
                                <button className="text-success btn btn-outline-light mx-auto d-block">
                                    Go to Home
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>
                    Sorry, User didn't login yet
                </h1>
            </div>
        )
    }


}

const mapStateToProps = state => ({
    user_data: state.user.user_data,
    isauth: state.user.isauth
});


export default connect(mapStateToProps, null)(Profile);